# Deployment Environments & Process

This document outlines the development and deployment environments for this project.

## 1. Local Development Environment

*   **Purpose**: For creating and testing content before it goes live.
*   **Process**:
    1.  **Editing**: All file edits (HTML, CSS, JS, Markdown) are done on a local machine using a code editor like VS Code.
    2.  **Asset Creation**: Animations are created in Canva (cloud) or edited in DaVinci Resolve (local). The final MP4 files are saved to the `/animations` folder.
    3.  **Local Testing**: The `index.html` file (or any other HTML file) can be opened directly in a web browser to preview changes. Some developers may use a simple local server (like VS Code's Live Server) for more accurate testing.
    4.  **Version Control**: Once changes are tested and ready, they are committed to the local Git repository.

## 2. Production Environment (GitHub Pages)

*   **Platform**: GitHub Pages
*   **Purpose**: To host the live, public version of the static website.
*   **URL**: [https://rifaterdemsahin.github.io/canva-animations/](https://rifaterdemsahin.github.io/canva-animations/)

## 3. Deployment Process (GitHub Actions)

Deployment from the local environment to production is fully automated using GitHub Actions.

*   **Trigger**: The process is triggered automatically on every `git push` to the `main` branch.
*   **Workflow File**: The entire process is defined in the `.github/workflows/static.yml` file.
*   **Key Steps**:
    1.  **Checkout**: The action checks out the latest version of the code from the `main` branch.
    2.  **Inject Date**: It automatically replaces the `__DEPLOY_DATE__` placeholder in `5_Symbols/index.html` with the current timestamp. This ensures the "Last Deployed" date is always accurate.
    3.  **Setup Pages**: It configures the environment for a GitHub Pages deployment.
    4.  **Upload Artifact**: The entire project directory is bundled into an artifact.
    5.  **Deploy**: The artifact is deployed to the GitHub Pages service, making the changes live.
