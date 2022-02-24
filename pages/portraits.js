import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portraitsData } from "../Data/PortraitsData";
function portraits() {
  return (
    <div className="relative">
      <Header />
      <div className="xl:max-w-screen-xl mx-auto">
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

      <Footer />
      <BookingModal />
    </div>
  );
}

export default portraits;
