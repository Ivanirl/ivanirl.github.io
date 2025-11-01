import herobiggy from "../Resources/Jor-DSC00727-Edit.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel() {
  const texts = ["Photographer?", "Videographer?", "Video Editor?", "Cinematographer?"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);                         

  const navigate = useNavigate();
  const move = () => {
    navigate("./filler");
  };

    const navigater = useNavigate();
  const movey = () => {
    navigate("./filler2");
  };

  return (
    <div className="BigCaro">
      <img src={herobiggy} />
      <div className="rootbeer">
        <div className="wrap">
          <h1 className="top" style={{ lineHeight: "0.4em" }}>
            <span style={{ lineHeight: "0em" }}>Capture </span>
            <br></br>Your digital story.
          </h1>
        </div>
        <div className="wrap">
          <span className="bot">
            Do you need a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                className="switch"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                style={{ display: "inline-block" }}
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>At LoxyVisuals we are devoted to providing the best.</span>
          <button onClick={movey}>BOOK A CALL NOW</button>
        </div>
      </div>
    </div>
  );
}
