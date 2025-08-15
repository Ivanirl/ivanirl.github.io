// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory store (replace with DB later)
let bookings = [];

// GET all booked dates
app.get("/api/bookings/dates", (req, res) => {
  const bookedDates = bookings.map((b) => b.date);
  res.json(bookedDates);
});

// POST new booking
app.post("/api/bookings", (req, res) => {
  const { name, email, phone, date, message } = req.body;

  if (!name || !email || !phone || !date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Check if date already booked
  const dateTaken = bookings.some(
    (b) => new Date(b.date).toDateString() === new Date(date).toDateString()
  );
  if (dateTaken) {
    return res.status(409).json({ error: "Date already booked" });
  }

  const newBooking = { name, email, phone, date, message };
  bookings.push(newBooking);

  console.log("✅ New booking added:", newBooking);
  res.status(201).json({ success: true, booking: newBooking });
});

// POST send email (simulated)
app.post("/api/send-email", (req, res) => {
  const { to, subject, text } = req.body;
  if (!to || !subject || !text) {
    return res.status(400).json({ error: "Missing email details" });
  }

  console.log("📧 Simulated Email Sent:");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("Text:", text);

  res.json({ success: true, message: "Email sent successfully (simulated)" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
