import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRouter } from "next/router";

function VisualsMenu() {
  const router = useRouter();
  return (
    <Menu as="div">
      <MenuButton>
        <h2 className="navBtn">VISUALS</h2>
      </MenuButton>

      <MenuItems className="origin-top-right absolute right-0 mr-10 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <div className="rounded-md">
          <MenuItem>
            {({ active }) => (
              <a
                className={`flex items-center px-4 py-2 cursor-pointer ${
                  active && "bg-pink-500 text-white rounded-t-md"
                }`}
                onClick={() => router.push("/portraits")}
              >
                <h2 className="flex-1 text-center">PORTRAITS</h2>
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
                <h2 className="flex-1 text-center">LANDSCAPE</h2>
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                className={`flex items-center px-4 py-2 cursor-pointer ${
                  active && "bg-pink-500 text-white rounded-b-md"
                }`}
                onClick={() => router.push("/videos")}
              >
                <h2 className="flex-1 text-center">VIDEOS</h2>
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default VisualsMenu;
