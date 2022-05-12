import "./Styles/App.css";
import Layer from "./Layer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Global/Navbar/Navbar";
import Footer from "./Global/Footer/Footer";
import Team_page from "./Team_page/Team_page";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layer />} />
        <Route path="/Team_page" element={<Team_page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
