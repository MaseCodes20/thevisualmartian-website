import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRouter } from "next/router";
import { useBookingStore } from "../store/useBookingStore";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { BookOpenIcon, FilmIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function MobileMenu() {
  const { setShowModal } = useBookingStore();

  const router = useRouter();
  return (
    <div>
      <Menu as="div" className="mr-5 md:hidden">
        <MenuButton
          className="md:hidden flex justify-center items-center content-center"
          name="Menu button"
          aria-label="Menu button"
        >
          <Bars3Icon className="h-7 md:hidden hover:text-pink-500" />
        </MenuButton>

        <MenuItems className="origin-top-right absolute right-0 mr-5 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="rounded-md">
            <MenuItem>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white rounded-t-md"
                  }`}
                  onClick={() => router.push("/portraits")}
                >
                  <PhotoIcon className="h-6 mr-3" />
                  PORTRAITS
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => router.push("/landscape")}
                >
                  <GlobeAltIcon className="h-6 mr-3" />
                  LANDSCAPE
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => router.push("/videos")}
                >
                  <FilmIcon className="h-6 mr-3" />
                  VIDEOS
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => setShowModal(true)}
                >
                  <BookOpenIcon className="h-6 mr-3" />
                  BOOKING
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white rounded-b-md"
                  }`}
                  onClick={() => router.push("/about")}
                >
                  <UserIcon className="h-6 mr-3" />
                  ABOUT
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default MobileMenu;
