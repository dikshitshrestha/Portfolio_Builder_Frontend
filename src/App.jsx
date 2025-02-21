import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Beginners from "./components/Beginners";
import Marketers from "./components/Marketers";
import Professionals from "./components/Professionals";
import Hosting from "./components/Hosting";
import Customization from "./components/Customization";
import PageEnd from "./components/PageEnd";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Landing />
            </>
          }
        />
        <Route path="/beginners" element={<Beginners />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/marketers" element={<Marketers />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route
          path="/customization"
          element={
            <>
              <Customization />
            </>
          }
        />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <PageEnd />
    </Router>
  );
}
