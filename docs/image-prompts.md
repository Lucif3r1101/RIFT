# Image Prompt Pack — Chronicles of the RIFT

Ready-to-use text-to-image prompts for the assets that would most improve the UI.
Style is kept consistent with the existing card art: **premium sci-fantasy, cinematic,
polished digital painting, no text, no watermark.**

For each: generate, then drop the file at the **Save to** path (create the folder if
needed) and tell me — I'll wire it into the UI.

**Global negative prompt (use on all):**
`text, watermark, signature, logo, letters, words, ui, frame, border, blurry, low quality, deformed, extra limbs, jpeg artifacts`

---

## 1. Hero / landing key art (highest impact)
- **Save to:** `apps/frontend/public/assets/branding/hero-key-art.jpg`
- **Size:** 1920 × 1080 (16:9), landscape
- **Prompt:**
  `A colossal tear in reality — "the Rift" — splitting a dark cosmic sky, jagged shards of six fractured worlds floating around a glowing cyan-and-teal fissure, distant citadels, void corridors, ember storms, iron wilds, broken clockwork, and abyss trenches drifting in the void, epic scale, volumetric god rays, deep blue and cyan palette with teal and violet accents, premium sci-fantasy concept art, cinematic lighting, ultra detailed, polished digital painting, no text, no watermark`

## 2. Six realm banners (for lore / realms / card-library headers)
- **Save to:** `apps/frontend/public/assets/realms/<id>.jpg`
- **Size:** 1200 × 675 (16:9) each
- Shared style suffix for all six: `wide cinematic banner, premium sci-fantasy concept art, dramatic lighting, atmospheric depth, polished digital painting, no text, no watermark, no characters facing camera`

| id (filename) | Prompt (prepend, then add the shared style suffix) |
|---|---|
| `riftforged-sentinel` | `The Bastion Citadels — towering fortress of hard-light shields and angular steel ramparts holding back the Rift, cyan and steel palette, defensive energy walls` |
| `void-ranger` | `The Void Corridors — dark dimensional canyons with neon violet rifts and phasing light trails between worlds, indigo and cyan palette, mysterious` |
| `ember-arcanist` | `The Ember Sanctums — molten arcane temple with rivers of runic fire and floating ember runes, ember orange and teal palette, intense heat haze` |
| `ironbound-beastmaster` | `The Iron Wilds — overgrown ruins of brass and iron where engineered beasts roam, rust red, brass and moss palette, primal and industrial` |
| `chronomancer` | `The Broken Timelines — shattered clockwork landscape with frozen time fragments and floating stasis shards, gold, azure and pale violet palette, surreal` |
| `abyss-revenant` | `The Abyss Trenches — deep oceanic chasm glowing with spectral soul energy and drifting bone structures, deep violet, crimson and bone palette, haunting` |

## 3. Social share / OG image
- **Save to:** `apps/frontend/public/assets/branding/og-image.jpg`
- **Size:** 1200 × 630
- **Prompt:**
  `Epic sci-fantasy key art of a glowing cyan rift splitting a dark sky with six fractured realms around it, centered composition with empty space at the top for a title overlay, cinematic lighting, deep blue cyan and teal palette, premium digital painting, no text, no watermark`

## 4. (Optional) New profile avatars — themed set
- **Save to:** `apps/frontend/public/assets/avatars/avatar-XX.png` (square)
- **Size:** 512 × 512 each, transparent or dark background
- **Prompt (vary the subject per avatar):**
  `Sci-fantasy faction emblem portrait icon, [a Riftforged sentinel helm / a void ranger mask / an ember mage sigil / an ironbound beast skull / a chronomancer clock-eye / an abyss revenant skull], glowing accents, circular badge composition, clean centered icon, cyan and teal rim light, premium game avatar, polished digital painting, no text, no watermark`

---

## Tips for consistency
- Generate at the listed aspect ratio (don't crop later — it distorts).
- Keep the **same model + seed family** across the six realm banners so they feel like a set.
- Export realms/hero as **.jpg** (smaller), avatars/icons as **.png** (transparency).
- Aim for < 400 KB per image (compress) so the site stays fast.
