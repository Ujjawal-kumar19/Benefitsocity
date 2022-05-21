import React, { useState } from "react";
import Student_offer_page_card from "../Global/Student_offer_page_card/Student_offer_page_card";
import "./student_offer_page.css";
import Student_offer_page_data from "./Student_offer_page_data";

const Student_offer_page = () => {
  const [noOfElement, setNoOfElement] = useState(4);
  const slice = Student_offer_page_data.slice(0, noOfElement);
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
        <Student_offer_page_card data_card={slice} />
        <div className="Student_offer_page_btn_bar">
          <div className="line-center">
            <button
              className="btn d-block mb-4 mx-auto card-btn second-page-btn"
              onClick={() => {
                setNoOfElement(noOfElement + 4);
              }}
            >
              Load More
            </button>
          </div>
          <div className="line-left"></div>
          <div className="line-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Student_offer_page;
