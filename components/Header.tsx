import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import VisualsMenu from "./VisualsMenu";
import { useBookingStore } from "../store/useBookingStore";

function Header() {
  const router = useRouter();
  const { setShowModal } = useBookingStore();

  return (
    <div className="w-full fixed top-0 bg-white z-10">
      <div className="my-5">
        <div className="flex justify-between items-center">
          <button className="ml-5 font-bold text-xl cursor-pointer" onClick={() => router.push("/")}>
            THE VISUAL MARTIAN
          </button>

          <div>
            <div className="hidden md:flex mr-5">
              <VisualsMenu />
              <button className="navBtn" onClick={() => setShowModal(true)}>
                BOOKING
              </button>
              <button className="navBtn" onClick={() => router.push("/about")}>
                ABOUT
              </button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
