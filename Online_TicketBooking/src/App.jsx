import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/pages/Home";
import TravelBooking from "./Components/pages/TravelBooking";
import MovieBooking from "./Components/pages/MovieBooking";
import SuggestedPlaces from "./Components/pages/SuggestedPlaces";
import Checkout from "./Components/pages/Checkout";
import Confirmation from "./Components/pages/Confirmation";
import AdminDashboard from "./Components/pages/admin/AdminDashboard";
import ManageEvents from "./Components/pages/admin/ManageEvents";
import ManageTravel from "./Components/pages/admin/ManageTravel";
import SeatAvailability from "./Components/pages/admin/SeatAvailability";
import UserManagement from "./Components/pages/admin/UserManagement";
import Reports from "./Components/pages/admin/Reports";
import Promotions from "./Components/pages/admin/Promotions";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import TrainBooking from "./Components/pages/TrainBooking";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelBooking />} />
        <Route path="/movies" element={<MovieBooking />} />
        <Route path="/suggested-places" element={<SuggestedPlaces />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<ManageEvents />} />
        <Route path="/admin/travel" element={<ManageTravel />} />
        <Route path="/admin/seats" element={<SeatAvailability />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/promotions" element={<Promotions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/train-booking" element={<TrainBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
