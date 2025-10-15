# Semblance Record: Mermaid Syntax Fixes

## 1. The Problem

Multiple Mermaid.js diagrams across the concept pages were failing to render. This was caused by using syntax that was not universally reliable.

## 2. The Solution

A systematic review of all 10 concept pages was performed to update the diagrams to a "safe" syntax.

*   **Quoted Text**: All text for nodes, links, and subgraphs was enclosed in double quotes (`""`).
*   **Emojis Removed**: All emojis (e.g., 🚀, 📦) were removed from diagram text to prevent Unicode rendering issues.
*   **Multiline Text**: Line breaks inside nodes were standardized to use the `<br/>` tag within a single-line string.
*   **Documentation**: The official guide at `4_formulas/04_diagrams_with_mermaid.md` was updated with these new, stricter rules.

## 3. Relevant Commits

*   `fix(mermaid): Remove emojis for reliability and add guide`
*   `docs(mermaid): Document multiline text best practice and apply fix`
*   `fix(mermaid): Apply safe syntax to all diagrams`
