import React from "react";
import { portraitsData } from "../../Data/PortraitsData";

function PortraitsGrid() {
  return (
    <div className="contentContainer">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-1">
        {portraitsData.map((portrait, index) => {
          return (
            <img
              src={portrait.image}
              alt="model portrait Image"
              key={index}
              className="h-[500px] xl:h-[620px] xl:mt-2 mb-2 mt-6 mx-auto "
            />
          );
        })}
      </div>
    </div>
  );
}

export default PortraitsGrid;
