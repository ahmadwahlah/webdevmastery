import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Dashboard />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
