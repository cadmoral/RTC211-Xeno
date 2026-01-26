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
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Cartographie des Opposants</strong></p>
                <p>Analyse des acteurs, des réseaux et des discours contestant la xénogreffe.</p>
            </div>

            <div class="pharma-section">
                <h3>Acteurs Principaux</h3>
                <ul style="padding-left: 15px; margin-bottom: 15px;">
                    <li style="margin-bottom: 10px;"><strong>Eurogroup for Animals :</strong> Réseau paneuropéen fédérant des ONG de protection animale. Acteur de plaidoyer auprès des institutions européennes, il oppose la xénogreffe au nom de l’éthique et du bien-être, et promeut les alternatives <em>in vitro</em> et le principe des 3R (Réduction, Raffinement, Remplacement).</li>
                    
                    <li style="margin-bottom: 10px;"><strong>Stichting Proefdiervrij :</strong> Association néerlandaise (membre d’Eurogroup). Via sa campagne <em>"Niet. Gewoon."</em> (Not. Normal.), elle demande le maintien de l'interdiction de la xénotransplantation aux Pays-Bas et promeut des solutions « centrées humains » (don, prévention, biomimétique).</li>
                    
                    <li style="margin-bottom: 10px;"><strong>Pro Anima (France) :</strong> Comité scientifique militant. Il conteste la xénogreffe au regard de ses échecs cliniques, des risques zoonotiques et de l’acceptabilité sociale. Recommande la réallocation des ressources vers la bio-impression 3D/4D.</li>
                </ul>
                <p style="font-size:0.85rem; background:#eee; padding:8px; border-radius:4px;"><strong>Sous-acteurs :</strong> Eurogroup network (influence paneuropéenne), Publics et médias (cibles de campagnes).</p>
            </div>

            <div class="pharma-section">
                <h3>Acteurs Non-Humains & Techniques</h3>
                <ul style="font-size: 0.95rem;">
                    <li><strong>Les Animaux :</strong> Cochons génétiquement modifiés (source d’organes), lignées clonées et troupeaux à haut statut sanitaire élevés en conditions stériles (césarienne, isolement).</li>
                    <li><strong>Outils :</strong> CRISPR/Cas9, transgénèse/knock-in/knock-out, clonage par transfert nucléaire.</li>
                    <li><strong>Alternatives :</strong> Organes artificiels, tissus/organoïdes, bio-impression, dispositifs de régénération.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Discours et Cadres d’Argumentation</h3>
                
                <h4 style="font-size:0.95rem; text-transform:uppercase; color:#555; margin-bottom:5px; border-bottom:1px solid #ddd;">1. Éthique & Dignité (Bossu, 2025)</h4>
                <p>La xénogreffe réifie l’animal et maximalise son instrumentalisation (génétiquement modifié + clonage + conditions stériles). Elle contrevient à la valeur inhérente de l’animal et impose des dommages (douleur, anxiété, altération des capacités).</p>

                <h4 style="font-size:0.95rem; text-transform:uppercase; color:#555; margin-bottom:5px; border-bottom:1px solid #ddd;">2. Bien-être & Expérimentation</h4>
                <p>La création de lignées génétiquement modifiées et clonées implique des interventions chirurgicales douloureuses pour un taux de succès faible (3–5 %). Il faut environ <strong>200 animaux</strong> pour produire une lignée génétiquement modifiée « aboutie ».</p>

                <h4 style="font-size:0.95rem; text-transform:uppercase; color:#555; margin-bottom:5px; border-bottom:1px solid #ddd;">3. Épistémique & Sanitaire</h4>
                <p>Critique des "sur-promesses" (survie clinique rare au-delà de quelques mois) et du risque de zoonoses amplifié par l’immunosuppression, exposant la société entière à un risque collectif.</p>
            </div>

            <div class="pharma-section" style="background: #fff9f9; padding: 15px; border-radius: 8px; border: 1px solid var(--pig-main);">
                <h3 style="color:var(--pig-main); margin-top:0;">Motivations</h3>
                <ul style="margin-bottom:0;">
                    <li><strong>Refus de l’instrumentalisation :</strong> Ne pas réduire l'animal à un « bioréacteur ».</li>
                    <li><strong>Délégitimation :</strong> Démontrer le faible rendement de la voie XTP.</li>
                    <li><strong>Substitution :</strong> Promouvoir des trajectoires plus sûres (cellules humaines).</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force & Alliances</h3>
                
                <div style="margin-bottom: 15px; padding-bottom:10px; border-bottom:1px dashed #eee;">
                    <strong>🏛️ Plaidoyer → Institutions UE</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Eurogroup influence l’agenda et la régulation biotech (appels aux 3R, restrictions d’espèces).</span>
                </div>

                <div style="margin-bottom: 15px; padding-bottom:10px; border-bottom:1px dashed #eee;">
                    <strong>📢 Campagne → Opinion Publique</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Mobilisation (ex: Proefdiervrij) pour délégitimer la xénogreffe via des référents émotionnels.</span>
                </div>

                <div style="margin-bottom: 15px; padding-bottom:10px; border-bottom:1px dashed #eee;">
                    <strong>🔬 Contestation → Science/Industrie</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Pro Anima dénonce les souffrances précliniques et propose des substituts techniques (organoïdes).</span>
                </div>

                <div>
                    <strong>🐖 Encadrement → Pratiques d’élevage</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Pression sur les conditions de production (césarienne, isolement) qualifiées d'atteintes à la dignité.</span>
                </div>
            </div>`, 
        sts: "Conflit moral : survie humaine vs sacrifice animal." ,
        biblio_id: "ethique_animal"
    },

    // --- CÔTÉ RECEVEUR (HUMAIN) : 4 NOEUDS ---
    {
        id: 'h1', side: 'human', cat: 'Asso. Patients', title: 'L\'Urgence Vitale',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/BloodPressure2.jpg?auto=format&fit=crop&w=600&q=80',
        y: 15,
        desc: `
            <div class="pharma-intro-header">
                <p><strong>La Voix des Patients : De l'attente à l'activisme.</strong></p>
                <p>Loin d'être de simples receveurs, les associations de patients structurent des coalitions "Savoirs-Expérientiels / Industrie" pour accélérer l'accès aux greffes.</p>
            </div>

            <div class="pharma-section">
                <h3>1. Les Piliers de l'Advocacy (États-Unis)</h3>
                
                <div style="background: #fff; border-left: 4px solid var(--human-main); padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <strong style="color:var(--human-main);">National Kidney Foundation (NKF)</strong><br>
                    <p style="font-size:0.9rem; margin-top:5px;">En 2024, le rapport <em>"Voice of the Patient"</em> montre des patients impatients ("eager") de commencer les essais cliniques, voyant le rein de porc comme la clé contre la pénurie.</p>
                </div>

                <div style="background: #fff; border-left: 4px solid var(--human-main); padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <strong style="color:var(--human-main);">AAKP (American Association of Kidney Patients)</strong><br>
                    <p style="font-size:0.9rem; margin-top:5px;">Lors du <em>World Kidney Day 2025</em>, l'AAKP a officialisé son soutien à la xénotransplantation pour élargir le choix thérapeutique, agissant comme le plus grand lobby indépendant de patients rénaux.</p>
                </div>
            </div>

            <div class="pharma-section">
                <h3>2. Diversité des Pathologies</h3>
                <ul style="font-size: 0.95rem; padding-left: 15px;">
                    <li style="margin-bottom:10px;"><strong>Islet Foundation (Diabète) :</strong> Soutien historique pour la xénogreffe d'îlots pancréatiques. L'association pousse pour des solutions radicales face aux pathologies chroniques lourdes, malgré les risques infectieux.</li>
                    <li style="margin-bottom:10px;"><strong>PKD Foundation (Polykystose) :</strong> Travaille à la "normalisation" de l'option porcine dans le parcours de soin, transformant l'espoir biomédical en une option thérapeutique crédible.</li>
                </ul>
            </div>

            <div class="pharma-section" style="background: #f4faff; padding: 15px; border-radius: 8px; border: 1px solid var(--human-main);">
                <h3 style="color:var(--human-main); margin-top:0;">3. Médiatisation & Coalitions</h3>
                <p>Les patients utilisent désormais des formats numériques pour peser sur le débat :</p>
                <ul style="margin-bottom:0; font-size:0.9rem;">
                    <li><strong>Webinaires AAKP :</strong> Sessions d'éducation où la xénogreffe est présentée non plus comme de la science-fiction, mais comme un futur proche.</li>
                    <li><strong>TRIO & CareDx :</strong> Bibliothèques de présentations (YouTube) où des greffés humains discutent de la xénogreffe, créant une figure de "Patient Pionnier".</li>
                    <li><strong>Partenariats Public-Privé :</strong> Le chirurgien Robert Montgomery souligne que c'est le "partenariat entre cliniciens et advocacy de patients" qui permet de lever les freins réglementaires (FDA).</li>
                </ul>

                <div style="background: #000; border-radius: 12px; overflow: hidden; margin-bottom: 15px;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe 
            src="https://www.youtube-nocookie.com/embed/N92SjU9R8V0" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
    <div style="padding: 10px; background: #222; color: #eee; font-size: 0.8rem; text-align: center;">
        AAKP 2024: Xenotransplantation: Research and Ethics.
    </div>
</div>
            </div>
               
            

            <div class="pharma-section">
                <h3>4. Analyses Académiques</h3>
                <p style="font-size:0.9rem;">Des chercheurs comme <strong>Grießler (2012)</strong> ou <strong>Reese (2024)</strong> documentent ce pôle "pro-xéno" souvent éclipsé par la bioéthique. Ils montrent que l'urgence de la liste d'attente crée une rationalité vitale qui dépasse les réticences religieuses ou morales.</p>
            </div>
        `,
        sts: "Le patient devient un co-producteur de la technologie : son 'urgence vitale' sert de moteur de légitimation pour la science et l'industrie.",
        biblio_id: "corps_hybride" 
    },
    {
        id: 'h4', side: 'human', cat: 'Bio-Économie', title: 'Le Coût de la Survie',
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
        y: 45, // Aligné MILIEU
        desc: "Technologie de luxe : une humanité à deux vitesses ?",
        sts: "Biopolitique : sélection économique du droit de vivre."
    },
    // h2 - Communautés Religieuses (Affichage direct du format sous-section)
    {
        id: 'h2', 
        side: 'human', 
        cat: 'Religions & Spiritualités', 
        title: 'Le Tabou et le Sacré',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/RELIGIONES.png?auto=format&fit=crop&w=600&q=80',
        y: 75,
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Analyses et Acteurs</strong></p>
                <p>Détail des études (Andrade, Hurst, Tarabeih), cartographie des positions des acteurs et axes de la controverse.</p>
            </div>

            <!-- SECTION 1 : ÉTUDES -->
            <div class="pharma-section">
                <h3>1. Synthèse des Études Récentes</h3>
                
                <!-- CARTE ANDRADE -->
                <div style="background: #fff; border-left: 4px solid #2c3e50; border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 1rem;">
                        📄 1.1 Andrade et al. (2024) <span style="font-weight:normal; color:#777;">— Moral approval in Egypt</span>
                    </h4>
                    <p style="margin-top:0; font-size:0.9rem; font-style:italic; color:#555;">Étude quantitative (n=895) examinant l’acceptabilité morale de la xénogreffe en Égypte.</p>
                    <ul style="font-size:0.9rem; margin-bottom:5px; padding-left:15px;">
                        <li style="margin-bottom:4px;"><strong>Genre :</strong> Facteur prédictif le plus fort (les femmes approuvent moins).</li>
                        <li style="margin-bottom:4px;"><strong>Identité religieuse :</strong> Influence l’approbation (Musulmans vs Chrétiens), mais pas le degré de religiosité.</li>
                        <li style="margin-bottom:4px;"><strong>Bien-être animal :</strong> Les préoccupations éthiques diminuent l’acceptabilité.</li>
                        <li><strong>Espèce :</strong> Les organes porcins sont moins acceptés que ceux des moutons.</li>
                    </ul>
                </div>

                <!-- CARTE HURST -->
                <div style="background: #fff; border-left: 4px solid var(--friction-main); border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #d4a017; font-size: 1rem;">
                        🌍 1.2 Hurst et al. (2025) <span style="font-weight:normal; color:#777;">— Religious perspectives</span>
                    </h4>
                    <p style="margin-top:0; font-size:0.9rem; font-style:italic; color:#555;">Symposium international réunissant des spécialistes religieux de multiples traditions.</p>
                    <ul style="font-size:0.9rem; margin-bottom:5px; padding-left:15px;">
                        <li style="margin-bottom:4px;"><strong>Consensus :</strong> Aucune tradition ne déclare la xénogreffe <em>interdite</em> par principe.</li>
                        <li style="margin-bottom:4px;"><strong>Points de vigilance :</strong> Bien-être animal, xénozoonoses, ne pas "jouer à Dieu", justice sociale.</li>
                        <li><strong>Conclusion :</strong> Permissivité conditionnelle (Nécessité, Proportionnalité, Dignité, Prudence).</li>
                    </ul>
                </div>

                <!-- CARTE TARABEIH -->
                <div style="background: #fff; border-left: 4px solid var(--human-main); border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: var(--human-main); font-size: 1rem;">
                        🇮🇱 1.3 Tarabeih & Na’amnih (2025) <span style="font-weight:normal; color:#777;">— Attitudes en Israël</span>
                    </h4>
                    <p style="margin-top:0; font-size:0.9rem; font-style:italic; color:#555;">Enquête (n=884) sur la connaissance des règles religieuses par les patients musulmans.</p>
                    <ul style="font-size:0.9rem; margin-bottom:5px; padding-left:15px;">
                        <li style="margin-bottom:4px;"><strong>Lacunes :</strong> Faible connaissance des règles (beaucoup ignorent que la greffe porcine est permise par nécessité).</li>
                        <li style="margin-bottom:4px;"><strong>Facteurs :</strong> Attitudes dépendantes de la religiosité, l’éducation et l’âge.</li>
                        <li><strong>Recommandation :</strong> Améliorer l’information religieuse et médicale pour le consentement éclairé.</li>
                    </ul>
                </div>
            </div>

            <!-- SECTION 2 : ACTEURS -->
            <div class="pharma-section">
                <h3>2. Cartographie des Acteurs</h3>

                <!-- GROUPE PUBLIC EGYPTE -->
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size:0.85rem; text-transform:uppercase; color:#999; border-bottom:1px solid #ddd; padding-bottom:5px;">👥 Public & Société (Focus Égypte)</h4>
                    
                    <div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border:1px solid #eee;">
                        <strong>Population musulmane</strong><br>
                        <span style="font-size:0.85rem; color:#c0392b;">⚠️ Hésitation forte</span>
                        <div style="font-size:0.9rem; margin-top:5px; color:#555;">Moins d’approbation que les chrétiens. Hésitation pour le porc influencée par le genre et l'éthique animale.</div>
                    </div>

                    <div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border:1px solid #eee;">
                        <strong>Chrétiens d’Égypte</strong><br>
                        <span style="font-size:0.85rem; color:#27ae60;">✅ Acceptation plus forte</span>
                        <div style="font-size:0.9rem; margin-top:5px; color:#555;">Moins de restrictions religieuses spécifiques sur l'animal source.</div>
                    </div>

                    <div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border:1px solid #eee;">
                        <strong>Femmes égyptiennes</strong><br>
                        <span style="font-size:0.85rem; color:#e67e22;">⚖️ Sensibilité Éthique</span>
                        <div style="font-size:0.9rem; margin-top:5px; color:#555;">Acceptation plus faible due à une sensibilité accrue au bien-être animal et à la gestion du risque.</div>
                    </div>
                </div>

                <!-- GROUPE AUTORITÉS RELIGIEUSES -->
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size:0.85rem; text-transform:uppercase; color:#999; border-bottom:1px solid #ddd; padding-bottom:5px;">🕌 Autorités Religieuses</h4>

                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <!-- Sunnites -->
                        <div style="background:#fffaf0; padding:10px; border-radius:6px; border:1px solid #fce8b2;">
                            <strong style="color:#d35400;">Islam Sunnite</strong>
                            <p style="font-size:0.85rem; margin:5px 0;">Permissivité sous <em>Darura</em> (nécessité). Réticence culturelle persistante.</p>
                        </div>
                        <!-- Chiites -->
                        <div style="background:#fffaf0; padding:10px; border-radius:6px; border:1px solid #fce8b2;">
                            <strong style="color:#d35400;">Islam Chiite</strong>
                            <p style="font-size:0.85rem; margin:5px 0;">Plus grande permissivité. Pas de distinction pur/impur si nécessité vitale.</p>
                        </div>
                    </div>

                    <div style="background:#fffaf0; padding:10px; margin-top:10px; border-radius:6px; border:1px solid #fce8b2;">
                        <strong style="color:#8e44ad;">Catholicisme / Église</strong>
                        <p style="font-size:0.9rem; margin:5px 0; color:#555;">Acceptation large sous conditions : sécurité, consentement, préservation de l'identité personnelle.</p>
                    </div>

                    <div style="background:#fffaf0; padding:10px; margin-top:10px; border-radius:6px; border:1px solid #fce8b2;">
                        <strong style="color:#2980b9;">Judaïsme</strong>
                        <p style="font-size:0.9rem; margin:5px 0; color:#555;">Forte priorité à la préservation de la vie (<em>Pikuach Nefesh</em>) qui autorise l'usage médical du porc.</p>
                    </div>
                     <div style="background:#fffaf0; padding:10px; margin-top:10px; border-radius:6px; border:1px solid #fce8b2;">
                        <strong style="color:#e67e22;">Hindouisme</strong>
                        <p style="font-size:0.9rem; margin:5px 0; color:#555;">Tension entre <em>Ahimsa</em> (non-violence) et préservation de la vie (Karma).</p>
                    </div>
                </div>

                <!-- GROUPE INSTITUTIONS -->
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size:0.85rem; text-transform:uppercase; color:#999; border-bottom:1px solid #ddd; padding-bottom:5px;">🏥 Institutions & Médias</h4>
                    <ul style="font-size:0.9rem; padding-left:20px; color:#444;">
                        <li style="margin-bottom:8px;"><strong>Institutions Médicales :</strong> Volonté d'ouvrir des essais cliniques pour démontrer l'efficacité. Enjeu de gestion des risques.</li>
                        <li><strong>Société Civile (Monde musulman) :</strong> Présentation médiatique souvent hésitante, prudente, voire alarmée sur la conformité morale.</li>
                    </ul>
                </div>
            </div>

            <!-- SECTION 3 : AXES CONTROVERSE -->
            <div class="pharma-section">
                <h3>3. Axes de la Controverse</h3>
                
                <div style="margin-bottom:15px;">
                    <strong style="color:#c0392b;">🔬 Scientifique</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Risque de xénozoonoses, incertitude rejet long terme, justice dans la sélection des patients.</p>
                </div>

                <div style="margin-bottom:15px;">
                    <strong style="color:#8e44ad;">⚖️ Éthique</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Statut moral de l'animal, intégrité corporelle, consentement éclairé des minorités.</p>
                </div>

                <div style="margin-bottom:15px;">
                    <strong style="color:#d35400;">🕌 Religieux & Social</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Divergences internes (Sunnites/Chiites). Méfiance symbolique (impureté). Stigmatisation sociale.</p>
                </div>

                <div style="margin-bottom:15px;">
                    <strong style="color:#27ae60;">🌍 Politique & Éco</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Marché des organes GM vs Inégalités d'accès Nord/Sud. Nécessité d'une régulation internationale.</p>
                </div>
            </div>`,
        
        real: "Convergence : Le religieux valide souvent la technique si la survie est en jeu.",
        sts: "La religion comme médiateur : le sacré s'adapte à la technique sous le principe de nécessité vitale.",
        biblio_id: "religion_detail"
    },

    // --- CENTRE / FRICTIONS : ALIGNEMENT CENTRAL SERRÉ ---
    // 1. PHILOSOPHIE (Identité Brisée - Texte Intégral)
    {
        id: 'f_philo', 
        side: 'friction', 
        cat: 'Philosophie & Éthique', 
        title: 'Identité Brisée',
        img: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=600&q=80',
        y: 12,
        desc: `
            <div class="pharma-intro-header" style="border-left: 5px solid var(--friction-main); padding-left: 20px; margin-bottom: 30px;">
                <p style="font-family: var(--font-serif); font-size: 1.2rem; line-height: 1.4; color: #1a1a1a;">
                    <strong>Evolution de la représentation philosophique de l’animal, et de la réflexion éthique et du cadre juridique encadrant l’expérimentation animale</strong>
                </p>
            </div>

            <div class="pharma-section">
                <h3>Perspective Historique</h3>
                <p>L’histoire de l’expérimentation animale, c’est-à-dire l’utilisation des animaux à des fins scientifiques, remonte à l’Antiquité, où des figures telles qu’Aristote, Hippocrate ou Galien recouraient déjà à la dissection animale pour comprendre l’anatomie et la physiologie du vivant. Si cette pratique se développe à la Renaissance, c’est au XIXᵉ siècle, notamment avec Claude Bernard, qu’émerge l’expérimentation animale au sens moderne, étroitement liée à la démarche scientifique.</p>
                
                <p>Longtemps, l’animal est perçu comme un objet ou une machine dépourvue de sensibilité, conformément à la conception mécaniste (instrumentaliste) de Descartes. Cette représentation est progressivement remise en cause à partir du XVIIIᵉ siècle, notamment par des physiologistes comme Marshall Hall, qui appellent à encadrer les pratiques afin de limiter la souffrance animale, puis par les travaux de Charles Darwin, dont la théorie de l’évolution établit une continuité biologique et psychologique entre l’homme et l’animal. S’opère alors un déplacement progressif vers une approche fondée sur la responsabilité morale de l’expérimentateur et une forme de stewardship scientifique.</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0;">
                <div style="background: rgba(251, 192, 45, 0.05); border: 1px solid var(--friction-main); padding: 20px; border-radius: 12px;">
                    <h4 style="color: var(--friction-main); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; margin-top: 0;">⚖️ L’utilitarisme</h4>
                    <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 0;">Formulé par Jeremy Bentham et John Stuart Mill puis réinterprété par Peter Singer, il évalue la moralité des pratiques à partir de leurs conséquences, en mettant en balance bénéfices attendus et souffrances infligées. La capacité à éprouver douleur et plaisir fonde la considération morale des animaux, Singer intégrant en outre les intérêts individuels et la complexité différenciée des formes de vie qui conduit à accorder un poids moral plus important aux existences humaines et aux espèces dotées de capacités cognitives et émotionnelles plus riches.</p>
                </div>
                <div style="background: rgba(251, 192, 45, 0.05); border: 1px solid var(--friction-main); padding: 20px; border-radius: 12px;">
                    <h4 style="color: var(--friction-main); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; margin-top: 0;">📜 L’approche déontologique</h4>
                    <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 0;">Héritée de Kant et développée par Tom Regan, elle fonde la moralité non sur les conséquences mais sur le respect dû aux individus considérés comme des fins en soi, c’est-à-dire comme des êtres ayant une valeur intrinsèque. Si Kant réserve ce statut aux humains, Regan l’étend aux animaux « sujets d’une vie », conduisant à une remise en cause du principe de l’expérimentation animale.</p>
                </div>
            </div>

            <div class="pharma-section">
                <h3>Dualisme et Gradualisme</h3>
                <p>Les débats sur l’expérimentation animale mobilisent également des cadres transversaux tels que le dualisme et le gradualisme, qui structurent la hiérarchie morale entre l’humain et l’animal. Les approches dualistes reposent sur l’affirmation d’une différence morale fondamentale entre l’être humain et l’animal. Historiquement, certaines formes de dualisme, notamment cartésiennes, ont nié toute sensibilité et toute valeur morale à l’animal.</p>
                <p>Les formes contemporaines de dualisme, en revanche, reconnaissent la sensibilité animale (sentience) et lui accordent une considération morale réelle mais subordonnée à celle de l’humain, seul pleinement considéré comme sujet moral. Les approches gradualistes, quant à elles, reconnaissent une continuité morale hiérarchisée fondée sur la complexité biologique et psychologique des êtres vivants.</p>
            </div>

            <div class="pharma-section" style="background: #f8f9fa; padding: 25px; border-radius: 15px; border: 1px solid #eee;">
                <h3 style="margin-top: 0;">Encadrement Juridique au XXᵉ Siècle</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    <div>
                        <h4 style="color: var(--human-main); border-bottom: 2px solid var(--human-main); padding-bottom: 5px; display: inline-block;">France & Europe</h4>
                        <p style="font-size: 0.85rem; line-height: 1.5;">En France, cette dynamique se traduit par le décret d’avril 1968, premier texte réglementaire spécifiquement consacré à l’expérimentation animale, puis par l’intégration progressive des normes européennes, culminant avec la directive 2010/63/UE, transposée en droit français par le décret n° 2013-118 du 1er février 2013 et ses arrêtés d’application. Ce dispositif place l’évaluation éthique de chaque projet au cœur du cadre juridique, en imposant, notamment, la démonstration du respect du principe des 3R (Remplacer, Réduire, Raffiner), une analyse explicite de la proportionnalité entre les bénéfices attendus et les atteintes portées au bien-être animal, une classification normative de la sévérité des procédures, l’extension du champ de protection à l’ensemble des vertébrés et aux céphalopodes, ainsi que la reconnaissance élargie des formes de souffrance incluant la détresse et l’angoisse.</p>
                    </div>
                    <div>
                        <h4 style="color: var(--pig-main); border-bottom: 2px solid var(--pig-main); padding-bottom: 5px; display: inline-block;">États-Unis</h4>
                        <p style="font-size: 0.85rem; line-height: 1.5;">Aux États-Unis, l’encadrement juridique de l’expérimentation animale repose principalement sur deux lois fédérales, l’Animal Welfare Act (1966) et la Health Research Extension Act (1985). L’Animal Welfare Act constitue le socle général en matière de bien-être animal et, depuis ses amendements de 1985, impose la mise en place de comités institutionnels d’éthique (Institutional Animal Care and Use Committees, IACUC). Ce dispositif est, pour la recherche biomédicale financée par des fonds publics, complété par la Public Health Service Policy on Humane Care and Use of Laboratory Animals, qui précise les exigences éthiques conditionnant l’accès aux financements.</p>
                    </div>
                </div>
            </div>

            <div class="sb-box" style="margin-top: 30px; border-left: 4px solid var(--text-dark); background: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: #333;">
                    Ainsi, si la légitimité morale de l’expérimentation animale reste un sujet de controverse, les cadres français et américain convergent vers une approche éthique pluraliste et gradualiste, située entre utilitarisme modéré et dualisme moral, qui reconnaît la valeur morale des animaux sans leur attribuer des droits absolus, et justifie l’expérimentation animale sous conditions strictes de nécessité scientifique, de proportionnalité et de minimisation de la souffrance.
                </p>
            </div>
        `,
        sts: "L'évolution du statut de l'animal : du moteur mécanique cartésien au sujet moral protégé par le droit international.",
        biblio_id: "philo_ethique"
    },
    // 2. ÉTHIQUE
    /*{ 
        id: 'f_ethique', side: 'friction', cat: 'Bioéthique', title: 'Calcul Moral', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Theseus_Minotauros_Louvre_MNC675.jpg/960px-Theseus_Minotauros_Louvre_MNC675.jpg?auto=format&fit=crop&w=600&q=80',
        y: 26, 
        desc: "L'utilitarisme (sauver une vie) face à la déontologie (ne pas instrumentaliser).", 
        sts: "Justification du 'mal nécessaire'." 
    },*/

    // 3. MÉDIAS
    {
        id: 'f_media', side: 'friction', cat: 'Médias', title: 'Spectacle Médical',
        img: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=600&q=80',
        y: 30,
        desc: "Comment la presse transforme une expérience chirurgicale en épopée héroïque.",
        sts: "La science a besoin du spectacle."
    },

    // 4. PUBLIC
   // 4. PUBLIC (Mise à jour avec le contenu détaillé)
    { 
        id: 'f_public', side: 'friction', cat: 'Grand Public', title: 'Peur du Monstre', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Scared_Girl.jpg?auto=format&fit=crop&w=600&q=80', 
        y: 48, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Principaux</strong></p>
                <p>Le Grand Public est un ensemble hétérogène dont les perceptions sont structurées par la culture, la religion, le genre, l’âge et le niveau d’instruction.</p>
            </div>

            <div class="pharma-section">
                <h3>Sous-groupes Identifiés</h3>
                <ul style="padding-left:15px; margin-bottom: 20px;">
                    <li style="margin-bottom:5px;"><strong>Groupes religieux :</strong> Écarts nets liés aux interdits (porc) ou aux valeurs de compassion.</li>
                    <li style="margin-bottom:5px;"><strong>Groupes alimentaires :</strong> Végétariens/végétaliens plus réticents.</li>
                    <li style="margin-bottom:5px;"><strong>Démographie :</strong> Femmes et 40-59 ans plus réservées ; Jeunes et seniors plus favorables.</li>
                    <li style="margin-bottom:5px;"><strong>Niveau d'éducation :</strong> L'instruction favorise l'acceptabilité.</li>
                    <li style="margin-bottom:5px;"><strong>Expérience :</strong> Receveurs et proches approuvent davantage (logique de survie).</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Discours Dominants</h3>
                
                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">1. Utilitariste / Humanitaire</h4>
                <p style="margin-top:0;">L’argument principal (≈ 35 % UK/US) : la finalité vitale ("sauver des vies") justifie la technique.</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">2. Éthique du rapport à l’animal</h4>
                <p style="margin-top:0;">Rejet (30 % UK) motivé par le refus de modifier ou élever des animaux pour cela. Proximité avec les valeurs de bien-être.</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">3. Religieux / Moral</h4>
                <p style="margin-top:0;">Prégnance de l'interdit du porc (Halal/Haram). Acceptation possible sous condition stricte de "nécessité vitale" (Darura).</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">4. Épistémique & Émotionnel</h4>
                <p style="margin-top:0;">Méfiance face au manque de données (57 % US) et anxiété identitaire : crainte d’être "moins humain", dégoût de la fusion homme-animal.</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">5. Dynamique Sociétale</h4>
                <p style="margin-top:0;">Le soutien augmente avec l’information scientifique : après explication, les taux favorables progressent (65% → 70% au UK).</p>
            </div>

            <div class="pharma-section" style="background: #f4faff; padding: 15px; border-radius: 8px; border: 1px solid var(--human-main);">
                <h3 style="color:var(--human-main); margin-top:0;">Logiques d'Attitude</h3>
                <ul style="margin-bottom:0;">
                    <li style="margin-bottom:8px;"><strong>Sauver des vies :</strong> Motivation centrale des favorables (efficacité médicale).</li>
                    <li style="margin-bottom:8px;"><strong>Préservation morale :</strong> Refus de la transgression du sacré et de la "souillure" corporelle.</li>
                    <li style="margin-bottom:8px;"><strong>Compassion :</strong> Argument empathique (refus de l'exploitation animale).</li>
                    <li style="margin-bottom:8px;"><strong>Pragmatisme conditionnel :</strong> "Oui, si..." (Urgence vitale, pas d'alternative).</li>
                    <li><strong>Garantie institutionnelle :</strong> Demande forte de régulation par des autorités indépendantes.</li>
                </ul>
            </div>`,
        sts: "L'imaginaire freine ou accélère l'innovation.",
        biblio_id: "socio_public"
    },

    // 5. DROIT (Séparé - Avec intros et liens)
    {
        id: 'f_droit',
        side: 'friction',
        cat: 'Législations & Normalisation',
        title: 'La Zone Grise',
        img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
        y: 65,
        desc: `
            <!-- Header : Citation introductive -->
            <div style="margin-bottom: 35px; padding: 0 10px;">
                <p style="font-family: var(--font-serif); font-size: 1.2rem; color: #1a1a1a; line-height: 1.4; border-left: 4px solid var(--friction-main); padding-left: 20px;">
                    Analyse des normes nationales hétérogènes et des recommandations globales.
                </p>
            </div>
            
            <!-- Grille des cartes -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 30px;">
                
                <!-- Carte International -->
                <div style="background: #fff; border: 1px solid #eee; border-top: 4px solid var(--friction-main); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; min-height: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div>
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🌍</div>
                        <h4 style="margin: 0 0 12px 0; font-family: var(--font-sans); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: #333;">International</h4>
                        <p style="font-size: 0.85rem; color: #666; line-height: 1.5; margin: 0;">Harmonisation mondiale via les normes de l'OMS et de l'IXA.</p>
                    </div>
                    <button class="page-link-btn" style="width: 100%; margin-top: 15px; border-color: var(--friction-main); color: var(--friction-main);" onclick="UI.loadDetailSub('loi_int', 'f_droit')">Ouvrir</button>
                </div>

                <!-- Carte USA -->
                <div style="background: #f8fbff; border: 1px solid #e1e8f0; border-top: 4px solid var(--human-main); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; min-height: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div>
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🇺🇸</div>
                        <h4 style="margin: 0 0 12px 0; font-family: var(--font-sans); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: #333;">États-Unis</h4>
                        <p style="font-size: 0.85rem; color: #666; line-height: 1.5; margin: 0;">Modèle fédéral pragmatique supervisé par la FDA et l'USDA.</p>
                    </div>
                    <button class="page-link-btn" style="width: 100%; margin-top: 15px; border-color: var(--human-main); color: var(--human-main);" onclick="UI.loadDetailSub('loi_usa', 'f_droit')">Ouvrir</button>
                </div>

                <!-- Carte France -->
                <div style="background: #fffafa; border: 1px solid #f0e1e1; border-top: 4px solid var(--pig-main); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; min-height: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div>
                        <div style="font-size: 1.5rem; margin-bottom: 10px;">🇫🇷</div>
                        <h4 style="margin: 0 0 12px 0; font-family: var(--font-sans); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: #333;">France</h4>
                        <p style="font-size: 0.85rem; color: #666; line-height: 1.5; margin: 0;">Socle bioéthique robuste en attente de décrets d'application.</p>
                    </div>
                    <button class="page-link-btn" style="width: 100%; margin-top: 15px; border-color: var(--pig-main); color: var(--pig-main);" onclick="UI.loadDetailSub('loi_fr', 'f_droit')">Ouvrir</button>
                </div>
            </div>

            <!-- Bloc Citation bas -->
            <div style="background: #f4f4f4; padding: 25px; border-radius: 12px; border: 1px solid #eee; position: relative;">
                <span style="position: absolute; top: 10px; left: 15px; font-size: 3rem; color: #ddd; font-family: serif; line-height: 0;">“</span>
                <p style="margin: 0; font-size: 0.95rem; font-style: italic; color: #555; line-height: 1.6; padding-left: 10px;">
                    Plusieurs organisations internationales visent à harmoniser les standards de sécurité et à promouvoir une gouvernance éthique partagée.
                </p>
            </div>
        `,
        sts: "La loi transforme une incertitude biologique en risque administrativement gérable."
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
    // --- INTERNATIONAL ---
    'loi_int': {
        title: "🌍 Normalisation Internationale",
        content: `
            <p>Plusieurs organisations ont élaboré des recommandations structurant les politiques nationales pour harmoniser la sécurité et l'éthique.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 25px 0;">
                <div style="background: #fff; padding: 20px; border-radius: 12px; border: 1px solid #eee; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                    <h4 style="color:var(--friction-main); margin-top:0;">L'OMS (Organisation Mondiale de la Santé)</h4>
                    <p style="font-size: 0.85rem;">Rôle central depuis 1998 (gestion du risque infectieux). La résolution <strong>WHA57.18 (2004)</strong> encourage les États à créer des mécanismes de surveillance nationaux.</p>
                </div>
                <div style="background: #fff; padding: 20px; border-radius: 12px; border: 1px solid #eee; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                    <h4 style="color:var(--friction-main); margin-top:0;">IXA (International Xeno Assoc.)</h4>
                    <p style="font-size: 0.85rem;">Spécialisée dans la Transplantation Society (TTS). Gère l'inventaire mondial, favorise les échanges et publie la revue <em>Xenotransplantation</em>.</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="background: #f9f9f9; padding: 20px; border-radius: 12px;">
                    <h4 style="margin-top:0;">Communiqués de Changsha</h4>
                    <p style="font-size: 0.85rem;">(2008, 2011, 2018). Premier standard mondial intégrant les avancées sur les porcs génétiquement modifiés et les bénéfices de la XTP.</p>
                </div>
                <div style="background: #f9f9f9; padding: 20px; border-radius: 12px;">
                    <h4 style="margin-top:0;">Modèle Européen (ATMP)</h4>
                    <p style="font-size: 0.85rem;">Le règlement (CE) n°1394/2007 intègre la XTP dans le droit pharmaceutique (ATMP). Recommandation Rec(2003)10 du Conseil de l'Europe.</p>
                </div>
            </div>`,
        real: "Renforcement de la transparence et promotion de normes harmonisées via l’inventaire mondial IXA/OMS (humanxenotransplant.org).",
        biblio: `World Health Organization (WHO). (2004). Resolution WHA57.18: Xenotransplantation.

Changsha Communiqué. (2008). "Principles for the Conduct of Xenotransplantation Clinical Trials".

Council of Europe. Report on the state of the art in the field of xenotransplantation. 2003; CDBI/CDSP-XENO (2003) 1.

Conseil de l’Europe. Recommandation Rec(2003)10 du Comité des Ministres aux Etats membres sur la xénotransplantation. 2003.

European Medicines Agency. Reflection paper on classification of advanced therapy medicinal products. 2015; EMA/CAT/600280/2010 rev.1.

Hawthorne WJ, et al. International xenotransplantation association (IXA) position paper on the history, current status, and regulation of xenotransplantation. Xenotransplantation 2025; 32(2):e70002.`
    
    },

    // --- USA ---
    'loi_usa': {
        title: "🇺🇸 Autorités aux États-Unis",
        content: `
            <p>La pratique est encadrée par des lois fédérales (CFR) mobilisant le <strong>DHHS</strong> et l'<strong>USDA</strong>.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 25px 0;">
                <div style="background: #f4faff; padding: 20px; border-radius: 12px; border-left: 5px solid var(--human-main);">
                    <h4 style="margin-top:0;">FDA (Food & Drug Admin)</h4>
                    <p style="font-size: 0.85rem;">Socle : <em>Public Health Service Act</em>. Gère les essais cliniques (IND) et les licences biologiques (BLA) via le titre 21 du CFR.</p>
                </div>
                <div style="background: #f4faff; padding: 20px; border-radius: 12px; border-left: 5px solid var(--human-main);">
                    <h4 style="margin-top:0;">Protection & Bien-être</h4>
                    <p style="font-size: 0.85rem;">National Research Act (éthique humaine) et Animal Welfare Act (USDA) pour les donneurs porcins via les comités <strong>IACUC</strong>.</p>
                </div>
            </div>

            <div style="background: #fff; padding: 25px; border: 1px solid #eee; border-radius: 12px;">
                <h3 style="margin-top:0;">Guidelines pour l'Industrie</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    <div>
                        <h4 style="color:#666; font-size: 0.9rem; border-bottom: 1px solid #ddd;">Draft Guidelines (1996/2001)</h4>
                        <p style="font-size: 0.85rem;">Recommandations sur la sélection sanitaire, le consentement éclairé face à l'incertitude et la surveillance des tiers.</p>
                    </div>
                    <div>
                        <h4 style="color:#666; font-size: 0.9rem; border-bottom: 1px solid #ddd;">Guidance for Industry (2003/2016)</h4>
                        <p style="font-size: 0.85rem;">Précise les <strong>GMP (Bonnes pratiques)</strong> : élevage stérile, tests microbiologiques et traçabilité totale.</p>
                    </div>
                </div>
            </div>`,
        real: "La FDA classe l'organe xénogénique comme un produit thérapeutique innovant.",
         biblio: `U.S. Food and Drug Administration (FDA). Source Animal, Product, Preclinical, and Clinical Issues Concerning the Use of Xenotransplantation Products in Humans - Guidance for Industry. 2016.

U.S. Public Health Service (PHS). PHS Guideline on Infectious Disease Issues in Xenotransplantation. 2001.

U.S. Code of Federal Regulations (CFR). Title 21: Food and Drugs (FDA); Title 9: Animals and Animal Products (USDA); Title 45: Public Welfare (DHHS).

Animal Welfare Act (AWA). 7 U.S.C. §§ 2131-2159 (USDA oversight of source animals).

National Research Act. Pub. L. 93-348 (Ethical principles for human subjects research).

Health Research Extension Act of 1985. Pub. L. 99-158 (PHS Policy on Humane Care and Use of Laboratory Animals).`
    },

    // --- FRANCE ---
    'loi_fr': {
        title: "🇫🇷 Autorités en France",
        content: `
            <div style="background:#fff9f9; padding:20px; border-radius:12px; border:1px solid #ffebee; margin-bottom:25px; display:flex; align-items:center; gap:20px;">
                <span style="font-size: 2rem;">🏛️</span>
                <p style="margin:0; font-size:0.9rem; line-height:1.5;"><strong>Statut : Cadre théorique existant mais incomplet.</strong> Plusieurs ensembles de textes définissent un socle sans permettre encore la pratique clinique effective.</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                <div style="background: #fdfdfd; padding: 20px; border-radius: 12px; border: 1px solid #eee;">
                    <h4 style="color:var(--pig-main); margin-top:0;">Lois Bioéthique & Jardé</h4>
                    <p style="font-size: 0.85rem;">Codifiées dans le Code de la Santé Publique (CSP). Définissent la dignité, l'intégrité et le consentement libre et éclairé.</p>
                </div>
                <div style="background: #fdfdfd; padding: 20px; border-radius: 12px; border: 1px solid #eee;">
                    <h4 style="color:var(--pig-main); margin-top:0;">Régime de 1998 (Veille)</h4>
                    <p style="font-size: 0.85rem;">L'article <strong>L.1127-2 du CSP</strong> impose une autorisation de l'<strong>ANSM</strong> après avis de l'ABM (Agence de la Biomédecine).</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; background: #f8f9fa; padding: 20px; border-radius: 12px;">
                <div>
                    <h4 style="margin-top:0;">Rôle de l'ABM & ANSES</h4>
                    <p style="font-size: 0.85rem;">Doivent définir les règles de bonnes pratiques : élevage, sélection, statut sanitaire et manipulation des tissus.</p>
                </div>
                <div>
                    <h4 style="margin-top:0;">Décret 2013 (Expérimentation)</h4>
                    <p style="font-size: 0.85rem;">Transpose la directive 2010/63/UE : encadre l'évaluation éthique des projets et l'agrément des établissements.</p>
                </div>
            </div>

            <div class="sb-box" style="margin-top: 25px; border-left: 4px solid var(--text-dark);">
                <p style="margin:0; font-size:0.95rem; font-weight:700;">"En l'absence de cadre permettant la XTP clinique aujourd'hui, l'ANM et l'ABM appellent à engager une réflexion nationale urgente."</p>
            </div>`,
        real: "L'absence de décrets d'application bloque actuellement le passage à l'humain en France.",
         biblio: `Code de la Santé Publique, Articles L1241-1 à L1241-7.

Loi n° 2012-300 du 5 mars 2012 relative aux recherches impliquant la personne humaine (Loi Jardé).

Agence de la biomédecine. Des organes animaux chez l’humain : la xénotransplantation au cœur des préoccupations scientifiques et éthiques de demain. La lettre de la biomédecine 2024.

Lebranchu Y. Rapport 25-07. Les xénogreffes d’organes, de tissus et de cellules : un plan xénogreffe est nécessaire en France. Bull Acad Natl Med 2025; 209(7):893-904.`
    
    },

    // 1. ÉCONOMIE & MARCHÉ
    'eco_market': {
        title: "Le Marché de la Greffe",
        content: `<ul><li><strong>Modèle :</strong> Passage d'un don gratuit (organes humains) à un produit tarifé industriel (organes animaux).</li><li><strong>Coût-Efficacité :</strong> Une transplantation coûte ~80k€ une fois, contre ~60k€/an pour la dialyse à vie. L'État a intérêt à payer.</li></ul><br>
        L'argument économique est le moteur silencieux de la XTP. Les fonds d'investissement (Capital-Risque) parient sur le fait que les systèmes de santé préféreront payer cher une fois pour "réparer" le patient plutôt que de payer des soins chroniques. Cependant, le coût de production des porcs DPF (élevés en bulles stériles) reste prohibitif.`,
        real: "Marché estimé à 25 milliards de dollars d'ici 2030 (Grand View Research).",
        biblio: `Abou-Jaoude, M. (2023). "Cost-effectiveness analysis of xenotransplantation". American Journal of Transplantation.
Rothblatt, M. (2020). "From Transgender to Transhuman". (Analyse économique United Therapeutics).`
    },

    // 2. ÉTHIQUE ANIMALE
    'ethique_animal': { 
        title: "Critique : Acteurs & Discours", 
        content: `
            <div class="pharma-intro-header">
                <p><strong>Cartographie des Opposants</strong></p>
                <p>Analyse des acteurs, des réseaux et des discours contestant la xénogreffe.</p>
            </div>

            <div class="pharma-section">
                <h3>Acteurs Principaux</h3>
                <ul style="padding-left: 15px; margin-bottom: 15px;">
                    <li style="margin-bottom: 10px;"><strong>Eurogroup for Animals :</strong> Réseau paneuropéen fédérant des ONG de protection animale. Acteur de plaidoyer auprès des institutions européennes, il oppose la xénogreffe au nom de l’éthique et du bien-être, et promeut les alternatives <em>in vitro</em> et le principe des 3R (Réduction, Raffinement, Remplacement).</li>
                    
                    <li style="margin-bottom: 10px;"><strong>Stichting Proefdiervrij :</strong> Association néerlandaise (membre d’Eurogroup). Via sa campagne <em>"Niet. Gewoon."</em> (Not. Normal.), elle demande le maintien de l'interdiction de la xénotransplantation aux Pays-Bas et promeut des solutions « centrées humains » (don, prévention, biomimétique).</li>
                    
                    <li style="margin-bottom: 10px;"><strong>Pro Anima (France) :</strong> Comité scientifique militant. Il conteste la xénogreffe au regard de ses échecs cliniques, des risques zoonotiques et de l’acceptabilité sociale. Recommande la réallocation des ressources vers la bio-impression 3D/4D.</li>
                </ul>
                <p style="font-size:0.85rem; background:#eee; padding:8px; border-radius:4px;"><strong>Sous-acteurs :</strong> Eurogroup network (influence paneuropéenne), Publics et médias (cibles de campagnes).</p>
            </div>

            <div class="pharma-section">
                <h3>Acteurs Non-Humains & Techniques</h3>
                <ul style="font-size: 0.95rem;">
                    <li><strong>Les Animaux :</strong> Cochons génétiquement modifiés (source d’organes), lignées clonées et troupeaux à haut statut sanitaire élevés en conditions stériles (césarienne, isolement).</li>
                    <li><strong>Outils :</strong> CRISPR/Cas9, transgénèse/knock-in/knock-out, clonage par transfert nucléaire.</li>
                    <li><strong>Alternatives :</strong> Organes artificiels, tissus/organoïdes, bio-impression, dispositifs de régénération.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Discours et Cadres d’Argumentation</h3>
                
                <h4 style="font-size:0.95rem; text-transform:uppercase; color:#555; margin-bottom:5px; border-bottom:1px solid #ddd;">1. Éthique & Dignité (Bossu, 2025)</h4>
                <p>La xénogreffe réifie l’animal et maximalise son instrumentalisation (génétiquement modifié + clonage + conditions stériles). Elle contrevient à la valeur inhérente de l’animal et impose des dommages (douleur, anxiété, altération des capacités).</p>

                <h4 style="font-size:0.95rem; text-transform:uppercase; color:#555; margin-bottom:5px; border-bottom:1px solid #ddd;">2. Bien-être & Expérimentation</h4>
                <p>La création de lignées génétiquement modifiées et clonées implique des interventions chirurgicales douloureuses pour un taux de succès faible (3–5 %). Il faut environ <strong>200 animaux</strong> pour produire une lignée génétiquement modifiée « aboutie ».</p>

                <h4 style="font-size:0.95rem; text-transform:uppercase; color:#555; margin-bottom:5px; border-bottom:1px solid #ddd;">3. Épistémique & Sanitaire</h4>
                <p>Critique des "sur-promesses" (survie clinique rare au-delà de quelques mois) et du risque de zoonoses amplifié par l’immunosuppression, exposant la société entière à un risque collectif.</p>
            </div>

            <div class="pharma-section" style="background: #fff9f9; padding: 15px; border-radius: 8px; border: 1px solid var(--pig-main);">
                <h3 style="color:var(--pig-main); margin-top:0;">Motivations</h3>
                <ul style="margin-bottom:0;">
                    <li><strong>Refus de l’instrumentalisation :</strong> Ne pas réduire l'animal à un « bioréacteur ».</li>
                    <li><strong>Délégitimation :</strong> Démontrer le faible rendement de la voie XTP.</li>
                    <li><strong>Substitution :</strong> Promouvoir des trajectoires plus sûres (cellules humaines).</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force & Alliances</h3>
                
                <div style="margin-bottom: 15px; padding-bottom:10px; border-bottom:1px dashed #eee;">
                    <strong>🏛️ Plaidoyer → Institutions UE</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Eurogroup influence l’agenda et la régulation biotech (appels aux 3R, restrictions d’espèces).</span>
                </div>

                <div style="margin-bottom: 15px; padding-bottom:10px; border-bottom:1px dashed #eee;">
                    <strong>📢 Campagne → Opinion Publique</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Mobilisation (ex: Proefdiervrij) pour délégitimer la xénogreffe via des référents émotionnels.</span>
                </div>

                <div style="margin-bottom: 15px; padding-bottom:10px; border-bottom:1px dashed #eee;">
                    <strong>🔬 Contestation → Science/Industrie</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Pro Anima dénonce les souffrances précliniques et propose des substituts techniques (organoïdes).</span>
                </div>

                <div>
                    <strong>🐖 Encadrement → Pratiques d’élevage</strong><br>
                    <span style="font-size:0.9rem; color:#555;">Pression sur les conditions de production (césarienne, isolement) qualifiées d'atteintes à la dignité.</span>
                </div>
            </div>`,
        real: "Conflit de valeurs : L'animal-sujet (Militants) vs L'animal-médicament (Industrie).",
        biblio: `Bossu, A. (2025). "Xénotransplantation : et du côté du cochon ?". InfOGM.
Disponible sur : https://infogm.org/xenotransplantation-et-du-cote-du-cochon/

Eurogroup for Animals. (2022). "Not normal - Animals shouldn’t have to suffer due to organ shortage".
Disponible sur : https://www.eurogroupforanimals.org/news/not-normal-animals-shouldnt-have-suffer-due-organ-shortage

Eurogroup for Animal Welfare. (2006). "Submission to the European Commission Biotechnology for Europe Study: Impact of Modern Biotechnology on Animal Welfare".

Pro Anima. (2025). "Prioriser des alternatives plus éthiques à la xénotransplantation".
Disponible sur : https://www.proanima.fr/notre-revue-sciences-enjeux-sante/articles-contributions/xenotransplantation/`
    },

    // 3. SOCIOLOGIE & PUBLIC
    'socio_public': { 
        title: "Le Grand Public", 
        content: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Principaux</strong></p>
                <p>Le Grand Public est un ensemble hétérogène dont les perceptions sont structurées par la culture, la religion, le genre, l’âge et le niveau d’instruction.</p>
            </div>

            <div class="pharma-section">
                <h3>Sous-groupes Identifiés</h3>
                <ul style="padding-left:15px; margin-bottom: 20px;">
                    <li style="margin-bottom:5px;"><strong>Groupes religieux :</strong> Écarts nets liés aux interdits (porc) ou aux valeurs de compassion.</li>
                    <li style="margin-bottom:5px;"><strong>Groupes alimentaires :</strong> Végétariens/végétaliens plus réticents.</li>
                    <li style="margin-bottom:5px;"><strong>Démographie :</strong> Femmes et 40-59 ans plus réservées ; Jeunes et seniors plus favorables.</li>
                    <li style="margin-bottom:5px;"><strong>Niveau d'éducation :</strong> L'instruction favorise l'acceptabilité.</li>
                    <li style="margin-bottom:5px;"><strong>Expérience :</strong> Receveurs et proches approuvent davantage (logique de survie).</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Discours Dominants</h3>
                
                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">1. Utilitariste / Humanitaire</h4>
                <p style="margin-top:0;">L’argument principal (≈ 35 % UK/US) : la finalité vitale ("sauver des vies") justifie la technique.</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">2. Éthique du rapport à l’animal</h4>
                <p style="margin-top:0;">Rejet (30 % UK) motivé par le refus de modifier ou élever des animaux pour cela. Proximité avec les valeurs de bien-être.</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">3. Religieux / Moral</h4>
                <p style="margin-top:0;">Prégnance de l'interdit du porc (Halal/Haram). Acceptation possible sous condition stricte de "nécessité vitale" (Darura).</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">4. Épistémique & Émotionnel</h4>
                <p style="margin-top:0;">Méfiance face au manque de données (57 % US) et anxiété identitaire : crainte d’être "moins humain", dégoût de la fusion homme-animal.</p>

                <h4 style="font-size:0.9rem; margin-bottom:5px; color:#444;">5. Dynamique Sociétale</h4>
                <p style="margin-top:0;">Le soutien augmente avec l’information scientifique : après explication, les taux favorables progressent (65% → 70% au UK).</p>
            </div>

            <div class="pharma-section" style="background: #f4faff; padding: 15px; border-radius: 8px; border: 1px solid var(--human-main);">
                <h3 style="color:var(--human-main); margin-top:0;">Logiques d'Attitude</h3>
                <ul style="margin-bottom:0;">
                    <li style="margin-bottom:8px;"><strong>Sauver des vies :</strong> Motivation centrale des favorables (efficacité médicale).</li>
                    <li style="margin-bottom:8px;"><strong>Préservation morale :</strong> Refus de la transgression du sacré et de la "souillure" corporelle.</li>
                    <li style="margin-bottom:8px;"><strong>Compassion :</strong> Argument empathique (refus de l'exploitation animale).</li>
                    <li style="margin-bottom:8px;"><strong>Pragmatisme conditionnel :</strong> "Oui, si..." (Urgence vitale, pas d'alternative).</li>
                    <li><strong>Garantie institutionnelle :</strong> Demande forte de régulation par des autorités indépendantes.</li>
                </ul>
            </div>`,
        real: "L'acceptabilité augmente avec la gravité de la maladie.",
        biblio: `Fraux C, et al. French people’s views regarding xenotransplantation. Transplant Proc 2021; 53(2):529-538.
Padilla LA, et al. Public attitudes to xenotransplantation: A national survey in the United States. Am J Transplant 2024; 24(11):2066-2079. 
Andrade G, et al. Moral approval of xenotransplantation in Egypt: associations with religion, attitudes towards animals and demographic factors. BMC Med Ethics 2024; 25(1):19.
Al-Haboubi M, et al. Public views on xenotransplantation from the first representative sample survey in the UK. The Lancet 2025; 406(10508):1083-1085.`
    },

    // 4. RELIGION (Design stylisé & Contenu complet)
    'religion_detail': { 
        title: "Positions Religieuses & Culturelles", 
        content: `
            <div class="pharma-intro-header">
                <p><strong>Analyses et Acteurs</strong></p>
                <p>Détail des études (Andrade, Hurst, Tarabeih), cartographie des positions des acteurs et axes de la controverse.</p>
            </div>

            <!-- SECTION 1 : ÉTUDES -->
            <div class="pharma-section">
                <h3>1. Synthèse des Études Récentes</h3>
                
                <!-- CARTE ANDRADE -->
                <div style="background: #fff; border-left: 4px solid #2c3e50; border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 1rem;">
                        📄 1.1 Andrade et al. (2024) <span style="font-weight:normal; color:#777;">— Moral approval in Egypt</span>
                    </h4>
                    <p style="margin-top:0; font-size:0.9rem; font-style:italic; color:#555;">Étude quantitative (n=895) examinant l’acceptabilité morale de la xénogreffe en Égypte.</p>
                    <ul style="font-size:0.9rem; margin-bottom:5px; padding-left:15px;">
                        <li style="margin-bottom:4px;"><strong>Genre :</strong> Facteur prédictif le plus fort (les femmes approuvent moins).</li>
                        <li style="margin-bottom:4px;"><strong>Identité religieuse :</strong> Influence l’approbation (Musulmans vs Chrétiens), mais pas le degré de religiosité.</li>
                        <li style="margin-bottom:4px;"><strong>Bien-être animal :</strong> Les préoccupations éthiques diminuent l’acceptabilité.</li>
                        <li><strong>Espèce :</strong> Les organes porcins sont moins acceptés que ceux des moutons.</li>
                    </ul>
                </div>

                <!-- CARTE HURST -->
                <div style="background: #fff; border-left: 4px solid var(--friction-main); border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #d4a017; font-size: 1rem;">
                        🌍 1.2 Hurst et al. (2025) <span style="font-weight:normal; color:#777;">— Religious perspectives</span>
                    </h4>
                    <p style="margin-top:0; font-size:0.9rem; font-style:italic; color:#555;">Symposium international réunissant des spécialistes religieux de multiples traditions.</p>
                    <ul style="font-size:0.9rem; margin-bottom:5px; padding-left:15px;">
                        <li style="margin-bottom:4px;"><strong>Consensus :</strong> Aucune tradition ne déclare la xénogreffe <em>interdite</em> par principe.</li>
                        <li style="margin-bottom:4px;"><strong>Points de vigilance :</strong> Bien-être animal, xénozoonoses, ne pas "jouer à Dieu", justice sociale.</li>
                        <li><strong>Conclusion :</strong> Permissivité conditionnelle (Nécessité, Proportionnalité, Dignité, Prudence).</li>
                    </ul>
                </div>

                <!-- CARTE TARABEIH -->
                <div style="background: #fff; border-left: 4px solid var(--human-main); border-radius: 4px; padding: 15px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: var(--human-main); font-size: 1rem;">
                        🇮🇱 1.3 Tarabeih & Na’amnih (2025) <span style="font-weight:normal; color:#777;">— Attitudes en Israël</span>
                    </h4>
                    <p style="margin-top:0; font-size:0.9rem; font-style:italic; color:#555;">Enquête (n=884) sur la connaissance des règles religieuses par les patients musulmans.</p>
                    <ul style="font-size:0.9rem; margin-bottom:5px; padding-left:15px;">
                        <li style="margin-bottom:4px;"><strong>Lacunes :</strong> Faible connaissance des règles (beaucoup ignorent que la greffe porcine est permise par nécessité).</li>
                        <li style="margin-bottom:4px;"><strong>Facteurs :</strong> Attitudes dépendantes de la religiosité, l’éducation et l’âge.</li>
                        <li><strong>Recommandation :</strong> Améliorer l’information religieuse et médicale pour le consentement éclairé.</li>
                    </ul>
                </div>
            </div>

            <!-- SECTION 2 : ACTEURS -->
            <div class="pharma-section">
                <h3>2. Cartographie des Acteurs</h3>

                <!-- GROUPE PUBLIC EGYPTE -->
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size:0.85rem; text-transform:uppercase; color:#999; border-bottom:1px solid #ddd; padding-bottom:5px;">👥 Public & Société (Focus Égypte)</h4>
                    
                    <div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border:1px solid #eee;">
                        <strong>Population musulmane</strong><br>
                        <span style="font-size:0.85rem; color:#c0392b;">⚠️ Hésitation forte</span>
                        <div style="font-size:0.9rem; margin-top:5px; color:#555;">Moins d’approbation que les chrétiens. Hésitation pour le porc influencée par le genre et l'éthique animale.</div>
                    </div>

                    <div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border:1px solid #eee;">
                        <strong>Chrétiens d’Égypte</strong><br>
                        <span style="font-size:0.85rem; color:#27ae60;">✅ Acceptation plus forte</span>
                        <div style="font-size:0.9rem; margin-top:5px; color:#555;">Moins de restrictions religieuses spécifiques sur l'animal source.</div>
                    </div>

                    <div style="background:#f8f9fa; padding:12px; margin-bottom:8px; border-radius:6px; border:1px solid #eee;">
                        <strong>Femmes égyptiennes</strong><br>
                        <span style="font-size:0.85rem; color:#e67e22;">⚖️ Sensibilité Éthique</span>
                        <div style="font-size:0.9rem; margin-top:5px; color:#555;">Acceptation plus faible due à une sensibilité accrue au bien-être animal et à la gestion du risque.</div>
                    </div>
                </div>

                <!-- GROUPE AUTORITÉS RELIGIEUSES -->
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size:0.85rem; text-transform:uppercase; color:#999; border-bottom:1px solid #ddd; padding-bottom:5px;">🕌 Autorités Religieuses</h4>

                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <!-- Sunnites -->
                        <div style="background:#fffaf0; padding:10px; border-radius:6px; border:1px solid #fce8b2;">
                            <strong style="color:#d35400;">Islam Sunnite</strong>
                            <p style="font-size:0.85rem; margin:5px 0;">Permissivité sous <em>Darura</em> (nécessité). Réticence culturelle persistante.</p>
                        </div>
                        <!-- Chiites -->
                        <div style="background:#fffaf0; padding:10px; border-radius:6px; border:1px solid #fce8b2;">
                            <strong style="color:#d35400;">Islam Chiite</strong>
                            <p style="font-size:0.85rem; margin:5px 0;">Plus grande permissivité. Pas de distinction pur/impur si nécessité vitale.</p>
                        </div>
                    </div>

                    <div style="background:#fffaf0; padding:10px; margin-top:10px; border-radius:6px; border:1px solid #fce8b2;">
                        <strong style="color:#8e44ad;">Catholicisme / Église</strong>
                        <p style="font-size:0.9rem; margin:5px 0; color:#555;">Acceptation large sous conditions : sécurité, consentement, préservation de l'identité personnelle.</p>
                    </div>

                    <div style="background:#fffaf0; padding:10px; margin-top:10px; border-radius:6px; border:1px solid #fce8b2;">
                        <strong style="color:#2980b9;">Judaïsme</strong>
                        <p style="font-size:0.9rem; margin:5px 0; color:#555;">Forte priorité à la préservation de la vie (<em>Pikuach Nefesh</em>) qui autorise l'usage médical du porc.</p>
                    </div>
                     <div style="background:#fffaf0; padding:10px; margin-top:10px; border-radius:6px; border:1px solid #fce8b2;">
                        <strong style="color:#e67e22;">Hindouisme</strong>
                        <p style="font-size:0.9rem; margin:5px 0; color:#555;">Tension entre <em>Ahimsa</em> (non-violence) et préservation de la vie (Karma).</p>
                    </div>
                </div>

                <!-- GROUPE INSTITUTIONS -->
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size:0.85rem; text-transform:uppercase; color:#999; border-bottom:1px solid #ddd; padding-bottom:5px;">🏥 Institutions & Médias</h4>
                    <ul style="font-size:0.9rem; padding-left:20px; color:#444;">
                        <li style="margin-bottom:8px;"><strong>Institutions Médicales :</strong> Volonté d'ouvrir des essais cliniques pour démontrer l'efficacité. Enjeu de gestion des risques.</li>
                        <li><strong>Société Civile (Monde musulman) :</strong> Présentation médiatique souvent hésitante, prudente, voire alarmée sur la conformité morale.</li>
                    </ul>
                </div>
            </div>

            <!-- SECTION 3 : AXES CONTROVERSE -->
            <div class="pharma-section">
                <h3>3. Axes de la Controverse</h3>
                
                <div style="margin-bottom:15px;">
                    <strong style="color:#c0392b;">🔬 Scientifique</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Risque de xénozoonoses, incertitude rejet long terme, justice dans la sélection des patients.</p>
                </div>

                <div style="margin-bottom:15px;">
                    <strong style="color:#8e44ad;">⚖️ Éthique</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Statut moral de l'animal, intégrité corporelle, consentement éclairé des minorités.</p>
                </div>

                <div style="margin-bottom:15px;">
                    <strong style="color:#d35400;">🕌 Religieux & Social</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Divergences internes (Sunnites/Chiites). Méfiance symbolique (impureté). Stigmatisation sociale.</p>
                </div>

                <div style="margin-bottom:15px;">
                    <strong style="color:#27ae60;">🌍 Politique & Éco</strong>
                    <p style="margin:5px 0 0 0; font-size:0.9rem; color:#555;">Marché des organes GM vs Inégalités d'accès Nord/Sud. Nécessité d'une régulation internationale.</p>
                </div>
            </div>`,
        
        real: "Convergence : Le religieux valide souvent la technique si la survie est en jeu.",
        
        biblio: `Andrade G, et al. (2024). "Moral approval of xenotransplantation in Egypt: associations with religion, attitudes towards animals and demographic factors". BMC Med Ethics; 25(1):19.

Hurst DJ, et al. (2025). "Religious perspectives regarding the ethical issues associated with clinical xenotransplantation". Xenotransplantation; 32(2):e70036.

Tarabeih M, et al. (2025). "Perceptions and attitudes of Muslims in Israel when using porcine-based organs in transplantation procedures". J Relig Health; 64(4):2595-2613.`
    }, 

    'corps_hybride': {
        title: "Associations de Patients",
        content: `
            <div class="pharma-intro-header">
                <p><strong>La Voix des Patients : De l'attente à l'activisme.</strong></p>
                <p>Loin d'être de simples receveurs, les associations de patients structurent des coalitions "Savoirs-Expérientiels / Industrie" pour accélérer l'accès aux greffes.</p>
            </div>

            <div class="pharma-section">
                <h3>1. Les Piliers de l'Advocacy (États-Unis)</h3>
                
                <div style="background: #fff; border-left: 4px solid var(--human-main); padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <strong style="color:var(--human-main);">National Kidney Foundation (NKF)</strong><br>
                    <p style="font-size:0.9rem; margin-top:5px;">En 2024, le rapport <em>"Voice of the Patient"</em> montre des patients impatients ("eager") de commencer les essais cliniques, voyant le rein de porc comme la clé contre la pénurie.</p>
                </div>

                <div style="background: #fff; border-left: 4px solid var(--human-main); padding: 15px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <strong style="color:var(--human-main);">AAKP (American Association of Kidney Patients)</strong><br>
                    <p style="font-size:0.9rem; margin-top:5px;">Lors du <em>World Kidney Day 2025</em>, l'AAKP a officialisé son soutien à la xénotransplantation pour élargir le choix thérapeutique, agissant comme le plus grand lobby indépendant de patients rénaux.</p>
                </div>
            </div>

            <div class="pharma-section">
                <h3>2. Diversité des Pathologies</h3>
                <ul style="font-size: 0.95rem; padding-left: 15px;">
                    <li style="margin-bottom:10px;"><strong>Islet Foundation (Diabète) :</strong> Soutien historique pour la xénogreffe d'îlots pancréatiques. L'association pousse pour des solutions radicales face aux pathologies chroniques lourdes, malgré les risques infectieux.</li>
                    <li style="margin-bottom:10px;"><strong>PKD Foundation (Polykystose) :</strong> Travaille à la "normalisation" de l'option porcine dans le parcours de soin, transformant l'espoir biomédical en une option thérapeutique crédible.</li>
                </ul>
            </div>

            <div class="pharma-section" style="background: #f4faff; padding: 15px; border-radius: 8px; border: 1px solid var(--human-main);">
                <h3 style="color:var(--human-main); margin-top:0;">3. Médiatisation & Coalitions</h3>
                <p>Les patients utilisent désormais des formats numériques pour peser sur le débat :</p>
                <ul style="margin-bottom:0; font-size:0.9rem;">
                    <li><strong>Webinaires AAKP :</strong> Sessions d'éducation où la xénogreffe est présentée non plus comme de la science-fiction, mais comme un futur proche.</li>
                    <li><strong>TRIO & CareDx :</strong> Bibliothèques de présentations (YouTube) où des greffés humains discutent de la xénogreffe, créant une figure de "Patient Pionnier".</li>
                    <li><strong>Partenariats Public-Privé :</strong> Le chirurgien Robert Montgomery souligne que c'est le "partenariat entre cliniciens et advocacy de patients" qui permet de lever les freins réglementaires (FDA).</li>
                </ul>

                <div style="background: #000; border-radius: 12px; overflow: hidden; margin-bottom: 15px;">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe 
            src="https://www.youtube-nocookie.com/embed/N92SjU9R8V0" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
    <div style="padding: 10px; background: #222; color: #eee; font-size: 0.8rem; text-align: center;">
        AAKP 2024: Xenotransplantation: Research and Ethics.
    </div>
</div>
            </div>
               
            

            <div class="pharma-section">
                <h3>4. Analyses Académiques</h3>
                <p style="font-size:0.9rem;">Des chercheurs comme <strong>Grießler (2012)</strong> ou <strong>Reese (2024)</strong> documentent ce pôle "pro-xéno" souvent éclipsé par la bioéthique. Ils montrent que l'urgence de la liste d'attente crée une rationalité vitale qui dépasse les réticences religieuses ou morales.</p>
            </div>
        `,
        sts: "Le patient devient un co-producteur de la technologie : son 'urgence vitale' sert de moteur de légitimation pour la science et l'industrie.",
          real: "Le partenariat cliniciens/patients est le moteur principal pour lever les freins réglementaires de la FDA.",
          biblio: `Grießler E. OECD xenotransplantation policies and public participation. 2012. 
Disponible sur : https://www.ssoar.info/ssoar/bitstream/handle/document/31221/ssoar-2012-grieler-oecd_xenotransplantation_policies_and_public.pdf

American Association of Kidney Patients (AAKP). 2021 AAKP webinars & presentations. 2021. 
Lien : https://www.youtube.com/playlist?list=PLsqCn2yDJM3PMmULnNTzPPw2q_CMpUUW8

Cheng M. Islet Xeno/transplantation and the risk of contagion: local responses from Canada and Australia to an emerging global technoscience. Life Sci Soc Policy 2015; 11(12).

PKD Foundation. Xenotransplantation: animal to human transplants. 2022. 
Lien : https://pkdcure.org/resources/xenotransplantation-animal-to-human-transplants/

Transplant Recipients International Organization (TRIO). Why is everyone talking about xenotransplantation? 2022.

Reese PP, et al. Engineering equity into the promise of xenotransplantation. Am J Kidney Dis 2024; 83(5):677-683.

National Kidney Foundation (NKF). The voice of the patient: Externally-led patient-focused drug development meeting on kidney xenotransplantation. 2024. 
Lien : https://www.kidney.org/sites/default/files/2024-11/NKF_Xeno%20VoP_Final.pdf

American Association of Kidney Patients (AAKP). 2025 world kidney day statement. 2025. 
Lien : https://aakp.org/2025-world-kidney-day-statement/`
    },

    'philo_ethique': {
        title: "Dossier : Éthique & Expérimentation",
        content: `
            <p>L’histoire de l’expérimentation animale remonte à l’Antiquité, mais c’est au XIXᵉ siècle, avec Claude Bernard, qu’émerge la pratique moderne étroitement liée à la démarche scientifique.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 25px 0;">
                <div style="background: rgba(251, 192, 45, 0.05); padding: 20px; border-radius: 12px; border: 1px solid var(--friction-main);">
                    <h4 style="color: var(--friction-main); text-transform: uppercase; font-size: 0.8rem; margin-top:0;">⚖️ L’Utilitarisme (Singer)</h4>
                    <p style="font-size: 0.85rem; margin-bottom:0;">Évalue la moralité selon les conséquences. La capacité à éprouver douleur et plaisir fonde la considération morale. P. Singer accorde un poids moral croissant selon la complexité cognitive.</p>
                </div>
                <div style="background: rgba(251, 192, 45, 0.05); padding: 20px; border-radius: 12px; border: 1px solid var(--friction-main);">
                    <h4 style="color: var(--friction-main); text-transform: uppercase; font-size: 0.8rem; margin-top:0;">📜 Le Déontologisme (Regan)</h4>
                    <p style="font-size: 0.85rem; margin-bottom:0;">Fonde la moralité sur le respect dû aux individus comme "fins en soi". Regan étend ce statut aux animaux "sujets d’une vie", contestant le principe de l'expérimentation.</p>
                </div>
            </div>

            <div class="pharma-section">
                <h3>Dualisme et Gradualisme</h3>
                <p>Les approches <strong>dualistes</strong> affirment une différence morale fondamentale (souvent subordonnée) entre l'humain et l'animal. Les approches <strong>gradualistes</strong> reconnaissent une continuité morale hiérarchisée fondée sur la complexité biologique et psychologique.</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 25px 0;">
                <div style="background: #f4faff; padding: 20px; border-radius: 12px; border-left: 5px solid var(--human-main);">
                    <h4 style="margin-top:0; color:var(--human-main);">Cadre France (UE)</h4>
                    <p style="font-size: 0.85rem;">Directive 2010/63/UE : impose le respect du principe des <strong>3R (Remplacer, Réduire, Raffiner)</strong> et l'analyse de proportionnalité bénéfices/atteintes.</p>
                </div>
                <div style="background: #fffafa; padding: 20px; border-radius: 12px; border-left: 5px solid var(--pig-main);">
                    <h4 style="margin-top:0; color:var(--pig-main);">Cadre États-Unis</h4>
                    <p style="font-size: 0.85rem;"><em>Animal Welfare Act</em> (1966) : impose la mise en place de comités institutionnels d’éthique (<strong>IACUC</strong>) pour chaque projet de recherche.</p>
                </div>
            </div>`,
        real: "Convergence éthique : le passage d'une vision mécaniste (Descartes) à une vision sentiente (Bentham/Singer).",
        biblio: `Rémy C. La disponibilité de l’animal pour la greffe d’organes. Débats et controverses. Revue semestrielle de droit animalier 2022; 2:335-348.

Rémy C. Hybrides Transplanter des organes de l’animal à l’homme. CNRS Editions 2024; 389 p.

Rémy C. (2025). La frontière entre humains et animaux Enquête historique et ethnographique sur la transplantation inter-espèces. Annales. Histoire, Sciences Sociales 2025; 80e année(1-2), 131-155.`
    },
};

// --- AJOUTER À LA FIN DE data.js ---
const RATIONALITY_DATA = [
    // --- GAUCHE (Côté Source) : L'OFFRE TECHNIQUE (2 cartes) ---
    {
        id: 'r_science', side: 'pig', cat: 'Universités & Labos', title: 'Rationalité Scientifique',
        img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
        y: 30,
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Clés :</strong> LMU Munich, Univ. Maryland, NYU Langone, Revivicor, eGenesis, United Therapeutics, Xenothera, Xenocure.</p>
                <p>Positionnement globalement <strong>favorable</strong>, mais traversé par des postures épistémologiques différentes.</p>
            </div>

            <div class="pharma-section">
                <h3>1. Le Consensus (D'accord)</h3>
                <ul>
                    <li><strong>Nécessité :</strong> La XTP est la réponse rationnelle à la pénurie d'organes humains.</li>
                    <li><strong>Maîtrise :</strong> Les obstacles biologiques (rejet, coagulation, infection) sont identifiables et techniquement surmontables.</li>
                    <li><strong>Maturité :</strong> Les progrès en édition génétique et immunologie rendent la clinique envisageable.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>2. Les Frictions Internes</h3>
                <p>Les tensions portent sur la <strong>translation vers l'humain</strong> (Preuve, Méthodologie, Vision du Vivant).</p>
            </div>

            <div class="pharma-section">
                <h3>3. Rapport de Force & Alliances</h3>
                <p><strong>Position Centrale :</strong> La science établit la nature et le protocole de la XTP.</p>
                
                <p style="margin-top:15px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Alliances :</strong><br>
                    Elle fournit la matière première à l'<a class="internal-link" onclick="UI.openNodeById('r_pharma')">Industrie Pharma</a>, justifie les investissements de la <a class="internal-link" onclick="UI.openNodeById('r_eco')">Sphère Économique</a> et s'appuie sur la <a class="internal-link" onclick="UI.openNodeById('r_reg')">Régulation</a> pour légitimer ses essais.
                </p>

                <p style="margin-top:15px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Oppositions :</strong><br>
                    Elle se heurte aux peurs irrationnelles supposées du <a class="internal-link" onclick="UI.openNodeById('r_public')">Grand Public</a> et aux critiques éthiques de la <a class="internal-link" onclick="UI.openNodeById('r_animal')">Défense Animale</a>.
                </p>
                <button class="page-link-btn" onclick="UI.loadDetailSub('regime', 'r_science')">Voir détail Régime</button>
            </div>`,
        sts: "Cadre de légitimité : La science définit ce qui est 'naturel' et 'faisable' pour le reste de la société."
    },
    {
        id: 'r_pharma', side: 'pig', cat: 'Industrie Pharma', title: 'Rationalité Thérapeutique',
        img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
        y: 70,
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Clés :</strong> Eledon Pharmaceuticals, Novartis, eGenesis, Revivicor et partenaires universitaires.</p>
                <p>Positionnement <strong>favorable</strong> : La XTP est vue comme un "assemblage thérapeutique" complexe.</p>
            </div>

            <div class="pharma-section">
                <h3>1. L'Argumentaire : Faisabilité & Dépendance</h3>
                <ul>
                    <li><strong>Cliniquement Faisable :</strong> Avec les bons immunosuppresseurs (anti-CD40), le rejet est maîtrisable.</li>
                    <li><strong>Modèle Économique :</strong> Création d'une <strong>dépendance thérapeutique</strong>. Le patient greffé devient un consommateur de biotechnologie à vie.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>2. Effets dans la Controverse</h3>
                <ul>
                    <li><strong>Marchandisation :</strong> Le corps animal et humain devient un gisement de valeur financière.</li>
                    <li><strong>Conditionnement :</strong> Le succès de la greffe est conditionné par l'accès aux molécules propriétaires.</li>
                    <li><strong>Équité :</strong> Risque d'une médecine à deux vitesses face au coût exorbitant des traitements.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>3. Rapport de Force & Alliances</h3>
                <p><strong>Rôle Pivot :</strong> L'industrie transforme la science en produit de marché.</p>
                
                <p style="margin-top:15px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Alliances Stratégiques :</strong><br>
                    Elle commercialise les découvertes de la <a class="internal-link" onclick="UI.openNodeById('r_science')">Science</a>, offre des perspectives de croissance à la <a class="internal-link" onclick="UI.openNodeById('r_eco')">Sphère Économique</a> et se présente comme le sauveur aux <a class="internal-link" onclick="UI.openNodeById('r_patients')">Assoc. Patients</a>.
                </p>

                <p style="margin-top:15px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Tensions & Influence :</strong><br>
                    Elle cristallise la méfiance du <a class="internal-link" onclick="UI.openNodeById('r_public')">Grand Public</a> (Big Pharma) et l'hostilité de la <a class="internal-link" onclick="UI.openNodeById('r_animal')">Défense Animale</a>. Elle pèse lourdement sur la <a class="internal-link" onclick="UI.openNodeById('r_reg')">Régulation</a> pour adapter la jurisprudence.
                </p>
                <button class="page-link-btn" onclick="UI.loadDetailSub('eco_market', 'r_pharma')">Voir détail Marché</button>
            </div>`,
        sts: "Le vivant devient un produit manufacturé (Biocaptalisme)."
    },

    // --- CENTRE : LES MÉDIATEURS / FRICTIONS (3 cartes) ---

    // 1. LE PUBLIC (Centre)
    { 
        id: 'r_public', side: 'friction', cat: 'Grand Public', title: 'Rationalité Sociale', 
        img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80', 
        y: 20, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Positionnement :</strong> Ambivalent.</p>
                <p>Des positions hétérogènes structurées par des variables sociales, culturelles et religieuses.</p>
            </div>

            <div class="pharma-section">
                <h3>Arguments & Tensions</h3>
                <ul>
                    <li><strong>Registre Utilitariste :</strong> L'impératif de "sauver des vies humaines" reste l'argument dominant pour justifier la pratique.</li>
                    <li><strong>Souffrance Animale :</strong> Réserves morales fortes liées à l'instrumentalisation et aux conditions de vie des animaux donneurs.</li>
                    <li><strong>Inquiétudes Identitaires :</strong> Crainte profonde d’une atteinte à l’intégrité de l'espèce et à la "nature humaine" (peur de l'hybridation).</li>
                    <li><strong>Exigences :</strong> Demande forte de garanties institutionnelles, scientifiques et éthiques face à l'incertitude.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force</h3>
                <p style="margin-top:10px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Influences :</strong><br>
                    Le public est fortement influencé par les médias. En retour, il exerce une pression sur la <a class="internal-link" onclick="UI.openNodeById('r_eco')">Sphère Économique</a> (boycott) et l'<a class="internal-link" onclick="UI.openNodeById('r_reg')">Arène Juridique</a> (vote).
                </p>
                <p style="margin-top:10px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Oppositions/Alliances :</strong><br>
                    Relation ambivalente avec la <a class="internal-link" onclick="UI.openNodeById('r_science')">Science</a>. Peut basculer dans l'opposition frontale via des alliances avec la <a class="internal-link" onclick="UI.openNodeById('r_animal')">Défense Animale</a> sur la question de la souffrance.
                </p>
                <button class="page-link-btn" onclick="UI.loadDetailSub('socio_public', 'r_public')">Voir détail Acceptabilité</button>
            </div>`, 
        sts: "L'opinion publique comme gatekeeper (gardien du seuil)." 
    },

    // 2. L'ÉCONOMIE (Reste au Milieu)
{ 
        id: 'r_eco', side: 'friction', cat: 'Sphère Économique', title: 'Rationalité Industrielle', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cromemco_C-10_computer_production_line_%281983%29.jpg/2560px-Cromemco_C-10_computer_production_line_%281983%29.jpg?auto=format&fit=crop&w=600&q=80', 
        y: 50, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Clés :</strong> United Therapeutics, eGenesis, Revivicor, Fonds de capital biotech & santé, Systèmes de santé, Pouvoirs étatiques.</p>
                <p>Positionnement <strong>Favorable</strong>.</p>
            </div>

            <div class="pharma-section">
                <h3>Arguments Économiques</h3>
                <ul>
                    <li><strong>Nouveau Marché :</strong> Création de nouvelles industries et développement d'une alternative économique jugée à faible coût comparé aux méthodes actuelles (allogreffe, dialyse chronique).</li>
                    <li><strong>Croissance :</strong> Potentiel de rentabilité et création de valeur industrielle.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Effet dans la controverse</h3>
                <ul>
                    <li><strong>Prisme Économique :</strong> La XTP est analysée sous l'angle de la rentabilité, de l'investissement et des parts de marché.</li>
                    <li><strong>Marchandisation :</strong> Crainte sur la privatisation du secteur et "l'effet promesse" (vendre une technologie avant qu'elle ne soit prête).</li>
                    <li><strong>Compétitivité :</strong> Enjeu de leadership international.</li>
                    <li><strong>Coûts cachés :</strong> Les coûts sociaux et institutionnels sont lourds (surveillance infectieuse, risques systémiques).</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force</h3>
                <p style="margin-top:10px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Alliance Naturelle :</strong><br>
                    Symbiose totale avec l'<a class="internal-link" onclick="UI.openNodeById('r_pharma')">Industrie Pharma</a> pour construire le marché.
                </p>
                <p style="margin-top:10px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Tensions :</strong><br>
                    Opposition structurelle avec les <a class="internal-link" onclick="UI.openNodeById('r_animal')">Associations</a> qui craignent la dérive lucrative.
                </p>
                <button class="page-link-btn" onclick="UI.loadDetailSub('eco_market', 'r_eco')">Voir Analyse Coûts</button>
            </div>`, 
        sts: "Le marché comme médiateur de faisabilité." 
    },

    // 3. LA RÉGULATION (Reste en Bas)
   // 3. LA RÉGULATION (Reste en Bas)
    {
        id: 'r_reg', 
        side: 'friction', 
        cat: 'Autorités de Régulation', 
        title: 'Rationalité Normative',
        img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
        y: 80,
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Organisations internationales de normalisation :</strong> Organisation Mondiale de la Santé (OMS), Conseil de l’Europe, Parlement et Conseil de l’Union Européenne</p>
                <p><strong>Agences sanitaires et réglementaires :</strong> Agences du Department of Health and Human Services (DHHS) et du Department of Agriculture (USDA), Agence Européenne des Médicaments, Agence de la biomédecine (ABM)</p>
                <p><strong>Instances d’expertise associées :</strong> International Xenotransplantation Association (IXA), Académie Nationale de Médecine (ANM), Comité Consultatif National d’Ethique (CCNE)</p>
                <p style="margin-top:10px;">Positionnement : <strong style="color:var(--friction-main);">Favorable sous conditions</strong></p>
            </div>

            <div class="pharma-section">
                <h3>Arguments</h3>
                <p>Reconnaissance du potentiel thérapeutique de la XTP subordonnée à un encadrement strict de la pratique, fondé à la fois sur la prévention et la gestion du risque infectieux et sur le respect des principes éthiques notamment en matière de consentement éclairé du receveur et de bien-être animal.</p>
            </div>

            <div class="pharma-section">
                <h3>Effet dans la controverse</h3>
                <ul>
                    <li>Régulation, normalisation et harmonisation de la pratique de la XTP</li>
                    <li>Mise en discussion des enjeux scientifiques, éthiques, sanitaires et sociétaux de la XTP</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force Hétérogènes</h3>
                <p>Le régulateur joue le rôle d'arbitre entre des intérêts divergents.</p>
                
                <p style="margin-top:15px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Arène Scientifique (Alliance) :</strong><br>
                    Le régulateur s'appuie sur l'expertise de la <a class="internal-link" onclick="UI.openNodeById('r_science')">Science</a> pour définir les standards de sécurité.
                </p>

                <p style="margin-top:15px; border-left: 3px solid var(--friction-main); padding-left:10px;">
                    <strong>Arène Citoyenne (Complexe) :</strong><br>
                    Relation faite d'influence et de tension avec le <a class="internal-link" onclick="UI.openNodeById('r_public')">Grand Public</a> : il doit protéger la population tout en autorisant une pratique qui l'inquiète.
                </p>

                <p style="margin-top:15px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Arène Économique (Opposition) :</strong><br>
                    Le principe de précaution freine souvent les ambitions de rentabilité rapide de la <a class="internal-link" onclick="UI.openNodeById('r_eco')">Sphère Économique</a> et de l'<a class="internal-link" onclick="UI.openNodeById('r_pharma')">Industrie Pharma</a>.
                </p>
                <div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap;">
                    <button class="page-link-btn" onclick="UI.loadDetailSub('loi_usa', 'r_reg')">Voir Modèle USA</button>
                    <button class="page-link-btn" onclick="UI.loadDetailSub('loi_fr', 'r_reg')">Voir Modèle France</button>
                    <button class="page-link-btn" onclick="UI.loadDetailSub('loi_int', 'r_reg')">Voir Modèle International</button>
                </div>
            </div>`,
        sts: "La loi transforme une incertitude biologique en risque administrativement gérable."
    },

    // --- DROITE (Côté Receveur) : LA DEMANDE & L'IMPACT (3 cartes) ---

  // 1. LES PATIENTS (Rationalité Vitale - Stylisé)
    { 
        id: 'r_patients', side: 'human', cat: 'Associations Patients', title: 'Rationalité Vitale', 
        img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80', 
        y: 15, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Clés</strong></p>
                <ul style="margin-top:5px; margin-bottom:10px; padding-left:20px; font-size:0.9rem; color:#444;">
                    <li>National Kidney Foundation</li>
                    <li>American Association of Kidney Patients (AAKP)</li>
                    <li>Islet Foundation</li>
                    <li>Transplant Recipients International Organization (TRIO)</li>
                </ul>
                <p>Positionnement : <strong style="color:var(--human-main);">Favorable</strong></p>
            </div>

            <div class="pharma-section">
                <h3>Argumentaire : L'Urgence</h3>
                <div style="background:#f4faff; border-left:4px solid var(--human-main); padding:15px; border-radius:4px; margin-bottom:15px;">
                    <p style="margin:0; font-size:0.95rem; line-height:1.6; font-style:italic; color:#555;">
                        "Face à la pénurie persistante et toujours croissante d’organes humains, constituant une situation d’urgence permanente, la XTP est une option thérapeutique crédible."
                    </p>
                </div>
            </div>

            <div class="pharma-section">
                <h3>Effet dans la Controverse</h3>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <!-- Carte Expertise -->
                    <div style="flex:1; background:#fff; border:1px solid #eee; padding:15px; border-radius:8px; text-align:center; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                        <div style="font-size:1.5rem; margin-bottom:5px;">🧠</div>
                        <strong style="color:#2c3e50; font-size:0.9rem; text-transform:uppercase;">Expertise Expérientielle</strong>
                        <p style="font-size:0.8rem; color:#777; margin:5px 0 0 0;">Le savoir vécu du patient devient une donnée scientifique.</p>
                    </div>
                    
                    <!-- Carte Légitimité -->
                    <div style="flex:1; background:#fff; border:1px solid #eee; padding:15px; border-radius:8px; text-align:center; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                        <div style="font-size:1.5rem; margin-bottom:5px;">⚖️</div>
                        <strong style="color:#2c3e50; font-size:0.9rem; text-transform:uppercase;">Légitimité Morale</strong>
                        <p style="font-size:0.8rem; color:#777; margin:5px 0 0 0;">La souffrance confère un "droit moral" à l'essai clinique.</p>
                    </div>
                </div>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force</h3>
                <p style="margin-top:10px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Alliances :</strong><br>
                    Alliance objective avec l'<a class="internal-link" onclick="UI.openNodeById('r_science')">Arène Scientifique</a> pour accélérer la recherche. Influenceurs majeurs auprès des <a class="internal-link" onclick="UI.openNodeById('r_reg')">Médias et du Droit</a>.
                </p>

                <p style="margin-top:10px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Oppositions :</strong><br>
                    Paradoxalement en opposition avec l'<a class="internal-link" onclick="UI.openNodeById('r_eco')">Arène Économique</a> (lutte contre la marchandisation du corps et pour l'accès aux soins).
                </p>
                 <button class="page-link-btn" style="border-color: var(--human-main); color: var(--human-main);" onclick="UI.loadDetailSub('corps_hybride', 'r_patients')">Le Corps Hybride (Asso. Patients)</button>
            </div>`, 
        sts: "Le corps souffrant comme destination finale." 
    },

    // 2. RELIGION
{ 
        id: 'r_relig', side: 'human', cat: 'Communautés Religieuses', title: 'Rationalité Morale', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/RELIGIONES.png?auto=format&fit=crop&w=600&q=80', 
        y: 45, 
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Communautés :</strong> Catholique, protestante, musulmane, hindouiste, judaïque, sunnite, chiite.</p>
                <p>Positionnement <strong>Ambivalent</strong> : Ni rejet systématique ni adhésion pleine, mais développement de cadres d’interprétation conditionnels et prudents.</p>
            </div>

            <div class="pharma-section">
                <h3>Arguments Théologiques & Moraux</h3>
                <ul>
                    <li><strong>Principe de Vie :</strong> La préservation de la vie humaine est un principe fondamental, mais non absolu.</li>
                    <li><strong>Nécessité Vitale :</strong> Acceptation possible en cas de danger de mort immédiat et d’absence d’alternative thérapeutique.</li>
                    <li><strong>Vigilance Éthique :</strong> Attention forte portée à la dignité du corps, à la souffrance animale et aux risques sanitaires induits.</li>
                    <li><strong>Symbolique du Porc :</strong> Dans certains contextes (notamment islamiques), le porc constitue un symbole moral et culturel fort, rendant l'acceptation psychologique complexe malgré la permission religieuse.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Effet dans la controverse</h3>
                <p>Les autorités religieuses jouent un <strong>rôle d’arbitrage</strong> essentiel entre les interdits moraux traditionnels et la nécessité médicale contemporaine.</p>
               <button class="page-link-btn" onclick="UI.loadDetailSub('religion_detail', 'r_relig')">Voir Détails Théologiques</button>
            </div>`, 
        sts: "La religion négocie les frontières du pur et de l'impur." 
    },

    // 3. DÉFENSE ANIMALE
    {
        id: 'r_animal', side: 'human', cat: 'Défense Animale', title: 'Rationalité Militante',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mammalia_0.jpg/2560px-Mammalia_0.jpg?auto=format&fit=crop&w=600&q=80',
        y: 75,
        desc: `
            <div class="pharma-intro-header">
                <p><strong>Acteurs Clés :</strong> Eurogroup for Animals, Comité scientifique Pro Anima.</p>
                <p>Positionnement <strong>Défavorable</strong>.</p>
            </div>

            <div class="pharma-section">
                <h3>Arguments</h3>
                <ul>
                    <li><strong>Dénonciation de l’instrumentalisation du vivant :</strong> Transformation de l’animal en ressource biomédicale standardisée dont l’existence est entièrement finalisée pour la production d’organes destinés à l’homme (modifications génétiques visant à « humaniser » l’animal).</li>
                    <li><strong>Critique des conditions d’élevage :</strong> Isolement strict pour répondre aux exigences sanitaires.</li>
                    <li><strong>Remise en cause du discours sur le “bien-être animal” :</strong> Jugé réducteur et instrumentalisé.</li>
                    <li><strong>Promotion d’alternatives technologiques sans recours à l’animal :</strong> Organoïdes, bio-impression.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Effet dans la controverse</h3>
                <ul>
                    <li>Défendre une limite morale à l’exploitation du vivant.</li>
                    <li>Refuser la normalisation de pratiques jugées inacceptables.</li>
                </ul>
            </div>

            <div class="pharma-section">
                <h3>Rapports de Force</h3>
                <p><strong>Capacité de blocage :</strong> Forte mobilisation médiatique.</p>
                
                <p style="margin-top:10px; border-left: 3px solid var(--pig-main); padding-left:10px;">
                    <strong>Oppositions Systémiques :</strong><br>
                    Conflit ouvert avec les arènes <a class="internal-link" onclick="UI.openNodeById('r_science')">Scientifiques</a>, <a class="internal-link" onclick="UI.openNodeById('r_pharma')">Pharmaceutiques</a>, <a class="internal-link" onclick="UI.openNodeById('r_eco')">Économiques</a> et <a class="internal-link" onclick="UI.openNodeById('r_reg')">Juridiques</a>.
                </p>
                 <p style="margin-top:10px; border-left: 3px solid var(--human-main); padding-left:10px;">
                    <strong>Influence :</strong><br>
                    Alliance d'opinion avec le <a class="internal-link" onclick="UI.openNodeById('r_public')">Grand Public</a> et les influenceurs médiatiques.
                </p>
                <button class="page-link-btn" onclick="UI.loadDetailSub('ethique_animal', 'r_animal')">Voir Plus</button>
            </div>`,
        sts: "La voix de ceux qui ne parlent pas (les animaux)."
    }
];