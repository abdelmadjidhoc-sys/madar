"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A <section data-reveal> that fades/slides in the first time it scrolls
 * into view (styles: [data-reveal] / .is-visible in app/styles.css).
 * Shows immediately under prefers-reduced-motion.
 */
export default function RevealSection({ className = "", children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={className + (visible ? " is-visible" : "")} data-reveal {...props}>
      {children}
    </section>
  );
}
