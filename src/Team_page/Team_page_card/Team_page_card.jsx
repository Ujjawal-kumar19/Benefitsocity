import React from "react";
import "./team_page_card.css";
import Linkedin from "../../Assets/LinkedIN.svg";
import Instagram from "../../Assets/Instagram.svg";
import MailID from "../../Assets/Mail.svg";
import Github from "../../Assets/Github.svg";
import Ujjawal from "../../Assets/CT-U.svg";
import { Card } from "react-bootstrap";
const Team_page_card = () => {
  return (
    <section className="team_page_card">
      <div class="row ">
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Ujjawal} />
            <Card.Body>
              <Card.Title className="Team_card_title">Card Title</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a href="http://">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://">
                    <img src={Github} alt="Github" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Ujjawal} />
            <Card.Body>
              <Card.Title className="Team_card_title">Card Title</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a href="http://">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://">
                    <img src={Github} alt="Github" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Ujjawal} />
            <Card.Body>
              <Card.Title className="Team_card_title">Card Title</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a href="http://">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://">
                    <img src={Github} alt="Github" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Ujjawal} />
            <Card.Body>
              <Card.Title className="Team_card_title">Card Title</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a href="http://">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="http://">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://">
                    <img src={Github} alt="Github" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team_page_card;
