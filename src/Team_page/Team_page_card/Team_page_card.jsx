import React from "react";
import "./team_page_card.css";
import Linkedin from "../../Assets/Linkedin.svg";
import Instagram from "../../Assets/Instagram.svg";
import MailID from "../../Assets/Mail.svg";
import Github from "../../Assets/Github.svg";
import Ujjawal from "../../Assets/CT-U.svg";
import Anmaya from "../../Assets/T-A.svg";
import Indrajit from "../../Assets/T-I.svg";
import Abbas from "../../Assets/T-Aa.svg";
import { Card } from "react-bootstrap";
const Team_page_card = () => {
  return (
    <section className="team_page_card">
      <div class="row ">
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Ujjawal} />
            <Card.Body>
              <Card.Title className="Team_card_title">Ujjawal Kumar</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a
                    href="https://www.linkedin.com/in/uj-kumar/"
                    target="blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a
                    href="https://www.instagram.com/lethal_omega/"
                    target="blank"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="mailto:kumar9ujjawal2014@gmail.com" target="blank">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="https://github.com/Ujjawal-kumar19" target="blank">
                    <img src={Github} alt="Github" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Anmaya} />
            <Card.Body>
              <Card.Title className="Team_card_title">
                Anmaya Mohapatra
              </Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a
                    href="https://www.linkedin.com/in/anmaya-mohapatra-722b80192"
                    target="blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a
                    href="https://instagram.com/thatbettermystery?igshid=YmMyMTA2M2Y="
                    target="blank"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="mailto:anmaya.m9@gmail.com" target="blank">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://" target="blank">
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
            <Card.Img variant="top" src={Indrajit} />
            <Card.Body>
              <Card.Title className="Team_card_title">Indrajit</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a
                    href="https://www.linkedin.com/in/indrajit-datar-397b46214?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2q1it1y7Q5%2Bi9liiPLWsHw%3D%3D"
                    target="blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="https://www.instagram.com/indu_1_5/" target="blank">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="mailto:indrajeetdatar18@gmail.com" target="blank">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://" target="blank">
                    <img src={Github} alt="Github" />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 center-col ">
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={Abbas} />
            <Card.Body>
              <Card.Title className="Team_card_title">Abbas</Card.Title>
              <div className="card-logo_item">
                <div className="card-logo">
                  <a
                    href="https://www.linkedin.com/in/abbas-mehdi-730b7b192/"
                    target="blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>

                <div className="card-logo">
                  <a
                    href="https://www.instagram.com/_stringmaker_/"
                    target="blank"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>

                <div className="card-logo">
                  <a href="mailto:abbas.mehdi.am.22@gmail.com" target="blank">
                    <img src={MailID} alt="Mail" />
                  </a>
                </div>
                <div className="card-logo">
                  <a href="http://" target="blank">
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
