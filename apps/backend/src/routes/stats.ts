import { Router } from "express";
import { GameEventModel } from "../models/GameEvent.js";
import { UserModel } from "../models/User.js";
import { requireAuth } from "../middleware/auth.js";
import { isAdminEmail } from "../isAdmin.js";

// Analytics dashboard data — owner-only. Requires a valid login (JWT) AND the
// account's email to be in ADMIN_EMAILS. No shared key, nothing public.
export function buildStatsRouter(jwtSecret: string): Router {
  const router = Router();

  router.get("/", requireAuth(jwtSecret), async (req, res) => {
    const viewer = await UserModel.findById(req.authUserId);
    if (!viewer || !isAdminEmail(viewer.email)) {
      return res.status(403).json({ error: "Admins only." });
    }

    const since = (() => {
      const days = Number(req.query.days);
      if (!Number.isFinite(days) || days <= 0) return null;
      return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    })();
    const match = since ? { createdAt: { $gte: since } } : {};

    const [
      totalUsers,
      lobbies,
      duelsStarted,
      duelsFinished,
      distinctDuelPlayers,
      factionPicks,
      factionWins,
      durationAgg
    ] = await Promise.all([
      UserModel.countDocuments(since ? { createdAt: { $gte: since } } : {}),
      GameEventModel.countDocuments({ ...match, type: "lobby_created" }),
      GameEventModel.countDocuments({ ...match, type: "duel_started" }),
      GameEventModel.countDocuments({ ...match, type: "duel_finished" }),
      // Distinct players who actually started a duel (engagement reach).
      GameEventModel.distinct("userId", { ...match, type: "duel_started" }),
      // Faction pick rate: unwind the factions array on duel_started.
      GameEventModel.aggregate([
        { $match: { ...match, type: "duel_started" } },
        { $unwind: "$factions" },
        { $group: { _id: "$factions", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      // Faction win rate: winnerFaction on duel_finished.
      GameEventModel.aggregate([
        { $match: { ...match, type: "duel_finished", winnerFaction: { $ne: null } } },
        { $group: { _id: "$winnerFaction", wins: { $sum: 1 } } },
        { $sort: { wins: -1 } }
      ]),
      // Average duel length + duration.
      GameEventModel.aggregate([
        { $match: { ...match, type: "duel_finished" } },
        {
          $group: {
            _id: null,
            avgTurns: { $avg: "$turnCount" },
            avgDurationMs: { $avg: "$durationMs" }
          }
        }
      ])
    ]);

    // Retention proxy: how many distinct players have started >1 duel.
    const repeat = await GameEventModel.aggregate([
      { $match: { ...match, type: "duel_started", userId: { $ne: null } } },
      { $group: { _id: "$userId", duels: { $sum: 1 } } },
      { $group: { _id: null, total: { $sum: 1 }, returning: { $sum: { $cond: [{ $gt: ["$duels", 1] }, 1, 0] } } } }
    ]);
    const retention = repeat[0] ?? { total: 0, returning: 0 };

    const pct = (a: number, b: number) => (b > 0 ? Math.round((a / b) * 1000) / 10 : 0);
    const dur = durationAgg[0] ?? { avgTurns: null, avgDurationMs: null };

    res.json({
      window: since ? `${req.query.days} days` : "all time",
      funnel: {
        signups: totalUsers,
        lobbiesCreated: lobbies,
        duelsStarted,
        duelsFinished,
        signupToDuelPct: pct(duelsStarted, totalUsers),
        startToFinishPct: pct(duelsFinished, duelsStarted)
      },
      engagement: {
        distinctPlayers: distinctDuelPlayers.length,
        returningPlayers: retention.returning,
        returningPct: pct(retention.returning, retention.total),
        avgTurnsPerDuel: dur.avgTurns ? Math.round(dur.avgTurns * 10) / 10 : null,
        avgDurationMin: dur.avgDurationMs ? Math.round((dur.avgDurationMs / 60000) * 10) / 10 : null
      },
      balance: {
        factionPicks: factionPicks.map((f) => ({ faction: f._id, picks: f.count })),
        factionWins: factionWins.map((f) => ({ faction: f._id, wins: f.wins }))
      }
    });
  });

  return router;
}
