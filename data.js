const XENO_DATA = [
    // --- CÔTÉ DONNEUR (PORC) : ALIGNEMENT GAUCHE ---
    { 
        id: 'p1', side: 'pig', cat: 'Standardisation Organique', title: 'L\'Animal-Pharmacie', 
        img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80', 
        y: 15, 
        desc: "L'animal n'est plus un être, c'est une technologie brevetée (CRISPR).", 
        sts: "Réification du vivant." 
    },
    { 
        id: 'p2', side: 'pig', cat: 'Fermes porcs transgéniques', title: 'Vies Stériles', 
        img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80', 
        y: 45, 
        desc: "L'existence en bulles aseptisées (DPF) pour garantir la sécurité sanitaire.", 
        sts: "Paradoxe : un animal 'sain' est un animal dénaturé." 
    },
    { 
        id: 'p3', side: 'pig', cat: 'Asso. Droits Animaux', title: 'Défense du Sentient', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/1923.06_-_Revue_de_la_Soci%C3%A9t%C3%A9_protectrice_des_animaux.jpg?auto=format&fit=crop&w=600&q=80', 
        y: 75, 
        desc: "La résistance citoyenne face à l'instrumentalisation.", 
        sts: "Conflit moral : survie humaine vs sacrifice animal." 
    },

 // --- CÔTÉ RECEVEUR (HUMAIN) : 4 NOEUDS ---
    { 
        id: 'h1', side: 'human', cat: 'Asso. Patients', title: 'Le Corps Hybride', 
        img: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ff?auto=format&fit=crop&w=600&q=80', 
        y: 15, // Aligné HAUT
        desc: "L'expérience intime de vivre avec l'organe d'une autre espèce.", 
        sts: "La frontière biologique du 'Soi' s'effondre." 
    },
    { 
        id: 'h4', side: 'human', cat: 'Bio-Économie', title: 'Le Coût de la Survie', 
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80', 
        y: 45, // Aligné MILIEU
        desc: "Technologie de luxe : une humanité à deux vitesses ?", 
        sts: "Biopolitique : sélection économique du droit de vivre." 
    },
    { 
        id: 'h2', side: 'human', cat: 'Corps humain', title: 'L\'Urgence Vitale', 
        img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=600&q=80', 
        y: 75, // Aligné BAS
        desc: "Le patient en attente qui réclame le 'Droit à l'essai'.", 
        sts: "La souffrance comme moteur technologique." 
    },

    // --- CENTRE / FRICTIONS : ALIGNEMENT CENTRAL SERRÉ ---
    
    // 1. PHILO (Haut)
    { 
        id: 'f_philo', side: 'friction', cat: 'Philosophie', title: 'Identité Brisée', 
        img: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=600&q=80', 
        y: 12, 
        desc: "La question métaphysique : Qu'est-ce qu'être humain si nos pièces sont animales ?", 
        sts: "Trouble des frontières de l'espèce." 
    },

    // 2. ÉTHIQUE
    { 
        id: 'f_ethique', side: 'friction', cat: 'Bioéthique', title: 'Calcul Moral', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Theseus_Minotauros_Louvre_MNC675.jpg/960px-Theseus_Minotauros_Louvre_MNC675.jpg?auto=format&fit=crop&w=600&q=80',
        y: 26, 
        desc: "L'utilitarisme (sauver une vie) face à la déontologie (ne pas instrumentaliser).", 
        sts: "Justification du 'mal nécessaire'." 
    },

    // 3. MÉDIAS
    { 
        id: 'f_media', side: 'friction', cat: 'Médias', title: 'Spectacle Médical', 
        img: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=600&q=80', 
        y: 40, 
        desc: "Comment la presse transforme une expérience chirurgicale en épopée héroïque.", 
        sts: "La science a besoin du spectacle." 
    },

    // 4. PUBLIC
    { 
        id: 'f_public', side: 'friction', cat: 'Grand Public', title: 'Peur du Monstre', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Scared_Girl.jpg?auto=format&fit=crop&w=600&q=80', 
        y: 54, 
        desc: "L'acceptabilité sociale face au mythe de Frankenstein et à la peur des virus.", 
        sts: "L'imaginaire freine ou accélère l'innovation." 
    },

 // 5. DROIT (Séparé - Avec intros et liens)
    { 
        id: 'f_droit', 
        side: 'friction', 
        cat: 'Législations', 
        title: 'La Zone Grise', 
        img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80', 
        y: 68, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Le cadre légal est en retard sur la science.</strong> Il oscille entre interdictions locales strictes et flou international.</p>
            </div>
            
            <div class="pharma-section">
                <h3>1. France : L'Attente</h3>
                <p>La Loi Jardé pose un cadre éthique, mais l'absence de décrets d'application bloque la pratique clinique.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('loi_fr', 'f_droit')">Voir le Droit Français</a>
            </div>

            <div class="pharma-section">
                <h3>2. Monde : La Soft Law</h3>
                <p>Il n'y a pas de police mondiale. L'OMS et l'IXA émettent des recommandations non contraignantes.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('loi_int', 'f_droit')">Voir le Droit Int.</a>
            </div>

            <div class="pharma-section">
                <h3>3. USA : Le Pragmatisme</h3>
                <p>La FDA contourne le problème éthique en classant l'organe comme un "produit biologique" classique.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('loi_usa', 'f_droit')">Voir le Modèle USA</a>
            </div>`,
        real: "Coexistence de la Loi Jardé (Hard Law) et normes OMS (Soft Law).", 
        sts: "Le droit ne fait pas qu'encadrer, il rend la greffe 'pensable' administrativement." 
    },

    // 6. PHARMA (Bas - Base économique)
    { 
        id: 'f_pharma', 
        side: 'friction', 
        cat: 'Industrie Pharmaceutique', 
        title: 'Co-Architectes', 
        img: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80', 
        y: 82, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>L’industrie pharmaceutique est co-architecte de la xénotransplantation.</strong></p>
                <p>Le régime thérapeutique n'est pas un simple accompagnement : il devient une condition de possibilité absolue de la greffe.</p>
            </div>
            
            <div class="pharma-section">
                <h3>1. Le Régime Thérapeutique</h3>
                <p>La réussite clinique repose sur un équilibre complexe associant co-stimulation immunitaire et immunosuppression lourde.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('regime', 'f_pharma')">Détails Régime</a>
            </div>

            <div class="pharma-section">
                <h3>2. Focus : Axe CD40/CD40L</h3>
                <p>L’axe CD40/CD40L joue un rôle central dans l’activation coordonnée des lymphocytes. C'est le "verrou" technique actuel.</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('cd40', 'f_pharma')">Détails CD40</a>
            </div>

            <div class="pharma-section">
                <h3>3. Alliances Stratégiques</h3>
                <p>Partenariats articulant plateformes d’organes (biotech) et molécules propriétaires (Big Pharma).</p>
                <a class="page-link-btn" onclick="UI.loadDetailSub('alliances', 'f_pharma')">Analyse Alliances</a>
            </div>`,
        real: "Investissements massifs (United Therapeutics, eGenesis).", 
        sts: "La santé humaine devient un marché boursier." 
    }
];

// ... (Après la constante XENO_DATA) ...

const PHARMA_SUBS = {
    'regime': { 
        title: "Détails Techniques : Régime", 
        content: `<ul><li><strong>Bundle :</strong> Organe multi-modifié + anticorps anti-CD40 + perfusion ex-vivo.</li><li><strong>Dispositif chronique :</strong> La valeur bascule de l'acte chirurgical vers le suivi.</li></ul><br>
        Le succès de la xénogreffe ne repose pas uniquement sur la modification génétique du porc, mais sur un protocole médicamenteux lourd (immunosuppression) qui transforme le patient en "chimère chimique". L'enjeu est de bloquer la voie CD40-CD154 sans détruire totalement les défenses immunitaires du receveur.`, 
        real: "NEJM 2022 (Maryland) : Utilisation explicite d'un anticorps anti-CD40 (Kiniksa/KPL-404).",
        biblio: `Mohiuddin, M.M., et al. (2022). "Chimeric 2C10R4 anti-CD40 antibody therapy is critical for long-term survival of GTKO.hCD46.hTBM pig-to-primate cardiac xenograft". Nature Communications.
Cooper, D.K.C. (2015). "Clinical xenotransplantation—how close are we?". The Lancet.
Kiniksa Pharmaceuticals. (2023). "KPL-404: Monoclonal Antibody Inhibitor of CD40-CD154 Interaction". Investor Report.`
    },

    'cd40': { 
        title: "Détails Techniques : CD40", 
        content: `<ul><li><strong>Novartis (Iscalimab) :</strong> Sert de réservoir de données sécurité.</li><li><strong>Axe CD40/CD40L :</strong> Centralité nourrit une controverse interne.</li></ul><br>
        L'axe de costimulation CD40/CD40L est la "clé de voûte" du rejet xénogénique. Les anticorps classiques (Tacrolimus) ne suffisent pas. L'industrie se bat pour breveter la molécule capable de bloquer cet axe sans provoquer de thromboembolie massive.`, 
        real: "Modèles porc → primate (2C10R4) montrant des survies prolongées.",
        biblio: `Yamamoto, T., et al. (2020). "Blockade of CD40/CD154 pathway in xenotransplantation". Xenotransplantation Journal.
Rabinovitch, A. (2021). "Iscalimab (CFZ533): A new era in transplantation?". Novartis Clinical Trials Data.`
    },

    'alliances': { 
        title: "Alliances Industrielles", 
        content: `<ul><li><strong>eGenesis – Eledon :</strong> Accès au tegoprubart (anti-CD40L).</li><li><strong>United Therapeutics :</strong> Exemple d'intégration verticale massive.</li></ul><br>
        La xénotransplantation se structure comme une plateforme industrielle ("Platform Technology"). On ne vend pas juste un rein, on vend un abonnement à vie comprenant : l'organe (United Therapeutics), le médicament propriétaire (Eledon) et le kit de monitoring génétique (Tissium).`, 
        real: "La XTP se structure comme une plateforme industrielle.",
        biblio: `eGenesis Bio. (2024). "Strategic Partnership with Eledon Pharmaceuticals". Press Release.
Rothblatt, M. (2018). "Your Life or Mine: How Geoethics Can Resolve the Conflict Between Public and Private Interests in Xenotransplantation". Ashgate.`
    },

    'loi_fr': { 
        title: "Cadre Juridique : France", 
        content: `<ul><li><strong>Loi Jardé :</strong> Cadre les recherches impliquant la personne humaine.</li><li><strong>ANSM :</strong> Autorité compétente pour l'utilisation thérapeutique de tissus animaux.</li><li><strong>Statut :</strong> Inopérant par manque de décrets d'application spécifiques.</li></ul><br>En France, il n’existe pas, à ce jour, de texte législatif ou réglementaire autorisant explicitement la XTP clinique. Néanmoins, plusieurs ensembles de texte définissent un premier cadre dans lequel une telle pratique pourrait théoriquement s’inscrire.<br><br>  

Les textes législatifs et règlementaires issus de la loi de bioéthique (adoptée en 1994 et révisée en 2004, 2011 et 2021) et de la loi Jardé (loi n°2012-300 relative aux recherches impliquant la personne humaine) constituent un premier socle essentiel. Codifiés principalement dans le Code de la Santé Publique (CSP), le Code civil et le Code pénal, ces textes définissent les principes éthiques fondamentaux (e.g. respect de la dignité, de l’intégrité et de la non-patrimonialité du corps humain), régissent le recueil du consentement libre et éclairé, et encadrent les recherches biomédicales et les procédures de greffe. <br> <br> 

La loi n°98-535 du 1ᵉʳ juillet 1998 relative au renforcement de la veille sanitaire et du contrôle de la sécurité sanitaire des produits destinés à l’homme a introduit dans le droit français un cadre pour « l'utilisation à des fins thérapeutiques d'organes ou de tissus d'origine animale qui ne sont ni des dispositifs médicaux ni destinés à des médicaments ». Ces dispositions, aujourd’hui codifiées à l’article L.1127-2 (partie législative) du CSP (dans sa version en vigueur depuis juillet 2022), prévoient que toute recherche impliquant l’utilisation thérapeutique d’organes, tissus ou cellules animaux chez l’être humain doit recevoir une autorisation expresse de l'Agence Nationale de Sécurité du Médicament et des Produits de Santé (ANSM), après avis de l’Agence de la Biomédecine (ABM).<br><br>
En absence de cadre juridique permettant aujourd’hui la XTP clinique en France, l’ANM et l’ABM appellent à engager une réflexion nationale sur ses enjeux éthiques, juridiques et sociétaux.`, 
        real: "Articles L1241-1 et suivants du Code de la santé publique.",
        biblio: `Code de la Santé Publique, Articles L1241-1 à L1241-7.
Loi n° 2012-300 du 5 mars 2012 relative aux recherches impliquant la personne humaine (Loi Jardé).
Agence de la Biomédecine. (2023). "Rapport annuel sur l'état de la greffe en France".`
    },

    'loi_int': { 
        title: "Cadre Juridique : International", 
        content: `<ul><li><strong>OMS (WHA57.18) :</strong> Résolution demandant aux États de limiter la XTP aux pays ayant une surveillance stricte.</li><li><strong>IXA Standards :</strong> Recommandations sur le dépistage des donneurs porcins.</li></ul>ll n’existe à ce jour aucun cadre juridique international contraignant régissant spécifiquement la XTP clinique. Cependant, plusieurs organisations internationales ont élaboré des normes et recommandations non obligatoires qui structurent profondément les politiques nationales et visent à harmoniser les standards de sécurité.<br><br>

L’Organisation Mondiale de la Santé (OMS) joue un rôle central avec la publication, dès 1998, de recommandations centrées sur la prévention et la gestion du risque infectieux lié à la XTP. Elle y pose les bases d’une approche fondée sur la maîtrise du risque à la source, notamment par la sélection et le contrôle sanitaire strict des animaux donneurs, ainsi que sur la surveillance clinique à long terme des receveurs.</br><br>
Au début des années 2000, l’OMS élargit ce cadre en intégrant les dimensions éthiques, sociales et réglementaires de la XTP. Cette dynamique aboutit en 2004 à l’adoption de la résolution WHA57.18 qui encourage les États membres à ne pratiquer la XTP que sous réserve de la mise en place de mécanismes nationaux de surveillance.<br><br>

L’International Xenotransplantation Association (IXA) publie par ailleurs la revue scientifique Xenotransplantation qui diffuse les travaux récents du domaine et analyse les enjeux théologiques, éthiques, juridiques et psychologiques associés à la XTP.`, 
        real: "Directives de Changsha (2008) sur la sécurité et la traçabilité.",
        biblio: `World Health Organization (WHO). (2004). Resolution WHA57.18: Xenotransplantation.
Changsha Communiqué. (2008). "Principles for the Conduct of Xenotransplantation Clinical Trials".
International Xenotransplantation Association (IXA). (2025). "Consensus Statement on Conditions for Clinical Xenotransplantation".`
    },

    'loi_usa': { 
        title: "Cadre Juridique: USA", 
        content: `<ul><li><strong>PHS Guideline :</strong> Surveillance à vie des receveurs et archivage des échantillons biologiques (50 ans).</li><li><strong>FDA CBER :</strong> Régule la XTP comme un 'Xenotransplantation Product'.</li></ul>Aux États-Unis, la pratique de la XTP est encadrée par un ensemble de lois fédérales et de textes réglementaires codifiés dans plusieurs titres du Code of Federal Regulations (CFR). Ce dispositif mobilise plusieurs agences fédérales placées sous l’autorité du Department of Health and Human Services (DHHS) et du Department of Agriculture (USDA).</br><br>
Le Public Health Service Act et le Federal Food, Drug, and Cosmetic Act constituent le socle juridique de l’autorité de la Food and Drug Administration (FDA) sur les produits biologiques et leur utilisation dans le cadre d’essais cliniques. Cette autorité est principalement exercée à travers le titre 21 du CFR, notamment les dispositions relatives aux Investigational New Drugs (IND), aux Biologics License Applications (BLA) et aux produits biologiques.</br><br>

En complément de ce cadre juridique et réglementaire, la FDA, en coordination avec d’autres agences fédérales du DHHS, a élaboré depuis le milieu des années 1990 des guidelines spécifiques à la XTP. Le Draft Public Health Service Guideline on Infectious Disease Issues in Xenotransplantation publié en 1996, puis révisé en 2001, formule des recommandations non contraignantes destinées à orienter l’élaboration et l’évaluation des protocoles cliniques de XTP.`, 
        real: "Section 351 du Public Health Service Act.",
        biblio: `FDA. (2016). "Source Animal, Product, Preclinical, and Clinical Issues Concerning the Use of Xenotransplantation Products in Humans".
Public Health Service Act, Section 351 (42 U.S.C. 262).
Code of Federal Regulations (CFR), Title 21: Food and Drugs.`
    },
};

 