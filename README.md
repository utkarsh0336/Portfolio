# Utkarsh Sahay — interactive portfolio

Next.js 16, TypeScript, GSAP and Lenis. Personalized with the supplied CV, illustrated likeness with pets, two About photographs, and ten Krishna / Bhagavad Gita cards.

## Run

Requires Node.js 20.9 or newer. From `/Users/utkarshsahay/Desktop/Portfolio/utkarsh-portfolio`:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Checks: `npm run typecheck` and `npm run build`.
The build exports `out/` for a static host with clean URL support. `npm start` requires removing `output: 'export'` from `next.config.ts` and rebuilding.

## Experience and routes

- `/`: illustrated opening, reversible particle breakup / camera pullback, editorial copy and a dotted mountain trail. Scroll after the pullback cycles Work → About → Life Learnings → Resume. An upward gesture from any destination reverses the entrance. Destination dots provide direct selection.
- `/work`: three projects; each View Project opens `/work/world-mart`, `/work/bankability` or `/work/rolefit-ai`. Galleries support drag, swipe and keyboard selection. Each case has a Work return link.
- `/human`: About, using the floral-shirt and black-outfit photographs with a mosaic transition, a 5.5-second slideshow, manual selection and pause control.
- `/life-learnings`: ten supplied images in printed order 01–10. Lenis scroll, GSAP image reveals, reading progress and chapter shortcuts. Entire images remain visible; captions are reflections on the supplied English paraphrases.
- Resume opens the unchanged supplied PDF in a new tab. Contact opens email; social and verified repository links open new tabs.
- Play has been removed. `/play`, `/play/dodge-it` and `/play/orbit` are compatibility redirects to Life Learnings.
- The name has no final period and bounces letter by letter on hover / keyboard focus. The compass rotates 360 degrees and opens a blurred navigation dialog. Its thank-you card ends with ILY and releases floating hearts on hover or keyboard focus.
- Lenis owns its animation loop and synchronizes ScrollTrigger on every scroll update. Homepage gestures complete the opening or reverse it smoothly, so a light trackpad gesture cannot strand the scene on its particle frame. Destination cycling accepts gestures anywhere on the homepage and consumes each gesture’s momentum once. Dialogs pause smooth scrolling; reduced-motion preferences use native scrolling and static reveals. The pinned opening runs on mobile as well as desktop; the gallery remains vertical.

## Main files

- `src/data/portfolio.ts`: CV content, navigation, scene motion settings, project links and screenshot registry.
- `src/components/SmoothScroll.tsx`: global Lenis lifecycle and GSAP synchronization.
- `src/components/Landing.tsx`, `PixelDust.tsx`: entrance choreography, particle breakup, waypoint drawing and destination cycling.
- `src/components/Header.tsx`: name bounce, compass and menu.
- `src/components/HumanPortrait.tsx`: photo slideshow and mosaic transitions.
- `src/components/LifeLearnings.tsx`: ten chapters and scroll animation.
- `src/components/ProjectScreens.tsx`: project galleries.
- `src/app/globals.css`: layout, typography, motion and responsive styles.
- `public/photos/`, `public/learnings/`: supplied JPEGs copied unchanged; originals in Downloads remain untouched.
- `public/art/utkarsh-and-pets-original.png`: supplied illustration, unchanged.
- `public/art/utkarsh-and-pets-cutout.png`: generated transparent adaptation, not a pixel-preserving mask.
- `public/Utkarsh-Sahay-Resume.pdf`: supplied CV, unchanged.
- `public/reference/ASSETS.json`: provenance of publicly served reference scene graphics requested for this local recreation; no ownership or new license is asserted.
- `public/fonts/`: Instrument Serif with its SIL Open Font License.

## Reference review and fidelity

The complete 342.72-second recording was inspected as 343 consecutive one-second frames. The first-scroll sequence was additionally inspected at eight frames per second from 11–14 seconds. Live DOM inspection confirms `/work`, `/human`, `/play` and a new-tab Resume; the compass hover is 360 degrees over 700ms. Life Learnings intentionally replaces the reference Play route.

Scene graphics and interaction structure follow the reference. Instrument Serif substitutes for its proprietary Awesome Serif. Particle breakup is a custom canvas approximation of the original distortion shader; scroll distances are tunable because the recording does not record wheel deltas. Project galleries remain labeled concept previews until actual project screenshots are supplied. This is not a pixel-identical rendering.

The opening now includes a scroll-linked warm/cool brightness pulse and a foreground cloud with the live reference’s 30vw size, 8% top position, 180-second traversal and -45-second phase. Shared summit geometry, feathered ground masking, intrinsic image dimensions and stationary feet keep the supplied group aligned with the mountain as the viewport changes.

Illustration clarity: the masked portrait is rendered at its native 1217×1292 resolution before scaling. Camera brightness uses a separate overlay rather than filtering a small composited portrait. Returning to the top explicitly restores full portrait opacity, hides dust, and clears the brightness overlay. The maroon-blazer photograph has been removed from About and the public assets. Its original file in Downloads remains untouched.

The mountain trail now shares the mountain’s coordinate space and has four focusable markers. Dots become four-point stars on hover, focus, or selection; clicking changes the destination card. The card’s sketch arrow redraws with staged strokes on hover/focus and destination changes. Trail, markers, wheel navigation, and card selectors use the same selected destination.

The opening now uses one camera scale for the character and mountain, rather than separately enlarging the illustration’s rock platform. A soft foreground ground layer bridges the opening’s rock base; the full mountain appears during the pullback, following the observed reference layering. Destination labels roll in over 0.42 seconds and artwork pops in over 0.62 seconds when a waypoint or scroll gesture changes the card.

Clipping repair: artwork is clipped inside `scene-artwork`, independently of the pinned page and its navigation. At the end of the camera pullback, the world’s transform/filter are cleared so the browser paints the entire mountain instead of retaining a zoomed clip. The mountain has explicit intrinsic dimensions and no inherited clipping or size cap.

## Supplied project galleries

Work includes World Mart, BankAbility, RoleFit AI, Sigmoid Fraud Detection, Dress Recognition System, and Misc. All 35 supplied concept images are stored unchanged under `public/projects/`, in the supplied group order. Desktop rows expand on pointer hover or keyboard focus with a 620 ms reveal; horizontal strips drift and pause for dragging. Mobile rows stay expanded and support swiping. World Mart links to https://gloviaa.ubossai.com/. The former `/work/glovia` route forwards to World Mart.

The homepage sky and foreground cloud have separate eased pointer parallax layers, while the summit illustration retains its native resolution and feathers its rocky base.
