import Head from "next/head";
import React from "react";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function about() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Made by Mase Codes" />
        <link rel="icon" href="/ToddMCOMPLXCM.jpg" />
      </Head>
      <div className="relative h-screen">
        <Header />
        <div className="centeredOnScreen md:w-fit">
          <div className="md:flex items-center">
            <img
              src="about/-1720625593_IMG_20190129_194004_963_407382.jpg"
              alt=""
              className="h-[200px]"
            />
            <p className="md:ml-5 md:w-40 mt-2 md:mt-0">
              {`I'm`} a visual artist based in NYC, portrait and lifestyle
              photographer, videographer and graphic artist. Born in Grenada and
              raised in Brooklyn, NY.{" "}
            </p>
          </div>
          <div className="md:flex mt-2 md:mt-5 md:justify-center md:items-center ">
            <img
              src="/about/1828229791_IMG_20190312_160655_636_1829679.jpg"
              alt=""
              className="md:h-[200px]"
            />
            <div className="md:ml-5 mt-2 md:mt-0">
              <div className="italic">
                <p>{`"`} Life is like a camera</p>
                <p>Focus on what is important</p>
                <p>Capture the good times</p>
                <p>Develop from the negatives</p>
                <p>And if things {`don't`} work out</p>
                <p>Take another shot{`"`}</p>
                <p className="text-center">anonymous</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}

export default about;
