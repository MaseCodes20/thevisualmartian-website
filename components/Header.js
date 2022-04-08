import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { bookingModalState } from "../atoms/modalAtom";
import MobileMenu from "./MobileMenu";
import VisualsMenu from "./VisualsMenu";

function Header() {
  const router = useRouter();
  const [showModal, setShowModal] = useRecoilState(bookingModalState);

  return (
    <div className="w-full fixed top-0 bg-white z-10">
      <div className="my-5">
        <div className="flex justify-between items-center">
          {/* Name or Logo */}
          <button className="ml-5">
            <h1 className="font-bold text-xl " onClick={() => router.push("/")}>
              THE VISUAL MARTIAN
            </h1>
          </button>

          {/* Navbar */}
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
