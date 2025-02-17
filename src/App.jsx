import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Beginners from "./components/Beginners";
import Marketers from "./components/Marketers";
import Professionals from "./components/Professionals";
import Hosting from "./components/Hosting";
import Customization from "./components/Customization";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Landing />
        </>
      ),
    },
    {
      path: "/beginners",
      element: (
        <>
          <Navbar />
          <Beginners />
        </>
      ),
    },
    {
      path: "/professionals",
      element: (
        <>
          <Navbar />
          <Professionals />
        </>
      ),
    },
    {
      path: "/marketers",
      element: (
        <>
          <Navbar />
          <Marketers />
        </>
      ),
    },
    {
      path: "/hosting",
      element: (
        <>
          <Navbar />
          <Hosting />
        </>
      ),
    },
    {
      path: "/customization",
      element: (
        <>
          <Navbar />
          <Customization />
        </>
      ),
    },
    {
      path: "/landing",
      element: (
        <>
          <Navbar />
          <Landing />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
