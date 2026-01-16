import Image from "next/image";
import { portraitsData } from "../../Data/PortraitsData";

function PortraitsGrid() {
  return (
    <div className="contentContainer">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {portraitsData.map((portrait) => {
          const { image, id } = portrait;
          return (
            <div 
            key={id} 
            /* 2. Use aspect-ratio to maintain the 413x620 portrait look (approx 2:3) */
            className="relative w-full aspect-2/3 overflow-hidden bg-gray-100"
          >
            <Image
              src={image}
              alt="model portrait Image"
              fill
              /* 3. 'object-cover' ensures the image fills the 8px gap area perfectly */
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortraitsGrid;
