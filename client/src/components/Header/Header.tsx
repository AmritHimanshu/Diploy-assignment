import React, { useEffect, useRef, useState } from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderSmallScreen from "./HeaderSmallScreen";

function Header() {
  const menuRef = useRef<HTMLDivElement>(null);

  const [menuState, setMenuState] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      <div className="border-b-[1px] border-gray-200 py-3 relative">
        <div className="lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto flex items-center justify-between px-6 lg:px-0">
          <div className="flex items-center space-x-3">
            <div
              className="block xl:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              <MenuIcon sx={{ cursor: "pointer" }} />
            </div>
            <img
              src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg"
              alt=""
              className="h-[27px] cursor-pointer"
            />
          </div>

          <div
            className={`fixed top-0 ${
              menuState ? "left-0" : "-left-[510px]"
            } duration-200 w-full bg-black bg-opacity-20`}
          >
            <div ref={menuRef} className="w-[330px]">
              <HeaderSmallScreen />
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex items-center space-x-1 py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200">
              <HeadsetMicIcon />
              <p className="text-[12px] 2xl:text-[14px] font-bold">
                Contact us
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-1 py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200">
              <LanguageIcon />
              <p className="text-[12px] 2xl:text-[14px] font-bold">IN/INR</p>
              <KeyboardArrowDownIcon />
            </div>
            <div className="hidden md:flex items-center space-x-1 py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200">
              <ShoppingCartIcon />
              <p className="text-[12px] 2xl:text-[14px] font-bold">Cart</p>
            </div>
            <div className="hidden lg:flex items-center space-x-1 py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200">
              <PersonIcon />
              <p className="text-[12px] 2xl:text-[14px] font-bold">Sign in</p>
            </div>
            <div className="flex items-center space-x-1 py-2 px-4 bg-black text-white rounded-full mx-4 cursor-pointer hover:text-gray-400 duration-200">
              <p className="text-[12px] 2xl:text-[14px] font-bold">
                Sign up for free
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-[1px] border-gray-200 hidden xl:block">
        <div className="xl:w-[1100px] 2xl:w-[1300px] m-auto flex items-center">
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">Products</p>
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">Start selling</p>
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">Tools and apps</p>
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">Pricing</p>
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">Resources</p>
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </div>
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">Pro sellers</p>
          </div>
          <div className="py-3 px-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-200 duration-200">
            <p className="text-[14px] font-bold">GellatoConnect</p>
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
