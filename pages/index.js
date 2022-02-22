import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>The Visual Martian</title>
        <meta name="description" content="Made by Mase Codes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen">
        <Header />
        {/* Image slider */}
        <h1 className="text-center font-bold">The Visual Martian</h1>
        <Footer />
      </div>
    </div>
  );
}
