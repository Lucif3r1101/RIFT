import Lottie from "lottie-react";
import victoryBurst from "../assets/victoryBurst";

type VictoryOverlayProps = {
  won: boolean;
  winnerName: string;
  onExit: () => void;
};

// Full-screen end-of-match overlay. On a win it plays the confetti-burst Lottie.
export function VictoryOverlay({ won, winnerName, onExit }: VictoryOverlayProps) {
  return (
    <div className="victory-overlay" role="dialog" aria-modal="true">
      {won ? <Lottie animationData={victoryBurst} loop autoplay className="victory-lottie" aria-hidden="true" /> : null}
      <div className={`victory-card ${won ? "victory-win" : "victory-lose"}`}>
        <span className="victory-emoji" aria-hidden="true">{won ? "🏆" : "💀"}</span>
        <h2>{won ? "Victory!" : "Defeated"}</h2>
        <p>{won ? "You conquered the Rift." : `${winnerName} won the duel.`}</p>
        <button className="button primary auth-submit" type="button" onClick={onExit}>
          Back to Lobby
        </button>
      </div>
    </div>
  );
}
