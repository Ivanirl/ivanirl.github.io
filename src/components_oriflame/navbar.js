import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logothree.jpg";
import lowgo from "../Resources/IVANSWORK.jpg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollStage, setScrollStage] = useState(0);
  const [menuha, setMenuha] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 250) {
        setScrollStage(0);
      } else if (scrollY >= 250 && scrollY < 2000) {
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
    >
      <div className="container">
        <div className="float">
          <div className="logo">
            <Link to="/" onClick={() => onUpdateActiveLink("oriflame")}>
              <img
                src={
                  scrollStage === 0
                    ? Logo
                    : scrollStage === 1
                      ? lowgo
                      : scrollStage === 2
                        ? ""
                        : "scrollo"
                }
                className="logoimage"
                alt="logo image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
