import Head from "next/head";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function videos() {
  const droneVideos = [
    "EjTAREBBjHw",
    "Eq3gSeQ3TQ8",
    "V0x_yk82yqw",
    "KI8xn1tsWtM"
  ];

  return (
    <div>
      <Head>
        <title>Videos | The Visual Martian</title>
        <meta name="description" content="Cinematography and Drone Footage" />
        <link rel="icon" href="/ToddMCOMPLXCM.jpg" />
      </Head>

      <div className="relative min-h-screen">
        <Header />

        <main className="contentContainer pt-24 pb-20 px-4">
          <section className="text-center mb-12">
            <h1 className="text-2xl font-bold mb-6">Music Videos</h1>
            <div className="max-w-[800px] mx-auto aspect-video">
              <iframe
                className="w-full h-full rounded-md shadow-lg"
                src="https://www.youtube.com/embed/rfa55wFnln4"
                title="Featured Music Video"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className="text-center mt-10 border-t-2 border-pink-500 pt-8">
            <h1 className="text-2xl font-bold mb-8">Drone Footage</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {droneVideos.map((id) => (
                <div key={id} className="w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded-sm shadow-sm"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Drone Footage"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <BookingModal />
      </div>
    </div>
  );
}

export default videos;
