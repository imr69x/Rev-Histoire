import { useState } from 'react'
import { GraduationCap, FileText, Map, BookOpen, ChevronDown, ChevronRight, PenLine, Image } from 'lucide-react'

const GUIDES = [
  {
    id: 'dissertation',
    icon: FileText,
    color: '#8B4513',
    title: 'Dissertation Terminale',
    level: 'Bac Terminale',
    sections: [
      {
        title: '🎯 Ce que les correcteurs attendent vraiment',
        content: `La dissertation n'est PAS un résumé de cours. C'est une démonstration.

Le correcteur cherche à voir si vous :
✓ Avez compris les enjeux du sujet (pas juste les faits)
✓ Savez construire un raisonnement qui répond à une vraie question
✓ Pouvez sélectionner et hiérarchiser vos connaissances
✓ Rédigez avec précision et rigueur

Ce qu'il ne veut PAS voir :
✗ Une récitation chronologique de tous vos cours
✗ Des généralités sans exemples précis
✗ Un plan "récit" (d'abord... puis... enfin...)
✗ Des connaissances plaquées sans lien avec le sujet

Un bon devoir avec 15 exemples bien analysés vaut mieux qu'un mauvais devoir avec 50 dates jetées en vrac.`
      },
      {
        title: '⏱️ Gestion du temps (4h)',
        content: `Répartition conseillée :

• 0:00 – 0:30 → Analyse du sujet + Problématique
• 0:30 – 1:00 → Plan détaillé (sur brouillon)
• 1:00 – 1:15 → Rédaction de l'introduction
• 1:15 – 3:30 → Rédaction du développement (environ 45 min par partie)
• 3:30 – 3:45 → Rédaction de la conclusion
• 3:45 – 4:00 → Relecture, corrections

⚠️ Erreur fatale : commencer à rédiger sans plan = devoir décousu garanti.
La phase de réflexion (1h au brouillon) est INDISPENSABLE même si elle semble "perdre du temps".`
      },
      {
        title: '🔍 Analyser le sujet (30 min)',
        content: `ÉTAPE 1 — Décortiquer chaque mot du sujet

Prenez le sujet : "Les États-Unis et le monde depuis 1918"

→ "Les États-Unis" : pas seulement la politique étrangère, mais aussi la puissance économique, militaire, culturelle (soft power), le rôle des acteurs non-étatiques
→ "et le monde" : relations (coopération, domination, rivalité), influence, rayonnement, perceptions
→ "depuis 1918" : borne d'entrée = sortie de la 1ère GM → jusqu'à aujourd'hui. Pourquoi 1918 ? Tournant dans le rôle mondial des USA.

ÉTAPE 2 — Identifier les tensions du sujet
Un bon sujet cache toujours une tension, un paradoxe. Cherchez :
• Opposition (puissance ≠ isolationnisme)
• Évolution dans le temps (montée → remise en cause)
• Décalage (entre discours et réalité)

ÉTAPE 3 — Formuler la problématique
La problématique = la question centrale qui donne sens à votre plan.

Mauvaise problématique : "Quel a été le rôle des États-Unis dans le monde depuis 1918 ?"
→ Trop vague, elle appelle un résumé.

Bonne problématique : "Comment les États-Unis ont-ils construit et exercé une hégémonie mondiale depuis 1918, et dans quelle mesure cette domination est-elle aujourd'hui contestée ?"
→ Elle contient une tension (domination / contestation) et ouvre sur un raisonnement.`
      },
      {
        title: '🏗️ Construire le plan (30 min)',
        content: `RÈGLE FONDAMENTALE : le plan thématique > le plan chronologique.

Exception : si le sujet porte explicitement sur une évolution ("Comment X a-t-il évolué entre... et..."), alors un plan chrono-thématique est accepté.

Structure idéale : 3 parties / 2 à 3 sous-parties chacune

Exemple pour "Les États-Unis et le monde depuis 1918" :

I. L'émergence contrariée d'une puissance mondiale (1918–1945)
   A. Le retrait isolationniste des années 1920–1930
   B. La Seconde Guerre mondiale : le tournant de l'engagement mondial

II. L'hégémonie américaine dans le monde bipolaire (1945–1991)
   A. Containment, interventionnisme et Guerre Froide
   B. La puissance douce : modèle économique, culturel et idéologique

III. Une hyperpuissance contestée dans un monde multipolaire (1991–aujourd'hui)
   A. L'illusion d'un "moment unipolaire" (1991–2001)
   B. Le défi de la multipolarité : montée de la Chine, crises internes, remise en cause

⚠️ Checklist du bon plan :
✓ Chaque partie répond à une idée différente (pas de répétition)
✓ Les parties s'enchaînent logiquement
✓ Le plan répond à la problématique
✓ Pas de "fourre-tout" dans une partie`
      },
      {
        title: '✍️ Rédiger l\'introduction (15 min)',
        content: `L'introduction se rédige APRÈS avoir établi le plan complet.

Structure en 6 temps :

1. ACCROCHE (3-4 lignes)
Choisissez : une citation, un fait historique saisissant, un paradoxe, une date symbolique.
Exemple : "En 1920, le Sénat américain rejette le Traité de Versailles et refuse d'entrer dans la Société des Nations pourtant imaginée par le président Wilson. Paradoxe saisissant pour une nation qui vient de contribuer à la victoire des Alliés en 1918 et qui deviendra, quelques décennies plus tard, le gendarme du monde."

2. PRÉSENTATION DU SUJET (3-4 lignes)
Contextualisez le sujet dans son cadre historique général.

3. DÉFINITION DES TERMES CLÉS (2-3 lignes)
Définissez précisément les mots importants du sujet.
Exemple : "'Hégémonie' désigne ici une domination à la fois politique, militaire, économique et culturelle sur l'ensemble des relations internationales."

4. DÉLIMITATION (2 lignes)
Bornes chronologiques (1918 → 2024) et spatiales (échelle mondiale).

5. PROBLÉMATIQUE (1-2 phrases)
Formulée clairement. Conseillé : la noter entre guillemets ou en italique pour la marquer.

6. ANNONCE DU PLAN (3-4 lignes)
"Dans un premier temps, nous montrerons que... Puis nous analyserons comment... Enfin, nous verrons que..."

Longueur totale : 20–25 lignes.`
      },
      {
        title: '📝 Rédiger le développement (2h30)',
        content: `STRUCTURE D'UNE SOUS-PARTIE (environ 20 lignes) :

1. Idée directrice (1-2 lignes) : énoncez clairement l'argument que vous allez démontrer.
2. Développement (10-12 lignes) : mobilisez 2 à 3 exemples précis (dates, noms, faits chiffrés).
3. Analyse (5-6 lignes) : en quoi cet exemple répond-il à votre argument ? Quelle leçon en tirer ?

FORMULES UTILES :
• Pour introduire un argument : "C'est dans ce contexte que... / Il convient d'abord de noter que..."
• Pour apporter un exemple : "Ainsi, en [date]... / L'exemple de [fait] illustre parfaitement..."
• Pour analyser : "Cela montre que... / Ce faisant... / On comprend dès lors que..."
• Pour nuancer : "Cependant... / Toutefois, il serait réducteur de... / Cette interprétation mérite d'être nuancée car..."
• Pour conclure une partie : "Ainsi, [bilan de la partie], ce qui nous conduit à nous demander [transition vers la partie suivante]."

TRANSITIONS (obligatoires entre chaque partie) :
• Bilan de la partie + lien logique vers la suivante (3-4 lignes)
Exemple : "Ainsi, si les États-Unis ont bien affirmé leur hégémonie mondiale dans le contexte de la Guerre Froide, la question se pose de savoir si cette domination a résisté aux bouleversements géopolitiques de l'après-1991."

À ÉVITER ABSOLUMENT :
✗ "Dans cette partie, je vais vous parler de..."
✗ Paragraphes sans exemples
✗ Exemples sans analyse
✗ Copier-coller d'une liste de dates sans les relier à l'argument`
      },
      {
        title: '🏁 Rédiger la conclusion (15 min)',
        content: `La conclusion se rédige en 3 temps :

1. BILAN (4-5 lignes)
Résumez les grandes étapes de votre démonstration en lien direct avec la problématique.
"Notre étude a montré que les États-Unis ont d'abord refusé d'assumer leur rôle de puissance mondiale avant d'y être contraints par les événements (1918–1945), qu'ils ont ensuite structuré l'ordre mondial à leur avantage pendant la Guerre Froide, et qu'ils font aujourd'hui face à une remise en cause profonde de cette hégémonie."

2. RÉPONSE À LA PROBLÉMATIQUE (2-3 lignes)
Donnez une réponse nuancée et synthétique à votre question centrale.
"Ainsi, la puissance américaine apparaît moins comme une domination stable que comme un équilibre instable, constamment redéfini face aux mutations du monde."

3. OUVERTURE (2-3 lignes)
Prolongez vers une autre dimension, un autre problème.
"Cette remise en cause de la puissance américaine invite à s'interroger sur la nature du nouvel ordre mondial en construction, entre rivalité sino-américaine et aspirations multilatérales des puissances émergentes."

RÈGLES :
✓ Ne PAS commencer par "En conclusion," ou "Pour conclure,"
✓ Ne pas introduire de nouvelles idées
✓ Longueur : 10–15 lignes`
      },
      {
        title: '💡 Les 10 erreurs qui coûtent des points',
        content: `1. Pas de problématique (ou une problématique fermée avec réponse par oui/non)
2. Plan chronologique quand le sujet ne le demande pas
3. Introduction rédigée AVANT le plan → souvent incohérente
4. Paragraphes sans exemples précis → "il y a eu une guerre" sans date ni lieu
5. Exemples sans analyse → "En 1945, la bombe atomique fut lancée" sans expliquer pourquoi c'est pertinent
6. Pas de transitions entre les parties
7. Conclusion qui résume sans répondre à la problématique
8. Hors-sujet partiel : parler de thèmes proches mais pas exactement du sujet
9. Oublier de délimiter le sujet dans le temps et dans l'espace
10. Rédiger tout d'une traite sans relire → fautes de syntaxe, incohérences

BONUS — Phrases à bannir :
✗ "Depuis la nuit des temps..."
✗ "De nos jours, le monde a beaucoup changé..."
✗ "Comme nous l'avons vu..."
✗ "Il y a beaucoup de choses à dire sur ce sujet..."`
      }
    ]
  },
  {
    id: 'composition',
    icon: BookOpen,
    color: '#1B4F72',
    title: 'Composition Bac 1ère',
    level: 'Bac 1ère',
    sections: [
      {
        title: '📋 Format et spécificités de la 1ère',
        content: `La composition en 1ère dure 2h. Elle est plus courte et plus ciblée que la dissertation de Terminale.

CE QUI EST IDENTIQUE à la Terminale :
✓ Introduction (accroche, contexte, problématique, annonce du plan)
✓ Plan en 2 ou 3 parties thématiques
✓ Conclusion avec bilan et ouverture
✓ Exemples précis obligatoires

CE QUI CHANGE :
• Durée : 2h au lieu de 4h → soyez efficaces
• Sujets plus ciblés, directement issus du programme
• Longueur : 4 à 6 pages (contre 8 à 10 en Terminale)
• Niveau de complexité légèrement inférieur

SUJETS TYPIQUES DE 1ÈRE :
• "La France et la Seconde Guerre mondiale"
• "Les Européens dans la Première Guerre mondiale"
• "Les États-Unis, une nouvelle grande puissance (1918–1945)"
• "La Ve République, institutions et pratiques du pouvoir"`
      },
      {
        title: '⏱️ Gestion du temps (2h)',
        content: `• 0:00 – 0:20 → Analyse du sujet + Problématique + Plan (brouillon)
• 0:20 – 0:35 → Rédaction de l'introduction
• 0:35 – 1:40 → Rédaction du développement (2 ou 3 parties)
• 1:40 – 1:55 → Rédaction de la conclusion
• 1:55 – 2:00 → Relecture rapide

MÉMO : LRPS-R
→ Lire (le sujet 3 fois)
→ Remuer-méninges (tout ce que vous savez)
→ Problématiser (la question centrale)
→ Structurer (plan en 2 ou 3 axes)
→ Rédiger`
      },
      {
        title: '🏗️ Construire le plan en 2h',
        content: `Exemple complet : "La France dans la Seconde Guerre mondiale (1939-1945)"

ANALYSE DU SUJET :
→ "La France" : l'État mais aussi la société, les individus, les mouvements
→ "dans la SGM" : pas juste la guerre militaire, mais aussi l'Occupation, la Résistance, la collaboration
→ 1939-1945 : bornes précises à respecter

PROBLÉMATIQUE : "Comment la France a-t-elle traversé la Seconde Guerre mondiale, entre effondrement de la République, collaboration d'État et résistance croissante ?"

PLAN EN 3 PARTIES :
I. L'effondrement et le choix de la collaboration (1940-1942)
   A. La défaite militaire et l'armistice de juin 1940
   B. Le régime de Vichy et la collaboration d'État

II. La Résistance : naissance et organisation (1940-1944)
   A. Les premières formes de résistance intérieure et extérieure
   B. L'unification de la Résistance (Jean Moulin, CNR, 1943)

III. La Libération et les enjeux du retour de la République (1944-1945)
   A. Le débarquement et la libération du territoire
   B. L'épuration et la reconstruction de la légitimité républicaine`
      },
      {
        title: '✍️ L\'introduction en 1ère',
        content: `En 1ère, l'introduction doit être complète mais plus concise qu'en Terminale. Visez 15 lignes.

EXEMPLE D'INTRODUCTION pour "La France dans la Seconde Guerre mondiale" :

Accroche : "Le 17 juin 1940, le maréchal Pétain annonce à la radio que la France demande l'armistice à l'Allemagne nazie. Le lendemain, depuis Londres, un général inconnu du grand public, Charles de Gaulle, appelle les Français à ne pas accepter la défaite. Ces deux discours, nés le même jour, résument à eux seuls la tragédie et la complexité de la France face à la Seconde Guerre mondiale."

Contextualisation : "Engagée dans le conflit depuis septembre 1939, la France subit en six semaines une défaite militaire foudroyante face à l'Allemagne. Cette défaite ouvre une période inédite de son histoire : l'Occupation, durant laquelle coexistent collaboration d'État, résistance et attentisme d'une population prise en étau."

Problématique : "Comment la France a-t-elle traversé ces années de guerre, entre soumission à l'occupant et combat pour la liberté ?"

Annonce : "Nous verrons d'abord comment la défaite conduit à l'établissement du régime de Vichy et de la collaboration, avant d'étudier la naissance et l'organisation de la Résistance, et enfin d'analyser les enjeux de la Libération de 1944."`
      },
      {
        title: '💡 Exemples précis à maîtriser (programme 1ère)',
        content: `PREMIÈRE GUERRE MONDIALE :
• Août 1914 : Union sacrée en France
• 1916 : Bataille de Verdun (300 000 morts)
• Conditions de vie dans les tranchées : boue, rats, gaz (ypérite)
• Mutineries de 1917 : crise du moral
• 11 novembre 1918 : armistice

FRANCE ET 2ÈME GUERRE MONDIALE :
• Juin 1940 : défaite, appel du 18 juin (de Gaulle), armistice
• Régime de Vichy : "Travail, Famille, Patrie", Pétain chef de l'État
• Collaboration : Laval, rafle du Vel d'Hiv (juillet 1942, 13 000 juifs arrêtés)
• Résistance : Jean Moulin (CNR, mai 1943), maquis, FFI
• Juin 1944 : débarquement en Normandie, Libération de Paris (août 1944)
• Épuration : procès Pétain (1945)

ÉTATS-UNIS (1918-1945) :
• Années 1920 : isolationnisme, krach de 1929, New Deal (Roosevelt, 1933)
• Pearl Harbor : 7 décembre 1941
• Conférences de Yalta et Potsdam (1945)
• 6 et 9 août 1945 : bombes atomiques sur Hiroshima et Nagasaki`
      }
    ]
  },
  {
    id: 'document',
    icon: FileText,
    color: '#27AE60',
    title: 'Étude de documents',
    level: 'Brevet & Bac',
    sections: [
      {
        title: '📄 Analyser un texte historique',
        content: `LA GRILLE EN 7 POINTS (à appliquer systématiquement) :

1. NATURE : Quel type de document ? (discours officiel, lettre personnelle, article de presse, extrait de loi, témoignage, rapport diplomatique...)
→ La nature conditionne le point de vue et la fiabilité.

2. AUTEUR : Qui a écrit ce document ?
→ Identité, statut social, rôle politique, nationalité, époque
→ Quels sont ses intérêts, ses partis-pris possibles ?

3. DATE : Quand a-t-il été écrit ?
→ À quel moment de l'histoire ? Quel est le contexte immédiat ?
→ Y a-t-il un décalage entre la date des faits et la date de rédaction ?

4. DESTINATAIRE : À qui s'adresse ce texte ?
→ Grand public, gouvernement, armée, parti politique... → influence le ton et le contenu.

5. THÈSE DE L'AUTEUR : Quelle est l'idée centrale défendue ?
→ Résumez en 1-2 phrases le message principal du document.

6. ARGUMENTS : Comment l'auteur défend-il sa thèse ?
→ Exemples, chiffres, appels à l'émotion, références historiques...

7. LIMITES ET CRITIQUE : Ce que le document ne dit pas / ce qu'il déforme / ses biais
→ C'est souvent ce qui distingue un bon devoir d'un excellent devoir.

EXEMPLE D'INTRODUCTION DE COMMENTAIRE :
"Ce document est un discours prononcé par le général de Gaulle le 18 juin 1940 sur les ondes de la BBC à Londres. Général de brigade récemment nommé sous-secrétaire d'État à la Guerre, de Gaulle refuse l'armistice signé par Pétain et s'adresse depuis l'Angleterre aux militaires et aux Français pour les appeler à continuer le combat. Ce discours, prononcé dans un contexte d'effondrement militaire total, constitue l'acte fondateur de la France Libre."`
      },
      {
        title: '🖼️ Analyser une affiche ou image de propagande',
        content: `Les images de propagande sont fréquentes au Brevet et au Bac.

GRILLE D'ANALYSE :

1. DESCRIPTION (ce que vous voyez objectivement)
→ Éléments visuels : personnages, couleurs, symboles, texte présent
→ Composition : premier plan / arrière-plan, mise en scène

2. IDENTIFICATION DES SYMBOLES
→ Que représentent les couleurs ? (rouge = révolution / danger ; bleu, blanc, rouge = France...)
→ Que représentent les figures ? (aigle = force ; faucille et marteau = URSS...)
→ Que représente le texte inscrit sur l'affiche ?

3. MESSAGE DE L'AUTEUR
→ Quel sentiment veut-on provoquer ? (peur, fierté, patriotisme, haine de l'ennemi)
→ Quelle image de l'ennemi / de "nous" est construite ?

4. CONTEXTE ET MISE EN PERSPECTIVE
→ À quelle période correspond cette affiche ? Quel événement l'a motivée ?
→ Mobilisez vos connaissances pour enrichir l'analyse.

5. CRITIQUE
→ En quoi est-ce de la propagande ? Quels procédés rhétoriques ou visuels sont utilisés ?
→ Quelle est la fiabilité de cette source pour un historien ?

ERREUR FRÉQUENTE : décrire l'image sans l'analyser = hors-sujet. L'essentiel est l'interprétation.`
      },
      {
        title: '🗺️ Analyser une carte historique',
        content: `LES ÉTAPES :

1. IDENTIFIER : titre, date, échelle géographique
2. LIRE LA LÉGENDE : quels sont les figurés utilisés ?
   • Aplats de couleurs → zones, territoires, blocs
   • Points/cercles → villes, ressources ponctuelles
   • Flèches → flux, mouvements, invasions
   • Hachures → zones de conflit, instabilité
3. DÉCRIRE LES ÉLÉMENTS PRINCIPAUX
4. INTERPRÉTER : que révèle cette carte sur la situation historique ?
5. CONTEXTUALISER avec vos connaissances
6. CRITIQUER : que ne montre-t-elle pas ? Quelle est sa limite ?

POUR LE CROQUIS CARTOGRAPHIQUE (HGGSP) :
1. Lisez la consigne : quelles informations doivent apparaître ?
2. Inventoriez sur brouillon les éléments à représenter
3. Choisissez les figurés adaptés à chaque type d'information
4. Construisez la LÉGENDE avant de dessiner (organisée en rubriques)
5. Tracez proprement, écrivez le titre, complétez la légende

La légende doit être ORGANISÉE (pas une liste de symboles dans le désordre) :
• Rubrique 1 : Puissances et territoires
• Rubrique 2 : Flux et échanges
• Rubrique 3 : Zones de tension / conflit

ERREUR À ÉVITER : faire un dessin artistique au lieu d'un croquis schématique. La lisibilité prime.`
      },
      {
        title: '📊 Analyser un tableau statistique ou graphique',
        content: `LES ÉTAPES :

1. IDENTIFIER : titre, date, source, unité de mesure, période couverte
2. LIRE : quelle est la tendance générale ?
3. REPÉRER les points saillants : pics, ruptures, anomalies
4. INTERPRÉTER : pourquoi ces chiffres ? Quel événement historique explique cette tendance ?
5. CONTEXTUALISER avec vos connaissances
6. CRITIQUER : qui a produit ces données ? Sont-elles fiables ? Que ne mesurent-elles pas ?

EXEMPLE :
Tableau montrant l'évolution du PIB mondial 1929-1935 :
→ Lecture : chute brutale entre 1929 et 1932
→ Interprétation : effets du krach boursier d'octobre 1929 et de la Grande Dépression
→ Contextualisation : faillites bancaires en cascade, chômage de masse (25% aux USA), montée des fascismes
→ Critique : le PIB ne mesure pas les inégalités sociales ou la crise dans les pays colonisés

FORMULES UTILES :
• "On constate que... ce qui traduit..."
• "Cette évolution s'explique par..."
• "Toutefois, cette source présente des limites : elle ne tient pas compte de..."`
      },
      {
        title: '🔗 Confronter plusieurs documents (HGGSP)',
        content: `En HGGSP, l'exercice porte souvent sur 2 à 3 documents à confronter.

MÉTHODE EN 5 TEMPS :

1. ANALYSER CHAQUE DOCUMENT SÉPARÉMENT
Appliquez la grille (nature, auteur, date, thèse, arguments, limites) pour chaque document.

2. IDENTIFIER LE SUJET COMMUN
Quelle question ou thématique relie ces documents entre eux ?

3. CONFRONTER : CONVERGENCES ET DIVERGENCES
• Points d'accord : "Les deux documents s'accordent pour..."
• Points de désaccord : "Là où le document 1 affirme X, le document 2 au contraire soutient Y..."
• Complémentarité : "Le document 1 apporte un éclairage politique que le document 2 complète d'une perspective économique..."

4. MOBILISER VOS CONNAISSANCES
Apportez des éléments de cours qui enrichissent ou nuancent les documents.
"Ces documents peuvent être mis en relation avec... / On peut ajouter que..."

5. PORTER UN REGARD CRITIQUE SUR L'ENSEMBLE
→ Quelle vision du monde chaque auteur défend-il ?
→ Quels angles-morts ces documents laissent-ils ?

FORMULES DE CONFRONTATION :
• "Si le document 1 met en avant..., le document 2, en revanche, insiste sur..."
• "Ces deux sources convergent sur le fait que..., mais divergent quant à..."
• "La confrontation de ces documents révèle la complexité de la question : d'un côté... de l'autre..."`
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
        title: '📋 Format de l\'épreuve HGGSP au Bac',
        content: `L'épreuve de spécialité HGGSP (4h) comporte deux exercices au choix :

EXERCICE 1 — Étude critique de documents (obligatoire pour tous)
• 2 ou 3 documents sur un même thème
• Analyse, confrontation, mise en perspective avec le cours
• Environ 2h

EXERCICE 2 — Au choix :
• Dissertation (sur un thème du programme)
• Croquis cartographique + légende organisée

THÈMES DU PROGRAMME (Terminale) :
• Thème 6 : De nouveaux espaces de conquête
• Thème 7 : Faire la guerre, faire la paix
• Thème 8 : Histoire et mémoires
• Thème 9 : Identifier, protéger et valoriser le patrimoine
• Thème 10 : L'environnement, entre exploitation et protection
• Thème 11 : L'enjeu de la connaissance`
      },
      {
        title: '📝 L\'étude critique de documents en HGGSP',
        content: `C'est l'exercice central de la HGGSP. Le correcteur attend que vous fassiez preuve d'esprit critique et de recul analytique.

PLAN TYPE (non rédigé mais structuré) :

INTRODUCTION :
• Présentation des documents (nature, auteur, date, contexte)
• Identification du sujet commun
• Problématique : quelle question ces documents posent-ils ?

DÉVELOPPEMENT en 2 ou 3 parties :
• Partie 1 : Analyse des idées communes / convergences
• Partie 2 : Divergences, contradictions, tensions entre les documents
• Partie 3 : Mise en perspective avec vos connaissances + regard critique

CONCLUSION :
• Bilan de la confrontation
• Prise de position argumentée sur les limites des documents

FORMULES POUR LA CRITIQUE :
• "Ce document, en tant que [nature], tend à surreprésenter [point de vue] au détriment de..."
• "L'auteur, qui est [statut], ne peut être considéré comme neutre dans la mesure où..."
• "Ce document ne prend pas en compte [dimension manquante], ce qui en limite la portée..."`
      },
      {
        title: '🗺️ Le croquis cartographique HGGSP',
        content: `Le croquis est noté sur 10 points. Il est évalué sur :
• La pertinence des informations choisies (5 pts)
• La qualité de la légende organisée (3 pts)
• La lisibilité et le soin (2 pts)

MÉTHODE PAS-À-PAS :

ÉTAPE 1 — Lire la consigne (5 min)
"Réalisez un croquis montrant les enjeux géopolitiques de l'Arctique."
→ Identifiez les grandes catégories d'informations à représenter.

ÉTAPE 2 — Inventaire sur brouillon (10 min)
Listez tout ce que vous savez sur le sujet : pays concernés, ressources, routes, conflits, organisations...

ÉTAPE 3 — Choisir les figurés (5 min)
• Aplats → zones d'influence, territoires revendiqués
• Points/étoiles → capitales, villes clés, ressources ponctuelles
• Flèches → routes maritimes, flux, mouvements
• Hachures → zones de tension, zones contestées
• Traits → frontières, limites

ÉTAPE 4 — Construire la légende AVANT de dessiner (10 min)
Organisez-la en 2 ou 3 rubriques logiques :
Ex : I. Des ressources stratégiques / II. Des acteurs aux intérêts divergents / III. Un espace de tensions géopolitiques

ÉTAPE 5 — Tracer le croquis (20 min)
Soyez propres et lisibles. Pas artistique : schématique.

ÉTAPE 6 — Titre + vérification de la légende (5 min)`
      },
      {
        title: '📚 Notions-clés par thème',
        content: `THÈME 7 — GUERRE ET PAIX :
Clausewitz ("la guerre est la continuation de la politique par d'autres moyens"), guerre totale, guerre asymétrique, guerre hybride, guerre de l'information, diplomatie, dissuasion nucléaire, TNP (1968), ONU, Conseil de Sécurité, droit international humanitaire (Conventions de Genève), DIH, R2P (Responsabilité de Protéger), casques bleus, résolution de conflit

THÈME 8 — HISTOIRE ET MÉMOIRES :
Paul Ricœur (La Mémoire, l'Histoire, l'Oubli), Pierre Nora (Les Lieux de mémoire), mémoire collective vs histoire scientifique, devoir de mémoire, lois mémorielles (loi Gayssot 1990), négationnisme, révisionnisme, travail de mémoire, réconciliation franco-allemande, mémoire de la Shoah, mémoire coloniale

THÈME 9 — PATRIMOINE :
UNESCO (1945), Convention du patrimoine mondial (1972), patrimoine immatériel (Convention 2003), liste rouge ICOM, patrimoine en danger, conflits patrimoniaux (destruction de Palmyre par Daech, pillages), tourisme de masse et préservation, numérisation (projet Europeana), restitution des œuvres

THÈME 10 — ENVIRONNEMENT :
Développement durable (rapport Brundtland 1987 : "répondre aux besoins du présent sans compromettre ceux des générations futures"), Sommet de Rio (1992), Protocole de Kyoto (1997), Accord de Paris (COP21, 2015, +1.5/+2°C), GIEC, déforestation (Amazonie), biodiversité (COP15 Kunming 2022), anthropocène, géopolitique des ressources

THÈME 11 — CONNAISSANCE :
Propriété intellectuelle, brevets, copyright, open source, accès ouvert, fracture numérique (Nord/Sud, urbain/rural), GAFAM et concentration des données, souveraineté numérique, fake news, fact-checking, intelligence artificielle et éthique`
      },
      {
        title: '💡 Auteurs et références à citer en HGGSP',
        content: `Citer des auteurs de référence valorise fortement votre copie.

GUERRE ET PAIX :
• Carl von Clausewitz (1780-1831) : "De la guerre" → la guerre comme acte politique
• Raymond Aron : "Paix et guerre entre les nations" (1962)
• Hans Morgenthau : réalisme, puissance et intérêt national

HISTOIRE ET MÉMOIRES :
• Paul Ricœur : distinction mémoire (subjective) / histoire (scientifique)
• Pierre Nora : "Les Lieux de mémoire" — les traces matérielles et symboliques du passé
• Tzvetan Todorov : "Les Abus de la mémoire" — danger du devoir de mémoire mal orienté

PATRIMOINE :
• Françoise Choay : "L'Allégorie du patrimoine" — la patrimonialisation comme processus social
• UNESCO : définitions officielles du patrimoine mondial

ENVIRONNEMENT :
• Rachel Carson : "Printemps silencieux" (1962) — fondatrice de l'écologie moderne
• Rapport Meadows (1972) : "Halte à la croissance" — limites planétaires
• Nicholas Stern : économie du changement climatique

CONNAISSANCE :
• Dominique Wolton : fracture numérique et communication mondiale
• Yochai Benkler : "La Richesse des réseaux" — économie du partage de l'information`
      }
    ]
  },
  {
    id: 'brevet',
    icon: GraduationCap,
    color: '#E67E22',
    title: 'Méthode Brevet 3ème',
    level: 'Brevet',
    sections: [
      {
        title: '📋 Format complet de l\'épreuve (2h)',
        content: `L'épreuve d'Histoire-Géographie-EMC au Brevet dure 2h et se divise en 3 parties :

PARTIE 1 — Analyser et comprendre des documents (environ 30 min)
• 1 ou 2 documents (texte, carte, image, tableau)
• Questions à réponse courte (3 à 6 lignes par question)
• Pas de rédaction continue — répondez point par point
• Barème : environ 20 points

PARTIE 2 — Maîtriser des repères historiques ou géographiques (environ 20 min)
• Exercice de localisation sur carte OU frise chronologique à compléter
• Questions de repères à replacer dans l'espace ou le temps
• Barème : environ 10 points

PARTIE 3 — Raisonner, justifier une démarche et des choix (environ 50 min)
• Paragraphe argumenté (histoire ou géographie)
• Croquis simple (géographie)
• Barème : environ 20 points

TOTAL : 50 points`
      },
      {
        title: '✍️ Le paragraphe argumenté au Brevet',
        content: `Le paragraphe argumenté est l'exercice central du Brevet. Il n'est PAS une dissertation mais un texte organisé et argumenté.

STRUCTURE ATTENDUE (minimum 20 lignes) :

1. PHRASE D'INTRODUCTION (2-3 lignes)
Présentez le sujet et annoncez votre angle de réponse.
Exemple : "La Première Guerre mondiale (1914-1918) constitue un conflit d'une ampleur et d'une violence sans précédent dans l'histoire. Nous montrerons qu'elle représente une guerre totale qui mobilise l'ensemble des sociétés belligérantes."

2. ARGUMENT 1 + EXEMPLE PRÉCIS (4-5 lignes)
"Premièrement, la Grande Guerre est une guerre de masse qui mobilise des millions d'hommes. Ainsi, la France mobilise près de 8 millions de soldats, qui combattent dans des conditions atroces dans les tranchées. La bataille de Verdun (février-décembre 1916) cause à elle seule environ 300 000 morts des deux côtés."

3. ARGUMENT 2 + EXEMPLE PRÉCIS (4-5 lignes)
"De plus, c'est une guerre totale qui mobilise l'ensemble de la société civile. Les femmes entrent massivement dans les usines pour fabriquer des armes et munitions (les 'munitionnettes'). L'économie tout entière est reconvertie pour l'effort de guerre."

4. ARGUMENT 3 + EXEMPLE PRÉCIS si possible (4-5 lignes)
"Enfin, ce conflit utilise des armes nouvelles particulièrement meurtrières. L'usage des gaz de combat (ypérite, phosgène) à partir de 1915, les chars d'assaut, l'aviation : ces innovations technologiques amplifient le massacre."

5. CONCLUSION (2-3 lignes)
"Ainsi, la Première Guerre mondiale représente bien une rupture majeure dans l'histoire des conflits : par son ampleur, sa durée et la mobilisation totale des sociétés, elle inaugure une ère de guerres industrielles et de masse."

ASTUCE CLÉ : 1 argument = 1 exemple précis (chiffre, date, nom de lieu, nom de personne)`
      },
      {
        title: '📅 Repères chronologiques incontournables',
        content: `Les repères à connaître ABSOLUMENT pour le Brevet 3ème :

🌍 PREMIÈRE ET DEUXIÈME GUERRE MONDIALE :
• 1914-1918 : Première Guerre mondiale
• 1916 : Bataille de Verdun (~300 000 morts)
• 1917 : Révolution russe (abdication du tsar, prise du pouvoir par Lénine)
• 1917 : Entrée en guerre des États-Unis
• 11 novembre 1918 : Armistice
• 28 juin 1919 : Traité de Versailles
• 1929 : Krach boursier de Wall Street (Grande Dépression)
• 1933 : Hitler chancelier d'Allemagne
• 1939-1945 : Seconde Guerre mondiale
• Juin 1940 : Défaite française, appel du 18 juin (de Gaulle)
• Juillet 1942 : Rafle du Vel d'Hiv (13 000 juifs arrêtés à Paris)
• Juin 1944 : Débarquement en Normandie
• Août 1944 : Libération de Paris
• 6 août 1945 : Bombe atomique sur Hiroshima
• 2 septembre 1945 : Capitulation du Japon

🌐 GUERRE FROIDE :
• 1947 : Début de la Guerre Froide (discours Truman, plan Marshall)
• 1949 : Création de l'OTAN
• 1950-1953 : Guerre de Corée
• 1962 : Crise des missiles de Cuba
• 1989 : Chute du mur de Berlin (9 novembre)
• 1991 : Dissolution de l'URSS (25 décembre)

🌍 DÉCOLONISATION :
• 1947 : Indépendance de l'Inde et du Pakistan
• 1954-1962 : Guerre d'Algérie
• 1960 : Année des indépendances africaines
• 1962 : Accords d'Évian → Indépendance de l'Algérie

🇫🇷 FRANCE :
• 1944 : Droit de vote des femmes en France
• 1946 : IVe République
• 1958 : Ve République (de Gaulle)
• 1969 : Démission de de Gaulle`
      },
      {
        title: '💬 Formules et connecteurs pour le paragraphe argumenté',
        content: `POUR COMMENCER :
• "Le [sujet] constitue..."
• "Pendant [période], [sujet] se caractérise par..."
• "La [période/événement] représente un tournant majeur car..."

POUR INTRODUIRE UN ARGUMENT :
• "Tout d'abord / Premièrement / Dans un premier temps..."
• "En effet, ..."
• "On peut noter que..."

POUR INTRODUIRE UN EXEMPLE :
• "Ainsi, en [date]..."
• "C'est le cas de [fait/événement] qui..."
• "L'exemple de [nom/lieu] illustre parfaitement cela : ..."
• "Par exemple, lors de [événement]..."

POUR RELIER ARGUMENT ET EXEMPLE :
• "Cela montre que..."
• "Ce fait démontre que..."
• "On comprend ainsi que..."

POUR PASSER À L'ARGUMENT SUIVANT :
• "De plus / Par ailleurs / En outre..."
• "Il faut également souligner que..."
• "Un autre élément important est..."

POUR CONCLURE :
• "Ainsi, [bilan synthétique]..."
• "En définitive, [sujet] se caractérise donc par..."
• "Ces différents éléments montrent que..."

MOTS À ÉVITER :
✗ "Et puis" / "Aussi" en début de phrase / "Donc" en début de phrase
✗ "Comme on peut le voir" (trop oral)
✗ "Il y a beaucoup de choses à dire sur..."
✗ "Depuis toujours / De tout temps..."`
      },
      {
        title: '🎯 Répondre aux questions sur documents',
        content: `Les questions sur documents au Brevet appellent des réponses COURTES et PRÉCISES.

RÈGLES D'OR :
✓ Répondez toujours en vous appuyant sur le document (citez des extraits entre guillemets)
✓ Complétez avec vos connaissances si la question le demande ("À l'aide du document ET de vos connaissances...")
✓ Répondez DIRECTEMENT à la question posée : pas d'introduction inutile
✓ Soignez la formulation : phrase complète, pas de tirets

TYPES DE QUESTIONS FRÉQUENTES :
• "D'après le document, quels sont les arguments de l'auteur ?"
→ Repérez les idées principales et citez le document.

• "Que vous apprend ce document sur [situation] ?"
→ Identifiez les informations explicites ET les informations implicites.

• "En quoi ce document est-il un document de propagande ?"
→ Identifiez les procédés : simplification, dénigrement de l'ennemi, valorisation de "nous", appel à l'émotion.

• "À l'aide du document et de vos connaissances, expliquez [phénomène]."
→ Commencez par le document, puis ajoutez des éléments de cours.

PIÈGE À ÉVITER : paraphraser le document sans l'analyser.
"Le document dit que la guerre a tué beaucoup de monde." → insuffisant
"Le document montre qu'avec 300 000 morts à Verdun en quelques mois, la Première Guerre mondiale atteint une ampleur industrielle sans précédent dans l'histoire." → bien`
      }
    ]
  },
  {
    id: 'oral',
    icon: PenLine,
    color: '#C0392B',
    title: 'Grand Oral & TPE',
    level: 'Bac Terminale / 1ère',
    sections: [
      {
        title: '🎤 Le Grand Oral du Bac (Terminale)',
        content: `Le Grand Oral est une épreuve de 20 minutes qui compte pour le Baccalauréat.

FORMAT :
• Préparation : 20 minutes
• Présentation : 5 minutes (sans notes)
• Échange avec le jury : 10 minutes
• Échange avec le jury sur le projet d'orientation : 5 minutes

VOUS AVEZ PRÉPARÉ 2 QUESTIONS en lien avec votre spécialité HGGSP.
Le jury choisit l'une des deux.

STRUCTURE DE LA PRÉSENTATION (5 min) :
1. Accroche (30 sec) : chiffre, anecdote, actualité qui donne envie d'écouter
2. Problématique (30 sec) : votre question, formulée clairement
3. Développement (3 min) : 2 ou 3 arguments avec exemples précis
4. Conclusion (1 min) : réponse nuancée + ouverture

CONSEILS :
✓ Regardez le jury dans les yeux
✓ Articulez clairement, ne parlez pas trop vite
✓ Ne récitez pas un texte appris par cœur : parlez avec naturel
✓ Si vous oubliez quelque chose : reformulez, ne restez pas silencieux
✓ Appuyez-vous sur un plan écrit sur la feuille de préparation`
      },
      {
        title: '💡 Choisir et formuler sa question HGGSP',
        content: `EXEMPLES DE BONNES QUESTIONS HGGSP :

Thème Guerre et paix :
• "La dissuasion nucléaire garantit-elle vraiment la paix ?"
• "Les organisations internationales sont-elles efficaces pour prévenir les conflits ?"
• "Qu'est-ce qu'une guerre juste au XXIe siècle ?"

Thème Histoire et mémoires :
• "Les lois mémorielles sont-elles nécessaires pour lutter contre le négationnisme ?"
• "Le devoir de mémoire peut-il devenir un abus de mémoire ?"
• "Comment la France a-t-elle construit sa mémoire de la Seconde Guerre mondiale ?"

Thème Environnement :
• "L'Accord de Paris peut-il suffire à enrayer le changement climatique ?"
• "La géopolitique des ressources est-elle une source de conflits au XXIe siècle ?"

Thème Connaissance :
• "L'intelligence artificielle menace-t-elle la souveraineté des États ?"
• "La fracture numérique est-elle encore un défi pour la mondialisation ?"

CRITÈRES D'UNE BONNE QUESTION :
✓ Ouverte (pas de réponse par oui ou non)
✓ En lien avec le programme HGGSP
✓ Suffisamment précise pour être traitée en 5 minutes
✓ Que vous connaissez vraiment bien`
      },
      {
        title: '🗣️ L\'échange avec le jury (10 min)',
        content: `L'échange avec le jury est souvent ce qui fait la différence. Le jury cherche à évaluer votre capacité à argumenter, nuancer et réagir.

CE QUE LE JURY VA FAIRE :
• Questionner vos exemples : "Pouvez-vous préciser ce que vous entendez par... ?"
• Vous pousser à nuancer : "N'y a-t-il pas des contre-exemples ?"
• Tester votre connaissance : "Quel auteur travaille sur cette question ?"
• Élargir le débat : "En quoi ce sujet est-il d'actualité ?"

COMMENT RÉPONDRE :
✓ Reformulez la question avant de répondre : "Si je comprends bien, vous me demandez si..."
✓ Admettez honnêtement si vous n'êtes pas sûr : "Je suis moins certain sur ce point, mais je pense que..."
✓ Nuancez vos réponses : évitez le tout ou rien
✓ Citez des auteurs ou des exemples précis pour valoriser votre réponse

SUR L'ORIENTATION (5 dernières minutes) :
Le jury vous demande comment ce sujet se relie à votre projet d'orientation.
Préparez 2-3 phrases qui montrent en quoi cette question vous a donné envie de poursuivre dans telle direction (droit international, géopolitique, sciences politiques, journalisme, etc.)`
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
        <p className="text-[#8B7355]">Guides complets et conseils de profs pour réussir vos épreuves</p>
      </div>

      {/* Sélecteur de guide */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
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
