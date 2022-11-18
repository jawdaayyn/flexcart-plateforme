import React from "react";

export default function ProductCard(data) {
  const { name, brand, price } = data;
  return (
    <div className="bg-white col-span-4 py-[16px] px-[24px] shadow-xl rounded-xl hover:border-l-[5px] hover:border-l-gray-700 text-black duration-300 cursor-pointer">
      <div className="bg-lightGrey h-[200px] w-[200px] rounded-lg flex items-center justify-center">
        image
      </div>
      <h1>{name}</h1>
      <h1>{brand}</h1>
      <h1>{price}</h1>
    </div>
  );
}
