import { useNavigate } from "react-router-dom";
import split from "../Resources/ShowcaseForSafenest.png";
import Crow from "../Resources/Mobile_view_assurance_crow.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Split() {
  const [activeBoard, setActiveBoard] = useState("");
  const [activity, setActivity] = useState("safenest");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 250 && scrollY < 2000) {
        setActiveBoard("safenest");
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navigate = useNavigate();

  // const move = () => {
  //   navigate("./filler");
  // };

  const next = () => {
    if (activeBoard === "safenest") {
      setActiveBoard("assuranceCrow");
      setActivity("assuranceCrow");
    } else if (activeBoard === "assuranceCrow") {
      setActiveBoard("safenest");
      setActivity("safenest");
    }
  };

  if (activeBoard === "safenest" && activity === "safenest") {
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="BigSplit"
      >
        <img src={split} />
        <div className="RightBoy">
          <h1>
            SafeNest.<span>Protect Your Kids.</span>
          </h1>
          <span className="bot">
            With the SafeNest app you can keep track <br></br>of your children
            and make sure they are safe.
          </span>

          <div className="buttonHolder">
            <button onClick={next} className="themebutton1">
              APP STORE
            </button>
            <button onClick={next} className="themebutton2">
              PLAY STORE
            </button>
          </div>
        </div>
        
      </motion.div>
    );
  } else if (activeBoard === "assuranceCrow") {
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="BigSplit"
      >
        <div className="bgcircle"></div>
        <img src={Crow} />
        <div className="RightBoy">
          <h1 style={{ fontSize: "4em" }}>
            AssuranceCrow.
            <span style={{ color: "#a143fe" }}>Safe Transactions.</span>
          </h1>
          <span className="bot">
            Secure your transactions. <br></br>Make fraud a thing of the past.
          </span>

          <div className="buttonHolder">
            <button
              onClick={next}
              style={{ backgroundColor: "#a143fe" }}
              className="themebutton1"
            >
              VIEW ON FIGMA
            </button>
          </div>
        </div>
      </motion.div>
    );
  } else if(activeBoard === "" && activity === "safenest" ) {
    return (
      <div></div>
    )
  }else {
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="BigSplit"
      >
        <div className="bgcircle"></div>
        <img src={Crow} />
        <div className="RightBoy">
          <h1 style={{ fontSize: "4em" }}>
            AssuranceCrow.
            <span style={{ color: "#a143fe" }}>Safe Transactions.</span>
          </h1>
          <span className="bot">
            Secure your transactions. <br></br>Make fraud a thing of the past.
          </span>

          <div className="buttonHolder">
            <button
              onClick={next}
              style={{ backgroundColor: "#a143fe" }}
              className="themebutton1"
            >
              VIEW ON FIGMA
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
}
