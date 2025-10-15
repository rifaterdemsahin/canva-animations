# Formula 5: How to Add a New Concept Page

This guide provides a complete checklist for creating a new concept explainer page from start to finish.

## 1. Create the HTML File

1.  Navigate to the `5_Symbols/concepts/` directory.
2.  **Duplicate an existing HTML file** (e.g., `1-docker-containerization.html`) to use as a template.
3.  Rename the new file according to the concept number and name (e.g., `11-new-concept.html`).

## 2. Update Page Content

Open the new HTML file and update the following sections:

1.  **`<title>`**: Change the page title.
2.  **`<h1>`**: Update the main heading.
3.  **🧠 The Concept**:
    *   Update the text explanation inside the `<div>` with the `concept-text-` ID.
    *   Write the new **Mermaid.js diagram** code inside the `<pre class="mermaid">` block.
4.  **🎨 AI Image Prompt**:
    *   Write a new prompt for generating visual assets for the Canva animation.
5.  **🔊 Sound Effects Prompt**:
    *   Write a new prompt for generating sound effects with an AI tool like ElevenLabs.
6.  **🎬 Animation Idea**:
    *   Find a relevant YouTube video that explains the concept visually.
    *   Update the `<iframe>` `src` and `title` attributes with the new video's details.
7.  **📝 Steps in Canva**:
    *   Update the high-level `<ol>` list with the new animation steps.
8.  **🖱️ Process in Detail**:
    *   Update the **Asset Search Prompts** (`search-prompt-` ID).
    *   Update the detailed step-by-step instructions in the `<ul class="checklist">`.
9.  **Update IDs**: Perform a find-and-replace to update all unique IDs (e.g., `concept-text-10` to `concept-text-11`) to ensure the copy buttons work correctly.

## 3. Update Navigation

To make the new page accessible, you must add it in two places:

1.  **Main Page (`5_Symbols/index.html`)**: Add a new list item `<li>` linking to your new page in the main concept list.
2.  **Shared Menu (`5_Symbols/shared-menu.js`)**: Add a new dropdown item `<li>` to the `conceptsDropdown` list. Ensure the `href` path is correct (e.g., `concepts/11-new-concept.html`).

## 4. Deploy

1.  Commit all your changes to Git.
2.  Push the commit to the `main` branch to trigger the automatic deployment via GitHub Actions.