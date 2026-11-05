# INBRND

Standalone INBRND Career as a Brand System site, extracted from `PesetTan/pesettan.github.io` (`docs/inbrnd`).

## Hosting

Repository: `inbrnd/inbrnd.github.io`

Site: https://inbrnd.github.io/

Enable GitHub Pages from the `main` branch and `/ (root)` folder. No build is required; `.nojekyll` enables static hosting.

## Contents

The root page is the educational flywheel. The `minimal`, `diagram-only`, `educational`, `embed`, `versions`, `comparison`, and `polish-comparison` folders provide the existing variants. `before` and `pre-polish` preserve earlier work. `downloads` and `runbook` contain the Wix installation materials.

## Local preview

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000/.

Local visits to the root URL automatically open `/framework/`. The published root page remains the educational version.

## Framework custom element (including Wix)

The root `inbrnd-flywheel.js` owns the opening headline, introductory text, scroll invitation and arrow, their styles, and the animated wheel. The complete opening is enabled by default, including in Wix. Set `opening-transition="none"` for the section-only presentation; `soft` remains supported explicitly. `/framework/` loads this same root script. The former `/framework/inbrnd-flywheel.js` URL is retained as an identical compatibility copy. Fonts still load from `asset-base`.

For a Wix Custom Element using the root script URL, set:

```text
content-mode: diagram
heading-level: 2
asset-base: https://inbrnd.github.io/assets/
```

No separate heading markup, page CSS, or `app.js` is required. Allow the element to grow with its content and preserve document scrolling and sticky positioning. These source changes must be published before the public Wix script URL receives them.
