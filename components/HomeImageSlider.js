import Image from "next/image";
import React from "react";
import { HomeSliderData } from "../Data/HomeSliderData";
import Marquee from "react-fast-marquee";

function HomeImageSlider({ slides }) {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="sliderContainer ">
      <Marquee gradient={false} pauseOnClick={true}>
        <div className="flex justify-center items-center min-w-max ">
          {HomeSliderData.map((slide) => {
            const { image, id } = slide;
            return (
              <div
                className="relative w-[380px] xl:w-[413px] h-[440px] xl:h-[590px] "
                key={id}
              >
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
      </Marquee>
    </div>
  );
}

export default HomeImageSlider;
