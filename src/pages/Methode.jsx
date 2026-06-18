import { useState } from 'react'
import { GraduationCap, FileText, Map, BookOpen, ChevronDown, ChevronRight } from 'lucide-react'

const GUIDES = [
  {
    id: 'dissertation',
    icon: FileText,
    color: '#8B4513',
    title: 'La dissertation historique',
    level: 'Bac',
    sections: [
      {
        title: 'Définition et objectif',
        content: `La dissertation est un exercice de réflexion organisée sur un sujet historique. Elle évalue votre capacité à problématiser, à construire un raisonnement structuré et à mobiliser vos connaissances de façon sélective.

Elle dure 4h en Terminale. Le sujet peut porter sur une période, un thème ou une notion. Vous disposez de documents pour aider votre réflexion mais vous devez surtout utiliser vos connaissances personnelles.`
      },
      {
        title: 'Analyser le sujet (30 min)',
        content: `1. Lisez le sujet 3 fois minimum
2. Identifiez les mots-clés : relevez tous les termes importants et définissez-les
3. Délimitez le sujet dans le temps et dans l'espace
4. Cherchez les tensions, paradoxes, oppositions dans le sujet
5. Formulez une problématique : une question centrale qui interroge le sujet

Exemple : Sujet "Les États-Unis et le monde depuis 1918"
→ Mots-clés : États-Unis (pas juste la politique étrangère mais aussi la puissance), "et le monde" (relations, influence), "depuis 1918" (du lendemain de la 1ère GM à nos jours)
→ Problématique : Comment les États-Unis ont-ils construit, exercé et maintenu leur hégémonie mondiale depuis 1918, malgré les tensions et remises en cause ?`
      },
      {
        title: 'Construire le plan (30 min)',
        content: `Le plan doit être THÉMATIQUE (par idées) plutôt que chronologique, sauf si le sujet porte sur une évolution.

Structure classique en 3 parties, 2 sous-parties minimum chacune :

Exemple pour "Les États-Unis et le monde depuis 1918" :
I. L'émergence difficile de la puissance américaine (1918-1945)
   A. L'isolationnisme des années 1920-1930
   B. L'entrée en guerre et la montée en puissance (1941-1945)
II. L'hégémonie américaine dans le monde bipolaire (1945-1991)
   A. La Guerre Froide : containment et interventionnisme
   B. La puissance économique et culturelle (soft power)
III. La puissance contestée dans un monde multipolaire (1991-aujourd'hui)
   A. L'hyperpuissance unilatérale après 1991 (Bush, guerre contre le terrorisme)
   B. Le défi de la multipolarité (montée Chine, crise hégémonie)

⚠️ Éviter : plan chronologique pure, plan trop descriptif, 2 parties seulement`
      },
      {
        title: 'Rédiger l\'introduction (15 min)',
        content: `L'introduction se rédige APRÈS le plan. Elle comprend :

1. Accroche : citation, fait historique frappant, paradoxe (3-4 lignes)
2. Mise en contexte : présentation du sujet dans son contexte historique
3. Définition des termes : définissez les mots-clés du sujet
4. Délimitation : bornes chronologiques et spatiales
5. Problématique : formulée clairement (1-2 phrases sous forme de question)
6. Annonce du plan : "Dans un premier temps... puis... enfin..."

L'introduction doit faire environ 15-20 lignes.`
      },
      {
        title: 'Rédiger le développement (2h30)',
        content: `Chaque partie :
→ Titre (en marge, non rédigé)
→ Chapeau introductif de la partie (2-3 lignes)
→ Sous-parties développées (arguments + exemples précis)
→ Transition vers la partie suivante

Chaque sous-partie :
→ Idée directrice (thèse)
→ Argument avec exemple historique précis (dates, acteurs, faits)
→ Analyse de l'exemple : en quoi illustre-t-il votre argument ?

Astuce : 1 sous-partie = environ 15-20 lignes`
      },
      {
        title: 'Rédiger la conclusion (15 min)',
        content: `La conclusion comprend :
1. Bilan : résumez les grandes lignes de votre démonstration
2. Réponse à la problématique : donnez une réponse nuancée
3. Ouverture : prolongez la réflexion sur d'autres questions, d'autres enjeux

⚠️ Ne pas introduire de nouvelles idées en conclusion !
⚠️ Ne pas commencer par "En conclusion..."

Longueur : 8-12 lignes`
      },
    ]
  },
  {
    id: 'composition',
    icon: BookOpen,
    color: '#1B4F72',
    title: 'La composition Bac (1ère)',
    level: '1ère',
    sections: [
      {
        title: 'Spécificités de la composition',
        content: `La composition en 1ère dure 2h. Le sujet est plus ciblé qu'en Terminale et porte sur un thème précis du programme. Les attentes sont similaires à la dissertation mais avec une complexité moindre.

Types de sujets possibles :
- "La France et la Seconde Guerre mondiale"
- "Les Européens dans la Première Guerre mondiale"
- "La Ve République : institutions et pratiques"

Structure : introduction + 2 ou 3 parties + conclusion`
      },
      {
        title: 'Méthode rapide de la composition',
        content: `5 étapes clés :

1. LIRE le sujet (5 min) : définir les termes, délimiter chronologiquement
2. REMUER-MÉNINGES (10 min) : noter tout ce que vous savez sur le sujet
3. PROBLÉMATISER (10 min) : formuler une question centrale
4. STRUCTURER (10 min) : regrouper vos idées en 2-3 axes cohérents
5. RÉDIGER (1h30) : en partant de votre plan

Astuce mémo : LRPS-R (Lire, Remuer, Problématiser, Structurer, Rédiger)`
      }
    ]
  },
  {
    id: 'document',
    icon: FileText,
    color: '#27AE60',
    title: 'Commentaire de document',
    level: 'Brevet & Bac',
    sections: [
      {
        title: 'Méthode générale',
        content: `Le commentaire de document consiste à analyser une source primaire ou secondaire (texte, image, carte, tableau).

ÉTAPES :
1. Présenter le document (nature, auteur, date, contexte)
2. Identifier les idées principales du document
3. Analyser : que dit le document ? Que ne dit-il pas ? Quel est le point de vue de l'auteur ?
4. Contextualiser : replacer dans son contexte historique avec vos connaissances
5. Porter un regard critique : fiabilité, limites, intérêts du document`
      },
      {
        title: 'Analyser un texte',
        content: `Grille d'analyse d'un texte historique :
→ Nature : discours, lettre, extrait de loi, rapport, article de presse...
→ Auteur : qui est-il ? Quel est son statut, ses intérêts, ses partis-pris ?
→ Date : à quel moment ce texte a-t-il été écrit ? Quel est le contexte ?
→ Destinataire : à qui s'adresse ce texte ?
→ Thèse de l'auteur : quelle est l'idée centrale défendue ?
→ Arguments : quels exemples l'auteur utilise-t-il ?
→ Limites : ce que le texte ne dit pas, ce qu'il cache, ce qu'il déforme

Exemple d'introduction d'un commentaire :
"Ce document est un discours prononcé par De Gaulle le 18 juin 1940 sur Radio Londres. Général français réfugié en Angleterre après la défaite, De Gaulle s'adresse à ses compatriotes pour les appeler à la résistance..."`
      },
      {
        title: 'Analyser une carte',
        content: `Grille d'analyse d'une carte historique :
→ Titre et date : que représente-t-elle ? À quelle époque ?
→ Étendue géographique : quelle est l'échelle ? Quels territoires ?
→ Légende : quels symboles sont utilisés ? Qu'est-ce qui est mis en valeur ?
→ Éléments remarquables : frontières, zones de couleurs, routes, symboles
→ Limites : ce que la carte ne montre pas, ce qui est simplifié

Pour le croquis cartographique (HGGSP) :
1. Lire la consigne : quelles informations mettre en valeur ?
2. Choisir les figurés : aplats (zones), figurés ponctuels (villes, ressources), linéaires (flux, frontières)
3. Construire la légende AVANT de dessiner
4. Soigner le titre et la légende`
      }
    ]
  },
  {
    id: 'hggsp',
    icon: Map,
    color: '#8E44AD',
    title: 'Méthode HGGSP',
    level: 'Terminale HGGSP',
    sections: [
      {
        title: 'L\'étude critique de documents',
        content: `En HGGSP, l'étude critique de documents est l'exercice principal. Vous analysez 2-3 documents en les confrontant.

Démarche :
1. Identifier le sujet commun aux documents
2. Analyser chaque document individuellement (nature, auteur, thèse, arguments)
3. CONFRONTER les documents : points de convergence et de divergence
4. Mobiliser vos connaissances pour enrichir l'analyse
5. Porter un regard critique : fiabilité, intérêts, limites de chaque document

Exemple de confrontation :
"Si le document 1 insiste sur [argument A], le document 2 au contraire souligne [argument B], ce qui révèle que..."`
      },
      {
        title: 'Le croquis cartographique HGGSP',
        content: `Le croquis cartographique est spécifique à la HGGSP. Il demande de représenter un phénomène géopolitique ou géographique sur un planisphère ou une carte régionale.

Étapes :
1. Lire le sujet : "Réalisez un croquis du sujet X"
2. Inventorier les informations à représenter (en vous appuyant sur les documents et vos cours)
3. Choisir les figurés adaptés :
   - Aplats de couleurs → zones, territoires, régions
   - Points ou cercles → villes, capitales, ressources ponctuelles
   - Flèches → flux (commerce, migration, influence)
   - Hachures → zones de conflit, instabilité
4. Construire la légende organisée (par catégories logiques)
5. Tracer proprement, écrire le titre et la légende

Erreurs à éviter :
✗ Légende sans organisation logique
✗ Trop d'informations → illisible
✗ Figurés non définis dans la légende
✗ Oublier les repères géographiques essentiels (frontières, océans)`
      },
      {
        title: 'Notions-clés attendues au Bac HGGSP',
        content: `Thème 1 — Guerre et paix :
Clausewitz ("la guerre est la continuation de la politique par d'autres moyens"), guerre totale, guerre asymétrique, guerre hybride, diplomatie, dissuasion nucléaire, ONU, Conseil de Sécurité, droit international humanitaire, DIH, résolution 2334, R2P

Thème 2 — Gouvernance mondiale :
Souveraineté de Westphalie, organisations internationales, G7/G20, OMC, FMI, Banque Mondiale, COP, GIEC, multilatéralisme, unilatéralisme, gouvernance globale

Thème 3 — Histoire et mémoires :
Paul Ricœur (La Mémoire, l'Histoire, l'Oubli), Pierre Nora (Lieux de mémoire), mémoire collective, devoir de mémoire, lois mémorielles (Gayssot 1990), négationnisme, travail de mémoire, réconciliation

Thème 4 — Patrimoine :
UNESCO, patrimoine mondial (1972), patrimoine immatériel (2003), listes rouge/noire, conflits patrimoniaux, patrimoine et tourisme, numérisation

Thème 5 — Environnement :
Développement durable (Brundtland 1987), Accord de Paris (2015), GIEC, trajectoire +1.5°C/+2°C, déforestation, biodiversité (COP15 Kunming), géopolitique des ressources

Thème 6 — Connaissance :
Propriété intellectuelle, brevets, open source, fracture numérique (Nord-Sud, rural-urbain), GAFAM, souveraineté numérique, fact-checking`
      }
    ]
  },
  {
    id: 'brevet',
    icon: GraduationCap,
    color: '#E67E22',
    title: 'Méthode Brevet (3ème)',
    level: 'Brevet',
    sections: [
      {
        title: 'Format de l\'épreuve d\'histoire-géo',
        content: `L'épreuve d'histoire-géographie au Brevet dure 2h et comprend :

PARTIE 1 — Questions (environ 30 min)
- Questions sur un ou deux documents (carte, texte, image)
- Questions à réponse courte (2-5 lignes)
- Exercice de géographie possible

PARTIE 2 — Paragraphe argumenté (environ 40 min)
- Un sujet d'histoire ou de géographie
- Vous devez rédiger un paragraphe structuré (pas une dissertation, mais un texte organisé)
- Minimum 15-20 lignes

PARTIE 3 — Croquis ou schéma (environ 20 min)`
      },
      {
        title: 'Le paragraphe argumenté au Brevet',
        content: `Le paragraphe argumenté est différent de la dissertation. Structure attendue :

1. Introduction (2-3 lignes) : posez la question et annoncez votre réponse
2. Argument 1 + exemple précis (dates, lieux, personnages)
3. Argument 2 + exemple précis
4. Argument 3 + exemple précis (si possible)
5. Conclusion (1-2 lignes) : bilan de votre réponse

Exemple de sujet : "La Première Guerre mondiale, une guerre totale"
→ Argument 1 : une mobilisation de toute la société civile (femmes, industrie de guerre)
→ Argument 2 : une guerre de masse et d'anéantissement (Verdun, gaz, 10 millions de morts)
→ Argument 3 : une guerre à l'échelle mondiale (fronts multiples, colonies mobilisées)

Astuce : 1 argument = 1 exemple précis (chiffres, dates, noms de personnes ou lieux)`
      },
      {
        title: 'Dates et repères incontournables au Brevet',
        content: `Les repères chronologiques obligatoires du programme 3ème :

GUERRES :
• 1914-1918 : Première Guerre mondiale
• 1939-1945 : Seconde Guerre mondiale
• 1916 : Bataille de Verdun
• 1940 : Chute de la France, Appel du 18 juin
• 1944 : Débarquement en Normandie
• 1945 : Fin de la guerre, Hiroshima (6 août)

POLITIQUE :
• 1917 : Révolution russe
• 1929 : Krach boursier
• 1933 : Hitler chancelier
• 1947 : Début Guerre Froide
• 1958 : Ve République
• 1989 : Chute du Mur de Berlin
• 1991 : Dissolution de l'URSS

DÉCOLONISATION :
• 1947 : Indépendance de l'Inde
• 1954 : Début guerre d'Algérie
• 1962 : Indépendance de l'Algérie

À apprendre ABSOLUMENT avec les événements associés !`
      }
    ]
  }
]

function GuideSection({ section }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#E8E0CC] dark:border-[#30363D] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#161B22] hover:bg-[#E8E0CC]/50 dark:hover:bg-[#30363D]/50 transition-colors text-left"
      >
        <span className="font-medium text-[#2C1810] dark:text-[#E6EDF3]">{section.title}</span>
        {open ? <ChevronDown size={16} className="text-[#8B7355]" /> : <ChevronRight size={16} className="text-[#8B7355]" />}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 bg-[#F5F0E8]/50 dark:bg-[#0D1117]/50">
          <p className="text-sm text-[#4A3728] dark:text-[#8B949E] leading-relaxed whitespace-pre-line">{section.content}</p>
        </div>
      )}
    </div>
  )
}

export default function Methode() {
  const [activeGuide, setActiveGuide] = useState('dissertation')
  const guide = GUIDES.find((g) => g.id === activeGuide)

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          Méthode Bac & Brevet
        </h1>
        <p className="text-[#8B7355]">Guides complets pour réussir vos épreuves d'Histoire</p>
      </div>

      {/* Sélecteur de guide */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
        {GUIDES.map(({ id, icon: Icon, title, level, color }) => (
          <button
            key={id}
            onClick={() => setActiveGuide(id)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeGuide === id
                ? 'border-current shadow-md'
                : 'border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#161B22] hover:border-current'
            }`}
            style={activeGuide === id ? { backgroundColor: color + '15', borderColor: color, color } : {}}
          >
            <Icon size={18} className="mb-1" />
            <p className="text-xs font-semibold leading-tight">{title}</p>
            <p className="text-xs opacity-70 mt-0.5">{level}</p>
          </button>
        ))}
      </div>

      {/* Guide actif */}
      {guide && (
        <div>
          <div
            className="flex items-center gap-3 p-4 rounded-2xl mb-6"
            style={{ backgroundColor: guide.color + '15', borderLeft: `4px solid ${guide.color}` }}
          >
            <guide.icon size={24} style={{ color: guide.color }} />
            <div>
              <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810] dark:text-[#E6EDF3]">
                {guide.title}
              </h2>
              <span className="text-sm" style={{ color: guide.color }}>Niveau : {guide.level}</span>
            </div>
          </div>

          <div className="space-y-2">
            {guide.sections.map((section, i) => (
              <GuideSection key={i} section={section} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
