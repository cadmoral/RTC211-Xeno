const UI = {
    init() {
        this.renderCards();
        // On attend que le layout soit stabilisé pour dessiner les lignes
        window.onload = () => {
            setTimeout(() => this.drawConnections(), 300);
        };
        window.addEventListener('resize', () => this.drawConnections());
    },

    renderCards() {
    const container = document.getElementById('nodes-container');
    XENO_DATA.forEach(d => {
        const el = document.createElement('div');
        
        // Détermine la classe de thème (pig, human ou friction)
        let theme = d.side === 'pig' ? 'glass-pig' : (d.side === 'human' ? 'glass-human' : 'glass-friction');
        
        // Positionnement horizontal (18% à gauche, 82% à droite, 50% au milieu)
        let xPos = d.side === 'pig' ? 18 : (d.side === 'human' ? 82 : 50);
        
        el.className = `glass-card ${theme}`;
        el.id = `card-${d.id}`;
        el.style.left = `calc(${xPos}% - 140px)`;
        el.style.top = `${d.y}%`;
        
        el.innerHTML = `
            <img src="${d.img}" class="card-thumb">
            <div class="card-info">
                <span class="card-cat">${d.cat}</span>
                <h3 class="card-title">${d.title}</h3>
            </div>`;
            
        el.onclick = () => this.openSidebar(d);
        container.appendChild(el);
    });
},

    drawConnections() {
        // Ne pas dessiner sur mobile (les cartes sont empilées)
        if (window.innerWidth <= 900) {
            document.getElementById('connections').innerHTML = '';
            return;
        }

        const svg = document.getElementById('connections');
        svg.innerHTML = '';
        
        const pigAnchor = document.getElementById('anchor-pig').getBoundingClientRect();
        const humanAnchor = document.getElementById('anchor-human').getBoundingClientRect();
        
        // Points centraux des cercles (Source et Cible)
        const pX = pigAnchor.left + pigAnchor.width / 2;
        const pY = pigAnchor.top + pigAnchor.height / 2;
        const hX = humanAnchor.left + humanAnchor.width / 2;
        const hY = humanAnchor.top + humanAnchor.height / 2;

        XENO_DATA.forEach(d => {
            const cardEl = document.getElementById(`card-${d.id}`);
            if (!cardEl) return;
            
            const card = cardEl.getBoundingClientRect();
            const cardX = card.left + (d.side === 'pig' ? card.width : (d.side === 'human' ? 0 : card.width/2));
            const cardY = card.top + card.height / 2;
            
            let color = d.side === 'pig' ? "var(--pig-main)" : (d.side === 'human' ? "var(--human-main)" : "var(--friction-main)");

            if (d.side === 'pig') {
                this.createCurve(svg, pX, pY, card.left, cardY, color);
            } else if (d.side === 'human') {
                this.createCurve(svg, hX, hY, card.right, cardY, color);
            } else if (d.side === 'friction') {
                // Les nœuds centraux se connectent aux deux côtés
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
    path.setAttribute("class", "connector"); // Utilise la classe CSS
    path.setAttribute("stroke", color);      // La couleur reste dynamique
    // path.setAttribute("stroke-width", "2px"); // <-- SUPPRIMEZ CETTE LIGNE si elle existe
    
    svg.appendChild(path);
},

    // --- Logique Sidebar & Pharma ---
    openSidebar(d) {
        const sb = document.getElementById('sidebar');
        document.getElementById('sb-img').src = d.img;
        document.getElementById('sb-dynamic-content').innerHTML = `
            <span style="text-transform:uppercase; font-size:0.75rem; font-weight:800; color:#999; letter-spacing:1px;">${d.cat}</span>
            <h2 class="sb-title">${d.title}</h2>
            <div class="sb-desc">${d.desc}</div>
            <div class="sb-box">
                <h4 style="margin:0 0 10px 0; font-size:0.8rem; color:#999; text-transform:uppercase;">Analyse STS</h4>
                <p style="margin:0; font-style:italic; font-size:0.95rem; color:#444;">${d.sts}</p>
            </div>`;
        sb.classList.add('active');
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

restoreParentMain(parentId) {
    const sb = document.getElementById('sidebar');
    
    // 2. On retire la classe pour revenir à la taille normale
    sb.classList.remove('expanded');
    
    const mainNode = XENO_DATA.find(d => d.id === parentId);
    this.openSidebar(mainNode);
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
    }
};

UI.init();