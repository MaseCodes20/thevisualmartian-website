import React, { useState } from "react";
import { HomeSliderData } from "../Data/HomeSliderData";

function HomeImageSlider({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  console.log(HomeSliderData);
  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const previousSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

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
