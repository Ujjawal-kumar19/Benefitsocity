import React from "react";
import Slider from "react-slick";
import "./recent_added.css";
import LeftArrow from "../../Assets/left-arrow.svg";
import RightArrow from "../../Assets/right-arrow.svg";
import Recent_added_data from "./recent_added_data";
import { Card } from "react-bootstrap";

const Recent_added = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" className="slick-prev" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" className="slick-next" {...props} />
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="Recent_added_area" id="Recent_added_area">
      <div className="container">
        <div className="Recent_added_title">Explore the trending</div>
        <Slider {...settings} className="card_slider">
          {Recent_added_data.map((item, index) => {
            return (
              <div key={index} className="card_slider_item">
                <Card className="card_recent_added" style={{ width: "21rem" }}>
                  <a href={item.link} className="decoration" target="_blank">
                    <Card.Img
                      className="card_slider_item_img"
                      variant="top"
                      src={item.url}
                    />
                    <Card.Body className="card_body">
                      <Card.Title className="Recent_card_title">
                        {item.title}
                      </Card.Title>
                    </Card.Body>
                  </a>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Recent_added;
