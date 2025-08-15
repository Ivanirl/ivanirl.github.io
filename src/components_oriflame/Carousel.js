import herobiggy from "../Resources/Jor-DSC00689-Edit.jpg";

export default function Carousel() {
  return (
    <div className="BigCaro">
      <img src={herobiggy} />
      <div className="rootbeer">
        {" "}
          <h1>Welcome <br></br>and<br></br> some other shit!</h1>
          <span>Some filller text about our mission and stuff.</span>
          <button className="themebutton1">BOOK A CALL NOW</button>
      </div>
    </div>
  );
}
