import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

// Import Pages
import Home from "../src/pages/Home";
import PropertyDetails from "../src/pages/PropertyDetails";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-purple-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
