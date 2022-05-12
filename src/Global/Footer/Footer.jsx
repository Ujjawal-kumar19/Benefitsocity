import React from "react";
import "./footer.css";
//import Location from "../../Assets/map_place.svg";
//import Instagram from "../../Assets/Instagram.svg";
//import Linkedin from "../../Assets/Linkedin.svg";
//import Mail from "../../Assets/Mail.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 col-xs-12"></div>
          <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">
            <div className="footer-left">
              <div className="footer-title">Location Of Our HQ</div>
              <div className="footer-content-left">
                <img
                  className="location-footer"
                  src={Location}
                  alt="Location"
                />
                <div className="footer-desc-text">
                  BVP Department of Engineering and Technology - Navi Mumbai
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 col-xs-12"></div>
          <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-xs-12">
            <div className="footer-right">
              <div className="footer-title">Contact Us</div>
              <div className="footer-social-content">
                <a href="http://" target="_blank">
                  <img src={Instagram} alt="" />
                </a>
                <a href="http://" target="_blank">
                  <img src={Linkedin} alt="" />
                </a>
                <a href="http://" target="_blank">
                  <img src={Mail} alt="" />
                </a>
              </div>
            </div>
          </div> */}
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
