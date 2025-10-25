import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TopSelling from "./Pages/TopSelling";
import NewArrivals from "./Pages/NewArrivals";
import Audio from "./Pages/Audio";
import SmartPhones from "./Pages/SmartPhones";
import ProductDetails from "./Pages/ProductDetails";
import Sale from "./Components/Sale";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default page jab website open ho */}
        <Route path="/" element={<Sale />} />

        {/* Navbar routes */}
        <Route path="/sale" element={<Sale />} />
        <Route path="/top-selling" element={<TopSelling />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/smart-phones" element={<SmartPhones />} />

        {/* Agar koi unknown URL ho, default to Sale */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
