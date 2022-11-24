import React from "react";

export default function Tools({ email }) {
  return (
    <section className="">
      <h1 className="col-start-1 text-2xl font-extrabold text-gray-700">
        Dashboard
      </h1>
      <div className="bg-white mb-[32px] h-[70px] col-start-1 col-span-12 flex items-center justify-between rounded-xl shadow-md">
        <div className="px-[32px] ">
          <h1 className="text-lg font-bold text-gray-700">
            Retrouvez juste ici tous vos produits, {email}
          </h1>
        </div>
      </div>
    </section>
  );
}
