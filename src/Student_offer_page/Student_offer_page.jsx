import React from "react";
import Student_offer_card from "../Global/Student_offer_card/Student_offer_card";
import "./student_offer_page.css";

const Student_offer_page = () => {
  return (
    <div className="Student_offer_page">
      <div class="container">
        <div className="Student_offer_page_title">
          Title to be added here some suggustion
        </div>
        <div className="Student_offer_page_des">
          Lorem text needed Lorem text needed Lorem text needed Lorem text
          needed
        </div>
        <div className="Student_offer_page_card_area">
          <Student_offer_card />
        </div>
      </div>
    </div>
  );
};

export default Student_offer_page;
