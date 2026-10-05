"use client";

import { useEffect, useRef, useState } from "react";

export function RevealTitle({
  as,
  className,
  mark,
  children,
}: {
  as: "h1" | "h2";
  className?: string;
  mark?: string;
  children: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
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
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = children.trim().split(/\s+/);
  const Tag = as;

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="reveal-mask" aria-hidden="true">
          <span
            className={`reveal-word${mark && word.replace(/[^a-z0-9]/gi, "").toLowerCase() === mark.toLowerCase() ? " text-accent" : ""}`}
            data-shown={shown ? "true" : "false"}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            {word}
          </span>
          {index < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}
