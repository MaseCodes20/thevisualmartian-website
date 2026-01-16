import Image from "next/image"
import Marquee from "react-fast-marquee"
import type { ImageDataT } from "../types"

type HomeImageSliderProps = {
  slides: ImageDataT[]
}

function HomeImageSlider({ slides }: HomeImageSliderProps) {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="sliderContainer w-full">
      <Marquee gradient={false} pauseOnClick={true} speed={20} play={true} className="">
        <div className="flex flex-row">
          {slides.map(slide => (
            <div key={slide.id} className="relative w-[380px] xl:w-[413px] h-[440px] xl:h-[560px]">
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
  )
}

export default HomeImageSlider
