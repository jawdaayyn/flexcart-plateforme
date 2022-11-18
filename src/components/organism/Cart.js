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
    <section>
      {products.map((product) => {
        return <ProductCard data={product} />;
      })}
    </section>
  );
}
