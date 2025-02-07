import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Home.css";


const offers = [
  {
    img: "https://your-image-link.com/offer1.jpg",
    title: "Tickets!",
    validity: "Valid till: 15th Feb'25",
  },
  {
    img: "https://your-image-link.com/offer2.jpg",
    title: "₹1!",
    validity: "Valid till: *Limited Period Offers",
  },
  {
    img: "https://your-image-link.com/offer3.jpg",
    title: "Special Train",
    validity: "Valid till: Limited Period",
  },
];

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-orange-500 py-4 text-center text-white text-2xl font-bold">
        Train Ticket Booking
      </div>

      {/* Booking Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-3/4 max-w-3xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="input-group">
            <label className="block font-semibold text-gray-700">From</label>
            <input
              type="text"
              placeholder="Enter Source Name"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="block font-semibold text-gray-700">To</label>
            <input
              type="text"
              placeholder="Enter Destination Name"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="block font-semibold text-gray-700">Departure</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <button className="search-button">SEARCH TRAINS</button>
      </div>

      {/* Offers Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8 w-3/4 max-w-4xl relative">
        <h2 className="text-blue-600 text-xl font-semibold text-center border-b pb-2">
          Offers
        </h2>
        <p className="text-gray-500 text-center mb-4">Trains offers for you</p>

        <div className="flex items-center overflow-hidden relative">
          <button onClick={prevSlide} className="carousel-btn left-0">
            <FaChevronLeft size={20} />
          </button>

          <div className="flex gap-4 transition-transform duration-300">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={offer.img} alt={offer.title} className="offer-image" />
                <h3 className="font-semibold mt-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm">{offer.validity}</p>
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className="carousel-btn right-0">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">Why Book With Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>No Cancellation Fee</h3>
            <p>Get full refunds on cancellations.</p>
          </div>
          <div className="feature-card">
            <h3>Confirmed Tickets</h3>
            <p>Guaranteed seat confirmation.</p>
          </div>
          <div className="feature-card">
            <h3>No Payment Fee</h3>
            <p>Zero extra charges via UPI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
