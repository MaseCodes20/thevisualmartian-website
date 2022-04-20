import { Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import {
  GlobeIcon,
  FilmIcon,
  PhotographIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { bookingModalState } from "../atoms/modalAtom";

function MobileMenu() {
  const [showModal, setShowModal] = useRecoilState(bookingModalState);

  const router = useRouter();
  return (
    <div>
      <Menu as="div" className="mr-5 md:hidden">
        <Menu.Button
          className="md:hidden flex justify-center items-center content-center"
          name="Menu button"
          aria-label="Menu button"
        >
          <MenuIcon className="h-7 md:hidden hover:text-pink-500" />
        </Menu.Button>

        <Menu.Items className="origin-top-right absolute right-0 mr-5 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="rounded-md">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white rounded-t-md"
                  }`}
                  onClick={() => router.push("/portraits")}
                >
                  <PhotographIcon className="h-6 mr-3" />
                  PORTRAITS
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => router.push("/landscape")}
                >
                  <GlobeIcon className="h-6 mr-3" />
                  LANDSCAPE
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
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
            </Menu.Item>
            <Menu.Item>
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
            </Menu.Item>
            <Menu.Item>
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
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default MobileMenu;
