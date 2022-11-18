import React, { useState } from "react";

export default function inputs({ placeholder, type, label }) {
  return (
    <div className="flex flex-col items-start gap-[4px] font-bold">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="pl-[10px] rounded-md h-[32px] w-[300px] border-2 border-black"
      />
    </div>
  );
}
