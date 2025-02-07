import React, { useState } from "react";
import "../Home.css";

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1 className="title">One Ticket Away from Your Next Adventure!</h1>
          <p className="subtitle">Find the best travel deals, tickets, and vacation packages</p>
          <button className="explore-button">Start Your Journey</button>
        </div>
      </div>

      {/* Travel Assistance Section */}
      <div className="section travel-assistance">
        <h2>24/7 Travel Assistance</h2>
        <p>We are here to help you with any travel queries and concerns.</p>
        <img src="/assets/travel-assistance.jpg" alt="Travel Assistance" />
      </div>

      {/* Ticket Booking Section */}
      <div className="section ticket-booking">
        <h2>Book Your Tickets</h2>
        <div className="booking-form">
          <input type="text" placeholder="Enter Source Name" value={source} onChange={(e) => setSource(e.target.value)} />
          <input type="text" placeholder="Enter Destination Name" value={destination} onChange={(e) => setDestination(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <button className="book-button">Search Tickets</button>
        </div>
        <img src="/assets/booking.jpg" alt="Ticket Booking" />
      </div>

      {/* Movies Section */}
      <div className="section movies-section">
        <h2>Latest Movies</h2>
        <div className="movies-grid">
          <div className="movie-card"><img src="/assets/movie1.jpg" alt="Movie 1" /><p>Movie 1</p></div>
          <div className="movie-card"><img src="/assets/movie2.jpg" alt="Movie 2" /><p>Movie 2</p></div>
          <div className="movie-card"><img src="/assets/movie3.jpg" alt="Movie 3" /><p>Movie 3</p></div>
        </div>
      </div>

      {/* Concerts and Events */}
      <div className="section concerts-section">
        <h2>Upcoming Concerts & Events</h2>
        <div className="concerts-grid">
          <div className="concert-card"><img src="/assets/concert1.jpg" alt="Concert 1" /><p>Concert 1</p></div>
          <div className="concert-card"><img src="/assets/concert2.jpg" alt="Concert 2" /><p>Concert 2</p></div>
          <div className="concert-card"><img src="/assets/concert3.jpg" alt="Concert 3" /><p>Concert 3</p></div>
        </div>
      </div>

      {/* Holiday Packages */}
      <div className="section holiday-packages">
        <h2>Exclusive Holiday Packages</h2>
        <p>Plan your perfect getaway with our customized vacation deals.</p>
        <img src="/assets/holiday.jpg" alt="Holiday Trips" />
      </div>

      {/* Discount Offers */}
      <div className="section discount-offers">
        <h2>Special Discounts & Offers</h2>
        <p>Save more with our exclusive discounts on travel and entertainment.</p>
        <img src="/assets/discount.jpg" alt="Discount Offers" />
      </div>

      {/* Credit Card Discounts */}
      <div className="section credit-card-discounts">
        <h2>Credit Card Discounts</h2>
        <p>Enjoy additional savings when booking with partner credit cards.</p>
        <img src="/assets/credit-card.jpg" alt="Credit Card Discounts" />
      </div>

      {/* Additional Services */}
      <div className="section additional-services">
        <h2>More Travel Services</h2>
        <p>Compare and book hotels, vacations, and rental cars with ease.</p>
        <img src="/assets/services.jpg" alt="Travel Services" />
      </div>

      {/* Testimonials Section */}
      <div className="section testimonials-section">
        <h2>What Our Customers Say</h2>
        <p>"Best travel experience! Highly recommended."</p>
        <p>"Easy booking process and great customer support."</p>
        <img src="/assets/testimonials.jpg" alt="Happy Customers" />
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
