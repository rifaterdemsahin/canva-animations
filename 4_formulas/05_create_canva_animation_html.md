
# Formula: How to Generate an Animation HTML Page

## 1. Duplicate a Template

- Copy an existing concept HTML file (/workspaces/canva-animations/5_Symbols/concepts/_template.html) from concepts.
- Rename the new file to match your concept (e.g., `11-new-concept.html`).

## 2. Update the `<head>` Section

- Set the `<title>` to your concept name.
- Ensure `<base href="../">` is present for correct asset loading.
- Link to Bootstrap, shared CSS, and any required JS modules.

## 3. Structure the Page (7-Part Format)

Follow this exact order:

1. **🎯 Educational Objective**
   - Add a Bootstrap alert explaining why the animation matters for learners.

2. **🧠 Concept**
   - Write a clear text explanation of the concept.
   - Add a Mermaid diagram (inside `<pre class="mermaid">`), using strict syntax rules.

3. **🎬 Animation Idea**
   - Use a collapsible Bootstrap section.
   - Embed a YouTube video in a responsive container.
   - Add a short description of what the animation visualizes.

4. **📝 Steps in Canva**
   - List the main animation components and effects as an ordered list.

5. **⏱️ Timeline & Timing Guide**
   - Add a warning alert box.
   - Specify total duration, timeline access instructions, and a recommended sequence with timestamps and animation types.

6. **🖱️ Process in Detail**
   - Provide step-by-step instructions as an interactive checklist (`<ul class="checklist">`).
   - Include asset search prompts for icons/images.

7. **✅ Final Review Checklist**
   - Add a checklist to verify icon positioning, timing, labels, and export settings.

## 4. Update Unique IDs

- Change all `concept-text-8`, `image-prompt-8`, `search-prompt-8`, and animation collapse IDs to match your new concept number.

## 5. Navigation

- Add a link to your new page in index.html.
- Add a dropdown item in shared-menu.js under `conceptsDropdown`.

## 6. Test and Validate

- Open the page in a browser.
- Check that Mermaid diagrams render, copy buttons work, and the video is responsive.
- Validate the interactive checklists and collapsible animation section.

## 7. Commit and Deploy

- Stage and commit your changes.
- Push to the `main` branch to trigger GitHub Pages deployment.

