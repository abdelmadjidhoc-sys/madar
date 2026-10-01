"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `value` (ease-out, 1.5s) the first time it's half in view. */
export default function StatNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setCurrent(value);
      return;
    }

    let frame;
    function animate() {
      const duration = 1500;
      let start = null;
      function step(timestamp) {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(value * eased));
        if (progress < 1) frame = window.requestAnimationFrame(step);
      }
      frame = window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <p className="stat-number" ref={ref}>
      {current + suffix}
    </p>
  );
}
