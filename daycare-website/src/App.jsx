import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Classrooms from "./pages/Classrooms";
import Staff from "./pages/Staff";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}
export default App;
