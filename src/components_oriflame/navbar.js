import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logothree.jpg";
import { Modal } from "react-overlays";
import { motion } from "framer-motion";
import Nothing from "../components_oriflame/empty";
import Bag from "../Resources/ShopBag2.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuha, setMenuha] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleSave = () => {
    console.log("success");
  };
  const renderBackdrop = (props) => <div className="props"></div>;

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


  return (
    <div className={showModal? "scrollo Nav":"Nav"} id={scrolled ? "scrollo" : ""}>
      <div className="container">
        <div className="rightboy">
        <button
            className="mens"
            onClick={() => {
              setMenuha(!menuha);
              setShowModal(!showModal);
            }}
          >
            <svg
              width="49"
              height="25"
              viewBox="0 0 51 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={menuha ? "kross" : "unkross"}
            >
              <rect
                className="ops thefirst"
                width="32"
                y={menuha ? "-5" : ""}
                x={menuha ? "3" : ""}
                height="2.5"
                rx="1.5"
                fill="#6e6e6e"
              />
              <rect
                className="ops thesecond"
                y="9"
                width="32"
                height="2.5"
                rx="1.5"
                fill="#6e6e6e"
              />
              <rect
                className="ops thethird"
                y={menuha ? "19" : "17"}
                x={menuha ? "-11" : ""}
                width="32"
                height="2.5"
                rx="1.5"
                fill="#6e6e6e"
              />
            </svg>
          </button>

          <div className="logo">
            <Link to="/" onClick={() => onUpdateActiveLink("oriflame")}>
              <img src={Logo} className="logoimage" alt="logo image" />
            </Link>
          </div>


          <ul className="closedNav" id="nav-bubble">
            <li className="bubble-close">
              <button
                className="womens"
                onClick={() => {
                  setMenuha(!menuha);
                }}
              >
                <svg
                  width="49"
                  height="37"
                  viewBox="0 0 49 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.01123"
                    width="49"
                    height="3"
                    rx="1.5"
                    transform="rotate(42.0982 8.01123 0)"
                    fill="#6e6e6e"
                  />
                  <rect
                    x="6.22681"
                    y="34.8887"
                    width="49"
                    height="3"
                    rx="1.5"
                    transform="rotate(-45.3915 6.22681 34.8887)"
                    fill="#6e6e6e"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/filler"
                className={
                  activeLink === "/filler"
                    ? "active navbar-link"
                    : "inactive navbar-link"
                }
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("/filler");
                  } else {
                    onUpdateActiveLink("/filler");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span className="olodo">Book a call</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="smaller-box"
        >
          <section className="leftSlim">
            <div className="left">
              <ul>
                {/* <li>
                  <div className="bar"></div>
                  <span>Brands and Brand Identity</span>
                </li>  */}
                <li className="colored skyblue">
                  <div className="bar"></div>
                  <span>Photography</span>
                </li>
                <li className="colored lightpink">
                  <div className="bar"></div>
                  <span>Cinematography</span>
                </li>
                <li className="colored ashy">
                  <div className="bar"></div>
                  <span>Motion Design</span>
                </li>
                <li className="colored darkblue">
                  <div className="bar"></div>
                  <span>Branding/ Content Management</span>
                </li>
                {/* <li className="colored yellow">
                  <div className="bar"></div>
                  <span>Vlogs and special coverage</span>
                </li>
                <li className="colored purple">
                  <div className="bar"></div>
                  <span>Brands and Brand Identity</span>
                </li>
                <li className="colored darkgreen">
                  <div className="bar"></div>
                  <span>Other</span>
                </li> */}
                {/* <li className="colored lightblue">
                  <div className="bar"></div>
                  <span>Category 9</span>
                </li> */}
              </ul>
            </div>
            <div className="barz"></div>
          </section>
          <section className="pseudoLoad">
            {/* on hover of list components dislay specific image preview for each category. work out logic */}
            <Nothing />
          </section>
        </motion.div>
      </Modal>
    </div>
  );
}

export default NavBar;
