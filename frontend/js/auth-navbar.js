// ================================================================
// auth-navbar.js — Fonte Unica de Verdade: Auth & Navbar (Petfy(ndr))
// Vinculado em TODAS as paginas via <script src="js/auth-navbar.js">
// ================================================================

// ----------------------------------------------------------------
// MODULO 1: Navbar Dinamica
// ----------------------------------------------------------------

/**
 * Inicializa a navbar dinamica baseada no papel do usuario.
 * Preserva intactas as classes CSS: .menu-container, .dropdown-menu.
 * Apenas o conteudo interno de .dropdown-content e reconstruido.
 */
function initNavbar() {
    const role = localStorage.getItem('userRole');
    const dropdownContent = document.querySelector('.dropdown-content');
    const profilePic = document.querySelector('.profile-pic');

    // 1. Foto de Perfil
    if (profilePic) {
        if (role === null) {
            profilePic.src = 'assets/pata.png';
            profilePic.alt = 'Visitante';
        } else if (role === 'admin') {
            profilePic.src = 'assets/foto perfil admin.png';
            profilePic.alt = 'Perfil Admin';
        } else {
            profilePic.src = 'assets/foto perfil comum.png';
            profilePic.alt = 'Perfil do Usuario';
        }
        profilePic.style.display = 'block';
    }

    // 2. Links do Dropdown
    if (!dropdownContent) return;
    dropdownContent.innerHTML = '';

    if (role === null) {
        // DESLOGADO: apenas Login / Cadastro
        const linkLogin = document.createElement('a');
        linkLogin.href = 'login.html';
        linkLogin.textContent = 'Login / Cadastro';
        dropdownContent.appendChild(linkLogin);
    } else {
        // LOGADO (user ou admin)
        if (role === 'admin') {
            const linkAdmin = document.createElement('a');
            linkAdmin.href = 'admin.html';
            linkAdmin.textContent = '\u2699\uFE0F Painel Admin';
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
 * Logout: limpa o papel do localStorage e redireciona para a home.
 */
function fazerLogout() {
    localStorage.removeItem('userRole');
    window.location.href = 'index.html';
}

// ----------------------------------------------------------------
// MODULO 2: Modal Customizado — substitui alert() em todas as paginas
// ----------------------------------------------------------------

/**
 * Exibe um modal customizado.
 * @param {string}        titulo    - Titulo exibido no modal
 * @param {string}        mensagem  - Mensagem exibida no corpo
 * @param {Function|null} callback  - Executado ao fechar (opcional)
 */
function mostrarModal(titulo, mensagem, callback = null) {
    const existente = document.getElementById('petfy-modal-overlay');
    if (existente) existente.remove();

    const overlay = document.createElement('div');
    overlay.id = 'petfy-modal-overlay';
    overlay.style.cssText = [
        'position:fixed;inset:0;background:rgba(0,0,0,0.55);',
        'display:flex;align-items:center;justify-content:center;',
        'z-index:9999;animation:petfyFadeIn 0.2s ease;'
    ].join('');

    overlay.innerHTML = `
        <style>
            @keyframes petfyFadeIn  { from{opacity:0}to{opacity:1} }
            @keyframes petfySlideUp { from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1} }
            #petfy-modal-box{background:#fff;border-radius:20px;padding:2.5rem 2rem;max-width:420px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.25);animation:petfySlideUp 0.25s ease}
            #petfy-modal-box .modal-icon{font-size:3rem;margin-bottom:0.75rem}
            #petfy-modal-box .modal-titulo{font-size:1.25rem;font-weight:700;color:#222;margin-bottom:0.6rem}
            #petfy-modal-box .modal-mensagem{font-size:1rem;color:#555;margin-bottom:1.5rem;line-height:1.5}
            #petfy-modal-btn{background:linear-gradient(135deg,#e07b39,#c9622a);color:#fff;border:none;border-radius:10px;padding:0.75rem 2rem;font-size:1rem;font-weight:600;cursor:pointer;transition:opacity 0.2s}
            #petfy-modal-btn:hover{opacity:0.88}
        </style>
        <div id="petfy-modal-box">
            <div class="modal-icon">&#x1F43E;</div>
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

// ----------------------------------------------------------------
// Bootstrap: executa assim que o DOM estiver pronto
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', initNavbar);
