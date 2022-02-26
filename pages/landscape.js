import Head from "next/head";
import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function landscape() {
  return (
    <div>
      <Head>
        <title>Landscape</title>
        <meta name="description" content="Made by Mase Codes" />
        <link rel="icon" href="/ToddMCOMPLXCM.jpg" />
      </Head>
      <div className="relative h-screen">
        <Header />
        <h1 className="centeredOnScreen">Coming Soon!</h1>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}

export default landscape;
