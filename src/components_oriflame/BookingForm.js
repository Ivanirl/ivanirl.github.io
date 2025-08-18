import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [bookedDates, setBookedDates] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch booked dates
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/bookings/dates`, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
          setBookedDates(response.data.map((d) => new Date(d)));
        } else {
          console.error("Unexpected status:", response.status, response.data);
        }
      } catch (error) {
        console.error("Error fetching booked dates:", error.message);
        setSubmitMessage("Could not load booked dates.");
      }
    };

    fetchBookedDates();
  }, []);

  const isDateBooked = (date) =>
    bookedDates.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    );

  const filterBookedDates = (date) => !isDateBooked(date);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(""); // clear old

    if (!date) {
      setSubmitMessage("Please select a date");
      setIsSubmitting(false);
      return;
    }

    if (isDateBooked(date)) {
      setSubmitMessage(
        "This date is already booked. Please select another date."
      );
      setIsSubmitting(false);
      return;
    }

    const bookingData = {
      name,
      email,
      phone,
      date: date.toISOString(),
      message,
    };

    try {
      // 1️⃣ Save booking
      const bookingRes = await axios.post(
        `${API_BASE_URL}/api/bookings`,
        bookingData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (bookingRes.status !== 201 && bookingRes.status !== 200) {
        throw new Error(`Unexpected status ${bookingRes.status}`);
      }

      // Update booked dates locally
      setBookedDates((prev) => [...prev, date]);

      // 2️⃣ Send email
      const emailRes = await axios.post(
        `${API_BASE_URL}/api/send-email`,
        {
          to: "Ivanezeh@gmail.com",
          subject: `New Booking from ${name}`,
          text: `You have a new booking:
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Date: ${date.toDateString()}
          Message: ${message}`,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (emailRes.status !== 200) {
        console.warn("Email sending failed:", emailRes.status, emailRes.data);
      }

      // Success
      setShowSuccess(true);
      setSubmitMessage("Booking successful! We will contact you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setDate(null);
      setMessage("");

      setTimeout(() => {
        setShowSuccess(false);
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      console.error("Booking failed:", error.message);
      setSubmitMessage(`Failed to submit booking: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Schedule a call</h2>
      {showSuccess && <div className="success-message">{submitMessage}</div>}

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group" id="last">
          {" "}
          {submitMessage && !showSuccess && (
            <div className="error-message">{submitMessage}</div>
          )}
          <label htmlFor="date">Appointment Date</label>
          <DatePicker
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            filterDate={filterBookedDates}
            placeholderText="Select a date"
            dateFormat="MMMM d, yyyy"
            required
            inline
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Description</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
