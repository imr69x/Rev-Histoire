export const personalities = [
  // === ANTIQUITÉ ===
  {
    id: 'pericles',
    name: 'Périclès',
    birth: '-495',
    death: '-429',
    era: 'Antiquité',
    category: 'Politique',
    nationality: 'Grecque',
    bio: "Stratège et homme d'État athénien, Périclès dirige Athènes dans son âge d'or (461-429 av. J.-C.). Il consolide la démocratie, développe la flotte, fait construire le Parthénon sur l'Acropole, et dirige l'empire maritime athénien à son apogée. Thucydide rapporte son discours funèbre, éloge de la démocratie athénienne.",
    keyFacts: [
      "Dirige Athènes pendant 30 ans comme stratège élu",
      "Fait construire le Parthénon (447-432 av. J.-C.) avec Phidias",
      "Renforce la démocratie : misthos (salaire des jurés), éphèbes",
      "L'Acropole d'Athènes est son héritage architectural majeur",
      "Mort de la peste d'Athènes (429 av. J.-C.)"
    ],
    quote: "Notre constitution n'imite pas les lois des États voisins ; nous sommes nous-mêmes un modèle pour les autres.",
    level: ['5e', '2nde', 'Terminale', 'HGGSP']
  },
  {
    id: 'alexandre_grand',
    name: 'Alexandre le Grand',
    birth: '-356',
    death: '-323',
    era: 'Antiquité',
    category: 'Militaire',
    nationality: 'Macédonienne',
    bio: "Roi de Macédoine, élève d'Aristote, Alexandre le Grand (356-323 av. J.-C.) constitue en 13 ans le plus grand empire du monde antique, de la Grèce à l'Inde. Il répand la culture grecque (hellénisme) sur tout le Moyen-Orient. Invaincu au combat, il meurt à Babylone à 32 ans d'une fièvre mystérieuse.",
    keyFacts: [
      "Élève d'Aristote, cultive les arts autant que la guerre",
      "Conquiert l'Empire perse (334-330 av. J.-C.) : batailles de Granique, Issos, Gaugamèles",
      "Fonde Alexandrie en Égypte (331 av. J.-C.) — futur centre culturel mondial",
      "Atteint l'Inde (326 av. J.-C.) — limite de ses conquêtes",
      "Diffuse l'hellénisme : culture grecque fusionnée avec les cultures locales"
    ],
    quote: "Il n'y a rien d'impossible à celui qui essaie.",
    level: ['5e', '2nde']
  },
  {
    id: 'cesar',
    name: 'Jules César',
    birth: '-100',
    death: '-44',
    era: 'Antiquité',
    category: 'Militaire',
    nationality: 'Romaine',
    bio: "Général et homme d'État romain, César est l'une des figures les plus importantes de l'Antiquité. Conquérant de la Gaule (58-50 av. J.-C.), il écrit lui-même ses Commentaires. Après avoir traversé le Rubicon et gagné la guerre civile, il devient dictateur. Il est assassiné aux Ides de Mars (-44) par des sénateurs républicains menés par Brutus.",
    keyFacts: [
      "Conquête de la Gaule (58-50 av. J.-C.) : victoire d'Alésia (52 av. J.-C.) contre Vercingétorix",
      "Franchit le Rubicon (49 av. J.-C.) — guerre civile contre Pompée",
      "Dictateur de Rome : réformes du calendrier (calendrier julien), urbanisme",
      "Assassiné le 15 mars -44 par Brutus, Cassius et les conjurés",
      "Ses guerres : annexion de la Gaule, peuplée de 4-5 millions de Gaulois"
    ],
    quote: "Je suis venu, j'ai vu, j'ai vaincu. (Veni, vidi, vici)",
    level: ['6e', '5e']
  },
  {
    id: 'augustus',
    name: 'Auguste (Octave)',
    birth: '-63',
    death: '14',
    era: 'Antiquité',
    category: 'Politique',
    nationality: 'Romaine',
    bio: "Petit-neveu et fils adoptif de César, Octave (Auguste) devient le premier empereur romain en -27. Il instaure le Principat, maintenant les formes républicaines tout en concentrant le pouvoir. Son règne (27 av. J.-C. - 14 ap. J.-C.) est l'âge d'or de Rome : Pax Romana, développement des arts (Virgile, Ovide, Horace), construction monumentale.",
    keyFacts: [
      "Vainqueur d'Antoine et Cléopâtre à Actium (-31 av. J.-C.)",
      "Proclamé Auguste (-27 av. J.-C.) — premier emperor romain",
      "Instaure la Pax Romana : 200 ans de paix relative",
      "Grand bâtisseur : Forum d'Auguste, Ara Pacis, 'Trouva Rome en briques, la laissa en marbre'",
      "Mécène des arts : Virgile (Énéide), Horace, Tite-Live"
    ],
    quote: "J'ai trouvé Rome en briques, je la laisse en marbre.",
    level: ['6e']
  },
  {
    id: 'cleopatre',
    name: 'Cléopâtre VII',
    birth: '-69',
    death: '-30',
    era: 'Antiquité',
    category: 'Politique',
    nationality: 'Égyptienne',
    bio: "Dernière reine de la dynastie lagide d'Égypte, Cléopâtre VII (69-30 av. J.-C.) est la souveraine la plus célèbre de l'Antiquité. Polyglotte (elle parle 9 langues), diplomate et politique habile, elle s'allie à César puis à Marc Antoine pour préserver l'indépendance de l'Égypte face à Rome. Vaincue par Octave à Actium, elle se suicide pour ne pas être exhibée en triomphe à Rome.",
    keyFacts: [
      "Règne sur l'Égypte ptolémaïque (51-30 av. J.-C.)",
      "Alliance avec César (47 av. J.-C.) — naissance de Césarion",
      "Alliance avec Marc Antoine — rêve d'un empire Orient-Occident",
      "Défaite d'Actium (31 av. J.-C.) — fin du dernier royaume hellénistique",
      "Se suicide en 30 av. J.-C. — l'Égypte devient province romaine"
    ],
    quote: "Je ne serai pas exhibée en triomphe.",
    level: ['6e', '2nde']
  },
  // === MOYEN ÂGE ===
  {
    id: 'charlemagne',
    name: 'Charlemagne',
    birth: '742',
    death: '814',
    era: 'Moyen Âge',
    category: 'Politique',
    nationality: 'Franque',
    bio: "Roi des Francs (768) et premier empereur d'Occident (800), Charlemagne unifie la majeure partie de l'Europe occidentale. Son règne marque la renaissance carolingienne : réforme de l'écriture (minuscule carolingienne), des écoles (capitulaire de 789), et de l'Église. Son Empire se divise à sa mort entre ses petits-fils (traité de Verdun, 843).",
    keyFacts: [
      "Sacré Roi des Francs en 768, succède à son père Pépin le Bref",
      "Couronnement comme Empereur d'Occident à Rome (25 décembre 800) par le pape Léon III",
      "Capitulaire de Villis et réformes administratives (comtes, missi dominici)",
      "Renaissance carolingienne : école du palais, Alcuin, écriture caroline",
      "Traité de Verdun (843) — partage de l'Empire entre ses 3 petits-fils"
    ],
    quote: "Les ignorants ne peuvent se permettre de mépriser l'instruction.",
    level: ['5e']
  },
  {
    id: 'ibn_khaldoun',
    name: 'Ibn Khaldoun',
    birth: '1332',
    death: '1406',
    era: 'Moyen Âge',
    category: 'Intellectuel',
    nationality: 'Tunisienne (Arabe)',
    bio: "Historien, philosophe et sociologue tunisien du XIVe siècle, Ibn Khaldoun est l'un des plus grands intellectuels du Moyen Âge mondial. Sa Muqaddima (Introduction) est le premier traité de philosophie de l'histoire et de sociologie. Il analyse les cycles des civilisations, la cohésion sociale (asabiyya) et l'alternance entre sociétés sédentaires et nomades.",
    keyFacts: [
      "Né à Tunis (1332), vit au Maghreb, en Espagne, en Égypte",
      "Muqaddima (1377) : philosophie de l'histoire, sociologie avant la lettre",
      "Concept d'asabiyya : cohésion sociale et familiale moteur des civilisations",
      "Analyse des cycles : naissance, apogée et déclin des empires",
      "Rencontre Tamerlan à Damas (1401)"
    ],
    quote: "L'histoire est la science de la connaissance des causes et des origines des événements.",
    level: ['5e', '2nde']
  },
  // === ÉPOQUE MODERNE (XVe-XVIIIe s.) ===
  {
    id: 'colomb',
    name: 'Christophe Colomb',
    birth: '1451',
    death: '1506',
    era: 'Époque moderne',
    category: 'Exploration',
    nationality: 'Génoise/Espagnole',
    bio: "Navigateur génois au service de l'Espagne, Christophe Colomb atteint les Caraïbes le 12 octobre 1492, cherchant une route vers les Indes par l'Ouest. Il pense mourir en ayant découvert l'Asie. Ses 4 voyages ouvrent l'ère de la colonisation européenne des Amériques. Sa découverte entraîne la mort de 90% des populations amérindiennes et la traite négrière.",
    keyFacts: [
      "1er voyage : 3 août - 12 octobre 1492 — atteint les Bahamas (San Salvador)",
      "Croit mourir en ayant découvert l'Asie — erreur maintenue jusqu'à sa mort",
      "4 voyages en tout (1492, 1493, 1498, 1502)",
      "Ouvre l'ère de la colonisation espagnole des Amériques (Conquistadors)",
      "Le continent sera nommé Amérique d'après Amerigo Vespucci, non d'après lui"
    ],
    quote: "On ne peut pas découvrir de nouveaux océans si on n'a pas le courage de perdre de vue la côte.",
    level: ['4e', '2nde']
  },
  {
    id: 'louis14',
    name: 'Louis XIV',
    birth: '1638',
    death: '1715',
    era: 'Époque moderne',
    category: 'Politique',
    nationality: 'Française',
    bio: "Roi de France de 1643 à 1715 (72 ans de règne — le plus long de l'Histoire de France), Louis XIV incarne la monarchie absolue de droit divin. Il construit Versailles, fait de Paris une capitale mondiale de l'art et de la mode, centralise l'État (intendants), mais épuise la France dans des guerres incessantes. Sa révocation de l'édit de Nantes (1685) provoque l'exil de 300 000 protestants.",
    keyFacts: [
      "Règne personnel à partir de 1661 (mort de Mazarin)",
      "Construction de Versailles (1661-1710) — symbole de l'absolutisme",
      "Revocation de l'édit de Nantes (1685) — persécution des protestants",
      "'L'État, c'est moi' (probablement apocryphe mais révélateur de sa conception du pouvoir)",
      "Guerres : succession d'Espagne, de Hollande, ligue d'Augsbourg — épuisement de la France"
    ],
    quote: "L'État, c'est moi.",
    level: ['4e']
  },
  {
    id: 'montesquieu',
    name: 'Montesquieu',
    birth: '1689',
    death: '1755',
    era: 'Époque moderne',
    category: 'Intellectuel',
    nationality: 'Française',
    bio: "Charles-Louis de Secondat, baron de Montesquieu (1689-1755), magistrat et philosophe français, est l'auteur de L'Esprit des lois (1748). Il y théorise la séparation des pouvoirs (exécutif, législatif, judiciaire) comme garantie de la liberté politique. Cette théorie est à la base de toutes les constitutions démocratiques modernes (USA 1787, France 1789).",
    keyFacts: [
      "Lettres persanes (1721) — critique satirique de la société française",
      "L'Esprit des lois (1748) — théorie de la séparation des pouvoirs",
      "Influence directe sur la Constitution américaine (1787) et la DDHC (1789)",
      "Distingue 3 types de gouvernement : démocratie, aristocratie, monarchie/despotisme",
      "Considéré comme le père du libéralisme politique"
    ],
    quote: "Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir.",
    level: ['4e', '2nde', 'HGGSP']
  },
  // === RÉVOLUTION ET XIXe SIÈCLE ===
  {
    id: 'louis_xvi',
    name: 'Louis XVI',
    birth: '1754',
    death: '1793',
    era: 'XVIIIe siècle',
    category: 'Politique',
    nationality: 'Française',
    bio: "Dernier roi de France de l'Ancien Régime, Louis XVI (1754-1793) monte sur le trône à 20 ans en 1774. Homme bon mais indécis, confronté à une crise financière gravissime (dette de la guerre d'Indépendance américaine), il convoque les États généraux en mai 1789, déclenchant la Révolution. La fuite à Varennes (juin 1791) brise la confiance des Français. Condamné à mort par la Convention pour trahison, il est guillotiné le 21 janvier 1793.",
    keyFacts: [
      "Monte sur le trône à 20 ans en 1774, succédant à Louis XV",
      "Soutient l'indépendance américaine (La Fayette) — mais creuse la dette française",
      "Convoque les États généraux (5 mai 1789) — déclenche la Révolution",
      "Fuite à Varennes (20-21 juin 1791) — trahison aux yeux des révolutionnaires",
      "Guillotiné le 21 janvier 1793 place de la Révolution (aujourd'hui de la Concorde)"
    ],
    quote: "Je meurs innocent de tous les crimes qu'on m'impute.",
    level: ['4e', '3e', '2nde', '1ere']
  },
  {
    id: 'napoleon',
    name: 'Napoléon Bonaparte',
    birth: '1769',
    death: '1821',
    era: 'XIXe siècle',
    category: 'Militaire',
    nationality: 'Française (Corse)',
    bio: "Napoléon Bonaparte (1769-1821), général corse, prend le pouvoir par le coup d'État du 18 brumaire (9 novembre 1799). Consul puis Empereur des Français (1804-1815), il réorganise la France (Code civil, Légion d'honneur, lycées, Banque de France) et conquiert l'Europe. Vaincu à Waterloo (1815), il meurt en exil à Sainte-Hélène.",
    keyFacts: [
      "Coup d'État du 18 Brumaire (9 novembre 1799) — fin de la Révolution",
      "Code civil (1804) — fondement du droit français jusqu'aujourd'hui",
      "Sacre comme Empereur (2 décembre 1804) à Notre-Dame par le pape",
      "Grande Empire : 130 départements, 44 millions d'habitants",
      "Défaite de Waterloo (18 juin 1815) — exil à Sainte-Hélène"
    ],
    quote: "L'impossible n'est pas français.",
    level: ['4e', '3e']
  },
  // === PREMIÈRE GUERRE MONDIALE ===
  {
    id: 'clemenceau',
    name: 'Georges Clemenceau',
    birth: '1841',
    death: '1929',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Française',
    bio: "Homme politique français surnommé 'le Tigre', Clemenceau (1841-1929) est l'une des figures majeures de la IIIe République. Dreyfusard convaincu, il défend l'affaire Calas. Président du Conseil (1906-1909 et 1917-1920), il dirige la France dans les dernières années de la Grande Guerre et incarne la résistance nationale. Il préside la Conférence de Paris (1919) et signe le traité de Versailles.",
    keyFacts: [
      "Journaliste et défenseur de Dreyfus (publie 'J'Accuse' de Zola dans L'Aurore)",
      "Président du Conseil (1917-1920) — dirige la France en fin de guerre",
      "Préside la Conférence de Paris (1919) — traité de Versailles",
      "Surnommé 'le Tigre' pour son énergie et son combativité",
      "Discours du 11 novembre 1918 : 'Victoire ! La France, la grande France, la France éternelle !'"
    ],
    quote: "La guerre ! C'est une chose trop grave pour la confier à des militaires.",
    level: ['3e', '1ere']
  },
  // === ENTRE-DEUX-GUERRES ET WWII ===
  {
    id: 'hitler',
    name: 'Adolf Hitler',
    birth: '1889',
    death: '1945',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Autrichienne/Allemande',
    bio: "Adolf Hitler (1889-1945), peintre raté autrichien, monte dans la politique allemande après la défaite de 1918. Chef du NSDAP (parti nazi) depuis 1921, il rate le putsch de Munich (1923). Nommé chancelier en 1933, il instaure une dictature totalitaire, persécute les Juifs (lois de Nuremberg, Shoah) et déclenche la Seconde Guerre mondiale. Se suicide dans son bunker de Berlin le 30 avril 1945.",
    keyFacts: [
      "Mein Kampf (1925) : programme idéologique nazi (antisémitisme, pangermanisme, espace vital)",
      "Nommé chancelier le 30 janvier 1933 — instauration du IIIe Reich",
      "Lois de Nuremberg (1935) — déchéance de citoyenneté des Juifs allemands",
      "Nuit de Cristal (novembre 1938) — pogrom organisé par les nazis",
      "Shoah : 6 millions de Juifs exterminés dans les camps (1941-1945)"
    ],
    quote: "La Russie sera notre Inde à nous. Comme les Anglais dominent leur empire avec une poignée d'hommes, nous gouvernerons notre espace vital à l'Est.",
    level: ['3e', '1ere']
  },
  {
    id: 'staline',
    name: 'Joseph Staline',
    birth: '1878',
    death: '1953',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Soviétique (Géorgienne)',
    bio: "Fils de cordonnier géorgien, Joseph Staline (1878-1953) prend le pouvoir en URSS après la mort de Lénine (1924). Son règne (1924-1953) est marqué par la collectivisation forcée (famines de 1932-1933 en Ukraine, Holodomor), les purges de l'armée et du Parti, le Goulag (millions de déportés), la terreur. Mais aussi l'industrialisation massive, la victoire contre le nazisme et le statut de superpuissance.",
    keyFacts: [
      "Élimine ses rivaux (Trotski, Boukharine, Zinoviev) après la mort de Lénine",
      "Collectivisation forcée (1929-1933) — millions de morts par famine (Holodomor en Ukraine)",
      "Grande Terreur (1936-1938) — purges, procès de Moscou, Goulag",
      "Pacte germano-soviétique (août 1939) — puis basculement après Barbarossa (1941)",
      "Conférences de Yalta et Potsdam — partage du monde entre Alliés"
    ],
    quote: "[Ses citations sont des instruments de propagande totalitaire]",
    level: ['3e', '1ere', 'Terminale']
  },
  {
    id: 'de_gaulle',
    name: 'Charles de Gaulle',
    birth: '1890',
    death: '1970',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Française',
    bio: "Officier de chars, de Gaulle (1890-1970) lance depuis Londres l'Appel du 18 juin 1940 après la défaite face à l'Allemagne. Chef de la France Libre, il dirige la Résistance extérieure, entre triomphalement à Paris le 26 août 1944 et préside le Gouvernement provisoire. Revenu au pouvoir en 1958, il fonde la Ve République (constitution présidentielle), décolonise l'Algérie et mène une politique étrangère indépendante.",
    keyFacts: [
      "Appel du 18 juin 1940 (BBC Londres) — refus de l'armistice, France Libre",
      "Chef des Forces Françaises Libres — Libération de Paris (26 août 1944)",
      "Fondateur de la Ve République (constitution du 4 octobre 1958)",
      "Accords d'Évian (1962) — indépendance de l'Algérie",
      "Démissionne en 1969 après l'échec du référendum, meurt en 1970"
    ],
    quote: "Quoi qu'il arrive, la Flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas.",
    quoteSource: "Appel du 18 juin 1940, BBC Londres",
    level: ['3e', '1ere', 'Terminale']
  },
  {
    id: 'jean_moulin',
    name: 'Jean Moulin',
    birth: '1899',
    death: '1943',
    era: 'XXe siècle',
    category: 'Résistance',
    nationality: 'Française',
    bio: "Préfet, résistant et martyr, Jean Moulin (1899-1943) est le héros de la Résistance intérieure française. Chargé par de Gaulle d'unifier la Résistance, il fonde le Conseil National de la Résistance (CNR, 27 mai 1943) qui réunit pour la première fois tous les mouvements de résistance sous l'autorité de Gaulle. Arrêté par la Gestapo à Caluire (juin 1943), torturé par Klaus Barbie, il meurt sans avoir parlé.",
    keyFacts: [
      "Préfet d'Eure-et-Loir, refuse de signer un faux document nazi (1940)",
      "Rejoint de Gaulle à Londres, parachuté en France (1942)",
      "Fonde le Conseil National de la Résistance (27 mai 1943)",
      "Arrêté à Caluire-et-Cuire par Klaus Barbie (21 juin 1943)",
      "Meurt des suites des tortures — transféré au Panthéon en 1964 (discours de Malraux)"
    ],
    quote: "La France n'est pas pour eux une mère, c'est une patrie.",
    level: ['3e', '1ere']
  },
  // === GUERRE FROIDE ===
  {
    id: 'truman',
    name: 'Harry Truman',
    birth: '1884',
    death: '1972',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Américaine',
    bio: "33e président des États-Unis (1945-1953), Harry Truman succède à Roosevelt à la mort de ce dernier. Il prend la décision de lancer les bombes atomiques sur Hiroshima et Nagasaki (6 et 9 août 1945). Il définit la doctrine Truman (1947, containment du communisme), le Plan Marshall, et engage les États-Unis dans la guerre de Corée (1950).",
    keyFacts: [
      "Décide le largage des bombes atomiques sur Hiroshima (6 août) et Nagasaki (9 août 1945)",
      "Doctrine Truman (mars 1947) — containment du communisme",
      "Plan Marshall (1948) — aide économique américaine à l'Europe",
      "Création de l'OTAN (1949) — alliance militaire occidentale",
      "Guerre de Corée (1950-1953) — premier conflit de la Guerre Froide"
    ],
    quote: "The Buck stops here. (C'est ici que s'arrête la responsabilité.)",
    level: ['3e', 'Terminale']
  },
  {
    id: 'churchill',
    name: 'Winston Churchill',
    birth: '1874',
    death: '1965',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Britannique',
    bio: "Premier ministre britannique pendant la Seconde Guerre mondiale (1940-1945), Winston Churchill (1874-1965) incarne la résistance britannique au nazisme. Son discours 'We shall fight on the beaches' (juin 1940) galvanise les Britanniques après la déroute de Dunkerque. Alliance avec Roosevelt et Staline (Grandes Alliés). Prix Nobel de littérature en 1953. Il prononce le premier le mot 'rideau de fer' (Fulton, 1946).",
    keyFacts: [
      "'We shall fight on the beaches' (juin 1940) — refus de toute capitulation",
      "Alliance Roosevelt-Churchill (Charte de l'Atlantique, 1941)",
      "Conférences de Téhéran (1943), Yalta et Potsdam (1945)",
      "Discours de Fulton (5 mars 1946) — popularise le terme 'rideau de fer'",
      "Prix Nobel de littérature (1953) pour ses mémoires de guerre"
    ],
    quote: "Nous nous battrons sur les plages, nous nous battrons sur les terrains d'atterrissage, nous nous battrons dans les champs... Nous ne nous rendrons jamais.",
    level: ['3e', '1ere']
  },
  {
    id: 'kennedy',
    name: 'John Fitzgerald Kennedy',
    birth: '1917',
    death: '1963',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Américaine',
    bio: "35e président des États-Unis (1961-1963), JFK est le plus jeune président élu et le premier catholique. Son mandat est marqué par la crise des missiles de Cuba (octobre 1962, 13 jours au bord de la guerre nucléaire), la création de la NASA/course à la lune, et la défense des droits civiques. Assassiné à Dallas le 22 novembre 1963, son meurtre reste entouré de mystère.",
    keyFacts: [
      "Premier président catholique et le plus jeune président élu des USA",
      "Crise des missiles de Cuba (22-28 octobre 1962) — 13 jours au bord de la guerre nucléaire",
      "Ligne rouge Washington-Moscou (téléphone rouge) après la crise de Cuba",
      "Assassiné à Dallas le 22 novembre 1963 (assassin officiel : Lee Harvey Oswald)",
      "Discours 'Ich bin ein Berliner' (Berlin, 1963)"
    ],
    quote: "Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'king',
    name: 'Martin Luther King',
    birth: '1929',
    death: '1968',
    era: 'XXe siècle',
    category: 'Droits civiques',
    nationality: 'Américaine',
    bio: "Pasteur baptiste et leader des droits civiques américains, Martin Luther King (1929-1968) est la figure emblématique de la lutte non-violente contre la ségrégation raciale aux États-Unis. Inspiré par Gandhi, il organise le boycott de Montgomery (1955-1956), la Marche sur Washington (1963), son discours 'I Have a Dream'. Il obtient le Prix Nobel de la Paix en 1964. Assassiné à Memphis le 4 avril 1968.",
    keyFacts: [
      "Boycott des bus de Montgomery (1955-1956) — premier grand succès",
      "Discours 'I Have a Dream' (28 août 1963, Marche sur Washington) — 250 000 personnes",
      "Civil Rights Act (1964) et Voting Rights Act (1965) — acquis majeurs",
      "Prix Nobel de la Paix (1964)",
      "Assassiné à Memphis le 4 avril 1968"
    ],
    quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    level: ['3e', '1ere', 'Terminale']
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    birth: '1869',
    death: '1948',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Indienne',
    bio: "Mohandas Karamchand Gandhi dit 'Mahatma' (Grande Âme) est le père de l'indépendance indienne. Avocat formé en Angleterre, il développe en Afrique du Sud (1893-1914) la doctrine de la non-violence (ahimsa) et de la résistance passive (satyagraha). De retour en Inde, il mène l'Indian National Congress dans sa lutte contre la domination britannique. L'Inde obtient l'indépendance le 15 août 1947. Gandhi est assassiné le 30 janvier 1948.",
    keyFacts: [
      "Développe la non-violence (ahimsa) et la résistance passive (satyagraha) en Afrique du Sud",
      "Marche du sel (mars-avril 1930) — défi symbolique au monopole colonial britannique",
      "Indépendance de l'Inde (15 août 1947) — mais partition Inde/Pakistan",
      "Assassiné par un extrémiste hindou (30 janvier 1948)",
      "Influence sur Martin Luther King, Nelson Mandela, Mandela"
    ],
    quote: "Sois le changement que tu veux voir dans le monde.",
    level: ['3e', '1ere', 'Terminale']
  },
  {
    id: 'mandela',
    name: 'Nelson Mandela',
    birth: '1918',
    death: '2013',
    era: 'XXe siècle',
    category: 'Droits civiques',
    nationality: 'Sud-Africaine',
    bio: "Nelson Mandela (1918-2013) est le symbole mondial de la lutte contre l'apartheid en Afrique du Sud. Emprisonné 27 ans à Robben Island (1964-1990), il sort sans rancœur et négocie la fin pacifique de l'apartheid. Premier président noir d'Afrique du Sud élu au suffrage universel (1994-1999). Prix Nobel de la Paix partagé avec De Klerk (1993). Sa politique de réconciliation nationale est un modèle mondial.",
    keyFacts: [
      "Cofondateur de l'ANC Youth League (1944) — lutte contre l'apartheid",
      "Emprisonné à Robben Island (1964-1990) — 27 ans de prison",
      "Libéré le 11 février 1990 — négociations avec De Klerk",
      "1er président noir d'Afrique du Sud (1994-1999)",
      "Prix Nobel de la Paix (1993) — partagé avec De Klerk"
    ],
    quote: "Il semble toujours impossible jusqu'à ce que ce soit fait.",
    level: ['3e', '1ere', 'Terminale']
  },
  // === CONTEMPORAINE ===
  {
    id: 'gorbatchev',
    name: 'Mikhaïl Gorbatchev',
    birth: '1931',
    death: '2022',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Soviétique',
    bio: "Dernier dirigeant de l'URSS (1985-1991), Mikhaïl Gorbatchev (1931-2022) lance les réformes de glasnost (transparence) et perestroïka (restructuration) qui contribuent à la chute de l'URSS. Prix Nobel de la Paix (1990) pour son rôle dans la fin de la Guerre Froide. Son bilan est controversé en Russie : héros pour l'Occident, responsable de la 'catastrophe géopolitique' de la fin de l'URSS pour les Russes.",
    keyFacts: [
      "Secrétaire général du PCUS depuis 1985 — dernier dirigeant de l'URSS",
      "Glasnost (transparence) et perestroïka (restructuration) — réformes libéralisatrices",
      "Lâche les démocraties populaires d'Europe de l'Est (1989) — chute du mur",
      "Prix Nobel de la Paix (1990)",
      "Démissionne le 25 décembre 1991 — dissolution officielle de l'URSS"
    ],
    quote: "Il ne peut pas y avoir de démocratie sans la vérité.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'reagan',
    name: 'Ronald Reagan',
    birth: '1911',
    death: '2004',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Américaine',
    bio: "40e président des États-Unis (1981-1989), ancien acteur de cinéma, Ronald Reagan (1911-2004) relance la confrontation avec l'URSS ('empire du Mal'), mène une politique économique néolibérale (reaganomics) et relauce la course aux armements (Initiative de Défense Stratégique). Son mandat voit l'effacement progressif de l'URSS sous le coût de la course aux armements.",
    keyFacts: [
      "Reaganomics : réductions d'impôts, dérégulation, lutte contre l'État providence",
      "Qualifie l'URSS d''empire du Mal' — relance de la rhétorique de Guerre Froide",
      "Initiative de Défense Stratégique (IDS, 'guerre des étoiles') — accélère la faillite soviétique",
      "Accords START avec Gorbatchev — début du désarmement nucléaire",
      "'Monsieur Gorbatchev, ouvrez ce mur !' (Berlin, 1987)"
    ],
    quote: "Monsieur Gorbatchev, ouvrez ce mur !",
    level: ['3e', 'Terminale']
  },
  {
    id: 'simone_veil',
    name: 'Simone Veil',
    birth: '1927',
    death: '2017',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Française',
    bio: "Rescapée d'Auschwitz, Simone Veil (1927-2017) est l'une des femmes politiques les plus admirées de France. Comme ministre de la Santé (1974-1979), elle fait passer la loi légalisant l'IVG (interruption volontaire de grossesse, 17 janvier 1975) malgré une opposition virulente. Présidente du Parlement européen (1979-1982), membre du Conseil constitutionnel, elle entre au Panthéon en 2018.",
    keyFacts: [
      "Déportée à Auschwitz à 16 ans (1944) — perd sa mère et son frère",
      "Loi Veil (17 janvier 1975) — légalise l'IVG en France malgré les attaques",
      "Présidente du Parlement européen (1979-1982)",
      "Membre du Conseil constitutionnel (1998-2007)",
      "Panthéon (1er juillet 2018) — aux côtés de son mari Antoine"
    ],
    quote: "Aucune femme ne recourt de gaieté de cœur à l'avortement. Il suffit d'écouter les femmes.",
    level: ['3e', '1ere', 'Terminale']
  },
  {
    id: 'lumumba',
    name: 'Patrice Lumumba',
    birth: '1925',
    death: '1961',
    era: 'XXe siècle',
    category: 'Décolonisation',
    nationality: 'Congolaise',
    bio: "Premier ministre de la République du Congo (1960), Patrice Lumumba (1925-1961) est le symbole de l'indépendance africaine et de l'anti-impérialisme. Élu lors de l'indépendance du Congo belge (30 juin 1960), il défend la souveraineté congolaise contre les intérêts belges et américains sur le Katanga. Renversé par un coup d'État soutenu par la CIA et la Belgique, il est assassiné le 17 janvier 1961.",
    keyFacts: [
      "Discours d'indépendance du Congo (30 juin 1960) — défi direct à la Belgique",
      "Premier ministre du Congo indépendant (juin-septembre 1960)",
      "Renversé par Mobutu avec le soutien de la CIA et de la Belgique",
      "Assassiné le 17 janvier 1961 — son corps dissous à l'acide",
      "Symbole du panafricanisme et de l'anti-impérialisme"
    ],
    quote: "L'indépendance du Congo est proclamée dans l'entente avec la Belgique, mais c'est nous qui avons choisi l'Afrique.",
    level: ['3e', '1ere', 'Terminale']
  },
  {
    id: 'giscard',
    name: "Valéry Giscard d'Estaing",
    birth: '1926',
    death: '2020',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Française',
    bio: "Président de la République française (1974-1981), Valéry Giscard d'Estaing modernise la société française : majorité à 18 ans, loi Veil sur l'IVG, divorce par consentement mutuel, création du Conseil européen. Battu par François Mitterrand en 1981, il reste actif en politique et co-rédige la Constitution européenne (2004, rejetée par référendum en France en 2005).",
    keyFacts: [
      "Élu président en 1974 (50,8%) — le plus jeune président de la Ve République",
      "Majorité civique à 18 ans (1974)",
      "Loi sur le divorce par consentement mutuel (1975)",
      "Création du Conseil européen (1974) — institutionnalisation des sommets de chefs d'État",
      "Battu par Mitterrand en 1981 — 'passation de pouvoir'"
    ],
    quote: "Au fond, les Français sont des veaux.",
    level: ['3e', 'Terminale']
  },

  // === SCIENTIFIQUES ===
  {
    id: 'newton',
    name: 'Isaac Newton',
    birth: '1643',
    death: '1727',
    era: 'Temps Modernes',
    category: 'Intellectuel',
    nationality: 'Britannique',
    bio: "Mathématicien, physicien et astronome britannique, Newton est l'un des plus grands scientifiques de l'histoire. Il formule les lois de la mécanique classique et de la gravitation universelle (Principia Mathematica, 1687), invente le calcul infinitésimal (simultanément avec Leibniz), décompose la lumière blanche avec un prisme. Sa vision du monde domine la physique pendant deux siècles, jusqu'à Einstein.",
    keyFacts: [
      "Lois du mouvement et de la gravitation universelle (1687)",
      "Invention du calcul infinitésimal (parallèlement à Leibniz)",
      "Décomposition de la lumière : le prisme et le spectre",
      "Directeur de la Monnaie royale (1699)",
      "Président de la Royal Society (1703-1727)"
    ],
    quote: "Si j'ai vu plus loin, c'est en me tenant sur les épaules de géants.",
    level: ['2nde', 'Terminale']
  },
  {
    id: 'darwin',
    name: 'Charles Darwin',
    birth: '1809',
    death: '1882',
    era: 'XIXe siècle',
    category: 'Intellectuel',
    nationality: 'Britannique',
    bio: "Naturaliste britannique, Darwin révolutionne la biologie avec sa théorie de l'évolution par sélection naturelle (De l'origine des espèces, 1859). Après 5 ans à bord du Beagle (1831-1836), notamment aux îles Galápagos, il développe l'idée que toutes les espèces descendent d'ancêtres communs et évoluent par adaptation au milieu. Sa théorie provoque une révolution conceptuelle et heurte les religions.",
    keyFacts: [
      "Voyage sur le Beagle (1831-1836) : îles Galápagos, pinsons",
      "De l'origine des espèces (1859) — théorie de l'évolution",
      "Sélection naturelle : survie du plus adapté",
      "La Filiation de l'Homme (1871) : l'homme descend d'un primate",
      "Conflit avec les Églises — procès du singe (héritage aux USA)"
    ],
    quote: "Ce n'est pas le plus fort de l'espèce qui survit, ni le plus intelligent. C'est celui qui est le plus capable de s'adapter au changement.",
    level: ['2nde', 'Terminale', 'HGGSP']
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    birth: '1879',
    death: '1955',
    era: 'XXe siècle',
    category: 'Intellectuel',
    nationality: 'Germano-américaine',
    bio: "Physicien théoricien germano-américain, Einstein révolutionne la physique avec ses théories de la relativité restreinte (1905 : E=mc²) et générale (1915). Il reçoit le prix Nobel de physique en 1921 pour la photoélectricité. Juif allemand, il fuit le nazisme en 1933 et s'installe aux États-Unis. Sa lettre à Roosevelt (1939) contribuera à lancer le Projet Manhattan (bombe atomique) — ce qu'il regrettera.",
    keyFacts: [
      "Théorie de la relativité restreinte (1905) : E=mc²",
      "Relativité générale (1915) : la gravité courbe l'espace-temps",
      "Nobel de physique 1921 (effet photoélectrique)",
      "Fuit le nazisme en 1933 — réfugié aux USA",
      "Lettre à Roosevelt sur la bombe atomique (1939) — regrets ultérieurs"
    ],
    quote: "L'imagination est plus importante que le savoir.",
    level: ['2nde', 'Terminale', 'HGGSP']
  },
  {
    id: 'marie_curie',
    name: 'Marie Curie',
    birth: '1867',
    death: '1934',
    era: 'XIXe siècle',
    category: 'Intellectuel',
    nationality: 'Franco-polonaise',
    bio: "Physicienne et chimiste d'origine polonaise naturalisée française, Marie Curie est la première femme à recevoir un prix Nobel (1903, Physique) et la première personne à en recevoir deux (1911, Chimie). Elle découvre la radioactivité avec son mari Pierre, puis le polonium et le radium. Elle développe les premières unités mobiles de radiologie pendant la Première Guerre mondiale.",
    keyFacts: [
      "Première femme Prix Nobel (1903, Physique, partagé avec Pierre Curie)",
      "Deuxième Prix Nobel (1911, Chimie) — la seule à en avoir deux",
      "Découverte du polonium (dédié à sa patrie) et du radium",
      "Première femme professeure à la Sorbonne (1906)",
      "Meurt de leucémie due à l'exposition aux radiations"
    ],
    quote: "Rien dans la vie ne doit être craint, seulement compris.",
    level: ['5e', '4e', '3e', '2nde', 'Terminale']
  },
  {
    id: 'pasteur',
    name: 'Louis Pasteur',
    birth: '1822',
    death: '1895',
    era: 'XIXe siècle',
    category: 'Intellectuel',
    nationality: 'Française',
    bio: "Chimiste et biologiste français, Pasteur révolutionne la médecine et l'hygiène. Il réfute la génération spontanée, découvre les microbes comme cause des maladies, invente la pasteurisation et développe les premiers vaccins (rage, 1885). L'Institut Pasteur (1888) reste l'un des centres de recherche médicale les plus importants du monde. Sa découverte sauve des centaines de millions de vies.",
    keyFacts: [
      "Réfutation de la génération spontanée (expérience du col de cygne)",
      "Théorie microbienne des maladies",
      "Pasteurisation — conservation des aliments",
      "Premier vaccin contre la rage (1885 — Joseph Meister)",
      "Fondation de l'Institut Pasteur (1888)"
    ],
    quote: "Dans les champs de l'observation, le hasard ne favorise que les esprits préparés.",
    level: ['5e', '3e', '2nde', '1ere']
  },
  {
    id: 'galilee',
    name: 'Galilée',
    birth: '1564',
    death: '1642',
    era: 'Temps Modernes',
    category: 'Intellectuel',
    nationality: 'Italienne',
    bio: "Astronome, physicien et mathématicien italien, Galilée est le père de la méthode scientifique expérimentale. Il améliore la lunette astronomique, observe les lunes de Jupiter, défend le système héliocentrique de Copernic. Condamné par l'Inquisition (1633) à abjurer, il reste en résidence surveillée. Sa formule légendaire 'Et pourtant elle tourne' résume le conflit entre science et dogme religieux.",
    keyFacts: [
      "Amélioration de la lunette astronomique (1609)",
      "Observation des lunes de Jupiter — preuve que tout ne tourne pas autour de la Terre",
      "Défense du système héliocentrique de Copernic",
      "Condamné par l'Inquisition en 1633 — abjuration forcée",
      "Père de la méthode scientifique expérimentale"
    ],
    quote: "Et pourtant elle tourne.",
    level: ['5e', '2nde', 'Terminale']
  },

  // === ARTISTES ET HUMANISTES ===
  {
    id: 'leonard_vinci',
    name: 'Léonard de Vinci',
    birth: '1452',
    death: '1519',
    era: 'Temps Modernes',
    category: 'Art',
    nationality: 'Italienne',
    bio: "Génie de la Renaissance italienne, Léonard de Vinci est peintre (La Joconde, La Cène), sculpteur, architecte, ingénieur, inventeur, anatomiste, musicien et philosophe. Né à Vinci (Toscane), il travaille à Milan pour Ludovic Sforza, puis à Rome et se retire en France sur invitation de François Ier (1516-1519). Ses carnets (codex) révèlent des inventions visionnaires : hélicoptère, tank, aile volante.",
    keyFacts: [
      "La Joconde (Mona Lisa, 1503-1519) — tableau le plus célèbre du monde",
      "La Cène (1495-1497) — fresque à Milan",
      "Études anatomiques sur des cadavres — révolutionne la connaissance du corps humain",
      "Carnets avec inventions : parachute, hélicoptère, char d'assaut",
      "Invité par François Ier — meurt en France (Amboise, 1519)"
    ],
    quote: "La peinture est une poésie muette et la poésie est une peinture qui parle.",
    level: ['5e', '2nde']
  },
  {
    id: 'michel_ange',
    name: 'Michel-Ange',
    birth: '1475',
    death: '1564',
    era: 'Temps Modernes',
    category: 'Art',
    nationality: 'Italienne',
    bio: "Sculpteur, peintre, architecte et poète de la Renaissance italienne, Michel-Ange est l'un des plus grands artistes de l'histoire. Il réalise le David (1504), la Pietà (1498-1499), peint la voûte de la Chapelle Sixtine (1508-1512) pour le pape Jules II — 4 ans seul sur des échafaudages. Il conçoit également la coupole de la basilique Saint-Pierre de Rome.",
    keyFacts: [
      "David (1504) — sculpture emblématique de la Renaissance",
      "Chapelle Sixtine : voûte (1508-1512) et Jugement Dernier (1536-41)",
      "La Pietà — réalisée à 24 ans",
      "Architecte de la basilique Saint-Pierre de Rome",
      "Poète : plus de 300 poèmes conservés"
    ],
    quote: "Un homme ne peint pas avec ses mains mais avec son cerveau.",
    level: ['5e', '2nde']
  },
  {
    id: 'shakespeare',
    name: 'William Shakespeare',
    birth: '1564',
    death: '1616',
    era: 'Temps Modernes',
    category: 'Art',
    nationality: 'Britannique',
    bio: "Dramaturge et poète anglais, Shakespeare est le plus grand écrivain de la langue anglaise et l'un des auteurs les plus influents de toute la littérature mondiale. Il écrit 37 pièces (Hamlet, Macbeth, Othello, Le Roi Lear, Roméo et Juliette) et 154 sonnets. Ses œuvres explorent la psychologie humaine, le pouvoir, la jalousie, la trahison et l'amour avec une profondeur universelle.",
    keyFacts: [
      "37 pièces de théâtre et 154 sonnets",
      "Co-propriétaire du Globe Theatre (1599)",
      "Hamlet, Macbeth, Roméo et Juliette, Othello, Le Roi Lear",
      "Elizabethan era — favori de la reine Elizabeth Ière",
      "Influence universelle sur la langue anglaise (plus de 1700 mots inventés)"
    ],
    quote: "Être ou ne pas être, telle est la question.",
    level: ['2nde', 'Terminale']
  },
  {
    id: 'moliere',
    name: 'Molière',
    birth: '1622',
    death: '1673',
    era: 'Temps Modernes',
    category: 'Art',
    nationality: 'Française',
    bio: "Dramaturge et comédien français, Jean-Baptiste Poquelin dit Molière est le plus grand auteur de comédies de la littérature française. Protégé de Louis XIV, il crée l'Illustre-Théâtre puis joue à Versailles. Ses pièces (Le Misanthrope, Le Tartuffe, L'Avare, Dom Juan) dénoncent avec humour et ironie l'hypocrisie religieuse, la vanité bourgeoise et les travers humains. Il meurt sur scène.",
    keyFacts: [
      "Dramaturge favori de Louis XIV (Versailles)",
      "Le Tartuffe (1664) — attaque contre l'hypocrisie religieuse, interdit puis autorisé",
      "Le Misanthrope (1666), L'Avare (1668), Le Bourgeois Gentilhomme (1670)",
      "Mort sur scène lors d'une représentation du Malade Imaginaire (1673)",
      "Père de la comédie française classique"
    ],
    quote: "C'est une étrange entreprise que celle de faire rire les honnêtes gens.",
    level: ['4e', '3e', '2nde']
  },
  {
    id: 'victor_hugo',
    name: 'Victor Hugo',
    birth: '1802',
    death: '1885',
    era: 'XIXe siècle',
    category: 'Art',
    nationality: 'Française',
    bio: "Écrivain, poète, dramaturge et homme politique français, Victor Hugo est la figure centrale du romantisme français. Auteur des Misérables (1862) et Notre-Dame de Paris (1831), il s'engage pour les droits des pauvres, l'abolition de la peine de mort et les droits politiques. Pair de France puis représentant du peuple, il s'exile 19 ans (1851-1870) après le coup d'État de Napoléon III. Ses funérailles (1885) rassemblent 2 millions de personnes.",
    keyFacts: [
      "Les Misérables (1862) — roman social et humaniste universel",
      "Notre-Dame de Paris (1831) — fait redécouvrir l'architecture gothique",
      "Pair de France, puis représentant du peuple",
      "Exil à Guernesey (1851-1870) contre Napoléon III",
      "Funérailles nationales — 2 millions de Parisiens (1885)"
    ],
    quote: "Aimer, c'est agir.",
    level: ['4e', '3e', '2nde', '1ere']
  },

  // === EXPLORATEURS ===
  {
    id: 'magellan',
    name: 'Magellan',
    birth: '1480',
    death: '1521',
    era: 'Temps Modernes',
    category: 'Exploration',
    nationality: 'Portugaise',
    bio: "Navigateur portugais au service du roi d'Espagne, Fernand de Magellan organise la première circumnavigation du globe (1519-1522). Il dirige une flotte de 5 navires et 270 hommes. Magellan est tué aux Philippines (1521) par le chef Lapulapu. Son lieutenant Elcano ramène un seul bateau (le Victoria) avec 18 survivants à Séville — prouvant définitivement la rotondité de la Terre.",
    keyFacts: [
      "Premier tour du monde (1519-1522) — même s'il ne le termine pas",
      "Découverte du détroit de Magellan (extrémité sud de l'Amérique)",
      "Nommé le 'Pacifique' cet océan calme",
      "Tué aux Philippines par le chef Lapulapu (1521)",
      "Juan Sebastián Elcano finit le tour du monde avec 18 survivants"
    ],
    quote: "L'Église dit que la Terre est plate, mais j'ai vu son ombre sur la Lune.",
    level: ['5e', '2nde']
  },
  {
    id: 'vasco_de_gama',
    name: 'Vasco de Gama',
    birth: '1469',
    death: '1524',
    era: 'Temps Modernes',
    category: 'Exploration',
    nationality: 'Portugaise',
    bio: "Navigateur portugais, Vasco de Gama est le premier Européen à atteindre l'Inde par la mer en contournant l'Afrique (1498). Parti de Lisbonne en 1497, il double le cap de Bonne-Espérance et arrive à Calicut (Inde) en mai 1498. Ce voyage ouvre la route maritime des épices, brisant le monopole arabe et ottoman, et permet à Portugal de dominer le commerce de l'océan Indien pendant un siècle.",
    keyFacts: [
      "Premier Européen à atteindre l'Inde par mer (1498)",
      "Double le cap de Bonne-Espérance (après Dias en 1488)",
      "Ouvre la route maritime des épices — révolution commerciale",
      "Trois voyages en Inde (1497, 1502, 1524)",
      "Vice-roi des Indes (1524) — meurt à Cochin"
    ],
    quote: "Nous cherchons des chrétiens et des épices.",
    level: ['5e', '2nde']
  },
  {
    id: 'christophe_colomb',
    name: 'Christophe Colomb',
    birth: '1451',
    death: '1506',
    era: 'Temps Modernes',
    category: 'Exploration',
    nationality: 'Génoise / Espagnole',
    bio: "Navigateur génois au service des Rois Catholiques d'Espagne, Christophe Colomb atteint les Amériques le 12 octobre 1492, pensant avoir atteint les Indes. En 4 voyages (1492, 1493, 1498, 1502), il explore les Caraïbes et l'Amérique centrale. Son voyage ouvre la colonisation des Amériques et provoque l'effondrement des civilisations amérindiennes. Il mourra sans savoir qu'il avait découvert un 'Nouveau Monde'.",
    keyFacts: [
      "12 octobre 1492 : aborde l'île de Guanahani (Bahamas)",
      "Croit arriver en Asie — nomme les habitants 'Indiens'",
      "4 voyages en Amérique (1492, 1493, 1498, 1502)",
      "Financé par les Rois Catholiques (Isabelle de Castille, Ferdinand d'Aragon)",
      "Meurt en 1506 sans savoir avoir découvert un nouveau continent"
    ],
    quote: "Par Castille et Léon, Colomb a trouvé un nouveau monde.",
    level: ['5e', '2nde']
  },

  // === PHILOSOPHES ET PENSEURS ===
  {
    id: 'socrate',
    name: 'Socrate',
    birth: '-470',
    death: '-399',
    era: 'Antiquité',
    category: 'Intellectuel',
    nationality: 'Grecque',
    bio: "Philosophe grec, fondateur de la philosophie morale occidentale, Socrate n'a rien écrit lui-même — on le connaît par Platon et Xénophon. Sa méthode de questionnement systématique (la maïeutique) cherche à faire accoucher la vérité de son interlocuteur. Accusé de corrompre la jeunesse et d'impiété envers les dieux, il est condamné à mort et boit la ciguë (399 av. J.-C.) en refusant de s'enfuir.",
    keyFacts: [
      "Père de la philosophie morale occidentale",
      "La maïeutique — art de faire accoucher les esprits par le questionnement",
      "N'a rien écrit — connu par Platon (dialogues socratiques)",
      "Condamné à mort par 500 jurés athéniens (282 voix contre 218)",
      "Boit la ciguë en 399 av. J.-C. — modèle du sage qui meurt pour ses idées"
    ],
    quote: "Je sais que je ne sais rien.",
    level: ['2nde', 'Terminale', 'HGGSP']
  },
  {
    id: 'platon',
    name: 'Platon',
    birth: '-428',
    death: '-348',
    era: 'Antiquité',
    category: 'Intellectuel',
    nationality: 'Grecque',
    bio: "Philosophe grec, disciple de Socrate et maître d'Aristote, Platon fonde l'Académie d'Athènes (387 av. J.-C.), première institution d'enseignement supérieur du monde occidental. Dans ses Dialogues (La République, Phédon, Le Banquet...) il développe la théorie des Idées : les objets sensibles ne sont que copies imparfaites de formes idéales éternelles. Sa pensée influence toute la philosophie et la théologie chrétiennes.",
    keyFacts: [
      "Fonde l'Académie d'Athènes (387 av. J.-C.)",
      "Théorie des Idées (Formes) — le monde sensible n'est qu'ombre de la réalité",
      "L'Allégorie de la Caverne (La République)",
      "La République — premier traité de philosophie politique",
      "Maître d'Aristote"
    ],
    quote: "L'ignorance est la source de tous les maux.",
    level: ['2nde', 'Terminale', 'HGGSP']
  },
  {
    id: 'rousseau',
    name: 'Jean-Jacques Rousseau',
    birth: '1712',
    death: '1778',
    era: 'Temps Modernes',
    category: 'Intellectuel',
    nationality: 'Française (Genève)',
    bio: "Philosophe, écrivain et musicien des Lumières, né à Genève, Rousseau est l'un des penseurs les plus influents du XVIIIe siècle. Il théorise le Contrat Social (1762) — base de la démocratie moderne — et critique la propriété privée et les inégalités (Discours sur l'origine de l'inégalité). Son concept de 'volonté générale' influence directement la Révolution française et les démocraties modernes.",
    keyFacts: [
      "Du Contrat Social (1762) — 'La volonté générale', souveraineté populaire",
      "Émile ou De l'éducation (1762) — pédagogie naturelle",
      "Critique des inégalités : 'l'homme naît libre, partout il est dans les fers'",
      "Rupture avec Voltaire — vision pessimiste de la civilisation vs son optimisme",
      "Influence directe sur la Révolution française"
    ],
    quote: "L'homme est né libre, et partout il est dans les fers.",
    level: ['3e', '2nde', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'voltaire',
    name: 'Voltaire',
    birth: '1694',
    death: '1778',
    era: 'Temps Modernes',
    category: 'Intellectuel',
    nationality: 'Française',
    bio: "Écrivain, philosophe et satiriste des Lumières françaises, François-Marie Arouet dit Voltaire est le symbole de l'esprit critique du XVIIIe siècle. Emprisonné à la Bastille, exilé en Angleterre, il développe le déisme et le combat contre le fanatisme ('Écrasez l'infâme !', 1759, Candide). Il intervient en faveur de victimes de l'intolérance religieuse (affaire Calas). Correspondant de Frédéric II de Prusse.",
    keyFacts: [
      "Candide ou l'Optimisme (1759) — critique philosophique satirique",
      "Lettres philosophiques (1734) — éloge du modèle anglais",
      "Affaire Calas (1762) — réhabilitation d'un protestant exécuté injustement",
      "Correspondant de Frédéric le Grand et Catherine II",
      "Tolly contre le fanatisme religieux : 'Écrasez l'infâme !'"
    ],
    quote: "Je ne suis pas d'accord avec ce que vous dites, mais je me battrai jusqu'à la mort pour que vous ayez le droit de le dire.",
    level: ['3e', '2nde', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'karl_marx',
    name: 'Karl Marx',
    birth: '1818',
    death: '1883',
    era: 'XIXe siècle',
    category: 'Intellectuel',
    nationality: 'Allemande',
    bio: "Philosophe, économiste et révolutionnaire allemand, Marx est le père du communisme scientifique. Avec Friedrich Engels, il rédige le Manifeste du Parti Communiste (1848) et analyse le capitalisme dans Le Capital (1867). Sa théorie du matérialisme historique — la lutte des classes moteur de l'histoire — a inspiré toutes les révolutions socialistes du XXe siècle (Russie, Chine, Cuba, Vietnam). Son influence sur le monde fut immense et ambivalente.",
    keyFacts: [
      "Manifeste du Parti Communiste (1848) : 'Prolétaires de tous les pays, unissez-vous !'",
      "Le Capital (1867) — analyse scientifique du capitalisme et de la plus-value",
      "Théorie du matérialisme historique — la lutte des classes",
      "Fondateur de l'Association Internationale des Travailleurs (1864)",
      "Exilé à Paris, Bruxelles puis Londres — mort dans la pauvreté"
    ],
    quote: "Les philosophes n'ont fait qu'interpréter le monde ; il s'agit maintenant de le transformer.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },

  // === GRANDS CONQUÉRANTS ET CHEFS MILITAIRES ===
  {
    id: 'genghis_khan',
    name: 'Gengis Khan',
    birth: '1162',
    death: '1227',
    era: 'Moyen Âge',
    category: 'Militaire',
    nationality: 'Mongole',
    bio: "Né Temüjin vers 1162, Gengis Khan unifie les tribus mongoles en 1206 et fonde le plus grand empire terrestre continu de l'histoire. Ses armées conquièrent la Chine du Nord, l'Asie centrale et la Perse, semant une dévastation sans précédent (40 millions de morts estimés) mais aussi une paix commerciale (Pax Mongolica). Sa code de lois (Yasa) et son talent d'organisation militaire restent légendaires.",
    keyFacts: [
      "Unification des tribus mongoles (1206) — titre de 'khan universel'",
      "Conquête de la Chine du Nord et de l'Empire Khwarezmide (Perse)",
      "Yasa : code de loi mongol garantissant la tolérance religieuse",
      "Système postal (yam) reliant l'empire",
      "Sa mort (1227) reste mystérieuse — tombe tenue secrète"
    ],
    quote: "Il n'y a pas de joie plus grande que de vaincre ses ennemis.",
    level: ['5e', '4e', '2nde']
  },
  {
    id: 'saladin',
    name: 'Saladin',
    birth: '1138',
    death: '1193',
    era: 'Moyen Âge',
    category: 'Militaire',
    nationality: 'Kurde/Ayyoubide',
    bio: "Sultan kurde fondateur de la dynastie ayyoubide, Saladin (Salah al-Din Yusuf) unifie l'Égypte et la Syrie, puis reconquiert Jérusalem en 1187 (bataille de Hattin) — mettant fin au royaume croisé. Admiré même par ses ennemis chrétiens pour sa chevalerie et sa clémence, il accordera une capitulation honorable lors de la prise de Jérusalem. Richard Cœur de Lion lui voue un respect mutuel lors de la Troisième Croisade.",
    keyFacts: [
      "Fonde la dynastie ayyoubide — unifie Égypte, Syrie, Mésopotamie",
      "Victoire de Hattin (1187) — désastre croisé",
      "Reconquête de Jérusalem (2 octobre 1187) — traité clément",
      "Troisième Croisade (1189-1192) — duel avec Richard Cœur de Lion",
      "Admiration réciproque : Saladin envoie son médecin à Richard malade"
    ],
    quote: "Comment pourrais-je répondre devant Allah si je trahis ceux qui se sont rendus à ma parole ?",
    level: ['5e', '2nde']
  },
  {
    id: 'jeanne_darc',
    name: "Jeanne d'Arc",
    birth: '1412',
    death: '1431',
    era: 'Moyen Âge',
    category: 'Militaire',
    nationality: 'Française',
    bio: "Héroïne nationale française, Jeanne d'Arc est une paysanne lorraine qui, guidée par des 'voix' divines, convainc le Dauphin Charles VII de lui confier une armée. Elle lève le siège d'Orléans (mai 1429), fait sacrer Charles VII à Reims (juillet 1429). Capturée par les Bourguignons, vendue aux Anglais, jugée pour hérésie par un tribunal ecclésiastique, elle est brûlée vive à Rouen (30 mai 1431) à 19 ans. Réhabilitée en 1456, canonisée en 1920.",
    keyFacts: [
      "Paysanne de Domrémy qui entend des voix (Michel, Catherine, Marguerite)",
      "Lève le siège d'Orléans (8 mai 1429) — tournant de la Guerre de Cent Ans",
      "Fait sacrer Charles VII à Reims (17 juillet 1429)",
      "Brûlée vive à Rouen le 30 mai 1431 à 19 ans",
      "Canonisée le 16 mai 1920 par le pape Benoît XV"
    ],
    quote: "De la part du Roi du Ciel : rendez à la Pucelle les clés de toutes les bonnes villes que vous avez prises en France.",
    level: ['5e', '4e', '3e', '2nde']
  },

  // === RELIGIEUX ===
  {
    id: 'bouddha',
    name: 'Bouddha',
    birth: '-563',
    death: '-483',
    era: 'Antiquité',
    category: 'Religion',
    nationality: 'Népalaise-Indienne',
    bio: "Prince népalais de la famille Shakya, Siddhartha Gautama renonce à sa vie de luxe après avoir été confronté à la souffrance humaine. Après 6 ans d'ascèse, il atteint l'Éveil sous un figuier bodhi à Bodh Gaya et devient le 'Bouddha' (l'Éveillé). Il enseigne pendant 45 ans les Quatre Nobles Vérités et l'Octuple Sentier. Le bouddhisme qu'il fonde s'étend d'abord en Inde sous Ashoka, puis en Chine, Japon, Asie du Sud-Est.",
    keyFacts: [
      "Naissance dans une famille royale népalaise (env. -563)",
      "Éveil à Bodh Gaya — les Quatre Nobles Vérités",
      "L'Octuple Sentier : voie du milieu pour atteindre le Nirvana",
      "Enseigne pendant 45 ans — 500 millions de bouddhistes aujourd'hui",
      "Sous Ashoka, le bouddhisme devient religion d'État (IIIe s. av. J.-C.)"
    ],
    quote: "Soyez votre propre lumière. Soyez votre propre refuge.",
    level: ['5e', '2nde', 'HGGSP']
  },
  {
    id: 'martin_luther',
    name: 'Martin Luther',
    birth: '1483',
    death: '1546',
    era: 'Temps Modernes',
    category: 'Religion',
    nationality: 'Allemande',
    bio: "Moine augustin et théologien allemand, Luther déclenche la Réforme protestante en affichant ses 95 thèses sur la porte de l'église de Wittenberg (31 octobre 1517). Il condamne la vente des indulgences et affirme que le salut vient de la foi seule (sola fide), non des œuvres. Excommunié par le pape Léon X (1521), il traduit la Bible en allemand — révolution culturelle. Son action fragmente le christianisme occidental.",
    keyFacts: [
      "95 Thèses (31 octobre 1517) — attaque contre les indulgences",
      "Condamné à la Diète de Worms (1521) — 'Je ne peux pas me rétracter'",
      "Traduit la Bible en allemand (1534) — naissance de l'allemand littéraire",
      "Sola Fide, Sola Scriptura — bases de la théologie protestante",
      "Déclenche les guerres de religion en Europe"
    ],
    quote: "Ici je me tiens, je ne peux faire autrement. Que Dieu me soit en aide.",
    level: ['4e', '2nde', 'Terminale']
  },
  {
    id: 'calvin',
    name: 'Jean Calvin',
    birth: '1509',
    death: '1564',
    era: 'Temps Modernes',
    category: 'Religion',
    nationality: 'Française (Genève)',
    bio: "Théologien français réformateur, Calvin s'exile à Genève (1536) après sa conversion au protestantisme et transforme la cité en 'Rome protestante'. Son Institution de la Religion Chrétienne (1536) codifie le calvinisme : prédestination, austérité, primauté de la Bible. Son influence s'étend aux Pays-Bas, Écosse, Angleterre (puritains) et Amérique du Nord. Le calvinisme (puritanisme) influence directement l'éthique du capitalisme (Max Weber).",
    keyFacts: [
      "Institution de la Religion Chrétienne (1536) — somme du protestantisme réformé",
      "Genève transformée en 'Rome protestante'",
      "Doctrine de la prédestination — Dieu a prédestiné qui sera sauvé",
      "Influence sur les Puritains anglais (Pilgrim Fathers, USA)",
      "Max Weber : 'L'Éthique protestante et l'esprit du capitalisme'"
    ],
    quote: "Notre sagesse véritable consiste à ne rien savoir que ce que Dieu nous enseigne dans sa parole.",
    level: ['4e', '2nde', '1ere']
  },
  {
    id: 'muhammad',
    name: 'Muhammad',
    birth: '570',
    death: '632',
    era: 'Moyen Âge',
    category: 'Religion',
    nationality: 'Arabe (Mecque)',
    bio: "Fondateur de l'islam et dernier prophète selon la tradition musulmane, Muhammad naît à La Mecque vers 570. À 40 ans, il reçoit la révélation coranique par l'archange Jibrîl (Gabriel). Persécuté à La Mecque, il émigre à Médine en 622 (Hégire — point de départ du calendrier islamique). Il unifie la péninsule arabique et fonde une communauté (umma) qui, après sa mort, conquiert en un siècle un empire de l'Espagne à l'Inde.",
    keyFacts: [
      "Reçoit les premières révélations coraniques vers 610",
      "Hégire (622) : émigration de La Mecque à Médine — an 1 de l'hégire",
      "Conquête de La Mecque (630) — islamisation de la péninsule arabique",
      "Le Coran : révélations compilées après sa mort",
      "Les cinq piliers de l'islam : shahada, salat, zakat, sawm, hajj"
    ],
    quote: "La vraie richesse d'un homme en ce monde se mesure au bien qu'il a fait autour de lui.",
    level: ['5e', '4e', '2nde', 'HGGSP']
  },

  // === FIGURES AFRICAINES ET ASIATIQUES ===
  {
    id: 'mansa_moussa',
    name: 'Mansa Moussa',
    birth: '1280',
    death: '1337',
    era: 'Moyen Âge',
    category: 'Politique',
    nationality: 'Malienne (Empire du Mali)',
    bio: "Dixième mansa (roi des rois) de l'Empire du Mali, Mansa Moussa est considéré comme l'homme le plus riche de toute l'histoire humaine (fortune estimée à 400 milliards de dollars constants). Son pèlerinage à La Mecque (1324) avec 60 000 hommes et 12-18 tonnes d'or distribué provoque un effondrement du prix de l'or en Méditerranée pendant 10 ans. Il favorise l'essor de Tombouctou comme capitale intellectuelle islamique.",
    keyFacts: [
      "Homme le plus riche de l'histoire (fortune estimée à 400 Mds$)",
      "Pèlerinage à La Mecque (1324) — 60 000 personnes, 80 caravanes de chameaux",
      "Distribue tant d'or que le cours s'effondre pendant 10 ans en Egypte",
      "Développe Tombouctou : université de Sankoré, mosquées",
      "L'Empire du Mali contrôle la moitié de la production mondiale d'or"
    ],
    quote: "Nul en la terre ne peut se comparer à la puissance du Mali.",
    level: ['5e', '2nde', 'Terminale']
  },
  {
    id: 'sundiata_keita',
    name: 'Sundiata Keïta',
    birth: '1217',
    death: '1255',
    era: 'Moyen Âge',
    category: 'Politique',
    nationality: 'Malienne',
    bio: "Fondateur légendaire de l'Empire du Mali, Sundiata Keïta (le 'lion du Mali') est le héros de l'épopée mandingue rapportée par les griots. Fils handicapé d'un roi défunt, exilé, il revient pour battre le roi sorcier Soumaoro Kanté à la bataille de Kirina (1235) et fonde l'empire qui dominera l'Afrique de l'Ouest pendant deux siècles. Son histoire est l'équivalent africain de l'Iliade ou des épopées grecques.",
    keyFacts: [
      "Victoire de Kirina (1235) sur Soumaoro Kanté — fondation de l'Empire du Mali",
      "Épopée de Sundiata — tradition orale transmise par les griots",
      "Organise l'Empire en provinces gouvernées par des 'farins'",
      "Développe l'agriculture et le commerce transsaharien",
      "Symbole du renouveau africain et de la résistance"
    ],
    quote: "Le lion ne craint pas la foule de hyènes.",
    level: ['5e', '2nde']
  },
  {
    id: 'ashoka',
    name: 'Ashoka le Grand',
    birth: '-304',
    death: '-232',
    era: 'Antiquité',
    category: 'Politique',
    nationality: 'Indienne (Empire Maurya)',
    bio: "Troisième Empereur de la dynastie Maurya, Ashoka règne sur la quasi-totalité du sous-continent indien. Après la sanglante bataille de Kalinga (261 av. J.-C.) où 100 000 personnes sont tuées, il se convertit au bouddhisme et renonce à la guerre. Il propage le bouddhisme par des missions diplomatiques (Ceylan, Grèce, Égypte) et grave ses principes éthiques (dhamma) sur des colonnes et rochers. Ses Édits sont les premiers textes politiques attestés en Inde.",
    keyFacts: [
      "Règne sur 99% du sous-continent indien (~250 av. J.-C.)",
      "Bataille de Kalinga (261 av. J.-C.) — 100 000 morts — conversion au bouddhisme",
      "Édits sur pierre et colonnes — premier texte politique indien",
      "Missions bouddhistes en Ceylan, Asie du Sud-Est, Méditerranée",
      "Sa colonne de lion (Sarnath) est aujourd'hui le symbole de l'Inde"
    ],
    quote: "Ce qui peut être accompli par la dévotion est infini.",
    level: ['5e', '2nde', 'Terminale']
  },
  {
    id: 'qin_shi_huangdi',
    name: 'Qin Shi Huangdi',
    birth: '-259',
    death: '-210',
    era: 'Antiquité',
    category: 'Politique',
    nationality: 'Chinoise',
    bio: "Premier Empereur de Chine unifié, Qin Shi Huangdi (le roi Ying Zheng) conquiert les six royaumes et unifie la Chine en 221 av. J.-C. Il standardise les poids, mesures, l'écriture et la monnaie. Il fait construire la première Grande Muraille de Chine et son mausolée comprend l'Armée de Terre Cuite (8 000 soldats en argile). Règne tyrannique : brûle les livres, enterre vivants les opposants intellectuels, mais crée l'État chinois.",
    keyFacts: [
      "Premier Emperor unifié de Chine (221 av. J.-C.)",
      "Standardisation : écriture, monnaie, poids, mesures",
      "Première Grande Muraille de Chine (reliée de fortifications existantes)",
      "Armée de Terre Cuite (8 000 soldats) — découverte en 1974",
      "Brûle les livres et enterre les lettrés confucéens — tyrannie intellectuelle"
    ],
    quote: "Je gouverne tous les territoires sous le ciel.",
    level: ['5e', '2nde']
  },

  // === FEMMES DE L'HISTOIRE ===
  {
    id: 'olympe_de_gouges',
    name: 'Olympe de Gouges',
    birth: '1748',
    death: '1793',
    era: 'Temps Modernes',
    category: 'Droits civiques',
    nationality: 'Française',
    bio: "Femme de lettres et militante politique française, Olympe de Gouges est l'auteure de la Déclaration des Droits de la Femme et de la Citoyenne (1791) — réponse féministe directe à la Déclaration des Droits de l'Homme qui exclut les femmes. Elle s'oppose à l'esclavage (L'Esclavage des Noirs, 1788) et au génocide en vendée. Girondine, elle est guillotinée pendant la Terreur (3 novembre 1793) pour avoir défendu Louis XVI.",
    keyFacts: [
      "Déclaration des Droits de la Femme et de la Citoyenne (1791)",
      "Article 1 : 'La femme naît libre et demeure égale à l'homme en droits'",
      "L'Esclavage des Noirs (1788) — contre la traite négrière",
      "Guillotinée le 3 novembre 1793 — victime de la Terreur",
      "Pionnière du féminisme et des droits des femmes"
    ],
    quote: "La femme a le droit de monter à l'échafaud ; elle doit avoir également le droit de monter à la tribune.",
    level: ['4e', '3e', '2nde', '1ere', 'Terminale']
  },
  {
    id: 'rosa_parks',
    name: 'Rosa Parks',
    birth: '1913',
    death: '2005',
    era: 'XXe siècle',
    category: 'Droits civiques',
    nationality: 'Américaine',
    bio: "Militante américaine des droits civiques, Rosa Parks est surnommée 'la mère du mouvement des droits civiques'. Le 1er décembre 1955 à Montgomery (Alabama), elle refuse de céder sa place dans un bus à un homme blanc — acte de résistance qui déclenche le boycott des bus de Montgomery (381 jours) et propulse Martin Luther King. Arrêtée et condamnée, elle devient symbole de la résistance pacifique à la ségrégation.",
    keyFacts: [
      "1er décembre 1955 : refuse de céder sa place dans un bus de Montgomery",
      "Boycott des bus de Montgomery (381 jours) — victoire : déségrégation",
      "Active au sein de la NAACP depuis 1943",
      "Reçoit la Médaille d'or du Congrès et la Médaille présidentielle de la liberté",
      "Secrétaire du président Barack Obama l'honore à ses funérailles (2005)"
    ],
    quote: "La seule lasse que j'étais, c'était la lassitude de céder.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'indira_gandhi',
    name: 'Indira Gandhi',
    birth: '1917',
    death: '1984',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Indienne',
    bio: "Première femme Premier ministre d'Inde (1966-1977 et 1980-1984), Indira Gandhi est l'une des femmes politiques les plus puissantes du XXe siècle. Fille de Nehru, elle nationalise les banques, gagne la guerre de 1971 (création du Bangladesh), fait exploser la première bombe nucléaire indienne (1974). Mais aussi l'état d'urgence (1975-1977). Assassinée par ses propres gardes du corps sikhs en 1984 après l'opération Étoile bleue au Temple d'Or.",
    keyFacts: [
      "Première femme Premier ministre d'Inde (1966)",
      "Victoire dans la guerre indo-pakistanaise (1971) — création du Bangladesh",
      "Premier test nucléaire indien (opération Bouddha souriant, 1974)",
      "État d'urgence (1975-1977) — dérive autoritaire",
      "Assassinée par ses gardes sikh (31 octobre 1984) après l'opération Temple d'Or"
    ],
    quote: "Il faut être forte pour montrer de la douceur.",
    level: ['3e', 'Terminale', 'HGGSP']
  },
  {
    id: 'wangari_maathai',
    name: 'Wangari Maathai',
    birth: '1940',
    death: '2011',
    era: 'XXe siècle',
    category: 'Droits civiques',
    nationality: 'Kényane',
    bio: "Militante écologique et politique kényane, Wangari Maathai est la première Africaine à recevoir le Prix Nobel de la Paix (2004). Elle fonde le Mouvement Ceinture Verte (1977) qui plante 47 millions d'arbres en Afrique. Elle lutte contre la dictature de Moi au Kenya, défend les droits des femmes et l'environnement. Son engagement lie explicitement démocratie, environnement et droits humains.",
    keyFacts: [
      "Première femme africaine Prix Nobel de la Paix (2004)",
      "Mouvement Ceinture Verte (1977) — 47 millions d'arbres plantés en Afrique",
      "Emprisonnée et battue sous la dictature de Moi",
      "Députée et Vice-ministre de l'Environnement kényan",
      "Lie explicitement démocratie, écologie et droits des femmes"
    ],
    quote: "En plantant des arbres, nous plantons les graines de la paix.",
    level: ['3e', 'Terminale', 'HGGSP']
  },

  // === PERSONNAGES RÉVOLUTION FRANÇAISE ===
  {
    id: 'robespierre',
    name: 'Maximilien de Robespierre',
    birth: '1758',
    death: '1794',
    era: 'Temps Modernes',
    category: 'Politique',
    nationality: 'Française',
    bio: "Avocat d'Arras et homme politique révolutionnaire français, Robespierre est la figure centrale de la Terreur (1793-1794). Député aux États Généraux (1789), député à la Convention, il domine le Comité de Salut Public. Surnommé 'l'Incorruptible' pour sa rigueur morale, il justifie l'usage de la guillotine pour sauver la République. Renversé par le coup d'État du 9 Thermidor (27 juillet 1794), il est guillotiné le lendemain.",
    keyFacts: [
      "Avocat défenseur des pauvres — 'l'Incorruptible'",
      "Hostile à la peine de mort... avant la Révolution",
      "Domine le Comité de Salut Public (1793-1794) — la Terreur",
      "40 000 exécutions sous la Terreur (dont des alliés Danton, Desmoulins)",
      "Coup du 9 Thermidor (27 juillet 1794) — guillotiné le lendemain"
    ],
    quote: "La terreur n'est autre chose que la justice prompte, sévère, inflexible.",
    level: ['4e', '3e', '1ere', 'Terminale']
  },
  {
    id: 'danton',
    name: 'Georges Danton',
    birth: '1759',
    death: '1794',
    era: 'Temps Modernes',
    category: 'Politique',
    nationality: 'Française',
    bio: "Avocat et homme politique révolutionnaire, Danton est l'une des figures les plus populaires de la Révolution française. Fondateur du Club des Cordeliers, ministre de la Justice (1792), il anime la résistance nationale après l'invasion prussienne ('De l'audace, encore de l'audace, toujours de l'audace !'). En désaccord avec la Terreur, il est arrêté sur ordre de Robespierre et guillotiné en avril 1794. Incarne la face populaire et oratoire de la Révolution.",
    keyFacts: [
      "Fondateur du Club des Cordeliers",
      "Discours du 2 septembre 1792 : 'De l'audace !'",
      "Ministre de la Justice (1792)",
      "S'oppose à la Terreur : 'Mieux vaut être pauvre que Danton sanglant'",
      "Guillotiné le 5 avril 1794 sur ordre de Robespierre"
    ],
    quote: "De l'audace, encore de l'audace, toujours de l'audace, et la France est sauvée !",
    level: ['4e', '3e', '1ere']
  },
  {
    id: 'bismarck',
    name: 'Otto von Bismarck',
    birth: '1815',
    death: '1898',
    era: 'XIXe siècle',
    category: 'Politique',
    nationality: 'Allemande (Prussienne)',
    bio: "Homme d'État prussien puis allemand, Otto von Bismarck est le 'chancelier de fer' qui réalise l'unification de l'Allemagne par le 'sang et le fer' (guerres contre Danemark 1864, Autriche 1866, France 1870). Premier chancelier du Reich allemand (1871-1890), il invente aussi l'État-providence (assurances maladie 1883, accidents 1884, retraites 1889) pour couper l'herbe sous le pied des socialistes.",
    keyFacts: [
      "'Fer et sang' — unification par la guerre, non par les discours",
      "Guerres contre le Danemark (1864), l'Autriche (1866), la France (1870)",
      "Proclame l'Empire allemand à Versailles le 18 janvier 1871",
      "Invente l'État-providence : assurances maladie, accidents, retraites",
      "Congr des de Berlin (1878) — Bismarck 'honnête courtier' de l'Europe"
    ],
    quote: "Les grandes questions du temps présent ne se résolvent pas par des discours et des votes de majorité, mais par le fer et le sang.",
    level: ['4e', '3e', '2nde', '1ere']
  },
  {
    id: 'richelieu',
    name: 'Cardinal de Richelieu',
    birth: '1585',
    death: '1642',
    era: 'Temps Modernes',
    category: 'Politique',
    nationality: 'Française',
    bio: "Armand Jean du Plessis, cardinal-duc de Richelieu, est le principal ministre de Louis XIII (1624-1642). Il centralise le pouvoir royal, affaiblit la noblesse et les protestants (siège de La Rochelle, 1628), crée l'Académie française (1635) et engage la France dans la Guerre de Trente Ans contre les Habsbourg. Premier architecte de la France centralisée et de sa politique étrangère de puissance.",
    keyFacts: [
      "Principal ministre de Louis XIII (1624-1642)",
      "Siège de La Rochelle (1628) — fin des places fortes protestantes",
      "Affaiblissement de la noblesse et renforcement de l'autorité royale",
      "Création de l'Académie française (1635)",
      "Engage la France dans la Guerre de Trente Ans — affaiblir les Habsbourg"
    ],
    quote: "Donner toute sa gloire à la France, c'est donner toute sa gloire à Dieu.",
    level: ['4e', '2nde', '1ere']
  },

  // === XXe SIÈCLE COMPLÉMENTAIRES ===
  {
    id: 'mao_zedong',
    name: 'Mao Zedong',
    birth: '1893',
    death: '1976',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Chinoise',
    bio: "Fondateur de la République Populaire de Chine et président du Parti Communiste Chinois, Mao Zedong proclame la RPC le 1er octobre 1949. Il mène la Longue Marche (1934-35), bat le Kuomintang de Tchang Kaï-chek. Ses politiques du Grand Bond en Avant (1958-1962 : 30-55 millions de morts de famine) et de la Révolution Culturelle (1966-1976) causent une catastrophe humanitaire. Pourtant vénéré en Chine comme 'Grand Timonier'.",
    keyFacts: [
      "Longue Marche (1934-35) — 8 000 km, légendaire épopée communiste",
      "Proclame la RPC le 1er octobre 1949 à Pékin",
      "Grand Bond en Avant (1958-62) — 30-55 millions de morts de famine",
      "Révolution Culturelle (1966-76) — persécution des intellectuels",
      "Le Petit Livre Rouge — distribué à des milliards d'exemplaires"
    ],
    quote: "Le pouvoir naît du canon d'un fusil.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'deng_xiaoping',
    name: 'Deng Xiaoping',
    birth: '1904',
    death: '1997',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Chinoise',
    bio: "Dirigeant suprême de la Chine après Mao (1978-1992), Deng Xiaoping lance les 'Quatre Modernisations' et ouvre la Chine au marché. Sous son impulsion, la Chine devient l'atelier du monde : 40 ans de croissance à 10% annuels, 800 millions de personnes sorties de la pauvreté. Il ordonne cependant la répression de Tiananmen (4 juin 1989). Sa formule 'Peu importe que le chat soit blanc ou noir, pourvu qu'il attrape les souris' incarne son pragmatisme.",
    keyFacts: [
      "Réformes d'ouverture économique (1978) — zones économiques spéciales",
      "800 millions de Chinois sortis de la pauvreté en 40 ans",
      "Répression de Tiananmen (4 juin 1989)",
      "Rétrocession de Hong Kong (1997) — 'un pays, deux systèmes'",
      "'Peu importe la couleur du chat, pourvu qu'il attrape les souris'"
    ],
    quote: "Qu'importe que le chat soit blanc ou noir, pourvu qu'il attrape les souris.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'ho_chi_minh',
    name: 'Hô Chi Minh',
    birth: '1890',
    death: '1969',
    era: 'XXe siècle',
    category: 'Décolonisation',
    nationality: 'Vietnamienne',
    bio: "Fondateur du Parti Communiste Indochinois (1930) et premier président de la République Démocratique du Vietnam (1945), Hô Chi Minh est le père de l'indépendance vietnamienne. Il dirige la résistance contre la France (Guerre d'Indochine, 1946-1954, victoire de Diên Biên Phu) puis contre les États-Unis (Guerre du Vietnam, 1965-1975). Sa mort (1969) ne voit pas la réunification du Vietnam, acquise en 1975.",
    keyFacts: [
      "Cofonde le PCF (1920) à Tours avant de retourner en Asie",
      "Proclame l'indépendance du Vietnam (2 septembre 1945)",
      "Guerre d'Indochine contre la France — Diên Biên Phu (1954)",
      "Dirige la résistance nord-vietnamienne contre les USA (guerre du Vietnam)",
      "Hanoï rebaptisée 'Ville Hô Chi Minh' (Saïgon) après 1975"
    ],
    quote: "Rien de plus précieux que l'indépendance et la liberté.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'fidel_castro',
    name: 'Fidel Castro',
    birth: '1926',
    death: '2016',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Cubaine',
    bio: "Révolutionnaire et homme d'État cubain, Fidel Castro dirige Cuba pendant 47 ans (1959-2006). Après le débarquement de la baie des Cochons (1961, échec de la CIA) et la Crise des missiles cubains (1962 — risque de guerre nucléaire mondiale), il résiste à 638 tentatives d'assassinat selon lui. Son régime garantit une santé et une éducation gratuites mais réprime l'opposition. Symbole de la résistance au capitalisme américain.",
    keyFacts: [
      "Révolution cubaine (1er janvier 1959) — renverse Batista",
      "Baie des Cochons (avril 1961) — débarquement CIA échoue",
      "Crise des missiles cubains (octobre 1962) — 13 jours au bord du nucléaire",
      "Cuba socialiste : santé et éducation gratuites, alphabétisation à 99%",
      "Embargo américain depuis 1962 — toujours en vigueur"
    ],
    quote: "L'histoire m'absoudra.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'tito',
    name: 'Josip Broz Tito',
    birth: '1892',
    death: '1980',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Yougoslave',
    bio: "Maréchal et président à vie de la Yougoslavie (1945-1980), Tito est le seul dirigeant communiste à avoir résisté à Staline (1948) et maintenu son indépendance du bloc soviétique. Fondateur du Mouvement des Non-Alignés (1961), il essaie de créer une voie entre l'Est et l'Ouest. Sa mort (1980) amorce la décomposition de la Yougoslavie qui mènera aux guerres des années 1990.",
    keyFacts: [
      "Dirige la résistance partisane yougoslave contre les nazis (1941-45)",
      "Rupture avec Staline (1948) — seul dirigeant communiste à défier l'URSS",
      "Co-fondateur du Mouvement des Non-Alignés (Belgrade, 1961)",
      "Yougoslavie socialiste prospère — 'socialisme à visage humain'",
      "Sa mort (1980) ouvre la crise yougoslave qui mène aux guerres de 1991-1999"
    ],
    quote: "Je suis chef d'un pays qui a deux alphabets, trois langues, quatre religions, cinq nationalités et six républiques.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'lech_walesa',
    name: 'Lech Wałęsa',
    birth: '1943',
    death: null,
    era: 'XXe siècle',
    category: 'Droits civiques',
    nationality: 'Polonaise',
    bio: "Électricien des chantiers navals de Gdańsk, Lech Wałęsa co-fonde et dirige Solidarność (Solidarité), le premier syndicat libre du bloc soviétique (1980). Sous son impulsion, 10 millions de Polonais rejoignent Solidarność. Emprisonné (1981-1982) après la loi martiale de Jaruzelski, il reçoit le Prix Nobel de la Paix (1983). Président de Pologne (1990-1995), il incarne la transition pacifique du communisme à la démocratie.",
    keyFacts: [
      "Co-fonde Solidarność aux Chantiers navals de Gdańsk (août 1980)",
      "10 millions de membres en quelques mois — plus grand syndicat du monde soviétique",
      "Internement sous la loi martiale de Jaruzelski (1981-1982)",
      "Prix Nobel de la Paix 1983",
      "Président de Pologne (1990-1995) après les premières élections libres"
    ],
    quote: "Je suis un électricien ordinaire qui est devenu président. Ce n'est pas un miracle, c'est la démocratie.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'ataturk',
    name: 'Mustafa Kemal Atatürk',
    birth: '1881',
    death: '1938',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Turque',
    bio: "Officier militaire et homme d'État turc, Mustafa Kemal Atatürk ('Père des Turcs') est le fondateur et premier président de la République de Turquie (1923). Héros de Gallipoli (1915), il mène la Guerre d'Indépendance (1919-1923) et négocie le Traité de Lausanne. Il transforme la Turquie en un État laïc et modernisé : alphabet latin, droits des femmes (vote en 1934), calendrier grégorien, éducation laïque.",
    keyFacts: [
      "Héros de la bataille de Gallipoli (1915)",
      "Fonde la République de Turquie (29 octobre 1923)",
      "Révolution kémaliste : laïcité, alphabet latin, émancipation des femmes",
      "Droits de vote aux femmes turques en 1934 (avant la France : 1944)",
      "Prénom 'Atatürk' lui donné par le Parlement turc (1934)"
    ],
    quote: "La science est le guide le plus sûr dans la vie.",
    level: ['3e', '2nde', '1ere', 'Terminale']
  },

  // === PERSONNALITÉS ASIATIQUES ===
  {
    id: 'confucius',
    name: 'Confucius',
    birth: '-551',
    death: '-479',
    era: 'Antiquité',
    category: 'Philosophe',
    nationality: 'Chinoise',
    bio: "Philosophe et penseur politique chinois (551-479 av. J.-C.), Kong Qiu — dit Confucius — fonde le confucianisme, système éthique et politique qui structure la civilisation chinoise pendant 2 500 ans. Il enseigne la vertu, la piété filiale, le respect de la hiérarchie et l'harmonie sociale. Ses Entretiens (Lunyu), rédigés par ses disciples, constituent le texte fondateur de la pensée chinoise. Le confucianisme devient religion d'État sous la dynastie Han (206 av. J.-C.-220 ap. J.-C.) et influence encore aujourd'hui les sociétés d'Asie de l'Est.",
    keyFacts: [
      "Fonde le confucianisme : éthique de la vertu, piété filiale, harmonie sociale",
      "Ses Entretiens (Lunyu) — recueillis par ses disciples après sa mort",
      "Religion d'État sous les Han (206 av. J.-C.) — structure l'administration impériale",
      "Cinq vertus cardinales : humanité (ren), justice (yi), rites (li), sagesse (zhi), fidélité (xin)",
      "Influence durable sur la Chine, le Japon, la Corée et le Vietnam"
    ],
    quote: "Ce que tu ne veux pas qu'on te fasse, ne le fais pas aux autres.",
    level: ['6e', '5e', '2nde', 'HGGSP']
  },
  {
    id: 'hirohito',
    name: 'Hirohito (Emperor Shōwa)',
    birth: '1901',
    death: '1989',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Japonaise',
    bio: "124e empereur du Japon (règne 1926-1989), Hirohito est la figure centrale du Japon pendant la Seconde Guerre mondiale. Son règne est associé à l'expansion militariste japonaise en Asie (Mandchourie 1931, Chine 1937, Pearl Harbor 1941) et aux crimes de guerre (massacre de Nankin). Après les bombes atomiques sur Hiroshima et Nagasaki, il annonce à la radio la capitulation du Japon (15 août 1945) — première fois que les Japonais entendaient la voix impériale. Sous la tutelle américaine, il abdique son statut divin (1946) et le Japon se reconstruit en démocratie pacifiste.",
    keyFacts: [
      "Règne de 1926 à 1989 — l'un des plus longs de l'histoire mondiale",
      "Expansion militariste : Mandchourie (1931), Chine (1937), Pearl Harbor (1941)",
      "Massacre de Nankin (1937) — 150 000 à 300 000 civils chinois tués",
      "Annonce la capitulation à la radio le 15 août 1945 — fin de la Guerre du Pacifique",
      "Abdique sa divinité (1946) — le Japon adopte une constitution pacifiste (article 9)"
    ],
    quote: "Nous devons endurer ce qui est insupportable et souffrir ce qui est intolérable.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },

  // === PERSONNAGES MAROCAINS ===
  {
    id: 'tariq_ibn_ziyad',
    name: 'Tariq ibn Ziyad',
    birth: '670',
    death: '720',
    era: 'Moyen Âge',
    category: 'Militaire',
    nationality: 'Berbère (Maroc) / Omeyyade',
    bio: "Général berbère au service du calife omeyyade, Tariq ibn Ziyad est le conquérant de l'Hispanie wisigothique. Le 30 avril 711, il franchit le détroit avec 7 000 hommes (principalement des Berbères marocains) et débarque sur le rocher qui porte son nom : Gibraltar (Jabal Tariq = 'Montagne de Tariq'). En sept ans, il conquiert la quasi-totalité de la péninsule ibérique — l'une des conquêtes militaires les plus rapides de l'histoire. Son discours légendaire à ses troupes avant la bataille du Guadalete est passé à la postérité : 'Derrière vous la mer, devant vous l'ennemi. Où fuirez-vous ?'",
    keyFacts: [
      "Débarquement le 30 avril 711 avec 7 000 hommes, principalement des Berbères du Maroc",
      "Gibraltar doit son nom à 'Jabal Tariq' (Montagne de Tariq)",
      "Victoire décisive du Guadalete (19-26 juillet 711) — défaite et mort du roi wisigoth Rodéric",
      "Conquête de Toledo, Cordoue, Grenade en moins d'un an",
      "Al-Andalus (Espagne musulmane) durera 781 ans (711-1492)",
      "Sa discours de motivation : 'Derrière vous la mer, devant vous l'ennemi'",
      "Première grande figure militaire berbère de l'histoire islamique"
    ],
    quote: "La mer est derrière vous, l'ennemi est devant vous. Où fuirez-vous ? Vous n'avez d'autre choix que la victoire ou la mort.",
    level: ['5e', '4e', '2nde', 'Terminale']
  },
  {
    id: 'youssef_ben_tachfin',
    name: 'Youssef ibn Tachfin',
    birth: '1009',
    death: '1106',
    era: 'Moyen Âge',
    category: 'Politique',
    nationality: 'Marocaine (Berbère Sanhaja)',
    bio: "Fondateur et premier souverain de l'Empire almoravide, Youssef ibn Tachfin est l'un des plus grands conquérants et bâtisseurs d'État de l'histoire africaine. Parti du Sahara, il fonde Marrakech en 1062 (qu'il fait sa capitale et qui donnera son nom au Maroc — 'Morocco'), unifie le Maghreb, puis répond à l'appel des princes musulmans d'Espagne menacés par les royaumes chrétiens. Il bat le roi Alphonse VI de Castille à la bataille de Zallaka (1086), sauvant Al-Andalus. Il meurt à 97 ans après un règne de 44 ans.",
    keyFacts: [
      "Fonde Marrakech en 1062 — la ville qui donnera son nom au Maroc ('Morroco')",
      "Unifie le Maghreb de l'Atlantique à Alger",
      "Répond à l'appel des princes d'Al-Andalus contre la Reconquista chrétienne",
      "Victoire de Zallaka (Sagrajas, 1086) contre Alphonse VI de Castille — sauve Al-Andalus",
      "Empire s'étend du Sénégal à l'Espagne et de l'Atlantique à Alger",
      "Meurt à 97 ans (1106) — l'un des règnes les plus longs de l'histoire",
      "Réforme religieuse : retour à l'islam malékite orthodoxe"
    ],
    quote: "Par Allah, si je n'avais pas de vieillesse et de faiblesse, je traverserais la mer moi-même pour combattre.",
    level: ['5e', '4e', '2nde']
  },
  {
    id: 'ibn_battuta',
    name: 'Ibn Battuta',
    birth: '1304',
    death: '1368',
    era: 'Moyen Âge',
    category: 'Intellectuel',
    nationality: 'Marocaine (Tanger)',
    bio: "Né à Tanger en 1304, Abu Abdallah Muhammad ibn Battuta est le plus grand voyageur de l'Antiquité et du Moyen Âge — bien au-delà de Marco Polo. En 29 ans de voyages (1325-1354), il parcourt plus de 120 000 km à travers 44 pays actuels (Afrique du Nord, Moyen-Orient, Inde, Chine, Asie centrale, Afrique de l'Est, Mali). Il visite la cour de Mansa Moussa à Tombouctou et rencontre l'Empereur de Chine. Son récit, le Rihla (Relation de voyages), dicté au lettré Ibn Juzayy sur ordre du sultan mérinide de Fès, est une source historique inestimable sur le monde islamique médiéval.",
    keyFacts: [
      "120 000 km parcourus en 29 ans — record absolu avant l'ère moderne",
      "Visite 44 pays actuels — de l'Afrique de l'Ouest à la Chine",
      "Le Rihla (Relation de voyages) : source historique majeure sur le XIVe siècle",
      "Visite Tombouctou et la cour de Mansa Moussa (Empire du Mali)",
      "Juge d'Inde (qadi) — carrière diplomatique et juridique en parallèle",
      "Décrit la Bulgarie, la Crimée, l'Empire byzantin, l'Inde, la Chine, le Mali",
      "Considéré comme le père des sciences géographiques arabes"
    ],
    quote: "Voyager, c'est triompher de ses peurs.",
    level: ['5e', '4e', '2nde', 'Terminale']
  },
  {
    id: 'moulay_ismail',
    name: 'Moulay Ismail ibn Chérif',
    birth: '1645',
    death: '1727',
    era: 'Temps Modernes',
    category: 'Politique',
    nationality: 'Marocaine (Alaouite)',
    bio: "Sultan alaouite du Maroc (1672-1727), Moulay Ismail est l'une des figures les plus puissantes et les plus redoutées de l'histoire marocaine. Contemporain de Louis XIV — avec lequel il entretint une correspondance et demanda la main de la princesse de Conti — il règne 55 ans et fait de Meknès une capitale impériale de 40 km de remparts. Il expulse les Espagnols de Larache et d'Asilah, les Anglais de Tanger, et unifie le Maroc sous une autorité centralisée. Son armée des Abid (soldats noirs fidèles) assure sa domination absolue.",
    keyFacts: [
      "55 ans de règne (1672-1727) — un des plus longs de l'histoire du Maroc",
      "Meknès capitale impériale : remparts de 40 km, écuries royales de 12 000 chevaux",
      "Expulse les Espagnols de Larache (1689) et d'Asilah (1691)",
      "Expulse les Anglais de Tanger (1684)",
      "Correspondance avec Louis XIV — demande la main de la princesse de Conti",
      "Armée des Abid (Guich Abid) — corps d'élite de soldats noirs",
      "500 enfants reconnus — le plus prolifique des sultans alaouites"
    ],
    quote: "Je suis un homme de guerre depuis ma naissance, et la paix m'ennuie.",
    level: ['4e', '2nde']
  },
  {
    id: 'hassan_ii',
    name: 'Hassan II',
    birth: '1929',
    death: '1999',
    era: 'XXe siècle',
    category: 'Politique',
    nationality: 'Marocaine',
    bio: "Roi du Maroc de 1961 à sa mort en 1999, Hassan II est la figure centrale de l'histoire marocaine contemporaine. Fils de Mohammed V (père de l'indépendance), il règne d'une main de fer tout en modernisant le pays. Il survit à deux tentatives de coup d'État (F-5 sur son avion royal en 1972, coup au palais de Skhirat en 1971). Son geste le plus célèbre reste la Marche Verte (6 novembre 1975) : il envoie 350 000 civils marocains marcher pacifiquement sur le Sahara occidental, récupérant le territoire espagnol sans combat — un tour de force diplomatique et symbolique sans précédent.",
    keyFacts: [
      "Roi du Maroc de 1961 à 1999 — 38 ans de règne",
      "Survit au coup d'État de Skhirat (1971) lors de son anniversaire",
      "Survit à l'attaque aérienne sur son Boeing royal (1972 — F-5 royaux)",
      "Marche Verte (6 novembre 1975) — 350 000 civils récupèrent le Sahara Occidental",
      "Années de Plomb : répression politique, disparitions forcées, centres de détention secrets",
      "Médiateur dans le conflit israélo-palestinien et les accords de Camp David",
      "Président du Comité Al-Quds (Jérusalem) à l'OCI",
      "Discours de fin de règne : 'J'ai servi mon pays de mon mieux'"
    ],
    quote: "Mes ennemis, je m'en charge. Protégez-moi seulement de mes amis.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },

  // === GÉNÉRAUX ISLAMIQUES ===
  {
    id: 'khalid_ibn_al_walid',
    name: 'Khalid ibn al-Walid',
    birth: '585',
    death: '642',
    era: 'Moyen Âge',
    category: 'Militaire',
    nationality: 'Arabe (Quraysh)',
    bio: "Général arabe, Khalid ibn al-Walid est considéré comme l'un des plus grands stratèges militaires de l'histoire. Surnommé 'l'Épée de l'Islam' (Sayf Allah) par le Prophète Muhammad lui-même, il est invaincu dans toutes ses batailles. Converti à l'islam en 627, il joue un rôle décisif dans les conquêtes islamiques : défaite des armées perses sassanides et byzantines romaines. Ses campagnes en Syrie, Irak et Perse en seulement quelques années sont étudiées dans les académies militaires jusqu'à aujourd'hui.",
    keyFacts: [
      "Invaincu dans toutes ses batailles — 100+ victoires consécutives",
      "Surnommé 'Sayf Allah' (Épée de l'Islam) par le Prophète Muhammad",
      "Converti à l'Islam en 627 après avoir combattu les musulmans",
      "Victoire de Yarmouk (636) — défaite décisive de l'armée byzantine (100 000 hommes)",
      "Victoire de Qadisiya (636) — défaite de l'Empire sassanide persan",
      "Mène une campagne de 1 000 km en 18 jours pour rejoindre la Syrie — exploit logistique",
      "Étudié dans les académies militaires jusqu'à aujourd'hui"
    ],
    quote: "Ne me prenez pas pour mort tant que je brandirai mon épée.",
    level: ['5e', '4e', '2nde']
  },

  // === PERSONNAGES DU XIXe-XXe SIÈCLE ===
  {
    id: 'napoleon_iii',
    name: 'Napoléon III',
    birth: '1808',
    death: '1873',
    era: 'XIXe siècle',
    category: 'Politique',
    nationality: 'Française',
    bio: "Charles-Louis-Napoléon Bonaparte, neveu de Napoléon Ier, est le premier président de la République française (1848-1851) puis Empereur des Français sous le nom de Napoléon III (1852-1870). Son règne autoritaire puis libéral modernise profondément la France : transformation de Paris par Haussmann (boulevards, égouts, gares), développement du réseau ferroviaire, essor industriel, Canal de Suez (de Lesseps). Mais il engage la France dans la désastreuse guerre franco-prussienne (1870) : capturé à Sedan, il est déposé. Sa double nature — démocratiquement élu puis autocrate — fait de lui une figure ambivalente qui fascine encore les historiens.",
    keyFacts: [
      "Premier président élu au suffrage universel masculin (10 décembre 1848)",
      "Coup d'État du 2 décembre 1851 — s'empare du pouvoir dictatorial",
      "Second Empire (1852-1870) : modernisation économique et industrielle",
      "Baron Haussmann transforme Paris : 71 km de nouveaux boulevards, égouts, parcs",
      "Soutient Ferdinand de Lesseps pour le Canal de Suez (inauguré 1869)",
      "Capture à Sedan (2 septembre 1870) — défaite face à la Prusse de Bismarck",
      "Sa chute entraîne la Commune de Paris (1871) et la IIIe République"
    ],
    quote: "L'Empire, c'est la paix.",
    level: ['4e', '3e', '2nde', '1ere', 'Terminale']
  },
  {
    id: 'poutine',
    name: 'Vladimir Poutine',
    birth: '1952',
    death: null,
    era: 'Contemporain',
    category: 'Politique',
    nationality: 'Russe',
    bio: "Ancien officier du KGB (renseignement soviétique, 1975-1991), Vladimir Poutine accède au pouvoir en Russie en 1999 comme Premier ministre nommé par Eltsine, puis devient président en 2000. Son règne de plus de 25 ans repose sur la maîtrise des richesses énergétiques (pétrole, gaz), la répression de l'opposition (empoisonnements, emprisonnements : Alexeï Navalny mort en 2024) et la reconstruction d'une grande puissance russe. Il annexe la Crimée (2014), soutient les séparatistes du Donbass, puis lance la guerre totale contre l'Ukraine le 24 février 2022 — première guerre de conquête en Europe depuis 1945. La CPI a émis un mandat d'arrêt contre lui (2023).",
    keyFacts: [
      "Officier du KGB (Dresde, Allemagne de l'Est) 1975-1991",
      "Président depuis 2000 — 25+ ans au pouvoir (avec intermède Medvedev 2008-2012)",
      "Annexion de la Crimée (mars 2014) — premier territoire européen annexé depuis 1945",
      "Invasion totale de l'Ukraine (24 février 2022)",
      "Mandat d'arrêt de la Cour Pénale Internationale (mars 2023) pour déportation d'enfants ukrainiens",
      "Mort d'Alexeï Navalny (principal opposant) en prison (février 2024)",
      "Contrôle les médias, les élections, les ressources et l'armée russe"
    ],
    quote: "L'effondrement de l'URSS a été la plus grande catastrophe géopolitique du XXe siècle.",
    level: ['3e', '1ere', 'Terminale', 'HGGSP']
  },
  {
    id: 'trump',
    name: 'Donald Trump',
    birth: '1946',
    death: null,
    era: 'Contemporain',
    category: 'Politique',
    nationality: 'Américaine',
    bio: "Homme d'affaires américain milliardaire et animateur de télé-réalité ('The Apprentice'), Donald Trump remporte la présidence des États-Unis en 2016 contre toutes les prédictions, défaisant Hillary Clinton. Son premier mandat (2017-2021) se distingue par le protectionnisme commercial (guerre des droits de douane avec la Chine), le retrait des accords climatiques de Paris, une politique d'immigration restrictive ('the Wall') et des relations tumultueuses avec les alliés de l'OTAN. Il est le premier président américain mis en accusation deux fois par la Chambre des représentants. Sa contestation de l'élection de 2020 (qu'il prétend volée) culmine dans l'assaut du Capitole le 6 janvier 2021. Il revient au pouvoir comme 47e président en janvier 2025.",
    keyFacts: [
      "45e et 47e président des États-Unis (2017-2021 et 2025-)",
      "Premier milliardaire et homme de télévision à diriger les USA",
      "Guerre commerciale avec la Chine — droits de douane massifs",
      "Retrait des Accords de Paris sur le climat",
      "Mis en accusation (impeachment) deux fois : 2019 (Ukraine) et 2021 (incitation à l'insurrection)",
      "Assaut du Capitole le 6 janvier 2021 — 5 morts",
      "Condamné au pénal (2024) — premier ex-président américain condamné",
      "Réélu 47e président (novembre 2024) malgré ses condamnations"
    ],
    quote: "Make America Great Again.",
    level: ['3e', 'Terminale', 'HGGSP']
  },

  // === PERSONNALITÉS DES PAYS (ajouts) ===

  // RUSSIE
  {
    id: 'ivan_terrible',
    name: 'Ivan le Terrible',
    birth: '1530', death: '1584',
    era: 'Époque moderne', category: 'Politique', nationality: 'Russe',
    bio: "Ivan IV, dit 'le Terrible' (Grozny = redoutable en russe), est le premier tsar de toutes les Russies (1547). Il centralise le pouvoir, conquiert le Khanat de Kazan (1552) et de l'Astrakhan, ouvre la Sibérie aux Cosaques et renforce l'autocratie. Il crée l'oprichnina, police d'État qui terrorise la noblesse. Dans un accès de rage, il tue son fils et héritier Ivan de sa propre main (1581).",
    keyFacts: [
      "Premier souverain à prendre le titre de 'Tsar de toutes les Russies' (1547)",
      "Conquête du Khanat de Kazan (1552) — symbole de la puissance russe",
      "Création de l'oprichnina : première police secrète d'État russe",
      "Guerre de Livonie (1558-1583) pour accéder à la Baltique — échec",
      "Tue son propre fils Ivan lors d'une dispute (1581)"
    ],
    quote: "Le tsar est sur la terre l'image de Dieu tout-puissant.",
    level: ['4e', 'Terminale']
  },
  {
    id: 'pierre_grand',
    name: 'Pierre le Grand',
    birth: '1672', death: '1725',
    era: 'Époque moderne', category: 'Politique', nationality: 'Russe',
    bio: "Tsar puis premier Empereur de Russie (1682-1725), Pierre le Grand transforme la Russie arriérée en puissance européenne. Après un voyage incognito en Europe occidentale (Grand Tour 1697-98), il modernise l'armée, crée la marine, fonde Saint-Pétersbourg (1703) comme 'fenêtre sur l'Europe'. Il vainc Charles XII de Suède à Poltava (1709) et ouvre la Russie à la Baltique.",
    keyFacts: [
      "Visite l'Europe de façon incognito pour apprendre les techniques occidentales",
      "Fonde Saint-Pétersbourg (1703) — nouvelle capitale tournée vers l'Europe",
      "Vainqueur de Charles XII à Poltava (1709) — accès à la Baltique",
      "Crée la marine russe et modernise l'armée sur le modèle occidental",
      "Oblige les nobles à se raser la barbe et à adopter les mœurs européennes"
    ],
    quote: "Je gouverne des hommes et non des anges.",
    level: ['4e', 'Terminale']
  },
  {
    id: 'catherine_grande',
    name: 'Catherine II la Grande',
    birth: '1729', death: '1796',
    era: 'XVIIIe siècle', category: 'Politique', nationality: 'Russe',
    bio: "Impératrice de Russie (1762-1796), Catherine II est la souveraine éclairée par excellence : corresponde avec Voltaire et Diderot, fonde l'Ermitage, favorise les arts et les sciences. Elle agrandit l'Empire par les guerres contre l'Empire ottoman (accès à la mer Noire, Crimée 1783) et participe aux partages de la Pologne. Son règne de 34 ans est l'apogée de l'Empire russe des Lumières.",
    keyFacts: [
      "Renverse son époux Pierre III par un coup d'État (1762)",
      "Correspond avec Voltaire, Diderot, D'Alembert — Enlightened Despotism",
      "Annexe la Crimée (1783) et étend la Russie jusqu'à la mer Noire",
      "Participe aux trois partages de la Pologne (1772, 1793, 1795)",
      "Fonde l'Ermitage et enrichit considérablement les collections royales"
    ],
    quote: "Plus on est éclairé, plus on est libre.",
    level: ['4e', 'Terminale']
  },
  {
    id: 'lenine',
    name: 'Lénine',
    birth: '1870', death: '1924',
    era: 'XXe siècle', category: 'Politique', nationality: 'Russe',
    bio: "Vladimir Ilitch Oulianov, dit Lénine, est le fondateur de l'URSS et théoricien du marxisme-léninisme. Chef des bolcheviks, il organise la Révolution d'Octobre (7 novembre 1917) qui renverse le gouvernement provisoire et instaure le premier État soviétique. Il signe le traité de Brest-Litovsk (1918) avec l'Allemagne, gagne la guerre civile (1917-1922) et crée l'Union des Républiques Socialistes Soviétiques (1922).",
    keyFacts: [
      "Fondateur du Parti bolchevik — courant révolutionnaire du marxisme",
      "Révolution d'Octobre 1917 — premier État communiste au monde",
      "Traité de Brest-Litovsk (1918) — sortie de la guerre, perte de territoires",
      "Gagne la guerre civile (armées blanches, interventions étrangères 1917-1922)",
      "Fonde l'URSS (1922) — empire soviétique de 15 républiques"
    ],
    quote: "L'État, c'est nous.",
    level: ['3e', 'Terminale']
  },

  // ÉTATS-UNIS
  {
    id: 'washington',
    name: 'George Washington',
    birth: '1732', death: '1799',
    era: 'XVIIIe siècle', category: 'Militaire', nationality: 'Américaine',
    bio: "Général en chef de l'armée continentale lors de la Révolution américaine et premier président des États-Unis (1789-1797), George Washington est le 'Père de la Nation' américaine. Il conduit les troupes coloniales à la victoire contre les Britanniques (Yorktown, 1781), préside la Convention constitutionnelle (1787) et établit les précédents fondamentaux de la présidence, dont le retrait volontaire après deux mandats.",
    keyFacts: [
      "Commandant en chef de l'armée continentale — guerre d'indépendance (1775-1783)",
      "Victoire de Yorktown (1781) — reddition de Cornwallis, fin de la guerre",
      "Préside la Convention de Philadelphie (1787) — rédaction de la Constitution",
      "Premier président des États-Unis (1789-1797)",
      "Se retire volontairement après deux mandats — précédent fondateur"
    ],
    quote: "Associez-vous avec les hommes vertueux si vous voulez l'être.",
    level: ['4e', '2nde']
  },
  {
    id: 'lincoln',
    name: 'Abraham Lincoln',
    birth: '1809', death: '1865',
    era: 'XIXe siècle', category: 'Politique', nationality: 'Américaine',
    bio: "16e président des États-Unis (1861-1865), Abraham Lincoln conduit le pays à travers la Guerre civile (1861-1865), abolit l'esclavage (Proclamation d'émancipation, 1863 ; 13e amendement, 1865) et sauve l'Union. Né dans une famille pauvre du Kentucky, autodidacte devenu avocat, il est assassiné par John Wilkes Booth au Ford's Theatre (14 avril 1865), cinq jours après la reddition du général sudiste Lee.",
    keyFacts: [
      "Élu président (1860) sans obtenir un seul vote des États du Sud",
      "Conduit le Nord pendant la Guerre civile (1861-1865, 700 000 morts)",
      "Proclamation d'émancipation (1863) — libération des esclaves dans les États rebelles",
      "Discours de Gettysburg (1863) — définition de la démocratie",
      "Assassiné au Ford's Theatre le 14 avril 1865 par John Wilkes Booth"
    ],
    quote: "On peut tromper tout le monde quelque temps, et quelqu'un toujours, mais on ne peut tromper tout le monde toujours.",
    level: ['3e', '2nde']
  },
  {
    id: 'fdr',
    name: 'Franklin D. Roosevelt',
    birth: '1882', death: '1945',
    era: 'XXe siècle', category: 'Politique', nationality: 'Américaine',
    bio: "32e président des États-Unis (1933-1945), Franklin D. Roosevelt est le seul à avoir été élu quatre fois. Il sort les États-Unis de la Grande Dépression avec le New Deal (1933), refonde l'État-providence américain et guide le pays tout au long de la Seconde Guerre mondiale jusqu'à sa mort en fonctions (avril 1945). Handicapé par la poliomyélite (1921), il dissimule son fauteuil roulant pour préserver son image de force.",
    keyFacts: [
      "Élu quatre fois président (1932, 1936, 1940, 1944) — record absolu",
      "New Deal (1933) : relance économique après la Grande Dépression",
      "Lend-Lease (1941) : aide aux Alliés avant l'entrée en guerre",
      "Organise les conférences de Téhéran (1943) et Yalta (1945) avec Churchill et Staline",
      "Meurt en fonctions le 12 avril 1945 — à 3 semaines de la victoire"
    ],
    quote: "La seule chose que nous ayons à craindre est la crainte elle-même.",
    level: ['3e', 'Terminale']
  },

  // ÉGYPTE
  {
    id: 'ramsesII',
    name: 'Ramsès II',
    birth: '-1303', death: '-1213',
    era: 'Antiquité', category: 'Politique', nationality: 'Égyptienne',
    bio: "Troisième pharaon de la XIXe dynastie, Ramsès II (règne -1279 à -1213) est le pharaon le plus célèbre de l'Égypte ancienne. Surnommé 'Ramsès le Grand', son règne de 66 ans est marqué par de grands travaux (Abou Simbel, Karnak, Ramesséum) et la bataille de Qadesh contre les Hittites (vers -1274), après laquelle est signé le premier traité de paix de l'histoire. Son corps momifié est conservé au Musée du Caire.",
    keyFacts: [
      "Règne exceptionnel de 66 ans (-1279 à -1213)",
      "Bataille de Qadesh contre les Hittites (-1274) — premier traité de paix de l'histoire",
      "Construction d'Abou Simbel — temple taillé dans la roche en son honneur",
      "Construction de Pi-Ramsès, sa capitale dans le Delta",
      "Sa momie est l'une des mieux préservées du monde"
    ],
    quote: "Je suis le fils du soleil, né de son propre corps.",
    level: ['6e', '5e']
  },
  {
    id: 'nasser',
    name: 'Gamal Abdel Nasser',
    birth: '1918', death: '1970',
    era: 'XXe siècle', category: 'Politique', nationality: 'Égyptienne',
    bio: "Président de l'Égypte (1956-1970), Gamal Abdel Nasser est la figure emblématique du nationalisme arabe et du tiers-mondisme. Officier lors du coup d'État de 1952 contre le roi Farouk, il nationalise le canal de Suez (1956), défiant la France et le Royaume-Uni — crise de Suez. Il fonde la République arabe unie avec la Syrie (1958-1961) et tente d'unifier le monde arabe. Sa défaite face à Israël (Guerre des Six Jours, 1967) brise son prestige.",
    keyFacts: [
      "Participe au coup d'État des 'Officiers libres' (1952) — fin de la monarchie égyptienne",
      "Nationalisation du canal de Suez (1956) — symbole de la décolonisation",
      "Crise de Suez (1956) : France, Royaume-Uni et Israël attaquent mais reculent sous pression américano-soviétique",
      "République arabe unie avec la Syrie (1958-1961)",
      "Défaite lors de la Guerre des Six Jours (1967) — perte du Sinaï"
    ],
    quote: "Unité, discipline, travail.",
    level: ['3e', 'Terminale', 'HGGSP']
  },

  // IRAN
  {
    id: 'cyrus',
    name: 'Cyrus le Grand',
    birth: '-600', death: '-530',
    era: 'Antiquité', category: 'Politique', nationality: 'Perse',
    bio: "Fondateur de l'Empire achéménide (559-330 av. J.-C.), Cyrus le Grand crée le premier grand empire multiéthnique de l'histoire, s'étendant de la Méditerranée à l'Inde. Contrairement aux conquérants de son époque, il respecte les cultures et religions locales — il libère les Juifs de Babylone (539 av. J.-C.) et les autorise à reconstruire le Temple de Jérusalem. Le Cylindre de Cyrus est souvent présenté comme la première Déclaration des droits de l'homme.",
    keyFacts: [
      "Fonde l'Empire achéménide (-559) — le plus grand empire du monde antique",
      "Conquête de la Médie, de la Lydie (Crésus) et de Babylone",
      "Libère les Juifs de Babylone (539 av. J.-C.) — retour à Jérusalem",
      "Cylindre de Cyrus — considéré comme la première charte des droits de l'homme",
      "Respecte les religions et cultures des peuples conquis"
    ],
    quote: "Je suis Cyrus, roi du monde entier, grand roi, roi puissant, roi de Babylone.",
    level: ['5e', '2nde']
  },
  {
    id: 'khomeiny',
    name: 'Ruhollah Khomeiny',
    birth: '1902', death: '1989',
    era: 'XXe siècle', category: 'Religion', nationality: 'Iranienne',
    bio: "Ayatollah Ruhollah Khomeiny est le fondateur de la République islamique d'Iran. Théologien chiite exilé par le Shah Pahlavi (d'abord en Turquie, Irak, puis France), il orchestre depuis l'étranger la Révolution islamique de 1979 qui renverse le Shah. Revenant triomphalement à Téhéran (1er février 1979), il instaure la théocratie islamique (Velayat-e Faqih — gouvernement du jurisconsulte). Son régime affronte la prise d'otages à l'ambassade américaine et la guerre Iran-Irak (1980-1988).",
    keyFacts: [
      "Fondateur de la République islamique d'Iran (1979)",
      "Théorise le Velayat-e Faqih — gouvernement des religieux",
      "Organise la Révolution islamique depuis Paris (1978-79)",
      "Retour triomphal à Téhéran le 1er février 1979 (5 millions dans la rue)",
      "Prise d'otages à l'ambassade américaine (444 jours, 1979-1981)"
    ],
    quote: "L'islam est politique ou n'est pas.",
    level: ['Terminale', 'HGGSP']
  },

  // TURQUIE/EMPIRE OTTOMAN
  {
    id: 'soliman',
    name: 'Soliman le Magnifique',
    birth: '1494', death: '1566',
    era: 'Époque moderne', category: 'Politique', nationality: 'Ottomane',
    bio: "Dixième sultan de l'Empire ottoman (1520-1566), Soliman Ier dit 'le Magnifique' (en Occident) ou 'le Législateur' (Kanuni, en turc) règne pendant 46 ans sur l'empire à son apogée. Il conquiert Belgrade (1521), Rhodes (1522), la Hongrie (Mohács, 1526), assiège Vienne (1529) et étend l'empire en Afrique du Nord et en Orient. Il modernise la législation ottomane, mécène des arts et de l'architecture (Sinan, mosquée de Soliman).",
    keyFacts: [
      "Règne 46 ans sur l'Empire ottoman à son apogée (1520-1566)",
      "Conquête de Belgrade (1521), Rhodes (1522), bataille de Mohács (1526)",
      "Siège de Vienne (1529) — limite de l'expansion ottomane en Europe",
      "Fait de l'Empire ottoman la première puissance méditerranéenne",
      "Mécène : construit la Mosquée de Soliman (architecte Sinan)"
    ],
    quote: "Je suis Sultan des sultans, roi des rois, dispensateur des couronnes aux monarques du globe.",
    level: ['4e', '2nde']
  },
  {
    id: 'mehmed2',
    name: 'Mehmed II le Conquérant',
    birth: '1432', death: '1481',
    era: 'Moyen Âge', category: 'Militaire', nationality: 'Ottomane',
    bio: "Sultan ottoman (1444-1446, puis 1451-1481), Mehmed II prend Constantinople le 29 mai 1453, mettant fin à l'Empire byzantin vieux de 1 100 ans. Il fait de Constantinople (renommée Istanbul) la nouvelle capitale ottomane et y reconstruit Sainte-Sophie en mosquée. Il poursuit les conquêtes (Serbie, Morée, Trébizonde, Valachie) et vise Rome. Polyglotte, poète et mécène, il se présente comme héritier de la Rome antique.",
    keyFacts: [
      "Prise de Constantinople le 29 mai 1453 — fin de l'Empire byzantin",
      "Transforme Sainte-Sophie en mosquée — symbole de la victoire islamique",
      "Reconstitue et repeuple Constantinople — attire Grecs, Arméniens, Juifs",
      "Conquête des Balkans, de la Morée, de l'Anatolie orientale",
      "Se proclame héritier de l'Empire romain ('César des Romains')"
    ],
    quote: "Je suis le César des Romains.",
    level: ['4e', '2nde']
  },

  // JAPON
  {
    id: 'oda_nobunaga',
    name: 'Oda Nobunaga',
    birth: '1534', death: '1582',
    era: 'Époque moderne', category: 'Militaire', nationality: 'Japonaise',
    bio: "Seigneur de guerre japonais (daimyo), Oda Nobunaga est le premier des trois 'unificateurs' du Japon après un siècle de guerres civiles (Sengoku). Innovateur militaire, il utilise le premier les arquebuses en masse à la bataille de Nagashino (1575). Il détruit le pouvoir des moines guerriers bouddhistes (Enryaku-ji, 1571) et contrôle la moitié du Japon avant d'être trahi et contraint au suicide (seppuku) lors de l'incident de Honnoji (1582).",
    keyFacts: [
      "Premier unificateur du Japon après le siècle Sengoku",
      "Utilise les arquebuses en masse (Nagashino 1575) — révolution militaire",
      "Renverse le shogunat Ashikaga (1573)",
      "Détruit le monastère Enryaku-ji et ses moines guerriers (1571)",
      "Assassiné lors de l'incident de Honnoji (1582) — trahison d'Akechi Mitsuhide"
    ],
    quote: "Le monde est régi par la force, pas par la raison.",
    level: ['Terminale']
  },
  {
    id: 'tokugawa',
    name: 'Tokugawa Ieyasu',
    birth: '1543', death: '1616',
    era: 'Époque moderne', category: 'Politique', nationality: 'Japonaise',
    bio: "Troisième et dernier des unificateurs du Japon, Tokugawa Ieyasu fonde le shogunat Tokugawa (1603) après sa victoire à Sekigahara (1600), qui lui assure le contrôle du Japon. Son régime établit la période Edo (1603-1868) — 265 ans de paix, d'isolement (sakoku) et de prospérité. Sa lignée de shoguns Tokugawa gouverne le Japon jusqu'à la Restauration Meiji (1868).",
    keyFacts: [
      "Victoire de Sekigahara (1600) — maître du Japon",
      "Nommé shogun par l'Empereur (1603) — fonde la période Edo",
      "Politique de sakoku — isolement du Japon du reste du monde",
      "Fait d'Edo (Tokyo) la capitale de facto du Japon",
      "Sa lignée règne 265 ans jusqu'à la Restauration Meiji"
    ],
    quote: "La patience est la base de la sécurité et de la durée.",
    level: ['Terminale']
  },

  // MEXIQUE
  {
    id: 'cortes',
    name: 'Hernán Cortés',
    birth: '1485', death: '1547',
    era: 'Époque moderne', category: 'Militaire', nationality: 'Espagnole',
    bio: "Conquistador espagnol, Hernán Cortés conquiert l'Empire aztèque avec seulement 500 soldats entre 1519 et 1521. Grâce aux alliances avec les ennemis aztèques, aux épidémies de variole et à la superstition de Moctezuma II (qui le prend pour le dieu Quetzalcoatl), il prend Tenochtitlan (1521) et fonde la Nouvelle-Espagne. Sa conquête réduit de 90% la population indigène de la région.",
    keyFacts: [
      "Débarque au Mexique avec 500 soldats et 16 chevaux (1519)",
      "Alliance avec Tlaxcalans, ennemis des Aztèques",
      "Capture Moctezuma II et prend Tenochtitlan (1521)",
      "Fonde la Nouvelle-Espagne sur les ruines aztèques",
      "La variole décime les populations indigènes — génocide involontaire"
    ],
    quote: "Je veux de l'or, pas de simples excuses.",
    level: ['4e', '2nde']
  },
  {
    id: 'zapata',
    name: 'Emiliano Zapata',
    birth: '1879', death: '1919',
    era: 'XXe siècle', category: 'Politique', nationality: 'Mexicaine',
    bio: "Leader paysan de la Révolution mexicaine (1910-1920), Emiliano Zapata est le symbole de la résistance des paysans indiens contre les grands propriétaires terriens. Son slogan 'Tierra y Libertad' (Terre et Liberté) résume l'idéal révolutionnaire. Il dirige l'Armée de Libération du Sud et occupe Mexico deux fois. Trahi et assassiné en 1919, il devient une icône de la lutte pour la justice sociale en Amérique latine.",
    keyFacts: [
      "Chef de l'Armée de Libération du Sud — révolutionnaire paysan",
      "'Tierra y Libertad' — programme agraire radical",
      "Plan d'Ayala (1911) — redistribution des terres volées aux paysans",
      "Occupe Mexico deux fois avec Pancho Villa (1914)",
      "Assassiné par trahison (1919) — martyr de la Révolution mexicaine"
    ],
    quote: "Il vaut mieux mourir debout que de vivre toute sa vie à genoux.",
    level: ['Terminale', 'HGGSP']
  },

  // HAÏTI
  {
    id: 'toussaint',
    name: 'Toussaint Louverture',
    birth: '1743', death: '1803',
    era: 'XVIIIe siècle', category: 'Politique', nationality: 'Haïtienne',
    bio: "Esclave affranchi devenu général, Toussaint Louverture mène la seule révolution d'esclaves victorieuse de l'histoire (Saint-Domingue, 1791-1803). Il unifie l'île, vainc les armées françaises, britanniques et espagnoles, et gouverne Saint-Domingue de façon quasi indépendante. Trahi par Napoléon lors d'une négociation, il est déporté en France et meurt au Fort de Joux (Doubs) en 1803.",
    keyFacts: [
      "Esclave affranchi qui apprend à lire seul et lit César et Épictète",
      "Dirige la rébellion des esclaves de Saint-Domingue (1791)",
      "Repousse les armées française, britannique et espagnole",
      "Gouverneur de Saint-Domingue — première Constitution de l'île (1801)",
      "Déporté en France par Napoléon et meurt au Fort de Joux (1803)"
    ],
    quote: "En me renversant, on n'a abattu que le tronc de l'arbre de la liberté des Noirs. Mais il repoussera car ses racines sont profondes.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'dessalines',
    name: 'Jean-Jacques Dessalines',
    birth: '1758', death: '1806',
    era: 'XVIIIe siècle', category: 'Militaire', nationality: 'Haïtienne',
    bio: "Général haïtien, successeur de Toussaint Louverture, Jean-Jacques Dessalines proclame l'indépendance d'Haïti le 1er janvier 1804 après la victoire définitive sur l'armée française de Leclerc à Vertières (novembre 1803). Il prend le nom de Jacques Ier, Empereur d'Haïti, et ordonne le massacre des Blancs restants. Il est la figure fondatrice de la première République noire du monde.",
    keyFacts: [
      "Vainqueur à Vertières (18 novembre 1803) — dernière bataille décisive",
      "Proclame l'indépendance d'Haïti le 1er janvier 1804",
      "Premier à déchirer le drapeau tricolore français pour créer le drapeau haïtien",
      "Se proclame Empereur Jacques Ier (1804)",
      "Assassiné en 1806 — martyr de l'indépendance haïtienne"
    ],
    quote: "Pour dresser l'acte de l'indépendance, il nous faut la peau d'un Blanc pour parchemin.",
    level: ['3e', 'Terminale']
  },

  // ÉTHIOPIE
  {
    id: 'menelik2',
    name: 'Menelik II',
    birth: '1844', death: '1913',
    era: 'XIXe siècle', category: 'Militaire', nationality: 'Éthiopienne',
    bio: "Négus Négast (Roi des rois) d'Éthiopie (1889-1913), Menelik II remporte la bataille d'Adoua (1er mars 1896) contre l'armée italienne — la première grande victoire d'une armée africaine sur une puissance coloniale européenne. Il modernise l'Éthiopie (chemins de fer, hôpitaux, administration) et maintient l'indépendance du seul pays africain à ne jamais avoir été colonisé.",
    keyFacts: [
      "Unification de l'Éthiopie (1889-1895) — roi des rois",
      "Bataille d'Adoua (1er mars 1896) — 7 000 Italiens tués, défaite coloniale majeure",
      "Traité d'Addis-Abeba (1896) — l'Italie reconnaît la souveraineté éthiopienne",
      "Modernise l'Éthiopie : chemin de fer Djibouti-Addis-Abeba",
      "Fonde Addis-Abeba, nouvelle capitale (1886)"
    ],
    quote: "L'Éthiopie ne s'incline devant aucun étranger.",
    level: ['3e', 'Terminale', 'HGGSP']
  },
  {
    id: 'haile_selassie',
    name: 'Hailé Sélassié',
    birth: '1892', death: '1975',
    era: 'XXe siècle', category: 'Politique', nationality: 'Éthiopienne',
    bio: "Ras Tafari Makonnen, couronné Hailé Sélassié Ier (1930-1974), est le dernier Négus d'Éthiopie et une icône mondiale. Il résiste à l'invasion italienne de Mussolini (1935-1941), discours historique à la Société des Nations (1936). Vénéré comme un messie dans le mouvement rastafari jamaïcain (qui le considère comme une incarnation divine), il modernise l'Éthiopie et fonde l'Organisation de l'Unité Africaine (OUA, 1963, Addis-Abeba).",
    keyFacts: [
      "Résiste à l'invasion italienne (1935-41) — discours à la Société des Nations",
      "Libère l'Éthiopie avec les alliés britanniques (1941)",
      "Fondateur de l'Organisation de l'Unité Africaine (1963)",
      "Vénéré par le mouvement rastafari comme figure divine",
      "Renversé par le coup d'État militaire du Derg (1974)"
    ],
    quote: "Jusqu'à ce que la couleur d'un homme ne soit plus importante que la couleur de ses yeux, il y aura la guerre.",
    level: ['Terminale', 'HGGSP']
  },

  // INDE
  {
    id: 'akbar',
    name: 'Akbar le Grand',
    birth: '1542', death: '1605',
    era: 'Époque moderne', category: 'Politique', nationality: 'Indienne (Moghole)',
    bio: "Troisième Empereur moghol (1556-1605), Akbar le Grand règne sur la quasi-totalité du sous-continent indien. Illettré mais d'une intelligence exceptionnelle, il est le symbole de la tolérance religieuse dans l'histoire islamique : il abolit la taxe sur les non-musulmans (jizya), épouse des princesses hindoues (Jodha Bai) et tente de créer une religion syncrétique (Din-i-Ilahi). Il construit Fatehpur Sikri, cité impériale abandonnée.",
    keyFacts: [
      "Étend l'Empire moghol à la quasi-totalité de l'Inde",
      "Abolit la jizya (taxe sur les non-musulmans) — symbole de tolérance",
      "Épouse des princesses hindoues rajputes — politique de réconciliation",
      "Construit Fatehpur Sikri (1571-1585, UNESCO)",
      "Tente de créer le Din-i-Ilahi — religion universelle syncrétique"
    ],
    quote: "Un monarque doit être impartial envers toutes les religions.",
    level: ['4e', '2nde']
  },
  {
    id: 'nehru',
    name: 'Jawaharlal Nehru',
    birth: '1889', death: '1964',
    era: 'XXe siècle', category: 'Politique', nationality: 'Indienne',
    bio: "Premier Premier ministre de l'Inde indépendante (1947-1964), Jawaharlal Nehru est l'architecte de l'État indien moderne. Compagnon de Gandhi dans la lutte anticoloniale, il forge le modèle de la démocratie laïque indienne, inscrit dans la Constitution de 1950. Il dirige l'Inde lors de la partition traumatique avec le Pakistan (1947), de la Guerre froide (mouvement des non-alignés, Bandung 1955), et de la guerre sino-indienne (1962).",
    keyFacts: [
      "Premier PM de l'Inde indépendante (1947-1964) — 17 ans au pouvoir",
      "Rédige le Plan de Nehru — économie mixte, socialisme indien",
      "Fonde le Mouvement des non-alignés avec Nasser et Tito (Bandung 1955)",
      "Construit les IIT et les institutions scientifiques de l'Inde",
      "Sa fille Indira Gandhi et son petit-fils Rajiv Gandhi lui succèderont"
    ],
    quote: "La diversité de l'Inde n'est pas un obstacle mais sa plus grande richesse.",
    level: ['3e', 'Terminale', 'HGGSP']
  },

  // CHINE
  {
    id: 'wu_zetian',
    name: 'Wu Zetian',
    birth: '624', death: '705',
    era: 'Moyen Âge', category: 'Politique', nationality: 'Chinoise',
    bio: "Seule femme à avoir régné en son propre nom en Chine impériale, Wu Zetian est d'abord concubine de l'Empereur Taizong puis impératrice consort de l'Empereur Gaozong. Elle gouverne de facto la Chine dès 660, puis proclame la Dynastie Zhou (690-705), se nommant elle-même Huangdi (Fils du Ciel). Son règne est marqué par le développement des examens impériaux basés sur le mérite, l'expansion territoriale et l'essor du bouddhisme.",
    keyFacts: [
      "Seule femme à avoir officié comme Huangdi (Fils du Ciel) de Chine",
      "Fonde la Dynastie Zhou (690-705) sur les ruines des Tang",
      "Réforme des examens impériaux — mérite contre hérédité",
      "Développe le bouddhisme Chan (ancêtre du Zen japonais)",
      "Renversée lors d'un coup d'État à 80 ans, restitue le pouvoir aux Tang"
    ],
    quote: "Je suis l'égale du Ciel.",
    level: ['Terminale']
  },
  {
    id: 'zheng_he',
    name: 'Zheng He',
    birth: '1371', death: '1433',
    era: 'Époque moderne', category: 'Exploration', nationality: 'Chinoise',
    bio: "Amiral et eunuque de la cour des Ming, Zheng He dirige sept expéditions maritimes (1405-1433) à la tête de flottes colossales (jusqu'à 300 navires, 28 000 hommes) vers l'Asie du Sud-Est, l'Inde, la Perse et l'Afrique orientale. Ces voyages précèdent de plusieurs décennies ceux des Européens. La Chine renonce ensuite à l'exploration maritime, tournant radical qui lui fait manquer l'expansion coloniale.",
    keyFacts: [
      "7 expéditions maritimes géantes (1405-1433) avec jusqu'à 300 navires",
      "Atteint l'Afrique de l'Est (Malindi, Kenya) 70 ans avant les Portugais",
      "Navires 'junques au trésor' de 120 m — bien plus grands que ceux de Colomb",
      "Ramène des girafes en Chine — cadeaux diplomatiques",
      "La Chine renonce aux grandes explorations après sa mort — occasion manquée"
    ],
    quote: "Les vents d'est favorisent les voyages vers l'ouest.",
    level: ['4e', '2nde']
  },
  {
    id: 'sun_yatsen',
    name: 'Sun Yat-sen',
    birth: '1866', death: '1925',
    era: 'XIXe siècle', category: 'Politique', nationality: 'Chinoise',
    bio: "Médecin et révolutionnaire chinois, Sun Yat-sen est le père fondateur de la Chine républicaine. Il mène la Révolution de 1911 (Xinhai) qui renverse la dynastie Qing et proclame la République de Chine. Il théorise les 'Trois Principes du Peuple' (nationalisme, démocratie, bien-être). Vénéré à la fois à Taïwan (KMT) et en Chine populaire, il est l'une des rares figures respectées des deux côtés du détroit.",
    keyFacts: [
      "Père de la République de Chine — révolution de 1911 contre les Qing",
      "Premier président provisoire de la République de Chine (1912)",
      "Fonde le Kuomintang (Parti nationaliste chinois, 1912)",
      "'Trois Principes du Peuple' : nationalisme, démocratie, bien-être du peuple",
      "Vénéré à la fois par le PCC et le KMT de Taïwan"
    ],
    quote: "Résister à l'ennemi extérieur, purifier les affaires intérieures.",
    level: ['Terminale', 'HGGSP']
  },

  // CORÉE DU SUD
  {
    id: 'sejong',
    name: 'Sejong le Grand',
    birth: '1397', death: '1450',
    era: 'Moyen Âge', category: 'Intellectuel', nationality: 'Coréenne',
    bio: "Quatrième roi de la Dynastie Joseon (1418-1450), Sejong le Grand est la figure la plus vénérée de l'histoire coréenne. Il crée l'alphabet coréen, le hangeul (1443), en remplacement des sinogrammes chinois difficiles d'accès, permettant l'alphabétisation de masse du peuple coréen. Il encourage les sciences (invention du pluviomètre, horloges solaires, cadrans solaires), la littérature et la musique coréenne.",
    keyFacts: [
      "Crée le hangeul, l'alphabet coréen (1443) — l'un des alphabets les plus rationnels du monde",
      "Permet l'alphabétisation de masse de la population coréenne",
      "Développe les sciences : pluviomètre, horloges solaires, armillaires",
      "Étend le territoire coréen au nord (quatre districts du nord)",
      "Figure la plus représentée sur les billets coréens (10 000 won)"
    ],
    quote: "Considérez l'état du peuple avant de gouverner.",
    level: ['Terminale']
  },

  // AFRIQUE DU SUD
  {
    id: 'shaka',
    name: 'Shaka Zoulou',
    birth: '1787', death: '1828',
    era: 'XIXe siècle', category: 'Militaire', nationality: 'Sud-africaine (Zouloue)',
    bio: "Fondateur et roi du royaume Zoulou (1816-1828), Shaka Zoulou révolutionne l'art de la guerre zoulou avec la formation en 'tête de taureau' (impi) et la courte lance iklwa. Il conquiert la quasi-totalité de l'Afrique du Sud actuelle lors d'une expansion foudroyante (mfecane), déplaçant des millions de personnes. Sa domination crée indirectement les conditions de la résistance africaine face à la colonisation européenne.",
    keyFacts: [
      "Fonde le royaume Zoulou (1816) après avoir vaincu son demi-frère Sigujana",
      "Révolutionne la tactique militaire : formation 'tête de taureau', courte lance iklwa",
      "Mfecane ('le broyage') — expansion qui redessine l'Afrique australe",
      "Construit une armée de 40 000 guerriers professionnels",
      "Assassiné par ses demi-frères Dingane et Mhlangane (1828)"
    ],
    quote: "Le Zoulou ne fuit pas une bataille.",
    level: ['Terminale', 'HGGSP']
  },

  // PAYS-BAS
  {
    id: 'rembrandt',
    name: 'Rembrandt van Rijn',
    birth: '1606', death: '1669',
    era: 'Époque moderne', category: 'Art', nationality: 'Néerlandaise',
    bio: "Peintre néerlandais du Siècle d'Or (XVIIe s.), Rembrandt van Rijn est l'un des plus grands artistes de l'histoire de l'art occidental. Maître inégalé du clair-obscur (chiaroscuro), il peint des portraits d'une profondeur psychologique rare, des scènes bibliques et la célèbre Ronde de Nuit (1642). Plus de 300 peintures, 300 gravures et 2 000 dessins constituent son œuvre monumentale.",
    keyFacts: [
      "Chef-d'œuvre : La Ronde de Nuit (1642, Rijksmuseum Amsterdam)",
      "Maître du clair-obscur — influence les peintres jusqu'à nos jours",
      "300 peintures, 300 gravures, 2 000 dessins",
      "Faillite et vente aux enchères de ses biens (1656) — fin dans la pauvreté",
      "Ses auto-portraits (une centaine) sont une méditation unique sur le vieillissement"
    ],
    quote: "Choisissez uniquement une couleur comme amie, faites-la votre.",
    level: ['2nde', 'Terminale']
  },
  {
    id: 'van_gogh',
    name: 'Vincent van Gogh',
    birth: '1853', death: '1890',
    era: 'XIXe siècle', category: 'Art', nationality: 'Néerlandaise',
    bio: "Peintre postimpressionniste néerlandais, Vincent van Gogh produit en seulement 10 ans de carrière plus de 900 tableaux, dont La Nuit étoilée, Les Tournesols, La Chambre, Les Iris. Tourmenté par des troubles mentaux, il se coupe l'oreille lors d'une crise (1888) et finit sa vie à l'asile de Saint-Rémy. Il meurt à 37 ans sans avoir vendu qu'un seul tableau de son vivant — ses œuvres valent aujourd'hui parmi les plus chères du monde.",
    keyFacts: [
      "900 peintures en 10 ans de carrière (1880-1890)",
      "La Nuit étoilée (1889) — l'un des tableaux les plus célèbres au monde",
      "Se coupe l'oreille lors d'une dispute avec Gauguin (1888)",
      "Hospitalisé à Saint-Rémy-de-Provence (1889-1890)",
      "Vend un seul tableau de son vivant — ses œuvres valent des centaines de millions"
    ],
    quote: "Je rêve de ma peinture et je peins mon rêve.",
    level: ['2nde', 'Terminale']
  },
  {
    id: 'anne_frank',
    name: 'Anne Frank',
    birth: '1929', death: '1945',
    era: 'XXe siècle', category: 'Résistance', nationality: 'Néerlandaise (Allemande)',
    bio: "Adolescente juive allemande réfugiée à Amsterdam, Anne Frank se cache avec sa famille dans l'Annexe secrète (Achterhuis) d'un immeuble d'Amsterdam pendant 2 ans (1942-1944). Son journal, tenu pendant toute la période de clandestinité, est découvert après son arrestation par la Gestapo (août 1944). Elle meurt au camp de concentration de Bergen-Belsen en mars 1945. Son Journal (publié 1947) est l'un des livres les plus lus du monde.",
    keyFacts: [
      "Se cache avec sa famille dans l'Annexe secrète d'Amsterdam (1942-1944)",
      "Tient son journal pendant 2 ans de clandestinité",
      "Arrêtée par la Gestapo (4 août 1944) — trahie par un dénonciateur inconnu",
      "Déportée à Auschwitz puis Bergen-Belsen",
      "Son Journal (publié par son père Otto, 1947) traduit en 70 langues"
    ],
    quote: "Malgré tout, je crois encore à la bonté fondamentale des hommes.",
    level: ['3e', 'Terminale']
  },

  // MAROC (suppléments)
  {
    id: 'mohammed-v',
    name: 'Mohammed V',
    birth: '1909', death: '1961',
    era: 'XXe siècle', category: 'Politique', nationality: 'Marocaine',
    bio: "Le sultan Mohammed V (Mohamed Ben Youssef) est le père de l'indépendance marocaine. Sultan du Maroc depuis 1927 sous protectorat français, il soutient ouvertement le mouvement nationaliste de l'Istiqlal et refuse de collaborer avec l'occupant français — y compris sous Vichy. Déposé et exilé de force par la France en 1953, le sultan devient le symbole vivant de la résistance nationale. Son retour triomphal en 1955 ouvre la voie à l'indépendance du Maroc le 2 mars 1956. C'est seulement en 1957 qu'il quitte le titre de sultan pour prendre celui de roi Mohammed V, inaugurant la monarchie constitutionnelle marocaine moderne.",
    keyFacts: [
      "Sultan du Maroc depuis 1927 — chef religieux et politique sous protectorat français",
      "Refuse de signer un dahir de collaboration avec le régime de Vichy malgré les pressions",
      "Déposé et exilé à Madagascar par la France en 1953 — devient martyr et symbole de l'indépendance",
      "Retour triomphal au Maroc en novembre 1955, indépendance obtenue le 2 mars 1956",
      "Prend le titre de roi en 1957 — passe de sultan à roi pour marquer la modernisation de l'État"
    ],
    quote: "Nous avons terminé le petit jihad, nous commençons le grand jihad — le développement du Maroc.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'abd-el-krim',
    name: 'Abd el-Krim al-Khattabi',
    birth: '1882', death: '1963',
    era: 'XXe siècle', category: 'Militaire', nationality: 'Marocaine',
    bio: "Mohamed ibn Abd el-Krim al-Khattabi est un chef berbère rifain qui mène la résistance contre les colonisateurs espagnol et français dans le Rif (nord du Maroc). En 1921, il inflige à l'armée espagnole la désastreuse défaite d'Anoual (12 000 soldats tués), l'une des plus grandes humiliations de l'histoire coloniale. Sa méthode de guérilla — mobilité, embuscades, harcèlement, refus du combat frontal — révolutionne la guerre anticoloniale et inspire des figures majeures du XXe siècle : Ho Chi Minh l'étudie lors de ses séjours en France et s'en inspire pour le Viêt-Minh, Mao Zedong le cite explicitement comme modèle dans ses écrits sur la guerre populaire, Che Guevara intègre ses principes dans sa théorie du foyer révolutionnaire, et Ahmed Ben Bella, premier président de l'Algérie, reconnaît sa dette envers Abd el-Krim. Ses tactiques sont encore aujourd'hui au programme des académies militaires, notamment à West Point (États-Unis) et Saint-Cyr (France).",
    keyFacts: [
      "Victoire d'Anoual (1921) : 12 000 soldats espagnols tués — une des plus grandes défaites coloniales de l'histoire",
      "Résiste deux ans à une coalition de 200 000 soldats franco-espagnols avec quelques milliers de combattants",
      "Inspire directement Ho Chi Minh, Mao Zedong, Che Guevara et Ahmed Ben Bella — père de la guérilla anticoloniale",
      "Ses tactiques étudiées à West Point (USA) et Saint-Cyr (France) encore aujourd'hui",
      "Exilé à La Réunion puis au Caire où il préside le Comité de libération du Maghreb jusqu'à sa mort en 1963"
    ],
    quote: "Un peuple qui ne défend pas sa liberté ne mérite pas de la posséder.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'averroes',
    name: 'Ibn Rushd (Averroès)',
    birth: '1126', death: '1198',
    era: 'Moyen Âge', category: 'Intellectuel', nationality: 'Marocaine',
    bio: "Abū al-Walīd Muḥammad ibn Rushd, connu en Europe sous le nom d'Averroès, est né à Cordoue mais vécut et mourut à Marrakech. Grand philosophe, médecin et juriste arabo-andalou, il rédige des commentaires encyclopédiques sur l'œuvre d'Aristote qui influenceront profondément la scolastique chrétienne et la philosophie occidentale médiévale. Sa thèse sur la compatibilité entre raison et religion, et son Traité décisif, introduisent en Europe la philosophie aristotélicienne et font de lui le pont intellectuel entre Islam et Occident.",
    keyFacts: [
      "Rédige 38 commentaires sur les œuvres d'Aristote — surnommé 'Le Commentateur' par Thomas d'Aquin",
      "Philosophe de la cour des califes almohades à Marrakech",
      "Son œuvre transmise en latin révolutionne l'Université de Paris au XIIIe siècle",
      "Auteur du Kitāb al-Kulliyyāt (Colliget), encyclopédie médicale traduite dans toute l'Europe",
      "Défenseur de la rationalité contre l'obscurantisme — condamné puis réhabilité par le calife"
    ],
    quote: "L'ignorance mène à la peur, la peur mène à la haine, et la haine conduit à la violence.",
    level: ['Terminale']
  },
  {
    id: 'moulay-idriss',
    name: 'Moulay Idriss Ier',
    birth: '745', death: '791',
    era: 'Moyen Âge', category: 'Politique', nationality: 'Marocaine',
    bio: "Idriss ibn Abdallah, dit Moulay Idriss Ier, est le fondateur du premier État islamique du Maroc et ancêtre de la dynastie idrisside. Descendant du Prophète Mohammed par Ali et Fatima, il fuit le Proche-Orient après la bataille de Fakhkh (786) et s'établit à Volubilis (actuel Maroc). Accueilli par la tribu berbère des Aouraba, il unifie les tribus berbères du Maghreb et fonde Fès en 789. Il inaugure une ère d'islamisation organisée du Maroc et sa lignée régnera jusqu'au Xe siècle.",
    keyFacts: [
      "Descendant direct du Prophète Mohammed — fondateur de la lignée chérifienne",
      "Fonde la ville de Fès en 789, future capitale intellectuelle du Maroc",
      "Premier souverain à unifier sous l'islam les tribus berbères marocaines",
      "Assassiné en 791 par un agent abbasside envoyé par Hārūn al-Rashīd",
      "Sa ville sainte, Moulay Idriss Zerhoun, reste le plus grand lieu de pèlerinage du Maroc"
    ],
    quote: "L'unité sous la foi est la seule fondation durable d'un royaume.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'ahmed-mansour',
    name: 'Ahmed al-Mansour al-Saadien',
    birth: '1549', death: '1603',
    era: 'Époque moderne', category: 'Politique', nationality: 'Marocaine',
    bio: "Ahmed al-Mansour al-Saadien ('le Victorieux', 'le Doré') est le souverain le plus puissant de la dynastie saadienne. Sa victoire à la bataille des Trois Rois (1578) contre le Portugal consacre l'indépendance du Maroc et lui vaut un prestige considérable. Il conquiert ensuite l'Empire Songhaï en Afrique de l'Ouest (1591), contrôlant les routes de l'or et du sel du Sahara. Grand mécène, il embellit Marrakech avec le palais El Badi et la Medersa Ben Youssef, faisant de sa cour l'une des plus brillantes du monde islamique.",
    keyFacts: [
      "Victoire à la bataille des Trois Rois (4 août 1578) — mort du roi Sébastien Ier du Portugal",
      "Conquête de l'Empire Songhaï en 1591 — contrôle des mines d'or du Soudan occidental",
      "Construction du palais El Badi à Marrakech, merveille du monde islamique",
      "Entretient des relations diplomatiques avec la reine Élisabeth Ire d'Angleterre",
      "Dernier grand souverain saadien — sa mort plonge le Maroc dans une guerre civile"
    ],
    quote: "L'or et l'épée sont les deux piliers de tout royaume durable.",
    level: ['Terminale']
  },

  // ALGÉRIE
  {
    id: 'emir-abd-el-kader',
    name: 'Émir Abd el-Kader',
    birth: '1808', death: '1883',
    era: 'XIXe siècle', category: 'Militaire', nationality: 'Algérienne',
    bio: "Mohamed ibn Abd el-Kader al-Hasani, dit l'Émir Abd el-Kader, est le premier grand résistant à la colonisation française en Algérie et l'une des figures les plus admirées du XIXe siècle. Proclamé émir par les tribus de l'ouest algérien en 1832, il opère dans le cadre de l'ancien territoire de la régence ottomane et revendique une légitimité islamique héritée de cette autorité. Il met en place une organisation militaire et administrative structurée — armée régulière, collecte de l'impôt, diplomatie — sans pour autant constituer un État algérien au sens moderne (lequel ne naîtra qu'en 1962). Il résiste quinze ans à la France malgré une infériorité matérielle écrasante. À Damas en 1860, il sauve personnellement des milliers de Chrétiens lors des massacres, lui valant l'admiration mondiale — décoration par Napoléon III et Abraham Lincoln. Philosophe, poète et humaniste soufi, il reste l'une des figures les plus respectées de l'histoire algérienne.",
    keyFacts: [
      "Proclamé émir en 1832, il met en place une structure militaire et administrative — sans constituer un État algérien (né en 1962)",
      "Signe le Traité de la Tafna (1837) avec la France — reconnaissance temporaire de son autorité sur deux tiers de l'Algérie",
      "Résiste 15 ans à la France avec une armée régulière et une administration structurée",
      "À Damas (1860), protège des milliers de Chrétiens lors des massacres — salué par Napoléon III et Abraham Lincoln",
      "Figure de l'humanisme islamique : philosophe et poète soufi admiré en Orient comme en Occident"
    ],
    quote: "Je suis un homme qui aime la vérité et cherche à la faire connaître aux autres.",
    level: ['3e', 'Terminale']
  },

  // ROYAUME-UNI (suppléments)
  {
    id: 'william-conquerant',
    name: 'Guillaume le Conquérant',
    birth: '1028', death: '1087',
    era: 'Moyen Âge', category: 'Militaire', nationality: 'Britannique',
    bio: "Guillaume, duc de Normandie, conquiert l'Angleterre à la bataille de Hastings (1066) et devient Guillaume Ier d'Angleterre. Cette conquête normande transforme radicalement la langue, la culture et les structures politiques anglaises : le français devient langue de la cour, le système féodal est imposé et la domination normande remodèle la noblesse. Le Domesday Book (1086), recensement complet de l'Angleterre, témoigne de son génie administratif. Sa conquête est l'événement fondateur de l'Angleterre médiévale.",
    keyFacts: [
      "Victoire à la bataille de Hastings (14 octobre 1066) contre Harold II",
      "Couronnement à l'abbaye de Westminster le 25 décembre 1066",
      "Impose le système féodal normand à toute l'Angleterre",
      "Ordonne le Domesday Book (1086), premier recensement exhaustif d'un pays européen",
      "Le français normand influence profondément la langue anglaise (30 % des mots anglais)"
    ],
    quote: "Je suis entré en Angleterre par la grâce de Dieu — et j'y resterai.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'richard-coeur-de-lion',
    name: 'Richard Cœur de Lion',
    birth: '1157', death: '1199',
    era: 'Moyen Âge', category: 'Militaire', nationality: 'Britannique',
    bio: "Richard Ier d'Angleterre, dit Cœur de Lion, est l'une des figures les plus emblématiques de la chevalerie médiévale. Chef de la Troisième Croisade (1189-1192), il remporte plusieurs victoires face à Saladin — dont Arsūf et la prise d'Acre — mais ne peut reprendre Jérusalem. Prisonnier de l'Autriche puis rançonné, il rentre en Angleterre où il passe peu de temps, préférant guerroyer en France. Tué d'un carreau d'arbalète en Poitou, il incarne l'idéal du roi-chevalier dans l'imaginaire médiéval et romantique.",
    keyFacts: [
      "Conduit la Troisième Croisade aux côtés de Philippe II Auguste et de Frédéric Barberousse",
      "Victoire d'Arsūf (1191) contre Saladin — one of the rare Christian victories of the Crusades",
      "Signé la trêve de Jaffa (1192) permettant aux pèlerins d'accéder à Jérusalem",
      "Capturé par le duc Léopold d'Autriche et rançonné 150 000 marcs d'argent",
      "Passe seulement 6 mois de son règne de 10 ans sur le sol anglais"
    ],
    quote: "Si j'avais pu trouver un acheteur, j'aurais vendu Londres elle-même.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'henri-viii',
    name: 'Henri VIII',
    birth: '1491', death: '1547',
    era: 'Époque moderne', category: 'Politique', nationality: 'Britannique',
    bio: "Henri VIII est le roi d'Angleterre qui rompt avec l'Église catholique romaine pour créer l'Église anglicane (1534), événement fondateur de la Réforme anglaise. Cette rupture, motivée par le refus du pape d'annuler son mariage avec Catherine d'Aragon, transforme l'Angleterre religieusement, politiquement et économiquement. Il se marie six fois, fait décapiter deux de ses épouses et dissolve les monastères, s'appropriant leurs richesses. Despote autoritaire, il renforce l'autorité royale et pose les bases de l'Angleterre moderne.",
    keyFacts: [
      "Fonde l'Église d'Angleterre (anglicane) en 1534 — Acte de Suprématie",
      "Six mariages : Catherine d'Aragon, Anne Boleyn, Jane Seymour, Anne de Clèves, Catherine Howard, Catherine Parr",
      "Fait exécuter deux épouses (Anne Boleyn, Catherine Howard) et son chancelier Thomas More",
      "Dissolution des monastères (1536-1541) — redistribution des terres à la noblesse",
      "Père d'Édouard VI, Marie Ière et Élisabeth Ière"
    ],
    quote: "La tête qui porte la couronne ne peut dormir paisiblement.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'elizabeth-iere',
    name: 'Élisabeth Ière',
    birth: '1533', death: '1603',
    era: 'Époque moderne', category: 'Politique', nationality: 'Britannique',
    bio: "Élisabeth Ière d'Angleterre, fille d'Henri VIII et d'Anne Boleyn, règne 45 ans (1558-1603) et préside au premier âge d'or de l'Angleterre. Surnommée la 'Reine Vierge', elle refuse tout mariage pour préserver son autorité. Sous son règne, l'Angleterre défait l'Invincible Armada espagnole (1588), connaît la floraison de la littérature élisabéthaine (Shakespeare, Marlowe) et pose les bases de son empire commercial. Figure de la résistance protestante face à l'Espagne catholique, elle incarne la Renaissance anglaise.",
    keyFacts: [
      "Défaite de l'Invincible Armada espagnole (1588) — tournant dans l'hégémonie maritime mondiale",
      "Âge d'or de la littérature anglaise : Shakespeare, Marlowe, Edmund Spenser",
      "Consolide l'anglicanisme comme religion d'État — persécution modérée des catholiques",
      "Fonde la Compagnie des Indes orientales (1600) — base de l'empire commercial britannique",
      "Règne 45 ans sans héritier — fin des Tudors, succession des Stuarts"
    ],
    quote: "Je sais que j'ai le corps d'une femme faible et délicate, mais j'ai le cœur et l'estomac d'un roi.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'queen-victoria',
    name: 'Reine Victoria',
    birth: '1819', death: '1901',
    era: 'XIXe siècle', category: 'Politique', nationality: 'Britannique',
    bio: "Victoria règne 63 ans (1837-1901), le règne le plus long de l'histoire britannique avant Élisabeth II. Son ère voit l'apogée de l'Empire britannique qui couvre alors un quart des terres émergées et comprend 400 millions de sujets. La Révolution industrielle transforme l'Angleterre en atelier du monde. Impératrice des Indes depuis 1876, elle est la grand-mère de presque toutes les familles royales européennes. L'époque victorienne définit la morale bourgeoise, l'expansion coloniale et la modernisation industrielle.",
    keyFacts: [
      "Règne de 63 ans (1837-1901) — record avant Élisabeth II (70 ans)",
      "L'Empire britannique atteint son apogée : 24 % des terres mondiales, 400 millions d'habitants",
      "Proclamée Impératrice des Indes en 1876 par le Premier ministre Disraeli",
      "Grand-mère de 9 souverains européens — surnommée 'la grand-mère de l'Europe'",
      "Révolution industrielle : l'Angleterre devient l'atelier du monde sous son règne"
    ],
    quote: "Nous ne sommes pas intéressés par les possibilités d'un échec. Elles n'existent pas.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'margaret-thatcher',
    name: 'Margaret Thatcher',
    birth: '1925', death: '2013',
    era: 'XXe siècle', category: 'Politique', nationality: 'Britannique',
    bio: "Margaret Thatcher, première femme Premier ministre du Royaume-Uni (1979-1990), transforme radicalement l'économie et la société britanniques. Son programme néolibéral — privatisations massives, démantèlement des syndicats, déréglementation financière — est surnommé 'thatchérisme'. Elle gagne la guerre des Malouines (1982), renforce l'alliance atlantique avec Reagan et participe à la fin de la Guerre froide. Figure controversée, elle est adulée comme libératrice économique par les uns et dénoncée comme destructrice du tissu social par les autres.",
    keyFacts: [
      "Première femme Premier ministre du Royaume-Uni (4 mai 1979 - 28 novembre 1990)",
      "Guerre des Malouines (1982) — victoire contre l'Argentine, regain de popularité national",
      "Brise le mouvement syndical — grève des mineurs (1984-1985) — affaiblit le Trade Union Congress",
      "Privatise British Telecom, British Gas, British Airways, Water — 'Big Bang' financier de 1986",
      "Surnommée 'Dame de fer' par la presse soviétique pour sa fermeté anti-communiste"
    ],
    quote: "Il n'y a pas d'alternative. (TINA — There Is No Alternative)",
    level: ['3e', 'Terminale']
  },
  {
    id: 'elizabeth-ii',
    name: 'Élisabeth II',
    birth: '1926', death: '2022',
    era: 'XXe siècle', category: 'Politique', nationality: 'Britannique',
    bio: "Élisabeth II règne 70 ans (1952-2022), le plus long règne de l'histoire britannique et le second plus long d'un monarque reconnu dans le monde entier. Montée sur le trône à 25 ans après la mort prématurée de son père George VI, elle incarne la continuité de la monarchie à travers les bouleversements du XXe siècle : décolonisation du Commonwealth, guerres froides, révolution culturelle des années 60, crises familiales (divorce de Charles et Diana), Brexit. Figure de stabilité et de service public, elle est reçue par 13 présidents américains et 15 Premiers ministres britanniques. Sa mort en septembre 2022 suscite un deuil planétaire sans précédent.",
    keyFacts: [
      "Règne de 70 ans (6 février 1952 – 8 septembre 2022) — record absolu de la monarchie britannique",
      "Couronnée à l'abbaye de Westminster le 2 juin 1953 — première cérémonie télévisée de l'histoire (27 millions de téléspectateurs)",
      "Chef du Commonwealth — 56 nations, 2,5 milliards de personnes",
      "A nommé 15 Premiers ministres, de Churchill (1952) à Truss (2022, deux jours avant sa mort)",
      "Sa mort le 8 septembre 2022 à Balmoral déclenche un deuil mondial — 4 milliards de téléspectateurs pour ses funérailles"
    ],
    quote: "Je déclare devant vous tous que ma vie entière, longue ou courte, sera consacrée à votre service.",
    level: ['3e', 'Terminale']
  },

  // FRANCE (suppléments)
  {
    id: 'francois-ier',
    name: 'François Ier',
    birth: '1494', death: '1547',
    era: 'Époque moderne', category: 'Politique', nationality: 'Française',
    bio: "François Ier est le roi de France de la Renaissance (1515-1547). Sa victoire à Marignan (1515) contre les Suisses marque le début de son règne brillant. Grand mécène, il attire en France Léonard de Vinci, fait construire les châteaux de la Loire et fait du français la langue officielle du royaume (Ordonnance de Villers-Cotterêts, 1539). Il rivalise avec Charles Quint pour l'hégémonie européenne, fait alliance avec les Ottomans et pose les bases de l'absolutisme royal français. Son règne incarne la Renaissance française.",
    keyFacts: [
      "Victoire de Marignan (13-14 septembre 1515) — ouvre les guerres d'Italie",
      "Ordonnance de Villers-Cotterêts (1539) — impose le français dans les actes officiels",
      "Accueille Léonard de Vinci à Amboise — mécène de la Renaissance française",
      "Rivalité avec Charles Quint — capturé à Pavie (1525), rançonné",
      "Fonde le Collège de France (1530) — institution qui existe encore aujourd'hui"
    ],
    quote: "Souvent femme varie, bien fol est qui s'y fie.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'henri-iv',
    name: 'Henri IV',
    birth: '1553', death: '1610',
    era: 'Époque moderne', category: 'Politique', nationality: 'Française',
    bio: "Henri IV, premier roi de la dynastie des Bourbons, met fin aux guerres de Religion qui déchiraient la France depuis 1562. Huguenot converti au catholicisme ('Paris vaut bien une messe'), il promulgue l'Édit de Nantes (1598) qui accorde la liberté de culte aux protestants. Son règne voit la reconstruction économique de la France ruinée par les guerres civiles, sous l'impulsion de son ministre Sully. Populaire sous le nom du 'bon roi Henri', il est assassiné par Ravaillac en 1610, laissant un royaume apaisé et prospère.",
    keyFacts: [
      "Conversion au catholicisme en 1593 : 'Paris vaut bien une messe'",
      "Édit de Nantes (13 avril 1598) — première grande loi de tolérance religieuse d'Europe",
      "Reconstruction économique sous Sully : dragage des marais, routes, agriculture",
      "Premier roi de la dynastie des Bourbons — ancêtre des dynasties espagnole et française actuelles",
      "Assassiné le 14 mai 1610 par François Ravaillac — deuil national immense"
    ],
    quote: "Je veux qu'il n'y ait si pauvre paysan en mon royaume qu'il n'ait tous les dimanches sa poule au pot.",
    level: ['3e', 'Terminale']
  },

  // ESPAGNE
  {
    id: 'isabelle-castille',
    name: 'Isabelle de Castille',
    birth: '1451', death: '1504',
    era: 'Époque moderne', category: 'Politique', nationality: 'Espagnole',
    bio: "Isabelle Ière de Castille, reine de 1474 à 1504, est avec son époux Ferdinand II d'Aragon la co-fondatrice de l'Espagne unifiée. Ensemble, ils reconquièrent Grenade (1492), dernier bastion musulman en Espagne, et financent le voyage de Christophe Colomb qui aboutit à la découverte de l'Amérique la même année. L'Inquisition espagnole est réorganisée sous son règne, menant à l'expulsion des Juifs et des Maures. Elle reçoit le titre de 'Reine catholique' du pape et joue un rôle central dans la construction de l'empire colonial espagnol.",
    keyFacts: [
      "Reconquête de Grenade (2 janvier 1492) — fin de la Reconquista, 781 ans de présence islamique",
      "Finance l'expédition de Christophe Colomb — découverte de l'Amérique (12 octobre 1492)",
      "Expulsion des Juifs d'Espagne (édit de 1492) — 100 000 à 300 000 personnes exilées",
      "Réorganise l'Inquisition espagnole sous Torquemada",
      "Reçoit du pape le titre de 'Reine catholique' avec Ferdinand en 1496"
    ],
    quote: "Pour le service de Dieu et de notre sainte foi catholique.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'charles-quint',
    name: 'Charles Quint (Carlos V)',
    birth: '1500', death: '1558',
    era: 'Époque moderne', category: 'Politique', nationality: 'Espagnole',
    bio: "Charles Quint est l'un des souverains les plus puissants de l'histoire européenne. Héritier des Habsbourg, il cumule les couronnes d'Espagne, d'Allemagne (Saint-Empire), des Pays-Bas et de la moitié des Amériques. Son empire, sur lequel 'le soleil ne se couche jamais', est le plus vaste de l'époque moderne. Il affronte la Réforme luthérienne, rivalise avec François Ier de France et Soliman le Magnifique. Épuisé par ces guerres incessantes, il abdique en 1556 et se retire au monastère de Yuste, geste sans précédent dans l'histoire.",
    keyFacts: [
      "Règne sur Espagne, Saint-Empire romain germanique, Pays-Bas, Amériques — empire 'sans coucher de soleil'",
      "Rivalise avec François Ier (capturé à Pavie, 1525) et Soliman le Magnifique",
      "Affronte Luther à la Diète de Worms (1521) — début des guerres de religion en Allemagne",
      "Conquête du Mexique (Cortés, 1521) et du Pérou (Pizarro, 1532) sous son règne",
      "Abdique en 1556 — partage l'empire entre son fils Philippe II et son frère Ferdinand"
    ],
    quote: "Je parle espagnol à Dieu, italien aux femmes, français aux hommes et allemand à mon cheval.",
    level: ['Terminale']
  },
  {
    id: 'cervantes',
    name: 'Miguel de Cervantes',
    birth: '1547', death: '1616',
    era: 'Époque moderne', category: 'Art', nationality: 'Espagnole',
    bio: "Miguel de Cervantes Saavedra est l'auteur de Don Quichotte (1605-1615), considéré comme le premier roman moderne et l'un des plus grands chefs-d'œuvre de la littérature mondiale. Soldat blessé à Lépante (1571), capturé et esclave à Alger cinq ans, puis prisonnier pour dettes en Espagne, sa vie aventureuse nourrit son œuvre. Don Quichotte, qui tourne en dérision les romans de chevalerie, invente le roman psychologique et donne naissance à la littérature espagnole du Siècle d'Or.",
    keyFacts: [
      "Don Quichotte (1605-1615) — traduit en plus de 140 langues, roman le plus vendu après la Bible",
      "Blessé à la bataille de Lépante (1571) — perd l'usage de la main gauche",
      "Capturé par des corsaires, esclave à Alger de 1575 à 1580",
      "Emprisonné à plusieurs reprises pour dettes — commence Don Quichotte en prison",
      "Meurt le même jour que Shakespeare (23 avril 1616)"
    ],
    quote: "Dis-moi tes fréquentations, et je te dirai qui tu es.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'velazquez',
    name: 'Diego Vélazquez',
    birth: '1599', death: '1660',
    era: 'Époque moderne', category: 'Art', nationality: 'Espagnole',
    bio: "Diego Rodríguez de Silva y Vélazquez est le plus grand peintre du Siècle d'Or espagnol et l'un des maîtres absolus de la peinture occidentale. Peintre officiel de Philippe IV d'Espagne, il révolutionne la représentation de la lumière, de l'espace et du mouvement réel. Son chef-d'œuvre, Las Meninas (1656), est considéré comme la 'théologie de la peinture' pour sa réflexion sur la représentation. Goya, Manet et Picasso reconnaissent tous sa dette envers Vélazquez.",
    keyFacts: [
      "Peintre officiel du roi Philippe IV d'Espagne à partir de 1623",
      "Las Meninas (1656) — chef-d'œuvre absolu, révolutionne la peinture par sa complexité spatiale",
      "Deux voyages en Italie — rencontre Rubens, s'imprègne de la Renaissance italienne",
      "Portrait de l'Innocent X (1650) — pape choqué par son réalisme : 'troppo vero' (trop vrai)",
      "Influence directe sur Goya, Manet et Picasso qui copient ses œuvres"
    ],
    quote: "Peindre ce que l'on voit, non ce que l'on sait.",
    level: ['Terminale']
  },
  {
    id: 'picasso',
    name: 'Pablo Picasso',
    birth: '1881', death: '1973',
    era: 'XXe siècle', category: 'Art', nationality: 'Espagnole',
    bio: "Pablo Ruiz Picasso est l'artiste le plus influent du XXe siècle. Co-fondateur du cubisme avec Georges Braque, il révolutionne la peinture en représentant simultanément plusieurs points de vue. Son œuvre de 20 000 pièces traverse les périodes bleue, rose, cubiste, surréaliste. Guernica (1937), peinte en réaction au bombardement de la ville basque par l'aviation nazie, est devenu le symbole mondial de la dénonciation de la guerre. Né à Málaga, il passe l'essentiel de sa vie en France où il s'engage aux côtés des républicains espagnols.",
    keyFacts: [
      "Co-fondateur du cubisme avec Braque (Les Demoiselles d'Avignon, 1907)",
      "Guernica (1937) — dénonce le bombardement nazi de la ville basque, icône anti-guerre mondiale",
      "Œuvre totale : plus de 20 000 pièces (peintures, sculptures, céramiques, gravures)",
      "Membre du Parti Communiste Français (1944-1973) — engagement politique affirmé",
      "Artiste le plus cité dans les vols d'art — ses œuvres valuent des centaines de millions d'euros"
    ],
    quote: "L'art lave de la poussière du quotidien notre âme.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'franco',
    name: 'Francisco Franco',
    birth: '1892', death: '1975',
    era: 'XXe siècle', category: 'Politique', nationality: 'Espagnole',
    bio: "Francisco Franco Bahamonde est le dictateur qui dirige l'Espagne de 1939 à 1975. Chef nationaliste lors de la guerre civile espagnole (1936-1939), il bénéficie du soutien de Hitler et Mussolini pour vaincre la République espagnole. Son régime (le Franquisme) est une dictature nationaliste catholique autoritaire qui réprime toute opposition. Neutre pendant la Seconde Guerre mondiale, il survit à la défaite des fascismes et modernise l'économie espagnole dans les années 1960 (le 'miracle espagnol'). Il désigne Juan Carlos Ier comme successeur, qui rétablit la démocratie après sa mort.",
    keyFacts: [
      "Déclenche le pronunciamiento (coup d'État) du 18 juillet 1936 — début de la guerre civile",
      "Soutenu par Hitler (Légion Condor) et Mussolini — victory en 1939 sur la République",
      "Dictateur de l'Espagne pendant 36 ans (1939-1975) — répression de 100 000+ opposants",
      "Maintient la neutralité espagnole pendant la Seconde Guerre mondiale — survie du régime",
      "Désigne Juan Carlos Ier comme successeur — transition vers la démocratie après 1975"
    ],
    quote: "Tout pour la patrie, rien contre la patrie, tout avec la patrie.",
    level: ['3e', 'Terminale']
  },

  // ANTIQUITÉ (manquants)
  {
    id: 'hannibal',
    name: 'Hannibal Barca',
    birth: '-247', death: '-183',
    era: 'Antiquité', category: 'Militaire', nationality: 'Carthaginoise',
    bio: "Hannibal Barca est le plus grand général de l'Antiquité selon de nombreux historiens et le stratège qui faillit détruire Rome. Fils d'Hamilcar Barca, il jure dès l'enfance une haine éternelle à Rome. En 218 av. J.-C., il accomplit l'exploit de traverser les Alpes avec 37 éléphants de guerre et une armée de 40 000 hommes pour attaquer l'Italie par le nord. Il écrase les armées romaines à la Trébie, au lac Trasimène, puis à Cannes (216 av. J.-C.) — l'une des plus grandes défaites militaires de l'histoire romaine. Ses tactiques d'encerclement, notamment la manœuvre en tenaille de Cannes, sont encore enseignées aujourd'hui dans toutes les académies militaires du monde.",
    keyFacts: [
      "Traverse les Alpes avec 37 éléphants de guerre (218 av. J.-C.) — exploit militaire légendaire",
      "Victoire de Cannes (216 av. J.-C.) : 70 000 Romains tués en une journée — record de l'Antiquité",
      "Reste 15 ans en Italie sans jamais être chassé, malgré les contre-offensives romaines",
      "Vaincu à Zama (202 av. J.-C.) par Scipion l'Africain — fin de la suprématie carthaginoise",
      "Sa manœuvre d'encerclement de Cannes est encore enseignée à West Point et Saint-Cyr"
    ],
    quote: "Je trouverai un chemin ou j'en ferai un.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'spartacus',
    name: 'Spartacus',
    birth: '-111', death: '-71',
    era: 'Antiquité', category: 'Militaire', nationality: 'Thrace',
    bio: "Spartacus est un gladiateur thrace devenu le chef de la plus grande révolte d'esclaves de l'Antiquité romaine (73-71 av. J.-C.), connue sous le nom de Troisième Guerre Servile. Escapé de l'école de gladiateurs de Capoue avec une soixantaine d'hommes, il constitue rapidement une armée de 120 000 esclaves fugitifs et inflige plusieurs défaites cuisantes aux légions romaines. Sa révolte terrorise Rome pendant deux ans. Vaincu et tué par Crassus en 71 av. J.-C., il est devenu le symbole universel de la résistance des opprimés — repris par Marx, les spartakistes allemands et les mouvements révolutionnaires du XXe siècle.",
    keyFacts: [
      "Mène la Troisième Guerre Servile (73-71 av. J.-C.) — 120 000 esclaves sous ses ordres",
      "Inflige plusieurs défaites à des légions romaines — terreur à Rome pendant deux ans",
      "Tué au combat par Crassus en 71 av. J.-C. — 6 000 de ses compagnons crucifiés sur la Via Appia",
      "Repris comme symbole par Karl Marx, Rosa Luxemburg (spartakistes) et les révolutionnaires du XXe s.",
      "Figure fondatrice de la lutte contre l'esclavage et l'oppression"
    ],
    quote: "Mieux vaut mourir libre qu'enchaîné.",
    level: ['3e', 'Terminale']
  },

  // MOYEN ÂGE / PÉRIODE MÉDIÉVALE (manquants)
  {
    id: 'dante',
    name: 'Dante Alighieri',
    birth: '1265', death: '1321',
    era: 'Moyen Âge', category: 'Intellectuel', nationality: 'Italienne',
    bio: "Dante Alighieri est le père de la langue italienne et l'un des plus grands poètes de la civilisation occidentale. Sa Divine Comédie (1308-1321), voyage allégorique à travers l'Enfer, le Purgatoire et le Paradis, est considérée comme le sommet de la littérature médiévale et l'un des textes fondateurs de la culture européenne. En choisissant d'écrire en toscan populaire plutôt qu'en latin, Dante invente la langue italienne littéraire. Exilé de Florence pour des raisons politiques, il erre en Italie jusqu'à sa mort à Ravenne. Son influence sur la littérature mondiale — de Boccace à T.S. Eliot — est incalculable.",
    keyFacts: [
      "La Divine Comédie (1308-1321) — œuvre fondatrice de la littérature européenne",
      "Choisit le toscan populaire pour écrire — invente la langue italienne littéraire",
      "Exilé de Florence (1302) pour raisons politiques — ne reverra jamais sa ville natale",
      "Introduit Virgile comme guide symbolique — pont entre Antiquité et Chrétienté médiévale",
      "Influence T.S. Eliot, Borges, Balzac et des siècles de littérature mondiale"
    ],
    quote: "Lasciate ogne speranza, voi ch'intrate. (Abandonnez toute espérance, vous qui entrez.)",
    level: ['Terminale']
  },
  {
    id: 'marco-polo',
    name: 'Marco Polo',
    birth: '1254', death: '1324',
    era: 'Moyen Âge', category: 'Exploration', nationality: 'Italienne',
    bio: "Marco Polo est le plus célèbre explorateur médiéval occidental, dont le récit de voyage en Chine et en Asie ouvre l'Europe sur un monde inconnu. Parti de Venise à 17 ans avec son père et son oncle (1271), il voyage 24 ans en Asie — Perse, Afghanistan, Chine — et sert 17 ans à la cour de Kubilai Khan, l'empereur mongol. Son Livre des Merveilles (Il Milione), dicté en prison après sa capture par les Génois, est le premier témoignage détaillé de la Chine, du Japon, de l'Inde et de l'Afrique orientale pour les Européens. Ce livre inspire directement Christophe Colomb dans son projet de route vers l'Asie.",
    keyFacts: [
      "Voyage 24 ans en Asie (1271-1295) — premier Européen à décrire la Chine, la Perse, l'Inde",
      "Sert 17 ans à la cour de Kubilai Khan comme envoyé diplomatique",
      "Dicte son Livre des Merveilles (Il Milione) en prison — 150 manuscrits copiés en Europe",
      "Christophe Colomb possédait un exemplaire annoté de son livre lors de son voyage de 1492",
      "Décrit pour la première fois le papier-monnaie, le charbon, les pâtes, la porcelaine pour les Européens"
    ],
    quote: "J'ai seulement dit la moitié de ce que j'ai vu.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'avicenne',
    name: 'Ibn Sina (Avicenne)',
    birth: '980', death: '1037',
    era: 'Moyen Âge', category: 'Intellectuel', nationality: 'Persane',
    bio: "Ibn Sina, connu en Occident sous le nom d'Avicenne, est le plus grand médecin et philosophe du monde islamique médiéval, dont l'œuvre façonne la médecine mondiale jusqu'au XVIIe siècle. Son Canon de la médecine (Al-Qanun fi al-Tibb) — encyclopédie médicale en 5 volumes — est le manuel de référence des universités européennes pendant 600 ans. Philosophe aristotélicien, il développe une synthèse de la pensée grecque et islamique qui influence Thomas d'Aquin. Prodige absolu : il mémorise le Coran à 10 ans, maîtrise la médecine à 16 ans et est médecin de cour à 18 ans.",
    keyFacts: [
      "Mémorise le Coran à 10 ans, maîtrise la médecine à 16 ans — prodige universel",
      "Le Canon de la médecine (1025) — manuel de référence des universités européennes pendant 600 ans",
      "Premier à décrire la méningite, la quarantaine et la transmission des maladies par l'eau et l'air",
      "450 ouvrages écrits en médecine, philosophie, astronomie, mathématiques, musique",
      "Influence directe sur Thomas d'Aquin, Roger Bacon et la scolastique chrétienne"
    ],
    quote: "La connaissance de quelque chose, puisqu'elle existe, ne peut être bornée.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'al-khwarizmi',
    name: 'Al-Khwarizmi',
    birth: '780', death: '850',
    era: 'Moyen Âge', category: 'Intellectuel', nationality: 'Persane',
    bio: "Muhammad ibn Musa al-Khwarizmi est le mathématicien qui a inventé l'algèbre et dont le nom a donné le mot 'algorithme' — deux des concepts les plus fondamentaux des mathématiques et de l'informatique modernes. Savant à la Maison de la Sagesse de Bagdad sous le calife Al-Mamoun, il rédige le Kitab al-mukhtasar (Le Livre abrégé sur le calcul par la complétion et la réduction), fondateur de l'algèbre. Il introduit les chiffres hindous (dits 'arabes') en Occident via ses travaux traduits en latin. Sans lui, pas de mathématiques modernes, pas d'informatique.",
    keyFacts: [
      "Invente l'algèbre — son traité de 820 fonde cette branche des mathématiques",
      "Son nom latinisé 'Algoritmi' donne le mot 'algorithme' — base de toute l'informatique",
      "Introduit les chiffres dits 'arabes' (d'origine indienne) en Occident via ses traductions latines",
      "Travaille à la Maison de la Sagesse de Bagdad — centre mondial du savoir au IXe siècle",
      "Ses travaux traduits en latin au XIIe s. révolutionnent les mathématiques européennes"
    ],
    quote: "La science est la lumière de l'esprit.",
    level: ['3e', 'Terminale']
  },

  // ÉPOQUE MODERNE (manquants)
  {
    id: 'garibaldi',
    name: 'Giuseppe Garibaldi',
    birth: '1807', death: '1882',
    era: 'XIXe siècle', category: 'Militaire', nationality: 'Italienne',
    bio: "Giuseppe Garibaldi est le héros national de l'unification italienne (Risorgimento) et l'une des figures les plus romanesques du XIXe siècle. Condamné à mort en Italie, il s'exile en Amérique latine où il combat pour l'Uruguay et le Brésil. Revenu en Europe, il mène ses célèbres Chemises Rouges (Mille volontaires) à la conquête du royaume des Deux-Siciles (1860), offrant ses conquêtes au roi Victor-Emmanuel II pour forger l'Italie unifiée. Admiré dans toute l'Europe — notamment par Hugo et Dumas — il incarne le héros romantique au service d'une cause nationale.",
    keyFacts: [
      "Condamné à mort en 1834 — s'exile en Amérique latine pendant 12 ans",
      "Expédition des Mille (5-6 mai 1860) — conquête du royaume des Deux-Siciles avec 1 000 volontaires",
      "Offre ses conquêtes au roi Victor-Emmanuel II — acte fondateur de l'Italie unifiée (1861)",
      "Ses Chemises Rouges (camicie rosse) deviennent symbole des volontaires révolutionnaires",
      "Admiré par Victor Hugo, Alexandre Dumas et Abraham Lincoln"
    ],
    quote: "Ici on fait l'Italie ou on meurt.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'simon-bolivar',
    name: 'Simón Bolívar',
    birth: '1783', death: '1830',
    era: 'XIXe siècle', category: 'Politique', nationality: 'Vénézuélienne',
    bio: "Simón Bolívar, dit El Libertador, est le père de l'indépendance de six nations d'Amérique latine : Venezuela, Colombie, Équateur, Pérou, Bolivie et Panama. Issu de la noblesse créole vénézuélienne, il mène pendant 20 ans des campagnes militaires épiques à travers les Andes pour libérer le continent de la domination espagnole. Stratège brillant, il traverse les Andes en plein hiver avec son armée (1819) — exploit comparé à celui d'Hannibal. Son rêve d'une Grande Colombie unifiée échoue face aux divisions locales, et il meurt dans la déception et l'exil, sans voir l'aboutissement de son idéal.",
    keyFacts: [
      "Libère 6 nations : Venezuela, Colombie, Équateur, Pérou, Bolivie, Panama",
      "Traverse les Andes en hiver 1819 avec son armée — victoire de Boyacá, libération de la Colombie",
      "La Bolivie est nommée en son honneur à son indépendance (1825)",
      "Rêve de la Gran Colombia unifiée — échoue face aux divisions régionales",
      "Meurt à 47 ans dans la misère et l'exil, trahi par ceux qu'il a libérés"
    ],
    quote: "Un peuple ignorant est l'instrument aveugle de sa propre destruction.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'zumbi',
    name: 'Zumbi dos Palmares',
    birth: '1655', death: '1695',
    era: 'Époque moderne', category: 'Résistance', nationality: 'Brésilienne',
    bio: "Zumbi dos Palmares est le chef du Quilombo dos Palmares, le plus grand et le plus durable État d'esclaves libres des Amériques, fondé dans les forêts du Brésil colonial. Né libre dans le quilombo puis capturé et éduqué par des jésuites avant de s'évader, il devient le chef militaire et politique de cette communauté de 20 000 âmes qui résiste pendant 65 ans aux attaques portugaises. Il est tué en 1695 lors d'une trahison. Sa mort le 20 novembre est aujourd'hui la Journée nationale de la conscience noire au Brésil. Il est le symbole de la résistance africaine à l'esclavage.",
    keyFacts: [
      "Chef du Quilombo dos Palmares — communauté de 20 000 esclaves libres dans les forêts brésiliennes",
      "Résiste 65 ans aux attaques militaires portugaises — record de résistance dans les Amériques",
      "Tué par trahison le 20 novembre 1695 — date devenue Journée nationale de la conscience noire au Brésil",
      "Premier à organiser une société libre multi-ethnique (Africains, Indigènes, Métis) en Amérique",
      "Symbole de la résistance africaine — statue à Brasília, son visage proposé sur les billets brésiliens"
    ],
    quote: "La liberté ne s'obtient pas par grâce — elle se conquiert.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'che-guevara',
    name: 'Che Guevara',
    birth: '1928', death: '1967',
    era: 'XXe siècle', category: 'Militaire', nationality: 'Argentine',
    bio: "Ernesto 'Che' Guevara est le révolutionnaire argentin devenu icône mondiale de la révolte et du tiers-mondisme. Médecin de formation, il est transformé par un voyage en moto à travers l'Amérique latine (1952) qui lui révèle la misère des peuples. Il rejoint Fidel Castro à Cuba et joue un rôle décisif dans la révolution cubaine (1959). Ministre de l'industrie, il théorise la guérilla (Le Manuel de guérilla) et tente d'exporter la révolution en Afrique (Congo, 1965) puis en Bolivie, où il est capturé et exécuté par la CIA et l'armée bolivienne en 1967. Sa photo par Alberto Korda est l'image la plus reproduite du XXe siècle.",
    keyFacts: [
      "Révolution cubaine (1959) — joue un rôle militaire décisif aux côtés de Fidel Castro",
      "Théorise la guérilla dans 'La Guerre de guérilla' (1960) — manuel étudié dans le monde entier",
      "Exécuté en Bolivie le 9 octobre 1967 par la CIA et l'armée bolivienne à 39 ans",
      "Sa photo par Alberto Korda (1960) est l'image la plus reproduite et vendue du XXe siècle",
      "Symbole mondial de la révolte anticoloniale et de l'utopie révolutionnaire"
    ],
    quote: "Soyons réalistes, exigeons l'impossible.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'thomas-sankara',
    name: 'Thomas Sankara',
    birth: '1949', death: '1987',
    era: 'XXe siècle', category: 'Politique', nationality: 'Burkinabè',
    bio: "Thomas Sankara est le président révolutionnaire du Burkina Faso (1983-1987), surnommé le 'Che Guevara africain'. En quatre ans, il mène l'une des révolutions sociales les plus radicales d'Afrique : rebaptise la Haute-Volta en Burkina Faso ('pays des hommes intègres'), refuse l'aide internationale pour développer l'autonomie alimentaire, plante dix millions d'arbres contre la désertification, vaccine 2,5 millions d'enfants en deux semaines, impose la parité dans son gouvernement et interdit l'excision. Anti-impérialiste convaincu, il dénonce la dette africaine comme instrument de domination. Assassiné lors d'un coup d'État organisé par son ami Blaise Compaoré, soutenu par la France.",
    keyFacts: [
      "Rebaptise la Haute-Volta en Burkina Faso ('pays des hommes intègres') en 1984",
      "Vaccine 2,5 millions d'enfants en deux semaines — sans aide internationale",
      "Plante 10 millions d'arbres et développe l'autosuffisance alimentaire en 4 ans",
      "Premier chef d'État africain à mettre la parité hommes-femmes au gouvernement",
      "Assassiné le 15 octobre 1987 lors d'un coup d'État — tué à 38 ans par son ami Compaoré"
    ],
    quote: "Osez inventer l'avenir.",
    level: ['3e', 'Terminale']
  },

  // FIGURES CONTEMPORAINES
  {
    id: 'barack-obama',
    name: 'Barack Obama',
    birth: '1961', death: 'présent',
    era: 'Contemporain', category: 'Politique', nationality: 'Américaine',
    bio: "Barack Obama est le 44e président des États-Unis (2009-2017) et le premier Afro-Américain à accéder à la Maison Blanche, 143 ans après la fin de l'esclavage. Fils d'un père kenyan et d'une mère blanche du Kansas, il grandit à Hawaï et en Indonésie avant de devenir professeur de droit constitutionnel à Chicago. Élu en 2008 sur un programme de changement ('Yes We Can'), il reçoit le prix Nobel de la Paix en 2009. Son bilan : réforme du système de santé (Obamacare), relance après la crise de 2008, retrait d'Irak, accord nucléaire avec l'Iran et accords de Paris sur le climat.",
    keyFacts: [
      "Premier président afro-américain des États-Unis (2009-2017)",
      "Prix Nobel de la Paix 2009 — quelques mois après son élection",
      "Obamacare (2010) — assurance maladie étendue à 20 millions d'Américains supplémentaires",
      "Ordonne l'opération qui élimine Oussama Ben Laden (2 mai 2011)",
      "Accords de Paris sur le climat (2015) — engagement international majeur sur le réchauffement"
    ],
    quote: "Yes We Can.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'angela-merkel',
    name: 'Angela Merkel',
    birth: '1954', death: 'présent',
    era: 'Contemporain', category: 'Politique', nationality: 'Allemande',
    bio: "Angela Merkel est la chancelière de l'Allemagne de 2005 à 2021 — seize ans au pouvoir — et la femme politique la plus puissante du monde pendant une décennie. Physicienne de formation, née en RDA (Allemagne de l'Est communiste), elle gravit les échelons de la CDU après la réunification. Surnommée 'Mutti' (Maman) en Allemagne, elle incarne la rigueur, la discrétion et le pragmatisme. Elle gère la crise financière de 2008, la crise de la zone euro (Grèce), accueille un million de réfugiés syriens en 2015 et tient tête à Trump tout en préservant les relations transatlantiques. Personnalité internationale de référence.",
    keyFacts: [
      "16 ans chancelière de l'Allemagne (2005-2021) — la plus longue de l'ère démocratique",
      "Première femme chancelière allemande — physicienne de formation, née en RDA",
      "Gère la crise de la zone euro — impose l'austérité à la Grèce, sauve l'euro",
      "Accueille un million de réfugiés syriens en 2015 — 'Wir schaffen das' (On peut y arriver)",
      "Forbes la classe femme la plus puissante du monde 10 fois entre 2006 et 2021"
    ],
    quote: "Wir schaffen das. (On peut y arriver.)",
    level: ['3e', 'Terminale']
  },
  {
    id: 'malala',
    name: 'Malala Yousafzai',
    birth: '1997', death: 'présent',
    era: 'Contemporain', category: 'Droits civiques', nationality: 'Pakistanaise',
    bio: "Malala Yousafzai est la plus jeune lauréate du prix Nobel de la Paix (2014, à 17 ans), militante pakistanaise pour le droit à l'éducation des filles. Dans la vallée du Swat, sous occupation talibane, elle tient un blog anonyme pour la BBC dénonçant l'interdiction faite aux filles d'aller à l'école. Révélée au grand jour, elle est grièvement blessée par balle dans la tête par un taliban en 2012 (à 15 ans), survit miraculeusement et poursuit son combat depuis Londres. Elle fonde le Fonds Malala pour l'éducation des filles dans le monde entier et s'adresse à l'ONU à 16 ans.",
    keyFacts: [
      "Survit à une tentative d'assassinat par les talibans (9 octobre 2012) — balle dans la tête à 15 ans",
      "Plus jeune lauréate du prix Nobel de la Paix (2014, à 17 ans)",
      "Fonde le Fonds Malala — finance l'éducation de millions de filles dans 10 pays",
      "Discours à l'ONU à 16 ans : 'Un enfant, un enseignant, un livre, un stylo peuvent changer le monde'",
      "Symbole mondial du droit à l'éducation pour les filles"
    ],
    quote: "Un enfant, un enseignant, un livre et un stylo peuvent changer le monde.",
    level: ['3e', 'Terminale']
  },
  {
    id: 'steve-jobs',
    name: 'Steve Jobs',
    birth: '1955', death: '2011',
    era: 'Contemporain', category: 'Contemporain', nationality: 'Américaine',
    bio: "Steve Jobs est le co-fondateur d'Apple et l'un des entrepreneurs les plus influents de l'histoire moderne, qui a révolutionné l'informatique personnelle, la musique numérique, le téléphone et le cinéma d'animation. Adopté à la naissance, il co-fonde Apple en 1976 dans un garage avec Steve Wozniak, est renvoyé de sa propre entreprise en 1985, puis revient en 1997 pour la sauver de la faillite. L'iMac, l'iPod, l'iPhone (2007) et l'iPad transforment des industries entières. Perfectionniste obsessionnel, il impose une vision de la technologie comme outil d'art et de design, changeant à jamais notre rapport aux objets numériques.",
    keyFacts: [
      "Co-fonde Apple en 1976 dans un garage avec Steve Wozniak — valorisation actuelle : 3 000 milliards $",
      "Lancé l'iPhone le 9 janvier 2007 — appareil qui transforme l'industrie du téléphone et crée l'ère smartphone",
      "Co-fonde Pixar (1986) — premier long métrage d'animation numérique (Toy Story, 1995)",
      "Renvoyé d'Apple en 1985, revient en 1997 et sauve l'entreprise de la faillite",
      "Meurt d'un cancer du pancréas le 5 octobre 2011 à 56 ans"
    ],
    quote: "Stay hungry, stay foolish. (Restez affamés, restez fous.)",
    level: ['3e', 'Terminale']
  },
]

const CAT_MAP = {
  'Politique': 'POLITICAL', 'Militaire': 'MILITARY', 'Intellectuel': 'INTELLECTUAL',
  'Religion': 'RELIGIOUS', 'Art': 'ARTISTIC', 'Résistance': 'MILITARY',
  'Droits civiques': 'SOCIAL', 'Décolonisation': 'POLITICAL', 'Exploration': 'INTELLECTUAL',
  'Contemporain': 'POLITICAL',
}

const ERA_MAP = {
  'Époque moderne': 'Temps Modernes',
}

function parseYear(s) {
  if (!s) return null
  const n = parseInt(s, 10)
  return isNaN(n) ? null : n
}

export const personalitiesData = personalities.map((p) => ({
  ...p,
  birthYear: parseYear(p.birth),
  deathYear: p.death === 'présent' || p.death === 'vivant' ? null : parseYear(p.death),
  isAlive: !p.death || p.death === 'présent',
  era: ERA_MAP[p.era] || p.era,
  category: CAT_MAP[p.category] || 'POLITICAL',
  shortBio: p.bio,
  relatedLevel: p.level,
  relatedThemes: [p.category],
  quote: p.quote ? { text: p.quote, year: p.birth, source: p.quoteSource || null } : null,
}))
