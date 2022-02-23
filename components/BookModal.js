import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { bookingModalState } from "../atoms/modalAtom";

function BookModal() {
  const [showModal, setShowModal] = useRecoilState(bookingModalState);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <div>
      {showModal ? (
        <div
          className="relative h-screen bg-gray-600/60 z-20"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="centeredOnScreen h-[300px] w-[360px] md:h-[400px] md:w-[600px] bg-white rounded-xl">
            <div className="flex">
              <img
                src="bookModal\DSC_1779.jpg"
                alt="Model Picture"
                className="h-[300px] md:h-[400px] rounded-l-xl"
              />
              <div className="relative w-full bg-black text-white rounded-r-xl">
                <div className="centeredOnScreen">
                  <h1>BOOK</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BookModal;
