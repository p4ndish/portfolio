"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "About" },
  { id: "education", label: "Education" },
  { id: "work-experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "open-source", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
];

export default function ScrollspyNav() {
  const [activeId, setActiveId] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3"
      aria-label="Page sections"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        const isHovered = hoveredId === id;

        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex items-center justify-end gap-3 outline-none"
            aria-label={`Go to ${label}`}
          >
            {/* Line indicator */}
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-300",
                isActive
                  ? "w-8 bg-foreground shadow-sm"
                  : isHovered
                  ? "w-6 bg-foreground/80"
                  : "w-4 bg-foreground/30 hover:bg-foreground/50"
              )}
            />

            {/* Tooltip label */}
            <span
              className={cn(
                "absolute right-12 whitespace-nowrap text-sm font-medium text-foreground transition-all duration-200 z-50",
                isHovered || isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 pointer-events-none"
              )}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
