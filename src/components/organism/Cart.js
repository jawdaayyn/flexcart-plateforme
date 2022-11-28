import React from "react";
import ProductCard from "../molecules/ProductCard";
import { cartApi } from "../../store/cart/index";
import { userApi } from "../../store/auth/userActions";
import { useSelector } from "react-redux";
export default function Cart(uid) {
  const { userInfo } = useSelector((state) => state.user);
  const { data: user } = userApi.endpoints.getDetails.useQuery({
    uid: userInfo?.user_id,
  });
  const { data: cart } = cartApi.endpoints.getCart.useQuery({
    id: user?.cartId,
  });
  if (cart?.content <= 0) {
    return;
  } else {
    return (
      <section className="bg-lightGrey rounded-t-2xl px-[32px] py-[32px] overflow-scroll">
        {cart?.content?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </section>
    );
  }
}

/*

  
  const products = [
    {
      name: "Chaussures",
      brand: "Nike",
      price: "120€",
      url: "https://www.glami.ro/nike/?thp=g&gclid=Cj0KCQiA4OybBhCzARIsAI",
    },
    {
      name: "chaussures",
      brand: "nike",
      price: "120€",
      url: "https://www.glami.ro/nike/?thp=g&gclid=Cj0KCQiA4OybBhCzARIsAI",
    },
    {
      name: "chaussures",
      brand: "nike",
      price: "120€",
      url: "https://www.glami.ro/nike/?thp=g&gclid=Cj0KCQiA4OybBhCzARIsAI",
    },
    {
      name: "chaussures",
      brand: "nike",
      price: "120€",
      url: "https://www.glami.ro/nike/?thp=g&gclid=Cj0KCQiA4OybBhCzARIsAI",
    },
    {
      name: "chaussures",
      brand: "nike",
      price: "120€",
      url: "https://www.glami.ro/nike/?thp=g&gclid=Cj0KCQiA4OybBhCzARIsAI",
    },
  ];
  return (
 {products.map((product) => {
        return <ProductCard data={product} />;
      })}
      )
*/
