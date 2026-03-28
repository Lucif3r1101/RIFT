import { useEffect, useMemo, useState } from "react";
import { ADSENSE_AUTH_SLOT_ID, ADSENSE_CLIENT_ID } from "../constants/game";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  className?: string;
};

let adScriptRequested = false;

export function AdSlot(props: AdSlotProps) {
  const { className = "" } = props;
  const [ready, setReady] = useState(false);
  const enabled = useMemo(() => Boolean(ADSENSE_CLIENT_ID && ADSENSE_AUTH_SLOT_ID), []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (!adScriptRequested) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
      script.crossOrigin = "anonymous";
      script.onload = () => setReady(true);
      document.head.appendChild(script);
      adScriptRequested = true;
      return;
    }

    setReady(true);
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !ready) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense may ignore duplicate pushes while loading; keep UI stable.
    }
  }, [enabled, ready]);

  if (!enabled) {
    return null;
  }

  return (
    <aside className={`ad-slot ${className}`.trim()} aria-label="Advertisement">
      <span className="ad-slot-label">Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={ADSENSE_AUTH_SLOT_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
