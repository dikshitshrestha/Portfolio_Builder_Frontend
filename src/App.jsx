import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Beginners from "./components/Beginners";
import Marketers from "./components/Marketers";
import Professionals from "./components/Professionals";
import Hosting from "./components/Hosting";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hosting />
    </div>
  );
}
