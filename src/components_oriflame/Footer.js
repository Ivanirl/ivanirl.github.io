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
            <span>IVAN EZEH</span>
            <li>Support center</li>
            <li>View our free dates</li>
            <li>Returns and Claims</li>
          </ul>
          <ul className="vought2">
            <span>CORPORATE INFO</span>
            <li>Work With Us</li>
            <li>About IVAN EZEH</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <ul className="vought3">
          <span>DISCOVER</span>
          <li>Partnership Oportunities</li>
          <li>My Catalogue</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="containerB"
      >
        <div className="float">
          <span className="topDawg">
            IVAN EZEH is a digital service brand that prioritizes providing the
            best digital <br></br>experience for all customers. We have a large
            national presence, of which we are one of the market leaders.
            <br></br> IVAN EZEH has its origin in Enugu state. We offer a wide
            range of high-quality digital services with the goal of <br></br>
            providing high quality digital services from developing websites,
            motion graphics, video editing and so much more!
          </span>
          <span>Copyright 2026 IVAN EZEH. All rights reserved.</span>
          <span className="u">Select Country/State</span>
        </div>
      </motion.div>
    </div>
  );
}
