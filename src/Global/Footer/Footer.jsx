import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const countEl = document.getElementById("count");

  updateVisitCount();

  function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/team9/ujjawal/?amount=1")
      .then((res) => res.json())
      .then((res) => {
        countEl.innerHTML = res.value;
      });
  }

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="Count-number text-center ">
            <p>This page was viewed</p>
            <h1 id="count">0</h1>
            <p>times</p>
          </div>
          <div className="made-with-love">
            <div className="text-center">
              Developed by the <span> </span>
              <Link className="footer-team" to="/Team_page">
                team 9
              </Link>
              <span> </span>
              of Bharati Vidyapeeth Department of Engineering and Technology -
              Navi Mumbai
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
