import React from "react";
import { Icon } from "@iconify/react";
import externalLinkFill from "@iconify/icons-eva/external-link-fill";

export default function button({ label, full, handleSubmit, link }) {
  return (
    <button
      className={`${
        full
          ? " text-white  bg-darkBlue"
          : " text-blue  bg-white border-2 border-black "
      } px-[32px] w-full text-center py-[12px] rounded-xl flex gap-[8px] justify-center items-center font-extrabold hover:px-[36px] duration-200 uppercase`}
      onClick={handleSubmit}
    >
      {label}
      <Icon icon={externalLinkFill} className={link ? "block" : "hidden"} />
    </button>
  );
}
