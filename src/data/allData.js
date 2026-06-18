import { sixiemeData } from './history/sixieme.js'
import { cinquiemeData } from './history/cinquieme.js'
import { quatriemeData } from './history/quatrieme.js'
import { troisiemeData } from './history/troisieme.js'
import { secondeData } from './history/seconde.js'
import { premiereData } from './history/premiere.js'
import { terminaleData } from './history/terminale.js'
import { hggspPremiereData } from './history/hggsp_premiere.js'
import { hggspTerminaleData } from './hggsp/themes.js'

export const allFiches = [
  ...sixiemeData,
  ...cinquiemeData,
  ...quatriemeData,
  ...troisiemeData,
  ...secondeData,
  ...premiereData,
  ...terminaleData,
  ...hggspPremiereData,
  ...hggspTerminaleData,
]

export { sixiemeData, cinquiemeData, quatriemeData, troisiemeData, secondeData, premiereData, terminaleData, hggspPremiereData, hggspTerminaleData }
