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
        {" "}
        <h1 className="top" style={{ lineHeight: "0.6em", }}>
          Welcome <br></br>
          <span
            style={{
              fontSize: "0.8em",
              padding: 0,
              lineHeight: 1,
              opacity: 0.4,
            }}
          >
            &
          </span>
          <br></br>
          <span className="bot">Some other Shit!</span>
        </h1>
        <span>Some filller text about our mission and stuff.</span>
        <button className="themebutton1" onClick={move}>BOOK A CALL NOW</button>
      </div>
    </div>
  );
}
