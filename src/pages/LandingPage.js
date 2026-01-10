import NavBar from "../components_oriflame/navbar";
import Carousel from "../components_oriflame/Carousel";
import Footer from "../components_oriflame/Footer";
import ThemeToggle from "../components_oriflame/ThemeToggle";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function () {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 550) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className={scrolled ? "showgreen" : "noshow"}>
        <svg
          width="49"
          height="37"
          viewBox="0 0 49 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="4"
            x="20.01123"
            width="35"
            height="3"
            rx="1.5"
            transform="rotate(42.0982 8.01123 0)"
            fill="#f5f5f5"
          />
          <rect
            x="9.22681"
            y="38.9"
            width="35"
            height="3"
            rx="1.5"
            transform="rotate(-45.3915 6.22681 34.8887)"
            fill="#f5f5f5"
          />
        </svg>
      </div>
      <NavBar />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="oho"
      >
        <Carousel />
      </motion.div>
      <ThemeToggle />
      <Footer />
    </div>
  );
}
