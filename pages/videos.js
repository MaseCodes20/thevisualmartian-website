import Head from "next/head";
import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function videos() {
  return (
    <div>
      <Head>
        <title>Videos</title>
        <meta name="description" content="Made by Mase Codes" />
        <link rel="icon" href="/ToddMCOMPLXCM.jpg" />
      </Head>
      <div className="relative">
        <Header />
        <div className="contentContainer pt-20 pb-20 w-full">
          <div className="text-center">
            <h1 className="font-bold">Music Videos</h1>
            <iframe
              className="mx-auto my-4 xl:w-[560px] xl:h-[315px]"
              src="https://www.youtube.com/embed/rfa55wFnln4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center my-5 border-t-2">
            <h1 className="font-bold mt-4">Drone Footage</h1>
            <div className="xl:grid grid-cols-2 justify-between items-center">
              <iframe
                className="mx-auto my-4 xl:w-[560px] xl:h-[315px]"
                src="https://www.youtube.com/embed/EjTAREBBjHw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="mx-auto my-4 xl:w-[560px] xl:h-[315px]"
                src="https://www.youtube.com/embed/Eq3gSeQ3TQ8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="mx-auto my-4 xl:w-[560px] xl:h-[315px]"
                src="https://www.youtube.com/embed/V0x_yk82yqw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="mx-auto my-4 xl:w-[560px] xl:h-[315px]"
                src="https://www.youtube.com/embed/KI8xn1tsWtM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}

export default videos;
