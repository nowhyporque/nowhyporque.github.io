// Shared Header Component - Used by all pages
document.addEventListener('DOMContentLoaded', function() {
    // Determine correct path based on current page location
    const isProjectPage = window.location.pathname.includes('/projects/');
    const basePath = isProjectPage ? '../' : '';
    
    const headerHTML = `
        <header class="main-header">
            <div class="header-info">
                <div class="nyc-time" id="nycTime"></div>
                <button class="copyright-btn" id="copyrightBtn">©</button>
            </div>
            <div class="title-container">
                <a href="${basePath}index.html" style="text-decoration: none; color: inherit;">
                    <h1 class="arcade-title">THE ETERNAL TAO</h1>
                </a>
            </div>
            <nav class="main-nav">
                <a href="${basePath}index.html#updates">Updates</a>
                <a href="${basePath}index.html#projects">Projects</a>
                <a href="${basePath}index.html#media">Media</a>
                <a href="${basePath}Resumev.pdf?v=2" target="_blank">Resume</a>
            </nav>
        </header>

        <div class="legal-overlay" id="legalOverlay"></div>
        <div class="legal-window" id="legalWindow">
            <div class="legal-window-header" id="legalHeader">
                <button class="legal-close-btn" id="legalCloseBtn">✕</button>
            </div>
            <div class="legal-window-content">
                <div class="legal-window-title" style="text-align: center; margin-bottom: 20px;">THE ETERNAL TAO</div>
                <p>© 2026 THE ETERNAL TAO. ALL RIGHTS RESERVED.</p>
                <p style="margin-top: 15px;">This website and all its content, including but not limited to text, graphics, logos, images, and software, are the property of Kevin Villa or its content suppliers and are protected by international copyright laws.</p>
                <p style="margin-top: 15px;">The compilation of all content on this site is the exclusive property of THE ETERNAL TAO and is protected by international copyright laws. All software used on this site is the property of THE ETERNAL TAO or its software suppliers and is protected by international copyright laws.</p>
                <p style="margin-top: 15px;">Any unauthorized use, reproduction, or distribution of this website or its contents may result in severe civil and criminal penalties and will be prosecuted to the maximum extent possible under the law.</p>
                <p style="margin-top: 15px; font-size: 0.75rem;">TYPEFACES BY Kevin Villa</p>
            </div>
        </div>
    `;
    
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
