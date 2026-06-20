import { Router } from "express";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { CardModel } from "../models/Card.js";

// Load the slug -> targetMode map once so the client knows where each spell aims.
function loadTargetModes(): Record<string, string> {
  const here = dirname(fileURLToPath(import.meta.url));
  for (const candidate of [
    resolve(here, "../data/cardEffects.generated.json"),
    resolve(here, "../../src/data/cardEffects.generated.json")
  ]) {
    try {
      const raw = JSON.parse(readFileSync(candidate, "utf8")) as Record<string, { targetMode?: string }>;
      const map: Record<string, string> = {};
      for (const [slug, script] of Object.entries(raw)) {
        if (script.targetMode) map[slug] = script.targetMode;
      }
      return map;
    } catch {
      // try next path
    }
  }
  return {};
}

const TARGET_MODES = loadTargetModes();

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
        targetMode: TARGET_MODES[card.slug] ?? "all_opponents"
      }))
    });
  });

  return router;
}
