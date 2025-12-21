import DoctorDetails from "./pages/DoctorsDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookAppointment from "./pages/BookAppointment";
import ConfirmAppointment from "./pages/ConfirmAppointment";

import { useState } from "react";
import Navbar from "./component/NavBar";
import Home from "./pages/Home.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  const [mood, setMood] = useState(false);
  return (
    <div className={`${mood && "dark"}`}>
      <BrowserRouter>
        <Navbar mood={mood} setMood={setMood} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/book/:id" element={<BookAppointment />} />
            <Route path="/confirm" element={<ConfirmAppointment />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
