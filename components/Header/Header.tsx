import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="w-full h-auto">
      <div className="max-w-[1500px] w-full mx-auto pt-[30px] pb-[0px] pr-[15px] pl-[15px] md:pr-[20px] md:pl-[20px]">
        <div className="w-full mx-auto flex items-center gap-1 justify-between md:justify-center">
          <div className="py-3 px-4 rounded-3xl bg-opacity-60 bg-[#f7f7f7] backdrop-blur-md max-w-[115px] md:max-w-none md:w-fit">
            <img
              src="/companylogo.svg"
              alt="companylogo"
              className="min-w-0  md:min-w-[113px] md:max-w-none"
            />
          </div>

          <div className="rounded-xl bg-opacity-60 bg-none md:bg-[#f7f7f7] backdrop-blur-md md:flex md:items-center md:gap-[22px] lg:gap-[32px] p-[16px] px-0 md:px-[12px] lg:pl-[32px]">
            <li className="text-[#333] font-normal text-[13px] leading-none tracking-tight hidden md:block">
              APIs
            </li>
            <li className="text-[#333] font-normal text-[13px] leading-none tracking-tight hidden md:block">
              Solutions
            </li>
            <li className="text-[#333] font-normal text-[13px] leading-none tracking-tight hidden md:block">
              Developers
            </li>
            <li className="text-[#333] font-normal text-[13px] leading-none tracking-tight hidden md:block">
              Demos
            </li>
            <li className="text-[#333] font-normal text-[13px] leading-none tracking-tight hidden md:block">
              Company
            </li>

            <div className="flex items-center gap-0.5 hidden md:flex">
              <p className="text-[#333] font-normal text-[13px] leading-none tracking-tight">
                En
              </p>
              <div>
                <img
                  src="/dropdownarrow.svg"
                  alt="dropdowanarrow"
                  className="max-w-3"
                />
              </div>
            </div>

            <div className="flex items-center gap-[5px] md:gap-2">
              <button className="group py-3 px-[8px] md:px-4 cursor-pointer rounded bg-transparent text-[#333] text-xs font-normal leading-[100%] tracking-[-0.12px] uppercase transition-all duration-300 border border-[#706f6d] hover:rounded-[10px] md:hover:rounded-[30px] active:rounded-[15px]">
                LOG IN
              </button>
              <button className="group py-3 px-[8px] md:px-4 border-none cursor-pointer rounded bg-[#f35218] text-white text-xs font-normal leading-[100%] tracking-[-0.12px] uppercase transition-all duration-300 hover:rounded-[10px] md:hover:rounded-[30px] active:rounded-[15px]">
                SIGN UP
              </button>
              <button className="p-2 text-[#333] rounded bg-[whitesmoke] block md:hidden">
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
