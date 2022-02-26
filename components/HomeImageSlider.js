import Image from "next/image";
import React from "react";
import { HomeSliderData } from "../Data/HomeSliderData";

function HomeImageSlider({ slides }) {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="sliderContainer">
      <div className="flex">
        {HomeSliderData.map((slide, index) => {
          return (
            <div
              className="relative w-[413px] h-[620px] mx-2 bg-red-500"
              key={index}
            >
              <Image
                src={slide.image}
                alt="Portrait"
                layout="fill"
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeImageSlider;
