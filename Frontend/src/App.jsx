import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Signup from "./pages/signup/index";
import Signin from "./pages/signin/index";
import React from "react";
export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element="No page found" />
    </Routes>
  );
}
