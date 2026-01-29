import NavBar from "../components_oriflame/navbar";
import Carousel from "../components_oriflame/Carousel";
import Footer from "../components_oriflame/Footer";
import ThemeToggle from "../components_oriflame/ThemeToggle";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function () {
  const [scrolled, setScrolled] = useState(false);
  const [activeBoard, setActiveBoard] = useState("");
  const [activity, setActivity] = useState("safenest");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400 && window.scrollY < 1000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const next = () => {
    if (activeBoard === "safenest") {
      setActiveBoard("assuranceCrow");
      setActivity("assuranceCrow");
      console.log("it works");
    } else if (activeBoard === "assuranceCrow") {
      setActiveBoard("safenest");
      setActivity("safenest");
      console.log("it works-ish");
    } else console.log("wtf");
  };

  return (
    <div>
      <button className={scrolled ? "showgreen" : "noshow"} onClick={next}>
        <span>NEXT</span>
      </button>
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
