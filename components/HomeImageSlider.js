import Image from "next/image";
import React from "react";
import { HomeSliderData } from "../Data/HomeSliderData";

function HomeImageSlider({ slides }) {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(slides[0]);

  return (
    <div className="sliderContainer ">
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex justify-center items-center min-w-max ">
          {HomeSliderData.map((slide) => {
            const { image, id } = slide;
            return (
              <div className="relative w-[413px] h-[620px] mr-2" key={id}>
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
    </div>
  );
}

export default HomeImageSlider;
