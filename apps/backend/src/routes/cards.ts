import { Router } from "express";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { CardModel } from "../models/Card.js";

type SpellInfo = {
  archetype?: string;
  text?: string;
  atk?: number;
  def?: number;
  damage?: number;
  life?: number;
  heal?: number;
  draw?: number;
  mana?: number;
};

// Load the slug -> spell-effect map once so the library/hand can show what
// each spell actually does.
function loadSpellInfo(): Record<string, SpellInfo> {
  const here = dirname(fileURLToPath(import.meta.url));
  for (const candidate of [
    resolve(here, "../data/cardEffects.generated.json"),
    resolve(here, "../../src/data/cardEffects.generated.json")
  ]) {
    try {
      const raw = JSON.parse(readFileSync(candidate, "utf8")) as Record<string, SpellInfo>;
      const map: Record<string, SpellInfo> = {};
      for (const [slug, script] of Object.entries(raw)) {
        if (script.archetype) map[slug] = script;
      }
      return map;
    } catch {
      // try next path
    }
  }
  return {};
}

const SPELL_INFO = loadSpellInfo();

export function buildCardsRouter(): Router {
  const router = Router();

  router.get("/", async (_req, res) => {
    const cards = await CardModel.find().sort({ cost: 1, name: 1 });

    res.json({
      cards: cards.map((card) => ({
        id: card.id,
        slug: card.slug,
        name: card.name,
        description: card.description,
        faction: card.faction,
        type: card.type,
        rarity: card.rarity,
        cost: card.cost,
        attack: card.attack,
        health: card.health,
        archetype: SPELL_INFO[card.slug]?.archetype,
        spellText: SPELL_INFO[card.slug]?.text,
        spell: SPELL_INFO[card.slug]
      }))
    });
  });

  return router;
}
