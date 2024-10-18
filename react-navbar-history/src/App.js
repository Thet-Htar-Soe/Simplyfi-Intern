// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import SomethingPage from "./components/SomethingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home/about/something" element={<SomethingPage />} />
      </Routes>
    </div>
  );
}

export default App;
