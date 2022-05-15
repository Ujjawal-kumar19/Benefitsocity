import React from "react";
import "./team_page.css";
import Team_page_card from "./Team_page_card/Team_page_card";
const Team_page = () => {
  return (
    <div className="Team_page" id="Team_page">
      <div class="container">
        <div className="Team-title">Title to be added here some suggustion</div>
        <div className="Team-des">Title to be added here some suggustion</div>
        <Team_page_card />
      </div>
    </div>
  );
};

export default Team_page;
