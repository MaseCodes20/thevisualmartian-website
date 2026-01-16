import Image from "next/image";
import React from "react";
import { HomeSliderData } from "../Data/HomeSliderData";
import Marquee from "react-fast-marquee";

function HomeImageSlider({ slides }) {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="sliderContainer w-full">
      <Marquee gradient={false} pauseOnClick={true} speed={20} play={true}>
        <div className="flex flex-row">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative shrink-0 w-[380px] xl:w-[413px] h-[440px] xl:h-[590px]"
            >
              <Image
                src={slide.image}
                alt="Slider Image"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 380px, 413px"
                priority={slide.id <= 2}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default HomeImageSlider;
