"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Rise({ className, delay = 0, children }: { className?: string; delay?: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rise ${className ?? ""}`} data-shown={shown ? "true" : "false"} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
