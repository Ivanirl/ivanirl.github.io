import { useNavigate } from "react-router-dom";
import split from "../Resources/Jor-DSC00689-Edit.jpg";

export default function Split() {
  const navigate = useNavigate();

  const move= ()=>{
    navigate("./filler")
  }

  return (
    <div className="BigSplit">
      <div className="bgcircle"></div>
      <img src={split} />
      <div className="RightBoy">
        <h1>
          Creating Digital stories<span>One Frame At A Time</span>
        </h1>
        <button onClick={move} className="themebutton1">BOOK A CALL</button>
      </div>
    </div>
  );
}
