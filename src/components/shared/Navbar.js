import React from "react";

import { Icon } from "@iconify/react";
import keypadFill from "@iconify/icons-eva/keypad-fill";
import settingsFill from "@iconify/icons-eva/settings-fill";
import logoutIcon from "@iconify/icons-mdi/logout";
import pelican from "../../assets/pelican100.png";

export default function Navbar() {
  return (
    <div className=" z-50 bg-lightGrey text-grey shadow-lg h-screen fixed  duration-300  left-0 top-0 flex flex-col w-[250px] items-start justify-start py-[48px] px-[24px]">
      <div className="flex items-center gap-[12px] mb-[48px]">
        <img src={pelican} alt="logo" className="w-[32px] h-[32px]" />
        <h1 className="font-bold cursor-pointer">FlexCart</h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-bold uppercase text-[14px]">Général</h1>
            <div className="flex flex-col items-start ml-[14px] gap-[18px]">
              <a href="/">
                <div className="flex items-center gap-[4px] hover:text-darkBlue  hover:gap-[6px] duration-150 cursor-pointer">
                  <Icon icon={keypadFill} />
                  <h2>Dashboard</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-bold uppercase text-[14px]">Système</h1>
            <div className="flex flex-col items-start ml-[14px] gap-[18px]">
              <a href="/settings">
                <div className="flex items-center gap-[4px] hover:text-darkBlue  hover:gap-[6px] duration-150 cursor-pointer">
                  <Icon icon={settingsFill} />
                  <h2>Paramétres</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <a href="/login">
          <div className="flex items-center gap-[4px] hover:text-red hover:gap-[6px] duration-150 cursor-pointer">
            <Icon icon={logoutIcon} className="rotate-180" />
            <h2>Déconnexion</h2>
          </div>
        </a>
      </div>
    </div>
  );
}
