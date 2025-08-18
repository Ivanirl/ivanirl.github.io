import Display from "../components_oriflame/Display";
import NavBar from "../components_oriflame/navbar";
import BookingForm from "../components_oriflame/BookingForm";

export default function Filler() {
  return (
    <div>
      <NavBar />
      <div className="ohio">
        <div className="picTower">
          <div className="textBox">
            <h1>Book a call</h1>
            <span>
              Fill in your information and choose a date for<br></br> the call and we'll
              get back to you on the chosen<br></br> date.
            </span>
          </div>
        </div>
        <div className="header">
          <BookingForm></BookingForm>
        </div>
      </div>
    </div>
  );
}
