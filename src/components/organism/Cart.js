import React from "react";
import ProductCard from "../molecules/ProductCard";
import { cartApi } from "../../store/cart/index";
import { userApi } from "../../store/auth/userActions";
import { useSelector } from "react-redux";
export default function Cart() {
  const { userInfo } = useSelector((state) => state.user);
  const { data: user } = userApi.endpoints.getDetails.useQuery({
    uid: userInfo?.user_id,
  });
  const { data: cart } = cartApi.endpoints.getCart.useQuery({
    id: user?.cartId,
  });
  if (cart?.content <= 0) {
    console.log("no carts");
  } else {
    return (
      <section className="bg-lightGrey rounded-t-2xl px-[32px] py-[32px] overflow-scroll">
        {cart?.content?.map((product) => {
          return <ProductCard product={product} cartId={user?.cartId} />;
        })}
      </section>
    );
  }
}
