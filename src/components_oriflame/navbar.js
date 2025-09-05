import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logothree.jpg";
import { Modal } from "react-overlays";
import { motion } from "framer-motion";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollStage, setScrollStage] = useState(0);
  const [menuha, setMenuha] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 550) {
        setScrollStage(0);
      } else if (scrollY >= 550 && scrollY < 2000) {
        setScrollStage(1);
      } else if (scrollY >= 18000 && scrollY < 10000) {
        setScrollStage(2);
      } else {
        setScrollStage(3);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div
      className="Nav"
      id={
        scrollStage === 0
          ? ""
          : scrollStage === 1
          ? "scrollo"
          : scrollStage === 2
          ? ""
          : "empty"
      }
    >
      <div className="container">
        <div className="float">
          <div className="logo">
            <Link to="/" onClick={() => onUpdateActiveLink("oriflame")}>
              <img src={Logo} className="logoimage" alt="logo image" />
            </Link>
          </div>

          <Link
            to="/filler"
            onClick={() => {
              if (window.screenX < 531) {
                onUpdateActiveLink("/filler");
              } else {
                onUpdateActiveLink("/filler");
                setMenuha(!menuha);
              }
            }}
          >
            <button className="olodo">Book a call</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
