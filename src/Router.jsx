import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default Router;
