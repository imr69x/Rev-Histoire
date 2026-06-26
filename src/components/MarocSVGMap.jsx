import { useState } from 'react'

const W = 489, H = 510

const REGIONS = [
  { name: 'Laâyoune-Saguia al Hamra', path: 'M167,294L159,297L144,299L141,302L139,307L134,311L133,317L128,326L127,333L124,339L116,346L107,350L105,354L101,356L99,360L99,366L95,372L94,378L91,383L91,395L89,400L94,403L94,406L96,408L149,413L164,412L165,410L165,362L255,361L254,342L246,339L238,324L226,322L222,316L216,315L214,311L211,309L175,307L171,304L168,294Z', cx: 162, cy: 353, couleur: '#16A085' },
  { name: 'Dakhla-Oued ed Dahab', path: 'M88,402L67,425L68,428L64,432L60,442L54,451L55,455L54,458L50,461L50,467L48,468L47,472L41,476L39,480L38,486L36,488L36,494L138,494L138,472L136,459L134,455L144,446L164,437L165,415L160,413L142,412L137,410L92,407L92,404L88,402Z', cx: 100, cy: 452, couleur: '#9B59B6' },
  { name: 'Draa-Tafilalet', path: 'M360,132L351,138L351,149L345,155L347,157L347,161L341,162L341,164L334,169L336,170L336,174L328,180L311,186L311,188L296,189L294,192L283,197L283,204L285,205L284,208L286,209L289,215L287,218L283,220L286,223L285,226L288,228L316,229L316,231L320,233L316,238L318,246L340,249L346,243L348,236L357,229L367,224L373,217L394,211L393,207L397,201L390,197L390,190L393,188L393,181L406,177L404,175L406,172L403,169L404,163L391,161L385,152L385,149L377,147L370,139L363,138L361,132Z', cx: 347, cy: 194, couleur: '#1ABC9C' },
  { name: 'Oriental', path: 'M412,53L410,57L395,58L392,61L391,70L396,72L398,74L398,77L391,87L391,90L389,91L391,94L391,103L384,112L385,115L410,117L417,126L395,132L386,146L391,158L394,161L407,162L405,167L409,171L407,175L408,176L416,175L413,169L413,165L458,164L459,162L457,160L457,156L464,149L453,140L449,133L451,128L446,121L448,111L444,107L446,105L445,101L447,96L444,87L446,83L442,78L444,73L438,69L437,65L428,60L413,59L414,58L412,56L412,53Z', cx: 421, cy: 116, couleur: '#E67E22' },
  { name: 'Souss-Massa', path: 'M280,199L233,203L227,205L225,210L225,212L228,213L232,219L232,228L222,248L226,251L226,253L246,255L248,261L243,266L243,268L246,272L245,275L250,279L250,282L254,287L254,275L261,271L281,254L289,253L291,251L306,250L313,248L315,246L314,237L317,233L313,232L313,222L311,220L280,219L286,215L284,211L281,209L282,206L280,204L280,199Z', cx: 264, cy: 235, couleur: '#C0392B' },
  { name: 'Guelmin-Oued Noun', path: 'M220,249L217,255L212,259L208,266L192,275L183,286L171,293L173,302L175,305L183,308L215,309L218,314L224,315L228,321L240,323L248,338L254,339L254,290L250,286L248,281L242,277L243,273L240,266L245,262L243,255L241,253L222,252L223,251L220,249Z', cx: 221, cy: 291, couleur: '#2980B9' },
  { name: 'Fès-Meknès', path: 'M390,73L385,76L353,78L353,84L343,91L345,94L334,95L332,97L338,102L336,105L338,107L336,110L336,119L342,121L344,128L349,130L349,135L372,138L380,147L385,144L387,139L394,130L410,127L413,125L412,122L404,116L404,114L410,109L401,106L386,105L389,101L389,95L386,91L389,88L388,86L391,84L391,80L395,78L395,74L392,73Z', cx: 370, cy: 109, couleur: '#8E44AD' },
  { name: 'Marrakech-Safi', path: 'M275,141L245,144L243,147L243,156L240,166L234,172L227,185L227,196L229,203L274,203L280,196L293,190L296,182L291,177L292,175L299,174L297,158L291,154L283,152L281,147L278,146L275,141Z', cx: 262, cy: 176, couleur: '#D4AF37' },
  { name: 'Béni Mellal-Kénifra', path: 'M320,120L320,126L306,127L306,133L303,137L302,145L304,149L299,157L299,163L302,174L294,177L298,181L297,186L303,189L309,188L309,185L326,179L332,174L334,172L332,168L338,164L340,160L344,159L342,155L348,150L348,137L346,131L341,128L340,122L322,120Z', cx: 321, cy: 152, couleur: '#F39C12' },
  { name: 'Casablanca-Settat', path: 'M299,105L293,107L287,112L262,123L258,131L248,141L250,142L250,147L258,149L260,151L261,156L299,154L301,150L299,142L301,135L303,134L303,127L305,125L306,120L305,117L307,115L300,112L299,105Z', cx: 280, cy: 132, couleur: '#E74C3C' },
  { name: 'Tanger-Tétouan-Al Hoceima', path: 'M344,37L333,39L325,68L336,70L336,76L342,78L347,84L350,84L351,80L374,79L376,77L382,76L383,74L389,71L389,60L359,58L350,49L349,44L347,42L347,37Z', cx: 352, cy: 62, couleur: '#3498DB' },
  { name: 'Rabat-Salé-Kénitra', path: 'M323,70L322,75L314,90L310,96L301,104L303,107L302,111L307,112L310,115L308,117L309,120L307,124L314,127L318,125L317,124L332,122L335,108L333,105L335,103L330,98L342,96L343,95L340,90L346,87L340,79L335,78L332,75L334,74L334,72L329,70Z', cx: 323, cy: 98, couleur: '#27AE60' },
]

export default function MarocSVGMap({ onRegionClick, selectedRegion }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: `${(H / W) * 100}%` }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/geo/Carte_maroc_sahara-removebg-preview.png"
          alt="Carte du Maroc"
          style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
        />
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          {REGIONS.map(({ name, path, cx, cy, couleur }) => {
            const sel = selectedRegion === name
            const hov = hovered === name
            return (
              <g
                key={name}
                onClick={() => onRegionClick(sel ? null : name)}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d={path}
                  fill={sel ? couleur + 'BB' : hov ? couleur + '66' : couleur + '22'}
                  stroke={sel ? couleur : hov ? couleur + 'CC' : couleur + '55'}
                  strokeWidth={sel ? 2 : 1}
                />
                {(sel || hov) && (
                  <text
                    x={cx} y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="9"
                    fill="#2C1810"
                    fontWeight="bold"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {name}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
