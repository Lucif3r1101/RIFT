import Lottie from "lottie-react";
import riftOrb from "../assets/riftOrb";

// Looping Lottie energy orb used as a hero emblem behind the logo.
export function RiftOrb({ className }: { className?: string }) {
  return <Lottie animationData={riftOrb} loop autoplay className={className} aria-hidden="true" />;
}
