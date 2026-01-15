const XENO_DATA = [
    // --- PIG SIDE ---
    { id: 'p1', side: 'pig', cat: 'Biotechnologie', title: 'ADN Réécrit', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80', y: 15, desc: "On efface l'identitée biologique du porc pour y inscrire une compatibilité humaine.", real: "69 gènes modifiés par CRISPR.", sts: "L'animal devient un artefact technique." },
    { id: 'p2', side: 'pig', cat: 'Condition Animale', title: 'Vie Stérile', img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80', y: 45, desc: "Élevés dans des bulles sans contact avec la nature, réduits à des usines à organes.", real: "Élevage DPF (Pathogen Free).", sts: "Réification du vivant sensible." },
    { id: 'p3', side: 'pig', cat: 'Risque', title: 'Virus Cachés', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80', y: 75, desc: "Le danger de réveiller des virus porcins endormis et de créer une pandémie.", real: "Rétrovirus PERV.", sts: "Sécurité collective vs Survie individuelle." },

    // --- HUMAN SIDE ---
    { id: 'h1', side: 'human', cat: 'Identité', title: 'Le Corps Intrus', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80', y: 20, desc: "Le trouble psychologique de vivre avec le cœur d'une bête.", real: "Troubles post-greffe.", sts: "La frontière Humain/Animal s'effondre." },
    { id: 'h2', side: 'human', cat: 'Culture', title: 'Le Tabou', img: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=600&q=80', y: 50, desc: "L'animal impur pour des milliards de croyants. La science heurte le sacré.", real: "Débats Halal/Casher.", sts: "Conflit Rationalité vs Croyance." },
    { id: 'h3', side: 'human', cat: 'Société', title: 'Inégalités', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', y: 80, desc: "Une technologie de luxe. Créera-t-on une humanité à deux vitesses ?", real: "Coût estimé > 500k$.", sts: "Biopolitique de classe." },

    // --- FRICTION SIDE ---
    // --- NOEUD FRICTION : DROIT ---
    // --- MISE À JOUR DU NOEUD VIDE JURIDIQUE (f1) ---
    { 
        id: 'f1', 
        side: 'friction', 
        cat: 'Droit', 
        title: 'Vide Juridique', 
        img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80', 
        y: 15, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>La xénotransplantation bouscule les catégories juridiques traditionnelles.</strong> Entre principes d'éthique et impératifs de sécurité sanitaire, le cadre légal varie radicalement d'une zone géographique à l'autre.</p>
            </div>
            
            <div class="pharma-section">
                <h3>1. Cadre juridique français</h3>
                <p>En France, la xénotransplantation clinique n’est pas explicitement autorisée et demeure juridiquement inopérante. Elle est toutefois partiellement encadrée par les lois de bioéthique et la loi Jardé, qui posent des principes éthiques généraux.</p>
                <p>L’absence de textes réglementaires d’application empêche cependant toute mise en œuvre clinique effective et nourrit les appels institutionnels à une réflexion nationale dédiée.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('loi_fr', 'f1')">Voir plus</a>
            </div>

            <div class="pharma-section">
                <h3>2. Cadre juridique international</h3>
                <p>À l’échelle internationale, la xénotransplantation ne relève pas d’un droit contraignant mais d’un ensemble de recommandations et de standards élaborés notamment par l’OMS et l’International Xenotransplantation Association (IXA).</p>
                <p>Ces dispositifs visent principalement la maîtrise du risque infectieux et la surveillance à long terme, tout en laissant aux États la responsabilité de leur traduction réglementaire.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('loi_int', 'f1')">Voir plus</a>
            </div>

            <div class="pharma-section">
                <h3>3. Cadre juridique américain</h3>
                <p>Aux États-Unis, la xénotransplantation s’inscrit dans un cadre juridique structuré reposant sur le droit des produits biologiques. La FDA joue un rôle central à travers les procédures d’essais cliniques et des lignes directrices spécifiques.</p>
                <p>Ce cadre, bien que non contraignant, définit des exigences précises en matière de sécurité sanitaire et constitue un cadre opérationnel de référence mondial.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('loi_usa', 'f1')">Voir plus</a>
            </div>`,
        real: "Hétérogénéité mondiale : Loi Jardé (FR), Guidelines FDA (USA), Résolution WHA57.18 (OMS).",
        sts: "Géographie réglementaire : l'innovation circule là où l'objet est qualifié juridiquement (produit vs organe). Le droit ne se contente pas d'encadrer, il 'co-produit' la faisabilité même de la technique par la gestion des risques."
    },

    { id: 'f2', side: 'friction', cat: 'Marché', title: 'Bio-Capital', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80', y: 85, desc: "Le corps devient une marchandise industrielle.", real: "Startups en bourse.", sts: "Le marché s'étend à la chair." },
    { id: 'f3', side: 'friction', cat: 'Droit International', title: 'Gouvernance Soft', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80', y: 65, desc: "Il n’existe aucun cadre international contraignant, seulement de la Soft Law (OMS).", real: "Résolution WHA57.18.", sts: "Harmonisation mondiale sans contrainte." },

 
    // --- NOEUD : PHARMA ---
    { 
        id: 'pharma_main', 
        side: 'friction', 
        cat: 'Industrie Pharmaceutique', 
        title: 'Co-Architecte', 
        img: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2140?auto=format&fit=crop&w=600&q=80', 
        y: 40, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Le régime thérapeutique qui devient une condition de possibilité de la greffe.</strong></p>
            </div>
            
            <div class="pharma-section">
                <h3>1. Le régime thérapeutique</h3>
                <p>La réussite clinique repose sur un régime thérapeutique complexe associant co-stimulation immunitaire et immunosuppression.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('regime', 'pharma_main')">Détails techniques</a>
            </div>

            <div class="pharma-section">
                <h3>2. Point sur la co-stimulation CD40/CD40L</h3>
                <p>L’axe CD40/CD40L joue un rôle central dans l’activation coordonnée des lymphocytes T et B.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('cd40', 'pharma_main')">Détails techniques</a>
            </div>

            <div class="pharma-section">
                <h3>3. Alliances pharmaceutiques</h3>
                <p>Partenariats articulant plateformes d’organes et molécules propriétaires.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('alliances', 'pharma_main')">Détails techniques</a>
            </div>`,
        real: "Co-production organe–molécule–dispositif.",
        sts: "L’industrie pharmaceutique est co-architecte de la xénotransplantation."
    },
    
];

const PHARMA_SUBS = {
    'regime': { 
        title: "Détails Techniques : Régime", 
        content: `<ul><li><strong>Bundle :</strong> Organe multi-modifié + anticorps anti-CD40 + perfusion ex-vivo.</li><li><strong>Dispositif chronique :</strong> La valeur bascule de l'acte chirurgical vers le suivi.</li></ul>`, 
        real: "NEJM 2022 (Maryland) : Utilisation explicite d'un anticorps anti-CD40 (Kiniksa/KPL-404)." 
    },
    'cd40': { 
        title: "Détails Techniques : CD40", 
        content: `<ul><li><strong>Novartis (Iscalimab) :</strong> Sert de réservoir de données sécurité.</li><li><strong>Axe CD40/CD40L :</strong> Centralité nourrit une controverse interne.</li></ul>`, 
        real: "Modèles porc → primate (2C10R4) montrant des survies prolongées." 
    },
    'alliances': { 
        title: "Détails Techniques : Alliances", 
        content: `<ul><li><strong>eGenesis – Eledon :</strong> Accès au tegoprubart (anti-CD40L).</li><li><strong>United Therapeutics :</strong> Exemple d'intégration verticale massive.</li></ul>`, 
        real: "La XTP se structure comme une plateforme industrielle." 
    },
    'loi_fr': { 
        title: "Cadre Juridique : France", 
        content: `<ul><li><strong>Loi Jardé :</strong> Cadre les recherches impliquant la personne humaine.</li><li><strong>ANSM :</strong> Autorité compétente pour l'utilisation thérapeutique de tissus animaux.</li><li><strong>Statut :</strong> Inopérant par manque de décrets d'application spécifiques.</li></ul><br>En France, il n’existe pas, à ce jour, de texte législatif ou réglementaire autorisant explicitement la XTP clinique. Néanmoins, plusieurs ensembles de texte définissent un premier cadre dans lequel une telle pratique pourrait théoriquement s’inscrire.<br><br>  

Les textes législatifs et règlementaires issus de la loi de bioéthique (adoptée en 1994 et révisée en 2004, 2011 et 2021) et de la loi Jardé (loi n°2012-300 relative aux recherches impliquant la personne humaine) constituent un premier socle essentiel. Codifiés principalement dans le Code de la Santé Publique (CSP), le Code civil et le Code pénal, ces textes définissent les principes éthiques fondamentaux (e.g. respect de la dignité, de l’intégrité et de la non-patrimonialité du corps humain), régissent le recueil du consentement libre et éclairé, et encadrent les recherches biomédicales et les procédures de greffe. <br> <br> 

La loi n°98-535 du 1ᵉʳ juillet 1998 relative au renforcement de la veille sanitaire et du contrôle de la sécurité sanitaire des produits destinés à l’homme a introduit dans le droit français un cadre pour « l'utilisation à des fins thérapeutiques d'organes ou de tissus d'origine animale qui ne sont ni des dispositifs médicaux ni destinés à des médicaments ». Ces dispositions, aujourd’hui codifiées à l’article L.1127-2 (partie législative) du CSP (dans sa version en vigueur depuis juillet 2022), prévoient que toute recherche impliquant l’utilisation thérapeutique d’organes, tissus ou cellules animaux chez l’être humain doit recevoir une autorisation expresse de l'Agence Nationale de Sécurité du Médicament et des Produits de Santé (ANSM), après avis de l’Agence de la Biomédecine (ABM). L’ANSM, après avis de l’ABM et de l’Agence Nationale de Sécurité Sanitaire de l’Alimentation, de l’Environnement et du Travail (ANSES), doit définir également les règles de bonnes pratiques concernant notamment l’élevage, la sélection, le statut sanitaire, et la traçabilité des animaux donneurs ainsi que le prélèvement et la manipulation des organes, tissus et cellules animaux. Un Comité de Protection des Personnes (CPP) doit également se prononcer sur l’acceptabilité éthique du protocole. Toutefois, comme l’ont souligné le Comité Consultatif National d’Ethique (CCNE) dès 1999 et, plus récemment, l’Académie Nationale de Médecine (ANM), ces dispositions législatives ne sont pas complétées par les textes réglementaires nécessaires à la pratique de la XTP clinique en France.<br> <br> 

Finalement, le décret n°2013-118 du 1ᵉʳ février 2013, qui transpose en droit français la directive 2010/63/UE relative à la protection des animaux utilisés à des fins scientifiques, encadre l’expérimentation animale et régit notamment l’évaluation éthique et l’autorisation des projets, l’agrément des établissements, les compétences des personnels, et les conditions d’élevage. <br> <br> 

En absence de cadre juridique permettant aujourd’hui la XTP clinique en France, l’ANM et l’ABM appellent à engager une réflexion nationale sur ses enjeux éthiques, juridiques et sociétaux ; le CCNE devrait prochainement inscrire cette question à ses projets de travaux.`, 
        real: "Articles L1241-1 et suivants du Code de la santé publique." 
    },
    'loi_int': { 
        title: "Cadre Juridique : International", 
        content: `<ul><li><strong>OMS (WHA57.18) :</strong> Résolution demandant aux États de limiter la XTP aux pays ayant une surveillance stricte.</li><li><strong>IXA Standards :</strong> Recommandations sur le dépistage des donneurs porcins.</li></ul>ll n’existe à ce jour aucun cadre juridique international contraignant régissant spécifiquement la XTP clinique. Cependant, plusieurs organisations internationales ont élaboré des normes et recommandations non obligatoires qui structurent profondément les politiques nationales et visent à harmoniser les standards de sécurité ainsi qu’à promouvoir une gouvernance éthique partagée.</br><br>

L’Organisation Mondiale de la Santé (OMS) joue un rôle central avec la publication, dès 1998, de recommandations centrées sur la prévention et la gestion du risque infectieux lié à la XTP. Elle y pose les bases d’une approche fondée sur la maîtrise du risque à la source, notamment par la sélection et le contrôle sanitaire strict des animaux donneurs, ainsi que sur la surveillance clinique à long terme des receveurs.</br><br>
Au début des années 2000, l’OMS élargit ce cadre en intégrant les dimensions éthiques, sociales et réglementaires de la XTP. Cette dynamique aboutit en 2004 à l’adoption de la résolution WHA57.18 qui encourage les États membres à ne pratiquer la XTP que sous réserve de la mise en place de mécanismes nationaux de surveillance et de cadres réglementaires efficaces et à renforcer la coopération internationale en matière de gestion du risque infectieux xénogénique.</br><br>
À partir de 2005, cette orientation se concrétise par une série de consultations mondiales soutenues par l’OMS. La première, qui se déroule Changsha en 2008 conduit à l’adoption du premier Communiqué de Changsha, actualisé lors des consultations de 2011 et 2018, afin d’intégrer notamment les avancées scientifiques, comme le développement de porcs génétiquement modifiés, et de renforcer la sensibilisation du public aux bénéfices potentiels de la XTP et aux risques liés à des pratiques insuffisamment réglementées.<br><br>

L’International Xenotransplantation Association (IXA), entité spécialisée de la Transplantation Society (TTS) créée en 1996, joue également un rôle capital en soutenant la recherche clinique et préclinique en matière de XTP, en favorisant les échanges scientifiques, en contribuant à l’information des professionnels de santé et du public et en participant à l’élaboration de politiques publiques scientifiquement fondées à l’échelle internationale. L’IXA a notamment contribué, en 2006, à la création d’un inventaire mondial des pratiques de xénotransplantation en partenariat avec l’OMS afin de renforcer la transparence et la promotion de normes harmonisées (https://humanxenotransplant.org/). Elle publie par ailleurs la revue scientifique Xenotransplantation qui diffuse les travaux récents du domaine et analyse les enjeux théologiques, éthiques, juridiques et psychologiques associés à la XTP, et organise des conférences internationales biennales réunissant les spécialistes de la XTP, la dernière s’étant tenue du 30 septembre au 3 octobre 2025 à Genève.<br><br>

Au niveau européen, le règlement (CE) n°1394/2007 du Parlement européen et du Conseil instaure un cadre spécifique pour les médicaments de thérapie innovante (ATMP), conduisant à intégrer dans le champ du droit pharmaceutique certains produits issus de la XTP lorsqu’ils répondent aux critères de qualification des ATMP, notamment en cas de manipulation substantielle ou de production industrielle. Cette qualification a été précisée en 2015 par un document d’orientation de l’Agence Européenne des Médicaments. Enfin, le Conseil de l’Europe complète ce paysage normatif par l’adoption en 2003 de la Recommandation Rec(2003)10 et d’un rapport sur l’état des connaissances en matière de XTP, proposant aux États membres un ensemble commun de principes et d’orientations combinant exigences sanitaires, éthiques, sociales et de coopération internationale.`, 
        real: "Directives de Changsha (2008) sur la sécurité et la traçabilité." 
    },
    'loi_usa': { 
        title: "Cadre Juridique: USA", 
        content: `<ul><li><strong>PHS Guideline :</strong> Surveillance à vie des receveurs et archivage des échantillons biologiques (50 ans).</li><li><strong>FDA CBER :</strong> Régule la XTP comme un 'Xenotransplantation Product'.</li></ul>Aux États-Unis, la pratique de la XTP est encadrée par un ensemble de lois fédérales et de textes réglementaires codifiés dans plusieurs titres du Code of Federal Regulations (CFR). Ce dispositif mobilise plusieurs agences fédérales placées sous l’autorité du Department of Health and Human Services (DHHS) et du Department of Agriculture (USDA).</br><br>
Le Public Health Service Act et le Federal Food, Drug, and Cosmetic Act constituent le socle juridique de l’autorité de la Food and Drug Administration (FDA) sur les produits biologiques et leur utilisation dans le cadre d’essais cliniques. Cette autorité est principalement exercée à travers le titre 21 du CFR, notamment les dispositions relatives aux Investigational New Drugs (IND), aux Biologics License Applications (BLA) et aux produits biologiques.</br><br>
La protection des personnes participant à la recherche biomédicale relève également du DHHS, à travers le National Research Act et les principes éthiques qui en découlent. Ces principes sont traduits sur le plan réglementaire dans le titre 45 du CFR ainsi que dans les exigences de consentement éclairé définies par la FDA au titre 21 du CFR.</br><br>
La gestion, l’utilisation et le bien-être des animaux donneurs sont encadrés par l’Animal Welfare Act, dont l’application relève principalement de l’USDA, à travers le titre 9 du CFR. Ce cadre s’articule avec les mécanismes de contrôle institutionnel assurés par les Institutional Animal Care and Use Committees (IACUC).</br><br>
Enfin, le National Organ Transplant Act, bien que conçu initialement pour l’allotransplantation, fournit un cadre institutionnel et organisationnel de référence, notamment via l’Organ Procurement and Transplantation Network.</br><br>

En complément de ce cadre juridique et réglementaire, la FDA, en coordination avec d’autres agences fédérales du DHHS, a élaboré depuis le milieu des années 1990 des guidelines spécifiques à la XTP. Le Draft Public Health Service Guideline on Infectious Disease Issues in Xenotransplantation publié en 1996, puis révisé en 2001, formule des recommandations non contraignantes destinées à orienter l’élaboration et l’évaluation des protocoles cliniques de XTP. Celles-ci portent notamment sur l’encadrement pluridisciplinaire et institutionnel de la pratique, la sélection et le contrôle sanitaire des animaux donneurs, la mise en place de systèmes de registres et d’archivage, la surveillance à long terme des receveurs, ainsi que sur les exigences de consentement éclairé intégrant l’incertitude scientifique et les risques pour des tiers.</br><br>

Ces orientations ont été précisées avec la publication, en 2003, du document Source Animal, Product, Preclinical, and Clinical Issues Concerning the Use of Xenotransplantation Products in Humans - Guidance for Industry, mis à jour en 2016. Bien que non juridiquement contraignant, ce guide constitue une référence centrale pour la préparation des dossiers soumis à la FDA, notamment dans le cadre des demandes d’IND et de BLA. Il précise les exigences attendues en matière de bonnes pratiques de fabrication (GMP) applicables aux produits de XTP, en détaillant notamment les procédures de sélection, d’élevage et de qualification sanitaire des animaux donneurs, les conditions de prélèvement et de manipulation des tissus ou organes, les protocoles de tests microbiologiques et virologiques de contrôle qualité, ainsi que les dispositifs de conservation, de transport, et de traçabilité.`, 
        real: "Section 351 du Public Health Service Act." 
    }
};


