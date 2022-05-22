import React, { useState } from "react";
import { Link } from "react-router-dom";
import Student_offer_page_card from "../../Global/Student_offer_page_card/Student_offer_page_card";
import Student_offer_page_data from "../../Student_offer_page/Student_offer_page_data";
import "./student_offer.css";
const Student_offer = () => {
  const [noOfElement, setNoOfElement] = useState(4);
  const slice = Student_offer_page_data.slice(0, noOfElement);
  return (
    <div className="Student-offer-area" id="Student-offer-area">
      <div className="container">
        <div className="Student-offer-title">Student offer </div>
        <Student_offer_page_card data_card={slice} />

        <Link
          className="To-student-offer"
          to="/Student_offer_page"
          style={{ textDecoration: "none" }}
        >
          <div className="btn btn-primary d-block mb-4 mx-auto view-more-btn">
            View More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Student_offer;
