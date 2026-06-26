import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { MapContainer, GeoJSON, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { regionsData } from '@/data/pays-regions'
import { MapPin, X, Building2, Utensils, Landmark, Users, Waves, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react'
import MarocSVGMap from './MarocSVGMap'

const COUNTRY_MAP_CONFIG = {
  france: {
    url: '/geo/france-regions.geojson',
    nameKey: 'nom', center: [46.6, 2.5], zoom: 5,
    sublevelUrl: '/geo/france-departements.geojson',
    sublevelNameKey: 'nom', sublevelCenter: [46.6, 2.5], sublevelZoom: 5,
  },
  allemagne:     { url: '/geo/allemagne-regions.geojson',     nameKey: 'name',    center: [51.2, 10.4],  zoom: 5 },
  espagne:       { url: '/geo/espagne-regions.geojson',       nameKey: 'name',    center: [40.0, -3.7],  zoom: 5 },
  portugal:      { url: '/geo/portugal-regions.geojson',      nameKey: 'name',    center: [39.4, -8.2],  zoom: 6 },
  italie:        { url: '/geo/italie-regions.geojson',        nameKey: 'reg_name',center: [42.5, 12.5],  zoom: 5 },
  grece:         { url: '/geo/grece-regions.geojson',         nameKey: 'NAME_1',  center: [39.0, 22.0],  zoom: 6 },
  russie:        { url: '/geo/russie-regions.geojson',        nameKey: 'name_latin', center: [60.0, 60.0],  zoom: 2 },
  pologne:       { url: '/geo/pologne-regions.geojson',       nameKey: 'name',    center: [52.0, 19.5],  zoom: 5 },
  royaume_uni:   { url: '/geo/royaume_uni-regions.geojson',   nameKey: 'name',    center: [54.5, -3.0],  zoom: 5 },
  pays_bas:      { url: '/geo/pays_bas-regions.geojson',      nameKey: 'NAME_1',  center: [52.3, 5.3],   zoom: 7 },
  maroc:         { url: '/geo/maroc-regions.geojson?v=3',      nameKey: 'NAME_1',  center: [27.5, -9.0],  zoom: 4 },
  algerie:       { url: '/geo/algerie-regions.geojson',        nameKey: 'NAME_1',  center: [28.0, 2.5],   zoom: 4 },
  tunisie:       { url: '/geo/tunisie-regions.geojson',       nameKey: 'NAME_1',  center: [34.0, 9.0],   zoom: 6 },
  egypte:        { url: '/geo/egypte-regions.geojson',        nameKey: 'NAME_1',  center: [26.5, 29.5],  zoom: 5 },
  afrique_du_sud:{ url: '/geo/afrique_du_sud-regions.geojson',nameKey: 'name',    center: [-29.0, 25.0], zoom: 5 },
  mali:          { url: '/geo/mali-regions.geojson',          nameKey: 'NAME_1',  center: [17.5, -1.5],  zoom: 4 },
  ethiopie:      { url: '/geo/ethiopie-regions.geojson',      nameKey: 'NAME_1',  center: [9.0, 40.5],   zoom: 5 },
  irak:          { url: '/geo/irak-regions.geojson',          nameKey: 'NAME_1',  center: [33.0, 43.7],  zoom: 5 },
  iran:          { url: '/geo/iran-regions.geojson',          nameKey: 'NAME_1',  center: [32.5, 53.5],  zoom: 4 },
  arabie_saoudite:{ url: '/geo/arabie_saoudite-regions.geojson',nameKey: 'NAME_1',center: [24.0, 44.0],  zoom: 4 },
  emirats_arabes_unis: { url: '/geo/emirats_arabes_unis-regions.geojson', nameKey: 'name', center: [24.0, 54.0], zoom: 7 },
  turquie:       { url: '/geo/turquie-regions.geojson',       nameKey: 'name',    center: [39.0, 35.0],  zoom: 5 },
  chine:         { url: '/geo/chine-regions.geojson',         nameKey: 'name',    center: [37.0, 104.0], zoom: 3 },
  inde:          { url: '/geo/inde-regions.geojson',          nameKey: 'name',    center: [22.0, 80.0],  zoom: 4 },
  japon:         { url: '/geo/japon-regions.geojson',         nameKey: 'name_english', center: [37.0, 137.0], zoom: 4 },
  mongolie:      { url: '/geo/mongolie-regions.geojson',      nameKey: 'NAME_1',  center: [47.0, 103.0], zoom: 4 },
  vietnam:       { url: '/geo/vietnam-regions.geojson',       nameKey: 'NAME_1',  center: [16.0, 107.5], zoom: 5 },
  coree_du_sud:  { url: '/geo/coree_du_sud-regions.geojson',  nameKey: 'NAME_1',  center: [36.5, 127.8], zoom: 6 },
  etats_unis:    { url: '/geo/etats_unis-regions.geojson',    nameKey: 'name',    center: [38.0, -96.0], zoom: 3 },
  cuba:          { url: '/geo/cuba-regions.geojson',          nameKey: 'name',    center: [21.5, -79.5], zoom: 6 },
  mexique:       { url: '/geo/mexique-regions.geojson',       nameKey: 'name',    center: [24.0, -102.0],zoom: 4 },
  perou:         { url: '/geo/perou-regions.geojson',         nameKey: 'name',    center: [-10.0, -75.0],zoom: 5 },
  bresil:        { url: '/geo/bresil-regions.geojson',        nameKey: 'name',    center: [-15.0, -52.0],zoom: 3 },
  haiti:         { url: '/geo/haiti-regions.geojson',         nameKey: 'NAME_1',  center: [18.9, -72.5], zoom: 8 },
  australie:     { url: '/geo/australie-regions.geojson',     nameKey: 'name',    center: [-28.0, 134.0],zoom: 3 },
}

const HOVER_COLORS = {
  Europe: '#3498DB', 'Moyen-Orient': '#E67E22', Asie: '#E74C3C',
  Afrique: '#27AE60', Amériques: '#8E44AD', Océanie: '#16A085',
}

const GEO_NAME_ALIASES = {
  etats_unis: {
    'California': 'Californie', 'Florida': 'Floride', 'Georgia': 'Géorgie',
    'North Carolina': 'Caroline du Nord', 'South Carolina': 'Caroline du Sud',
    'North Dakota': 'Dakota du Nord', 'South Dakota': 'Dakota du Sud',
    'Pennsylvania': 'Pennsylvanie', 'New Mexico': 'Nouveau-Mexique',
    'West Virginia': 'Virginie-Occidentale', 'Louisiana': 'Louisiane',
    'New Jersey': 'Nouveau-Jersey', 'Virginia': 'Virginie', 'Hawaii': 'Hawaï',
  },
  turquie: {
    'İstanbul': 'Istanbul', 'İzmir': 'Izmir', 'Diyarbakır': 'Diyarbakir',
    'K. Maraş': 'Kahramanmaraş', 'Aydın': 'Aydın (Éphèse)',
    'Muğla': 'Muğla (Bodrum)', 'Nevşehir': 'Cappadoce',
    'Çanakkale': 'Çanakkale (Gallipoli)', 'Afyon': 'Afyonkarahisar',
    'Şanlıurfa': 'Şanlıurfa',
  },
  maroc: {
    'Tanger-Tétouan-Al Hoceïma': 'Tanger-Tétouan-Al Hoceima',
    'Béni Mellal-Khénifra': 'Béni Mellal-Kénifra',
    'Drâa-Tafilalet': 'Draa-Tafilalet',
    'Ed Dakhla-Oued ed Dahab': 'Dakhla-Oued ed Dahab',
    'Guelmim-Oued Noun': 'Guelmin-Oued Noun',
  },
  egypte: {
    'AlQahirah': 'Cairo', 'AlQalyubiyah': 'Cairo',
    'AlIskandariyah': 'Alexandria',
    'AlUqsur': 'Luxor',
    'JanubSina\'': 'Sinai', 'ShamalSina\'': 'Sinai',
    'AlBahralAhmar': 'Red Sea (Mer Rouge)',
    'AlJizah': 'Giza',
    'AlMinya': 'Haute-Égypte (Sohag-Asyut-Minya)',
    'Asyut': 'Haute-Égypte (Sohag-Asyut-Minya)',
    'Suhaj': 'Haute-Égypte (Sohag-Asyut-Minya)',
    'Qina': 'Qena-Qus',
    'AlIsma`iliyah': 'Canal de Suez (Port-Saïd-Ismaïlia-Suez)',
    'AsSuways': 'Canal de Suez (Port-Saïd-Ismaïlia-Suez)',
    'BurSa`id': 'Canal de Suez (Port-Saïd-Ismaïlia-Suez)',
    'Dumyat': 'Canal de Suez (Port-Saïd-Ismaïlia-Suez)',
    'AlBuhayrah': 'Delta du Nil (Dakahlia-Gharbia-Beheira)',
    'AlGharbiyah': 'Delta du Nil (Dakahlia-Gharbia-Beheira)',
    'AlMinufiyah': 'Delta du Nil (Dakahlia-Gharbia-Beheira)',
    'KafrashShaykh': 'Delta du Nil (Dakahlia-Gharbia-Beheira)',
    'AdDaqahliyah': 'Dakahlia-Sharqia (Basse Égypte orientale)',
    'AshSharqiyah': 'Dakahlia-Sharqia (Basse Égypte orientale)',
    'AlFayyum': 'Fayoum',
    'BaniSuwayf': 'Beni Suef',
    'AlWadialJadid': 'Nouvelle Vallée (Wadi el-Jadid)',
    'Matrouh': 'Matrouh',
  },
  irak: {
    'Ninawa': 'Nineveh', 'Al-Basrah': 'Basra', 'Arbil': 'Erbil',
    'As-Sulaymaniyah': 'Sulaymaniyah', 'Al-Anbar': 'Anbar',
    "Karbala'": 'Karbala', 'An-Najaf': 'Najaf', 'At-Ta\'mim': 'Kirkuk',
    'Salaad-Din': 'Tikrit',
  },
  iran: {
    'Esfahan': 'Isfahan', 'Fars': 'Fars (Persépolis)',
    'Gilan': 'Gilan (Caspienne nord)', 'Hamadan': 'Hamadan (Ecbatane)',
    'Hormozgan': 'Hormozgan (Détroit d\'Ormuz)',
    'Khuzestan': 'Ahvaz', 'Kordestan': 'Kurdistan iranien',
    'Mazandaran': 'Mazandaran (Caspienne sud)',
    'RazaviKhorasan': 'Mashhad', 'SistanandBaluchestan': 'Sistan-Baloutchistan',
    'Ardebil': 'Ardabil', 'EastAzarbaijan': 'Tabriz',
    'WestAzarbaijan': 'Azerbaïdjan du Nord-Ouest (Urmia)',
    'Bushehr': 'Bushehr (nucléaire)', 'Lorestan': 'Lorestan',
  },
  afrique_du_sud: {
    'City of Johannesburg Metropolitan': 'Gauteng',
    'City of Tshwane Metropolitan': 'Gauteng',
    'Ekurhuleni Metropolitan': 'Gauteng',
    'Sedibeng District': 'Gauteng', 'West Rand District': 'Gauteng',
    'City of Cape Town': 'Western Cape',
    'Cape Winelands District': 'Western Cape', 'Central Karoo District': 'Western Cape',
    'Eden District': 'Western Cape', 'Overberg District': 'Western Cape',
    'West Coast District': 'Western Cape',
    'eThekwini Metropolitan': 'KwaZulu-Natal', 'Ugu District': 'KwaZulu-Natal',
    'uMgungundlovu District': 'KwaZulu-Natal', 'Uthukela District': 'KwaZulu-Natal',
    'Umzinyathi District': 'KwaZulu-Natal', 'Amajuba District': 'KwaZulu-Natal',
    'Sisonke District': 'KwaZulu-Natal', 'iLembe District': 'KwaZulu-Natal',
    'Umkhanyakude District': 'KwaZulu-Natal', 'Zululand District': 'KwaZulu-Natal',
    'uThungulu District': 'KwaZulu-Natal',
    'Buffalo City Metropolitan': 'Eastern Cape',
    'Nelson Mandela Bay Metropolitan': 'Eastern Cape',
    'Amathole District': 'Eastern Cape', 'Chris Hani District': 'Eastern Cape',
    'Alfred Nzo District': 'Eastern Cape', 'Joe Gqabi District': 'Eastern Cape',
    'Sarah Baartman District': 'Eastern Cape',
    'Capricorn District': 'Limpopo', 'Mopani District': 'Limpopo',
    'Sekhukhune District': 'Limpopo', 'Vhembe District': 'Limpopo',
    'Waterberg District': 'Limpopo',
    'Ehlanzeni District': 'Mpumalanga', 'Gert Sibande District': 'Mpumalanga',
    'Nkangala District': 'Mpumalanga',
    'Bojanala Platinum District': 'North West',
    'Dr Kenneth Kaunda District': 'North West',
    'Dr Ruth Segomotsi Mompati District': 'North West',
    'Ngaka Modiri Molema District': 'North West',
    'Fezile Dabi District': 'Free State', 'Lejweleputswa District': 'Free State',
    'Mangaung Metropolitan': 'Free State', 'Thabo Mofutsanyana District': 'Free State',
    'Xhariep District': 'Free State',
    'Frances Baard District': 'Northern Cape',
    'John Taolo Gaetsewe District': 'Northern Cape',
    'Namakwa District': 'Northern Cape', 'Pixley ka Seme District': 'Northern Cape',
    'ZF Mgcawu District': 'Northern Cape',
  },
  mongolie: {
    'Hövsgöl': 'Khövsgöl', 'Ömnögovi': 'Gobi',
    'Arhangay': 'Khangai', 'Övörhangay': 'Khangai',
  },
  cuba: {
    'CiegodeÁvila': 'Ciego de Ávila',
    'CiudaddelaHabana': 'La Havane',
    'IsladelaJuventud': 'Isla de la Juventud',
    'LaHabana': 'La Habana',
    'LasTunas': 'Las Tunas',
    'PinardelRío': 'Pinar del Río',
    'SanctiSpíritus': 'Sancti Spíritus',
    'SantiagodeCuba': 'Santiago de Cuba',
    'VillaClara': 'Villa Clara',
  },
  mexique: {
    'Distrito Federal': 'Ciudad de México',
    'Veracruz de Ignacio de la Llave': 'Veracruz',
  },
  vietnam: {
    'AnGiang': 'An Giang',
    'HàNội': 'Hanoï',
    'HồChíMinh': 'Hô Chi Minh-Ville',
    'HảiPhòng': 'Haïphong',
    'ĐàNẵng': 'Đà Nẵng',
    'CầnThơ': 'Cần Thơ',
    'ThừaThiênHuế': 'Thừa Thiên Huế',
    'KhánhHòa': 'Khánh Hòa',
    'QuảngNinh': 'Quảng Ninh',
    'NghệAn': 'Nghệ An',
    'LâmĐồng': 'Lâm Đồng',
    'ĐắkLắk': 'Đắk Lắk',
    'KiênGiang': 'Kiên Giang',
    'ĐồngNai': 'Đồng Nai',
    'BìnhDương': 'Bình Dương',
    'ThanhHóa': 'Thanh Hóa',
    'BàRịa-VũngTàu': 'Bà Rịa-Vũng Tàu',
    'BắcGiang': 'Bắc Giang',
    'BắcKạn': 'Bắc Kạn',
    'BạcLiêu': 'Bạc Liêu',
    'BắcNinh': 'Bắc Ninh',
    'BếnTre': 'Bến Tre',
    'BìnhĐịnh': 'Bình Định',
    'BìnhPhước': 'Bình Phước',
    'BìnhThuận': 'Bình Thuận',
    'CàMau': 'Cà Mau',
    'CaoBằng': 'Cao Bằng',
    'ĐắkNông': 'Đắk Nông',
    'ĐiệnBiên': 'Điện Biên',
    'ĐồngTháp': 'Đồng Tháp',
    'GiaLai': 'Gia Lai',
    'HàGiang': 'Hà Giang',
    'HàNam': 'Hà Nam',
    'HàTĩnh': 'Hà Tĩnh',
    'HảiDương': 'Hải Dương',
    'HậuGiang': 'Hậu Giang',
    'HoàBình': 'Hòa Bình',
    'HưngYên': 'Hưng Yên',
    'KonTum': 'Kon Tum',
    'LaiChâu': 'Lai Châu',
    'LạngSơn': 'Lạng Sơn',
    'LàoCai': 'Lào Cai',
    'LongAn': 'Long An',
    'NamĐịnh': 'Nam Định',
    'NinhBình': 'Ninh Bình',
    'NinhThuận': 'Ninh Thuận',
    'PhúThọ': 'Phú Thọ',
    'PhúYên': 'Phú Yên',
    'QuảngBình': 'Quảng Bình',
    'QuảngNam': 'Quảng Nam',
    'QuảngNgãi': 'Quảng Ngãi',
    'QuảngTrị': 'Quảng Trị',
    'SócTrăng': 'Sóc Trăng',
    'SơnLa': 'Sơn La',
    'TâyNinh': 'Tây Ninh',
    'TháiBình': 'Thái Bình',
    'TháiNguyên': 'Thái Nguyên',
    'TiềnGiang': 'Tiền Giang',
    'TràVinh': 'Trà Vinh',
    'TuyênQuang': 'Tuyên Quang',
    'VĩnhLong': 'Vĩnh Long',
    'VĩnhPhúc': 'Vĩnh Phúc',
    'YênBái': 'Yên Bái',
  },
  perou: {
    'LaLibertad': 'La Libertad',
    'LimaProvince': 'Lima Province',
    'MadredeDios': 'Madre de Dios',
    'SanMartín': 'San Martín',
    'Ancash': 'Ancash',
    'Cusco': 'Cusco (région)',
    'Arequipa': 'Arequipa (région)',
    'Ayacucho': 'Ayacucho (région)',
  },
  bresil: {
    'Distrito Federal': 'Brasília (Distrito Federal)',
  },
  arabie_saoudite: {
    'ArRiyad': 'Riyadh', 'AlMadinah': 'Madinah',
    "'Asir": 'Asir', 'Ash-Sharqīyah': 'Eastern Province',
    'Ḥaʼil': 'Hail',
  },
  emirats_arabes_unis: {
    'RasAl-Khaimah': 'RasAl-Khaimah',
    'Ummal-Qaywayn': 'Ummal-Qaywayn',
  },
  chine: {
    'Heilongjian': 'Heilongjiang',
  },
  pologne: {
    'Łódzkie': 'Łódźkie',
  },
  portugal: {
    'Porto': 'Porto (district)',
  },
}

function lookupRegionEntry(countryId, regionName) {
  const countryData = regionsData[countryId] || {}
  if (countryData[regionName]) return { data: countryData[regionName], key: regionName }
  const aliases = GEO_NAME_ALIASES[countryId] || {}
  const mappedName = aliases[regionName]
  if (mappedName && countryData[mappedName]) return { data: countryData[mappedName], key: mappedName }
  const key = Object.keys(countryData).find(k => k.startsWith(regionName + ' ('))
  return key ? { data: countryData[key], key } : { data: null, key: null }
}

// Panneau d'info region (affiché SOUS la carte)
function RegionPanel({ countryId, regionName, onClose, onDrillDown, hasSublevel, color, isDepartement }) {
  const { data, key } = lookupRegionEntry(countryId, regionName)
  const deptNumber = key?.match(/\((\w+)\)/)?.[1]

  return (
    <div className="border-t border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#0D1117] rounded-b-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E0CC] dark:border-[#30363D]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
          <h3 className="font-bold text-[#2C1810] dark:text-[#E6EDF3] text-sm">{regionName}{deptNumber && <span className="ml-1.5 text-xs font-normal text-[#8B7355]">({deptNumber})</span>}</h3>
          {data?.chef_lieu && (
            <span className="text-xs text-[#8B7355] hidden sm:inline">· Chef-lieu : {data.chef_lieu}</span>
          )}
          {data?.population && (
            <span className="text-xs px-2 py-0.5 bg-[#E8E0CC] dark:bg-[#21262D] text-[#4A3728] dark:text-[#8B949E] rounded-full hidden sm:inline">{data.population}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasSublevel && (
            <button
              onClick={onDrillDown}
              className="flex items-center gap-1 text-xs font-semibold text-[#D4AF37] hover:text-[#8B4513] transition-colors"
            >
              Départements <ChevronRight size={13} />
            </button>
          )}
          <button onClick={onClose} className="text-[#8B7355] hover:text-[#2C1810] dark:hover:text-white transition-colors">
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Contenu en grille horizontale */}
      <div className="px-5 py-4">
        {data ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.description && (
              <div className="col-span-2 sm:col-span-3 lg:col-span-4">
                <p className="text-sm text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{data.description}</p>
              </div>
            )}

            {data.villes?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Building2 size={10} /> Villes
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.villes.slice(0, 5).map(v => (
                    <span key={v} className="px-1.5 py-0.5 bg-white dark:bg-[#21262D] rounded text-[11px] text-[#4A3728] dark:text-[#8B949E] border border-[#E8E0CC] dark:border-[#30363D]">{v}</span>
                  ))}
                </div>
              </div>
            )}

            {data.fleuves?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Waves size={10} /> Fleuves
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.fleuves.map(f => (
                    <span key={f} className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-[11px] text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">{f}</span>
                  ))}
                </div>
              </div>
            )}

            {data.sites?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Landmark size={10} /> Sites
                </div>
                <ul className="space-y-0.5">
                  {data.sites.slice(0, 4).map(s => (
                    <li key={s} className="text-[11px] text-[#4A3728] dark:text-[#8B949E] flex items-start gap-1">
                      <span className="text-[#D4AF37] flex-shrink-0">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.gastronomie?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Utensils size={10} /> Gastronomie
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.gastronomie.slice(0, 5).map(g => (
                    <span key={g} className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/20 rounded text-[11px] text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">{g}</span>
                  ))}
                </div>
              </div>
            )}

            {data.histoire && (
              <div className="col-span-2">
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <BookOpen size={10} /> Histoire
                </div>
                <p className="text-[11px] text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{data.histoire}</p>
              </div>
            )}

            {data.personnages?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Users size={10} /> Personnages
                </div>
                <ul className="space-y-0.5">
                  {data.personnages.slice(0, 3).map(p => (
                    <li key={p} className="text-[11px] text-[#4A3728] dark:text-[#8B949E] flex items-start gap-1">
                      <span className="text-[#D4AF37] flex-shrink-0">★</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-[#8B7355] py-2">Données à venir pour ce {isDepartement ? 'département' : 'région'}.</p>
        )}
      </div>
    </div>
  )
}

// Auto-fit the map to the GeoJSON bounds after load
function FitBounds({ geoData, countryId }) {
  const map = useMap()
  useEffect(() => {
    if (!geoData || !map) return
    const layer = L.geoJSON(geoData)
    let bounds = layer.getBounds()

    // Russie : Chukotka dépasse le méridien 180° et crée une bbox absurde → on limite à l'ouest de 180°
    if (countryId === 'russie') {
      bounds = L.latLngBounds(
        L.latLng(bounds.getSouth(), Math.max(bounds.getWest(), 20)),
        L.latLng(bounds.getNorth(), 180)
      )
    }

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [8, 8] })
    }
  }, [geoData, map])
  return null
}

// Contrôles zoom + navigation flottants dans la carte
function MapControls({ color }) {
  const map = useMap()
  const pan = (dx, dy) => map.panBy([dx, dy], { animate: true })

  const btnBase = {
    backgroundColor: color,
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    width: 36,
    height: 36,
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
    opacity: 0.9,
  }

  return (
    <div style={{ position: 'absolute', bottom: 16, right: 16, zIndex: 1000, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {/* Zoom */}
      <button style={btnBase} onClick={() => map.zoomIn()}>+</button>
      <button style={btnBase} onClick={() => map.zoomOut()}>−</button>
      {/* Navigation */}
      <div style={{ display: 'grid', gridTemplateColumns: '36px 36px 36px', gap: 3, marginTop: 4 }}>
        <div />
        <button style={{ ...btnBase, fontSize: 14 }} onClick={() => pan(0, -80)}>▲</button>
        <div />
        <button style={{ ...btnBase, fontSize: 14 }} onClick={() => pan(-80, 0)}>◀</button>
        <div />
        <button style={{ ...btnBase, fontSize: 14 }} onClick={() => pan(80, 0)}>▶</button>
        <div />
        <button style={{ ...btnBase, fontSize: 14 }} onClick={() => pan(0, 80)}>▼</button>
        <div />
      </div>
    </div>
  )
}

// Style par défaut stable (hors composant pour éviter la recréation à chaque render)
const DEFAULT_STYLE = { fillColor: '#DDD0BB', fillOpacity: 1, weight: 1, color: '#B8A898', opacity: 1 }

// Carte Leaflet interne
function LeafletMap({ geoData, nameKey, center, zoom, hoverColor, onRegionClick, selectedRegion, interactive = true }) {
  const selectedLayerRef = useRef(null)
  const selectedNameRef  = useRef(null)
  const hoveredLayerRef  = useRef(null)

  const defaultStyle = DEFAULT_STYLE
  const hoverStyle   = useMemo(() => ({ fillColor: hoverColor, fillOpacity: 0.4,  weight: 2,   color: hoverColor, opacity: 1 }), [hoverColor])
  const activeStyle  = useMemo(() => ({ fillColor: hoverColor, fillOpacity: 0.85, weight: 2.5, color: hoverColor, opacity: 1 }), [hoverColor])

  const onEachFeature = useCallback((feature, layer) => {
    if (!interactive) return
    const name =
      feature.properties[nameKey] ??
      feature.properties.name ??
      feature.properties.nom ??
      feature.properties.NAME_1 ??
      'Région'

    layer.on({
      mouseover(e) {
        if (hoveredLayerRef.current && hoveredLayerRef.current !== layer) {
          if (selectedNameRef.current !== hoveredLayerRef.current._name) {
            hoveredLayerRef.current.setStyle(defaultStyle)
          }
        }
        hoveredLayerRef.current = layer
        layer._name = name
        if (selectedNameRef.current !== name) {
          e.target.setStyle(hoverStyle)
        }
        e.target.bringToFront()
      },
      mouseout(e) {
        if (selectedNameRef.current !== name) {
          e.target.setStyle(defaultStyle)
        }
        if (hoveredLayerRef.current === layer) hoveredLayerRef.current = null
      },
      click() {
        if (selectedLayerRef.current && selectedNameRef.current !== name) {
          selectedLayerRef.current.setStyle(defaultStyle)
        }
        if (selectedNameRef.current === name) {
          layer.setStyle(defaultStyle)
          selectedLayerRef.current = null
          selectedNameRef.current = null
          onRegionClick(null)
        } else {
          layer.setStyle(activeStyle)
          selectedLayerRef.current = layer
          selectedNameRef.current = name
          onRegionClick(name)
        }
      },
    })
  }, [nameKey, interactive, hoverColor])

  useEffect(() => {
    if (!selectedRegion && selectedLayerRef.current) {
      selectedLayerRef.current.setStyle(defaultStyle)
      selectedLayerRef.current = null
      selectedNameRef.current = null
    }
  }, [selectedRegion])

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      dragging={true}
      touchZoom={true}
      keyboard={true}
      boxZoom={false}
      style={{ width: '100%', height: '100%', background: '#FFFFFF' }}
    >
      <FitBounds geoData={geoData} countryId={countryId} />
      <GeoJSON
        key={countryId + String(geoData?.features?.length)}
        data={geoData}
        style={defaultStyle}
        onEachFeature={onEachFeature}
      />
      <MapControls color={hoverColor} />
    </MapContainer>
  )
}

// Besoin d'accéder au countryId dans LeafletMap pour la clé
let countryId = ''

export default function CountryMap({ countryId: cid, continent }) {
  countryId = cid
  const config = COUNTRY_MAP_CONFIG[cid]
  const [geoData, setGeoData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [drilldown, setDrilldown] = useState(false)

  const hoverColor = HOVER_COLORS[continent] || '#D4AF37'

  function loadUrl(url) {
    setLoading(true)
    setError(null)
    setGeoData(null)
    setSelectedRegion(null)
    fetch(url)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(d => { setGeoData(d); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }

  useEffect(() => {
    if (!config) return
    setDrilldown(false)
    loadUrl(config.url)
  }, [cid])

  function handleDrillDown() {
    setDrilldown(true)
    loadUrl(config.sublevelUrl)
  }

  function handleExitDrillDown() {
    setDrilldown(false)
    loadUrl(config.url)
  }

  if (!config) return null

  const nameKey = drilldown ? (config.sublevelNameKey || 'nom') : config.nameKey
  const center  = drilldown ? (config.sublevelCenter || config.center) : config.center
  const zoom    = drilldown ? (config.sublevelZoom   || config.zoom)   : config.zoom

  return (
    <div className="rounded-2xl overflow-hidden border border-[#E8E0CC] dark:border-[#30363D]">
      {/* Barre titre */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#FAF7F2] dark:bg-[#0D1117] border-b border-[#E8E0CC] dark:border-[#30363D]">
        <div className="flex items-center gap-2">
          {drilldown && (
            <>
              <button onClick={handleExitDrillDown} className="flex items-center gap-1 text-xs text-[#D4AF37] hover:text-[#8B4513] font-semibold transition-colors">
                <ChevronLeft size={14} /> Régions
              </button>
              <span className="text-[#8B7355] text-xs">/</span>
            </>
          )}
          <span className="text-xs font-semibold text-[#2C1810] dark:text-[#E6EDF3]">
            {drilldown ? 'Départements' : 'Carte des régions'}
          </span>
        </div>
        {cid !== 'maroc' && <span className="text-[10px] text-[#8B7355] italic">Survol = couleur · Clic = détails · <kbd className="px-1 bg-[#E8E0CC] rounded text-[9px]">+</kbd> <kbd className="px-1 bg-[#E8E0CC] rounded text-[9px]">-</kbd> pour zoomer · glisser pour déplacer</span>}
      </div>

      {/* Carte — hauteur 85vh minimum 600px, fond blanc */}
      <div className="relative" style={{ height: 'max(85vh, 600px)', background: '#FFFFFF' }}>
        {cid === 'maroc' ? (
          <div className="flex items-center justify-center w-full h-full">
            <div style={{ width: 'min(100%, 70vh)' }}>
              <MarocSVGMap onRegionClick={setSelectedRegion} selectedRegion={selectedRegion} hoverColor={hoverColor} />
            </div>
          </div>
        ) : (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-[1000]" style={{ background: '#FFFFFF' }}>
                <div className="w-8 h-8 border-3 border-[#D4AF37] border-t-transparent rounded-full animate-spin" style={{ borderWidth: 3 }} />
              </div>
            )}
            {error && !loading && (
              <div className="absolute inset-0 flex items-center justify-center z-[1000]">
                <p className="text-sm text-[#8B7355]">Carte indisponible</p>
              </div>
            )}
            {geoData && !loading && (
              <LeafletMap
                key={cid + (drilldown ? '-d' : '-r')}
                geoData={geoData}
                nameKey={nameKey}
                center={center}
                zoom={zoom}
                hoverColor={hoverColor}
                onRegionClick={setSelectedRegion}
                selectedRegion={selectedRegion}
              />
            )}
          </>
        )}
      </div>

      {/* Panneau info — SOUS la carte */}
      {selectedRegion && (
        <RegionPanel
          countryId={cid}
          regionName={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          onDrillDown={handleDrillDown}
          hasSublevel={!!config.sublevelUrl && !drilldown}
          color={hoverColor}
          isDepartement={drilldown}
        />
      )}
    </div>
  )
}
