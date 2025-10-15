# Semblance Record: Bootstrap UX Refactor

## 1. The Problem

The website suffered from UX and responsiveness issues. The custom CSS was not adequate for handling different screen sizes, leading to poor placement of the header and footer.

## 2. The Solution

A major refactoring was undertaken to migrate the entire project to the Bootstrap 5 framework.

*   **Framework Integration**: Bootstrap CSS and JS were added via CDN to all pages.
*   **Component Refactor**: The `shared-menu.js` script was completely rewritten to generate a fully responsive Bootstrap `navbar` and a grid-based footer.
*   **Layout Overhaul**: All 12+ HTML pages were updated to use Bootstrap's layout system (`container`, `row`, `col`), replacing the old custom layout.
*   **CSS Rewrite**: The `style.css` file was refactored to work as a theme/override layer on top of Bootstrap, removing redundant code and adapting custom styles.

## 3. Relevant Commits

*   This documentation is part of the commit that applies this major refactoring.
