import React, { useState } from "react";
import { HomeSliderData } from "../Data/HomeSliderData";

function HomeImageSlider({ slides }) {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="sliderContainer">
      {HomeSliderData.map((slide, index) => {
        return (
          <img
            src={slide.image}
            alt="Portrait"
            className="sliderImages"
            key={index}
          />
        );
      })}
    </div>
  );
}

export default HomeImageSlider;
