import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PortraitsGrid from "../components/portraitsPage/PortraitsGrid";
function portraits() {
  return (
    <div className="relative">
      <Header />
      <PortraitsGrid />
      <Footer />
      <BookingModal />
    </div>
  );
}

export default portraits;
