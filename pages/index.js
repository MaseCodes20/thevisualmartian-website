import Head from "next/head";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeImageSlider from "../components/HomeImageSlider";
import { HomeSliderData } from "../Data/HomeSliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Visual Martian</title>
        <meta name="description" content="Made by Mase Codes" />
        <link rel="icon" href="" />
      </Head>
      <div className="relative h-screen">
        <Header />
        {/* Image slider */}

        <HomeImageSlider slides={HomeSliderData} />

        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}
