"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Silent looping video shown above a page's heading. Autoplays muted (the
 * only way browsers allow autoplay); for visitors with "reduce motion" on it
 * stays paused on its first frame and shows controls instead.
 */
export default function HeroVideo({ src }) {
  const ref = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      ref.current.pause();
    }
  }, []);

  return (
    <div className="hero-video">
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={reduceMotion}
      />
    </div>
  );
}
