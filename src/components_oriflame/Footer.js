import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="Footsy">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="containerT"
      >
        <div className="right">
          <ul className="vought1">
            <span>LOXY VISUALS</span>
            <li>Support center</li>
            <li>View our free dates</li>
            <li>Returns and Claims</li>
          </ul>
          <ul className="vought2">
            <span>CORPORATE INFO</span>
            <li>Work With Us</li>
            <li>About LoxyVisuals</li>
            <li>Sustainablility</li>
            <li>Investor Relations</li>
          </ul>
          <ul className="vought3">
            <span>DISCOVER</span>
            <li>Partnership Oportunities</li>
            <li>Our Catalogue</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="containerB"
      >
        <div className="float">
          <span className="topDawg">
            LoxyVisuals is a photography and videography brand that prioritizes
            providing the best digital <br></br>experience for all customers. We have a
            large national presence, of which we are one of the market
            leaders.<br></br> LoxyVisuals has its origin in Enugu state, Nigeria with
            corporate offices in Lagos, Nigeria.We offer a wide range<br></br> 
            of high-quality services with the singular goal of providing a
            timeless eexperience and capturing memories.
          </span>
          <span>Copyright 2025 LoxyVisuals. All rights reserved.</span>
          <span className="u">Select Country/State</span>
        </div>
      </motion.div>
    </div>
  );
}
