# Chronicles of the RIFT — Figma Make Prompt Kit

**Direction:** Premium painterly LIVING ARENA — Legends of Runeterra / Teamfight Tactics (Riot) quality.
The opposite of a flat dark template. Rich depth, painterly materiality, confident warm color, ornate-but-clean frames, and motion on every action.

## How to use
1. Paste **#0 (Design System) first** and let Figma Make generate the style frame. Keep that as the base file.
2. Then run **one screen at a time** (#1 → #8). Each reuses #0 so the look stays consistent.
3. Do **#0 → #1 (board)** first and get the look approved before generating the rest.
4. If a screen drifts back to flat/glossy/generic, re-paste the DIRECTION rules from #0 and say: *"you regressed to a flat template — apply the living-arena depth rules strictly."*
5. Always demand **all states** and **micro-interactions** (each prompt already asks for them).

---

## 0 — DESIGN SYSTEM (paste once — the foundation)

```
Create the visual design system for a premium sci-fantasy trading card game, "Chronicles of the RIFT". Target quality: Legends of Runeterra / Teamfight Tactics by Riot — a rich, painterly, LIVING arena that feels expensive and alive. The opposite of a flat dark template.

DIRECTION (follow strictly):
- DEPTH, not flatness: layered backgrounds with foreground/midground/background parallax, soft volumetric light, atmospheric haze, gentle bloom on light sources only. Stages feel 3D, not like a flat grid.
- Painterly materiality: surfaces look like real materials — carved stone, brushed gold trim, enchanted glass, worn leather. Hand-painted textures, not gradients.
- Confident warm color story: deep dusk-blue/charcoal base, warm gold + ember-orange highlights, with each of the 6 factions owning a signature accent (Sentinel=gold, Void=violet, Ember=orange-red, Beast=bronze-green, Chrono=cyan, Abyss=crimson). Saturated where it matters, never washed out.
- Ornate-but-clean: elegant card frames with sculpted gold borders and subtle filigree corners, but generous spacing and clear hierarchy — premium, not busy.
- Typography: a refined display serif/blackletter-hybrid for headings (epic fantasy), a clean humanist sans for data/stats. Strong size hierarchy.
- Everything reacts: hover, select, and play trigger light, particles, and motion. Idle elements breathe (slow float, flickering embers, drifting dust).

Deliver a style-guide frame: palette (base + 6 faction accents), type scale, a PREMIUM card frame (sculpted border, art window, gem-set cost, ATK/DEF plaques), button states (default/hover/pressed/disabled), and the arena depth treatment (light/haze/parallax sample).
```

---

## 1 — DUEL BOARD (priority; heavy on animation)

```
Using the RIFT premium living-arena design system (Legends of Runeterra / TFT quality), design the DUEL BOARD. Free-for-all, show a 3-4 player example. This must feel like a deep, alive 3D stage — NOT a flat grid.

STAGE & LAYOUT:
- A painterly arena with real depth: opponents seated across an elevated far edge, you at the foreground bottom, a glowing RIFT core pulsing at center as the focal point. Atmospheric haze, volumetric god-rays, drifting embers/dust, parallax background of the shattered realm.
- Opponents: each a sculpted "seat" plaque (portrait in an ornate gold frame, HP as a carved gem counter, mana pips, hand-count) with their units arrayed on their section of the field. Active player's seat lights up and breathes.
- Your side (foreground): your units on premium plinths, your hand fanned at the bottom as large tactile cards, your avatar + deck + graveyard as physical 3D props beside you.
- Cards: sculpted gold frames, art in a beveled window, cost as an inset gem, ATK/DEF on metal plaques, faction accent glow on the border, rarity shown by frame ornamentation. Cards have weight and a slight 3D tilt that follows the cursor.
- Clean top HUD: turn indicator, ornate timer dial, elegant action buttons (End Turn / Concede / Leave).

ANIMATION (the priority — specify each as a sequence):
- DRAW: card lifts off the deck prop, arcs through the air with a light trail, flips face-up, settles into the hand fan with a sparkle.
- SUMMON: card slams onto a plinth, shockwave ring + dust burst, the unit "wakes" (glow + breathe), faction-colored light pulse.
- ATTACK: attacker lifts and lunges along a curved path, a slashing energy arc connects, screen shake + impact flash, damage number bursts and arcs upward, target recoils.
- DEFEND/BLOCK: a shimmering shield/ward snaps up with a metallic clang, the hit ripples across it, no damage number (deflected spark).
- SPELL CAST: card rises and dissolves into faction-colored energy that streams to its target(s), bloom + particle burst on resolve.
- DESTROY: unit cracks, shatters into glowing shards that scatter and are drawn into the graveyard prop.
- TURN CHANGE: a sweeping light wipe + an elegant "[NAME]'S TURN" banner that flourishes in and out; the new active seat ignites.
- Idle life: embers drift, the RIFT core pulses, ready units breathe, hovered cards lift and tilt.

Show ALL states as labeled frames: your-turn (units glowing ready), opponent's-turn (your side dims, theirs lights), unit selected (valid targets ringed in faction color), empty field, full field, victory/defeat overlays ("RIFT CORE CLAIMED" / "TIMELINE ERASED") with FX.

RESPONSIVE: desktop 1440 (full deep arena) AND mobile-portrait 390. On mobile keep the premium feel but flatten depth slightly: opponents as a rich horizontal strip up top, your field mid, hand as a tactile bottom-sheet that slides up, command bar pinned. Fully playable with no vertical scrolling. Describe how each animation simplifies but stays present on mobile.
```

---

## 2 — LANDING / SIGN-IN (login, register, forgot password)

```
Using the RIFT premium living-arena design system, design the LANDING + SIGN-IN screen as an epic title screen.

- Full-bleed painterly hero of the shattered RIFT realm with depth and parallax, drifting embers, volumetric light, the game logo in the refined display face with a subtle glow and slow breathe.
- A short, punchy tagline and trust chips ("6 realms · 300+ cards · live duels · free to play").
- LEFT/hero side: a "▶ Watch Trailer" call rendered as a premium framed button; small faction crest row.
- RIGHT: an ornate sign-in panel (carved frame) with tabs LOG IN / REGISTER. Inputs are elegant with gold underlines; primary button is a sculpted gem-set "Enter the Rift". Include "Forgot access key?" link.
- Forgot-password is a second framed panel/step: request (email) then reset (token + new password).

Show ALL states as labeled frames: default, register (with avatar picker grid), filling, loading ("summoning..."), error (elegant red inline message), success, forgot-request, forgot-reset.
Micro-interactions: inputs glow + gold underline animates on focus; button has a satisfying press + light pulse; logo and embers idle-animate; tab switch crossfades.
Responsive: desktop 1440 (hero left, panel right) + mobile-portrait 390 (hero collapses to a top banner above the panel).
```

---

## 3 — LOBBY / ROOM SETUP (create, join, quick queue, ready, roster)

```
Using the RIFT premium living-arena design system, design the LOBBY screen as a "war council chamber" — a richly lit room where duelists gather before battle.

- A carved central panel with: Deck select (ornate dropdown), Players [2-6] (gem segmented selector), Mode (Host+Play / Host Only), and a faction/champion picker showing the 6 factions as illustrated crest tiles with their ability.
- Primary actions as premium sculpted buttons: Create Room, Quick Queue, Practice vs Bot; plus a "Enter Room Code" input.
- Player roster as portrait plaques around the chamber with READY (glowing green seal) / WAITING states and a [HOST] crown marker; host gets a "Start Duel" button.

Show ALL states as labeled frames: pre-room (solo, choosing), in-room populated (4 players, mixed ready), waiting-for-host, quick-queue searching ("searching for a worthy opponent..." with animated seek), error.
Micro-interactions: selecting a faction tile lifts + glows in its accent color; READY seal stamps with a flash; copy-code shows a brief "copied" toast; portraits idle-breathe.
Responsive: desktop 1440 (chamber layout) + mobile-portrait 390 (sections stack, actions become a pinned bottom command bar, roster becomes a horizontal strip).
```

---

## 4 — CARD DETAIL MODAL + CARD LIBRARY (grid, filters, search)

```
Using the RIFT premium living-arena design system, design the CARD DETAIL modal and the CARD LIBRARY.

CARD DETAIL = a "champion codex" page: a large premium card render with its sculpted frame and full art, beside an ornate data block — cost gem, ATK/DEF plaques, faction crest + name, rarity, and the ability written as elegant flavor + rules text. The card render has a subtle 3D tilt and faction-colored rim light. Close button is a carved [X].

LIBRARY = a rich gallery: a responsive grid of premium card frames on a textured backdrop; filter controls as ornate toggles/tabs (Faction / Type / Rarity) with faction crests; an elegant search field; a result count ("312 cards of the RIFT"). Cards lift, tilt, and glow on hover.

Show ALL states as labeled frames: library populated, filtered by a faction (accent-tinted), no-results ("no cards match — try clearing filters"), loading (shimmer placeholders), detail modal open over a dimmed grid.
Micro-interactions: hover lifts + tilts + rim-lights a card; opening detail does a premium expand from the tapped card; filter toggles animate in their faction accent; rarity sparkle on legendary frames.
Responsive: desktop 1440 (multi-column grid) + mobile-portrait 390 (2-up grid, filters collapse into a bar, detail becomes a full-screen sheet with swipe-to-dismiss).
```

---

## 5 — PROFILE (change name, avatar, password)

```
Using the RIFT premium living-arena design system, design the PROFILE screen as a "duelist dossier".

- A hero header: the player's chosen avatar in an ornate portrait frame, callsign in the display face, and a faction crest.
- Editable sections as carved panels: Change Display Name (input + save), Change Avatar (a grid of avatar tiles, selected one glows in gold), Change Password (current + new + confirm with strength meter).
- Optional stats strip (duels played, win rate) styled as gem-set readouts.

Show ALL states as labeled frames: viewing, editing name, avatar-picker open, password-change (with validation error + success), saving (loading), saved (success flash).
Micro-interactions: selecting an avatar tile lifts + gold-glows; save button pulses; success shows a brief seal/checkmark flourish; password strength meter animates.
Responsive: desktop 1440 (two-column) + mobile-portrait 390 (single column, sticky save bar).
```

---

## 6 — GUIDE SCREENS (Lore, How to Play, Card Journey, About the Dev)

```
Using the RIFT premium living-arena design system, design the GUIDE / CODEX screens as an illustrated lore tome with tabs: LORE, HOW TO PLAY, CARD JOURNEY, ABOUT THE DEV.

- A framed "tome" container with a tab/chapter rail. Rich painterly chapter headers.
- LORE: the worldbuilding intro as elegant prose over atmospheric art, plus 3 "pillar" cards (The Wound / The Riftwalkers / The Stakes).
- HOW TO PLAY: clear illustrated step blocks (turn flow, combat math, the hidden attack/defense bluff, spell types Empower/Rally/Strike/Volley/Trade-off/Utility, winning) — diagrams over decoration, premium but legible.
- CARD JOURNEY: deck-building guidance (Core / Synergy / Tech) as illustrated tiles.
- ABOUT THE DEV: a tasteful card with the developer bio (Rishav Raj) and contact links (Email, LinkedIn) — premium, minimal, NOT cluttered.

Show ALL states as labeled frames: each of the 4 tabs.
Micro-interactions: tab switch flips like a tome page; chapter headers parallax slightly on scroll; pillar/step tiles lift on hover.
Responsive: desktop 1440 (tome with side rail) + mobile-portrait 390 (tabs become a top segmented control, content single-column, comfortable reading).
```

---

## 7 — TOP NAV + SLIDE-IN DRAWER MENU

```
Using the RIFT premium living-arena design system, design the TOP NAVIGATION bar and a right-side SLIDE-IN DRAWER menu.

- Top bar: the RIFT logo + wordmark on the left (carved, subtle glow), a hamburger/menu button on the right. Slim, premium, sits over the arena without blocking it.
- Drawer: slides in from the right as an ornate carved panel; menu items each with a distinct illustrated icon chip — Profile, Lore, How to Play, Card Journey, Card Library, About the Dev, Sound toggle (On/Off), and (admin only) Analytics. A red "Logout" pinned at the bottom.

Show ALL states as labeled frames: drawer closed (just top bar), drawer open, an item hovered/pressed, logged-out variant (fewer items), admin variant (Analytics shown).
Micro-interactions: drawer slides + the page dims behind it; items stagger-fade in; icon chips glow on hover; logout is clearly the red danger action.
Responsive: desktop 1440 + mobile-portrait 390 (drawer goes near-full-width).
```

---

## 8 — OVERLAYS & SYSTEM STATES (victory/defeat, confirms, toasts, intro video, loading/error/empty)

```
Using the RIFT premium living-arena design system, design the shared OVERLAYS and SYSTEM STATES as a set of labeled frames:

- VICTORY: a triumphant full-screen overlay — "RIFT CORE CLAIMED", golden light burst, the winner's crest, celebratory particles, buttons (Play Again / Back to Lobby).
- DEFEAT: a somber variant — "TIMELINE ERASED", desaturated, dignified, with the same actions.
- CONFIRM DIALOG: an ornate small modal for destructive actions (Concede? / Leave and forfeit?) with Cancel + a red confirm; and the post-concede choice modal (Spectate / Leave to Lobby).
- INTRO TRAILER modal: a framed video viewport with a close [X] and a "tap for sound" affordance.
- TOASTS: elegant slide-in notification chips (info / success / error) that auto-dismiss.
- LOADING: a premium branded loader (the RIFT core spinning / pulsing) used for app and board loads.
- EMPTY + ERROR states: tasteful illustrated empty ("nothing here yet") and error ("something broke — retry") panels.

Micro-interactions: victory/defeat burst-in with FX; confirms scale in with a dim backdrop; toasts slide + fade; loader pulses; all dismiss cleanly.
Responsive: provide desktop 1440 + mobile-portrait 390 for each.
```

---

## Production note
Figma Make gives you the **look and a clickable feel**; it mocks animations as described sequences/keyframes, not production motion. Treat the Figma output as the **approved spec / source of truth**. Once a screen is approved, port it into the React codebase (`apps/frontend`) to match — that's the step that turns it from prototype into the real product.

## Build order (recommended)
0 (system) → 1 (duel board) → approve the look → 2 (landing) → 3 (lobby) → 4 (library/detail) → 7 (nav) → 8 (overlays) → 5 (profile) → 6 (guide).

---

## SINGLE ONE-SHOT PROMPT (whole app in one generation)
Use this when you want the entire app from a single Figma Make run (e.g. to conserve a fresh account's tokens). It trades per-screen depth for full coverage.

```
Build a COMPLETE, multi-screen, clickable prototype for a premium sci-fantasy trading card game, "Chronicles of the RIFT". Generate ALL screens listed below in ONE app, sharing a single design system, wired together with navigation. Target quality: Legends of Runeterra / Teamfight Tactics by Riot — a rich, painterly, LIVING arena, NOT a flat dark template.

=== GLOBAL DESIGN SYSTEM (apply to every screen) ===
- DEPTH not flatness: layered parallax backgrounds, soft volumetric light, atmospheric haze, gentle bloom on light sources only. Stages feel 3D.
- Painterly materiality: carved stone, brushed gold trim, enchanted glass, worn leather — hand-painted textures, not gradients.
- Color: deep dusk-blue/charcoal base, warm gold + ember-orange highlights. Six faction accents: Sentinel=gold, Void=violet, Ember=orange-red, Beast=bronze-green, Chrono=cyan, Abyss=crimson. Saturated where it matters, never washed out.
- Frames: sculpted gold borders with subtle filigree corners; generous spacing, clear hierarchy — premium, not busy.
- Type: refined display serif/blackletter-hybrid for headings; clean humanist sans for data/stats; strong size hierarchy.
- Motion everywhere: hover/select/play trigger light, particles, motion; idle elements breathe (float, embers, dust).
- Provide desktop (1440) AND mobile-portrait (390) for every screen; describe the reflow.

=== CARD COMPONENT (reused everywhere) ===
Sculpted gold frame, art in a beveled window, cost as an inset gem, ATK/DEF on metal plaques, faction-accent border glow, rarity shown by ornamentation, slight 3D cursor tilt.

=== SCREENS TO GENERATE (all of them) ===

1. LANDING / SIGN-IN: epic title screen — full-bleed painterly RIFT hero with parallax + embers, logo with glow, tagline, trust chips (6 realms · 300+ cards · live duels · free). Right: ornate panel with LOG IN / REGISTER tabs, elegant inputs, "Enter the Rift" gem button, "Forgot key?" link, "▶ Watch Trailer". Include register (avatar picker grid) + forgot-password (request + reset) states.

2. LOBBY: a "war council chamber". Deck select, Players [2-6] selector, Mode toggle, faction picker (6 illustrated crest tiles + abilities). Buttons: Create Room, Quick Queue, Practice; "Enter Room Code" input. Player roster as portrait plaques with READY (green seal) / WAITING and [HOST] crown + Start Duel.

3. DUEL BOARD (the hero screen, free-for-all, show 3-4 players): a deep painterly arena — opponents seated across an elevated far edge, you at the foreground bottom, a glowing RIFT core pulsing at center; haze, god-rays, drifting embers, parallax realm background. Opponents = sculpted seat plaques (portrait, HP gem, mana pips, hand count) with their units on their field section; active seat lights/breathes. Your side = units on plinths, hand fanned at bottom, avatar + deck + graveyard as 3D props. Clean top HUD: turn indicator, ornate timer dial, End Turn / Concede / Leave.
   ANIMATIONS (show as sequences/keyframes): DRAW (card arcs from deck into hand with trail + sparkle), SUMMON (slam + shockwave + dust + wake glow), ATTACK (lunge along curved path, slashing arc, screen shake, damage number bursts up, recoil), DEFEND (shield snaps up, clang, ripple), SPELL (card dissolves into faction-color energy streaming to target, bloom burst), DESTROY (unit shatters into shards into graveyard), TURN CHANGE (light wipe + "[NAME]'S TURN" banner flourish, new seat ignites), IDLE (embers, core pulse, ready units breathe, hover tilt).
   States: your-turn, opponent-turn (your side dims), unit-selected (valid targets ringed in faction color), empty field, full field, victory ("RIFT CORE CLAIMED") + defeat ("TIMELINE ERASED") overlays.
   Mobile: opponents as a horizontal strip up top, your field mid, hand as a bottom-sheet that slides up, command bar pinned — fully playable, no vertical scroll.

4. CARD LIBRARY + CARD DETAIL: gallery grid of premium card frames on textured backdrop; filters as ornate toggles (Faction / Type / Rarity) + search + count ("312 cards"). Detail = "champion codex": large card render + ornate data block (cost gem, ATK/DEF plaques, crest, name, rarity, ability flavor + rules). Include no-results + loading states.

5. PROFILE: a "duelist dossier" — avatar in ornate portrait frame, callsign, faction crest; carved panels for Change Name, Change Avatar (tile grid, selected glows gold), Change Password (strength meter); optional stats strip.

6. GUIDE / CODEX (tabbed lore tome): tabs LORE (worldbuilding prose + 3 pillars), HOW TO PLAY (illustrated steps: turn flow, combat math, hidden attack/defense bluff, spell types Empower/Rally/Strike/Volley/Trade-off/Utility, winning), CARD JOURNEY (Core/Synergy/Tech tiles), ABOUT THE DEV (clean bio card: Rishav Raj + Email + LinkedIn).

7. TOP NAV + RIGHT SLIDE-IN DRAWER: slim premium top bar (logo + menu button); drawer with illustrated icon-chip items — Profile, Lore, How to Play, Card Journey, Card Library, About, Sound toggle, (admin) Analytics — and a red Logout pinned at bottom.

8. OVERLAYS & SYSTEM STATES: Victory (golden burst) / Defeat (somber) overlays with Play Again / Lobby; Confirm dialog (Concede? / Leave & forfeit?) + post-concede choice (Spectate / Leave); Intro trailer modal; toasts (info/success/error); branded loader (RIFT core pulsing); empty + error panels.

=== DELIVERABLE ===
One connected prototype: a style-guide page first, then every screen above as its own page/frame (desktop + mobile), wired with navigation (sign-in → lobby → duel; menu → each page; concede/leave flows). Keep the premium living-arena look consistent across all of them.
```
