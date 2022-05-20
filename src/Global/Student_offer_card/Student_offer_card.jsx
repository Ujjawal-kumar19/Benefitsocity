import React from "react";
import "./student_offer_card.css";
import Student_offer_page_data from "../../Student_offer_page/Student_offer_page_data";
import { Card, Button } from "react-bootstrap";
const Student_offer_card = () => {
  return (
    <div className="Student_offer_card">
      {Student_offer_page_data.map((item, index) => {
        return (
          <div key={index} className="Student_offer_card_item">
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="student_offer_card_title">
                  {item.title}
                </Card.Title>
                <Card.Text className="student_offer_card_body">
                  {item.body}
                </Card.Text>
                <Button
                  className="card-btn"
                  variant="primary"
                  onClick={() => window.open(item.link)}
                >
                  To the official website
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Student_offer_card;
