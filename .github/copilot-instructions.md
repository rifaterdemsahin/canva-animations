# AI Agent Instructions for Canva Animations Project

## Project Overview
This is a **visual learning platform** that explains technical concepts through synchronized combinations of text, Mermaid.js diagrams, and embedded YouTube videos. The site is deployed via GitHub Pages at `https://rifaterdemsahin.github.io/canva-animations/`.

## Architecture & Key Components

### Directory Structure
- **`5_Symbols/`**: Main website root containing HTML pages, shared JS/CSS, and the `concepts/` subdirectory with all explainer pages
- **`4_formulas/`**: Workflow documentation and guides (read these first when creating content)
- **`1_real/`**: OKR files defining project objectives and key results
- **`2_environments/`**: Deployment and environment configuration docs
- **`6_Semblance/`**: Refactoring tasks and visual improvement backlog

### Critical Files
- **`5_Symbols/index.html`**: Main landing page (actual entry point; root `index.html` redirects here)
- **`5_Symbols/shared-menu.js`**: Centralized navigation menu injected into all pages via `#header-placeholder`
- **`5_Symbols/copy-button.js`**: Copy-to-clipboard functionality using `data-copy-target` attribute pattern
- **`5_Symbols/checklist.js`**: Interactive checklist toggles with CSS animations
- **`5_Symbols/mermaid-init.js`**: Mermaid.js initialization (dark theme, strict security) - imported by all concept pages
- **`5_Symbols/concepts/*.html`**: Individual concept explainer pages following 6-part structure

## Content Creation Workflow

### When Adding New Concept Pages
1. **Duplicate** an existing concept HTML from `5_Symbols/concepts/` as template
2. **Structure** must follow this exact 6-part format:
   - 🎯 **Educational Objective**: Bootstrap alert explaining why the animation matters (bridges theory/practice)
   - 🧠 **Concept**: Text explanation + Mermaid diagram (static structure)
   - 🎬 **Animation Idea**: Embedded YouTube video (responsive iframe, collapsible section, loads collapsed)
   - 📝 **Steps in Canva**: High-level numbered list of animation components
   - 🖱️ **Process in Detail**: Step-by-step guide with interactive `<ul class="checklist">` items
   - ✅ **Final Review Checklist**: Interactive checklist to verify icon positioning, timing, labels, and export settings before download
3. **Update navigation** in TWO places:
   - Add link in `5_Symbols/index.html` main list
   - Add dropdown item in `5_Symbols/shared-menu.js` under `conceptsDropdown`
4. **Relative paths** in concept pages use `<base href="../">` for proper asset loading

### Mermaid.js Strict Syntax Rules (from `4_formulas/04_diagrams_with_mermaid.md`)
- **Always quote all text**: `A["My Node"]` not `A[My Node]`
- **Use explicit IDs**: `subgraph myId ["Title"]` not `subgraph Title`
- **Multiline with `<br/>`**: `A["Line 1<br/>Line 2"]` not actual newlines
- **Avoid emojis** in node text for maximum reliability

### Interactive Elements Pattern
```html
<!-- Copy Button -->
<div class="copy-container">
    <h2>🧠 The Concept</h2>
    <button class="copy-btn" data-copy-target="#concept-text-1">Copy Text</button>
</div>
<div id="concept-text-1">
    <p>Content to copy...</p>
</div>

<!-- Interactive Checklist -->
<ul class="checklist">
    <li>Step 1: Click to toggle completion</li>
    <li>Step 2: Green checkmark appears when clicked</li>
</ul>
```

## Deployment & Git Workflow

### GitHub Actions
- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Process**: `.github/workflows/static.yml` injects deployment timestamp into `5_Symbols/index.html` replacing `__DEPLOY_DATE__` placeholder
- **Artifact**: Entire repository uploaded to GitHub Pages

### Standard Commit Pattern
```bash
git add <files>
git commit -m "Add [feature/concept]: brief description"
git push
```

## Critical Conventions

### Navigation Synchronization
When adding concepts, update **both**:
1. `5_Symbols/index.html` - main landing page list
2. `5_Symbols/shared-menu.js` - dropdown menu (adjust paths based on calling page location)

### Asset Search Prompts
Each concept includes copyable AI image prompts formatted as: *"As a video production assistant creating assets for an online video course..."* to guide style and context.

### Bootstrap Dark Theme
All pages use Bootstrap 5.3.3 with dark theme classes: `bg-dark`, `text-light`, `list-group-item-dark`

### Embedded Videos
Use responsive iframe pattern (16:9 aspect ratio maintained via padding-bottom trick in CSS):
```html
<div class="video-container">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
            title="..." frameborder="0" allow="..." allowfullscreen>
    </iframe>
</div>
```

## Documentation Sources
- **Overall workflow**: `gemini.md` and `4_formulas/01_end_to_end_workflow.md`
- **Mermaid syntax**: `4_formulas/04_diagrams_with_mermaid.md` (mandatory reading before creating diagrams)
- **Canva guidelines**: `4_formulas/02_canva_animation_guide.md`
- **Agent collaboration**: `gemini.md` describes human/AI task division

## Testing & Validation
- Verify Mermaid renders at https://mermaid.live before committing
- Test copy buttons work (check browser console for clipboard API errors)
- Validate responsive layout on mobile (Bootstrap grid: `col-lg-10 col-xl-8 mx-auto`)
- Check navigation dropdown links work from both index and concept pages
- Ensure Mermaid diagrams render correctly (all pages use shared `mermaid-init.js`)
