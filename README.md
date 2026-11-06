# INBRND

Standalone INBRND Career as a Brand System site, extracted from `PesetTan/pesettan.github.io` (`docs/inbrnd`).

## Hosting

Repository: `inbrnd/inbrnd.github.io`

Site: https://inbrnd.github.io/

Enable GitHub Pages from the `main` branch and `/ (root)` folder. No build is required; `.nojekyll` enables static hosting.

## Contents

The root page is a static landing page linking to every flywheel version. The educational flywheel remains at `/educational/`. The `minimal`, `diagram-only`, `educational`, `embed`, `versions`, `comparison`, and `polish-comparison` folders provide the existing variants. `before` and `pre-polish` preserve earlier work. `downloads` and `runbook` contain the Wix installation materials.

## Local preview

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000/.

Local and published root URLs both show the version directory; there is no automatic redirect.

## Framework custom element (including Wix)

The root `inbrnd-flywheel.js` owns the opening headline, introductory text, scroll invitation and arrow, their styles, and the animated wheel. The complete opening is enabled by default, including in Wix. Set `opening-transition="none"` for the section-only presentation; `soft` remains supported explicitly. `/framework/` loads this same root script. The former `/framework/inbrnd-flywheel.js` URL is retained as an identical compatibility copy. Fonts still load from `asset-base`.

For a Wix Custom Element using the root script URL, set:

```text
content-mode: diagram
heading-level: 2
asset-base: https://inbrnd.github.io/assets/
```

No separate heading markup, page CSS, or `app.js` is required. Allow the element to grow with its content and preserve document scrolling and sticky positioning. These source changes must be published before the public Wix script URL receives them.

## Homepage entrance (Version C)

`/homepage/` is a separate homepage flywheel version. It preserves the existing
SVG, font-aware arrow endpoints, typography and responsive diagram proportions.
Minimal, Educational and Framework pages keep their current behavior.

For the homepage Wix Custom Element, use the same root script and assets with:

```text
animation: entrance
content-mode: diagram
opening-transition: none
heading-level: 2
asset-base: https://inbrnd.github.io/assets/
```

The entrance uses normal page flow, without a pinned section or scroll listener.
An IntersectionObserver starts it once at 30% section visibility: all five labels
fade in at 0–500ms, five arrows draw clockwise at 500–1600ms (220ms each), and the
complete burgundy ring, curved text and conclusion fade in at 1600–2300ms.
Afterward the SVG remains fully visible and static. Resize and font loading only
realign the existing geometry. There are no hover or scroll replay controls.
Reduced motion, unavailable IntersectionObserver, and reconnection after a start
show the complete diagram immediately; a no-JavaScript fallback is included.

## Version directory

The root landing page uses `landing.css` and the existing INBRND logo, palette,
fonts, and a static SVG specimen. It does not load or animate the custom element.
Cards link to Framework (`/framework/`), Homepage Entrance (`/homepage/`), Minimal
(`/minimal/`), Educational (`/educational/`), Diagram Only (`/diagram-only/`),
Educational Embed (`/embed/`), Original (`/before/`), and Before Final Polish
(`/pre-polish/`). Comparison and installation resources follow the cards.
