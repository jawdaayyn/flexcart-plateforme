import React from "react";
import Button from "../atoms/button";

export default function Tools() {
  return (
    <section className="text-white">
      <div className="col-span-12">
        <h1 className="text-[40px] font-extrabold text-gray-700 ">
          Bonjour [userName]
        </h1>
        <p>Retrouvez juste ici tous vos produits</p>
      </div>
      <div className="mb-[32px] bg-lightGrey pr-[12px] text-grey h-[70px] col-start-1 col-span-12 flex items-center justify-between rounded-xl shadow-md">
        <div className="px-[32px]">
          <input
            type="text"
            placeholder="Nom de votre produit..."
            className="text-[20px] font-bold text-black outline-0 w-[700px] bg-lightGrey"
          />
        </div>
        <div className="w-[150px]">
          <Button full={true} label="Rechercher" />
        </div>
      </div>
    </section>
  );
}
