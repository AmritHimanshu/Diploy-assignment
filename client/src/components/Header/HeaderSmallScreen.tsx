import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type HeaderSmallScreenProps = {
    setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  };

function HeaderSmallScreen({ setMenuState }: HeaderSmallScreenProps) {

    const handleCloseMenu = () => {
        setMenuState(false);
      };

  return (
    <div className="w-[330px] h-screen bg-white">
      <div className="px-5 py-4 flex items-center justify-evenly border-b-[1px] border-gray-200">
        <CloseIcon onClick={handleCloseMenu} />

        <div className="flex">
          <div className="flex items-center py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200 space-x-2">
            <LanguageIcon />
            <p className="text-[14px] font-bold">IN/INR</p>
            <KeyboardArrowDownIcon />
          </div>

          <div className="h-10 w-[1px] border-[1px]"></div>

          <div className="flex items-center py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200 space-x-2">
            <ShoppingCartIcon />
            <p className="text-[14px] font-bold">Cart</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 py-4 border-b-[1px] border-gray-200">
        <div className="flex items-center space-x-1 py-2 px-4 bg-black text-white rounded-full mx-4 cursor-pointer hover:text-gray-400 duration-200">
          <p className="text-[14px] font-bold">Sign up for free</p>
        </div>

        <div className="h-10 w-[1px] border-[1px]"></div>

        <div className="flex items-center py-[5px] px-4 rounded-full cursor-pointer hover:bg-gray-200 duration-200 space-x-2">
          <PersonIcon />
          <p className="text-[14px] font-bold">Sign in</p>
        </div>
      </div>

      <div className="px-5 py-5">
        <ul className="space-y-1">
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>Products</span>
            <KeyboardArrowRightIcon />
          </li>
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>Start selling</span>
            <KeyboardArrowRightIcon />
          </li>
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>Tools and apps</span>
            <KeyboardArrowRightIcon />
          </li>
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>Pricing</span>
            <KeyboardArrowRightIcon />
          </li>
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>Resources</span>
            <KeyboardArrowRightIcon />
          </li>
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>Pro sellers</span>
            <KeyboardArrowRightIcon />
          </li>
          <li className="flex items-center justify-between py-1 text-[14px] font-semibold">
            <span>GellatoConnect</span>
            <KeyboardArrowRightIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderSmallScreen;
