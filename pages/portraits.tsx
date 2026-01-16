import Head from "next/head";
import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PortraitsGrid from "../components/portraitsPage/PortraitsGrid";

function portraits() {
  return (
    <div>
      <Head>
        <title>Portraits</title>
        <meta name="description" content="Made by Mase Codes" />
        <link rel="icon" href="/ToddMCOMPLXCM.jpg" />
      </Head>
      <div className="relative">
        <Header />
        <PortraitsGrid />
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}

export default portraits;
