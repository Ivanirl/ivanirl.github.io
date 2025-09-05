import herobiggy from "../Resources/Jor-DSC00727-Edit.jpg";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const navigate = useNavigate();
  const move = () => {
    navigate("./filler");
  };

  return (
    <div className="BigCaro">
      <img src={herobiggy} />
      <div className="rootbeer">
        <div className="wrap">
          <h1 className="top" style={{ lineHeight: "0.4em" }}>
            <span style={{ lineHeight: "0em",}}>Capture </span>
            <br></br>Your digital story.
          </h1>
        </div>
        <div className="wrap">
          <span className="bot">
            Do you need a <span className="switch">Photographer?</span>
          </span>
          <span>Some filller text about our mission and stuff.</span>
          <button onClick={move}>BOOK A CALL NOW</button>
        </div>
      </div>
    </div>
  );
}
