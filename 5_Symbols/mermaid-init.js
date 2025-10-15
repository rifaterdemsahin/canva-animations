// Mermaid.js initialization
// This script initializes Mermaid diagrams with consistent dark theme settings
// Used across all concept pages to avoid code duplication

import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'strict'
});
