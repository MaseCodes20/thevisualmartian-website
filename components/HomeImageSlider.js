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
        {HomeSliderData.map((slide) => {
          const { image, id } = slide;
          return (
            <div className="relative w-[413px] h-[620px] mx-2" key={id}>
              <Image
                src={image}
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
