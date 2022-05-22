import React from "react";
import "./student_offer_page_card.css";
const Student_offer_page_card = ({ data_card }) => {
  return (
    <>
      <div className="Student_offer_page_card_area py-4 py-lg-5 container ">
        <div className="row justify-content-center align-item-center">
          {data_card.map((item, index) => {
            return (
              <div
                key={index}
                className="Student_offer_card_item col-11 col-md-6 col-lg-3 mx-0 mb-4"
              >
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} className="card-img-top img_size" />
                  <div className="card-body">
                    <div className="text">
                      <h5 className="student_offer_card_title">{item.title}</h5>
                      <p className="student_offer_card_text">{item.body}</p>
                    </div>
                    <div className="connect">
                      <a
                        href={item.link}
                        className="btn btn-primary card-btn "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        To the official website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Student_offer_page_card;
