import React from "react";
import useInView from "../hooks/useInView";
import useParallax from "../hooks/useParallax";

export default function NoMoreWorry({ title = "No more worrying about", subtitle = "Streamline your workflow and focus on what matters.", cta = "Learn more" }) {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });
  const visualRef = useParallax(0.3);

  return (
    <section ref={ref} className={`no-more-worry reveal ${inView ? "in-view" : ""}`}>
      <div className="nmw-container">
        <div className="nmw-text stagger-item">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <button className="nmw-cta">{cta}</button>
        </div>
        <div ref={visualRef} className="nmw-visual parallax-bg stagger-item" aria-hidden>
          <div className="nmw-shape" />
        </div>
      </div>
    </section>
  );
}
