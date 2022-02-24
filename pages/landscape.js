import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function landscape() {
  return (
    <div className="relative h-screen">
      <Header />
      <h1 className="centeredOnScreen">Coming Soon!</h1>
      <Footer />
      <BookingModal />
    </div>
  );
}

export default landscape;
