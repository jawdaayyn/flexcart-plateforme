import React from "react";
import ProductCard from "../molecules/ProductCard";

export default function Cart() {
  const products = [
    { name: "chaussures", brand: "nike", price: "100€" },
    { name: "chaussures", brand: "nike", price: "100€" },
    { name: "chaussures", brand: "nike", price: "100€" },
    { name: "chaussures", brand: "nike", price: "100€" },
    { name: "chaussures", brand: "nike", price: "100€" },
    { name: "chaussures", brand: "nike", price: "100€" },
  ];
  return (
    <section className="bg-lightGrey rounded-t-2xl px-[32px] py-[32px] overflow-scroll">
      {products.map((product) => {
        return <ProductCard data={product} />;
      })}
    </section>
  );
}
