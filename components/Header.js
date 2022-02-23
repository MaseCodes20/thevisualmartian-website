import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "./MobileMenu";
import VisualsMenu from "./VisualsMenu";

function Header() {
  const router = useRouter();
  return (
    <div className="w-full fixed bg-white z-10">
      <div className="my-5">
        <div className="flex justify-between items-center">
          {/* Name or Logo */}
          <div className="ml-5">
            <h1
              className="font-bold text-xl cursor-pointer"
              onClick={() => router.push("/")}
            >
              THE VISUAL MARTIAN
            </h1>
          </div>

          {/* Navbar */}
          <div>
            <div className="hidden md:flex mr-5">
              <VisualsMenu />
              <h2 className="navBtn" onClick={() => router.push("")}>
                BOOK
              </h2>
              <h2 className="navBtn" onClick={() => router.push("/about")}>
                ABOUT
              </h2>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
