import { useNavigate } from "react-router-dom";
import split from "../Resources/ShowcaseForSafenest.png";

export default function Split() {
  const navigate = useNavigate();

  const move = () => {
    navigate("./filler");
  };

  return (
    <div className="BigSplit">
      <div className="bgcircle"></div>
      <img src={split} />
      <div className="RightBoy">
        <h1>
          SafeNest.<span>Protect Your Kids.</span>
        </h1>
        <span className="bot">
          With SafeNest you can keep track <br></br>of your children and make sure they are safe.
        </span>

        <div className="buttonHolder">
          <button onClick={move} className="themebutton1">
            APP STORE
          </button>
          <button onClick={move} className="themebutton2">
            PLAY STORE
          </button>
        </div>
      </div>
    </div>
  );
}
