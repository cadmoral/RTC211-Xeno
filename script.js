const UI = {
    currentMode: 'network', // 'network' ou 'rationality'

    init() {
       this.renderCards(XENO_DATA);
        
        window.onload = () => {
            // Dessine les connexions
            setTimeout(() => this.drawConnections(), 300);
            
            // Ouvre l'intro avec un léger délai pour l'effet d'immersion
            setTimeout(() => {
                const introModal = document.getElementById('modal-intro-auto');
                if(introModal) introModal.classList.add('active');
            }, 800);
        };
        
        window.addEventListener('resize', () => this.drawConnections());
    },
    
    // --- NOUVELLE FONCTION DE BASCULE ---
    toggleDataView() {
        const btnLabel = document.getElementById('view-label');
        const curveLeft = document.querySelector('#curve-pig + text textPath'); // Sélectionne le texte courbe gauche
        const curveRight = document.querySelector('#curve-human + text textPath'); // Sélectionne le texte courbe droite

        if (this.currentMode === 'network') {
            // Passer en mode Rationalités
            this.currentMode = 'rationality';
            btnLabel.innerText = "Mode : Rationalités";
            
            // Mise à jour des textes des arcs
            if(curveLeft) curveLeft.textContent = "OFFRE TECHNIQUE";
            if(curveRight) curveRight.textContent = "SOCIÉTÉ & ÉTHIQUE";
            
            this.renderCards(RATIONALITY_DATA);
        } else {
            // Revenir en mode Réseau
            this.currentMode = 'network';
            btnLabel.innerText = "Mode : Réseau";

            if(curveLeft) curveLeft.textContent = "LE DONNEUR";
            if(curveRight) curveRight.textContent = "LE RECEVEUR";

            this.renderCards(XENO_DATA);
        }
    },

    renderCards(dataSet) {
        const container = document.getElementById('nodes-container');
        // IMPORTANT : Vider le conteneur avant de redessiner
        container.innerHTML = ''; 

        dataSet.forEach(d => {
            const el = document.createElement('div');
            
            // Détermine la classe et la position
            let theme, xPos;
            
            // Logique de positionnement
            if (d.side === 'pig') {
                theme = 'glass-pig';
                xPos = 18; // Gauche
            } else if (d.side === 'human') {
                theme = 'glass-human';
                xPos = 82; // Droite
            } else {
                theme = 'glass-friction';
                xPos = 50; // Centre
            }
            
            el.className = `glass-card ${theme}`;
            el.id = `card-${d.id}`;
            el.style.left = `calc(${xPos}% - 140px)`;
            el.style.top = `${d.y}%`;
            
            // Animation d'entrée
            el.style.animation = 'fadeIn 0.5s ease forwards';
            
            el.innerHTML = `
                <img src="${d.img}" class="card-thumb">
                <div class="card-info">
                    <span class="card-cat">${d.cat}</span>
                    <h3 class="card-title">${d.title}</h3>
                </div>`;
                
            el.onclick = () => this.openSidebar(d);
            container.appendChild(el);
        });

        // Redessiner les lignes après avoir placé les nouvelles cartes
        setTimeout(() => this.drawConnections(), 100);
    },

    drawConnections() {
        if (window.innerWidth <= 900) {
            document.getElementById('connections').innerHTML = '';
            return;
        }

        const svg = document.getElementById('connections');
        svg.innerHTML = '';
        
        const pigAnchor = document.getElementById('anchor-pig').getBoundingClientRect();
        const humanAnchor = document.getElementById('anchor-human').getBoundingClientRect();
        
        const pX = pigAnchor.left + pigAnchor.width / 2;
        const pY = pigAnchor.top + pigAnchor.height / 2;
        const hX = humanAnchor.left + humanAnchor.width / 2;
        const hY = humanAnchor.top + humanAnchor.height / 2;

        // Détermine quel dataset utiliser pour les lignes
        const dataSet = this.currentMode === 'network' ? XENO_DATA : RATIONALITY_DATA;

        dataSet.forEach(d => {
            const cardEl = document.getElementById(`card-${d.id}`);
            if (!cardEl) return;
            
            const card = cardEl.getBoundingClientRect();
            const cardX = card.left + (d.side === 'pig' ? card.width : (d.side === 'human' ? 0 : card.width/2));
            const cardY = card.top + card.height / 2;
            
            let color = d.side === 'pig' ? "var(--pig-main)" : (d.side === 'human' ? "var(--human-main)" : "var(--friction-main)");

            // Logique de dessin identique
            if (d.side === 'pig') {
                this.createCurve(svg, pX, pY, card.left, cardY, color);
            } else if (d.side === 'human') {
                this.createCurve(svg, hX, hY, card.right, cardY, color);
            } else if (d.side === 'friction') {
                this.createCurve(svg, pX, pY, card.left, cardY, "var(--pig-main)");
                this.createCurve(svg, hX, hY, card.right, cardY, "var(--human-main)");
            }
        });
    },

    createCurve(svg, x1, y1, x2, y2, color) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const controlPointX = (x1 + x2) / 2;
        const d = `M ${x1},${y1} C ${controlPointX},${y1} ${controlPointX},${y2} ${x2},${y2}`;
        
        path.setAttribute("d", d);
        path.setAttribute("class", "connector");
        path.setAttribute("stroke", color);
        
        svg.appendChild(path);
    },

    // --- Fonction d'ouverture de la Sidebar (Générique) ---
  openSidebar(d) {
    const sb = document.getElementById('sidebar');
    const img = document.getElementById('sb-img');
    const content = document.getElementById('sb-dynamic-content');

    if (img) img.src = d.img;
    
    // Élargissement spécifique (Porc ou Dossier Expert)
    if (d.side === 'pig' || d.id === 'visions_science') {
        sb.classList.add('expanded');
    } else {
        sb.classList.remove('expanded');
    }

    sb.classList.add('active');
    sb.scrollTop = 0;

    // Gestion du bouton bibliographie
    let biblioBtnHTML = "";
    const targetBiblioId = d.biblio_id || (PHARMA_SUBS[d.id] ? d.id : null);

    if (targetBiblioId) {
        biblioBtnHTML = `
            <div class="biblio-container" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 25px;">
                <a href="biblio.html?section=${targetBiblioId}" target="_blank" class="page-link-btn" style="background:#e57373; color:white; border:none; display:inline-block; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                    Ouvrir la bibliographie complète
                </a>
            </div>
        `;
    }

    // GÉNÉRATION DU CONTENU
    content.innerHTML = `
        <span style="text-transform:uppercase; font-size:0.7rem; font-weight:800; color:#bbb; letter-spacing:2px;">${d.cat}</span>
        <h2 class="sb-title" style="margin-top:10px; font-family: var(--font-serif); font-size: 2rem;">${d.title}</h2>
        
        <div class="sb-desc" style="margin-top:25px; line-height:1.8;">
            ${d.desc} 
        </div>
        
        <!-- LE BLOC "NOTE DE L'OBSERVATOIRE" UNIFIÉ -->
        <div class="sb-box" style="border: none; background: #fdfdfd; border-left: 3px solid var(--friction-main); padding: 30px; margin-top: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border-radius: 0 12px 12px 0;">
            <h4 style="margin:0 0 15px 0; font-size:0.75rem; color:#aaa; text-transform:uppercase; letter-spacing:3px; font-weight:800;">
                Note de l'Observatoire
            </h4>
            <p style="margin:0; font-style:italic; font-size:1rem; color:#444; line-height:1.7;">
                ${d.sts}
            </p>
        </div>
        
        ${biblioBtnHTML}
    `;
},

    // --- Fonction de Retour au Dossier Parent ---
    restoreParentMain(parentId) {
        const sb = document.getElementById('sidebar');
        
        // 1. On retire le mode "Large" pour revenir à la taille normale
        sb.classList.remove('expanded');
        
        // 2. On cherche le parent dans les DEUX bases de données
        let parentNode = XENO_DATA.find(d => d.id === parentId);
        
        if (!parentNode) {
            // Si pas trouvé dans le Réseau, on cherche dans les Rationalités
            parentNode = RATIONALITY_DATA.find(d => d.id === parentId);
        }

        // 3. Réouverture propre
        if (parentNode) {
            this.openSidebar(parentNode);
        } else {
            console.error("Erreur : Dossier parent introuvable pour l'ID : " + parentId);
            // Fallback : On ferme si on est perdu
            this.closeSidebar(); 
        }
    },

    // ... Reste des fonctions (closeSidebar, openModal, etc.) inchangées ...
    closeSidebar() {
        const sb = document.getElementById('sidebar');
        sb.classList.remove('active');
        setTimeout(() => { sb.classList.remove('expanded'); }, 500); 
    },
    openModal(id) { document.getElementById(id)?.classList.add('active'); },
    closeModal(id) { document.getElementById(id)?.classList.remove('active'); },
    openIntro() { document.getElementById('intro-modal').classList.add('active'); },
    closeIntro() { document.getElementById('intro-modal').classList.remove('active'); },
   // --- DANS L'OBJET UI (script.js) ---

restoreParentMain(parentId) {
    const sb = document.getElementById('sidebar');
    
    // 1. On retire la classe "large" pour revenir à la taille normale
    sb.classList.remove('expanded');
    
    // 2. On cherche le nœud parent dans les DEUX bases de données
    // (Le mode "Réseau" ou "Rationalité" importe peu, l'ID est unique)
    let parentNode = XENO_DATA.find(d => d.id === parentId);
    
    if (!parentNode) {
        // Si pas trouvé dans le Réseau, on cherche dans les Rationalités
        parentNode = RATIONALITY_DATA.find(d => d.id === parentId);
    }

    // 3. Si on a trouvé le parent, on réouvre sa fiche
    if (parentNode) {
        this.openSidebar(parentNode);
    } else {
        console.error("Erreur : Impossible de retrouver le dossier parent " + parentId);
        this.closeSidebar(); // Repli de sécurité
    }
},
    
   // Dans script.js, vérifiez bien cette fonction :

// --- DANS SCRIPT.JS ---
// Assurez-vous que la fonction commence bien par loadDetailSub(key, parentId)

loadDetailSub(key, parentId) {
    const sub = PHARMA_SUBS[key];
    const sb = document.getElementById('sidebar');
    sb.classList.add('expanded');

    // C'EST CETTE LIGNE QUI ÉTAIT FAUSSE :
    // On doit utiliser 'key' (ex: 'loi_fr') et PAS 'sub.biblio' (le texte)
    const biblioLinkHTML = sub.biblio ? `
        <div class="biblio-container" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            <a href="biblio.html?section=${key}" target="_blank" class="page-link-btn" style="background:#e57373; color:white; border:none; display:inline-block; padding: 10px 20px; border-radius: 5px; text-decoration: none;">
                Ouvrir la bibliographie
            </a>
        </div>
    ` : "";

    document.getElementById('sb-dynamic-content').innerHTML = `
        <div class="back-btn" onclick="UI.restoreParentMain('${parentId}')">← Retour au dossier</div>
        <h2 class="sb-title">${sub.title}</h2>
        <div class="sb-desc">${sub.content}</div>
        
        <div class="sb-box" style="border-left: 4px solid var(--friction-main); background: #fefefe; padding: 15px;">
            <h4 style="margin:0; font-size:0.8rem; color:var(--friction-main); text-transform:uppercase;">Réalité</h4>
            <p style="margin:10px 0 0 0; font-size:0.95rem;">${sub.real}</p>
        </div>

        ${biblioLinkHTML} 
    `;
    sb.scrollTop = 0;
},



    // Modification de la fermeture
    closeSidebar() {
        const sb = document.getElementById('sidebar');
        sb.classList.remove('active');
        
        // On s'assure qu'elle reprend sa taille normale pour la prochaine ouverture
        setTimeout(() => {
            sb.classList.remove('expanded');
        }, 500); 
    },
    
    openIntro() {
        const modal = document.getElementById('intro-modal');
        modal.classList.add('active');
    },

    closeIntro() {
        const modal = document.getElementById('intro-modal');
        modal.classList.remove('active');
    },

    // --- GESTION DES MODALES ---
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
        }
    },
    // --- DANS L'OBJET UI (script.js) ---

toggleDataView() {
    const btnLabel = document.getElementById('view-label');
    const curveLeft = document.querySelector('#curve-pig + text textPath');
    const curveRight = document.querySelector('#curve-human + text textPath');
    
    // Sélection des images du décor
    const imgLeft = document.querySelector('.fig-left .fig-img');
    const imgRight = document.querySelector('.fig-right .fig-img');

    // URLs des images (Originales vs Nouvelles)
    const IMG_PIG_ORIGINAL = "https://upload.wikimedia.org/wikipedia/commons/6/65/Picture_pig.jpg?auto=format&fit=crop&w=800&q=80";
    const IMG_HUMAN_ORIGINAL = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
    
    const IMG_DNA_NEW = "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&q=80"; // Image ADN / Biotech
    const IMG_SOCIAL_NEW = "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"; // Image Patient/Société

    // Fonction utilitaire pour changer une image avec fondu
    const switchImage = (imgElement, newSrc) => {
        imgElement.style.transition = "opacity 0.3s";
        imgElement.style.opacity = "0"; // On cache
        
        setTimeout(() => {
            imgElement.src = newSrc;
            imgElement.onload = () => {
                imgElement.style.opacity = "1"; // On réaffiche quand chargé
            };
        }, 300);
    };

    if (this.currentMode === 'network') {
        // --- PASSAGE EN MODE RATIONALITÉS ---
        this.currentMode = 'rationality';
        btnLabel.innerText = "Mode : Rationalités";
        
        // Mise à jour Textes Courbes
        if(curveLeft) curveLeft.textContent = "BIOTECH & ÉTHIQUE";
        if(curveRight) curveRight.textContent = "SANTÉ & SOCIÉTÉ";
        
        // Mise à jour Images Décor
        switchImage(imgLeft, IMG_DNA_NEW);
        switchImage(imgRight, IMG_SOCIAL_NEW);
        
        // Affichage des cartes Rationalités
        this.renderCards(RATIONALITY_DATA);

    } else {
        // --- RETOUR EN MODE RÉSEAU ---
        this.currentMode = 'network';
        btnLabel.innerText = "Mode : Réseau";

        // Mise à jour Textes Courbes
        if(curveLeft) curveLeft.textContent = "LE DONNEUR";
        if(curveRight) curveRight.textContent = "LE RECEVEUR";

        // Mise à jour Images Décor
        switchImage(imgLeft, IMG_PIG_ORIGINAL);
        switchImage(imgRight, IMG_HUMAN_ORIGINAL);

        // Affichage des cartes Xeno
        this.renderCards(XENO_DATA);
    }
},

// DANS L'OBJET UI (script.js)

// ... après loadDetailSub ...

openNodeById(id) {
    // Cherche le nœud dans le dataset actuel (Rationalités)
    const node = RATIONALITY_DATA.find(d => d.id === id);
    if (node) {
        this.openSidebar(node);
    } else {
        console.error("Nœud non trouvé : " + id);
    }
}
};

UI.init();