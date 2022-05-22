import React from "react";
import "./team_page.css";
import Team_page_card from "./Team_page_card/Team_page_card";
const Team_page = () => {
  return (
    <div className="Team_page" id="Team_page">
      <div class="container">
        <div className="Team-title">Team 9 </div>
        <div className="Team-des">
          We aim to provide an all-in stop for all your coupon needs!{" "}
        </div>
        <Team_page_card />
      </div>
    </div>
  );
};

export default Team_page;
