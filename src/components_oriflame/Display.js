import first from "../Resources/Head.JPG";
import { motion } from "framer-motion";
import BookingForm from "./BookingForm";



export default function Display(props) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="picturelayout"
    >
      <div className="rowBSS">
        {/* one big and two small */}
        <div className="solo">
          <img src={first} />
        </div>
        <div className="rowy">
          <div className="ditto">
            <img src={first} />
            <img src={first} />
          </div>

          <div className="ditto">
            <img src={first} />
            <img src={first} />
          </div>
        </div>
      </div>
      <div className="rowBSS">
        {/* one big and two small */}
        <div className="rowy">
          <div className="ditto">
            <img src={first} />
            <img src={first} />
          </div>

          <div className="ditto">
            <img src={first} />
            <img src={first} />
          </div>
        </div>
        <div className="solo">
          <img src={first} />
        </div>
      </div>
      <div className="rowBSS">
        {/* one big and two small */}
        <div className="solo">
          <img src={first} />
        </div>
        <div className="rowy">
          <div className="ditto">
            <img src={first} />
            <img src={first} />
          </div>

          <div className="ditto">
            <img src={first} />
            <img src={first} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
