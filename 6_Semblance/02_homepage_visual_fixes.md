# Semblance Record: Homepage Visual Fixes

## 1. The Problem

The homepage (`index.html`) had two issues:
1.  The "Last Deployed" date was showing a raw placeholder (`__DEPLOY_DATE__`) instead of the actual date.
2.  The GitHub activity chart was not loading reliably.

## 2. The Solution

### Deployment Date

The issue was in the GitHub Actions workflow (`.github/workflows/static.yml`). The `sed` command to replace the placeholder was not robust enough.

*   **Action Taken**: The workflow step was enhanced with more verbose logging and verification to ensure the date replacement occurs correctly before deployment.

### Activity Visual

The original visual relied on an external service that was not always available. 

*   **Action Taken**: The chart was replaced with two more reliable and detailed statistics cards from the popular `github-readme-stats` project, showing the repository's top languages and overall stats.

## 3. Relevant Commits

*   `fix: Improve deployment date script and update activity visual` (Commit `eb85a9e`)
*   `feat: Add GitHub activity chart to homepage` (Commit `dff83a3`)
