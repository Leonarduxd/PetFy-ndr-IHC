// ============================================================
// petfy-app.js — Script Compartilhado Petfy(ndr)
// Módulo 1: Auth State & Dynamic Navbar
// ============================================================

/**
 * Inicializa a navbar dinâmica baseada no papel do usuário (localStorage).
 * Deve ser chamada em cada página via DOMContentLoaded.
 */
function initNavbar() {
    const role = localStorage.getItem('userRole');
    const dropdownContent = document.querySelector('.dropdown-content');
    const profilePic = document.querySelector('.profile-pic');

    // ── Profile Picture: pata.png para guest, foto real para logado ──────────
    if (profilePic) {
        if (role === null) {
            profilePic.src = 'assets/pata.png';
            profilePic.alt = 'Visitante';
        } else if (role === 'admin') {
            profilePic.src = 'assets/foto perfil admin.png';
            profilePic.alt = 'Perfil Admin';
        } else {
            profilePic.src = 'assets/foto perfil comum.png';
            profilePic.alt = 'Perfil do Usuário';
        }
        profilePic.style.display = 'block';
    }

    if (!dropdownContent) return;

    // Reconstrói o dropdown sem alterar as classes pai (.menu-container, .dropdown-menu)
    dropdownContent.innerHTML = '';

    if (role === null) {
        // ── GUEST: apenas Login / Cadastro ───────────────────────────────────
        const linkLogin = document.createElement('a');
        linkLogin.href = 'login.html';
        linkLogin.textContent = 'Login / Cadastro';
        dropdownContent.appendChild(linkLogin);

    } else {
        // ── LOGADO (user ou admin): Conta + Sair ─────────────────────────────
        if (role === 'admin') {
            const linkAdmin = document.createElement('a');
            linkAdmin.href = 'admin.html';
            linkAdmin.textContent = '⚙️ Painel Admin';
            linkAdmin.style.fontWeight = 'bold';
            dropdownContent.appendChild(linkAdmin);
        }

        const linkConta = document.createElement('a');
        linkConta.href = '#';
        linkConta.textContent = 'Conta';
        dropdownContent.appendChild(linkConta);

        const linkSair = document.createElement('a');
        linkSair.href = '#';
        linkSair.className = 'btn-sair';
        linkSair.textContent = 'Sair';
        linkSair.addEventListener('click', (e) => {
            e.preventDefault();
            fazerLogout();
        });
        dropdownContent.appendChild(linkSair);
    }
}

/**
 * Realiza o logout: remove o papel do localStorage e redireciona para home.
 */
function fazerLogout() {
    localStorage.removeItem('userRole');
    window.location.href = 'index.html';
}

// ============================================================
// Modal customizado (substitui alert() nativo)
// ============================================================

/**
 * Exibe um modal customizado bonito no lugar de alert().
 * @param {string} titulo - Título do modal
 * @param {string} mensagem - Corpo da mensagem
 * @param {Function|null} callback - Função executada ao fechar
 */
function mostrarModal(titulo, mensagem, callback = null) {
    // Evita duplicatas
    const existente = document.getElementById('petfy-modal-overlay');
    if (existente) existente.remove();

    const overlay = document.createElement('div');
    overlay.id = 'petfy-modal-overlay';
    overlay.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.55);
        display: flex; align-items: center; justify-content: center;
        z-index: 9999; animation: petfyFadeIn 0.2s ease;
    `;

    overlay.innerHTML = `
        <style>
            @keyframes petfyFadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes petfySlideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            #petfy-modal-box {
                background: #fff;
                border-radius: 20px;
                padding: 2.5rem 2rem;
                max-width: 420px;
                width: 90%;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.25);
                animation: petfySlideUp 0.25s ease;
            }
            #petfy-modal-box .modal-icon { font-size: 3rem; margin-bottom: 0.75rem; }
            #petfy-modal-box .modal-titulo {
                font-size: 1.25rem; font-weight: 700;
                color: #222; margin-bottom: 0.6rem;
            }
            #petfy-modal-box .modal-mensagem {
                font-size: 1rem; color: #555; margin-bottom: 1.5rem; line-height: 1.5;
            }
            #petfy-modal-btn {
                background: linear-gradient(135deg, #e07b39, #c9622a);
                color: #fff; border: none; border-radius: 10px;
                padding: 0.75rem 2rem; font-size: 1rem; font-weight: 600;
                cursor: pointer; transition: opacity 0.2s;
            }
            #petfy-modal-btn:hover { opacity: 0.88; }
        </style>
        <div id="petfy-modal-box">
            <div class="modal-icon">🐾</div>
            <p class="modal-titulo">${titulo}</p>
            <p class="modal-mensagem">${mensagem}</p>
            <button id="petfy-modal-btn">OK</button>
        </div>
    `;

    document.body.appendChild(overlay);

    const fechar = () => {
        overlay.remove();
        if (typeof callback === 'function') callback();
    };

    document.getElementById('petfy-modal-btn').addEventListener('click', fechar);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) fechar(); });
}

// Inicializa a navbar assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initNavbar);
