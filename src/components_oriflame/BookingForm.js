import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
// import './BookingForm.css'; // Custom styles
// In your React component or API service file
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

// Then use this base URL for your API calls
axios.get(`${API_BASE_URL}/api/bookings/dates`)

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [bookedDates, setBookedDates] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch booked dates from your backend when component mounts
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get('/api/bookings/dates');
        setBookedDates(response.data.map(dateStr => new Date(dateStr)));
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    };
    
    fetchBookedDates();
  }, []);

  // Function to check if a date is booked
  const isDateBooked = (date) => {
    return bookedDates.some(
      bookedDate => bookedDate.toDateString() === date.toDateString()
    );
  };

  // Filter out booked dates from the calendar
  const filterBookedDates = (date) => {
    return !isDateBooked(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!date) {
      setSubmitMessage('Please select a date');
      setIsSubmitting(false);
      return;
    }

    if (isDateBooked(date)) {
      setSubmitMessage('This date is already booked. Please select another date.');
      setIsSubmitting(false);
      return;
    }

    const bookingData = {
      name,
      email,
      phone,
      date: date.toISOString(),
      message
    };
    console.log(bookingData)

    try {
      // Send booking data to your backend
      const response = await axios.post('/api/bookings', bookingData);
      
      // Add the new booking date to the bookedDates array
      setBookedDates([...bookedDates, date]);
      
      // Send email (this would be handled by your backend)
      await axios.post('/api/send-email', {
        to: 'Ivanezeh@gmail.com', // Your business email
        subject: `New Booking from ${name}`,
        text: `You have a new booking:
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Date: ${date.toDateString()}
          Message: ${message}`
      });

      setShowSuccess(true);
      setSubmitMessage('Booking successful! We will contact you shortly.');
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setDate(null);
      setMessage('');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitMessage('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book an Appointment</h2>
      {showSuccess && (
        <div className="success-message">
          {submitMessage}
        </div>
      )}
      
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
        
        <div className="form-group">
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
          <label htmlFor="message">Additional Message (Optional)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />
        </div>
        
        {submitMessage && !showSuccess && (
          <div className="error-message">
            {submitMessage}
          </div>
        )}
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;