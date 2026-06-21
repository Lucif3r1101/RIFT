import { useEffect, useState } from "react";
import { callApi } from "../../lib/api";

type StatsResponse = {
  window: string;
  funnel: {
    signups: number;
    lobbiesCreated: number;
    duelsStarted: number;
    duelsFinished: number;
    signupToDuelPct: number;
    startToFinishPct: number;
  };
  engagement: {
    distinctPlayers: number;
    returningPlayers: number;
    returningPct: number;
    avgTurnsPerDuel: number | null;
    avgDurationMin: number | null;
  };
  balance: {
    factionPicks: { faction: string; picks: number }[];
    factionWins: { faction: string; wins: number }[];
  };
};

type StatsModalProps = {
  open: boolean;
  token: string | null;
  onClose: () => void;
};

const FACTION_LABELS: Record<string, string> = {
  "riftforged-sentinel": "Riftforged Sentinel",
  "void-ranger": "Void Ranger",
  "ember-arcanist": "Ember Arcanist",
  "ironbound-beastmaster": "Ironbound Beastmaster",
  chronomancer: "Chronomancer",
  "abyss-revenant": "Abyss Revenant"
};

export function StatsModal({ open, token, onClose }: StatsModalProps) {
  const [data, setData] = useState<StatsResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    if (!open || !token) return;
    let active = true;
    setLoading(true);
    setError("");
    const path = days ? `/stats?days=${days}` : "/stats";
    callApi<StatsResponse>(path, "GET", undefined, token)
      .then((res) => active && setData(res))
      .catch((e) => active && setError(e.message || "Failed to load stats."))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [open, token, days]);

  if (!open) return null;

  const f = data?.funnel;
  const e = data?.engagement;

  return (
    <div className="info-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="info-screen" onClick={(ev) => ev.stopPropagation()}>
        <div className="info-head">
          <div>
            <span className="landing-section-kicker">Admin</span>
            <h2>Game Analytics</h2>
          </div>
          <button className="icon-close" type="button" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="info-body">
          <div className="stats-range">
            {[
              { label: "All time", v: null },
              { label: "7 days", v: 7 },
              { label: "30 days", v: 30 }
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                className={`stats-range-btn ${days === opt.v ? "active" : ""}`}
                onClick={() => setDays(opt.v)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {loading ? <p className="library-status">Loading…</p> : null}
          {error ? <p className="library-status library-error">{error}</p> : null}

          {data && f && e ? (
            <>
              <h4 className="guide-h">Funnel</h4>
              <div className="stats-grid">
                <div className="stat-cell"><b>{f.signups}</b><span>Signups</span></div>
                <div className="stat-cell"><b>{f.lobbiesCreated}</b><span>Lobbies</span></div>
                <div className="stat-cell"><b>{f.duelsStarted}</b><span>Duels started</span></div>
                <div className="stat-cell"><b>{f.duelsFinished}</b><span>Duels finished</span></div>
                <div className="stat-cell"><b>{f.signupToDuelPct}%</b><span>Signup → duel</span></div>
                <div className="stat-cell"><b>{f.startToFinishPct}%</b><span>Start → finish</span></div>
              </div>

              <h4 className="guide-h">Engagement</h4>
              <div className="stats-grid">
                <div className="stat-cell"><b>{e.distinctPlayers}</b><span>Players</span></div>
                <div className="stat-cell"><b>{e.returningPlayers}</b><span>Returning</span></div>
                <div className="stat-cell"><b>{e.returningPct}%</b><span>Return rate</span></div>
                <div className="stat-cell"><b>{e.avgTurnsPerDuel ?? "—"}</b><span>Avg turns</span></div>
                <div className="stat-cell"><b>{e.avgDurationMin ?? "—"}</b><span>Avg mins</span></div>
              </div>

              <h4 className="guide-h">Faction balance</h4>
              <div className="stats-balance">
                {(data.balance.factionPicks.length === 0)
                  ? <p className="muted">No duels yet.</p>
                  : data.balance.factionPicks.map((p) => {
                      const wins = data.balance.factionWins.find((w) => w.faction === p.faction)?.wins ?? 0;
                      return (
                        <div key={p.faction} className="stats-balance-row">
                          <span className="stats-faction">{FACTION_LABELS[p.faction] ?? p.faction}</span>
                          <span className="stats-faction-nums">{p.picks} picks · {wins} wins</span>
                        </div>
                      );
                    })}
              </div>
              <p className="muted stats-window">Window: {data.window}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
