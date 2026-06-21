// Deterministic spell-effect generator. Units (c01-c32) become plain combat
// cards; spells (c33-c52) get one of the clear archetypes with rarity-scaled
// numbers and a human-readable effect line. Run: node scripts/generate-spell-effects.mjs
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const FACTIONS = [
  "riftforged-sentinel",
  "void-ranger",
  "ember-arcanist",
  "ironbound-beastmaster",
  "chronomancer",
  "abyss-revenant"
];

// idx (1-based): 33..43 rare, 44..51 epic, 52 legendary
function rarityForIdx(idx) {
  if (idx >= 52) return "legendary";
  if (idx >= 44) return "epic";
  return "rare";
}

// Cycle every archetype across each faction's 20 spells so all types appear.
const ARCHETYPES = ["empower", "strike", "volley", "rally", "tradeoff", "utility"];

function buildSpell(idx) {
  const rarity = rarityForIdx(idx);
  const tier = rarity === "legendary" ? 2 : rarity === "epic" ? 1 : 0; // 0 rare,1 epic,2 legendary
  const archetype = ARCHETYPES[(idx - 33) % ARCHETYPES.length];

  switch (archetype) {
    case "empower": {
      const atk = [2, 3, 4][tier];
      const def = [2, 3, 5][tier];
      return { kind: "spell", archetype, atk, def, text: `Empower: +${atk}/+${def} to your strongest unit.` };
    }
    case "rally": {
      const atk = [1, 2, 2][tier];
      const def = [1, 1, 2][tier];
      return { kind: "spell", archetype, atk, def, text: `Rally: +${atk}/+${def} to ALL your units.` };
    }
    case "strike": {
      const damage = [3, 5, 8][tier];
      return { kind: "spell", archetype, damage, text: `Strike: deal ${damage} damage to the enemy's strongest unit.` };
    }
    case "volley": {
      const damage = [2, 3, 5][tier];
      return { kind: "spell", archetype, damage, text: `Volley: deal ${damage} damage to ALL enemy units.` };
    }
    case "tradeoff": {
      const atk = [4, 6, 9][tier];
      const life = [2, 3, 4][tier];
      return { kind: "spell", archetype, atk, def: 0, life, text: `Trade-off: +${atk} ATK to your strongest unit, but you lose ${life} life.` };
    }
    case "utility":
    default: {
      const heal = [3, 4, 6][tier];
      const draw = tier >= 1 ? 1 : 0;
      const mana = tier >= 2 ? 2 : 1;
      const parts = [`heal ${heal}`];
      if (draw) parts.push(`draw ${draw}`);
      if (mana) parts.push(`+${mana} mana`);
      return { kind: "spell", archetype, heal, draw, mana, text: `Utility: ${parts.join(", ")}.` };
    }
  }
}

const out = {};
for (const faction of FACTIONS) {
  for (let idx = 1; idx <= 52; idx++) {
    const slug = `${faction}-c${String(idx).padStart(2, "0")}`;
    out[slug] = idx <= 32 ? { kind: "unit" } : buildSpell(idx);
  }
}

const here = dirname(fileURLToPath(import.meta.url));
const dest = resolve(here, "../src/data/cardEffects.generated.json");
writeFileSync(dest, JSON.stringify(out, null, 2) + "\n");
console.log(`Wrote ${Object.keys(out).length} effect entries to ${dest}`);
const spells = Object.values(out).filter((e) => e.kind === "spell");
const byArch = spells.reduce((m, e) => ((m[e.archetype] = (m[e.archetype] || 0) + 1), m), {});
console.log("spell archetypes:", byArch);
