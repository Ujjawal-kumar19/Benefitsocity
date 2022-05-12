import "./hero.css";
import React from "react";
import Placeholder from "./../../Assets/placeholder.svg";

const Hero = () => {
  return (
    <div className="hero-area" id="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
            <div className="hero-left">
              <div className="hero-title">
                Title to be added here some suggustion
              </div>
              <div className="discription">
                <div className="dec-bar"></div>
                <div className="hero-Des">
                  Lorem text needed Lorem text needed Lorem text needed Lorem
                  text needed
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-xl-1 col-md-12 col-sm-12 col-xs-12"></div>
          <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
            <div className="hero-right">
              <div className="hero-img">
                <img className="personi" src={Placeholder} alt="placeholder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
