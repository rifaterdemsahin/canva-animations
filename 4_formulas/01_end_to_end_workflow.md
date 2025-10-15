# Formula 1: End-to-End Content Workflow

This guide outlines the complete process from concept to a published explainer page.

## 1. Conceptualize & Storyboard

*   **Isolate the Core Idea**: Before creating anything, clearly define the single most important takeaway for the concept.
*   **Plan the 3 Components**: Sketch out the three parts of the explanation:
    1.  **The Text**: A simple paragraph explaining the concept.
    2.  **The Diagram**: The static structure, to be built with Mermaid.js.
    3.  **The Animation**: The dynamic action or transformation, to be built in Canva.

## 2. Asset Creation (Parallel Tasks)

*   **Create the Diagram**: Write the Mermaid.js code for the diagram. Follow the best practices in `04_diagrams_with_mermaid.md` to ensure it is reliable.
*   **Create the Animation**: Build the core animation in Canva. Follow the best practices in `02_canva_animation_guide.md`.

## 3. Advanced Video Editing (Optional)

*   If the explainer requires screen recordings, voice-overs, or combining multiple videos, use DaVinci Resolve.
*   Import the animation from Canva and other assets into Resolve for final composition.
*   Follow the process in `03_advanced_video_with_davinci.md`.

## 4. Integration & Deployment

*   **Create the HTML Page**: Duplicate a template from the `/concepts` folder.
*   **Integrate Assets**: Update the page with the new text, Mermaid code, and embed the final MP4 video.
*   **Update Navigation**: Add a link to the new page in `index.html` and `shared-menu.js`.
*   **Deploy**: Commit and push the changes to GitHub.
