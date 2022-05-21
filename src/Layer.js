import React from "react";
import Hero from "./Landing_Page/Hero/Hero";
import MultipleItems from "./Landing_Page/Recent_added/Recent_added";
import Whyus from "./Landing_Page/Whyus/Whyus";
import Student_offer from "./Landing_Page/Student_offer/Student_offer";

const Layer = () => {
  return (
    <div>
      <Hero />
      <MultipleItems />
      <Whyus />
      <Student_offer />
    </div>
  );
};

export default Layer;
