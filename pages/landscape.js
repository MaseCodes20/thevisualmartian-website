import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function landscape() {
  return (
    <div className="relative">
      <Header />
      <Footer />
      <BookingModal />
    </div>
  );
}

export default landscape;
