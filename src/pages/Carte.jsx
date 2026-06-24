import { useState, useCallback, useEffect, useRef } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { Play, Pause, ChevronLeft, ChevronRight, Globe, Info, Layers, ZoomIn, ZoomOut } from 'lucide-react'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const DEFAULT_FILL = '#D5C9B8'
const OCEAN_COLOR = '#2E6B9E'

// Timeline par pays : { s: startYear, e: endYear, n: name, c: color }
// ISO 3166-1 numeric codes
const TL = {
  '250': [ // France
    { s:-3000, e:-50,  n:'Gaule (peuples gaulois)',                     c:'#8B7355' },
    { s:-50,   e:476,  n:'Gaule romaine',                               c:'#C0392B' },
    { s:476,   e:843,  n:'Royaume franc / Carolingiens',                c:'#4A7C59' },
    { s:843,   e:1792, n:'Royaume de France',                           c:'#2980B9' },
    { s:1792,  e:1804, n:'France — Ire République',                    c:'#5DADE2' },
    { s:1804,  e:1815, n:'France — Ier Empire (Napoléon Ier)',          c:'#4E1E5E' },
    { s:1815,  e:1830, n:'France — Restauration (Louis XVIII/Charles X)',c:'#2980B9' },
    { s:1830,  e:1848, n:'France — Monarchie de Juillet (Louis-Philippe)',c:'#2E86C1' },
    { s:1848,  e:1852, n:'France — IIe République',                    c:'#5DADE2' },
    { s:1852,  e:1870, n:'France — IIe Empire (Napoléon III)',          c:'#7F4000' },
    { s:1870,  e:1940, n:'France — IIIe République',                   c:'#2980B9' },
    { s:1940,  e:1944, n:'France — Vichy / Occupation nazie',           c:'#566573' },
    { s:1944,  e:2025, n:'France (IVe puis Ve République)',             c:'#5DADE2' },
  ],
  '276': [ // Germany
    { s:-3000, e:476,  n:'Tribus germaniques / Frontière romaine',      c:'#884EA0' },
    { s:476,   e:843,  n:'Royaume franc / Carolingiens',                c:'#4A7C59' },
    { s:843,   e:962,  n:'Francie orientale',                          c:'#884EA0' },
    { s:962,   e:1806, n:'Saint-Empire romain germanique',              c:'#884EA0' },
    { s:1806,  e:1815, n:'Confédération du Rhin (Napoléon)',            c:'#4E1E5E' },
    { s:1815,  e:1866, n:'Confédération germanique',                    c:'#884EA0' },
    { s:1866,  e:1871, n:'Confédération de l\'Allemagne du Nord',      c:'#7D3C98' },
    { s:1871,  e:1918, n:'Empire allemand (IIe Reich)',                 c:'#943126'},
    { s:1918,  e:1933, n:'République de Weimar',                        c:'#884EA0' },
    { s:1933,  e:1945, n:'IIIe Reich — Allemagne nazie',               c:'#1A1A1A' },
    { s:1945,  e:1990, n:'RFA / RDA (Allemagne divisée)',               c:'#884EA0' },
    { s:1990,  e:2025, n:'Allemagne réunifiée',                         c:'#884EA0' },
  ],
  '826': [ // UK
    { s:-3000, e:-50,  n:'Tribus celtes britaniques',                   c:'#A9CCE3' },
    { s:-50,   e:410,  n:'Bretagne romaine',                            c:'#C0392B' },
    { s:410,   e:1066, n:'Royaumes anglo-saxons',                       c:'#A9CCE3' },
    { s:1066,  e:1707, n:'Royaume d\'Angleterre',                       c:'#C2185B' },
    { s:1707,  e:1801, n:'Royaume de Grande-Bretagne',                  c:'#C2185B' },
    { s:1801,  e:1922, n:'Empire britannique',                          c:'#C2185B' },
    { s:1922,  e:2025, n:'Royaume-Uni',                                 c:'#C2185B' },
  ],
  '380': [ // Italy
    { s:-3000, e:-509, n:'Peuples italiques (Étrusques, Latins...)',    c:'#27AE60' },
    { s:-509,  e:-27,  n:'République romaine',                          c:'#E74C3C' },
    { s:-27,   e:476,  n:'Empire romain',                               c:'#C0392B' },
    { s:476,   e:1861, n:'États italiens (cités, papauté, royaumes...)',c:'#27AE60' },
    { s:1861,  e:1922, n:'Royaume d\'Italie',                           c:'#27AE60' },
    { s:1922,  e:1943, n:'Italie fasciste (Mussolini)',                 c:'#4E1E5E'},
    { s:1943,  e:2025, n:'République italienne',                        c:'#27AE60' },
  ],
  '724': [ // Spain
    { s:-3000, e:-218, n:'Peuples ibériques / Carthage',               c:'#8B7355' },
    { s:-218,  e:409,  n:'Hispanie romaine',                            c:'#C0392B' },
    { s:409,   e:711,  n:'Royaume wisigoth',                            c:'#884EA0' },
    { s:711,   e:1086, n:'Al-Andalus (califat Omeyyade / Taïfas)',      c:'#F1C40F' },
    { s:1086,  e:1147, n:'Al-Andalus almoravide',                       c:'#E67E22' },
    { s:1147,  e:1212, n:'Al-Andalus almohade',                         c:'#16A085' },
    { s:1212,  e:1479, n:'Royaumes chrétiens (Reconquista)',            c:'#E74C3C' },
    { s:1479,  e:1808, n:'Espagne (Habsbourg / Bourbons)',              c:'#E74C3C' },
    { s:1808,  e:1813, n:'Espagne (Joseph Bonaparte / guerre)',         c:'#4E1E5E' },
    { s:1813,  e:1931, n:'Royaume d\'Espagne',                          c:'#E74C3C' },
    { s:1931,  e:1939, n:'IIe République espagnole',                    c:'#E74C3C' },
    { s:1939,  e:1975, n:'Espagne franquiste',                          c:'#922B21' },
    { s:1975,  e:2025, n:'Royaume d\'Espagne (démocratie)',             c:'#D68910' },
  ],
  '620': [ // Portugal
    { s:-3000, e:-139, n:'Lusitanie (berbères / celtes)',                c:'#27AE60' },
    { s:-139,  e:409,  n:'Lusitanie romaine',                           c:'#C0392B' },
    { s:409,   e:711,  n:'Royaume wisigoth',                            c:'#884EA0' },
    { s:711,   e:1139, n:'Comté du Portugal (Reconquista)',             c:'#B7950B' },
    { s:1139,  e:1580, n:'Royaume du Portugal (empire maritime)',        c:'#B7950B' },
    { s:1580,  e:1640, n:'Union ibérique (Portugal + Espagne)',         c:'#E74C3C' },
    { s:1640,  e:1910, n:'Royaume du Portugal',                         c:'#B7950B' },
    { s:1910,  e:2025, n:'Portugal (République / Estado Novo / démocratie)', c:'#B7950B' },
  ],
  '040': [ // Austria
    { s:-3000, e:476,  n:'Norique / Empire romain',                     c:'#C0392B' },
    { s:476,   e:962,  n:'Marche carolingienne',                        c:'#4A7C59'},
    { s:962,   e:1804, n:'Saint-Empire (Habsbourg)',                    c:'#E67E22' },
    { s:1804,  e:1867, n:'Empire d\'Autriche',                          c:'#E67E22' },
    { s:1867,  e:1918, n:'Autriche-Hongrie',                            c:'#E67E22' },
    { s:1918,  e:1938, n:'République d\'Autriche',                      c:'#E67E22' },
    { s:1938,  e:1945, n:'Autriche annexée au IIIe Reich (Anschluss)',  c:'#1A1A1A' },
    { s:1945,  e:2025, n:'République d\'Autriche',                      c:'#E67E22' },
  ],
  '348': [ // Hungary
    { s:-3000, e:896,  n:'Pannonie / invasions',                        c:'#E67E22' },
    { s:896,   e:1526, n:'Royaume de Hongrie',                          c:'#E67E22' },
    { s:1526,  e:1699, n:'Hongrie partagée (Ottomans / Habsbourg)',     c:'#D4AC0D' },
    { s:1699,  e:1867, n:'Hongrie (Habsbourg)',                         c:'#E67E22' },
    { s:1867,  e:1918, n:'Autriche-Hongrie',                            c:'#E67E22' },
    { s:1918,  e:1945, n:'Royaume de Hongrie',                          c:'#E67E22' },
    { s:1945,  e:1989, n:'Hongrie (bloc soviétique)',                    c:'#7B241C' },
    { s:1989,  e:2025, n:'Hongrie',                                     c:'#7D3C98' },
  ],
  '616': [ // Poland
    { s:-3000, e:966,  n:'Tribus slaves (Polanes)',                     c:'#A93226' },
    { s:966,   e:1569, n:'Royaume de Pologne',                          c:'#A93226' },
    { s:1569,  e:1795, n:'République des Deux Nations (Pologne-Lituanie)',c:'#A93226' },
    { s:1795,  e:1807, n:'Pologne partagée (Prusse / Russie / Autriche)',c:'#884EA0' },
    { s:1807,  e:1815, n:'Duché de Varsovie (Napoléon)',                c:'#4E1E5E' },
    { s:1815,  e:1918, n:'Pologne — domination russe/prussienne',       c:'#884EA0' },
    { s:1918,  e:1939, n:'République de Pologne',                       c:'#A93226' },
    { s:1939,  e:1945, n:'Pologne — occupation nazie/soviétique',       c:'#1A1A1A' },
    { s:1945,  e:1989, n:'Pologne (bloc soviétique)',                    c:'#7B241C' },
    { s:1989,  e:2025, n:'République de Pologne',                       c:'#A93226' },
  ],
  '643': [ // Russia
    { s:-3000, e:862,  n:'Steppes / tribus slaves orientales',          c:'#8E44AD' },
    { s:862,   e:1240, n:'Rus\' de Kiev',                               c:'#6C3483' },
    { s:1240,  e:1480, n:'Principautés russes (joug mongol)',           c:'#884EA0' },
    { s:1480,  e:1547, n:'Grand-duché de Moscovie',                     c:'#7D3C98' },
    { s:1547,  e:1721, n:'Tsarat de Russie',                            c:'#8E44AD' },
    { s:1721,  e:1917, n:'Empire russe',                                c:'#8E44AD' },
    { s:1917,  e:1922, n:'Russie — Révolution / Guerre civile',        c:'#C0392B' },
    { s:1922,  e:1991, n:'URSS (Union soviétique)',                     c:'#7B241C' },
    { s:1991,  e:2025, n:'Fédération de Russie',                        c:'#E91E63' },
  ],
  '804': [ // Ukraine
    { s:-3000, e:862,  n:'Steppes / Scythes / Sarmates',               c:'#F4D03F' },
    { s:862,   e:1240, n:'Rus\' de Kiev (cœur)',                        c:'#6C3483' },
    { s:1240,  e:1569, n:'Horde d\'Or / Grand-Duché de Lituanie',      c:'#7D3C98' },
    { s:1569,  e:1654, n:'Pologne-Lituanie (Ukraine)',                  c:'#A93226' },
    { s:1654,  e:1917, n:'Empire russe (Ukraine)',                      c:'#8E44AD' },
    { s:1917,  e:1920, n:'République populaire ukrainienne',            c:'#F4D03F' },
    { s:1920,  e:1991, n:'RSS d\'Ukraine (URSS)',                       c:'#7B241C' },
    { s:1991,  e:2025, n:'Ukraine indépendante',                        c:'#F4D03F' },
  ],
  '112': [ // Belarus
    { s:-3000, e:1569, n:'Grand-Duché de Lituanie',                     c:'#27AE60' },
    { s:1569,  e:1795, n:'République des Deux Nations',                 c:'#A93226' },
    { s:1795,  e:1917, n:'Empire russe (Biélorussie)',                  c:'#8E44AD' },
    { s:1917,  e:1991, n:'RSS de Biélorussie (URSS)',                   c:'#7B241C' },
    { s:1991,  e:2025, n:'Biélorussie',                                 c:'#839192' },
  ],
  '440': [ // Lithuania
    { s:-3000, e:1236, n:'Tribus baltes',                               c:'#27AE60' },
    { s:1236,  e:1569, n:'Grand-Duché de Lituanie',                     c:'#27AE60' },
    { s:1569,  e:1795, n:'République des Deux Nations',                 c:'#A93226' },
    { s:1795,  e:1918, n:'Empire russe (Lituanie)',                     c:'#8E44AD' },
    { s:1918,  e:1940, n:'République de Lituanie',                      c:'#27AE60' },
    { s:1940,  e:1990, n:'RSS de Lituanie (URSS)',                      c:'#7B241C' },
    { s:1990,  e:2025, n:'Lituanie indépendante',                       c:'#C8A800' },
  ],
  '428': [ // Latvia
    { s:-3000, e:1237, n:'Tribus baltes (Lettons)',                     c:'#922B21' },
    { s:1237,  e:1795, n:'Ordre de Livonie / Pologne / Suède',         c:'#884EA0' },
    { s:1795,  e:1918, n:'Empire russe (Lettonie)',                     c:'#8E44AD' },
    { s:1918,  e:1940, n:'République de Lettonie',                      c:'#922B21' },
    { s:1940,  e:1991, n:'RSS de Lettonie (URSS)',                      c:'#7B241C' },
    { s:1991,  e:2025, n:'Lettonie indépendante',                       c:'#922B21' },
  ],
  '233': [ // Estonia
    { s:-3000, e:1219, n:'Tribus estoniennes',                          c:'#2E86C1' },
    { s:1219,  e:1710, n:'Danemark / Chevaliers / Suède (Estland)',     c:'#F1C40F' },
    { s:1710,  e:1918, n:'Empire russe (Estonie)',                      c:'#8E44AD' },
    { s:1918,  e:1940, n:'République d\'Estonie',                       c:'#2E86C1' },
    { s:1940,  e:1991, n:'RSS d\'Estonie (URSS)',                       c:'#7B241C' },
    { s:1991,  e:2025, n:'Estonie indépendante',                        c:'#2E86C1' },
  ],
  '300': [ // Greece
    { s:-3000, e:-146, n:'Grèce ancienne (cités-États)',                c:'#3498DB' },
    { s:-146,  e:330,  n:'Grèce romaine',                               c:'#C0392B' },
    { s:330,   e:1453, n:'Empire byzantin',                             c:'#8E44AD' },
    { s:1453,  e:1829, n:'Grèce ottomane',                              c:'#D4AC0D' },
    { s:1829,  e:2025, n:'République hellénique',                       c:'#3498DB' },
  ],
  '100': [ // Bulgaria
    { s:-3000, e:395,  n:'Thrace / Empire romain',                      c:'#C0392B' },
    { s:395,   e:681,  n:'Empire byzantin',                             c:'#8E44AD' },
    { s:681,   e:1018, n:'Premier Empire bulgare',                      c:'#E74C3C' },
    { s:1018,  e:1185, n:'Empire byzantin',                             c:'#8E44AD' },
    { s:1185,  e:1396, n:'Second Empire bulgare',                       c:'#E74C3C' },
    { s:1396,  e:1878, n:'Bulgarie ottomane',                           c:'#D4AC0D' },
    { s:1878,  e:2025, n:'Bulgarie',                                    c:'#5D6D7E' },
  ],
  '642': [ // Romania
    { s:-3000, e:106,  n:'Dacie / Gètes',                               c:'#E74C3C' },
    { s:106,   e:275,  n:'Dacie romaine',                               c:'#C0392B' },
    { s:275,   e:1859, n:'Valachie / Moldavie / Transylvanie',         c:'#E74C3C' },
    { s:1859,  e:2025, n:'Roumanie',                                    c:'#D35400' },
  ],
  '191': [ // Croatia
    { s:-3000, e:925,  n:'Illyricum / Dalmatie (Rome / Byzance)',       c:'#27AE60' },
    { s:925,   e:1918, n:'Croatie (Royaume / Habsbourg)',               c:'#E67E22' },
    { s:1918,  e:1991, n:'Yougoslavie',                                 c:'#2E86C1' },
    { s:1991,  e:2025, n:'Croatie indépendante',                        c:'#CB4335' },
  ],
  '705': [ // Slovenia
    { s:-3000, e:1918, n:'Carinthie / Styrie (Saint-Empire / Autriche)',c:'#E67E22' },
    { s:1918,  e:1991, n:'Yougoslavie',                                 c:'#2E86C1' },
    { s:1991,  e:2025, n:'Slovénie indépendante',                       c:'#A569BD' },
  ],
  '688': [ // Serbia
    { s:-3000, e:1217, n:'Balkans (Byzance / tribus slaves)',           c:'#8E44AD' },
    { s:1217,  e:1389, n:'Royaume de Serbie',                           c:'#8E44AD' },
    { s:1389,  e:1878, n:'Serbie ottomane',                             c:'#D4AC0D' },
    { s:1878,  e:1918, n:'Royaume de Serbie',                           c:'#8E44AD' },
    { s:1918,  e:1991, n:'Yougoslavie',                                 c:'#2E86C1' },
    { s:1991,  e:2025, n:'Serbie',                                      c:'#A04000' },
  ],
  '203': [ // Czech Republic
    { s:-3000, e:1620, n:'Bohême / Grande Moravie',                     c:'#C0392B' },
    { s:1620,  e:1918, n:'Bohême (Habsbourg)',                          c:'#E67E22' },
    { s:1918,  e:1939, n:'Tchécoslovaquie',                             c:'#C0392B' },
    { s:1939,  e:1945, n:'Protectorat de Bohême-Moravie (IIIe Reich)', c:'#1A1A1A' },
    { s:1945,  e:1993, n:'Tchécoslovaquie',                             c:'#C0392B' },
    { s:1993,  e:2025, n:'République tchèque',                          c:'#5499C7' },
  ],
  '528': [ // Netherlands
    { s:-3000, e:1581, n:'Pays-Bas (Carolingiens / Habsbourg)',         c:'#F0B27A' },
    { s:1581,  e:1795, n:'Provinces-Unies (République)',                c:'#F0B27A' },
    { s:1795,  e:1813, n:'République batave / Hollande napoléonienne', c:'#4E1E5E'},
    { s:1813,  e:2025, n:'Royaume des Pays-Bas',                        c:'#F0B27A' },
  ],
  '056': [ // Belgium
    { s:-3000, e:1795, n:'Pays-Bas méridionaux (Habsbourg)',            c:'#E67E22' },
    { s:1795,  e:1815, n:'Belgique annexée à la France',               c:'#4E1E5E'},
    { s:1815,  e:1830, n:'Royaume des Pays-Bas (uni)',                  c:'#F0B27A' },
    { s:1830,  e:2025, n:'Royaume de Belgique',                         c:'#E59866' },
  ],
  '756': [ // Switzerland
    { s:-3000, e:1291, n:'Confédération / Saint-Empire',               c:'#E74C3C' },
    { s:1291,  e:1798, n:'Confédération helvétique (ancienne)',         c:'#E74C3C' },
    { s:1798,  e:1815, n:'République helvétique (satellite napoléonien)',c:'#4E1E5E' },
    { s:1815,  e:2025, n:'Confédération suisse (neutre)',               c:'#CB4335' },
  ],
  '752': [ // Sweden
    { s:-3000, e:1397, n:'Suède médiévale',                             c:'#F1C40F' },
    { s:1397,  e:1523, n:'Union de Kalmar',                             c:'#F1C40F' },
    { s:1523,  e:1809, n:'Empire suédois (grande puissance nordique)',  c:'#F1C40F' },
    { s:1809,  e:2025, n:'Royaume de Suède',                            c:'#F1C40F' },
  ],
  '208': [ // Denmark
    { s:-3000, e:1397, n:'Danemark médiéval',                           c:'#C0392B' },
    { s:1397,  e:1814, n:'Union de Kalmar / Danemark-Norvège',          c:'#C0392B' },
    { s:1814,  e:2025, n:'Royaume du Danemark',                         c:'#7B241C' },
  ],
  '578': [ // Norway
    { s:-3000, e:1397, n:'Norvège médiévale (vikings)',                  c:'#27AE60' },
    { s:1397,  e:1814, n:'Danemark-Norvège',                            c:'#C0392B' },
    { s:1814,  e:1905, n:'Norvège — Union avec la Suède',              c:'#F1C40F' },
    { s:1905,  e:2025, n:'Royaume de Norvège',                          c:'#1F618D' },
  ],
  '246': [ // Finland
    { s:-3000, e:1249, n:'Tribus finnoises',                            c:'#2E86C1' },
    { s:1249,  e:1809, n:'Finlande suédoise',                           c:'#F1C40F' },
    { s:1809,  e:1917, n:'Grand-duché de Finlande (Empire russe)',      c:'#8E44AD' },
    { s:1917,  e:2025, n:'Finlande indépendante',                       c:'#117864' },
  ],
  // ─── MOYEN-ORIENT ───
  '792': [ // Turkey/Anatolia
    { s:-3000, e:-550, n:'Anatolie (Hittites, Lydiens...)',             c:'#E67E22' },
    { s:-550,  e:-334, n:'Empire perse achéménide',                     c:'#E74C3C' },
    { s:-334,  e:-30,  n:'Royaumes hellénistiques (Séleucides...)',     c:'#3498DB' },
    { s:-30,   e:395,  n:'Anatolie romaine',                            c:'#C0392B' },
    { s:395,   e:1071, n:'Empire byzantin',                             c:'#8E44AD' },
    { s:1071,  e:1299, n:'Sultanat de Roum (Seldjoukides)',             c:'#E67E22' },
    { s:1299,  e:1923, n:'Empire ottoman',                              c:'#D4AC0D' },
    { s:1923,  e:2025, n:'République de Turquie',                       c:'#C0392B' },
  ],
  '818': [ // Egypt
    { s:-3000, e:-332, n:'Égypte pharaonique',                          c:'#E67E22' },
    { s:-332,  e:-30,  n:'Égypte ptolémaïque',                          c:'#3498DB' },
    { s:-30,   e:641,  n:'Égypte romaine / byzantine',                  c:'#C0392B' },
    { s:641,   e:969,  n:'Égypte arabe (Rashidun → Abbassides)',        c:'#D4AC0D' },
    { s:969,   e:1171, n:'Califat fatimide',                            c:'#C8A800' },
    { s:1171,  e:1250, n:'Sultanat ayyoubide (Saladin)',                c:'#E67E22' },
    { s:1250,  e:1517, n:'Sultanat mamelouk',                           c:'#E67E22' },
    { s:1517,  e:1798, n:'Égypte ottomane',                             c:'#D4AC0D' },
    { s:1798,  e:1801, n:'Campagne d\'Égypte (Napoléon)',              c:'#4E1E5E'},
    { s:1801,  e:1952, n:'Égypte (khédivat / protectorat britannique)',c:'#C2185B' },
    { s:1952,  e:2025, n:'République arabe d\'Égypte',                  c:'#D4AC0D' },
  ],
  '368': [ // Iraq/Mesopotamia
    { s:-3000, e:-539, n:'Mésopotamie (Sumer, Akkad, Babylone, Assyrie)',c:'#D4AC0D' },
    { s:-539,  e:-330, n:'Empire perse (Babylonie)',                    c:'#E74C3C' },
    { s:-330,  e:636,  n:'Hellénistiques / Parthes / Sassanides',       c:'#E67E22' },
    { s:636,   e:1258, n:'Califat arabe → abbasside (Bagdad capitale)', c:'#D4AC0D' },
    { s:1258,  e:1534, n:'Mongols / Ilkhanat / Jalayirides',            c:'#95A5A6' },
    { s:1534,  e:1918, n:'Empire ottoman (Irak)',                        c:'#D4AC0D' },
    { s:1918,  e:1958, n:'Mandat britannique / Royaume d\'Irak',        c:'#C2185B' },
    { s:1958,  e:2025, n:'République d\'Irak',                          c:'#CA6F1E' },
  ],
  '364': [ // Iran/Persia
    { s:-3000, e:-550, n:'Médias / Élam / Perse ancienne',              c:'#E67E22' },
    { s:-550,  e:-330, n:'Empire perse achéménide',                     c:'#E74C3C' },
    { s:-330,  e:-247, n:'Perse hellénistique (Séleucides)',            c:'#3498DB' },
    { s:-247,  e:224,  n:'Empire parthe',                               c:'#E67E22' },
    { s:224,   e:651,  n:'Empire sassanide',                            c:'#E67E22' },
    { s:651,   e:1219, n:'Perse islamique (Buyides, Seldjoukides...)', c:'#D4AC0D' },
    { s:1219,  e:1500, n:'Perse mongole (Ilkhanat / Timourides)',       c:'#95A5A6' },
    { s:1500,  e:1722, n:'Empire safavide',                             c:'#E74C3C' },
    { s:1722,  e:1925, n:'Perse (Afsharides / Qadjars)',               c:'#E67E22' },
    { s:1925,  e:1979, n:'Iran (Pahlavi)',                              c:'#27AE60' },
    { s:1979,  e:2025, n:'République islamique d\'Iran',               c:'#4D8B35' },
  ],
  '760': [ // Syria
    { s:-3000, e:-333, n:'Aram / Phénicie / Perse (Syrie)',            c:'#E67E22' },
    { s:-333,  e:64,   n:'Syrie séleucide / hellénistique',            c:'#3498DB' },
    { s:64,    e:636,  n:'Syrie romaine / byzantine',                  c:'#C0392B' },
    { s:636,   e:1098, n:'Califats arabes (Omeyyades → Abbassides)',   c:'#D4AC0D' },
    { s:1098,  e:1187, n:'États croisés (Principauté d\'Antioche)',    c:'#C0392B' },
    { s:1187,  e:1516, n:'Ayyoubides / Mamelouks',                    c:'#E67E22' },
    { s:1516,  e:1920, n:'Empire ottoman (Syrie)',                      c:'#D4AC0D' },
    { s:1920,  e:1943, n:'Mandat français de Syrie',                    c:'#2980B9'},
    { s:1943,  e:2025, n:'République syrienne',                        c:'#9A7D0A' },
  ],
  '376': [ // Israel/Palestine
    { s:-3000, e:-63,  n:'Canaan / Israël / Judée / Nabatéens',        c:'#D4AC0D' },
    { s:-63,   e:395,  n:'Judée romaine',                               c:'#C0392B' },
    { s:395,   e:636,  n:'Palestine byzantine',                         c:'#8E44AD' },
    { s:636,   e:1099, n:'Palestine musulmane',                         c:'#D4AC0D' },
    { s:1099,  e:1187, n:'Royaume de Jérusalem (croisé)',              c:'#C0392B' },
    { s:1187,  e:1516, n:'Mamelouks',                                   c:'#E67E22' },
    { s:1516,  e:1917, n:'Palestine ottomane',                          c:'#D4AC0D' },
    { s:1917,  e:1948, n:'Mandat britannique de Palestine',             c:'#C2185B' },
    { s:1948,  e:2025, n:'Israël / Territoires palestiniens',          c:'#3498DB' },
  ],
  '275': [ // Palestinian territories
    { s:-3000, e:-63,  n:'Canaan / Judée',                             c:'#D4AC0D' },
    { s:-63,   e:636,  n:'Judée romaine / Palestine byzantine',        c:'#C0392B' },
    { s:636,   e:1099, n:'Palestine arabe',                             c:'#D4AC0D' },
    { s:1099,  e:1187, n:'Royaume de Jérusalem (croisé)',              c:'#C0392B' },
    { s:1187,  e:1917, n:'Mamelouks → Empire ottoman',                 c:'#D4AC0D' },
    { s:1917,  e:1948, n:'Mandat britannique de Palestine',             c:'#C2185B' },
    { s:1948,  e:2025, n:'Territoires palestiniens',                    c:'#D4AC0D' },
  ],
  '422': [ // Lebanon
    { s:-3000, e:-64,  n:'Phénicie (Sidon, Tyr, Byblos)',              c:'#C0392B' },
    { s:-64,   e:636,  n:'Phénicie romaine / byzantine',               c:'#C0392B' },
    { s:636,   e:1098, n:'Liban arabe (Omeyyades / Abbassides)',        c:'#D4AC0D' },
    { s:1098,  e:1291, n:'Comté de Tripoli (croisé)',                  c:'#C0392B' },
    { s:1291,  e:1516, n:'Mamelouks (Liban)',                           c:'#E67E22' },
    { s:1516,  e:1918, n:'Liban ottoman',                               c:'#D4AC0D' },
    { s:1918,  e:1943, n:'Grand Liban (mandat français)',               c:'#2980B9'},
    { s:1943,  e:2025, n:'République libanaise',                        c:'#C0392B' },
  ],
  '400': [ // Jordan
    { s:-3000, e:-63,  n:'Ammon / Moab / Édom / Nabatéens',            c:'#D4AC0D' },
    { s:-63,   e:636,  n:'Arabie romaine / byzantine',                  c:'#C0392B' },
    { s:636,   e:1516, n:'Arabie arabe (Omeyyades → Mamelouks)',        c:'#D4AC0D' },
    { s:1516,  e:1918, n:'Syrie ottomane',                              c:'#D4AC0D' },
    { s:1918,  e:1946, n:'Transjordanie (mandat britannique)',          c:'#C2185B' },
    { s:1946,  e:2025, n:'Jordanie',                                    c:'#839192' },
  ],
  '682': [ // Saudi Arabia
    { s:-3000, e:622,  n:'Arabie ancienne (Saba, Himyar, Nabatéens)', c:'#D4AC0D' },
    { s:622,   e:1517, n:'Arabie islamique (Califats → Mamelouks)',    c:'#D4AC0D' },
    { s:1517,  e:1902, n:'Arabie ottomane / 1er État saoudien',        c:'#D4AC0D' },
    { s:1902,  e:1932, n:'3e État saoudien (Ibn Séoud)',               c:'#27AE60' },
    { s:1932,  e:2025, n:'Arabie Saoudite',                             c:'#1D8348' },
  ],
  '887': [ // Yemen
    { s:-3000, e:628,  n:'Arabie du Sud (Saba / Himyar)',              c:'#D4AC0D' },
    { s:628,   e:1517, n:'Yémen islamique (Ziyadides, Rasulides...)', c:'#D4AC0D' },
    { s:1517,  e:1918, n:'Yémen ottoman',                               c:'#D4AC0D' },
    { s:1918,  e:2025, n:'Yémen (Nord / Sud → unifié)',                c:'#AF601A' },
  ],
  // ─── MAGHREB ───
  '504': [ // Morocco
    { s:-3000, e:40,   n:'Maurétanie tingitane (Berbères)',             c:'#C0392B' },
    { s:40,    e:429,  n:'Maurétanie romaine',                          c:'#C0392B' },
    { s:429,   e:700,  n:'Royaumes berbères / Vandales',                c:'#884EA0' },
    { s:700,   e:789,  n:'Conquête islamique (Omeyyades)',              c:'#D4AC0D' },
    { s:789,   e:974,  n:'Idrisides (1er État islamique marocain)',     c:'#D4AC0D' },
    { s:974,   e:1062, n:'Zénètes / Berbères indépendants',            c:'#C8A800' },
    { s:1062,  e:1147, n:'Empire almoravide (Marrakech fondée)',        c:'#E67E22' },
    { s:1147,  e:1269, n:'Empire almohade',                             c:'#16A085' },
    { s:1269,  e:1465, n:'Mérinides',                                   c:'#C0392B' },
    { s:1465,  e:1549, n:'Wattasides',                                  c:'#C0392B' },
    { s:1549,  e:1666, n:'Sultanat saadien',                            c:'#F48FB1' },
    { s:1666,  e:1912, n:'Chérifat alaouite (Maroc)',                   c:'#C0392B' },
    { s:1912,  e:1956, n:'Protectorat franco-espagnol',                 c:'#5B3A2E'},
    { s:1956,  e:2025, n:'Royaume du Maroc',                            c:'#A93226' },
  ],
  '012': [ // Algeria
    { s:-3000, e:-146, n:'Numidie berbère',                             c:'#E67E22' },
    { s:-146,  e:429,  n:'Afrique romaine',                             c:'#C0392B' },
    { s:429,   e:700,  n:'Vandale / Byzance',                           c:'#884EA0' },
    { s:700,   e:1062, n:'Califats arabes / Aghlabides / Fatimides',   c:'#D4AC0D' },
    { s:1062,  e:1147, n:'Empire almoravide',                           c:'#E67E22' },
    { s:1147,  e:1269, n:'Empire almohade',                             c:'#16A085' },
    { s:1269,  e:1516, n:'Zyanides / Hafsides',                        c:'#C8A800' },
    { s:1516,  e:1830, n:'Régence d\'Alger (Ottoman)',                  c:'#D4AC0D' },
    { s:1830,  e:1848, n:'Algérie — Monarchie de Juillet',              c:'#2E86C1' },
    { s:1848,  e:1852, n:'Algérie — IIe République française',         c:'#5DADE2' },
    { s:1852,  e:1870, n:'Algérie — Second Empire',                    c:'#7F4000' },
    { s:1870,  e:1940, n:'Algérie — IIIe République française',        c:'#2980B9' },
    { s:1940,  e:1944, n:'Algérie — Régime de Vichy',                  c:'#566573' },
    { s:1944,  e:1962, n:'Algérie — IVe République française',         c:'#5DADE2' },
    { s:1962,  e:2025, n:'République algérienne',                       c:'#16A085' },
  ],
  '788': [ // Tunisia
    { s:-3000, e:-146, n:'Carthage (Phéniciens)',                       c:'#8E44AD' },
    { s:-146,  e:429,  n:'Afrique romaine (Carthage puis Cherchell)', c:'#C0392B' },
    { s:429,   e:700,  n:'Vandale / Byzance',                           c:'#884EA0' },
    { s:700,   e:1147, n:'Aghlabides / Fatimides / Zïrides',           c:'#D4AC0D' },
    { s:1147,  e:1229, n:'Empire almohade',                             c:'#16A085' },
    { s:1229,  e:1574, n:'Hafsides',                                    c:'#C8A800' },
    { s:1574,  e:1881, n:'Régence de Tunis (Ottoman)',                  c:'#D4AC0D' },
    { s:1881,  e:1956, n:'Protectorat français de Tunisie',            c:'#2980B9'},
    { s:1956,  e:2025, n:'Tunisie indépendante',                        c:'#BDC3C7' },
  ],
  '434': [ // Libya
    { s:-3000, e:-74,  n:'Cyrénaïque / Tripolitaine (Grecs, Berbères)',c:'#E67E22' },
    { s:-74,   e:429,  n:'Afrique romaine',                             c:'#C0392B' },
    { s:429,   e:700,  n:'Vandale / Byzance',                           c:'#884EA0' },
    { s:700,   e:1510, n:'Califats / Fatimides / Hafsides / Ottomans', c:'#D4AC0D' },
    { s:1510,  e:1911, n:'Tripolitaine ottomane',                       c:'#D4AC0D' },
    { s:1911,  e:1951, n:'Libye italienne',                             c:'#27AE60' },
    { s:1951,  e:2025, n:'Libye',                                       c:'#7F8C8D' },
  ],
  // 732 (Sahara occidental) → délégué au Maroc (504) dans getTerritoryAtYear
  // ─── AFRIQUE SUB-SAHARIENNE ───
  '231': [ // Ethiopia
    { s:-3000, e:940,  n:'Royaume d\'Axoum',                            c:'#196F3D' },
    { s:940,   e:1270, n:'Royaume zagwé',                               c:'#196F3D' },
    { s:1270,  e:1974, n:'Empire d\'Éthiopie (Salomonides)',            c:'#196F3D' },
    { s:1974,  e:1991, n:'Éthiopie (Derg — régime militaire)',          c:'#C0392B' },
    { s:1991,  e:2025, n:'République d\'Éthiopie',                      c:'#196F3D' },
  ],
  '466': [ // Mali
    { s:-3000, e:1235, n:'Empire du Ghana',                             c:'#D4AC0D' },
    { s:1235,  e:1468, n:'Empire du Mali (Mansa Moussa)',               c:'#E67E22' },
    { s:1468,  e:1591, n:'Empire Songhaï',                              c:'#196F3D' },
    { s:1591,  e:1666, n:'Mali — Sultanat saadien',                     c:'#F48FB1' },
    { s:1666,  e:1890, n:'Mali — Chérifat alaouite',                   c:'#C0392B' },
    { s:1890,  e:1960, n:'Soudan français (colonie)',                   c:'#2980B9' },
    { s:1960,  e:2025, n:'République du Mali',                          c:'#E67E22' },
  ],
  '686': [ // Senegal
    { s:-3000, e:1235, n:'Royaume de Tekrour / Jolof',                  c:'#D4AC0D' },
    { s:1235,  e:1886, n:'Sphère de l\'empire du Mali / royaumes Wolof',c:'#E67E22' },
    { s:1886,  e:1960, n:'Sénégal français',                            c:'#2980B9' },
    { s:1960,  e:2025, n:'République du Sénégal',                       c:'#82E0AA' },
  ],
  '566': [ // Nigeria
    { s:-3000, e:1804, n:'Royaumes yoruba, Bénin, Kanem-Bornou',        c:'#E67E22' },
    { s:1804,  e:1903, n:'Califat de Sokoto',                           c:'#D4AC0D' },
    { s:1903,  e:1960, n:'Nigeria britannique',                         c:'#C2185B' },
    { s:1960,  e:2025, n:'République fédérale du Nigeria',              c:'#1ABC9C' },
  ],
  '710': [ // South Africa
    { s:-3000, e:1488, n:'Peuples Khoisan / Bantous',                   c:'#27AE60' },
    { s:1488,  e:1806, n:'Cap (colonie néerlandaise VOC)',              c:'#F0B27A' },
    { s:1806,  e:1910, n:'Cap (Empire britannique)',                     c:'#C2185B' },
    { s:1910,  e:2025, n:'Afrique du Sud (Union / apartheid / démocratie)',c:'#196F3D' },
  ],
  '288': [ // Ghana
    { s:-3000, e:1700, n:'Peuples Akan / Ga-Adangbe',                  c:'#E67E22' },
    { s:1700,  e:1874, n:'Empire ashanti',                              c:'#D4AC0D' },
    { s:1874,  e:1957, n:'Côte-de-l\'Or britannique',                   c:'#C2185B' },
    { s:1957,  e:2025, n:'Ghana indépendant',                           c:'#76D7C4' },
  ],
  '729': [ // Sudan
    { s:-3000, e:350,  n:'Nubie / Koush / Méroé',                      c:'#196F3D' },
    { s:350,   e:1500, n:'Royaumes nubiens chrétiens puis islamiques', c:'#D4AC0D' },
    { s:1500,  e:1820, n:'Sultanat Funj',                               c:'#D4AC0D' },
    { s:1820,  e:1956, n:'Soudan anglo-égyptien',                       c:'#C0392B' },
    { s:1956,  e:2025, n:'Soudan',                                      c:'#FAD7A0' },
  ],
  // ─── ASIE ───
  '156': [ // China
    { s:-3000, e:-221, n:'Chine des dynasties (Shang, Zhou)',           c:'#27AE60' },
    { s:-221,  e:-206, n:'Empire Qin (unification)',                    c:'#196F3D' },
    { s:-206,  e:220,  n:'Empire Han',                                  c:'#27AE60' },
    { s:220,   e:580,  n:'Chine divisée (Trois Royaumes / Six Dynasties)',c:'#52BE80' },
    { s:580,   e:907,  n:'Dynasties Sui / Tang',                        c:'#27AE60' },
    { s:907,   e:960,  n:'Cinq Dynasties (fragmentation)',              c:'#52BE80' },
    { s:960,   e:1271, n:'Empire Song',                                  c:'#27AE60' },
    { s:1271,  e:1368, n:'Empire mongol Yuan',                          c:'#95A5A6' },
    { s:1368,  e:1644, n:'Empire Ming',                                 c:'#27AE60' },
    { s:1644,  e:1912, n:'Empire Qing (mandchou)',                      c:'#27AE60' },
    { s:1912,  e:1949, n:'République de Chine',                         c:'#E74C3C' },
    { s:1949,  e:2025, n:'République populaire de Chine',               c:'#C0392B' },
  ],
  '392': [ // Japan
    { s:-3000, e:710,  n:'Japon préhistorique / Yamato',               c:'#E74C3C' },
    { s:710,   e:1185, n:'Japon impérial (Nara / Heian)',               c:'#E74C3C' },
    { s:1185,  e:1336, n:'Shōgunat Kamakura',                          c:'#E74C3C' },
    { s:1336,  e:1568, n:'Shōgunat Ashikaga / Sengoku (guerres civiles)',c:'#C0392B' },
    { s:1568,  e:1868, n:'Shōgunat Tokugawa (Edo)',                    c:'#E74C3C' },
    { s:1868,  e:1945, n:'Japon impérial moderne (Meiji → Hirohito)',  c:'#C0392B' },
    { s:1945,  e:2025, n:'Japon (démocratie constitutionnelle)',        c:'#E74C3C' },
  ],
  '356': [ // India
    { s:-3000, e:-321, n:'Inde ancienne (Indus, Mahajanapadas)',        c:'#9B59B6' },
    { s:-321,  e:-184, n:'Empire Maurya (Ashoka)',                      c:'#9B59B6' },
    { s:-184,  e:320,  n:'Inde divisée (Kushans, Satavahanas...)',      c:'#9B59B6' },
    { s:320,   e:550,  n:'Empire Gupta',                                c:'#9B59B6' },
    { s:550,   e:1200, n:'Inde des Rajput / dynasties régionales',      c:'#9B59B6' },
    { s:1200,  e:1526, n:'Sultanat de Delhi',                           c:'#884EA0' },
    { s:1526,  e:1857, n:'Empire moghol',                               c:'#8E44AD' },
    { s:1857,  e:1947, n:'Raj britannique (Empire des Indes)',          c:'#C2185B' },
    { s:1947,  e:2025, n:'Inde indépendante',                           c:'#9B59B6' },
  ],
  '586': [ // Pakistan
    { s:-3000, e:1526, n:'Indus / Sultanat de Delhi',                   c:'#D4AC0D' },
    { s:1526,  e:1857, n:'Empire moghol',                               c:'#8E44AD' },
    { s:1857,  e:1947, n:'Inde britannique (Punjab / Sindh)',           c:'#C2185B' },
    { s:1947,  e:2025, n:'Pakistan',                                    c:'#196F3D' },
  ],
  '004': [ // Afghanistan
    { s:-3000, e:-330, n:'Bactriane / Empire perse',                    c:'#E67E22' },
    { s:-330,  e:651,  n:'Hellénistiques / Parthes / Sassanides',       c:'#E67E22' },
    { s:651,   e:1219, n:'Califats / Ghaznavides / Ghourides',          c:'#D4AC0D' },
    { s:1219,  e:1747, n:'Mongols / Timourides / Moghols / Safavides', c:'#95A5A6' },
    { s:1747,  e:1978, n:'Afghanistan (Durranides → Émirat → Monarchie)',c:'#27AE60' },
    { s:1978,  e:2021, n:'Afghanistan (guerres / Taliban)',              c:'#4E1E5E'},
    { s:2021,  e:2025, n:'Afghanistan (Taliban)',                        c:'#4E1E5E'},
  ],
  '496': [ // Mongolia
    { s:-3000, e:1206, n:'Steppes mongoles / tribus nomades',           c:'#95A5A6' },
    { s:1206,  e:1294, n:'Empire mongol (Gengis Khan)',                 c:'#7F8C8D' },
    { s:1294,  e:1635, n:'Mongolie (khanats successeurs)',              c:'#95A5A6' },
    { s:1635,  e:1911, n:'Mongolie (Empire Qing)',                      c:'#27AE60' },
    { s:1911,  e:1992, n:'République populaire de Mongolie',            c:'#C0392B' },
    { s:1992,  e:2025, n:'Mongolie (démocratie)',                       c:'#95A5A6' },
  ],
  '398': [ // Kazakhstan
    { s:-3000, e:1465, n:'Steppes / Chaghataï (Mongol)',               c:'#BDC3C7' },
    { s:1465,  e:1847, n:'Khanat kazakh',                               c:'#BDC3C7' },
    { s:1847,  e:1917, n:'Empire russe (Kazakhstan)',                    c:'#8E44AD' },
    { s:1917,  e:1991, n:'RSS du Kazakhstan (URSS)',                    c:'#7B241C' },
    { s:1991,  e:2025, n:'Kazakhstan',                                  c:'#BDC3C7' },
  ],
  '860': [ // Uzbekistan
    { s:-3000, e:651,  n:'Bactriane / Sogdiane / Perse',               c:'#E67E22' },
    { s:651,   e:1219, n:'Transoxiane islamique (Samanides / Khorezm)', c:'#D4AC0D' },
    { s:1219,  e:1370, n:'Chaghataï (mongol)',                          c:'#95A5A6' },
    { s:1370,  e:1506, n:'Empire timouride (Tamerlan / Samarkand)',     c:'#C0392B' },
    { s:1506,  e:1868, n:'Khanats ouzbeks (Boukhara, Khiva)',           c:'#D4AC0D' },
    { s:1868,  e:1991, n:'Russie / URSS',                               c:'#8E44AD' },
    { s:1991,  e:2025, n:'Ouzbékistan',                                 c:'#D4AC0D' },
  ],
  '762': [ // Tajikistan
    { s:-3000, e:1219, n:'Bactriane / Sogdiane / Samanides',           c:'#E67E22' },
    { s:1219,  e:1868, n:'Mongols / Timourides / Khanats',              c:'#95A5A6' },
    { s:1868,  e:1991, n:'Empire russe / URSS',                         c:'#8E44AD' },
    { s:1991,  e:2025, n:'Tadjikistan',                                 c:'#E67E22' },
  ],
  '196': [ // Cyprus
    { s:-3000, e:395,  n:'Chypre antique (Grecs / Romains)',            c:'#3498DB' },
    { s:395,   e:1191, n:'Chypre byzantine',                            c:'#8E44AD' },
    { s:1191,  e:1570, n:'Royaume croisé / Venise',                     c:'#C0392B' },
    { s:1570,  e:1878, n:'Chypre ottomane',                             c:'#D4AC0D' },
    { s:1878,  e:1960, n:'Chypre britannique',                          c:'#C2185B' },
    { s:1960,  e:2025, n:'République de Chypre',                        c:'#3498DB' },
  ],
  // ─── AMÉRIQUES ───
  '840': [ // USA
    { s:-3000, e:1607, n:'Amérique du Nord (peuples autochtones)',      c:'#2E86C1' },
    { s:1607,  e:1776, n:'Colonies britanniques d\'Amérique',           c:'#C2185B' },
    { s:1776,  e:1865, n:'États-Unis (expansion / esclavage)',          c:'#2E86C1' },
    { s:1865,  e:1945, n:'États-Unis (industrialisation / guerres mondiales)',c:'#2E86C1' },
    { s:1945,  e:1991, n:'États-Unis (Guerre Froide / superpuissance)', c:'#2E86C1' },
    { s:1991,  e:2025, n:'États-Unis (hyperpuissance)',                  c:'#2E86C1' },
  ],
  '124': [ // Canada
    { s:-3000, e:1534, n:'Canada (peuples autochtones)',                c:'#C0392B' },
    { s:1534,  e:1763, n:'Nouvelle-France (colonie française)',         c:'#2980B9'},
    { s:1763,  e:1867, n:'Canada britannique',                          c:'#C2185B' },
    { s:1867,  e:2025, n:'Canada (Confédération)',                      c:'#C0392B' },
  ],
  '484': [ // Mexico
    { s:-3000, e:1428, n:'Mésoamérique (Olmèques, Mayas, Toltèques)',  c:'#17A589' },
    { s:1428,  e:1521, n:'Empire aztèque (Mexica)',                     c:'#17A589' },
    { s:1521,  e:1821, n:'Nouvelle-Espagne',                            c:'#E74C3C' },
    { s:1821,  e:1867, n:'Mexique (Empire Iturbide → République)',     c:'#27AE60' },
    { s:1867,  e:2025, n:'États-Unis mexicains',                        c:'#229954' },
  ],
  '076': [ // Brazil
    { s:-3000, e:1500, n:'Brésil (peuples amérindiens)',                c:'#27AE60' },
    { s:1500,  e:1822, n:'Brésil colonial portugais',                   c:'#B7950B' },
    { s:1822,  e:1889, n:'Empire du Brésil (Pedro I et II)',            c:'#196F3D' },
    { s:1889,  e:2025, n:'République fédérale du Brésil',              c:'#196F3D' },
  ],
  '604': [ // Peru
    { s:-3000, e:1438, n:'Cultures précolombiennes',                    c:'#F39C12' },
    { s:1438,  e:1532, n:'Empire inca (Tawantinsuyu)',                  c:'#F39C12' },
    { s:1532,  e:1821, n:'Vice-royauté du Pérou',                       c:'#E74C3C' },
    { s:1821,  e:2025, n:'République du Pérou',                         c:'#F39C12' },
  ],
  '032': [ // Argentina
    { s:-3000, e:1516, n:'Argentine (peuples autochtones)',             c:'#5DADE2' },
    { s:1516,  e:1816, n:'Vice-royauté du Río de la Plata',            c:'#E74C3C' },
    { s:1816,  e:2025, n:'Argentine',                                   c:'#5DADE2' },
  ],
  '036': [ // Australia
    { s:-3000, e:1788, n:'Australie (Aboriginal peoples)',              c:'#E67E22' },
    { s:1788,  e:1901, n:'Colonies britanniques d\'Australie',          c:'#C2185B' },
    { s:1901,  e:2025, n:'Commonwealth d\'Australie',                   c:'#C0392B' },
  ],
  '554': [ // New Zealand
    { s:-3000, e:1642, n:'Nouvelle-Zélande (Māori)',                    c:'#27AE60' },
    { s:1642,  e:1907, n:'Nouvelle-Zélande (Empire britannique)',       c:'#C2185B' },
    { s:1907,  e:2025, n:'Nouvelle-Zélande',                            c:'#2471A3' },
  ],
  '360': [ // Indonesia
    { s:-3000, e:1527, n:'Archipel malais (Srivijaya, Majapahit)',     c:'#E67E22' },
    { s:1527,  e:1600, n:'Sultanats islamiques malais',                 c:'#D4AC0D' },
    { s:1600,  e:1942, n:'Indes néerlandaises',                         c:'#F0B27A' },
    { s:1942,  e:1945, n:'Indonésie (occupation japonaise)',            c:'#E74C3C' },
    { s:1945,  e:2025, n:'Indonésie',                                   c:'#E67E22' },
  ],
  '704': [ // Vietnam
    { s:-3000, e:-111, n:'Âu Lạc / Văn Lang',                          c:'#27AE60' },
    { s:-111,  e:939,  n:'Domination chinoise',                         c:'#27AE60' },
    { s:939,   e:1802, n:'Vietnam indépendant (Đại Việt)',              c:'#27AE60' },
    { s:1802,  e:1954, n:'Indochine française / empire Nguyễn',         c:'#2980B9'},
    { s:1954,  e:1975, n:'Vietnam du Nord / du Sud',                    c:'#C0392B' },
    { s:1975,  e:2025, n:'République socialiste du Vietnam',            c:'#C0392B' },
  ],

  // ─── ASIE DU SUD-EST (manquants) ───
  '764': [ // Thailand
    { s:-3000, e:2025, n:'Thaïlande (Siam)', c:'#16A085' },
  ],
  '104': [ // Myanmar
    { s:1824, e:1948, n:'Birmanie britannique',         c:'#C2185B' },
    { s:1948, e:1989, n:'Birmanie (Union/dictature)',   c:'#148F77' },
    { s:1989, e:2025, n:'Myanmar',                      c:'#148F77' },
  ],
  '116': [ // Cambodia
    { s:802,  e:1431, n:'Empire khmer',                              c:'#F39C12' },
    { s:1431, e:1953, n:'Cambodge (vassalité / protectorat français)',c:'#2980B9' },
    { s:1953, e:1975, n:'Cambodge (Sihanouk)',                       c:'#F39C12' },
    { s:1975, e:1979, n:'Kampuchéa démocratique (Khmers rouges)',    c:'#4E1E5E' },
    { s:1979, e:2025, n:'Cambodge',                                  c:'#E67E22' },
  ],
  '418': [ // Laos
    { s:1353, e:1893, n:'Laos (Lan Xang / royaumes)',    c:'#D35400' },
    { s:1893, e:1953, n:'Laos (protectorat français)',   c:'#2980B9' },
    { s:1953, e:1975, n:'Royaume du Laos',               c:'#D35400' },
    { s:1975, e:2025, n:'RDP Laos (communiste)',          c:'#A93226' },
  ],
  '458': [ // Malaysia
    { s:1511, e:1957, n:'Malaisie coloniale (Portugal/Royaume-Uni)', c:'#C2185B' },
    { s:1957, e:2025, n:'Malaisie',                                  c:'#D4AC0D' },
  ],
  '608': [ // Philippines
    { s:1565, e:1898, n:'Philippines espagnoles',     c:'#E74C3C' },
    { s:1898, e:1946, n:'Philippines (USA)',           c:'#2E86C1' },
    { s:1946, e:2025, n:'Philippines',                c:'#3498DB' },
  ],
  '702': [ // Singapore
    { s:1819, e:1963, n:'Singapour (Royaume-Uni)',    c:'#C2185B' },
    { s:1963, e:1965, n:'Singapour (Malaisie)',       c:'#D4AC0D' },
    { s:1965, e:2025, n:'Singapour',                  c:'#E74C3C' },
  ],
  '096': [ // Brunei
    { s:1888, e:1984, n:'Brunéi (protectorat britannique)', c:'#C2185B' },
    { s:1984, e:2025, n:'Brunéi',                           c:'#F1C40F' },
  ],

  // ─── ASIE DU SUD (manquants) ───
  '144': [ // Sri Lanka
    { s:1505, e:1948, n:'Ceylan (Portugal/Pays-Bas/Royaume-Uni)', c:'#C2185B' },
    { s:1948, e:1972, n:'Dominion de Ceylan',                     c:'#C0392B' },
    { s:1972, e:2025, n:'Sri Lanka',                              c:'#E74C3C' },
  ],
  '050': [ // Bangladesh
    { s:1947, e:1971, n:'Pakistan oriental',  c:'#196F3D' },
    { s:1971, e:2025, n:'Bangladesh',         c:'#196F3D' },
  ],
  '524': [ // Nepal
    { s:-3000, e:2025, n:'Népal', c:'#C0392B' },
  ],
  '064': [ // Bhutan
    { s:-3000, e:2025, n:'Bhoutan', c:'#E67E22' },
  ],

  // ─── ASIE CENTRALE (manquants post-URSS) ───
  '417': [ // Kyrgyzstan
    { s:1936, e:1991, n:'RSS du Kirghizistan (URSS)',  c:'#7B241C' },
    { s:1991, e:2025, n:'Kirghizistan',                c:'#D4AC0D' },
  ],
  '795': [ // Turkmenistan
    { s:1924, e:1991, n:'RSS du Turkménistan (URSS)',  c:'#7B241C' },
    { s:1991, e:2025, n:'Turkménistan',                c:'#27AE60' },
  ],

  // ─── CORÉES ───
  '410': [ // South Korea
    { s:1948, e:2025, n:'Corée du Sud', c:'#5499C7' },
  ],
  '408': [ // North Korea
    { s:1948, e:2025, n:'Corée du Nord', c:'#566573' },
  ],

  // ─── CAUCASE ───
  '051': [ // Armenia
    { s:301,  e:428,  n:'Arménie (royaume / sassanide)',    c:'#E74C3C' },
    { s:428,  e:1918, n:'Arménie (Byzance / Perse / Russie)',c:'#884EA0' },
    { s:1918, e:1920, n:'République d\'Arménie',           c:'#E74C3C' },
    { s:1920, e:1991, n:'RSS d\'Arménie (URSS)',           c:'#7B241C' },
    { s:1991, e:2025, n:'Arménie',                         c:'#D35400' },
  ],
  '031': [ // Azerbaijan
    { s:1918, e:1920, n:'République d\'Azerbaïdjan',       c:'#16A085' },
    { s:1920, e:1991, n:'RSS d\'Azerbaïdjan (URSS)',       c:'#7B241C' },
    { s:1991, e:2025, n:'Azerbaïdjan',                     c:'#16A085' },
  ],
  '268': [ // Georgia
    { s:1801, e:1918, n:'Géorgie (Empire russe)',  c:'#8E44AD' },
    { s:1918, e:1921, n:'République de Géorgie',   c:'#E74C3C' },
    { s:1921, e:1991, n:'RSS de Géorgie (URSS)',   c:'#7B241C' },
    { s:1991, e:2025, n:'Géorgie',                 c:'#F39C12' },
  ],

  // ─── MOYEN-ORIENT / GOLFE ───
  '414': [ // Kuwait
    { s:1899, e:1961, n:'Koweït (protectorat britannique)', c:'#C2185B' },
    { s:1961, e:2025, n:'Koweït',                          c:'#C8A800' },
  ],
  '048': [ // Bahrain
    { s:1820, e:1971, n:'Bahreïn (protectorat britannique)', c:'#C2185B' },
    { s:1971, e:2025, n:'Bahreïn',                          c:'#CB4335' },
  ],
  '634': [ // Qatar
    { s:1916, e:1971, n:'Qatar (protectorat britannique)', c:'#C2185B' },
    { s:1971, e:2025, n:'Qatar',                          c:'#922B21' },
  ],
  '784': [ // UAE
    { s:1820, e:1971, n:'Émirats (protectorat britannique)', c:'#C2185B' },
    { s:1971, e:2025, n:'Émirats arabes unis',              c:'#E8DAEF' },
  ],
  '512': [ // Oman
    { s:-3000, e:2025, n:'Oman', c:'#B03A2E' },
  ],

  // ─── EUROPE (manquants) ───
  '372': [ // Ireland
    { s:1922, e:2025, n:'Irlande', c:'#52BE80' },
  ],
  '352': [ // Iceland
    { s:1944, e:2025, n:'Islande', c:'#5DADE2' },
  ],
  '442': [ // Luxembourg
    { s:1815, e:2025, n:'Luxembourg', c:'#AED6F1' },
  ],
  '470': [ // Malta
    { s:1964, e:2025, n:'Malte', c:'#C0392B' },
  ],
  '008': [ // Albania
    { s:1912, e:1944, n:'Albanie (monarchie / occupation)', c:'#D4AC0D' },
    { s:1944, e:1992, n:'Albanie (Hoxha — communisme isolé)',c:'#E74C3C' },
    { s:1992, e:2025, n:'Albanie',                          c:'#2C3E50' },
  ],
  '070': [ // Bosnia
    { s:1991, e:1995, n:'Guerre de Bosnie',             c:'#CB4335' },
    { s:1995, e:2025, n:'Bosnie-Herzégovine',           c:'#2980B9' },
  ],
  '807': [ // North Macedonia
    { s:1991, e:2025, n:'Macédoine du Nord', c:'#F39C12' },
  ],
  '499': [ // Montenegro
    { s:2006, e:2025, n:'Monténégro', c:'#884EA0' },
  ],
  '703': [ // Slovakia
    { s:1993, e:2025, n:'Slovaquie', c:'#3498DB' },
  ],
  '498': [ // Moldova
    { s:1991, e:2025, n:'Moldavie', c:'#F1C40F' },
  ],

  // ─── AFRIQUE SUBSAHARIENNE (manquants) ───
  '180': [ // DRC
    { s:1885, e:1960, n:'Congo belge',                       c:'#E59866' },
    { s:1960, e:1971, n:'Congo-Léopoldville / Kinshasa',     c:'#2E86C1' },
    { s:1971, e:1997, n:'Zaïre (Mobutu)',                    c:'#2471A3' },
    { s:1997, e:2025, n:'République Démocratique du Congo',  c:'#2E86C1' },
  ],
  '404': [ // Kenya
    { s:1895, e:1963, n:'Kenya britannique',  c:'#C2185B' },
    { s:1963, e:2025, n:'Kenya',             c:'#D4AC0D' },
  ],
  '800': [ // Uganda
    { s:1894, e:1962, n:'Ouganda britannique', c:'#C2185B' },
    { s:1962, e:2025, n:'Ouganda',            c:'#E67E22' },
  ],
  '834': [ // Tanzania
    { s:1920, e:1961, n:'Tanganyika / Zanzibar (Royaume-Uni)', c:'#C2185B' },
    { s:1961, e:2025, n:'Tanzanie',                           c:'#117864' },
  ],
  '024': [ // Angola
    { s:1575, e:1975, n:'Angola portugais', c:'#B7950B' },
    { s:1975, e:2025, n:'Angola',          c:'#CB4335' },
  ],
  '508': [ // Mozambique
    { s:1498, e:1975, n:'Mozambique portugais', c:'#B7950B' },
    { s:1975, e:2025, n:'Mozambique',          c:'#AF601A' },
  ],
  '716': [ // Zimbabwe
    { s:1889, e:1965, n:'Rhodésie du Sud (Royaume-Uni)',  c:'#C2185B' },
    { s:1965, e:1980, n:'Rhodésie (UDI)',                 c:'#7B7D7D' },
    { s:1980, e:2025, n:'Zimbabwe',                       c:'#1E8449' },
  ],
  '894': [ // Zambia
    { s:1911, e:1964, n:'Rhodésie du Nord (Royaume-Uni)', c:'#C2185B' },
    { s:1964, e:2025, n:'Zambie',                        c:'#8E44AD' },
  ],
  '108': [ // Burundi
    { s:1916, e:1962, n:'Ruanda-Urundi (Belgique)', c:'#E59866' },
    { s:1962, e:2025, n:'Burundi',                 c:'#E74C3C' },
  ],
  '646': [ // Rwanda
    { s:1916, e:1962, n:'Ruanda-Urundi (Belgique)', c:'#E59866' },
    { s:1962, e:2025, n:'Rwanda',                  c:'#6C3483' },
  ],
  '120': [ // Cameroon
    { s:1884, e:1960, n:'Cameroun (Allemagne/France/Royaume-Uni)', c:'#2980B9' },
    { s:1960, e:2025, n:'Cameroun',                               c:'#1D8348' },
  ],
  '148': [ // Chad
    { s:1900, e:1960, n:'Tchad (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Tchad',         c:'#E59866' },
  ],
  '266': [ // Gabon
    { s:1839, e:1960, n:'Gabon (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Gabon',         c:'#1ABC9C' },
  ],
  '178': [ // Congo-Brazza
    { s:1880, e:1960, n:'Moyen-Congo (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Congo-Brazzaville',   c:'#884EA0' },
  ],
  '140': [ // CAR
    { s:1894, e:1960, n:'Oubangui-Chari (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Centrafrique',            c:'#F39C12' },
  ],
  '768': [ // Togo
    { s:1884, e:1960, n:'Togo (Allemagne/France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Togo',                   c:'#A93226' },
  ],
  '204': [ // Benin
    { s:1894, e:1960, n:'Dahomey (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Bénin',           c:'#F4D03F' },
  ],
  '562': [ // Niger
    { s:1890, e:1960, n:'Niger (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Niger',         c:'#3498DB' },
  ],
  '854': [ // Burkina Faso
    { s:1896, e:1960, n:'Haute-Volta (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Burkina Faso',        c:'#9B59B6' },
  ],
  '384': [ // Ivory Coast
    { s:1893, e:1960, n:'Côte d\'Ivoire (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Côte d\'Ivoire',          c:'#E8872E' },
  ],
  '694': [ // Sierra Leone
    { s:1808, e:1961, n:'Sierra Leone (Royaume-Uni)', c:'#C2185B' },
    { s:1961, e:2025, n:'Sierra Leone',              c:'#16A085' },
  ],
  '324': [ // Guinea
    { s:1891, e:1958, n:'Guinée française', c:'#2980B9' },
    { s:1958, e:2025, n:'Guinée',          c:'#8E44AD' },
  ],
  '624': [ // Guinea-Bissau
    { s:1879, e:1974, n:'Guinée portugaise', c:'#B7950B' },
    { s:1974, e:2025, n:'Guinée-Bissau',    c:'#C8A800' },
  ],
  '270': [ // Gambia
    { s:1765, e:1965, n:'Gambie (Royaume-Uni)', c:'#C2185B' },
    { s:1965, e:2025, n:'Gambie',             c:'#3498DB' },
  ],
  '430': [ // Liberia
    { s:1847, e:2025, n:'Libéria', c:'#922B21' },
  ],
  '072': [ // Botswana
    { s:1885, e:1966, n:'Bechuanaland (Royaume-Uni)', c:'#C2185B' },
    { s:1966, e:2025, n:'Botswana',                  c:'#5DADE2' },
  ],
  '516': [ // Namibia
    { s:1884, e:1990, n:'Sud-Ouest africain (Allemagne/Afrique du Sud)', c:'#943126' },
    { s:1990, e:2025, n:'Namibie',                                      c:'#FAD7A0' },
  ],
  '426': [ // Lesotho
    { s:1868, e:1966, n:'Basutoland (Royaume-Uni)', c:'#C2185B' },
    { s:1966, e:2025, n:'Lesotho',                 c:'#82E0AA' },
  ],
  '748': [ // Eswatini
    { s:1906, e:1968, n:'Swaziland (Royaume-Uni)', c:'#C2185B' },
    { s:1968, e:2025, n:'Eswatini',               c:'#F1948A' },
  ],
  '706': [ // Somalia
    { s:1889, e:1960, n:'Somalie (Italie/Royaume-Uni)', c:'#27AE60' },
    { s:1960, e:2025, n:'Somalie',                     c:'#7F8C8D' },
  ],
  '232': [ // Eritrea
    { s:1890, e:1993, n:'Érythrée (Italie/Éthiopie)', c:'#27AE60' },
    { s:1993, e:2025, n:'Érythrée',                   c:'#2471A3' },
  ],
  '262': [ // Djibouti
    { s:1888, e:1977, n:'Côte française des Somalis / TFAI', c:'#2980B9' },
    { s:1977, e:2025, n:'Djibouti',                         c:'#76D7C4' },
  ],
  '450': [ // Madagascar
    { s:1896, e:1960, n:'Madagascar (France)', c:'#2980B9' },
    { s:1960, e:2025, n:'Madagascar',         c:'#F8C471' },
  ],
  '454': [ // Malawi
    { s:1907, e:1964, n:'Nyassaland (Royaume-Uni)', c:'#C2185B' },
    { s:1964, e:2025, n:'Malawi',                  c:'#E59866' },
  ],
  '478': [ // Mauritania
    { s:1062, e:1147, n:'Mauritanie — Empire almoravide',          c:'#E67E22' },
    { s:1147, e:1549, n:'Mauritanie — Almohades / tribus berbères', c:'#8B7355' },
    { s:1549, e:1666, n:'Mauritanie — Sultanat saadien',           c:'#F48FB1' },
    { s:1666, e:1912, n:'Mauritanie — Chérifat alaouite',          c:'#C0392B' },
    { s:1912, e:1960, n:'Mauritanie française',                    c:'#2980B9' },
    { s:1960, e:2025, n:'Mauritanie',                              c:'#85929E' },
  ],
  '480': [ // Mauritius
    { s:1810, e:1968, n:'Maurice (Royaume-Uni)', c:'#C2185B' },
    { s:1968, e:2025, n:'Maurice',              c:'#85C1E9' },
  ],
  '226': [ // Equatorial Guinea
    { s:1778, e:1968, n:'Guinée équatoriale (Espagne)', c:'#E74C3C' },
    { s:1968, e:2025, n:'Guinée équatoriale',          c:'#A9DFBF' },
  ],

  // ─── AMÉRIQUES (manquants) ───
  '068': [ // Bolivia
    { s:1825, e:2025, n:'Bolivie', c:'#CB4335' },
  ],
  '152': [ // Chile
    { s:1818, e:2025, n:'Chili', c:'#154360' },
  ],
  '170': [ // Colombia
    { s:1819, e:2025, n:'Colombie', c:'#F4D03F' },
  ],
  '218': [ // Ecuador
    { s:1830, e:2025, n:'Équateur', c:'#E8AC14' },
  ],
  '858': [ // Uruguay
    { s:1828, e:2025, n:'Uruguay', c:'#1D8348' },
  ],
  '862': [ // Venezuela
    { s:1821, e:2025, n:'Venezuela', c:'#E67E22' },
  ],
  '600': [ // Paraguay
    { s:1811, e:2025, n:'Paraguay', c:'#7D3C98' },
  ],
  '192': [ // Cuba
    { s:1898, e:1959, n:'Cuba (protectorat américain)', c:'#2E86C1' },
    { s:1959, e:2025, n:'Cuba (Castro — communiste)',   c:'#C0392B' },
  ],
  '332': [ // Haiti
    { s:1804, e:2025, n:'Haïti', c:'#4A235A' },
  ],
  '214': [ // Dominican Republic
    { s:1865, e:2025, n:'République dominicaine', c:'#2471A3' },
  ],
  '320': [ // Guatemala
    { s:1821, e:2025, n:'Guatemala', c:'#5DADE2' },
  ],
  '340': [ // Honduras
    { s:1821, e:2025, n:'Honduras', c:'#85C1E9' },
  ],
  '222': [ // El Salvador
    { s:1821, e:2025, n:'Salvador', c:'#82E0AA' },
  ],
  '558': [ // Nicaragua
    { s:1821, e:2025, n:'Nicaragua', c:'#AED6F1' },
  ],
  '188': [ // Costa Rica
    { s:1821, e:2025, n:'Costa Rica', c:'#F1948A' },
  ],
  '591': [ // Panama
    { s:1903, e:2025, n:'Panama', c:'#F8C471' },
  ],
  '084': [ // Belize
    { s:1981, e:2025, n:'Belize', c:'#17A589' },
  ],
  '328': [ // Guyana
    { s:1966, e:2025, n:'Guyana', c:'#196F3D' },
  ],
  '740': [ // Suriname
    { s:1975, e:2025, n:'Suriname', c:'#7DCEA0' },
  ],
  '780': [ // Trinidad and Tobago
    { s:1962, e:2025, n:'Trinidad-et-Tobago', c:'#922B21' },
  ],
  '388': [ // Jamaica
    { s:1962, e:2025, n:'Jamaïque', c:'#F9E79F' },
  ],

  // ─── OCÉANIE (manquants) ───
  '598': [ // Papua New Guinea
    { s:1975, e:2025, n:'Papouasie-Nouvelle-Guinée', c:'#E8872E' },
  ],
  '242': [ // Fiji
    { s:1970, e:2025, n:'Fidji', c:'#AED6F1' },
  ],
}

function getTerritoryAtYear(isoCode, year) {
  const code = isoCode === '732' ? '504' : isoCode // Sahara occidental → Maroc
  const timeline = TL[code]
  if (!timeline) return null
  for (const t of timeline) {
    if (year >= t.s && year < t.e) return { name: t.n, color: t.c }
  }
  return null
}

// Codes des puissances/acteurs marquants à afficher dans la légende après 1956
const LEGEND_HIGHLIGHTS = [
  { code: '840', label: null }, // USA
  { code: '643', label: null }, // Russie / URSS
  { code: '156', label: null }, // Chine
  { code: '826', label: null }, // Royaume-Uni
  { code: '250', label: null }, // France
  { code: '276', label: null }, // Allemagne
  { code: '356', label: null }, // Inde
  { code: '792', label: null }, // Turquie
  { code: '682', label: null }, // Arabie Saoudite
  { code: '504', label: null }, // Maroc
  { code: '076', label: null }, // Brésil
  { code: '392', label: null }, // Japon
]

function getDynamicLegend(year) {
  if (year >= 1956) {
    const seen = new Map()
    for (const { code } of LEGEND_HIGHLIGHTS) {
      const t = getTerritoryAtYear(code, year)
      if (t && !seen.has(t.color)) seen.set(t.color, t.name)
    }
    return [
      ...Array.from(seen.entries()).map(([c, n]) => ({ c, n })),
      { c: DEFAULT_FILL, n: 'Non cartographié' },
    ]
  }
  // Avant 1956 : légende automatique par fréquence
  const colorMap = new Map()
  for (const timeline of Object.values(TL)) {
    for (const t of timeline) {
      if (year >= t.s && year < t.e) {
        if (!colorMap.has(t.c)) colorMap.set(t.c, { n: t.n, count: 1 })
        else colorMap.get(t.c).count++
        break
      }
    }
  }
  return [
    ...Array.from(colorMap.entries())
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 10)
      .map(([c, { n }]) => ({ c, n })),
    { c: DEFAULT_FILL, n: 'Non cartographié' },
  ]
}

const CONTEXTS = [
  { s:-3000, e:-1000, title:'Premières civilisations', text:'L\'écriture est inventée (cunéiforme sumerien, hiéroglyphes égyptiens). Les premières cités apparaissent en Mésopotamie (Ur, Uruk, Babylone) et en Égypte. Construction des pyramides de Gizeh (vers -2560).' },
  { s:-1000, e:-300,  title:'Antiquité — âge des empires', text:'Les grands empires se succèdent en Orient : Assyrien, babylonien puis perse achéménide. En Méditerranée, les Grecs colonisent et développent la philosophie. Rome fonde sa République (-509).' },
  { s:-300,  e:200,   title:'Antiquité classique', text:'Alexandre le Grand répand la culture grecque de l\'Égypte à l\'Inde. Rome s\'impose en Méditerranée et crée son Empire (-27). La Chine connaît ses premières dynasties impériales (Qin, Han).' },
  { s:200,   e:600,   title:'Chute de Rome & Grandes Invasions', text:'L\'Empire romain d\'Occident s\'effondre (476). Les peuples germaniques (Wisigoths, Francs, Vandales) occupent l\'Europe. En Orient, l\'Empire sassanide rivalise avec Byzance. L\'Islam n\'est pas encore né.' },
  { s:600,   e:900,   title:'Islam & Carolingiens', text:'La révélation islamique (622) déclenche une expansion fulgurante de l\'Arabie à l\'Espagne et à l\'Indus en moins d\'un siècle. Charlemagne unifie l\'Europe franque et est couronné Empereur en 800. La Chine Tang est à son apogée.' },
  { s:900,   e:1100,  title:'Moyen Âge — féodalité & conquêtes', text:'Les Almoravides unifient le Maghreb et l\'Andalousie. L\'Empire byzantin résiste aux pressions. Les Normands conquièrent l\'Angleterre (1066). Les Croisades commencent (1095). La Chine Song invente l\'imprimerie.' },
  { s:1100,  e:1300,  title:'Apogée médiéval & Almohades', text:'Les Almohades renversent les Almoravides et créent un grand empire berbère (Maroc → Andalousie → Tunisie). Saladin reprend Jérusalem (1187). Gengis Khan unifie les Mongols et commence la conquête mondiale.' },
  { s:1300,  e:1500,  title:'Mongols, Ottomans & Renaissance', text:'L\'Empire mongol, le plus grand contigu de l\'Histoire, s\'effondre. L\'Empire ottoman prend Constantinople (1453). En Europe, la Renaissance italienne révolutionne les arts et les sciences. Le Mali de Mansa Moussa est l\'empire le plus riche.' },
  { s:1500,  e:1650,  title:'Âge des grandes découvertes', text:'Colomb atteint les Amériques (1492), Vasco de Gama contourne l\'Afrique. Cortés détruit l\'Empire aztèque. Les Espagnols et Portugais colonisent. La Réforme protestante fracture l\'Europe chrétienne (Luther 1517).' },
  { s:1650,  e:1789,  title:'Absolutisme & premières révolutions', text:'La France de Louis XIV est la première puissance européenne. L\'Empire ottoman est en déclin. L\'Empire britannique s\'étend en Inde et Amérique. Les Lumières préparent les révolutions. La Révolution américaine (1776) inspire l\'Europe.' },
  { s:1789,  e:1815,  title:'Révolution française & Napoléon', text:'La Révolution française (1789) abolit l\'Ancien Régime. Napoléon Bonaparte domine l\'Europe de 1799 à 1815. Les idées de liberté, égalité, fraternité se répandent. La défaite finale à Waterloo (1815) redessine l\'Europe au Congrès de Vienne.' },
  { s:1815,  e:1870,  title:'Restauration & nationalismes', text:'Le Congrès de Vienne restaure les monarchies. Les nationalismes s\'affirment : révolutions de 1830, 1848, Printemps des peuples. L\'Italie et l\'Allemagne s\'unifient. La colonisation de l\'Afrique commence. La révolution industrielle transforme l\'économie.' },
  { s:1870,  e:1914,  title:'Impérialisme & montée des tensions', text:'L\'Empire allemand proclamé à Versailles (1871). La \"Ruée vers l\'Afrique\" partage le continent entre puissances européennes. Les tensions entre grandes puissances (Triplice vs Triple-Entente) s\'accumulent. L\'Empire ottoman se désintègre lentement.' },
  { s:1914,  e:1939,  title:'1re Guerre mondiale & entre-deux-guerres', text:'La Grande Guerre (1914-1918) fait 20 millions de morts et détruit quatre empires (Russe, Allemand, Austro-Hongrois, Ottoman). La Révolution bolchévique crée l\'URSS. La crise de 1929 et les frustrations du traité de Versailles favorisent la montée des fascismes.' },
  { s:1939,  e:1945,  title:'2e Guerre mondiale', text:'Le IIIe Reich envahit l\'Europe. La Shoah extermine 6 millions de Juifs. Le Japon s\'empare de l\'Asie du Pacifique. Le débarquement de Normandie (1944) et l\'entrée soviétique ouvrent la voie à la victoire alliée. Hiroshima et Nagasaki (août 1945) annoncent l\'ère nucléaire.' },
  { s:1945,  e:1991,  title:'Guerre Froide', text:'USA et URSS s\'affrontent sans conflit direct. La décolonisation libère l\'Afrique et l\'Asie. Le mur de Berlin (1961) symbolise la division du monde. Course aux armements nucléaires, courses à l\'espace. La Chine devient communiste (1949). Cuba, Vietnam, Korea : guerres par procuration.' },
  { s:1991,  e:2025,  title:'Monde contemporain', text:'Chute de l\'URSS (1991) : les États-Unis sont l\'unique hyperpuissance. La Chine devient la 2e économie mondiale. Les attentats du 11 septembre (2001) déclenchent les guerres en Afghanistan et Irak. La Russie attaque l\'Ukraine (2022). Le monde devient multipolaire.' },
]

function getContextForYear(year) {
  return CONTEXTS.find(c => year >= c.s && year < c.e) || CONTEXTS[CONTEXTS.length - 1]
}

function formatYear(y) {
  if (y < 0) return `${Math.abs(y)} av. J.-C.`
  if (y === 0) return '1 ap. J.-C.'
  return String(y)
}

export default function Carte() {
  const [year, setYear] = useState(2024)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [center, setCenter] = useState([0, 20])
  const [isMobile, setIsMobile] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [activeTab, setActiveTab] = useState('context')
  const intervalRef = useRef(null)

  const ctx = getContextForYear(year)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 680)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setYear((y) => {
          const next = y + 5
          if (next > 2024) { setPlaying(false); return 2024 }
          return next
        })
      }, 80)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [playing])

  const getStyle = useCallback((geo) => {
    const t = getTerritoryAtYear(String(geo.id), year)
    const fill = t ? t.color : DEFAULT_FILL
    const stroke = t ? t.color : 'rgba(255,255,255,0.15)'
    const strokeHover = t ? '#ffffff' : 'rgba(255,255,255,0.4)'
    return {
      default:  { fill, stroke, strokeWidth: 0.5, outline: 'none' },
      hover:    { fill: t ? t.color : '#B0A090', stroke: strokeHover, strokeWidth: 0.8, outline: 'none', cursor: 'pointer' },
      pressed:  { fill, stroke, strokeWidth: 0.5, outline: 'none' },
    }
  }, [year])

  const btnStyle = { padding: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }

  const TABS = [
    { id: 'context',  icon: <Info size={13}/>,   label: 'Contexte' },
    { id: 'selected', icon: <Globe size={13}/>,  label: selected?.geoName || 'Pays' },
    { id: 'legend',   icon: <Layers size={13}/>, label: 'Légende' },
  ]

  const panelContent = (tab) => {
    if (tab === 'context') return (
      <>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#D4AF37', marginBottom: '6px' }}>{ctx.title}</div>
        <p style={{ fontSize: '12px', color: '#8B949E', lineHeight: 1.65 }}>{ctx.text}</p>
      </>
    )
    if (tab === 'selected') return selected?.territory ? (
      <div style={{ borderRadius: '8px', padding: '10px', background: selected.territory.color + '25', borderLeft: `3px solid ${selected.territory.color}` }}>
        <p style={{ fontSize: '14px', fontWeight: 600, color: selected.territory.color, marginBottom: '4px' }}>{selected.territory.name}</p>
        <p style={{ fontSize: '11px', color: '#8B949E' }}>{selected.geoName} — {formatYear(year)}</p>
      </div>
    ) : (
      <p style={{ fontSize: '12px', color: '#8B949E', fontStyle: 'italic' }}>
        {selected ? 'Pas de données pour cette région à cette période.' : 'Appuyez sur un pays pour voir ses informations.'}
      </p>
    )
    if (tab === 'legend') return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {getDynamicLegend(year).map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '13px', height: '13px', borderRadius: '3px', flexShrink: 0, background: item.c }} />
            <span style={{ fontSize: '12px', color: '#C9D1D9' }}>{item.n}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ height: '100vh', background: '#0D1117', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* ── Header ── */}
      <div style={{ flexShrink: 0, padding: isMobile ? '8px 10px 6px' : '10px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#0D1117' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: isMobile ? '6px' : '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <Globe size={isMobile ? 16 : 20} color="#D4AF37" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: isMobile ? '15px' : '20px', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#D4AF37', flexShrink: 0 }}>
              {formatYear(year)}
            </span>
            <span style={{ fontSize: isMobile ? '10px' : '13px', color: '#8B949E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ctx.title}</span>
          </div>
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            <button onClick={() => setZoom(z => Math.min(z + 0.5, 8))} style={btnStyle}><ZoomIn size={14}/></button>
            <button onClick={() => setZoom(z => Math.max(z - 0.5, 1))} style={btnStyle}><ZoomOut size={14}/></button>
            {isMobile && (
              <button
                onClick={() => setShowPanel(p => !p)}
                style={{ ...btnStyle, background: showPanel ? '#D4AF37' : 'rgba(255,255,255,0.1)', color: showPanel ? '#0D1117' : 'white' }}
              >
                <Layers size={14}/>
              </button>
            )}
          </div>
        </div>

        {/* Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => { setPlaying(false); setYear(y => Math.max(-3000, y - 25)) }} style={btnStyle}><ChevronLeft size={14}/></button>
          <button onClick={() => setPlaying(p => !p)} style={{ ...btnStyle, background: playing ? '#D4AF37' : 'rgba(255,255,255,0.12)', color: playing ? '#2C1810' : 'white' }}>
            {playing ? <Pause size={14}/> : <Play size={14}/>}
          </button>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <input
              type="range" min={-3000} max={2024} step={1} value={year}
              onChange={e => { setPlaying(false); setYear(Number(e.target.value)) }}
              style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer' }}
            />
            {!isMobile && (
              <div style={{ position: 'relative', height: '16px' }}>
                {[-3000,-1000,0,500,1000,1500,1800,1900,1945,2000].map(y => {
                  const pct = (y - (-3000)) / (2024 - (-3000)) * 100
                  return (
                    <span key={y} onClick={() => setYear(y)} style={{ position: 'absolute', left: `${pct}%`, transform: 'translateX(-50%)', fontSize: '9px', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none' }}>
                      {y < 0 ? `${Math.abs(y)}av` : y}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
          <button onClick={() => { setPlaying(false); setYear(y => Math.min(2024, y + 25)) }} style={btnStyle}><ChevronRight size={14}/></button>
        </div>
      </div>

      {/* ── Corps ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0, position: 'relative' }}>

        {/* ── Carte ── */}
        <div style={{ flex: 1, position: 'relative', background: OCEAN_COLOR, overflow: 'hidden', minWidth: 0, touchAction: 'none' }}>
          <ComposableMap
            projection="geoNaturalEarth1"
            width={980} height={551}
            projectionConfig={{ scale: 160, center: [0, 10] }}
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <ZoomableGroup zoom={zoom} center={center} onMoveEnd={({ coordinates, zoom: z }) => { setCenter(coordinates); setZoom(z) }}>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={getStyle(geo)}
                      onMouseEnter={() => {
                        if (isMobile) return
                        const t = getTerritoryAtYear(String(geo.id), year)
                        setHovered({ geoName: geo.properties?.name || '', territory: t })
                      }}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => {
                        const t = getTerritoryAtYear(String(geo.id), year)
                        setSelected({ geoName: geo.properties?.name || '', territory: t })
                        if (isMobile) { setShowPanel(true); setActiveTab('selected') }
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {hovered && !isMobile && (
            <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 20 }}>
              <div style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, background: hovered.territory ? hovered.territory.color + 'EE' : '#2C3E50EE', color: 'white', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>
                <span style={{ fontWeight: 700 }}>{hovered.geoName}</span>
                {hovered.territory && <span style={{ marginLeft: '8px', opacity: 0.85 }}>— {hovered.territory.name}</span>}
              </div>
            </div>
          )}

          <div style={{ position: 'absolute', bottom: '8px', left: '10px', color: 'rgba(255,255,255,0.25)', fontSize: '10px', pointerEvents: 'none' }}>
            {isMobile ? 'Appuyer sur un pays pour les détails' : 'Scroll pour zoomer · Cliquer pour détails'}
          </div>
        </div>

        {/* ── Panneau droit (desktop) ── */}
        {!isMobile && (
          <aside style={{ width: '272px', flexShrink: 0, display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.1)', background: '#161B22', overflowY: 'auto' }}>

            {/* Tabs desktop */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
              {TABS.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                  padding: '8px 4px', fontSize: '10px', fontWeight: 600, background: 'none', border: 'none',
                  cursor: 'pointer', color: activeTab === tab.id ? '#D4AF37' : '#8B949E',
                  borderBottom: activeTab === tab.id ? '2px solid #D4AF37' : '2px solid transparent',
                }}>
                  {tab.icon}{tab.label}
                </button>
              ))}
            </div>

            <div style={{ padding: '14px', overflowY: 'auto', flex: 1 }}>
              {panelContent(activeTab)}
            </div>

          </aside>
        )}

        {/* ── Panneau bas (mobile) ── */}
        {isMobile && showPanel && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
            background: '#161B22', borderTop: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px 16px 0 0', maxHeight: '58vh',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Poignée */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 4px' }}>
              <div style={{ width: '36px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.2)' }} />
            </div>

            {/* Tabs mobile */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
              {TABS.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                  padding: '9px 4px', fontSize: '11px', fontWeight: 600, background: 'none', border: 'none',
                  cursor: 'pointer', color: activeTab === tab.id ? '#D4AF37' : '#8B949E',
                  borderBottom: activeTab === tab.id ? '2px solid #D4AF37' : '2px solid transparent',
                }}>
                  {tab.icon}{tab.label}
                </button>
              ))}
            </div>

            {/* Contenu scrollable */}
            <div style={{ overflowY: 'auto', flex: 1, padding: '14px' }}>
              {panelContent(activeTab)}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
