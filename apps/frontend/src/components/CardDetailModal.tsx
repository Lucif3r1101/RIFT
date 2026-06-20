import { getCardArtSources, handleCardArtError, factionFromSlug } from "../lib/cardArt";

export type DetailCard = {
  slug: string;
  name: string;
  description: string;
  type: "unit" | "spell";
  rarity: "common" | "rare" | "epic" | "legendary";
  cost: number;
  attack: number;
  health: number;
  faction?: string;
  position?: "attack" | "defense";
};

const FACTION_LABELS: Record<string, string> = {
  "riftforged-sentinel": "Riftforged Sentinel",
  "void-ranger": "Void Ranger",
  "ember-arcanist": "Ember Arcanist",
  "ironbound-beastmaster": "Ironbound Beastmaster",
  "chronomancer": "Chronomancer",
  "abyss-revenant": "Abyss Revenant"
};

// A quick read on a unit's profile from its ATK vs DEF.
function profileOf(card: DetailCard): { label: string; note: string } {
  if (card.type === "spell") return { label: "Spell", note: "Resolves an effect, then stays in your Spell Zone." };
  if (card.attack >= card.health + 2) return { label: "Aggressive", note: "High ATK, lower DEF — great on the attack, fragile on defense." };
  if (card.health >= card.attack + 2) return { label: "Defensive", note: "High DEF — set it to guard you; tough to break through." };
  return { label: "Balanced", note: "Even ATK and DEF — flexible in either stance." };
}

export function CardDetailModal({ card, onClose }: { card: DetailCard; onClose: () => void }) {
  const faction = card.faction || factionFromSlug(card.slug);
  const profile = profileOf(card);
  const value = card.type === "unit" ? Math.round(((card.attack + card.health) / Math.max(1, card.cost)) * 10) / 10 : null;

  return (
    <div className="legal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="card-detail" onClick={(e) => e.stopPropagation()}>
        <button className="icon-close card-detail-close" type="button" onClick={onClose} aria-label="Close">×</button>
        <div className="card-detail-art">
          <img src={getCardArtSources(card.slug).primary} alt={card.name} onError={(e) => handleCardArtError(e, card.slug)} />
          <span className="cd-cost" title="Mana cost">{card.cost}</span>
          {card.type === "unit" ? (
            <>
              <span className="cd-atk" title="Attack">⚔ {card.attack}</span>
              <span className="cd-def" title="Defense">🛡 {card.health}</span>
            </>
          ) : (
            <span className="cd-spelltag">Spell</span>
          )}
        </div>
        <div className="card-detail-body">
          <h3>{card.name}</h3>
          <div className="cd-tags">
            <span className={`cd-tag tag-${card.rarity}`}>{card.rarity}</span>
            <span className="cd-tag">{FACTION_LABELS[faction] ?? faction}</span>
            <span className="cd-tag">{card.type === "unit" ? "Unit" : "Spell"}</span>
            {card.position ? <span className="cd-tag">{card.position === "defense" ? "Defense" : "Attack"} stance</span> : null}
          </div>
          {card.description ? <p className="cd-desc">{card.description}</p> : null}
          <div className="cd-stats-grid">
            <div><span>Mana</span><strong>◆ {card.cost}</strong></div>
            {card.type === "unit" ? <div><span>Attack</span><strong>⚔ {card.attack}</strong></div> : null}
            {card.type === "unit" ? <div><span>Defense</span><strong>🛡 {card.health}</strong></div> : null}
            {value !== null ? <div><span>Value</span><strong>{value}/mana</strong></div> : null}
          </div>
          <div className="cd-profile">
            <strong>{profile.label}</strong>
            <span>{profile.note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
