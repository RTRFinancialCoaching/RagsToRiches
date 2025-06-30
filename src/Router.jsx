import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Services from "./pages/Services";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Services/:sectionId" element={<Services />} />
    </Routes>
  );
};

export default Router;
