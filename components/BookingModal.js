import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { bookingModalState } from "../atoms/modalAtom";

function BookingModal() {
  const [showModal, setShowModal] = useRecoilState(bookingModalState);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <div>
      {showModal && (
        <div
          className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-gray-600/60 z-20"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="centeredOnScreen h-[300px] w-[360px] md:h-[400px] md:w-[600px] bg-white rounded-xl shadow-xl">
            <div className="flex">
              <img
                src="bookModal\DSC_1779.jpg"
                alt="Model Picture"
                className="h-[300px] md:h-[400px] rounded-l-xl"
              />
              <div className="relative w-full bg-black text-white rounded-r-xl">
                <div className="centeredOnScreen">
                  <div className="flex-col justify-between text-center border-2 rounded-md w-[140px] p-2 border-pink-500 h-fit xl:w-60 ">
                    <h1 className="mb-2">The Visual Martian</h1>
                    <p className="mb-7 text-sm">
                      Capturing moments through my lens. Invest in your visual
                    </p>
                    <div className="mb-2">
                      <a
                        href="mailto:thevisualmartian@gmail.com"
                        className="p-2 mb-2 bg-cyan-300 text-black hover:bg-pink-500"
                      >
                        Book now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingModal;
