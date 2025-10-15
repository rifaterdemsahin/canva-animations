document.addEventListener('DOMContentLoaded', () => {
    const menuPlaceholder = document.getElementById('menu-placeholder');
    if (!menuPlaceholder) return;

    // Determine the correct path prefix based on the page's location
    const pathPrefix = window.location.pathname.includes('/concepts/') ? '../' : './';

    const menuHTML = `
        <nav class="shared-nav">
            <a href="${pathPrefix}index.html">🏠 Home</a>
            <div class="dropdown">
                <a href="#">📚 Concepts</a>
                <div class="dropdown-content">
                    <a href="${pathPrefix}concepts/1-docker-containerization.html">1. Docker</a>
                    <a href="${pathPrefix}concepts/2-ci-cd-pipeline.html">2. CI/CD</a>
                    <a href="${pathPrefix}concepts/3-git-branching.html">3. Git Branching</a>
                    <a href="${pathPrefix}concepts/4-api-cycle.html">4. API Cycle</a>
                    <a href="${pathPrefix}concepts/5-kubernetes-pods.html">5. K8s Pods</a>
                    <a href="${pathPrefix}concepts/6-css-box-model.html">6. CSS Box Model</a>
                    <a href="${pathPrefix}concepts/7-env-variables.html">7. Env Variables</a>
                    <a href="${pathPrefix}concepts/8-git-merge-rebase.html">8. Git Merge/Rebase</a>
                    <a href="${pathPrefix}concepts/9-prometheus-scraping.html">9. Prometheus</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">🌍 Environments</a>
                <div class="dropdown-content">
                    <a href="${pathPrefix}render.html?page=../2_environments/deployments.md">Deployments</a>
                    <a href="${pathPrefix}render.html?page=../2_environments/cloud_canva.md">Cloud: Canva</a>
                    <a href="${pathPrefix}render.html?page=../2_environments/local_davinci_resolve.md">Local: DaVinci Resolve</a>
                </div>
            </div>
            <div class="dropdown">
                <a href="#">📄 Workflow</a>
                <div class="dropdown-content">
                    <a href="${pathPrefix}render.html?page=../gemini.md">Overall Process</a>
                    <a href="${pathPrefix}render.html?page=../4_formulas/01_end_to_end_workflow.md">1. End-to-End Workflow</a>
                    <a href="${pathPrefix}render.html?page=../4_formulas/02_canva_animation_guide.md">2. Canva Guide</a>
                    <a href="${pathPrefix}render.html?page=../4_formulas/03_advanced_video_with_davinci.md">3. DaVinci Guide</a>
                    <a href="${pathPrefix}render.html?page=../4_formulas/04_diagrams_with_mermaid.md">4. Mermaid Guide</a>
                </div>
            </div>
        </nav>
    `;

    menuPlaceholder.innerHTML = menuHTML;
});
