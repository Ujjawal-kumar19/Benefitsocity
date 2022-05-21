import React from "react";
import "./whyus.css";
const Whyus = () => {
  return (
    <div className="whyus-area" id="whyus-area">
      <div className="container">
        <div className="Whyus-title">Our vision and mision </div>
        <div className="whyus-body">
          <ul>
            <li>
              <div className="subtitle">Mission</div>
              <p className="whyus-pbody">
                To spead awareness amongst students of the facilities provides
                to them for an affordable living.
              </p>
            </li>
            <li>
              <div className="subtitle">Vision</div>
              <p className="whyus-pbody">
                To encourage students to use the amenities provided to ensure
                they enjoy every part of life at a budget. Also, provide
                businesses with more costumers who were unaware of the special
                consideration provided to them.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
