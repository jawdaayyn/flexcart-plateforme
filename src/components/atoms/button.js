import React from "react";

export default function button({ label, full }) {
  return (
    <button
      className={`${
        full
          ? " text-white  bg-black"
          : " text-black  bg-white border-2 border-black "
      } px-[24px] py-[4px] rounded-xl font-extrabold hover:px-[36px] duration-200 uppercase`}
    >
      {label}
    </button>
  );
}
