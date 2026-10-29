# Sunic Technologies – React + Vite website

Same design and the same GSAP scroll animations as the live page, as a React project with a separate CSS file.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build locally
```

Upload the contents of `dist/` to any static hosting (Netlify, Vercel, Hostinger, cPanel). The build uses relative paths, so it also works from a sub-folder.

## Folder structure

```
index.html                 page head (title, meta, Google Fonts) + #root
src/main.jsx               loads GSAP, ScrollTrigger, MotionPathPlugin, Lenis and mounts <App/>
src/App.jsx                page order: Preloader, Header, MobileNav, sections..., Footer
src/components/*.jsx       one component per section
  Preloader, Header, MobileNav, Hero (India live map), About, YardScene (gate -> yard -> rail scroll scene),
  RoadRoute (top-view road), HowItWorks, Services, Platform, RailYard (train -> reach stacker -> yard stack),
  WhySunic, Industries, Faq, Contact, Footer
src/styles/main.css        ALL styles (separate CSS file)
src/lib/site.js            all behaviour: theme toggle, preloader, live map + feed, QR, gate-to-rail GSAP scene, Lenis
src/lib/railYard.js        rail-to-yard GSAP scene (train stops, stacker lifts box, stacks it in Block D)
src/lib/sections.js        scroll animations from Services down to the footer
src/lib/interactions.js    click animations: smooth link scrolling with exact landing, active nav link, mobile menu, FAQ, theme, buttons
public/images/             photos (truck, gate, yard, rail, train) and public/images/parts/ (scene sprites)
```

## Changing things

- Text: edit the matching file in `src/components/`.
- Colours / fonts / spacing: `src/styles/main.css` (`:root` variables at the top; dark theme under `[data-theme="dark"]`).
- Images: replace a file in `public/images/` (or `public/images/parts/` for the truck, wheel, stacker, boom,
  spreader, container, barrier, wagon and loco) with one of the same name.
- Animation timing: `src/lib/site.js` – search for `tl.to(` (yard scene) and `rt.to(` (road).

The live map numbers and feed are sample data for the demo; connect them to your own API for real values.
