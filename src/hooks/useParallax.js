import { useEffect, useRef } from "react";

export default function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      const scrolled = window.scrollY;
      const yPos = (rect.top + scrolled) * speed;
      node.style.transform = `translateY(${(scrolled - rect.top) * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
