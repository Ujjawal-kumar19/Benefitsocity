import "./Styles/App.css";
import React, { useLayoutEffect } from "react";
import Layer from "./Layer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Global/Navbar/Navbar";
import Footer from "./Global/Footer/Footer";
import Team_page from "./Team_page/Team_page";
import Student_offer_page from "./Student_offer_page/Student_offer_page";
function App() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layer />} />
        <Route path="/Student_offer_page" element={<Student_offer_page />} />
        <Route path="/Team_page" element={<Team_page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
