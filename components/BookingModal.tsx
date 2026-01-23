import { MouseEvent, useRef } from "react"
import { useBookingStore } from "../store/useBookingStore"
import { XCircleIcon } from "@heroicons/react/24/outline"

function BookingModal() {
  const { showModal, setShowModal } = useBookingStore()

  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  return (
    <div>
      {showModal && (
        <div
          className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-gray-600/80 z-20"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="centeredOnScreen h-75 w-90 md:h-100 md:w-150 bg-white rounded-xl shadow-xl">
            <div className="flex">
              <img src="bookModal\DSC_1779.jpg" alt="Model Picture" className="h-75 md:h-100 rounded-l-xl" />
              <div className="relative w-full bg-black text-white rounded-r-xl">
                <div className="flex items-center justify-end w-full p-3">
                  <button className="cursor-pointer" onClick={() => setShowModal(false)}>
                    <XCircleIcon className="h-7 hover:text-pink-500" />
                  </button>
                </div>

                <div className="centeredOnScreen">
                  <div className="flex-col justify-between text-center border-2 rounded-md w-35 p-2 border-pink-500 h-fit xl:w-60 ">
                    <h1 className="mb-2">The Visual Martian</h1>
                    <p className="mb-7 text-sm">Capturing moments through my lens. Invest in your visual</p>
                    <div className="mb-2">
                      <a href="mailto:thevisualmartian@gmail.com" className="p-2 mb-2 bg-cyan-300 text-black hover:bg-pink-500 rounded-md font-semibold">
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
  )
}

export default BookingModal
