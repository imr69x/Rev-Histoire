export const quatriemeData = [
  {
    id: 'quat_grandes_decouvertes',
    level: '4e',
    theme: 'Temps Modernes',
    title: 'Les Grandes Découvertes et la colonisation des Amériques',
    periode: '1492 – 1600',
    essential: true,
    content: {
      context: "À partir de la fin du XVe siècle, les Européens (Espagnols et Portugais en tête) explorent et conquièrent de nouveaux mondes. Christophe Colomb atteint l'Amérique en 1492, ouvrant la voie à une colonisation massive. En quelques décennies, les conquistadors détruisent les empires aztèque et inca. Ces découvertes bouleversent la vision du monde et inaugurent la mondialisation des échanges.",
      keyPoints: [
        "En 1492, Christophe Colomb, financé par les rois catholiques d'Espagne, atteint les Caraïbes en cherchant une route vers l'Asie.",
        "Vasco de Gama atteint l'Inde par le cap de Bonne-Espérance en 1498, établissant la route maritime vers l'Asie.",
        "Magellan entame le premier tour du monde (1519-1522), prouvant la rotondité de la Terre.",
        "Hernán Cortés conquiert l'Empire aztèque (Mexique) entre 1519 et 1521. Francisco Pizarro détruit l'Empire inca (Pérou) entre 1532 et 1572.",
        "L'échange colombien transforme l'alimentation mondiale : maïs, pomme de terre, tomate arrivent en Europe ; chevaux, maladies (variole) arrivent en Amérique.",
        "La colonisation entraîne le génocide indirect des populations amérindiennes : épidémies, esclavage, violence réduisent de 90% certaines populations.",
      ],
      causes: [
        "La fermeture des routes terrestres vers l'Asie par les Ottomans après 1453 pousse les Européens à chercher des routes maritimes.",
        "Les progrès techniques : boussole, astrolabe, caravelle permettent la navigation hauturière.",
        "La soif d'or, d'épices et l'ambition des rois de Castille et du Portugal.",
      ],
      consequences: [
        "La traite atlantique se développe : des millions d'Africains sont déportés pour travailler dans les plantations américaines.",
        "L'afflux d'or et d'argent américains provoque l'inflation en Europe ('révolution des prix').",
        "Le traité de Tordesillas (1494) partage le monde entre l'Espagne et le Portugal.",
      ],
      dates: [
        { date: '1492', event: 'Colomb atteint les Caraïbes (île de Guanahani, 12 octobre)' },
        { date: '1494', event: 'Traité de Tordesillas — partage du monde entre Espagne et Portugal' },
        { date: '1498', event: 'Vasco de Gama atteint l\'Inde par le cap de Bonne-Espérance' },
        { date: '1519-1521', event: 'Cortés conquiert l\'Empire aztèque au Mexique' },
        { date: '1519-1522', event: 'Magellan réalise le premier tour du monde' },
        { date: '1532', event: 'Pizarro envahit l\'Empire inca (Pérou)' },
      ],
      vocabulary: ['conquistador', 'échange colombien', 'caravelle', 'encomienda', 'traite atlantique'],
      methodTips: "Pour analyser un document sur les Grandes Découvertes, pensez à distinguer la vision européenne (gloire, or, évangélisation) et la réalité vécue par les populations autochtones (génocide, esclavage, destruction des civilisations). Cette nuance est attendue au brevet.",
    },
    quiz: [
      {
        question: "Quelle route maritime Vasco de Gama emprunte-t-il pour atteindre l'Inde ?",
        options: ["Par l'Arctique", "Par le Pacifique", "Par le cap de Bonne-Espérance (sud de l'Afrique)", "Par le détroit de Magellan"],
        answer: "Par le cap de Bonne-Espérance (sud de l'Afrique)",
        explanation: "Vasco de Gama, marin portugais, contourne l'Afrique par le cap de Bonne-Espérance et atteint Calicut (Inde) en 1498. Cette route permet aux Portugais de dominer le commerce des épices pendant un siècle."
      },
      {
        question: "Qu'est-ce que l'échange colombien ?",
        options: ["Un traité commercial entre l'Espagne et le Portugal", "Le transfert de plantes, animaux, maladies et personnes entre Ancien et Nouveau Monde", "La monnaie utilisée par Colomb", "Un accord entre Colomb et les rois d'Espagne"],
        answer: "Le transfert de plantes, animaux, maladies et personnes entre Ancien et Nouveau Monde",
        explanation: "L'échange colombien désigne les transferts biologiques après 1492 : maïs, tomate, pomme de terre, cacao partent vers l'Europe ; chevaux, porcs, maladies (variole, rougeole) arrivent en Amérique. Ces épidémies déciment les Amérindiens."
      },
      {
        question: "Quelle civilisation Hernán Cortés détruit-il ?",
        options: ["L'Empire inca", "L'Empire aztèque", "L'Empire maya", "L'Empire guarani"],
        answer: "L'Empire aztèque",
        explanation: "Hernán Cortés, conquistador espagnol, conquiert l'Empire aztèque (Mexique) entre 1519 et 1521 avec seulement quelques centaines de soldats. Il bénéficie des alliances avec les peuples ennemis des Aztèques et de la supériorité militaire."
      },
      {
        question: "Quel explorateur accomplit le premier tour du monde ?",
        options: ["Christophe Colomb", "Vasco de Gama", "Fernand de Magellan", "Amerigo Vespucci"],
        answer: "Fernand de Magellan",
        explanation: "Fernand de Magellan part d'Espagne en 1519 avec 5 navires. Il meurt aux Philippines en 1521, mais son lieutenant Elcano ramène un seul vaisseau en Espagne en 1522, bouclant le premier tour du monde. Cela prouve définitivement la rotondité de la Terre."
      },
      {
        question: "Qu'est-ce que le traité de Tordesillas (1494) ?",
        options: ["Un accord de paix entre la France et l'Espagne", "Un traité partageant le monde entre l'Espagne et le Portugal", "Un contrat entre Colomb et les rois d'Espagne", "Un accord commercial entre les marchands européens"],
        answer: "Un traité partageant le monde entre l'Espagne et le Portugal",
        explanation: "Le traité de Tordesillas (1494), signé sous arbitrage du pape, trace une ligne à 370 lieues à l'ouest des Açores. À l'ouest : l'Espagne (Amériques) ; à l'est : le Portugal (Afrique, Inde). Les autres puissances européennes (France, Angleterre) refusent de le respecter."
      },
      {
        question: "Quelle maladie européenne décime le plus les populations amérindiennes ?",
        options: ["La malaria", "La tuberculose", "La variole", "La peste"],
        answer: "La variole",
        explanation: "Les Amérindiens n'avaient aucune immunité contre les maladies européennes, notamment la variole. Les épidémies font des ravages catastrophiques : en Méso-Amérique, la population passe de 20-25 millions en 1500 à moins de 2 millions en 1600. C'est la plus grande catastrophe démographique de l'histoire."
      },
      {
        question: "Qui finance l'expédition de Christophe Colomb en 1492 ?",
        options: ["Le roi du Portugal", "Les marchands génois", "Les rois catholiques d'Espagne (Isabelle et Ferdinand)", "Le pape de Rome"],
        answer: "Les rois catholiques d'Espagne (Isabelle et Ferdinand)",
        explanation: "Après avoir essuyé un refus du Portugal, Colomb convainc les rois catholiques d'Espagne, Isabelle de Castille et Ferdinand d'Aragon, de financer son projet de route maritime vers l'Asie par l'ouest. Les accords de Santa Fe lui accordent le titre d'amiral et une part des richesses découvertes."
      },
      {
        question: "Quelle civilisation Francisco Pizarro conquiert-il entre 1532 et 1572 ?",
        options: ["L'Empire aztèque", "L'Empire maya", "L'Empire inca", "L'Empire guarani"],
        answer: "L'Empire inca",
        explanation: "Francisco Pizarro, conquistador espagnol, envahit l'Empire inca (actuel Pérou) à partir de 1532. Il capture l'Inca Atahualpa, lui extorque une rançon en or, puis le fait tuer. L'Empire inca s'effondre sous les coups des Espagnols, aidés par des alliances locales et les épidémies."
      },
      {
        question: "Que désigne le terme 'révolution des prix' lié aux Grandes Découvertes ?",
        options: ["La hausse des impôts en Espagne", "L'inflation en Europe due à l'afflux d'or et d'argent américains", "La baisse des prix des épices après 1500", "Une réforme fiscale portugaise"],
        answer: "L'inflation en Europe due à l'afflux d'or et d'argent américains",
        explanation: "L'or et l'argent des mines d'Amérique (Potosí, Mexique) afflue en Europe, notamment en Espagne. Cette abondance monétaire provoque une forte inflation (hausse des prix) au XVIe siècle, appelée 'révolution des prix'. Elle déstabilise les économies européennes et appauvrit les populations à revenus fixes."
      },
      {
        question: "Qu'est-ce qu'une caravelle et quel avantage représente-t-elle ?",
        options: ["Un fort espagnol en Amérique", "Un navire léger et maniable permettant la navigation hauturière", "Une arme à feu utilisée par les conquistadors", "Un instrument de navigation des explorateurs"],
        answer: "Un navire léger et maniable permettant la navigation hauturière",
        explanation: "La caravelle est un navire de faible tonnage (50-200 tonnes) développé par les Portugais au XVe siècle. Ses voiles latines lui permettent de naviguer contre le vent, contrairement aux anciens navires. Elle est idéale pour explorer des côtes inconnues et naviguer en haute mer, loin des repères côtiers."
      }
    ],
    flashcards: [
      { front: "Qu'est-ce qu'un conquistador ?", back: "Soldat ou aventurier espagnol qui participe à la conquête des Amériques au XVIe siècle (Cortés, Pizarro). Du mot espagnol 'conquérir'." },
      { front: "Qu'est-ce que l'encomienda ?", back: "Système colonial espagnol attribuant à un colon (encomendero) un groupe d'Amérindiens à 'protéger et évangéliser', en échange de travail forcé. Forme d'esclavage légalisé." },
      { front: "En quelle année Colomb atteint-il l'Amérique ?", back: "1492, le 12 octobre. Il aborde l'île de Guanahani (Bahamas), pensant avoir atteint l'Asie." },
      { front: "Qu'est-ce que la caravelle ?", back: "Navire de faible tonnage, rapide et maniable, utilisé par les explorateurs portugais et espagnols au XVe-XVIe siècles. Ses voiles latines lui permettent de naviguer contre le vent, essentiel pour la navigation hauturière." },
      { front: "Qui est Amerigo Vespucci ?", back: "Navigateur florentin (1454-1512) qui explore les côtes d'Amérique du Sud et comprend qu'il s'agit d'un nouveau continent (et non de l'Asie). L'Amérique porte son prénom, latinisé en 'America'." },
      { front: "Qu'est-ce que la boussole et l'astrolabe permettent aux explorateurs ?", back: "La boussole indique le nord magnétique, permettant de s'orienter en pleine mer. L'astrolabe mesure la hauteur des étoiles pour calculer la latitude. Ces deux instruments rendent la navigation hauturière (en haute mer, loin des côtes) possible et moins risquée." },
      { front: "Qu'est-ce que le marronnage dans le contexte colonial ?", back: "Fuite des esclaves ou des Amérindiens réduits en servitude vers les zones sauvages (forêts, montagnes) pour échapper à leurs maîtres. Les communautés de 'marrons' résistaient à la reconquête. Terme qui désigne aussi toute forme de résistance silencieuse à l'oppression coloniale." },
      { front: "Qu'est-ce que le traité de Tordesillas (1494) ?", back: "Accord entre l'Espagne et le Portugal, arbitré par le pape, traçant une ligne de démarcation à 370 lieues à l'ouest des Açores. À l'ouest : domaine espagnol (Amériques) ; à l'est : domaine portugais (Afrique, Inde, Brésil). Les autres puissances européennes refusent de le reconnaître." },
      { front: "Quelles sont les motivations des Grandes Découvertes ?", back: "Trois motivations principales : 1) économiques (trouver une route maritime vers les épices d'Asie, contourner les Ottomans) ; 2) politiques (gloire et puissance pour les couronnes ibériques) ; 3) religieuses (évangéliser les peuples non-chrétiens). Ces motivations se combinent et se renforcent mutuellement." },
      { front: "Qu'est-ce que la 'révolution des prix' au XVIe siècle ?", back: "Phénomène d'inflation qui frappe l'Europe au XVIe siècle, causé par l'afflux massif d'or et d'argent en provenance des mines américaines (Potosí au Pérou, Mexique). La surabondance de monnaie dévalue l'argent et fait monter les prix, appauvrissant les salariés à revenus fixes." }
    ]
  },
  {
    id: 'quat_louis_xiv',
    level: '4e',
    theme: 'Monarchie absolue',
    title: 'Louis XIV et la monarchie absolue',
    periode: '1661 – 1715',
    essential: true,
    content: {
      context: "Louis XIV (1638-1715) est le symbole de la monarchie absolue en France et en Europe. Roi depuis l'âge de 5 ans (1643), il prend réellement le pouvoir en 1661 à la mort de son Premier ministre Mazarin. Il affirme tenir son pouvoir de Dieu seul ('droit divin') et centralise tout le pouvoir en sa personne. Sa célèbre formule : 'L'État, c'est moi.' Son règne de 72 ans est le plus long de l'Histoire de France.",
      keyPoints: [
        "Louis XIV gouverne seul sans Premier ministre après 1661. Il convoque les ministres en Conseil du Roi et prend toutes les décisions.",
        "Versailles, palais construit à partir de 1661, est le symbole du pouvoir absolu. La cour (10 000 personnes) y est rassemblée pour mieux contrôler la noblesse.",
        "Colbert, ministre des Finances, développe le mercantilisme : favoriser les exportations françaises et limiter les importations.",
        "Louvois réorganise l'armée : 400 000 hommes sous Louis XIV, la plus grande d'Europe.",
        "La révocation de l'Édit de Nantes en 1685 supprime les droits des protestants. 200 000 huguenots quittent la France.",
        "Les guerres de Louis XIV (Ligue d'Augsbourg, succession d'Espagne) épuisent les finances et la population française.",
      ],
      causes: [
        "La Fronde (1648-1653) : révolte des nobles et du Parlement. Louis XIV en garde un profond traumatisme et décide de soumettre la noblesse.",
        "La théorie du droit divin des rois (Bossuet) légitime le pouvoir absolu.",
      ],
      consequences: [
        "Louis XIV laisse une France agrandie mais endettée et un peuple épuisé.",
        "La révocation de l'Édit de Nantes prive la France de nombreux artisans et commerçants protestants.",
        "Le modèle de Versailles inspire toutes les cours européennes (Prusse, Autriche, Russie).",
      ],
      dates: [
        { date: '1643', event: 'Louis XIV devient roi à 5 ans — régence d\'Anne d\'Autriche et Mazarin' },
        { date: '1661', event: 'Louis XIV prend le pouvoir seul à la mort de Mazarin' },
        { date: '1682', event: 'Louis XIV installe sa cour définitivement à Versailles' },
        { date: '1685', event: 'Révocation de l\'Édit de Nantes — persécution des protestants' },
        { date: '1715', event: 'Mort de Louis XIV après 72 ans de règne' },
      ],
      vocabulary: ['absolutisme', 'droit divin', 'mercantilisme', 'Versailles', 'Édit de Nantes', 'noblesse de cour'],
      methodTips: "Un piège classique : confondre monarchie absolue et dictature moderne. Louis XIV n'est pas un dictateur au sens moderne — il est limité par les lois fondamentales du royaume, les corps intermédiaires et la religion. 'Absolu' signifie qu'il ne doit pas rendre de comptes, non qu'il est illimité.",
    },
    quiz: [
      {
        question: "Quelle est la formule associée à Louis XIV symbolisant la monarchie absolue ?",
        options: ["'Vive la France !'", "'L'État, c'est moi'", "'Je sers'", "'Liberté, égalité'"],
        answer: "'L'État, c'est moi'",
        explanation: "La formule 'L'État, c'est moi' est traditionnellement attribuée à Louis XIV, bien que son authenticité historique soit discutée. Elle symbolise la conception de la monarchie absolue : le roi incarne l'État et concentre tous les pouvoirs."
      },
      {
        question: "Quel est l'impact de la révocation de l'Édit de Nantes (1685) ?",
        options: ["Elle renforce l'unité religieuse et économique", "Elle provoque l'exil de ~200 000 protestants (huguenots) de France", "Elle accorde de nouveaux droits aux protestants", "Elle n'a aucun impact car peu de protestants en France"],
        answer: "Elle provoque l'exil de ~200 000 protestants (huguenots) de France",
        explanation: "En révoquant l'Édit de Nantes (1598) qui accordait la liberté de culte aux protestants, Louis XIV provoque l'exode de ~200 000 huguenots vers la Prusse, l'Angleterre et les Pays-Bas. La France perd ainsi de nombreux artisans qualifiés et commerçants."
      },
      {
        question: "Quel est le rôle de Versailles dans la politique de Louis XIV ?",
        options: ["Simple résidence d'été sans intérêt politique", "Centre du pouvoir et moyen de contrôle de la noblesse", "Forteresse militaire", "Académie des sciences"],
        answer: "Centre du pouvoir et moyen de contrôle de la noblesse",
        explanation: "Versailles est bien plus qu'un palais : c'est un instrument politique. En rassemblant la noblesse à la cour (étiquette stricte, faveurs royales), Louis XIV l'éloigne de ses terres et la rend dépendante du roi, éliminant ainsi toute opposition potentielle."
      },
      {
        question: "Quelle est la doctrine économique de Colbert sous Louis XIV ?",
        options: ["Le libéralisme économique", "Le mercantilisme", "Le socialisme d'État", "Le physiocratisme"],
        answer: "Le mercantilisme",
        explanation: "Jean-Baptiste Colbert, ministre des Finances (1661-1683), applique le mercantilisme : enrichir le royaume en favorisant les exportations et en limitant les importations. Il développe les manufactures royales (Gobelins, Sèvres), la marine marchande et coloniale, et protège l'industrie française par des droits de douane."
      },
      {
        question: "Qu'est-ce que la Fronde (1648-1653) ?",
        options: ["Une guerre contre l'Espagne", "Une révolte des nobles et du Parlement contre le pouvoir royal pendant la minorité de Louis XIV", "Une guerre de religion entre catholiques et protestants", "Une révolte paysanne contre les impôts"],
        answer: "Une révolte des nobles et du Parlement contre le pouvoir royal pendant la minorité de Louis XIV",
        explanation: "La Fronde est une série de révoltes (1648-1653) pendant la minorité de Louis XIV contre le gouvernement de Mazarin. Le jeune roi est obligé de fuir Paris. Ce traumatisme explique sa future politique : soumettre la noblesse à Versailles et ne jamais avoir de Premier ministre."
      },
      {
        question: "Qui est Bossuet et quel rôle joue-t-il sous Louis XIV ?",
        options: ["Un général de l'armée royale", "Un ministre des Finances", "Un évêque théologien qui justifie théoriquement le pouvoir absolu par le droit divin", "Un ambassadeur à Rome"],
        answer: "Un évêque théologien qui justifie théoriquement le pouvoir absolu par le droit divin",
        explanation: "Jacques-Bénigne Bossuet (1627-1704), évêque et prédicateur, théorise la monarchie absolue de droit divin : le roi tient son pouvoir de Dieu seul et n'a de comptes à rendre qu'à Lui. Cette doctrine justifie l'absolutisme de Louis XIV et éduque le dauphin (futur Louis XV)."
      },
      {
        question: "Quelle guerre épuise le plus les finances de Louis XIV ?",
        options: ["La guerre de Hollande (1672-1678)", "La guerre de la Ligue d'Augsbourg (1688-1697)", "La guerre de Succession d'Espagne (1701-1714)", "La guerre de Dévolution (1667-1668)"],
        answer: "La guerre de Succession d'Espagne (1701-1714)",
        explanation: "La guerre de Succession d'Espagne (1701-1714) oppose la France à une coalition européenne (Angleterre, Autriche, Provinces-Unies). C'est la plus longue et la plus coûteuse des guerres de Louis XIV. Elle s'achève par les traités d'Utrecht (1713) qui limitent la puissance française."
      },
      {
        question: "Qu'est-ce que l'étiquette à Versailles ?",
        options: ["Un système de tarifs douaniers", "Un ensemble rigide de règles et de cérémonies codifiant la vie à la cour royale", "Un label de qualité sur les produits français", "Les règles de la diplomatie internationale"],
        answer: "Un ensemble rigide de règles et de cérémonies codifiant la vie à la cour royale",
        explanation: "L'étiquette est le système de protocole qui régit minutieusement chaque moment de la vie du roi et de la cour à Versailles : le lever du roi, les repas, les promenades. En occupant les nobles dans ces cérémonies fastidieuses, Louis XIV les empêche de comploter et les rend dépendants de ses faveurs."
      },
      {
        question: "En quelle année Louis XIV installe-t-il définitivement sa cour à Versailles ?",
        options: ["1661", "1672", "1682", "1700"],
        answer: "1682",
        explanation: "En 1682, Louis XIV transfère définitivement la cour et le gouvernement de Paris à Versailles. Le château, agrandi par l'architecte Jules Hardouin-Mansart et les jardins dessinés par Le Nôtre, accueille jusqu'à 10 000 personnes. C'est un moyen de contrôler la noblesse et d'affirmer la grandeur de la France."
      },
      {
        question: "Quel surnom Louis XIV porte-t-il et pourquoi ?",
        options: ["Le Roi Très Chrétien", "Le Roi Soleil", "Le Grand Monarque", "Le Roi de gloire"],
        answer: "Le Roi Soleil",
        explanation: "Louis XIV est surnommé le 'Roi Soleil' car il se compare au soleil, astre autour duquel tout tourne. Ce symbole solaire exprime la monarchie absolue : comme le soleil éclaire et réchauffe toutes choses, le roi est le centre du royaume. Ce symbole est utilisé dans toute la décoration de Versailles."
      }
    ],
    flashcards: [
      { front: "Qu'est-ce que le mercantilisme ?", back: "Doctrine économique de Colbert sous Louis XIV : accumuler l'or en favorisant les exportations et limitant les importations. Développement des manufactures royales (Gobelins, Sèvres)." },
      { front: "Qu'est-ce que l'Édit de Nantes (1598) ?", back: "Édit signé par Henri IV accordant la liberté de culte aux protestants (huguenots) en France. Révoqué par Louis XIV en 1685, entraînant l'exil de ~200 000 protestants." },
      { front: "Qui est Colbert ?", back: "Ministre des Finances de Louis XIV (1661-1683), promoteur du mercantilisme. Il développe la marine royale, les manufactures et modernise l'administration fiscale." },
      { front: "Qu'est-ce que le droit divin des rois ?", back: "Théorie politique selon laquelle le roi tient son pouvoir directement de Dieu et non du peuple. Louis XIV en est le symbole. Cette doctrine est théorisée par Bossuet. Elle justifie l'absolutisme mais aussi les devoirs du roi envers Dieu." },
      { front: "Qu'est-ce que la noblesse de cour ?", back: "Noblesse contrainte par Louis XIV de vivre à Versailles, dépendante des pensions et faveurs royales. En l'éloignant de ses terres et de toute fonction politique réelle, le roi neutralise son opposition potentielle. Ce système fragilise la noblesse à long terme." },
      { front: "Pourquoi la révocation de l'Édit de Nantes (1685) est-elle une erreur économique ?", back: "L'exil de ~200 000 protestants (huguenots) prive la France d'artisans qualifiés, de commerçants et de banquiers. Beaucoup rejoignent la Prusse, l'Angleterre et les Pays-Bas, enrichissant les économies rivales de la France. C'est un appauvrissement humain et économique considérable." },
      { front: "Qu'est-ce que le Louvois et son rôle sous Louis XIV ?", back: "François-Michel Le Tellier, marquis de Louvois (1641-1691), ministre de la Guerre de Louis XIV. Il réorganise et professionnalise l'armée française : introduction de l'uniforme, des grades, de la discipline stricte. Il porte l'armée à 400 000 hommes, la plus grande d'Europe." },
      { front: "Qu'est-ce que le 'siècle de Louis XIV' selon Voltaire ?", back: "Voltaire, dans son œuvre 'Le Siècle de Louis XIV' (1751), considère ce règne comme un âge d'or culturel : Molière, Racine, Corneille au théâtre ; La Fontaine en poésie ; Lully en musique ; Le Nôtre en jardins ; Le Vau et Mansart en architecture. La France domine la culture européenne." },
      { front: "Quels sont les principaux ennemis de Louis XIV en Europe ?", back: "Louis XIV affronte plusieurs coalitions européennes inquiètes de la puissance française : la Triple Alliance (Angleterre, Provinces-Unies, Suède), puis la Ligue d'Augsbourg (1686 : Autriche, Espagne, Suède, Provinces-Unies), et enfin la Grande Alliance pendant la guerre de Succession d'Espagne (1701-1714)." },
      { front: "Que sont les manufactures royales sous Louis XIV ?", back: "Grandes entreprises créées ou soutenues par l'État (Colbert) pour produire des biens de luxe : manufacture des Gobelins (tapisseries), de Sèvres (porcelaine), de Saint-Gobain (glaces). Elles ont pour but d'éviter d'importer des produits étrangers et d'exporter la production française." }
    ]
  },
  {
    id: 'quat_lumieres',
    level: '4e',
    theme: 'Lumières',
    title: 'Les Lumières : Voltaire, Rousseau, Montesquieu',
    periode: '1689 – 1789',
    essential: true,
    content: {
      context: "Le XVIIIe siècle est le siècle des Lumières ('Aufklärung' en allemand, 'Enlightenment' en anglais). Les philosophes des Lumières — Voltaire, Rousseau, Montesquieu, Diderot, Locke — remettent en question les fondements de l'Ancien Régime. Ils prônent la raison, la liberté, l'égalité et la tolérance. L'Encyclopédie (1751-1772) est le symbole de ce mouvement intellectuel qui prépare la Révolution française.",
      keyPoints: [
        "Montesquieu publie L'Esprit des Lois (1748) : il théorise la séparation des pouvoirs (exécutif, législatif, judiciaire) pour éviter le despotisme.",
        "Voltaire combat l'intolérance religieuse, le fanatisme et l'absolutisme. Ses Lettres philosophiques (1734) admirent le système anglais.",
        "Rousseau développe dans Du Contrat Social (1762) le concept de souveraineté populaire : le pouvoir appartient au peuple.",
        "L'Encyclopédie de Diderot et d'Alembert (1751-1772) rassemble tout le savoir humain dans une perspective critique et rationelle.",
        "John Locke (Angleterre) défend les droits naturels de l'homme (vie, liberté, propriété) et influence directement les révolutions américaine et française.",
        "Les idées des Lumières inspirent la Déclaration d'Indépendance américaine (1776) et la DDHC (1789).",
      ],
      causes: [],
      consequences: [
        "Les idées des Lumières alimentent les révolutions américaine (1776) et française (1789).",
        "La séparation des pouvoirs de Montesquieu est intégrée dans toutes les constitutions démocratiques modernes.",
        "La remise en cause de l'absolutisme et de l'Église prépare la sécularisation des États.",
      ],
      dates: [
        { date: '1689', event: 'Locke publie le Traité sur le gouvernement civil — fondements du libéralisme politique' },
        { date: '1734', event: 'Voltaire publie les Lettres philosophiques' },
        { date: '1748', event: 'Montesquieu publie L\'Esprit des Lois' },
        { date: '1751', event: 'Premier volume de l\'Encyclopédie de Diderot et d\'Alembert' },
        { date: '1762', event: 'Rousseau publie Du Contrat Social et Émile' },
      ],
      vocabulary: ['Lumières', 'raison', 'séparation des pouvoirs', 'souveraineté populaire', 'tolérance', 'Encyclopédie'],
      methodTips: "Pour retenir les grands philosophes des Lumières et leurs idées principales : Montesquieu = séparation des pouvoirs, Voltaire = tolérance/liberté, Rousseau = souveraineté populaire, Diderot = Encyclopédie. Ces associations tombent souvent dans les questions de cours.",
    },
    quiz: [
      {
        question: "Quelle est l'idée principale de Montesquieu dans L'Esprit des Lois ?",
        options: ["Le droit divin des rois", "La séparation des pouvoirs pour éviter le despotisme", "La souveraineté populaire", "La liberté économique"],
        answer: "La séparation des pouvoirs pour éviter le despotisme",
        explanation: "Dans L'Esprit des Lois (1748), Montesquieu théorise la séparation des trois pouvoirs : législatif (qui fait les lois), exécutif (qui les applique) et judiciaire (qui juge). Cette séparation protège contre le despotisme et inspire toutes les constitutions démocratiques."
      },
      {
        question: "Selon Rousseau dans Du Contrat Social, d'où vient le pouvoir politique ?",
        options: ["De Dieu (droit divin)", "Du peuple (souveraineté populaire)", "Du roi par héritage", "Des nobles par tradition"],
        answer: "Du peuple (souveraineté populaire)",
        explanation: "Rousseau affirme dans Du Contrat Social (1762) que le pouvoir politique découle d'un contrat entre les citoyens. La souveraineté appartient au peuple, et le gouvernement n'est que l'exécuteur de la volonté générale."
      },
      {
        question: "Qu'est-ce que l'Encyclopédie de Diderot ?",
        options: ["Un roman philosophique", "Un dictionnaire de 17 volumes rassemblant tout le savoir dans une perspective critique", "Une bible protestante", "Un traité de physique"],
        answer: "Un dictionnaire de 17 volumes rassemblant tout le savoir dans une perspective critique",
        explanation: "L'Encyclopédie ou Dictionnaire raisonné des Sciences, des Arts et des Métiers (1751-1772), dirigée par Diderot et d'Alembert, rassemble en 17 volumes de textes et 11 volumes de planches tout le savoir humain dans un esprit critique et rationnel."
      },
      {
        question: "Quel est le principal apport de John Locke aux idées des Lumières ?",
        options: ["La séparation des pouvoirs en trois branches", "La théorie des droits naturels (vie, liberté, propriété) et le gouvernement par consentement", "L'idée de volonté générale", "La critique de la religion"],
        answer: "La théorie des droits naturels (vie, liberté, propriété) et le gouvernement par consentement",
        explanation: "John Locke (1632-1704), philosophe anglais, affirme que les hommes naissent avec des droits naturels inaliénables : la vie, la liberté et la propriété. Le gouvernement est légitime seulement s'il protège ces droits avec le consentement des gouvernés. Ces idées influencent directement la Déclaration d'Indépendance américaine (1776)."
      },
      {
        question: "Quel philosophe des Lumières est associé à la défense de la tolérance religieuse ?",
        options: ["Rousseau", "Diderot", "Voltaire", "Montesquieu"],
        answer: "Voltaire",
        explanation: "Voltaire est le champion de la tolérance religieuse. Il combat le fanatisme et l'intolérance dans des œuvres comme le 'Traité sur la tolérance' (1763), écrit après l'affaire Calas (un protestant accusé à tort d'avoir tué son fils). Sa formule : 'Écrasez l'infâme !' vise l'Église intolérante."
      },
      {
        question: "Quelle révolution s'inspire directement des idées des Lumières en 1776 ?",
        options: ["La Révolution anglaise de Cromwell", "La Révolution américaine et la Déclaration d'Indépendance", "La Révolution russe", "La Révolution industrielle anglaise"],
        answer: "La Révolution américaine et la Déclaration d'Indépendance",
        explanation: "La Déclaration d'Indépendance américaine (4 juillet 1776), rédigée par Thomas Jefferson, est imprégnée des idées de Locke et des Lumières : droits naturels, gouvernement par consentement, droit à la révolution contre un gouvernement tyrannique. Benjamin Franklin et Thomas Jefferson ont fréquenté les salons des Lumières à Paris."
      },
      {
        question: "Qu'est-ce qu'un salon au XVIIIe siècle ?",
        options: ["Une grande salle de bal aristocratique", "Un lieu de réunion où les philosophes et intellectuels débattent des idées nouvelles", "Une boutique de luxe parisienne", "Un tribunal d'exception"],
        answer: "Un lieu de réunion où les philosophes et intellectuels débattent des idées nouvelles",
        explanation: "Les salons sont des réunions organisées chez des femmes cultivées (les 'salonnières', comme Mme du Deffand, Mme Geoffrin) où philosophes, écrivains, scientifiques et nobles échangent sur les nouvelles idées. Ces salons jouent un rôle capital dans la diffusion des idées des Lumières avant la Révolution."
      },
      {
        question: "Que signifie le terme 'despotisme éclairé' ?",
        options: ["Un roi qui gouverne avec l'aide de philosophes uniquement", "Des monarques absolus qui appliquent certaines idées des Lumières sans renoncer à leur pouvoir", "Un régime républicain fondé sur la raison", "La dictature de Robespierre"],
        answer: "Des monarques absolus qui appliquent certaines idées des Lumières sans renoncer à leur pouvoir",
        explanation: "Le 'despotisme éclairé' désigne des monarques absolus (Frédéric II de Prusse, Catherine II de Russie, Joseph II d'Autriche) qui s'inspirent des Lumières : réformes de l'éducation, tolérance religieuse, codification des lois. Mais ils refusent de limiter leur pouvoir ou d'accorder des libertés politiques réelles."
      },
      {
        question: "Quel est le titre de l'œuvre principale de Montesquieu publiée en 1748 ?",
        options: ["Du Contrat Social", "L'Esprit des Lois", "Lettres philosophiques", "Candide"],
        answer: "L'Esprit des Lois",
        explanation: "L'Esprit des Lois (1748) est l'œuvre maîtresse de Montesquieu. Il y développe la théorie de la séparation des pouvoirs (législatif, exécutif, judiciaire) comme rempart contre le despotisme. Il analyse aussi l'influence du climat et de la géographie sur les systèmes politiques. C'est une œuvre fondatrice du constitutionnalisme moderne."
      },
      {
        question: "Pourquoi l'Encyclopédie est-elle censurée à plusieurs reprises ?",
        options: ["Parce qu'elle contient des erreurs scientifiques", "Parce qu'elle remet en question l'autorité de l'Église et de la monarchie", "Parce qu'elle est écrite en latin et non en français", "Parce qu'elle soutient l'absolutisme royal"],
        answer: "Parce qu'elle remet en question l'autorité de l'Église et de la monarchie",
        explanation: "L'Encyclopédie est censurée et son privilège révoqué en 1759 car ses articles critiquent subtilement l'Église catholique, la monarchie absolue et les superstitions. Diderot continue l'œuvre clandestinement. L'Encyclopédie est l'arme intellectuelle des Lumières contre les pouvoirs établis."
      }
    ],
    flashcards: [
      { front: "Qui est Voltaire et quel est son combat principal ?", back: "François-Marie Arouet dit Voltaire (1694-1778), philosophe et écrivain. Son combat principal : l'intolérance religieuse, le fanatisme et l'absolutisme. Auteur de Candide (1759)." },
      { front: "Qu'est-ce que la 'souveraineté populaire' selon Rousseau ?", back: "Principe selon lequel le pouvoir politique appartient au peuple (et non au roi ou à Dieu). Le gouvernement est légitime seulement s'il représente la 'volonté générale'." },
      { front: "Quel est le lien entre les Lumières et la Révolution française ?", back: "Les idées des Lumières (liberté, égalité, séparation des pouvoirs, souveraineté populaire) nourrissent les révolutionnaires de 1789 et s'incarnent dans la DDHC du 26 août 1789." },
      { front: "Qu'est-ce que la 'raison' pour les philosophes des Lumières ?", back: "La raison est la faculté humaine de penser de manière logique et critique, sans avoir recours à la révélation religieuse ou à la tradition. Pour les Lumières, la raison doit guider tous les domaines : science, politique, morale. C'est le fondement de leur critique de la religion et de l'absolutisme." },
      { front: "Qui est Jean-Jacques Rousseau et quelle est son œuvre principale ?", back: "Jean-Jacques Rousseau (1712-1778), philosophe franco-suisse. Son œuvre principale : Du Contrat Social (1762). Il y développe la théorie de la souveraineté populaire et de la 'volonté générale'. Il publie aussi Émile (1762) sur l'éducation naturelle et La Nouvelle Héloïse (1761), roman sentimental." },
      { front: "Qu'est-ce que la 'volonté générale' selon Rousseau ?", back: "Concept central du Contrat Social : la volonté générale est l'intérêt commun de tous les citoyens, distinct de la somme des volontés individuelles. C'est la base de la légitimité du gouvernement. Si le gouvernement trahit la volonté générale, le peuple a le droit de le renverser." },
      { front: "Comment les idées des Lumières circulent-elles au XVIIIe siècle ?", back: "Les idées des Lumières se diffusent par plusieurs canaux : les livres et pamphlets imprimés, les salons littéraires (Paris), les cafés, la correspondance entre philosophes (réseau européen), l'Encyclopédie, et les journaux. L'alphabétisation croissante élargit le public lecteur." },
      { front: "Quelle est la position des Lumières sur la religion ?", back: "Les philosophes des Lumières ne sont pas tous athées : beaucoup sont déistes (Voltaire, Rousseau) — ils croient en un Dieu créateur mais rejettent la religion révélée et les dogmes. Ils critiquent l'Église pour son intolérance, sa richesse et sa censure intellectuelle, non la spiritualité en elle-même." },
      { front: "Qu'est-ce que le déisme ?", back: "Croyance en un Dieu créateur de l'univers ('horloger divin') mais qui n'intervient pas dans les affaires humaines et n'a pas dicté de révélation particulière. Position de Voltaire et Rousseau. S'oppose au théisme (Dieu personnel intervenant dans l'histoire) et à l'athéisme." }
    ]
  },
  {
    id: 'quat_revolution_causes',
    level: '4e',
    theme: 'Révolution française',
    title: 'La Révolution française : causes et déclenchement (1789)',
    periode: '1787 – 1792',
    essential: true,
    content: {
      context: "La Révolution française de 1789 est l'un des événements les plus importants de l'Histoire moderne. Elle met fin à l'Ancien Régime (monarchie absolue, société d'ordres) et fonde les principes qui inspirent encore les démocraties modernes. Ses causes sont multiples : crise financière de l'État, inégalités sociales criantes, influence des Lumières et mauvaises récoltes.",
      keyPoints: [
        "L'Ancien Régime repose sur une société inégalitaire divisée en trois ordres : le Clergé (1er ordre), la Noblesse (2e ordre) et le Tiers État (3e ordre, 97% de la population).",
        "La France est en faillite : les guerres (dont l'aide à la Révolution américaine) ont épuisé les finances. Le roi convoque les États généraux (mai 1789) pour trouver des ressources.",
        "Le Tiers État refuse d'obéir aux règles habituelles et se proclame Assemblée Nationale Constituante (17 juin 1789) : il veut donner une constitution à la France.",
        "Le 14 juillet 1789, le peuple de Paris prend la Bastille, symbole du despotisme royal. C'est le déclenchement de la Révolution.",
        "La nuit du 4 août 1789 : les nobles et le clergé renoncent à leurs privilèges féodaux — fin de l'Ancien Régime.",
        "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) du 26 août 1789 proclame la liberté, l'égalité et la souveraineté nationale.",
      ],
      causes: [
        "Crise financière : l'État français est en faillite après les guerres.",
        "Crise sociale : le Tiers État supporte l'essentiel des impôts malgré sa pauvreté.",
        "Mauvaises récoltes (1788) provoquent une famine et une hausse du prix du pain.",
        "Influence des Lumières : les idées de Rousseau, Voltaire, Montesquieu ont diffusé des idées de liberté et d'égalité.",
        "L'exemple de la Révolution américaine (1776) inspire les réformateurs.",
      ],
      consequences: [
        "La Déclaration des Droits de l'Homme (1789) devient un texte fondateur des droits humains.",
        "La monarchie absolue est remplacée par une monarchie constitutionnelle (constitution de 1791), puis une République (1792).",
        "La Révolution s'exporte en Europe, provoquant des guerres révolutionnaires contre les monarchies voisines.",
      ],
      dates: [
        { date: '5 mai 1789', event: 'Ouverture des États généraux à Versailles' },
        { date: '17 juin 1789', event: 'Le Tiers État se proclame Assemblée nationale constituante' },
        { date: '14 juillet 1789', event: 'Prise de la Bastille — déclenchement de la Révolution' },
        { date: '4 août 1789', event: 'Nuit du 4 août — abolition des privilèges féodaux' },
        { date: '26 août 1789', event: 'Adoption de la DDHC (Déclaration des Droits de l\'Homme et du Citoyen)' },
      ],
      vocabulary: ['Ancien Régime', 'Tiers État', 'États généraux', 'Bastille', 'DDHC', 'Assemblée Nationale'],
      methodTips: "Pour analyser la Révolution française, distinguez bien les causes (pourquoi elle éclate) des facteurs déclenchants (ce qui déclenche l'action). Le mécontentement dure depuis longtemps ; c'est la convocation des États généraux et le refus du roi d'écouter le Tiers État qui met le feu aux poudres.",
    },
    quiz: [
      {
        question: "Que représente la prise de la Bastille le 14 juillet 1789 ?",
        options: ["La fin de la Révolution française", "La mort de Louis XVI", "Le déclenchement symbolique de la Révolution — attaque d'un symbole du despotisme royal", "La signature de la constitution"],
        answer: "Le déclenchement symbolique de la Révolution — attaque d'un symbole du despotisme royal",
        explanation: "La Bastille était une prison-forteresse symbolisant le pouvoir arbitraire du roi. Le 14 juillet 1789, le peuple parisien l'assaille et libère les prisonniers (seulement 7 en réalité). Cet acte symbolise la rébellion du peuple contre l'absolutisme et est aujourd'hui fête nationale."
      },
      {
        question: "Que proclame la Déclaration des Droits de l'Homme et du Citoyen du 26 août 1789 ?",
        options: ["La mort du roi", "La liberté, l'égalité et la souveraineté de la nation", "L'abolition de la propriété privée", "La création de la République"],
        answer: "La liberté, l'égalité et la souveraineté de la nation",
        explanation: "La DDHC proclame que 'les hommes naissent et demeurent libres et égaux en droits'. Elle affirme les libertés fondamentales (expression, presse, propriété) et la souveraineté nationale. C'est un texte fondateur qui figure toujours en préambule de la Constitution française."
      },
      {
        question: "Qu'est-ce que l'Ancien Régime ?",
        options: ["Le gouvernement révolutionnaire après 1789", "L'organisation politique, sociale et économique de la France avant 1789", "Le régime napoléonien", "Le régime monarchique de Louis-Philippe"],
        answer: "L'organisation politique, sociale et économique de la France avant 1789",
        explanation: "L'Ancien Régime désigne l'organisation de la France d'avant 1789 : monarchie absolue de droit divin, société divisée en 3 ordres (clergé, noblesse, tiers état), système fiscal inégalitaire. La Révolution le détruit."
      },
      {
        question: "Pourquoi Louis XVI convoque-t-il les États généraux en mai 1789 ?",
        options: ["Pour déclarer la guerre à l'Angleterre", "Pour trouver une solution à la faillite de l'État français", "Pour réformer la société et abolir les privilèges", "Pour supprimer le Parlement de Paris"],
        answer: "Pour trouver une solution à la faillite de l'État française",
        explanation: "L'État français est en faillite en 1788 : les guerres (dont l'aide à la Révolution américaine), les dépenses de la cour de Versailles et une fiscalité inefficace ont épuisé les finances. Louis XVI convoque les États généraux pour la première fois depuis 1614, espérant trouver un accord sur de nouveaux impôts."
      },
      {
        question: "Que se passe-t-il la nuit du 4 août 1789 ?",
        options: ["La prise de la Bastille", "L'arrestation du roi", "Les nobles et le clergé renoncent volontairement à leurs privilèges féodaux", "La signature de la DDHC"],
        answer: "Les nobles et le clergé renoncent volontairement à leurs privilèges féodaux",
        explanation: "Dans la nuit du 4 au 5 août 1789, dans un élan d'enthousiasme et sous la pression des événements, les nobles et le clergé renoncent à leurs privilèges féodaux (droits seigneuriaux, dîme, exemptions fiscales). C'est la fin juridique de l'Ancien Régime et de la société d'ordres."
      },
      {
        question: "Qu'est-ce que la Grande Peur (été 1789) ?",
        options: ["La peur des révolutionnaires face aux armées étrangères", "Un mouvement de panique rurale : les paysans attaquent les châteaux craignant un complot aristocratique", "La crainte de Louis XVI d'être renversé", "Une épidémie qui frappe Paris en 1789"],
        answer: "Un mouvement de panique rurale : les paysans attaquent les châteaux craignant un complot aristocratique",
        explanation: "Durant l'été 1789, une vague de panique s'empare des campagnes françaises. Des rumeurs de 'complot aristocratique' poussent les paysans à attaquer les châteaux et à brûler les titres de propriété féodaux. Cette Grande Peur accélère la décision des nobles d'abandonner leurs privilèges la nuit du 4 août."
      },
      {
        question: "Que proclame le serment du Jeu de Paume (20 juin 1789) ?",
        options: ["La déchéance du roi", "La création d'une armée révolutionnaire", "La résolution des députés du Tiers État de ne pas se séparer avant d'avoir donné une constitution à la France", "L'abolition des États généraux"],
        answer: "La résolution des députés du Tiers État de ne pas se séparer avant d'avoir donné une constitution à la France",
        explanation: "Le 20 juin 1789, les députés du Tiers État trouvent leur salle de réunion fermée par ordre du roi. Ils se réunissent dans une salle de jeu de paume voisine et prêtent serment de ne pas se séparer avant d'avoir doté la France d'une constitution. C'est un acte de défi majeur envers l'autorité royale."
      },
      {
        question: "Quels sont les articles 1 et 2 de la DDHC de 1789 ?",
        options: ["La liberté de la presse et l'abolition des privilèges", "Les hommes naissent libres et égaux + le but de tout gouvernement est de préserver les droits naturels", "La souveraineté nationale et la séparation des pouvoirs", "L'abolition de la féodalité et de la dîme"],
        answer: "Les hommes naissent libres et égaux + le but de tout gouvernement est de préserver les droits naturels",
        explanation: "Article 1 : 'Les hommes naissent et demeurent libres et égaux en droits.' Article 2 : 'Le but de toute association politique est la conservation des droits naturels et imprescriptibles de l'Homme. Ces droits sont la liberté, la propriété, la sûreté et la résistance à l'oppression.' Ces deux articles sont le cœur de la DDHC."
      },
      {
        question: "Qu'est-ce que la constitution de 1791 établit comme régime politique en France ?",
        options: ["Une République", "Une monarchie absolue réformée", "Une monarchie constitutionnelle avec séparation des pouvoirs", "Une dictature révolutionnaire"],
        answer: "Une monarchie constitutionnelle avec séparation des pouvoirs",
        explanation: "La constitution de 1791 maintient la monarchie mais la limite : le roi conserve le pouvoir exécutif mais partage le législatif avec une Assemblée nationale élue. Le pouvoir judiciaire est séparé. Louis XVI, surnommé 'roi des Français' (et non 'roi de France'), devient un monarque constitutionnel. Ce régime ne dure que jusqu'en 1792."
      },
      {
        question: "Qu'est-ce que la fuite à Varennes (juin 1791) ?",
        options: ["La fuite du peuple parisien face aux armées coalisées", "La tentative ratée de Louis XVI de fuir la France pour rejoindre des troupes étrangères", "La fuite des nobles français vers l'étranger après 1789", "La retraite de l'armée révolutionnaire en 1792"],
        answer: "La tentative ratée de Louis XVI de fuir la France pour rejoindre des troupes étrangères",
        explanation: "Dans la nuit du 20 au 21 juin 1791, Louis XVI et sa famille tentent de fuir secrètement la France pour rejoindre l'armée autrichienne et écraser la Révolution. Reconnu à Varennes, il est arrêté et ramené à Paris. Cette trahison discrédite définitivement le roi et accélère la marche vers la République."
      }
    ],
    flashcards: [
      { front: "Quels sont les 3 ordres de l'Ancien Régime ?", back: "1er ordre : le Clergé (~100 000 personnes). 2e ordre : la Noblesse (~400 000). 3e ordre : le Tiers État (~27 millions, 97% de la population). Seuls les deux premiers ordres ont des privilèges." },
      { front: "Qu'est-ce que la DDHC ?", back: "Déclaration des Droits de l'Homme et du Citoyen, adoptée le 26 août 1789. Elle proclame la liberté, l'égalité et la souveraineté nationale. Elle figure toujours dans la Constitution française." },
      { front: "Qui est le roi de France en 1789 ?", back: "Louis XVI (1754-1793). Roi indécis et maladroit politiquement. Il convoque les États généraux en 1789, accepte la constitution de 1791, est guillotiné le 21 janvier 1793." },
      { front: "Qu'est-ce que les États généraux ?", back: "Assemblée extraordinaire convoquée par le roi de France, réunissant les représentants des trois ordres (clergé, noblesse, tiers état). Non réunis depuis 1614, Louis XVI les convoque en mai 1789. Le conflit sur le mode de vote (par ordre ou par tête) déclenche la crise révolutionnaire." },
      { front: "Qu'est-ce que la Constituante (1789-1791) ?", back: "L'Assemblée nationale constituante est l'assemblée révolutionnaire qui gouverne la France de 1789 à 1791. Elle abolit les privilèges (4 août), adopte la DDHC (26 août 1789) et rédige la première constitution française (1791), établissant une monarchie constitutionnelle." },
      { front: "Qu'est-ce que la dîme et qui la payait ?", back: "Impôt religieux représentant 1/10e des revenus agricoles, perçu par l'Église catholique. Payée uniquement par le Tiers État (paysans surtout). Abolie la nuit du 4 août 1789 avec les autres privilèges féodaux. Elle représentait une charge lourde pour les paysans pauvres." },
      { front: "Qu'est-ce que l'émigration des nobles après 1789 ?", back: "Dès 1789, de nombreux nobles (les 'émigrés') quittent la France pour l'étranger (Coblentz, Turin, Londres) afin d'échapper à la Révolution et d'organiser une contre-révolution avec l'aide des monarchies étrangères. Leurs biens sont confisqués par l'État révolutionnaire comme 'biens nationaux'." },
      { front: "Qui est Mirabeau et quel est son rôle en 1789 ?", back: "Honoré Gabriel de Riqueti, comte de Mirabeau (1749-1791), est le grand orateur des États généraux et de l'Assemblée constituante. Noble rallié au Tiers État, il cherche une monarchie constitutionnelle modérée. Sa mort en 1791 prive la Révolution d'un modérateur influent." },
      { front: "Qu'est-ce que les 'droits naturels' selon la DDHC ?", back: "Selon l'article 2 de la DDHC (1789), les droits naturels et imprescriptibles de l'homme sont : la liberté, la propriété, la sûreté et la résistance à l'oppression. Ces droits appartiennent à tout être humain par nature, avant même toute loi ou État. Ils sont inspirés de Locke et des Lumières." }
    ]
  },
  {
    id: 'quat_napoleon',
    level: '4e',
    theme: 'Empire napoléonien',
    title: 'L\'Empire napoléonien (1799-1815)',
    periode: '1799 – 1815',
    essential: true,
    content: {
      context: "Napoléon Bonaparte (1769-1821) est l'une des figures les plus marquantes de l'Histoire universelle. Général brillant de la Révolution, il prend le pouvoir par un coup d'État le 18 Brumaire an VIII (9 novembre 1799). Il se couronne Empereur en 1804 et crée un empire couvrant une grande partie de l'Europe. Sa chute en 1815 recompose la carte de l'Europe au Congrès de Vienne.",
      keyPoints: [
        "Le coup d'État du 18 Brumaire (9 novembre 1799) met fin au Directoire. Napoléon devient Premier Consul, puis Consul à vie (1802).",
        "Le Code Civil (1804) unifie le droit français : égalité devant la loi, propriété privée, liberté de conscience, mais subordination des femmes.",
        "Napoléon se couronne Empereur des Français le 2 décembre 1804 à Notre-Dame de Paris, en présence du pape Pie VII.",
        "Les guerres napoléoniennes (1803-1815) permettent à Napoléon de dominer l'Europe, mais épuisent la France : 1 million de soldats français tués.",
        "La campagne de Russie (1812) est un désastre : 600 000 soldats partent, moins de 100 000 reviennent. C'est le début de la fin.",
        "Napoléon est vaincu et abdicule en 1814, puis définitivement à Waterloo (18 juin 1815). Il est exilé à Sainte-Hélène où il meurt en 1821.",
      ],
      causes: [],
      consequences: [
        "Le Code Civil napoléonien influence les systèmes juridiques du monde entier (France, Belgique, Québec, Amérique latine).",
        "L'Empire diffuse les idées révolutionnaires en Europe : liberté, égalité, codification du droit, affaiblissement de la féodalité.",
        "Le nationalisme européen se développe en réaction à la domination napoléonienne (Espagne, Allemagne, Russie).",
      ],
      dates: [
        { date: '9 novembre 1799', event: 'Coup d\'État du 18 Brumaire — Napoléon Premier Consul' },
        { date: '1804', event: 'Promulgation du Code Civil — Napoléon se couronne Empereur' },
        { date: '1805', event: 'Victoire d\'Austerlitz — apogée de l\'Empire' },
        { date: '1812', event: 'Désastreuse campagne de Russie' },
        { date: '18 juin 1815', event: 'Défaite de Waterloo — fin de l\'Empire' },
        { date: '5 mai 1821', event: 'Mort de Napoléon à Sainte-Hélène' },
      ],
      vocabulary: ['Code Civil', 'Empire', '18 Brumaire', 'Waterloo', 'Concordat', 'blocus continental'],
      methodTips: "Pour un paragraphe argumenté sur Napoléon, présentez le bilan de manière nuancée : d'un côté les réalisations durables (Code Civil, préfets, lycées, Banque de France), de l'autre les coûts humains (guerres, mort d'1 million de Français) et la fin de la démocratie révolutionnaire.",
    },
    quiz: [
      {
        question: "Qu'est-ce que le Code Civil napoléonien (1804) ?",
        options: ["Le code militaire de l'armée", "Un recueil de 2281 articles unifiant le droit civil français", "La constitution de l'Empire", "Un traité de paix avec l'Angleterre"],
        answer: "Un recueil de 2281 articles unifiant le droit civil français",
        explanation: "Le Code Civil (Code Napoléon, 1804) unifie les droits civils disparates de l'Ancien Régime. Il établit l'égalité devant la loi, la propriété privée, la liberté contractuelle. Il influence encore le droit français actuel et a été adopté par de nombreux pays."
      },
      {
        question: "Quelle est la défaite définitive de Napoléon ?",
        options: ["La campagne de Russie (1812)", "La bataille de Leipzig (1813)", "La bataille de Waterloo (18 juin 1815)", "La capitulation de Paris (1814)"],
        answer: "La bataille de Waterloo (18 juin 1815)",
        explanation: "Waterloo (18 juin 1815, actuelle Belgique) est la défaite définitive de Napoléon face aux armées alliées (Wellington et Blücher). Napoléon abdique pour la deuxième fois et est exilé à Sainte-Hélène où il meurt en 1821."
      },
      {
        question: "Quel est l'impact de la campagne de Russie de 1812 ?",
        options: ["Une victoire totale permettant de conquérir la Russie", "Un désastre militaire qui marque le début du déclin de l'Empire", "Un match nul aboutissant à un traité de paix", "Une victoire russe rapide sans importance"],
        answer: "Un désastre militaire qui marque le début du déclin de l'Empire",
        explanation: "600 000 soldats franchissent le Niémen en juin 1812. Moscou est prise mais les Russes la brûlent. La retraite dans les conditions hivernales est catastrophique : moins de 100 000 soldats reviennent. C'est le tournant qui entraîne la chute de l'Empire."
      },
      {
        question: "Qu'est-ce que la bataille d'Austerlitz (2 décembre 1805) ?",
        options: ["Une défaite de Napoléon face à la Russie", "La victoire décisive de Napoléon sur les empereurs d'Autriche et de Russie", "La bataille navale perdue face à l'Angleterre", "La première victoire de Napoléon comme général"],
        answer: "La victoire décisive de Napoléon sur les empereurs d'Autriche et de Russie",
        explanation: "Austerlitz (2 décembre 1805, actuelle République tchèque) est considérée comme le chef-d'œuvre tactique de Napoléon. Il y écrase les armées alliées des empereurs d'Autriche (François II) et de Russie (Alexandre Ier). Surnommée 'la bataille des Trois Empereurs', elle marque l'apogée de l'Empire."
      },
      {
        question: "Qu'est-ce que le Concordat de 1801 ?",
        options: ["Un traité de paix avec l'Autriche", "Un accord entre Napoléon et le pape régularisant les relations entre l'État et l'Église catholique", "La constitution du Consulat", "Un accord commercial avec l'Angleterre"],
        answer: "Un accord entre Napoléon et le pape régularisant les relations entre l'État et l'Église catholique",
        explanation: "Le Concordat (1801) est un accord signé entre Napoléon et le pape Pie VII. Il met fin au schisme révolutionnaire : l'État reconnaît le catholicisme comme religion de la majorité des Français ; le pape reconnaît la vente des biens ecclésiastiques pendant la Révolution. Les évêques sont nommés par le gouvernement."
      },
      {
        question: "Qu'est-ce que le Grand Empire à son apogée (1810-1811) ?",
        options: ["L'empire contrôlant uniquement la France et ses colonies", "Un ensemble de ~70 millions d'habitants sous domination directe ou indirecte française en Europe", "L'empire colonial français en Amérique et en Asie", "La France sous Napoléon avant les guerres"],
        answer: "Un ensemble de ~70 millions d'habitants sous domination directe ou indirecte française en Europe",
        explanation: "À son apogée (1810-1811), le Grand Empire de Napoléon couvre une grande partie de l'Europe : la France étendue (130 départements), des États satellites (Espagne, Westphalie, Berg, Naples, Italie), et des alliés contraints (Autriche, Prusse, Danemark). Seules la Grande-Bretagne, la Russie et la Suède résistent."
      },
      {
        question: "Qu'est-ce que le blocus continental (1806) ?",
        options: ["Le blocus de Paris par les armées coalisées", "La fermeture des ports européens au commerce britannique pour affaiblir l'Angleterre", "La blockade de la Méditerranée par la marine française", "Un accord commercial entre la France et la Prusse"],
        answer: "La fermeture des ports européens au commerce britannique pour affaiblir l'Angleterre",
        explanation: "Le blocus continental (décret de Berlin, 1806) interdit à tous les États sous domination française de commercer avec la Grande-Bretagne. Napoléon veut affaiblir l'économie britannique. En pratique, il est difficile à faire respecter, nuit aux économies européennes, pousse la Russie à le contourner (ce qui provoque la campagne de 1812)."
      },
      {
        question: "Quelles sont les institutions créées par Napoléon qui perdurent aujourd'hui ?",
        options: ["La République, le Sénat, les communes", "Le Code civil, les préfets, les lycées, la Banque de France, la Légion d'honneur", "Les ministères, le Parlement, l'armée de métier", "Les impôts, la monnaie unique, les douanes"],
        answer: "Le Code civil, les préfets, les lycées, la Banque de France, la Légion d'honneur",
        explanation: "Les créations durables de Napoléon : le Code civil (1804, base du droit privé français), les préfets (représentants de l'État dans les départements, 1800), les lycées (1802, enseignement secondaire), la Banque de France (1800, régulation monétaire), et la Légion d'honneur (1802, distinction méritocratique)."
      },
      {
        question: "Qu'est-ce que les 'Cent-Jours' et comment se terminent-ils ?",
        options: ["Les 100 premiers jours du Consulat en 1800", "Le retour de Napoléon au pouvoir du 20 mars au 22 juin 1815, terminé par Waterloo", "La période entre la première et deuxième abdication de Napoléon en 1814", "Les 100 jours de la campagne de Russie en 1812"],
        answer: "Le retour de Napoléon au pouvoir du 20 mars au 22 juin 1815, terminé par Waterloo",
        explanation: "Le 1er mars 1815, Napoléon s'échappe de l'île d'Elbe et débarque en France. Il reprend le pouvoir le 20 mars sans combat (Louis XVIII fuit). Les grandes puissances européennes se coalisent et le battent à Waterloo le 18 juin 1815. Il abdique définitivement le 22 juin et est exilé à Sainte-Hélène."
      },
      {
        question: "Pourquoi Napoléon est-il aussi une figure controversée ?",
        options: ["Parce qu'il a perdu toutes ses batailles", "Parce qu'il a rétabli l'esclavage, la censure et mis fin aux libertés révolutionnaires", "Parce qu'il était d'origine étrangère", "Parce qu'il a vendu la Louisiane aux États-Unis"],
        answer: "Parce qu'il a rétabli l'esclavage, la censure et mis fin aux libertés révolutionnaires",
        explanation: "Napoléon est ambigu : il conserve certains acquis révolutionnaires (égalité civile, Code civil) mais rétablit l'esclavage dans les colonies en 1802 (annulant l'abolition de 1794), instaure une censure stricte de la presse, supprime les libertés politiques et sacrifie 1 million de soldats français dans ses guerres."
      }
    ],
    flashcards: [
      { front: "Qu'est-ce que le coup d'État du 18 Brumaire ?", back: "9 novembre 1799 : Napoléon renverse le Directoire par un coup de force et prend le pouvoir comme Premier Consul. Fin de la Révolution, début du Consulat." },
      { front: "Qu'est-ce que le Concordat de 1801 ?", back: "Accord entre Napoléon et le pape Pie VII réglant les relations entre l'Église catholique et l'État français. Le pape reconnaît la Révolution, Napoléon reconnaît le catholicisme comme religion de la majorité." },
      { front: "Pourquoi Napoléon échoue-t-il en Russie en 1812 ?", back: "Stratégie russe de la 'terre brûlée' (tout brûler en retraite), l'immensité du territoire, l'hiver russe. Sur 600 000 soldats partis, moins de 100 000 reviennent." },
      { front: "Qu'est-ce que la 'Grande Armée' de Napoléon ?", back: "Armée constituée par Napoléon à partir de 1804, regroupant des soldats français et des contingents des États alliés ou conquis (Polonais, Italiens, Allemands, etc.). À son apogée, elle compte plusieurs centaines de milliers d'hommes. Elle est réputée pour sa mobilité et ses tactiques innovantes." },
      { front: "Qu'est-ce que le Consulat (1799-1804) ?", back: "Régime politique établi par le coup d'État du 18 Brumaire (1799). Napoléon est Premier Consul, puis Consul à vie (1802). Le Consulat marque la fin de la Révolution et prépare l'Empire. Napoléon adopte le Code civil, signe le Concordat et remporte les premières victoires militaires." },
      { front: "Qu'est-ce que la bataille de Trafalgar (1805) ?", back: "Bataille navale (21 octobre 1805) au large de l'Espagne. La flotte franco-espagnole est détruite par la marine britannique du vice-amiral Nelson (qui y trouve la mort). Trafalgar assure la domination maritime britannique et empêche définitivement Napoléon d'envahir l'Angleterre." },
      { front: "Qu'est-ce que le Code pénal et le Code de commerce napoléoniens ?", back: "En plus du Code civil (1804), Napoléon fait adopter le Code pénal (1810), qui définit les infractions et les peines, et le Code de commerce (1807). Ces codes unifient et modernisent le droit français, remplaçant la diversité des coutumes locales de l'Ancien Régime." },
      { front: "Pourquoi la guerre d'Espagne (1808-1814) est-elle difficile pour Napoléon ?", back: "En 1808, Napoléon impose son frère Joseph comme roi d'Espagne. Les Espagnols résistent par une guerre de partisans (la 'guerilla'). L'armée britannique (Wellington) aide les résistants. Cette 'plaie espagnole' mobilise 300 000 soldats français et illustre le nationalisme qui se retourne contre l'Empire." },
      { front: "Qu'est-ce que le Congrès de Vienne (1814-1815) ?", back: "Congrès réunissant les grandes puissances européennes (Autriche, Russie, Prusse, Grande-Bretagne, France) après la chute de Napoléon. Il redessine la carte de l'Europe, restaure les monarchies, crée la Sainte-Alliance. L'objectif est d'empêcher toute nouvelle révolution et de maintenir l'équilibre des puissances." }
    ]
  },
  {
    id: 'quat_revolution_industrielle',
    level: '4e',
    theme: 'Révolution industrielle',
    title: 'La Révolution industrielle (1760-1850)',
    periode: '1760 – 1850',
    essential: true,
    content: {
      context: "La Révolution industrielle commence en Angleterre dans les années 1760 avant de se répandre en Europe et en Amérique du Nord au XIXe siècle. Elle transforme radicalement les modes de production, de travail et de vie. La machine à vapeur remplace la force musculaire, les usines remplacent les ateliers artisanaux, et les villes explosent sous l'effet de l'exode rural.",
      keyPoints: [
        "La machine à vapeur de James Watt (améliorée en 1769) est le moteur de la Révolution industrielle. Elle actionne les pompes à eau, les machines textiles, les locomotives.",
        "L'Angleterre est la première à s'industrialiser grâce à ses ressources (charbon, fer), son empire colonial, son système bancaire et ses libertés économiques.",
        "Le textile est le premier secteur industrialisé : les métiers à tisser mécaniques révolutionnent la production de coton.",
        "Le réseau ferroviaire se développe rapidement à partir des années 1830 (Liverpool-Manchester, 1830). Il révolutionne les transports et le commerce.",
        "L'exode rural entraîne la croissance rapide des villes industrielles. Manchester, Birmingham, Lyon deviennent de grandes cités industrielles.",
        "Les conditions de travail sont terribles : 14h par jour, travail des enfants dès 5-6 ans, salaires de misère, accidents fréquents.",
      ],
      causes: [
        "Les ressources naturelles abondantes en Angleterre : charbon, fer, laine.",
        "L'essor du commerce colonial fournit des capitaux et des matières premières.",
        "Les inventions techniques (machine à vapeur, métiers Jacquard, hauts-fourneaux à coke).",
        "Le régime agraire anglais libéré de la féodalité permet la mobilité de la main-d'œuvre.",
      ],
      consequences: [
        "Naissance du prolétariat industriel et de la classe ouvrière.",
        "Les conditions de vie misérables poussent à l'émergence du socialisme (Saint-Simon, Fourier, Marx).",
        "Transformation profonde des paysages (fumées, entrepôts, voies ferrées).",
        "La pollution industrielle et les premières maladies professionnelles.",
      ],
      dates: [
        { date: '1769', event: 'James Watt améliore la machine à vapeur — moteur de la Révolution industrielle' },
        { date: '1785', event: 'Métier à tisser mécanique de Cartwright' },
        { date: '1814', event: 'George Stephenson invente la locomotive à vapeur' },
        { date: '1830', event: 'Première ligne de chemin de fer Liverpool-Manchester' },
        { date: '1848', event: 'Karl Marx publie le Manifeste du Parti Communiste' },
      ],
      vocabulary: ['prolétariat', 'machine à vapeur', 'exode rural', 'usine', 'charbon', 'chemin de fer'],
      methodTips: "Pour bien analyser la Révolution industrielle, utilisez la grille COCON : Causes (ressources, capitaux, inventions), Origines géographiques (Angleterre d'abord), COnditions de travail (très dures), coNséquences sociales (prolétariat, socialisme). Un piège classique : ne pas confondre la révolution industrielle avec une évolution lente — c'est une rupture très rapide.",
    },
    quiz: [
      {
        question: "Quel est le rôle de la machine à vapeur dans la Révolution industrielle ?",
        options: ["Elle produit de l'électricité", "Elle est la source d'énergie principale permettant d'actionner les machines industrielles", "Elle est uniquement utilisée dans les bateaux", "Elle remplace les animaux dans l'agriculture"],
        answer: "Elle est la source d'énergie principale permettant d'actionner les machines industrielles",
        explanation: "La machine à vapeur, améliorée par James Watt en 1769, transforme la chaleur (produite par la combustion du charbon) en énergie mécanique. Elle actionne les machines textiles, les pompes dans les mines et les locomotives. C'est le moteur de la Révolution industrielle."
      },
      {
        question: "Quel pays est le premier à s'industrialiser ?",
        options: ["La France", "L'Allemagne", "Les États-Unis", "L'Angleterre (Grande-Bretagne)"],
        answer: "L'Angleterre (Grande-Bretagne)",
        explanation: "L'Angleterre est la première nation industrielle pour plusieurs raisons : ressources abondantes (charbon, fer), empire colonial pourvoyant matières premières et marchés, système bancaire développé, liberté économique, révolution agricole préalable libérant de la main-d'œuvre."
      },
      {
        question: "Qu'est-ce que l'exode rural pendant la Révolution industrielle ?",
        options: ["La fuite des paysans en Amérique", "Le déplacement massif de population des campagnes vers les villes industrielles", "L'émigration des industriels vers la campagne", "La migration saisonnière des ouvriers"],
        answer: "Le déplacement massif de population des campagnes vers les villes industrielles",
        explanation: "L'industrialisation crée un besoin massif de main-d'œuvre dans les usines. Des millions de paysans quittent les campagnes pour travailler dans les villes industrielles (Manchester, Birmingham, Lyon). C'est l'exode rural, qui entraîne une urbanisation rapide et des conditions de vie très précaires."
      },
      {
        question: "Qu'est-ce que le charbon représente pour la Révolution industrielle ?",
        options: ["Une source d'énergie secondaire utilisée uniquement pour le chauffage", "Le combustible essentiel alimentant les machines à vapeur et les hauts-fourneaux", "Une matière première exportée depuis les colonies", "Un minerai utilisé pour fabriquer l'acier directement"],
        answer: "Le combustible essentiel alimentant les machines à vapeur et les hauts-fourneaux",
        explanation: "Le charbon est le combustible de la Révolution industrielle : il alimente les machines à vapeur (dans les usines, les locomotives) et les hauts-fourneaux (pour fondre le fer et produire l'acier). Les bassins houillers anglais (Galles du Sud, Midlands) et français (Nord, Lorraine) deviennent les centres de l'industrialisation."
      },
      {
        question: "Pourquoi le chemin de fer révolutionne-t-il l'économie au XIXe siècle ?",
        options: ["Il permet aux ouvriers de se déplacer entre les usines", "Il révolutionne les transports de marchandises et de personnes, stimulant toute l'économie", "Il remplace entièrement le transport fluvial dès 1840", "Il est d'abord utilisé uniquement pour transporter le charbon dans les mines"],
        answer: "Il révolutionne les transports de marchandises et de personnes, stimulant toute l'économie",
        explanation: "Le chemin de fer (première ligne Liverpool-Manchester, 1830) révolutionne les transports : les marchandises circulent plus vite et moins cher (minerai, charbon, produits industriels), les marchés s'élargissent, les prix baissent. Il stimule aussi la sidérurgie (rails, locomotives) et crée des milliers d'emplois dans la construction."
      },
      {
        question: "Qu'est-ce que le travail des enfants dans les usines du XIXe siècle ?",
        options: ["Un phénomène rare limité à l'Angleterre", "Une réalité courante : enfants dès 5-6 ans dans les mines et usines textiles", "Une pratique limitée aux ateliers artisanaux", "Un système légalement réglementé dès 1800"],
        answer: "Une réalité courante : enfants dès 5-6 ans dans les mines et usines textiles",
        explanation: "Dans les usines et mines du XIXe siècle, des enfants de 5-6 ans travaillent 12-14 heures par jour. Ils servent à traverser des galeries étroites (mines), à réparer les métiers en marche (textile), ou à transporter des matériaux. Les premières lois protectrices arrivent tardivement : Grande-Bretagne 1833 (interdit le travail des moins de 9 ans), France 1841 (moins de 8 ans)."
      },
      {
        question: "Qu'est-ce que la bourgeoisie industrielle au XIXe siècle ?",
        options: ["L'ancienne noblesse reconvertie dans l'industrie", "Les propriétaires d'usines, de banques et de mines qui s'enrichissent grâce à l'industrialisation", "Les artisans qualifiés des villes", "Les fonctionnaires et professions libérales"],
        answer: "Les propriétaires d'usines, de banques et de mines qui s'enrichissent grâce à l'industrialisation",
        explanation: "La bourgeoisie industrielle (ou grande bourgeoisie) est la nouvelle classe dirigeante née de la Révolution industrielle. Elle possède les moyens de production (usines, machines, mines, banques) et tire sa puissance de la richesse économique plutôt que de la naissance. Elle s'oppose au prolétariat (ouvriers sans propriété) dans l'analyse marxiste."
      },
      {
        question: "Qu'est-ce que le chartisme en Grande-Bretagne ?",
        options: ["Un mouvement d'artistes qui refusent l'industrialisation", "Un mouvement ouvrier britannique (1838-1848) réclamant des droits politiques pour les travailleurs", "Un syndicat des charbonniers", "Une école de philosophie économique libérale"],
        answer: "Un mouvement ouvrier britannique (1838-1848) réclamant des droits politiques pour les travailleurs",
        explanation: "Le chartisme est le premier grand mouvement ouvrier organisé (Grande-Bretagne, 1838-1848). Il réclame une 'Charte du peuple' : suffrage universel masculin, vote secret, salaires des députés (pour que les pauvres puissent être élus). Le mouvement échoue à obtenir ces réformes immédiates mais préfigure le mouvement ouvrier moderne."
      },
      {
        question: "Quelle est la différence entre artisanat et production industrielle ?",
        options: ["L'artisanat produit plus et moins cher que l'industrie", "L'artisanat est manuel et en petite quantité ; l'industrie est mécanisée et en grande série", "L'industrie produit des objets de meilleure qualité que l'artisanat", "Il n'y a pas de différence fondamentale entre les deux"],
        answer: "L'artisanat est manuel et en petite quantité ; l'industrie est mécanisée et en grande série",
        explanation: "L'artisanat implique un artisan qualifié qui fabrique un objet de A à Z dans un atelier. L'industrie mécanise la production : des machines font le travail, divisé en tâches répétitives (division du travail), permettant une production en grande série, moins chère mais moins qualifiée. Ce changement détruit de nombreux métiers artisanaux."
      }
    ],
    flashcards: [
      { front: "Qu'est-ce que le prolétariat ?", back: "Terme inventé par Marx désignant la classe des travailleurs salariés des usines, ne possédant que leur force de travail. Ils s'opposent à la bourgeoisie, propriétaire des moyens de production." },
      { front: "Qui est James Watt ?", back: "Ingénieur écossais (1736-1819) qui améliore décisivement la machine à vapeur en 1769, la rendant pratique pour l'industrie. L'unité de puissance (watt) porte son nom." },
      { front: "Pourquoi les conditions de travail dans les usines sont-elles si dures ?", back: "14-16h de travail par jour, salaires de misère, travail des enfants dès 5-6 ans, accidents fréquents, maladies professionnelles. Aucune protection légale jusqu'aux premières lois sociales (UK 1833, France 1841)." },
      { front: "Qu'est-ce qu'un haut-fourneau et à quoi sert-il ?", back: "Le haut-fourneau est une installation industrielle qui fond le minerai de fer avec du coke (charbon transformé) pour produire de la fonte, puis de l'acier. Abraham Darby invente la technique du coke en 1709 en Grande-Bretagne. Les hauts-fourneaux permettent la production massive de métal pour les machines, les rails et les ponts." },
      { front: "Qu'est-ce que le coton et pourquoi est-il central à la Révolution industrielle ?", back: "Le coton, importé des colonies américaines et indiennes, est la matière première du textile, premier secteur industrialisé. Les machines à filer (Jenny de Hargreaves, 1764) et à tisser (Cartwright, 1785) mécanisent sa transformation. Les filatures de coton d'Alsace (Mulhouse) et du Nord sont parmi les premières usines françaises." },
      { front: "Qu'est-ce que la division du travail dans l'industrie ?", back: "Principe introduit par Adam Smith (La Richesse des nations, 1776) : au lieu qu'un artisan fabrique un objet entier, la production est divisée en tâches répétitives simples, chacune réalisée par un ouvrier spécialisé. Cela augmente énormément la productivité mais déqualifie les travailleurs et les rend interchangeables." },
      { front: "Quels sont les bassins industriels français au XIXe siècle ?", back: "Les principales régions industrielles françaises au XIXe siècle : le Nord (textile, mines de charbon), la Lorraine (sidérurgie, minerai de fer), l'Alsace (textile coton, machines), la région de Saint-Étienne (mines, métallurgie), Lyon (soierie). Ces régions concentrent la population ouvrière et les conflits sociaux." },
      { front: "Qu'est-ce que la locomotive à vapeur et qui l'invente ?", back: "La locomotive à vapeur est un véhicule ferroviaire propulsé par une machine à vapeur. George Stephenson construit la première locomotive pratique en 1814 et inaugure la ligne Liverpool-Manchester en 1830. La locomotive révolutionne les transports terrestres et symbolise la puissance industrielle du XIXe siècle." },
      { front: "Pourquoi l'Angleterre interdit-elle l'émigration de ses ingénieurs avant 1825 ?", back: "L'Angleterre, première nation industrielle, tente de préserver son avance technologique en interdisant jusqu'en 1825 l'émigration des ingénieurs et l'exportation des machines. Les pays européens (France, Belgique, Prusse) font venir des techniciens anglais clandestinement pour s'industrialiser." }
    ]
  },
  {
    id: 'quat_terreur_directoire',
    level: '4e',
    theme: 'Révolution française',
    title: 'La Terreur et la fin de la Révolution (1792-1799)',
    periode: '1792-1799',
    essential: true,
    content: {
      context: "Après la proclamation de la République en septembre 1792, la Révolution française entre dans sa phase la plus radicale et la plus violente. Face aux menaces extérieures (coalitions européennes) et intérieures (insurrections royalistes), le Comité de Salut public dirigé par Robespierre instaure la Terreur. Cette période d\'exception prend fin avec la chute de Robespierre en juillet 1794, ouvrant la voie au Directoire puis au coup d\'État de Napoléon en 1799.",
      keyPoints: [
        "La République est proclamée le 21 septembre 1792, après la victoire de Valmy contre les armées coalisées.",
        "Louis XVI est jugé, condamné et guillotiné le 21 janvier 1793 sur la place de la Révolution à Paris.",
        "Le Comité de Salut public (avril 1793), dominé par Robespierre, concentre tous les pouvoirs pour sauver la République.",
        "La Terreur (septembre 1793 - juillet 1794) : environ 17 000 personnes sont officiellement exécutées, 300 000 emprisonnées.",
        "Le 9 Thermidor an II (27 juillet 1794), Robespierre est renversé et guillotiné : c\'est la réaction thermidorienne.",
        "Le Directoire (1795-1799) est un régime instable et corrompu. Le coup d\'État du 18 Brumaire (9 novembre 1799) par Napoléon Bonaparte y met fin.",
      ],
      causes: [
        "Les armées des monarchies européennes envahissent la France pour écraser la Révolution.",
        "Les insurrections royalistes (Vendée) menacent la République de l\'intérieur.",
        "La radicalisation politique : montée des sans-culottes et des Montagnards face aux Girondins modérés.",
      ],
      consequences: [
        "La Terreur laisse un traumatisme durable dans la société française et discrédite les excès révolutionnaires.",
        "Le Directoire échoue à stabiliser la République, ouvrant la voie à l\'autoritarisme napoléonien.",
        "Le coup d\'État de Brumaire met fin à dix ans de révolution et inaugure l\'ère napoléonienne.",
      ],
      dates: [
        { date: '21 septembre 1792', event: 'Proclamation de la République française' },
        { date: '21 janvier 1793', event: 'Exécution de Louis XVI à Paris' },
        { date: 'Avril 1793', event: 'Création du Comité de Salut public' },
        { date: 'Septembre 1793', event: 'Début officiel de la Terreur' },
        { date: '9 Thermidor an II (27 juillet 1794)', event: 'Chute et exécution de Robespierre' },
        { date: '9 novembre 1799', event: 'Coup d\'État du 18 Brumaire — Napoléon prend le pouvoir' },
      ],
      vocabulary: ['Terreur', 'Comité de Salut public', 'Directoire', 'Thermidor', 'sans-culottes', 'guillotine'],
      methodTips: "Pour analyser la Terreur, évitez le jugement moral anachronique. Replacez-la dans son contexte : guerre extérieure, guerre civile, urgence révolutionnaire. La question est : la violence est-elle inhérente à la Révolution ou imposée par les circonstances ? C\'est un débat historiographique central."
    },
    quiz: [
      {
        question: "Qui dirige le Comité de Salut public pendant la Terreur ?",
        options: ["Danton", "Marat", "Robespierre", "Louis XVI"],
        answer: "Robespierre",
        explanation: "Maximilien de Robespierre (1758-1794) est la figure dominante du Comité de Salut public. Surnommé l\'Incorruptible, il incarne la Terreur avant d\'en être victime le 9 Thermidor an II (27 juillet 1794)."
      },
      {
        question: "Qu\'est-ce que le 9 Thermidor ?",
        options: ["La proclamation de la République", "Le coup d\'État de Napoléon", "Le renversement de Robespierre", "L\'exécution de Louis XVI"],
        answer: "Le renversement de Robespierre",
        explanation: "Le 9 Thermidor an II (27 juillet 1794), Robespierre est arrêté par ses collègues de la Convention qui craignent pour leur vie. Il est guillotiné le lendemain. Cet événement met fin à la Terreur et s\'appelle la réaction thermidorienne."
      },
      {
        question: "Combien de personnes sont officiellement exécutées pendant la Terreur ?",
        options: ["Environ 1 000", "Environ 5 000", "Environ 17 000", "Environ 100 000"],
        answer: "Environ 17 000",
        explanation: "La Terreur (septembre 1793 - juillet 1794) fait environ 17 000 exécutions officielles par guillotine ou fusillade. En ajoutant les morts en prison et les victimes des guerres civiles (Vendée), le bilan total dépasse 300 000 morts."
      },
      {
        question: "Qu\'est-ce que la Vendée et quel rôle joue-t-elle pendant la Révolution ?",
        options: ["Une province royaliste qui se révolte contre la Révolution et la conscription (1793-1796)", "Un département républicain qui soutient la Convention", "La région d\'origine de Robespierre", "Un front militaire contre l\'Autriche"],
        answer: "Une province royaliste qui se révolte contre la Révolution et la conscription (1793-1796)",
        explanation: "La guerre de Vendée (1793-1796) est une insurrection royaliste et catholique dans l\'ouest de la France. Les Vendéens ('Blancs') refusent la conscription révolutionnaire et la Constitution civile du clergé. La répression par les 'colonnes infernales' fait entre 200 000 et 300 000 morts. C\'est la plus grave guerre civile de la Révolution."
      },
      {
        question: "Qu\'est-ce que la guillotine et pourquoi est-elle utilisée pendant la Révolution ?",
        options: ["Une arme militaire révolutionnaire", "Un instrument d\'exécution rapide et 'égalitaire' proposé par le Dr Guillotin en 1792", "Une machine de torture de l\'Ancien Régime", "Un instrument inventé par Robespierre pour terroriser ses opposants"],
        answer: "Un instrument d\'exécution rapide et 'égalitaire' proposé par le Dr Guillotin en 1792",
        explanation: "La guillotine est un instrument d\'exécution par décapitation mécanique. Le Dr Joseph-Ignace Guillotin la propose à l\'Assemblée en 1789 comme moyen d\'exécution humain et égalitaire (même mort pour tous). Elle devient le symbole de la Terreur et fait environ 17 000 victimes officielles, dont Louis XVI (21 janvier 1793) et Marie-Antoinette (16 octobre 1793)."
      },
      {
        question: "Qu\'est-ce que la Convention nationale et quel est son rôle (1792-1795) ?",
        options: ["L\'assemblée chargée de rédiger la constitution de 1791", "L\'assemblée révolutionnaire élue qui gouverne la France de 1792 à 1795, vote la mort du roi et instaure la Terreur", "Le gouvernement de la Première République après la Terreur", "L\'assemblée qui proclame Napoléon Consul"],
        answer: "L\'assemblée révolutionnaire élue qui gouverne la France de 1792 à 1795, vote la mort du roi et instaure la Terreur",
        explanation: "La Convention nationale (21 septembre 1792 - 26 octobre 1795) est l\'assemblée révolutionnaire qui proclame la République, juge et condamne Louis XVI, instaure la Terreur avec le Comité de Salut public, puis réagit après Thermidor. Elle est divisée entre Girondins (modérés) et Montagnards (radicaux, dont Robespierre)."
      },
      {
        question: "Qu\'est-ce que les sans-culottes ?",
        options: ["Les nobles qui ont fui la France pendant la Révolution", "Les ouvriers et artisans parisiens révolutionnaires radicaux qui portent le pantalon (et non la culotte des nobles)", "Les soldats républicains sans uniforme", "Les opposants à la Révolution"],
        answer: "Les ouvriers et artisans parisiens révolutionnaires radicaux qui portent le pantalon (et non la culotte des nobles)",
        explanation: "Les sans-culottes sont les militants révolutionnaires populaires de Paris : artisans, boutiquiers, journaliers. Ils portent le pantalon long (contrairement à la culotte courte aristocratique), le bonnet rouge et la carmagnole. Ils forment la base sociale de la Terreur et soutiennent Robespierre. Leur influence décline après Thermidor."
      },
      {
        question: "Pourquoi les Girondins et les Montagnards s\'opposent-ils à la Convention ?",
        options: ["Les Girondins veulent la guerre, les Montagnards la paix", "Les Girondins sont plus modérés et provinciaux ; les Montagnards sont radicaux et alliés des sans-culottes parisiens", "Les Girondins soutiennent le roi, les Montagnards veulent la République", "Les Girondins veulent la Terreur, les Montagnards s\'y opposent"],
        answer: "Les Girondins sont plus modérés et provinciaux ; les Montagnards sont radicaux et alliés des sans-culottes parisiens",
        explanation: "À la Convention (1792-1795), deux factions s\'affrontent : les Girondins (modérés, représentant les grandes villes de province, favorable à l\'économie libérale) et les Montagnards (radicaux, siégeant en haut 'sur la Montagne', alliés des sans-culottes). Les Montagnards l\'emportent en juin 1793 : les chefs girondins sont arrêtés et guillotinés."
      },
      {
        question: "Qu\'est-ce que la déchristianisation pendant la Terreur ?",
        options: ["L\'interdiction de l\'Islam en France", "Un mouvement visant à supprimer le christianisme et le remplacer par le culte de la Raison ou de l\'Être suprême", "La séparation de l\'Église et de l\'État votée en 1794", "La destruction des synagogues par les révolutionnaires"],
        answer: "Un mouvement visant à supprimer le christianisme et le remplacer par le culte de la Raison ou de l\'Être suprême",
        explanation: "La déchristianisation (1793-1794) est un mouvement révolutionnaire radical qui ferme les églises, oblige les prêtres à se marier ou à renoncer à leur ministère, et remplace le culte chrétien par le culte de la Raison (athée) puis le culte de l\'Être suprême (théiste, imposé par Robespierre). Ce mouvement choque une grande partie de la population rurale."
      },
      {
        question: "Quel est le bilan humain de la guerre de Vendée ?",
        options: ["Environ 1 000 morts", "Environ 10 000 morts", "Entre 200 000 et 300 000 morts selon les estimations", "Plus d\'un million de morts"],
        answer: "Entre 200 000 et 300 000 morts selon les estimations",
        explanation: "La guerre de Vendée (1793-1796) est la plus meurtrière des guerres civiles de la Révolution française. Entre 200 000 et 300 000 personnes (combattants et civils des deux camps) y perdent la vie. Les 'colonnes infernales' du général Turreau sont accusées de massacres systématiques de la population civile vendéenne."
      }
    ],
    flashcards: [
      { front: "Qu\'est-ce que la Terreur ?", back: "Période révolutionnaire (sept. 1793 - juil. 1794) marquée par la répression massive des opposants réels ou supposés. ~17 000 exécutions officielles sous l\'égide du Comité de Salut public dirigé par Robespierre." },
      { front: "Qu\'est-ce que le Directoire (1795-1799) ?", back: "Régime républicain gouverné par 5 Directeurs, instable et corrompu. Il succède à la Terreur et précède le coup d\'État de Brumaire (1799) par lequel Napoléon prend le pouvoir." },
      { front: "Quand et par qui la République française est-elle proclamée ?", back: "Le 21 septembre 1792, par la Convention nationale, au lendemain de la victoire de Valmy contre les armées coalisées européennes. C\'est la Première République." },
      { front: "Qu\'est-ce que la bataille de Valmy (20 septembre 1792) ?", back: "Première grande victoire de l\'armée républicaine française sur les armées coalisées (Prusse, Autriche). Elle arrête l\'invasion étrangère et sauve la Révolution. L\'écrivain Goethe, présent, déclare : 'De ce lieu et de ce jour date une nouvelle époque de l\'histoire du monde.' Lendemain : proclamation de la République." },
      { front: "Qui est Marat et quel est son rôle pendant la Révolution ?", back: "Jean-Paul Marat (1743-1793) est un médecin et journaliste révolutionnaire radical, directeur du journal L\'Ami du peuple. Il réclame sans cesse la mort des ennemis de la Révolution. Il est assassiné dans son bain par Charlotte Corday (girondine) le 13 juillet 1793. David immortalise sa mort dans un célèbre tableau." },
      { front: "Qu\'est-ce que la réaction thermidorienne (après le 9 Thermidor 1794) ?", back: "Après la chute de Robespierre (27 juillet 1794), les Thermidoriens (membres de la Convention qui l\'ont renversé) mettent fin à la Terreur : libération des prisonniers politiques, fermeture des clubs jacobins, poursuite des anciens terroristes. C\'est une phase de détente et de revanche sociale des riches contre les sans-culottes." },
      { front: "Qu\'est-ce que le Tribunal révolutionnaire ?", back: "Juridiction extraordinaire créée en mars 1793 par la Convention pour juger rapidement les ennemis de la Révolution. Il n\'existe pas de procédure normale : les accusés n\'ont presque pas de défense. Il condamne à mort Louis XVI, Marie-Antoinette, les chefs girondins et des milliers d\'autres pendant la Terreur." },
      { front: "Quelles sont les deux coalitions européennes qui menacent la France révolutionnaire ?", back: "Première coalition (1792-1797) : Autriche, Prusse, Grande-Bretagne, Espagne, Piémont contre la France. Deuxième coalition (1798-1802) : Grande-Bretagne, Autriche, Russie, Ottomans. La France révolutionnaire les repousse toutes les deux, mais ces guerres épuisent le pays et favorisent l\'ascension de Napoléon." },
      { front: "Qu\'est-ce que les assignats ?", back: "Monnaie papier créée par l\'Assemblée constituante en 1789-1790, gagée sur les biens nationaux (biens confisqués à l\'Église et aux émigrés). En raison des émissions massives, ils perdent très rapidement leur valeur (inflation galopante). Supprimés en 1796, ils illustrent les difficultés économiques de la Révolution." }
    ]
  },
  {
    id: 'quat_empire_napoleon',
    level: '4e',
    theme: 'Napoléon et l\'Empire',
    title: 'L\'Empire napoléonien et l\'Europe napoléonienne (1804-1815)',
    periode: '1804-1815',
    essential: true,
    content: {
      context: "Après le coup d\'État de Brumaire (1799) et le Consulat, Napoléon Bonaparte se fait sacrer Empereur des Français le 2 décembre 1804. Il construit un Grand Empire qui domine l\'Europe continentale à son apogée. Les guerres napoléoniennes transforment la carte de l\'Europe et diffusent les idées révolutionnaires. Mais la campagne de Russie (1812) amorce un déclin irréversible qui conduit à Waterloo (1815) et à l\'exil à Sainte-Hélène.",
      keyPoints: [
        "Le sacre de Napoléon a lieu le 2 décembre 1804 à Notre-Dame de Paris en présence du pape Pie VII. Selon la légende, Napoléon se couronne lui-même.",
        "Le Code civil (1804) unifie le droit français : égalité devant la loi, propriété privée, liberté contractuelle, mais subordination des femmes.",
        "Les victoires militaires : Austerlitz (2 décembre 1805, surnommée la bataille des Trois Empereurs) et Iéna (1806) établissent la domination napoléonienne sur l\'Europe.",
        "Le Grand Empire à son apogée (1810-1811) compte environ 70 millions d\'habitants sous domination directe ou indirecte française.",
        "Le blocus continental (1806) tente d\'affaiblir l\'Angleterre en fermant les ports européens à ses marchandises, mais nuit aussi à l\'économie française.",
        "La campagne de Russie (1812) : 600 000 soldats de la Grande Armée franchissent le Niémen, mais le désastre de la retraite (froid, tactique russe de la terre brûlée) ne laisse que moins de 100 000 survivants.",
        "Défaite de Leipzig (octobre 1813), abdication d\'avril 1814, Cent-Jours, défaite de Waterloo (18 juin 1815), exil à Sainte-Hélène où Napoléon meurt en 1821.",
      ],
      causes: [
        "Le coup d\'État de Brumaire (1799) donne à Napoléon le pouvoir, qu\'il consolide progressivement jusqu\'à l\'Empire.",
        "L\'ambition personnelle de Napoléon et le soutien d\'une armée victorieuse et loyale.",
        "La menace permanente des coalitions européennes monarchiques contre la France révolutionnaire.",
      ],
      consequences: [
        "Le Code civil napoléonien influence encore les systèmes juridiques de nombreux pays (France, Belgique, Québec, Amérique latine).",
        "Le nationalisme européen se développe en réaction à la domination française (Espagne, Prusse, Russie).",
        "Le Congrès de Vienne (1814-1815) redessinne la carte de l\'Europe et tente de restaurer l\'ordre monarchique.",
      ],
      dates: [
        { date: '2 décembre 1804', event: 'Sacre de Napoléon Ier à Notre-Dame de Paris' },
        { date: '2 décembre 1805', event: 'Victoire d\'Austerlitz — apogée militaire' },
        { date: '1806', event: 'Victoire d\'Iéna et blocus continental contre l\'Angleterre' },
        { date: '1812', event: 'Désastreuse campagne de Russie — début du déclin' },
        { date: 'Avril 1814', event: 'Abdication de Napoléon, exil à l\'île d\'Elbe' },
        { date: '18 juin 1815', event: 'Défaite de Waterloo — exil définitif à Sainte-Hélène' },
      ],
      vocabulary: ['Grand Empire', 'blocus continental', 'Code civil', 'Cent-Jours', 'Waterloo', 'Sainte-Hélène'],
      methodTips: "Pour un bilan de Napoléon, organisez votre réponse en deux colonnes : les réalisations durables (Code civil, préfets, lycées, Banque de France, concordat) et les coûts humains (guerres, 1 million de morts français, fin des libertés). La nuance est attendue au brevet."
    },
    quiz: [
      {
        question: "Quand et où Napoléon est-il sacré Empereur ?",
        options: ["À Versailles, le 14 juillet 1804", "À Notre-Dame de Paris, le 2 décembre 1804", "À Lyon, le 18 Brumaire 1804", "À Rome, le 2 décembre 1805"],
        answer: "À Notre-Dame de Paris, le 2 décembre 1804",
        explanation: "Le sacre de Napoléon Ier a lieu le 2 décembre 1804 à la cathédrale Notre-Dame de Paris, en présence du pape Pie VII. David a immortalisé la scène dans un célèbre tableau. La date est symbolique : c\'est l\'anniversaire de la victoire d\'Austerlitz un an plus tard (1805)."
      },
      {
        question: "Pourquoi la campagne de Russie de 1812 est-elle un désastre ?",
        options: ["L\'armée russe est plus nombreuse", "La tactique de la terre brûlée et l\'hiver russe anéantissent la Grande Armée", "Napoléon est blessé dès le début", "La France est attaquée simultanément par l\'Angleterre"],
        answer: "La tactique de la terre brûlée et l\'hiver russe anéantissent la Grande Armée",
        explanation: "Sur 600 000 soldats partis en juin 1812, moins de 100 000 reviennent. Les Russes pratiquent la retraite et la terre brûlée (tout détruire sur le passage de l\'ennemi). Moscou est incendiée. La retraite dans un hiver glacial est catastrophique."
      },
      {
        question: "Qu\'est-ce que le Code civil napoléonien ?",
        options: ["Le code militaire de l\'armée impériale", "Un recueil unifiant le droit civil français, encore en vigueur aujourd\'hui", "La constitution de l\'Empire", "Un traité commercial avec les pays européens"],
        answer: "Un recueil unifiant le droit civil français, encore en vigueur aujourd\'hui",
        explanation: "Le Code civil (1804) rassemble en 2 281 articles les règles du droit privé : propriété, contrats, famille, successions. Il remplace la multitude de coutumes locales de l\'Ancien Régime et influence les systèmes juridiques du monde entier."
      },
      {
        question: "Qu\'est-ce que la Confédération du Rhin (1806) ?",
        options: ["Une alliance entre la France et la Prusse contre l\'Autriche", "Un regroupement d\'États allemands placés sous la protection de Napoléon, mettant fin au Saint Empire romain germanique", "Un traité commercial entre les États rhénans", "Une province française conquise en Allemagne"],
        answer: "Un regroupement d\'États allemands placés sous la protection de Napoléon, mettant fin au Saint Empire romain germanique",
        explanation: "En 1806, Napoléon regroupe la plupart des États allemands (sauf Prusse et Autriche) dans la Confédération du Rhin, sous sa protection. L\'Empereur François II d\'Autriche dissout alors le Saint Empire romain germanique (qui durait depuis 962). Ces États doivent fournir des contingents à la Grande Armée et adopter le Code civil."
      },
      {
        question: "Quel est le rôle de la propagande dans le régime napoléonien ?",
        options: ["Napoléon laisse une liberté totale à la presse", "La presse est strictement censurée et la propagande exalte les victoires et la personne de Napoléon", "Seule la presse catholique est autorisée", "La propagande est interdite sous l\'Empire"],
        answer: "La presse est strictement censurée et la propagande exalte les victoires et la personne de Napoléon",
        explanation: "Napoléon contrôle étroitement la presse (de 73 journaux en 1799 à 4 en 1814), la peinture (David peint le Sacre, Gros les batailles), le théâtre et l\'enseignement. Les bulletins de la Grande Armée glorifient les victoires et minimisent les défaites. Le buste de Napoléon remplace les symboles républicains dans les édifices publics."
      },
      {
        question: "Qu\'est-ce que le système des 'rois frères' de Napoléon ?",
        options: ["Un système de partage du pouvoir entre les maréchaux de l\'Empire", "Napoléon place ses frères et beaux-frères sur les trônes des États conquis", "Les frères de Napoléon forment le gouvernement de l\'Empire", "Un accord dynastique avec les monarchies européennes"],
        answer: "Napoléon place ses frères et beaux-frères sur les trônes des États conquis",
        explanation: "Napoléon crée une véritable 'monarchie familiale' européenne : son frère Joseph reçoit Naples puis l\'Espagne, son frère Louis reçoit la Hollande, son frère Jérôme la Westphalie, son beau-frère Murat reçoit Naples après Joseph. Ce système renforce le contrôle de l\'Empire mais crée des tensions quand les 'rois frères' résistent aux ordres de Napoléon."
      },
      {
        question: "Comment Napoléon est-il finalement vaincu en 1813-1814 ?",
        options: ["Par une seule armée russe qui envahit la France", "Par une coalition de l\'Autriche, Prusse, Russie et Grande-Bretagne qui le prend en tenaille", "Par une révolution intérieure en France", "Par la trahison de ses maréchaux à Waterloo"],
        answer: "Par une coalition de l\'Autriche, Prusse, Russie et Grande-Bretagne qui le prend en tenaille",
        explanation: "Après le désastre de Russie (1812), une 6e coalition se forme (Russie, Prusse, Autriche, Grande-Bretagne). La bataille de Leipzig (16-19 octobre 1813, 'bataille des Nations') rassemble 500 000 soldats : Napoléon est écrasé. Les alliés envahissent la France début 1814. Napoléon abdique le 11 avril 1814 et est exilé à l\'île d\'Elbe."
      },
      {
        question: "Qu\'est-ce que la 'légende napoléonienne' ?",
        options: ["Les batailles inventées par les propagandistes de Napoléon", "L\'image héroïque de Napoléon construite par lui-même à Sainte-Hélène et développée après sa mort", "Les rumeurs sur la vie privée de Napoléon", "Les mensonges de ses ennemis sur ses défaites"],
        answer: "L\'image héroïque de Napoléon construite par lui-même à Sainte-Hélène et développée après sa mort",
        explanation: "Exilé à Sainte-Hélène (1815-1821), Napoléon dicte ses Mémoires (Mémorial de Sainte-Hélène), construisant une image de lui-même comme héros de la Révolution, père de l\'égalité et martyr des monarchies. Cette 'légende napoléonienne' alimente le bonapartisme et inspire les artistes romantiques (Hugo, Géricault, Berlioz)."
      },
      {
        question: "Quelle est la conséquence du Congrès de Vienne (1815) pour la France ?",
        options: ["La France perd toutes ses colonies", "La France revient à ses frontières de 1792 mais reste une grande puissance", "La France est divisée entre les vainqueurs", "La France doit payer des réparations de guerre et perdre ses territoires métropolitains"],
        answer: "La France revient à ses frontières de 1792 mais reste une grande puissance",
        explanation: "Le Congrès de Vienne (1814-1815) redessine la carte de l\'Europe. La France, représentée par Talleyrand, revient à ses frontières de 1792 (elle perd ses conquêtes révolutionnaires) mais reste une grande puissance. La Restauration monarchique est imposée avec Louis XVIII. L\'Europe est reorganisée pour contenir toute future puissance hégémonique française."
      },
      {
        question: "Qu\'est-ce que le nationalisme qui se développe face à Napoléon ?",
        options: ["Le nationalisme français soutenu par les conquêtes napoléoniennes", "Les mouvements de résistance nationale (Espagne, Prusse, Russie) contre la domination française", "L\'idée de réunir tous les peuples latins sous la domination française", "Le mouvement culturel qui glorifie la France napoléonienne"],
        answer: "Les mouvements de résistance nationale (Espagne, Prusse, Russie) contre la domination française",
        explanation: "Paradoxalement, l\'Empire napoléonien stimule le nationalisme des peuples conquis. En Espagne : la guerra (guérilla) contre l\'occupant français. En Prusse : les réformes militaires de Scharnhorst et Gneisenau pour résister à la France. En Allemagne : les écrits de Fichte (Discours à la nation allemande, 1808) appellent à la résistance culturelle. La domination française crée des identités nationales en réaction."
      }
    ],
    flashcards: [
      { front: "Qu\'est-ce que le blocus continental ?", back: "Mesure de Napoléon (1806) interdisant aux États européens sous domination française de commercer avec l\'Angleterre. Objectif : affaiblir l\'économie britannique. En pratique, il nuit aussi aux économies européennes et est difficile à faire respecter." },
      { front: "Qu\'est-ce que les Cent-Jours ?", back: "Période du 20 mars au 22 juin 1815 : Napoléon s\'échappe de l\'île d\'Elbe, reprend le pouvoir en France, tente de reformer une armée mais est définitivement vaincu à Waterloo (18 juin 1815)." },
      { front: "Où Napoléon meurt-il et quand ?", back: "Napoléon meurt le 5 mai 1821 à Sainte-Hélène, île britannique isolée dans l\'Atlantique Sud, où il est exilé après Waterloo. Il est mort à 51 ans, probablement d\'un cancer de l\'estomac." },
      { front: "Qu\'est-ce que la bataille d\'Iéna (1806) ?", back: "Victoire décisive de Napoléon sur la Prusse le 14 octobre 1806. L\'armée prussienne, réputée invincible depuis Frédéric II, est écrasée en une seule journée. Napoléon entre à Berlin en vainqueur. Cette défaite humiliante provoque une réforme profonde de l\'armée prussienne et le développement du nationalisme allemand." },
      { front: "Qu\'est-ce que le retour des cendres (1840) ?", back: "En 1840, sous la Monarchie de Juillet, Louis-Philippe fait rapatrier le corps de Napoléon de Sainte-Hélène vers Paris. Les cendres sont placées aux Invalides lors d\'une cérémonie grandiose. Ce geste politique relance le mythe napoléonien et renforce le bonapartisme, contribuant à l\'élection de Louis-Napoléon Bonaparte en 1848." },
      { front: "Qu\'est-ce que le système préfectoral napoléonien ?", back: "Créé par la loi du 28 pluviôse an VIII (17 février 1800), le système préfectoral place un préfet nommé par le gouvernement à la tête de chaque département. Le préfet représente l\'État, applique les lois et surveille l\'ordre public. Ce système centralise l\'administration et perdure aujourd\'hui en France." },
      { front: "Quel rôle joue la Pologne dans les guerres napoléoniennes ?", back: "Napoléon crée le Grand-Duché de Varsovie en 1807 (traité de Tilsit), ravivant les espoirs d\'indépendance polonaise. Les Polonais constituent la cavalerie légère de la Grande Armée (ulhans, lanciers). Mais après 1815, la Pologne est de nouveau partagée entre Russie, Prusse et Autriche." },
      { front: "Qu\'est-ce que la politique napoléonienne envers les juifs ?", back: "Napoléon réunit en 1806-1807 un Grand Sanhédrin (assemblée de rabbins) pour intégrer les juifs comme citoyens français. Il ouvre aux juifs les professions et l\'armée, dans le cadre de l\'émancipation révolutionnaire. Le Décret infâme (1808) impose cependant des restrictions commerciales temporaires aux juifs." },
      { front: "Qu\'est-ce que la bataille de Trafalgar et pourquoi est-elle décisive ?", back: "Bataille navale (21 octobre 1805) au large de l\'Espagne. L\'amiral Nelson écrase la flotte franco-espagnole. Napoléon ne peut plus envisager d\'envahir l\'Angleterre par voie maritime. La domination maritime britannique est assurée pour tout le XIXe siècle. Nelson meurt au combat mais devient un héros national britannique." }
    ]
  },
  {
    id: 'quat_traite_esclaves',
    level: '4e',
    theme: 'Traite et esclavage',
    title: 'La traite des esclaves et l\'abolitionnisme (XVIe-XIXe siècle)',
    periode: 'XVIe-XIXe siècle',
    essential: true,
    content: {
      context: "La traite négrière atlantique est l\'un des crimes les plus massifs de l\'histoire moderne. Pendant quatre siècles (XVIe-XIXe), environ 12 millions d\'Africains sont arrachés à leurs familles, traversent l\'Atlantique dans des conditions inhumaines (le \'Middle Passage\'), et sont réduits en esclavage dans les plantations des Amériques pour produire sucre, café et coton. Le combat abolitionniste, mené par des philosophes, des esclaves et des militants, aboutit à deux abolitions françaises : 1794 (annulée par Napoléon) et 1848 (définitive, grâce à Victor Schoelcher).",
      keyPoints: [
        "Le commerce triangulaire lie trois continents : les navires européens apportent des marchandises en Afrique, échangent contre des esclaves, transportent ces esclaves en Amérique, puis reviennent avec des produits coloniaux (sucre, café, coton).",
        "Le \'Middle Passage\' (traversée de l\'Atlantique) est une traversée de 2 à 3 mois dans des conditions inhumaines : entassés dans les cales, enchaînés. Environ 2 millions de déportés meurent pendant la traversée.",
        "12 millions d\'Africains sont déportés sur 4 siècles. Les principales destinations : Brésil, Caraïbes, Amérique du Nord.",
        "Le Code Noir (1685, Louis XIV) réglemente l\'esclavage dans les colonies françaises : les esclaves sont des \'biens meubles\' (propriété de leurs maîtres).",
        "Les résistances existent : le marronnage (fuite dans les forêts), la révolte de Haïti menée par Toussaint Louverture (1791) aboutit à l\'indépendance en 1804 — première République noire du monde.",
        "La 1ère abolition française en 1794 est annulée par Napoléon en 1802. La 2ème abolition définitive est prononcée le 27 avril 1848 par Victor Schoelcher.",
      ],
      causes: [
        "La demande de main-d\'œuvre dans les plantations sucrières, caféières et cotonnières des colonies américaines.",
        "Le profit considérable généré par la traite et l\'esclavage pour les négociants européens (Bordeaux, Nantes, Liverpool).",
        "La désorganisation des sociétés africaines par les guerres de capture favorise la traite.",
      ],
      consequences: [
        "Un traumatisme historique immense pour les populations africaines et afro-descendantes, dont les effets perdurent.",
        "L\'enrichissement des ports négriers européens (Nantes, Bordeaux, Bristol) et le développement du capitalisme commercial.",
        "La Haïti indépendante (1804) devient un symbole de résistance mais est ensuite isolée et appauvrie par les puissances occidentales.",
      ],
      dates: [
        { date: '1685', event: 'Code Noir de Louis XIV — réglementation de l\'esclavage dans les colonies françaises' },
        { date: '1791', event: 'Révolte de Haïti menée par Toussaint Louverture' },
        { date: '1794', event: 'Première abolition de l\'esclavage par la Convention — annulée par Napoléon en 1802' },
        { date: '1804', event: 'Indépendance d\'Haïti — première République noire du monde' },
        { date: '27 avril 1848', event: 'Abolition définitive de l\'esclavage par Victor Schoelcher' },
      ],
      vocabulary: ['commerce triangulaire', 'Middle Passage', 'marronnage', 'Code Noir', 'abolitionnisme', 'Schoelcher'],
      methodTips: "Pour analyser la traite, distinguez bien les trois acteurs : les négociants européens (profits), les royaumes africains partenaires (collaboration involontaire ou intéressée), et les esclaves eux-mêmes (résistances, cultures). Évitez la vision passive des victimes : les esclaves résistent sous de nombreuses formes."
    },
    quiz: [
      {
        question: "Qu\'est-ce que le commerce triangulaire ?",
        options: ["Un accord commercial entre France, Espagne et Portugal", "Un circuit reliant l\'Europe, l\'Afrique et les Amériques par la traite des esclaves", "Un traité de libre-échange au XVIIIe siècle", "Un réseau d\'échanges entre trois ports européens"],
        answer: "Un circuit reliant l\'Europe, l\'Afrique et les Amériques par la traite des esclaves",
        explanation: "Le commerce triangulaire : 1) Europe → Afrique (marchandises échangées contre des esclaves) ; 2) Afrique → Amériques (traversée des esclaves : Middle Passage) ; 3) Amériques → Europe (produits coloniaux : sucre, café, coton). Ce système enrichit les ports négriers européens comme Nantes et Bordeaux."
      },
      {
        question: "Qui est Victor Schoelcher et quel est son rôle ?",
        options: ["Un général napoléonien qui conquiert les Antilles", "Un négrier bordelais du XVIIIe siècle", "L\'homme politique qui obtient l\'abolition définitive de l\'esclavage en France en 1848", "Un philosophe des Lumières qui critique l\'esclavage"],
        answer: "L\'homme politique qui obtient l\'abolition définitive de l\'esclavage en France en 1848",
        explanation: "Victor Schoelcher (1804-1893), sous-secrétaire d\'État à la Marine dans le gouvernement provisoire de la IIe République, rédige le décret d\'abolition signé le 27 avril 1848. Il libère environ 250 000 esclaves dans les colonies françaises."
      },
      {
        question: "Combien d\'Africains ont été déportés au total pendant la traite négrière atlantique ?",
        options: ["Environ 1 million", "Environ 5 millions", "Environ 12 millions", "Environ 30 millions"],
        answer: "Environ 12 millions",
        explanation: "On estime que 12 à 13 millions d\'Africains ont été déportés en esclavage vers les Amériques entre le XVIe et le XIXe siècle. Environ 2 millions sont morts pendant la traversée (Middle Passage). C\'est l\'une des plus grandes déportations de l\'histoire humaine."
      },
      {
        question: "Quels sont les principaux ports négriers français ?",
        options: ["Paris, Lyon, Marseille", "Nantes, Bordeaux, La Rochelle et Le Havre", "Brest, Cherbourg, Dunkerque", "Toulon, Nice, Perpignan"],
        answer: "Nantes, Bordeaux, La Rochelle et Le Havre",
        explanation: "Nantes est le principal port négrier français : environ 1 700 expéditions négrières au XVIIIe siècle. Bordeaux, La Rochelle et Le Havre participent aussi activement. Ces ports s\'enrichissent considérablement grâce à la traite et au commerce colonial. Les hôtels particuliers et les belles demeures de ces villes témoignent de cette prospérité."
      },
      {
        question: "Qu\'est-ce que le Code Noir (1685) et que prévoit-il ?",
        options: ["Un code militaire pour les soldats noirs dans l\'armée française", "Une ordonnance royale de Louis XIV définissant le statut des esclaves dans les colonies françaises", "Un traité international interdisant la traite négrière", "Une loi accordant la liberté aux esclaves convertis au catholicisme"],
        answer: "Une ordonnance royale de Louis XIV définissant le statut des esclaves dans les colonies françaises",
        explanation: "Le Code Noir (mars 1685) est une ordonnance de Louis XIV qui réglemente l\'esclavage dans les colonies françaises. Il définit les esclaves comme des \'biens meubles\' (propriété mobilière), autorise le maître à punir corporellement, oblige à convertir les esclaves au catholicisme, et prévoit des peines sévères en cas de fuite ou de révolte."
      },
      {
        question: "Qu\'est-ce que la 'révolte de Saint-Domingue' (1791) et son résultat ?",
        options: ["Une révolte de colons blancs contre la métropole française", "La révolte des esclaves de Haïti qui aboutit à la première République noire indépendante (1804)", "Une révolte d\'esclaves réprimée sans suite à Cuba", "Un soulèvement de métis réclamant l\'égalité des droits"],
        answer: "La révolte des esclaves de Haïti qui aboutit à la première République noire indépendante (1804)",
        explanation: "Le 22 août 1791, la révolte des esclaves de Saint-Domingue (actuelle Haïti) commence. Menée par Toussaint Louverture puis par Dessalines, elle aboutit à l\'indépendance le 1er janvier 1804. C\'est la première et unique révolte d\'esclaves couronnée de succès dans l\'histoire, créant la première République noire du monde."
      },
      {
        question: "Pourquoi Napoléon rétablit-il l\'esclavage en 1802 ?",
        options: ["Pour obéir à une demande du pape", "Pour des raisons économiques : récupérer les colonies sucrières et leur main-d\'œuvre servile", "Pour punir les esclaves qui s\'étaient révoltés en Haïti", "Par idéologie raciste personnelle"],
        answer: "Pour des raisons économiques : récupérer les colonies sucrières et leur main-d\'œuvre servile",
        explanation: "En 1802, Napoléon rétablit l\'esclavage dans les colonies françaises (annulant l\'abolition de 1794) pour des raisons économiques : récupérer les colonies sucrières (Guadeloupe, Martinique) et leurs revenus. Il envoie une expédition en Haïti pour rétablir l\'esclavage, mais elle échoue face à la résistance de Dessalines. L\'esclavage ne sera définitivement aboli qu\'en 1848."
      },
      {
        question: "Quel est le rôle de l\'abbé Grégoire dans l\'abolitionnisme ?",
        options: ["Il rédige le Code Noir en 1685", "Il est le premier à demander l\'abolition de l\'esclavage à l\'Assemblée nationale constituante en 1789", "Il dirige la révolte d\'Haïti avec Toussaint Louverture", "Il fonde la Société des Amis des Noirs en 1788"],
        answer: "Il est le premier à demander l\'abolition de l\'esclavage à l\'Assemblée nationale constituante en 1789",
        explanation: "L\'abbé Henri Grégoire (1750-1831) est l\'un des premiers abolitionnistes français. En 1789, il est parmi les premiers à réclamer l\'égalité des droits pour les gens de couleur libres dans les colonies. Il publie en 1808 'De la littérature des Nègres', défendant l\'égalité intellectuelle des Noirs. Il est une figure centrale de l\'abolitionnisme français."
      },
      {
        question: "Qu\'est-ce que la Société des Amis des Noirs (1788) ?",
        options: ["Une société secrète d\'esclaves fugitifs", "Une association abolitionniste française fondée par Brissot, inspirée des quakers anglais", "Un syndicat de travailleurs noirs libres dans les ports français", "Une organisation missionnaire catholique dans les colonies"],
        answer: "Une association abolitionniste française fondée par Brissot, inspirée des quakers anglais",
        explanation: "La Société des Amis des Noirs est fondée à Paris en 1788 par Jacques-Pierre Brissot, inspirée de la Society for the Abolition of the Slave Trade britannique. Elle regroupe des philosophes des Lumières (La Fayette, Condorcet, Mirabeau) et milite pour l\'abolition de la traite puis de l\'esclavage. Elle est active jusqu\'en 1793."
      },
      {
        question: "Quelle est la différence entre la traite transaharienne et la traite atlantique ?",
        options: ["La traite transaharienne est plus récente que la traite atlantique", "La traite transaharienne existait depuis l\'Antiquité vers le Maghreb et le Moyen-Orient ; la traite atlantique est européenne (XVe-XIXe s.) vers les Amériques", "La traite transaharienne était pratiquée par les Européens", "Il n\'y a pas de différence significative entre les deux"],
        answer: "La traite transaharienne existait depuis l\'Antiquité vers le Maghreb et le Moyen-Orient ; la traite atlantique est européenne (XVe-XIXe s.) vers les Amériques",
        explanation: "La traite transaharienne (ou orientale) a déporté des millions d\'Africains vers l\'Afrique du Nord, le Moyen-Orient et l\'Asie depuis l\'Antiquité jusqu\'au XIXe siècle. La traite atlantique, spécifiquement européenne, a débuté au XVe siècle et a déporté ~12 millions d\'Africains vers les Amériques. Les deux systèmes ont coexisté pendant plusieurs siècles."
      }
    ],
    flashcards: [
      { front: "Qu\'est-ce que le marronnage ?", back: "Forme de résistance des esclaves consistant à fuir la plantation pour se réfugier dans les zones sauvages (forêts, montagnes). Les marrons forment des communautés libres. Très réprimé par les maîtres." },
      { front: "Qui est Toussaint Louverture ?", back: "Esclave affranchi haïtien (1743-1803) qui dirige la révolte des esclaves de Saint-Domingue (1791). Il abolit l\'esclavage localement et tente de négocier avec Napoléon. Arrêté et mort en prison, il est le père de l\'indépendance haïtienne (1804)." },
      { front: "Qu\'est-ce que le Code Noir (1685) ?", back: "Ordonnance de Louis XIV régissant l\'esclavage dans les colonies françaises. Elle définit les esclaves comme des \'biens meubles\' (propriété), autorise certaines protections minimales mais légitime la violence des maîtres." },
      { front: "Qu\'est-ce que le 'Middle Passage' ?", back: "La traversée de l\'Atlantique par les navires négriers, entre l\'Afrique et les Amériques. Elle dure 2 à 3 mois dans des conditions inhumaines : esclaves enchaînés dans les cales, entassés, nourriture insuffisante. Environ 2 millions de déportés (sur 12 millions) meurent pendant cette traversée." },
      { front: "Quel est le premier pays à abolir la traite négrière ?", back: "Le Danemark abolit la traite en 1792. La Grande-Bretagne suit en 1807 (Slave Trade Act) et utilise sa marine pour intercepter les navires négriers. La France abolit la traite en 1815 (mais continue clandestinement). Le Brésil ne met fin à la traite qu\'en 1850." },
      { front: "Quelles sont les principales colonies françaises esclavagistes au XVIIIe siècle ?", back: "Saint-Domingue (actuelle Haïti) est la plus productive : elle produit la moitié du sucre et du café mondial en 1789, grâce à 500 000 esclaves. La Martinique et la Guadeloupe produisent aussi sucre et café. Ces colonies sont les principales sources de richesse de la France au XVIIIe siècle." },
      { front: "Qu\'est-ce que l\'indépendance d\'Haïti (1804) représente historiquement ?", back: "Le 1er janvier 1804, Haïti proclame son indépendance sous Jean-Jacques Dessalines : c\'est la première République noire du monde et la seule révolte d\'esclaves victorieuse de l\'histoire. Cette indépendance provoque la crainte des puissances esclavagistes (États-Unis, France) qui isolent diplomatiquement et économiquement Haïti." },
      { front: "Quel est le bilan économique de la traite pour les ports français ?", back: "La traite enrichit considérablement les ports négriers, notamment Nantes (1 700 expéditions), Bordeaux et La Rochelle. Les profits permettent de financer l\'industrie naissante et les grandes demeures de l\'époque. Certains historiens estiment que la traite et l\'esclavage colonial ont contribué à financer la Révolution industrielle européenne." },
      { front: "Qu\'est-ce que les droits des gens de couleur libres dans les colonies ?", back: "Dans les colonies françaises, il existait une catégorie intermédiaire : les 'gens de couleur libres' (affranchis ou métis). Ils étaient libres mais discriminés : ils ne pouvaient pas exercer certaines professions, siéger avec les Blancs, ni voter. La Révolution française leur accorde l\'égalité en 1792 (décret du 4 avril 1792), avant l\'abolition de l\'esclavage." }
    ]
  },
  {
    id: 'quat_revolutions_1848',
    level: '4e',
    theme: 'Révolutions de 1848',
    title: 'Les révolutions de 1848 et le Printemps des peuples',
    periode: '1848-1852',
    essential: false,
    content: {
      context: "En 1848, une vague révolutionnaire balaie toute l\'Europe : c\'est le \'Printemps des peuples\'. Alimentées par une crise économique sévère (mauvaises récoltes 1846-1847), des aspirations libérales et nationales, des insurrections éclatent à Paris, Vienne, Berlin, Budapest et Milan. Si les révolutions sont finalement écrasées partout en Europe, la France connaît la IIe République, avant que Louis-Napoléon Bonaparte ne la renverse par un coup d\'État le 2 décembre 1851.",
      keyPoints: [
        "La crise économique de 1846-1847 (mauvaises récoltes → hausse du pain, chômage) crée les conditions d\'une explosion sociale.",
        "La révolution de février 1848 à Paris renverse le roi Louis-Philippe : les barricades contraignent à son abdication. La IIe République est proclamée.",
        "La IIe République adopte des mesures importantes : suffrage universel masculin, abolition définitive de l\'esclavage (Schoelcher), abolition de la peine de mort en matière politique.",
        "Le \'Printemps des peuples\' : des révolutions éclatent à Vienne, Berlin, Budapest, Milan, Prague — mais toutes sont écrasées par les armées conservatrices avant la fin 1848.",
        "Louis-Napoléon Bonaparte est élu président de la République au suffrage universel en décembre 1848 avec 75 % des voix.",
        "Le coup d\'État du 2 décembre 1851 (anniversaire d\'Austerlitz) et le plébiscite qui suit aboutissent à la proclamation du Second Empire le 2 décembre 1852.",
      ],
      causes: [
        "Crise économique grave : mauvaises récoltes 1846-1847, hausse du prix du pain, chômage urbain.",
        "Aspirations libérales et nationalistes non satisfaites depuis le Congrès de Vienne (1815).",
        "Rejet des régimes conservateurs mis en place après 1815.",
      ],
      consequences: [
        "Malgré l\'échec général des révolutions, les idées libérales et nationales progressent durablement en Europe.",
        "La IIe République française est une étape importante dans l\'histoire démocratique (suffrage universel masculin, abolition de l\'esclavage).",
        "Le Second Empire inaugure 18 ans d\'autoritarisme en France (1852-1870).",
      ],
      dates: [
        { date: 'Février 1848', event: 'Révolution à Paris — abdication de Louis-Philippe, proclamation de la IIe République' },
        { date: '27 avril 1848', event: 'Abolition définitive de l\'esclavage par Schoelcher' },
        { date: 'Décembre 1848', event: 'Élection de Louis-Napoléon Bonaparte à la présidence avec 75 % des voix' },
        { date: '2 décembre 1851', event: 'Coup d\'État de Louis-Napoléon Bonaparte' },
        { date: '2 décembre 1852', event: 'Proclamation du Second Empire — Napoléon III Empereur' },
      ],
      vocabulary: ['Printemps des peuples', 'suffrage universel', 'IIe République', 'coup d\'État', 'Second Empire', 'Louis-Napoléon'],
      methodTips: "Un point souvent confondu : Louis-Napoléon Bonaparte (Napoléon III) n\'est pas le fils de Napoléon Ier mais son neveu. Il est d\'abord élu président démocratiquement, puis se fait Empereur par coup d\'État. Cette trajectoire illustre le risque pour une République d\'élire un homme qui veut la renverser."
    },
    quiz: [
      {
        question: "Qui renverse la révolution de 1848 en France pour devenir Empereur ?",
        options: ["Louis-Philippe", "Napoléon Ier", "Louis-Napoléon Bonaparte (Napoléon III)", "Victor Hugo"],
        answer: "Louis-Napoléon Bonaparte (Napoléon III)",
        explanation: "Louis-Napoléon Bonaparte, neveu de Napoléon Ier, est élu président de la IIe République en décembre 1848. Il effectue un coup d\'État le 2 décembre 1851 et se fait proclamer Napoléon III, Empereur des Français, le 2 décembre 1852."
      },
      {
        question: "Qu\'est-ce que le \'Printemps des peuples\' de 1848 ?",
        options: ["Un festival artistique européen", "Une vague révolutionnaire simultanée dans toute l\'Europe", "Le nom d\'une coalition militaire contre la Russie", "Un traité de paix signé au printemps 1848"],
        answer: "Une vague révolutionnaire simultanée dans toute l\'Europe",
        explanation: "En 1848, des révolutions éclatent simultanément dans toute l\'Europe : Paris, Vienne, Berlin, Budapest, Milan, Prague. Ces mouvements réclament des libertés politiques et des droits nationaux. Presque toutes sont réprimées avant la fin de l\'année, mais elles marquent un tournant dans l\'histoire européenne."
      },
      {
        question: "Quelle mesure sociale importante est adoptée par la IIe République française en 1848 ?",
        options: ["L\'abolition de la peine de mort", "L\'abolition définitive de l\'esclavage", "Le droit de vote des femmes", "La journée de 8 heures de travail"],
        answer: "L\'abolition définitive de l\'esclavage",
        explanation: "Le 27 avril 1848, le gouvernement provisoire de la IIe République, sous l\'impulsion de Victor Schoelcher, abolit définitivement l\'esclavage dans les colonies françaises. Cette abolition libère environ 250 000 personnes."
      },
      {
        question: "Quelle est la cause économique principale des révolutions de 1848 ?",
        options: ["La montée des impôts par les gouvernements conservateurs", "La crise économique de 1846-1847 : mauvaises récoltes, hausse du pain, chômage urbain", "L\'effondrement du commerce colonial après 1815", "La concurrence des produits industriels anglais en Europe"],
        answer: "La crise économique de 1846-1847 : mauvaises récoltes, hausse du pain, chômage urbain",
        explanation: "Les révolutions de 1848 éclatent dans un contexte de grave crise économique : les récoltes désastreuses de 1846-1847 provoquent une hausse du prix du pain (principale nourriture des pauvres), combinée à une crise industrielle qui gonfle le chômage urbain. Cette misère populaire crée les conditions d\'une explosion sociale dans toute l\'Europe."
      },
      {
        question: "Où les révolutions de 1848 éclatent-elles en dehors de France ?",
        options: ["Seulement en France et en Italie", "À Vienne, Berlin, Budapest, Milan, Prague, et dans toute l\'Europe continentale", "Seulement en Europe de l\'Est", "En Angleterre, Russie et Espagne principalement"],
        answer: "À Vienne, Berlin, Budapest, Milan, Prague, et dans toute l\'Europe continentale",
        explanation: "En 1848, des révolutions éclatent simultanément dans presque toute l\'Europe : Paris (février), Vienne et Berlin (mars), Budapest, Milan, Venise, Prague, Cracovie, Varsovie. Seules la Grande-Bretagne (à cause des réformes du chartisme) et la Russie (répression préventive du tsar) restent à l\'écart du mouvement."
      },
      {
        question: "Qu\'est-ce que les ateliers nationaux de la IIe République ?",
        options: ["Des usines d\'État créées pour concurrencer les usines privées", "Un programme d\'emploi public créé en février 1848 pour lutter contre le chômage, fermé en juin 1848", "Des manufactures d\'armement pour équiper l\'armée républicaine", "Des ateliers de formation professionnelle pour les ouvriers"],
        answer: "Un programme d\'emploi public créé en février 1848 pour lutter contre le chômage, fermé en juin 1848",
        explanation: "Les ateliers nationaux sont créés en février 1848 par le gouvernement provisoire pour employer les chômeurs parisiens (jusqu\'à 100 000 personnes). Leur fermeture en juin 1848 provoque l\'insurrection des 'journées de juin' (23-26 juin), brutalement réprimée par le général Cavaignac : ~3 000 morts. C\'est la première grande confrontation entre la bourgeoisie républicaine et le prolétariat."
      },
      {
        question: "Pourquoi les révolutions de 1848 échouent-elles dans toute l\'Europe ?",
        options: ["Parce que les révolutionnaires manquaient d\'armes", "Parce que les armées restent fidèles aux souverains, les révolutionnaires sont divisés et les paysans souvent conservateurs", "Parce que la Grande-Bretagne intervient militairement pour écraser les révolutions", "Parce que Napoléon III envahit les pays révolutionnaires"],
        answer: "Parce que les armées restent fidèles aux souverains, les révolutionnaires sont divisés et les paysans souvent conservateurs",
        explanation: "Les révolutions de 1848 échouent pour plusieurs raisons : 1) les armées restent fidèles aux monarques ; 2) les révolutionnaires sont divisés entre libéraux bourgeois (veulent une constitution) et radicaux socialistes (veulent des réformes sociales) ; 3) les paysans, majoritaires, sont souvent conservateurs ; 4) la Russie aide l\'Autriche à écraser la révolution hongroise."
      },
      {
        question: "Quelle est la signification du suffrage universel masculin instauré en France en 1848 ?",
        options: ["Tous les Français, hommes et femmes, peuvent voter", "Tous les hommes français majeurs peuvent voter, sans condition de fortune", "Seuls les hommes ayant un emploi peuvent voter", "Le suffrage est accordé à tous les hommes après un examen d\'alphabétisation"],
        answer: "Tous les hommes français majeurs peuvent voter, sans condition de fortune",
        explanation: "Le suffrage universel masculin, instauré par la IIe République le 5 mars 1848, permet à tous les hommes français âgés de 21 ans et plus de voter, sans condition de richesse (contrairement au suffrage censitaire de la Monarchie de Juillet). Cela passe d\'environ 250 000 électeurs à plus de 9 millions. Le suffrage féminin n\'est accordé qu\'en 1944."
      },
      {
        question: "Qu\'est-ce que le coup d\'État du 2 décembre 1851 ?",
        options: ["Le coup d\'État par lequel Napoléon Ier prend le pouvoir en 1799", "Le coup de force de Louis-Napoléon Bonaparte qui dissout l\'Assemblée et se maintient au pouvoir", "Le renversement de Louis-Napoléon par le Parlement", "L\'annexion de la Savoie à la France"],
        answer: "Le coup de force de Louis-Napoléon Bonaparte qui dissout l\'Assemblée et se maintient au pouvoir",
        explanation: "Le 2 décembre 1851 (anniversaire d\'Austerlitz et du sacre de Napoléon Ier), Louis-Napoléon Bonaparte dissout l\'Assemblée nationale par la force, arrête ses opposants, et organise un plébiscite qui approuve ses actes à 92 %. Un an plus tard (2 décembre 1852), il se proclame Napoléon III, Empereur des Français."
      },
      {
        question: "Qu\'est-ce que la révolution de 1848 en Autriche remet en cause ?",
        options: ["La domination française en Europe centrale", "La domination des Habsbourg sur les peuples non-allemands (Hongrois, Tchèques, Italiens) qui réclament leur autonomie nationale", "La puissance de l\'Église catholique en Autriche", "La politique économique protectionniste de Vienne"],
        answer: "La domination des Habsbourg sur les peuples non-allemands (Hongrois, Tchèques, Italiens) qui réclament leur autonomie nationale",
        explanation: "La révolution de 1848 en Autriche est aussi une révolution nationale : les Hongrois (menés par Kossuth) proclament leur indépendance, les Tchèques réclament l\'autonomie, les Italiens de Lombardie-Vénétie se soulèvent. L\'Empire autrichien est menacé d\'éclatement. Le tsar Nicolas Ier de Russie envoie 200 000 soldats pour écraser la révolution hongroise."
      }
    ],
    flashcards: [
      { front: "Pourquoi Louis-Napoléon Bonaparte est-il élu président en 1848 ?", back: "Il bénéficie du \'mythe napoléonien\' dans les campagnes et du vote des paysans qui admirent le souvenir de Napoléon Ier. Avec 75 % des voix au suffrage universel masculin, il écrase ses concurrents républicains." },
      { front: "Qu\'est-ce que le suffrage universel masculin ?", back: "Droit de vote accordé à tous les hommes majeurs, sans condition de fortune ni d\'instruction. Instauré en France par la IIe République en 1848. Les femmes françaises n\'obtiennent le droit de vote qu\'en 1944." },
      { front: "Pourquoi les révolutions de 1848 échouent-elles en Europe ?", back: "Les armées restent fidèles aux souverains, les révolutionnaires sont divisés (libéraux vs socialistes, nationalités différentes), les paysans sont souvent conservateurs. Seule la France maintient un régime républicain (mais Napoléon III le renverse en 1852)." },
      { front: "Qu\'est-ce que le gouvernement provisoire de février 1848 en France ?", back: "Gouvernement formé le 24 février 1848 après la révolution de Paris et l\'abdication de Louis-Philippe. Il comprend des républicains modérés (Lamartine) et des socialistes (Louis Blanc). Il proclame la IIe République, instaure le suffrage universel masculin, abolit l\'esclavage et crée les ateliers nationaux." },
      { front: "Qui est Lajos Kossuth et quel est son rôle en 1848 ?", back: "Lajos Kossuth (1802-1894) est le leader de la révolution hongroise de 1848. Il proclame l\'indépendance de la Hongrie vis-à-vis de l\'Autriche en avril 1849. La révolte est écrasée en août 1849 par les armées autrichiennes et russes. Kossuth s\'exile et devient un symbole du nationalisme européen." },
      { front: "Qu\'est-ce que le Second Empire de Napoléon III (1852-1870) ?", back: "Régime politique fondé par Louis-Napoléon Bonaparte après son coup d\'État (1851). Divisé en deux phases : Empire autoritaire (1852-1860 : presse censurée, opposition réprimée) et Empire libéral (1860-1870 : libertés progressivement accordées). Il se termine par la défaite de Sedan (1870) face à la Prusse." },
      { front: "Qu\'est-ce que le Risorgimento italien et son lien avec 1848 ?", back: "Le Risorgimento ('résurrection') est le mouvement de réunification et d\'indépendance italienne au XIXe siècle. En 1848, les révolutions de Milan, Venise et Rome visent à expulser l\'Autriche. Elles échouent mais préparent l\'unification italienne, réalisée en 1861 sous Victor-Emmanuel II et le comte de Cavour." },
      { front: "Quelle est la différence entre libéraux et socialistes en 1848 ?", back: "Les libéraux bourgeois de 1848 veulent des droits politiques (constitution, liberté de presse, parlement) mais refusent de toucher à la propriété privée et à l\'économie. Les socialistes (Louis Blanc, Proudhon) veulent aussi des réformes sociales et économiques (droit au travail, associations ouvrières). Cette division affaiblit les révolutions." },
      { front: "Que sont les 'journées de juin 1848' à Paris ?", back: "Insurrection populaire parisienne (23-26 juin 1848) déclenchée par la fermeture des ateliers nationaux. Les ouvriers chômeurs dressent des barricades. Le général Cavaignac réprime férocement : ~3 000 à 5 000 morts, 12 000 arrestations, 4 000 déportés. C\'est la première grande guerre civile de classe en France." }
    ]
  },
  {
    id: 'quat_question_sociale',
    level: '4e',
    theme: 'Question sociale et socialisme',
    title: 'La question sociale, le socialisme et le mouvement ouvrier au XIXe siècle',
    periode: '1830-1871',
    essential: true,
    content: {
      context: "La Révolution industrielle crée une classe ouvrière (le prolétariat) soumise à des conditions de travail et de vie inhumaines. Face à cette \'question sociale\', des penseurs élaborent des théories socialistes pour transformer la société. Karl Marx et Friedrich Engels théorisent le socialisme scientifique. Des organisations ouvrières se développent, culminant avec la Commune de Paris (1871), première expérience de gouvernement ouvrier, écrasée dans le sang.",
      keyPoints: [
        "Les conditions ouvrières au XIXe siècle : 12 à 16 heures de travail par jour, enfants au travail dès 6-7 ans, salaires de misère, taudis insalubres, maladies professionnelles.",
        "Le luddisme : mouvement de destruction des machines (Angleterre, années 1810), considérées comme cause du chômage et de la misère ouvrière.",
        "Naissance du syndicalisme : en France, la loi Le Chapelier (1791) interdit les coalitions ouvrières. Les syndicats ne sont légalisés qu\'en 1884 par la loi Waldeck-Rousseau.",
        "Marx et Engels publient le \'Manifeste du Parti communiste\' en 1848 : analyse de la lutte des classes, appel à la révolution prolétarienne (\'Prolétaires de tous les pays, unissez-vous !\').",
        "L\'Internationale ouvrière (Ire Internationale, 1864) tente d\'unifier le mouvement ouvrier européen.",
        "La Commune de Paris (18 mars - 28 mai 1871) : après la défaite contre la Prusse, les Parisiens instaurent un gouvernement révolutionnaire. L\'armée versaillaise l\'écrase pendant la \'Semaine sanglante\' (21-28 mai 1871) : environ 20 000 Communards tués.",
      ],
      causes: [
        "Les conditions de travail et de vie misérables créées par l\'industrialisation.",
        "L\'absence de droits sociaux (pas de syndicats légaux, pas d\'assurance-maladie, pas de retraite).",
        "Le creusement des inégalités entre bourgeoisie (propriétaires des usines) et prolétariat (travailleurs sans propriété).",
      ],
      consequences: [
        "La Commune de Paris, malgré son échec, devient une référence pour les mouvements révolutionnaires du monde entier.",
        "Les premières lois sociales : loi sur le travail des enfants (France 1841), légalisation des syndicats (France 1884), lois Bismarck (Allemagne, 1883-1889 : assurance-maladie, accidents du travail, retraite).",
        "L\'essor des partis socialistes dans toute l\'Europe à la fin du XIXe siècle.",
      ],
      dates: [
        { date: '1848', event: 'Publication du Manifeste du Parti communiste par Marx et Engels' },
        { date: '1864', event: 'Création de l\'Internationale ouvrière (Ire Internationale)' },
        { date: '1871', event: 'Commune de Paris (18 mars - 28 mai) — \'Semaine sanglante\' : ~20 000 morts' },
        { date: '1884', event: 'Légalisation des syndicats en France (loi Waldeck-Rousseau)' },
      ],
      vocabulary: ['prolétariat', 'socialisme', 'syndicalisme', 'lutte des classes', 'Commune de Paris', 'Internationale'],
      methodTips: "La Commune de Paris est un sujet récurrent. Retenez : mars-mai 1871, après la guerre franco-prussienne, gouvernement révolutionnaire parisien, répression par l\'armée de Versailles, ~20 000 morts. Ne confondez pas la Commune (1871) avec la Révolution (1789) ou les révolutions de 1848."
    },
    quiz: [
      {
        question: "Quelle est la célèbre formule du Manifeste communiste de Marx et Engels (1848) ?",
        options: ["\'Liberté, Égalité, Fraternité\'", "\'Prolétaires de tous les pays, unissez-vous !\'", "\'Le spectre du capitalisme hante l\'Europe\'", "\'À chacun selon ses besoins\'"],
        answer: "\'Prolétaires de tous les pays, unissez-vous !\'",
        explanation: "Le Manifeste du Parti communiste (1848) se termine par cet appel à l\'internationalisme ouvrier. Marx et Engels y analysent l\'histoire comme une lutte des classes et appellent le prolétariat à renverser la bourgeoisie par la révolution."
      },
      {
        question: "Qu\'est-ce que la Commune de Paris (1871) ?",
        options: ["Le conseil municipal habituel de Paris", "Un gouvernement révolutionnaire parisien écrasé dans le sang par l\'armée versaillaise", "Un accord de paix entre Paris et la Prusse", "Le gouvernement de Thiers pendant la guerre franco-prussienne"],
        answer: "Un gouvernement révolutionnaire parisien écrasé dans le sang par l\'armée versaillaise",
        explanation: "La Commune de Paris (18 mars - 28 mai 1871) est la première expérience de gouvernement ouvrier de l\'histoire. Les Parisiens, humiliés par la défaite contre la Prusse, refusent de se soumettre au gouvernement de Versailles. L\'armée écrase l\'insurrection lors de la \'Semaine sanglante\' (21-28 mai) : ~20 000 morts."
      },
      {
        question: "Que défend le luddisme ?",
        options: ["La création de syndicats ouvriers", "La révolution prolétarienne mondiale", "La destruction des machines jugées responsables de la misère ouvrière", "L\'amélioration des conditions de travail par la négociation"],
        answer: "La destruction des machines jugées responsables de la misère ouvrière",
        explanation: "Le luddisme (d\'un certain Ned Ludd, personnage réel ou légendaire) est un mouvement anglais des années 1810 qui détruit les machines textiles. Les ouvriers, souvent artisans qualifiés, voient dans la mécanisation la cause de leur déclassement et de la baisse des salaires."
      },
      {
        question: "Qu\'est-ce que la loi Le Chapelier (1791) et quel est son impact ?",
        options: ["Une loi accordant des droits aux ouvriers en France", "Une loi interdisant les coalitions ouvrières et les grèves au nom de la liberté individuelle", "Une loi sur le temps de travail dans les usines", "Une loi créant les premiers syndicats français"],
        answer: "Une loi interdisant les coalitions ouvrières et les grèves au nom de la liberté individuelle",
        explanation: "La loi Le Chapelier (juin 1791), votée par l\'Assemblée constituante, interdit toute coalition de travailleurs (syndicats, grèves) au nom de la liberté individuelle et du libéralisme économique. Cette loi, qui s\'applique aussi aux patrons en théorie, est surtout utilisée contre les ouvriers. Elle reste en vigueur jusqu\'en 1884, empêchant pendant presque un siècle toute organisation ouvrière légale en France."
      },
      {
        question: "Qu\'est-ce que le socialisme utopique ?",
        options: ["Une forme de socialisme qui refuse tout contact avec la réalité", "Les premières théories socialistes (Saint-Simon, Fourier, Owen) imaginant des sociétés idéales sans analyse scientifique des mécanismes du capitalisme", "Le socialisme pratiqué dans les pays communistes", "La théorie marxiste de la révolution prolétarienne"],
        answer: "Les premières théories socialistes (Saint-Simon, Fourier, Owen) imaginant des sociétés idéales sans analyse scientifique des mécanismes du capitalisme",
        explanation: "Les socialistes \'utopiques\' (Saint-Simon, Fourier, Owen) du début du XIXe siècle imaginent des sociétés idéales harmonieuses (phalanstères de Fourier, New Harmony d\'Owen) sans analyser scientifiquement le capitalisme. Marx et Engels les critiquent et leur opposent le \'socialisme scientifique\', fondé sur l\'analyse matérialiste de l\'histoire et de l\'économie."
      },
      {
        question: "Qu\'est-ce que la \'lutte des classes\' selon Marx ?",
        options: ["La concurrence commerciale entre entreprises bourgeoises", "Le conflit fondamental entre les propriétaires des moyens de production (bourgeoisie) et les travailleurs salariés (prolétariat)", "La rivalité politique entre partis politiques", "La compétition économique entre nations capitalistes"],
        answer: "Le conflit fondamental entre les propriétaires des moyens de production (bourgeoisie) et les travailleurs salariés (prolétariat)",
        explanation: "Pour Marx, toute l\'histoire est une histoire de luttes de classes. Dans le capitalisme industriel, la classe dominante est la bourgeoisie (propriétaire des usines, des banques) qui exploite le prolétariat (travailleurs sans propriété qui vendent leur force de travail). Cette exploitation génère la plus-value qui s\'accumule dans les mains des capitalistes. La révolution mettra fin à cette exploitation."
      },
      {
        question: "Qu\'est-ce que la 1ère Internationale ouvrière (1864) ?",
        options: ["Le premier parti socialiste français", "L\'Association Internationale des Travailleurs, fondée à Londres pour unifier les mouvements ouvriers européens", "Le premier syndicat européen légal", "L\'organisation fondée par Napoléon III pour contrôler les ouvriers"],
        answer: "L\'Association Internationale des Travailleurs, fondée à Londres pour unifier les mouvements ouvriers européens",
        explanation: "L\'Association Internationale des Travailleurs (Ire Internationale) est fondée à Londres le 28 septembre 1864. Marx en rédige les statuts. Elle regroupe des socialistes, des anarchistes (Bakounine) et des syndicalistes de plusieurs pays. Divisée par le conflit Marx/Bakounine, elle est dissoute après la Commune de Paris (1876)."
      },
      {
        question: "Qu\'est-ce que l\'anarchisme et en quoi diffère-t-il du marxisme ?",
        options: ["L\'anarchisme et le marxisme sont identiques", "L\'anarchisme (Bakounine, Proudhon) refuse l\'État sous toutes ses formes ; le marxisme veut d\'abord un \'État prolétarien\' de transition", "L\'anarchisme veut la révolution immédiate ; le marxisme veut la réforme progressive", "L\'anarchisme s\'oppose au capitalisme ; le marxisme l\'accepte"],
        answer: "L\'anarchisme (Bakounine, Proudhon) refuse l\'État sous toutes ses formes ; le marxisme veut d\'abord un \'État prolétarien\' de transition",
        explanation: "L\'anarchisme (Proudhon, Bakounine) veut abolir immédiatement tout État, considéré comme instrument d\'oppression. Le marxisme, lui, prévoit une étape de \'dictature du prolétariat\' (État ouvrier) avant d\'atteindre la société sans classes et sans État (communisme). Ce désaccord fondamental provoque la rupture Marx/Bakounine au sein de la 1ère Internationale."
      },
      {
        question: "Quelles sont les premières lois sociales en France au XIXe siècle ?",
        options: ["La loi de 1840 sur le travail des femmes et la loi de 1884 sur les syndicats", "La loi de 1841 sur le travail des enfants et la loi de 1884 légalisant les syndicats", "La loi de 1848 sur la journée de travail et la loi de 1870 sur les retraites", "La loi de 1800 sur les manufactures et la loi de 1850 sur les accidents du travail"],
        answer: "La loi de 1841 sur le travail des enfants et la loi de 1884 légalisant les syndicats",
        explanation: "Les premières lois sociales françaises : 1841 (interdit le travail des enfants de moins de 8 ans et limite à 8h pour les 8-12 ans, peu appliquée) ; 1848 (IIe République : journée de 10h à Paris, 11h en province) ; 1874 (interdit le travail des enfants de moins de 12 ans dans l\'industrie) ; 1884 (Waldeck-Rousseau : légalisation des syndicats)."
      },
      {
        question: "Qu\'est-ce que le \'Capital\' de Karl Marx (1867) ?",
        options: ["Un roman sur la vie ouvrière au XIXe siècle", "Une analyse économique du capitalisme montrant comment la bourgeoisie extrait la \'plus-value\' du travail ouvrier", "Le programme politique du parti communiste", "Un traité sur l\'histoire des révolutions"],
        answer: "Une analyse économique du capitalisme montrant comment la bourgeoisie extrait la \'plus-value\' du travail ouvrier",
        explanation: "Le Capital (Das Kapital, 1867) est l\'œuvre économique principale de Marx. Il y analyse le fonctionnement du capitalisme : la valeur des marchandises est créée par le travail ouvrier, mais les capitalistes s\'approprient la \'plus-value\' (la différence entre ce que produit l\'ouvrier et ce qu\'il est payé). Cette exploitation est la base du profit capitaliste et de l\'accumulation du capital."
      }
    ],
    flashcards: [
      { front: "Qui est Karl Marx ?", back: "Philosophe et économiste allemand (1818-1883). Auteur du \'Manifeste du Parti communiste\' (1848) et du \'Capital\' (1867). Il théorise la lutte des classes et le matérialisme historique, fondements du socialisme et du communisme." },
      { front: "Qu\'est-ce que la \'Semaine sanglante\' ?", back: "Du 21 au 28 mai 1871, l\'armée versaillaise entre dans Paris et réprime brutalement la Commune. Environ 20 000 Communards sont tués, 40 000 arrêtés, des milliers déportés en Nouvelle-Calédonie." },
      { front: "Pourquoi les syndicats sont-ils interdits en France jusqu\'en 1884 ?", back: "La loi Le Chapelier (1791) interdit toute coalition ouvrière au nom de la liberté individuelle. Ce n\'est qu\'en 1884 (loi Waldeck-Rousseau) que les syndicats sont légalisés en France, sous la IIIe République." },
      { front: "Qui est Louis Blanc et quelle est son idée principale ?", back: "Louis Blanc (1811-1882), socialiste français, auteur de \'L\'Organisation du Travail\' (1839). Il propose les \'ateliers sociaux\' : des coopératives ouvrières soutenues par l\'État pour éliminer la concurrence capitaliste. Membre du gouvernement provisoire de 1848, il obtient la création des ateliers nationaux. Il s\'exile après juin 1848." },
      { front: "Qu\'est-ce que le phalanstère de Fourier ?", back: "Charles Fourier (1772-1837) imagine le phalanstère, une communauté idéale de 1 620 personnes vivant et travaillant ensemble, où chacun exerce le travail qui lui plaît (\'attraction passionnée\'). Ce projet utopique est peu réalisé mais inspire de nombreuses communes expérimentales au XIXe siècle en France et aux États-Unis." },
      { front: "Qu\'est-ce que la \'plus-value\' selon Marx ?", back: "Concept central du Capital (1867) : la plus-value est la différence entre la valeur créée par le travail ouvrier et le salaire versé à l\'ouvrier. Par exemple, un ouvrier payé 4 heures produit en réalité la valeur de 8 heures : les 4 heures de différence (plus-value) reviennent au capitaliste. C\'est la source du profit et de l\'exploitation." },
      { front: "Qu\'est-ce que la Commune de Paris (18 mars - 28 mai 1871) ?", back: "Gouvernement révolutionnaire parisien qui s\'établit après la défaite contre la Prusse. Les Communards refusent de se soumettre au gouvernement conservateur de Versailles. Pendant 72 jours, Paris expérimente un gouvernement ouvrier (mesures sociales, laïcisation). Écrasé lors de la \'Semaine sanglante\' : ~20 000 morts." },
      { front: "Qu\'est-ce que le \'droit au travail\' réclamé en 1848 ?", back: "Revendication centrale des socialistes en 1848 : l\'État doit garantir à chaque citoyen un emploi ou les moyens de subsistance. C\'est pour tenter de réaliser ce droit que les ateliers nationaux sont créés (février 1848). La Constitution de 1848 l\'affirme mais ne le garantit pas concrètement. Il reste une revendication sociale fondamentale." },
      { front: "Qu\'est-ce que Friedrich Engels et quel est son rôle ?", back: "Friedrich Engels (1820-1895), industriel allemand et ami de Marx. Il coécrit le Manifeste du Parti communiste (1848) et finance les travaux de Marx. Son œuvre \'La Situation des classes laborieuses en Angleterre\' (1845) décrit avec précision les conditions misérables de la classe ouvrière industrielle. Après la mort de Marx, il publie les tomes 2 et 3 du Capital." }
    ]
  },
  {
    id: 'quat_restauration_regimes',
    level: '4e',
    theme: 'Régimes politiques',
    title: 'La Restauration et les régimes politiques français (1815-1870)',
    periode: '1815-1870',
    essential: false,
    content: {
      context: "Entre la chute de Napoléon (1815) et la proclamation de la IIIe République (1870), la France connaît une remarquable instabilité politique : Restauration monarchique, Monarchie de Juillet, IIe République, Second Empire. Cette succession de régimes illustre les tensions entre les partisans de la monarchie, du libéralisme et de la République, et traduit la difficulté de la France à trouver un régime stable après la Révolution.",
      keyPoints: [
        "La Restauration (1815-1830) : retour des Bourbons. Louis XVIII (frère de Louis XVI) règne de 1814 à 1824. Il accepte une Charte constitutionnelle (monarchie constitutionnelle).",
        "Charles X (1824-1830) et l\'ultraroyalisme : il veut restaurer l\'Ancien Régime, provoquant la révolution des Trois Glorieuses (27-29 juillet 1830).",
        "La Monarchie de Juillet (1830-1848) : Louis-Philippe Ier, le \'roi bourgeois\', règne sous une monarchie constitutionnelle libérale. Seuls les riches votent (suffrage censitaire).",
        "La IIe République (1848-1852) : née de la révolution de février 1848, elle instaure le suffrage universel masculin et abolit l\'esclavage.",
        "Le Second Empire (1852-1870) : Napoléon III d\'abord autoritaire (presse muselée, opposition réprimée), puis libéral à partir de 1860 (libertés accordées progressivement).",
        "La défaite de Sedan (2 septembre 1870) face à la Prusse entraîne la capitulation de Napoléon III. La IIIe République est proclamée le 4 septembre 1870.",
      ],
      causes: [
        "La Révolution française a détruit l\'Ancien Régime mais n\'a pas imposé de modèle politique stable.",
        "Les tensions entre royalistes (Bourbons, Orléans), républicains et bonapartistes empêchent un consensus durable.",
        "La pression de la rue (révolutions, insurrections) joue un rôle décisif à chaque changement de régime.",
      ],
      consequences: [
        "Cette période expérimente tous les modèles politiques (monarchie absolue, constitutionnelle, républiques, empire), préparant le terrain pour la IIIe République durable (1870-1940).",
        "Le suffrage universel masculin instauré en 1848 n\'est plus jamais remis en cause.",
        "La défaite de 1870 humilie la France et cède l\'Alsace-Lorraine à l\'Allemagne : le revanchisme alimentera les tensions jusqu\'en 1914.",
      ],
      dates: [
        { date: '1815', event: 'Restauration : Louis XVIII monte sur le trône, Charte constitutionnelle' },
        { date: '27-29 juillet 1830', event: 'Trois Glorieuses — Charles X renversé, Louis-Philippe roi des Français' },
        { date: 'Février 1848', event: 'Révolution — abdication de Louis-Philippe, proclamation de la IIe République' },
        { date: '2 décembre 1852', event: 'Proclamation du Second Empire — Napoléon III' },
        { date: '2 septembre 1870', event: 'Défaite de Sedan, capitulation de Napoléon III' },
        { date: '4 septembre 1870', event: 'Proclamation de la IIIe République' },
      ],
      vocabulary: ['Restauration', 'Charte constitutionnelle', 'Trois Glorieuses', 'Monarchie de Juillet', 'Second Empire', 'suffrage censitaire'],
      methodTips: "Pour mémoriser la succession des régimes français, utilisez ce mnémotechnique : République (1792) → Empire Napoléon I (1804) → Restauration (1815) → Monarchie de Juillet (1830) → IIe République (1848) → Second Empire (1852) → IIIe République (1870). Retenez les révolutions de 1830 et 1848 comme charnières."
    },
    quiz: [
      {
        question: "Qu\'est-ce que les Trois Glorieuses ?",
        options: ["Trois victoires militaires de Napoléon", "Les trois journées révolutionnaires (27-29 juillet 1830) qui renversent Charles X", "Trois articles de la Charte constitutionnelle", "Les trois jours de négociation du traité de Vienne"],
        answer: "Les trois journées révolutionnaires (27-29 juillet 1830) qui renversent Charles X",
        explanation: "Les \'Trois Glorieuses\' (27, 28 et 29 juillet 1830) désignent les trois jours d\'insurrection à Paris qui renversent Charles X, jugé trop autoritaire et réactionnaire. Louis-Philippe d\'Orléans lui succède comme \'roi des Français\' (et non \'roi de France\')."
      },
      {
        question: "Qu\'est-ce que le suffrage censitaire sous la Monarchie de Juillet ?",
        options: ["Le vote de tous les hommes majeurs", "Le vote réservé aux citoyens payant un certain montant d\'impôts", "Le vote à bulletin secret", "Le vote des femmes dans certaines conditions"],
        answer: "Le vote réservé aux citoyens payant un certain montant d\'impôts",
        explanation: "Sous Louis-Philippe (1830-1848), seuls les citoyens payant plus de 200 francs d\'impôts directs (le \'cens\') peuvent voter. En pratique, cela représente environ 250 000 électeurs sur 35 millions de Français. C\'est le gouvernement de la bourgeoisie aisée."
      },
      {
        question: "Comment se termine le Second Empire de Napoléon III ?",
        options: ["Par une révolution populaire à Paris", "Par la défaite de Sedan contre la Prusse et la capture de Napoléon III", "Par un coup d\'État militaire", "Par une abdication volontaire en faveur de son fils"],
        answer: "Par la défaite de Sedan contre la Prusse et la capture de Napoléon III",
        explanation: "Le 2 septembre 1870, la bataille de Sedan voit la capitulation de l\'armée française et la capture de Napoléon III par les Prussiens. Le lendemain, la IIIe République est proclamée à Paris. C\'est la fin du Second Empire et le début d\'une longue période républicaine."
      },
      {
        question: "Qui est Charles X et pourquoi est-il renversé en 1830 ?",
        options: ["Le frère de Napoléon Ier renversé pour incompétence militaire", "Le frère de Louis XVI qui veut rétablir l\'Ancien Régime et est renversé par les Trois Glorieuses", "Le fils de Louis XVIII renversé par les républicains", "Le cousin de Louis-Philippe renversé par les bonapartistes"],
        answer: "Le frère de Louis XVI qui veut rétablir l\'Ancien Régime et est renversé par les Trois Glorieuses",
        explanation: "Charles X (frère de Louis XVI et Louis XVIII) monte sur le trône en 1824. Ultra-royaliste, il veut restaurer l\'Ancien Régime : il indemnise les nobles émigrés (loi du milliard des émigrés, 1825) et promulgue les \'Ordonnances de Juillet\' (1830) qui suspendent la liberté de la presse et dissolvent la Chambre. Ces ordonnances déclenchent les Trois Glorieuses (27-29 juillet 1830) qui le renversent."
      },
      {
        question: "Quelle est la différence entre Louis XVIII et Charles X pendant la Restauration ?",
        options: ["Louis XVIII est un libéral constitutionnel modéré ; Charles X est un ultra-royaliste réactionnaire", "Louis XVIII veut rétablir l\'absolutisme ; Charles X est libéral", "Tous deux ont la même politique conservatrice", "Louis XVIII est le frère de Charles X et a régné après lui"],
        answer: "Louis XVIII est un libéral constitutionnel modéré ; Charles X est un ultra-royaliste réactionnaire",
        explanation: "Louis XVIII (1814-1824) accepte la Charte constitutionnelle et gouverne de manière relativement modérée. Charles X (1824-1830) est un ultra-royaliste (\'ultra\') qui rêve de restaurer l\'Ancien Régime : il indemnise les nobles, rétablit la censure et promulgue les ordonnances de juillet 1830, provoquant sa chute."
      },
      {
        question: "Qu\'est-ce que la Monarchie de Juillet (1830-1848) et qui en est le roi ?",
        options: ["La monarchie des Trois Glorieuses dirigée par Charles X", "La monarchie constitutionnelle libérale dirigée par Louis-Philippe d\'Orléans", "La monarchie établie après les révolutions de 1848 par Louis-Napoléon", "La monarchie napoléonienne restaurée après 1815"],
        answer: "La monarchie constitutionnelle libérale dirigée par Louis-Philippe d\'Orléans",
        explanation: "La Monarchie de Juillet (1830-1848) est établie après les Trois Glorieuses. Louis-Philippe d\'Orléans devient \'roi des Français\' (et non \'roi de France\'). C\'est une monarchie constitutionnelle libérale favorisant la bourgeoisie : suffrage censitaire (seulement 250 000 électeurs), liberté de presse, développement économique. Louis-Philippe est renversé par la révolution de février 1848."
      },
      {
        question: "Qu\'est-ce que l\'ultraroyalisme (les \'ultras\') sous la Restauration ?",
        options: ["Un parti républicain extrémiste pendant la Restauration", "Un courant politique voulant aller plus loin que le roi lui-même dans la restauration de l\'Ancien Régime", "Un mouvement bonapartiste sous la Restauration", "Les partisans de la constitution libérale de 1814"],
        answer: "Un courant politique voulant aller plus loin que le roi lui-même dans la restauration de l\'Ancien Régime",
        explanation: "Les \'ultras\' (ultraroyalistes) sont des nobles et catholiques extrémistes qui veulent restaurer l\'Ancien Régime dans son intégralité : abolir la Charte, rétablir les droits féodaux, renforcer l\'Église. Sous Louis XVIII, ils constituent un parti puissant à la Chambre. Avec Charles X, ils accèdent au pouvoir, mais leur politique extrémiste provoque la révolution de 1830."
      },
      {
        question: "Qu\'est-ce que le \'revanchisme\' français après 1870 ?",
        options: ["Le désir de la France de se venger de la Prusse pour la défaite de Sedan et la perte de l\'Alsace-Lorraine", "La politique étrangère offensive de Napoléon III", "Le nationalisme agressif de la Prusse après 1866", "La politique coloniale française en Afrique après 1870"],
        answer: "Le désir de la France de se venger de la Prusse pour la défaite de Sedan et la perte de l\'Alsace-Lorraine",
        explanation: "Après la défaite de 1870-1871, la France cède l\'Alsace et une partie de la Lorraine à l\'Allemagne (traité de Francfort, mai 1871) et paye 5 milliards de francs d\'indemnités. Ce traumatisme national engendre le \'revanchisme\' : la volonté de récupérer les provinces perdues. Cette tension alimente les relations franco-allemandes jusqu\'à la Première Guerre mondiale."
      },
      {
        question: "Quelle est la nature du Second Empire de Napoléon III dans sa phase libérale (après 1860) ?",
        options: ["Il devient une démocratie complète avec des élections libres", "Il accorde progressivement des libertés politiques (presse, réunion, parlement) tout en maintenant le régime impérial", "Il retourne à un régime encore plus autoritaire après 1860", "Il est remplacé par un gouvernement républicain en 1860"],
        answer: "Il accorde progressivement des libertés politiques (presse, réunion, parlement) tout en maintenant le régime impérial",
        explanation: "À partir de 1860, Napoléon III accorde progressivement des libertés : le Corps législatif peut amender le budget (1860), l\'opposition peut s\'exprimer au Parlement (1869), la liberté de réunion est accordée (1868). Un projet de constitution libérale est approuvé par plébiscite en mai 1870 à 82 %, mais la guerre contre la Prusse éclate deux mois plus tard."
      },
      {
        question: "Quels régimes politiques la France connaît-elle entre 1815 et 1870 ?",
        options: ["Deux régimes seulement : une monarchie et une république", "Quatre régimes successifs : Restauration, Monarchie de Juillet, IIe République, Second Empire", "Cinq régimes dont deux républiques", "Un seul régime stable : la monarchie constitutionnelle"],
        answer: "Quatre régimes successifs : Restauration, Monarchie de Juillet, IIe République, Second Empire",
        explanation: "Entre 1815 et 1870, la France connaît une remarquable instabilité politique avec 4 régimes différents : la Restauration (1815-1830 : retour des Bourbons), la Monarchie de Juillet (1830-1848 : Louis-Philippe), la IIe République (1848-1852 : suffrage universel), et le Second Empire (1852-1870 : Napoléon III). Cette succession illustre les tensions entre royalistes, républicains et bonapartistes."
      }
    ],
    flashcards: [
      { front: "Qu\'est-ce que la Charte constitutionnelle de 1814 ?", back: "Document signé par Louis XVIII lors de la Restauration. Il établit une monarchie constitutionnelle : le roi garde le pouvoir exécutif mais partage le législatif avec deux chambres (Chambre des pairs, Chambre des députés). Les libertés fondamentales sont garanties." },
      { front: "Pourquoi Louis-Philippe est-il surnommé le \'roi bourgeois\' ?", back: "Louis-Philippe Ier (1830-1848) symbolise la monarchie de Juillet et la domination de la bourgeoisie : suffrage censitaire, politique favorable aux intérêts économiques de la classe moyenne supérieure, refus des réformes sociales." },
      { front: "Quelle est la différence entre le Second Empire autoritaire et libéral ?", back: "De 1852 à ~1860 : régime autoritaire (presse contrôlée, opposition réprimée, liberté de réunion interdite). De 1860 à 1870 : Empire libéral (libertés accordées progressivement, développement de l\'opposition parlementaire). Napoléon III s\'adapte face à la montée du mécontentement." },
      { front: "Qu\'est-ce que le \'milliard des émigrés\' de 1825 ?", back: "Loi adoptée sous Charles X qui verse un milliard de francs d\'indemnités aux nobles ayant émigré pendant la Révolution et dont les biens avaient été confisqués. Cette loi scandalise l\'opinion libérale et bourgeoise : elle semble réhabiliter les émigrés contre-révolutionnaires et coûte très cher au budget de l\'État." },
      { front: "Qu\'est-ce que le \'gouvernement des capacités\' sous Louis-Philippe ?", back: "Politique de Guizot, premier ministre de Louis-Philippe, résumée par la formule \'Enrichissez-vous !\'. Elle soutient la bourgeoisie d\'affaires et refuse d\'abaisser le cens électoral (conditions de richesse pour voter). Ce refus de réforme électorale est l\'une des causes de la révolution de février 1848." },
      { front: "Qu\'est-ce que la \'question sociale\' sous la Monarchie de Juillet ?", back: "La \'question sociale\' désigne le problème de la misère ouvrière et de l\'inégalité sociale dans une société industrialisée. Sous Louis-Philippe, les ouvriers vivent dans des conditions misérables (salaires bas, heures longues, taudis) sans protection légale. Ce problème pousse au développement du socialisme et aux révolutions de 1848." },
      { front: "Qu\'est-ce que la défaite de Sedan (2 septembre 1870) ?", back: "Bataille décisive de la guerre franco-prussienne : l\'armée française est encerclée à Sedan et capitule. Napoléon III est capturé par les Prussiens — un humiliation sans précédent. La IIIe République est proclamée à Paris le 4 septembre 1870. La France cède ensuite l\'Alsace-Lorraine et paye 5 milliards de réparations (traité de Francfort, 1871)." },
      { front: "Qu\'est-ce que la politique d\'Haussmann sous Napoléon III ?", back: "Le baron Haussmann, préfet de Paris (1853-1870), transforme radicalement la capitale sous Napoléon III : percement des grands boulevards (hausmannisation), construction d\'immeubles uniformes, installation de l\'eau courante, des égouts et de l\'éclairage au gaz. Paris devient une ville moderne mais des centaines de milliers de Parisiens pauvres sont expulsés des quartiers rénovés." },
      { front: "Qu\'est-ce que la IIIe République proclamée le 4 septembre 1870 ?", back: "La IIIe République est proclamée à Paris le 4 septembre 1870, après la capture de Napoléon III à Sedan. C\'est le régime républicain le plus long de l\'histoire française (1870-1940, 70 ans). Elle continue la guerre contre la Prusse (capitulation en janvier 1871), réprime la Commune (mai 1871) puis se consolide progressivement sous des dirigeants républicains." }
    ]
  },
]
