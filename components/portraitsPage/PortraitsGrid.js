import Image from "next/image";
import React from "react";
import { portraitsData } from "../../Data/PortraitsData";

function PortraitsGrid() {
  return (
    <div className="contentContainer">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {portraitsData.map((portrait) => {
          const { image, id } = portrait;
          return (
            <div className="relative w-[413px] h-[620px] m-auto" key={id}>
              <Image
                src={image}
                alt="model portrait Image"
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

export default PortraitsGrid;
