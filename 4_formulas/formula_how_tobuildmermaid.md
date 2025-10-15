# Formula: How to Build Mermaid.js Diagrams Reliably

To ensure Mermaid diagrams render correctly across all environments and avoid syntax errors, follow these "safe syntax" guidelines.

## 1. Quote All Text
Always enclose text for nodes, subgraphs, and links in double quotes (`"`). This prevents issues with special characters, spaces, or keywords.

*   **Good**: `A["My Node Text"]`
*   **Bad**: `A[My Node Text]`

## 2. Use Explicit IDs
For nodes and subgraphs, define a short, explicit ID without spaces or special characters. This makes them easier to reference.

*   **Good**: `subgraph mySubgraphId ["My Subgraph Title"]`
*   **Bad**: `subgraph My Subgraph Title`

## 3. Handle Multiline Text with `<br/>`
For text that needs to span multiple lines inside a node, use a `<br/>` tag within a single-line string. Do not use actual newlines inside the node's text definition.

*   **Good**: `A["First line<br/>Second line"]`
*   **Bad**: `A["First line
Second line"]`

## 4. Avoid Emojis in Text
While they can sometimes work, emojis (like 🚀) and special Unicode characters can cause rendering failures. For maximum reliability, it's safest to avoid them in node and link text.

## 5. Keep it Simple
Avoid overly complex features like in-graph styling unless necessary. A clear, readable structure is more important than complex visuals that might break.
