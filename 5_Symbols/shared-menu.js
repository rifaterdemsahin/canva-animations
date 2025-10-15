document.addEventListener('DOMContentLoaded', () => {
    // --- HEADER --- //
    const menuPlaceholder = document.getElementById('header-placeholder');
    if (menuPlaceholder) {
        const pathPrefix = window.location.pathname.includes('/concepts/') || window.location.pathname.includes('/render.html') ? './' : './5_Symbols/';
        const conceptsPath = window.location.pathname.includes('/concepts/') ? '' : './concepts/';
        const renderPath = window.location.pathname.includes('/render.html') ? '' : './';

        const menuHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/canva-animations/">🏠 Animated Tech Concepts</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="conceptsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                📚 Concepts
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="conceptsDropdown">
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/1-docker-containerization.html">1. Docker</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/2-ci-cd-pipeline.html">2. CI/CD</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/3-git-branching.html">3. Git Branching</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/4-api-cycle.html">4. API Cycle</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/5-kubernetes-pods.html">5. K8s Pods</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/6-css-box-model.html">6. CSS Box Model</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/7-env-variables.html">7. Env Variables</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/8-git-merge-rebase.html">8. Git Merge/Rebase</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/9-prometheus-scraping.html">9. Prometheus</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/concepts/10-js-event-loop.html">10. Event Loop</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="workflowDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                📄 Workflow
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="workflowDropdown">
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../gemini.md">Overall Process</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../4_formulas/01_end_to_end_workflow.md">1. End-to-End Workflow</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../4_formulas/02_canva_animation_guide.md">2. Canva Guide</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../4_formulas/03_advanced_video_with_davinci.md">3. DaVinci Guide</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../4_formulas/04_diagrams_with_mermaid.md">4. Mermaid Guide</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="envDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                🌍 Environments
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="envDropdown">
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../2_environments/deployments.md">Deployments</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../2_environments/cloud_canva.md">Cloud: Canva</a></li>
                                <li><a class="dropdown-item" href="/canva-animations/5_Symbols/render.html?page=../2_environments/local_davinci_resolve.md">Local: DaVinci Resolve</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
        menuPlaceholder.innerHTML = menuHTML;
    }

    // --- FOOTER --- //
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h3>Connect with me</h3>
                        <div class="social-links d-flex justify-content-center justify-content-lg-start gap-4 mt-3">
                            <a href="https://www.youtube.com/@RifatErdemSahin" target="_blank" class="social-link youtube-link" title="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/rifaterdemsahin/" target="_blank" class="social-link linkedin-link" title="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                            </a>
                            <a href="https://github.com/rifaterdemsahin/" target="_blank" class="social-link github-link" title="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-end">
                        <a href="https://buymeacoffee.com/rifaterdemsahin" target="_blank" class="support-btn coffee-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4
                            </svg>
                            Buy Me a Coffee
                        </a>
                        <p class="footer-text mt-3">Built with ❤️ by Rifat Erdem Sahin</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
        footerPlaceholder.innerHTML = footerHTML;
    }
});