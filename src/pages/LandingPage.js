import head from "../Resources/Head.JPG";
import beauty from "../Resources/BeautyBeauty.png";
import rule1 from "../Resources/rule1.png";
import rule2 from "../Resources/rule2.png";
import rule3 from "../Resources/rule3..png";
import rule4 from "../Resources/rule4.png";
import rule5 from "../Resources/rule5.png";
import rule6 from "../Resources/rule6.png";

import NavBar from "../components_oriflame/navbar";
import Banner from "../components_oriflame/Banner";
import Carousel from "../components_oriflame/Carousel";
import CardA from "../components_oriflame/productcardA";
import Split from "../components_oriflame/SplitBanner";
import News from "../components_oriflame/ArticleThumbnail";
import Footer from "../components_oriflame/Footer";
import ImageGrid from "../components_oriflame/ImageGrid";
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
        <Banner />
        <Carousel />
        {/* <section className="wnsection">
          <div className="header">
            <h1>Section One</h1>
            <button>VIEW MORE</button>
          </div>
          <div className="showcase">
            <div className="imgCont">
              <img src={head} />
              <button>GET STARTED</button>
            </div>
            <div className="imgCont">
              <img src={head} />
              <button>GET STARTED</button>
            </div>            
          </div>
          <div className="showcase">
            <div className="imgCont">
              <img src={head} />
              <button>GET STARTED</button>
            </div>
            <div className="imgCont">
              <img src={head} />
              <button>GET STARTED</button>
            </div>            
          </div>
        </section> */}
        <div className="split-with-grid-wrapper">
          <ImageGrid />
          <section className=" wnsection split">
            <Split />
          </section>
        </div>
        {/* <section className="wnsection Bb Be">
          <div className="header">
            <img alt="central" src={beauty} />
            <button>VIEW ALL</button>
            <span>
              We believe beauty is not only products, but inspiration and
              growth. This is where we share <br></br>facts, tips and how to's
              to boost your confidence and help you stay on top of trends.
            </span>
          </div>
          <div className="showcase">
            <News />
            <News />
          </div>
        </section> */}
        {/* <section className="wnsection Bb Be values">
          <div className="header">
            <h1>The Standards We Live by</h1>
            <span>
              Since the very begining, we have always considered nature to be an
              important part of how we do<br></br>things and have built our
              reputation upon offering people safe, reliable products that
              respect our<br></br>environment. Our commitment to develop beauty
              products you can believe in and trust is defined<br></br> by our product standards.
            </span>
          </div>
          <div className="showcase">
            <img className="cleany" alt="stand" src={rule1}/>
            <img className="cleany" alt="stand" src={rule2}/>
            <img className="cleany" alt="stand" src={rule3}/>
            <img className="cleany" alt="stand" src={rule4}/>
            <img className="cleany" alt="stand" src={rule5}/>
            <img className="clean" alt="stand" src={rule6}/>
          </div>
        </section> */}
      </motion.div>
      <ThemeToggle />
      <Footer />
    </div>
  );
}
