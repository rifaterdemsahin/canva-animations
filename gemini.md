# Project: Animated Tech Explainers

This project aims to create a series of clear, concise, and visually engaging web pages to explain complex technical concepts.

## Core Components

Each explainer page is built using a combination of tools:

-   **Canva**: For creating short, silent, looping MP4 video animations. These videos demonstrate the *dynamic* part of a concept (e.g., the process of containerization).
-   **Mermaid.js**: For creating declarative, text-based diagrams embedded in the HTML. These diagrams show the *static* structure or relationships in a concept (e.g., the final nested structure of a container on a host).
-   **HTML/CSS**: Provides the structure and styling for the web pages.
-   **GitHub Pages**: Used for free, public hosting of the final website.

## Agent-Assisted Workflow

We are using a Gemini agent to accelerate the development process. The workflow is as follows:

1.  **Conceptualization**: The user provides a technical topic. The agent helps break it down into a simple text explanation, a structural diagram, and a dynamic animation idea.
2.  **Asset Creation**:
    *   The **user** creates the visual animation in Canva based on the storyboard and exports it as an MP4.
    *   The **agent** generates the corresponding HTML page, including the text, the Mermaid.js diagram, and a placeholder for the Canva video.
3.  **Integration**: The user places the exported MP4 from Canva into the `animations` folder. The agent updates the main `index.html` to link to the new explainer page.
4.  **Iteration & Deployment**: The agent assists with refining the content based on feedback and executing the `git` commands to deploy the updated site to GitHub Pages.

This collaborative process allows for rapid prototyping and iteration, combining the agent's coding and content generation capabilities with the user's design skills in Canva.

## Mermaid.js Best Practices

To ensure Mermaid diagrams render correctly and avoid syntax errors, follow these "safe syntax" guidelines:

1.  **Quote All Text**: Always enclose text for nodes, subgraphs, and links in double quotes (`"`). This prevents issues with special characters, spaces, or keywords.
2.  **Use Explicit IDs**: For nodes and subgraphs, define a short, explicit ID without spaces or special characters (e.g., `subgraph mySubgraphId ["My Subgraph Title"]`).
3.  **Keep it Simple**: Avoid overly complex features like in-graph styling unless necessary. A clear structure is more important than complex visuals.
4.  **Handle Multiline Text**: For text that needs to span multiple lines inside a node, use a `<br/>` tag within a single-line string. Do not use actual newlines inside the node's text definition (e.g., `A["First line<br/>Second line"]`).

## Copy-to-Clipboard Feature

To make the content more reusable, each concept page includes "Copy" buttons for key information.

*   **Functionality**: A shared JavaScript file (`5_Symbols/copy-button.js`) provides the copy-to-clipboard logic.
*   **Implementation**:
    1.  The content to be copied is placed within a container with a unique ID (e.g., `<div id="concept-text-docker">...</div>`).
    2.  A button is added with a `copy-btn` class and a `data-copy-target` attribute pointing to the ID of the content to be copied (e.g., `<button class="copy-btn" data-copy-target="#concept-text-docker">Copy</button>`).
*   **Content to Copy**:
    1.  **Concept Text**: The main explanation paragraph.
    2.  **AI Image Prompt**: A new section containing a text prompt designed for AI image generators to create the visual assets needed for the Canva animation.
        *   The prompt should include context that it's for a "video production assistant" creating assets for an "online video course" to guide the style.

## Interactive Checklists

The "Process in Detail" section on each concept page features an interactive checklist to help track progress.

*   **Functionality**: A shared JavaScript file (`5_Symbols/checklist.js`) handles the logic.
*   **Implementation**:
    1.  The `<ul>` element for the detailed process is given the class `checklist`.
    2.  CSS is used to style the list items as checklist entries with custom checkmarks.
    3.  The JavaScript listens for clicks on these list items and toggles a `checked` class, which triggers the visual change (green checkmark, line-through text) and a CSS animation.

## Explainer Page Structure

Each concept page should follow this 4-part structure to provide a comprehensive explanation:

1.  **🧠 Concept**: A high-level text explanation of the topic and a Mermaid.js diagram showing the static structure.
2.  **🎬 Animation Idea**: The embedded looping MP4 video showing the concept in action.
3.  **📝 Steps in Canva**: A high-level, numbered list of the animation's components and the Canva effects used.
4.  **🖱️ Process in Detail**: A detailed, step-by-step guide on how to create the animation in Canva, including where to click and what to search for.
