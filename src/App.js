import React from "react"
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/Homepage";
import './App.css';
import Reservations from "./pages/Reservations";
import Confirmation from "./pages/ConfirmationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
