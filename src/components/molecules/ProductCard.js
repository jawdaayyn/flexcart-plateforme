import React, { useState } from "react";

import { Icon } from "@iconify/react";
import binCircle from "@iconify/icons-mdi/bin-circle";

import Button from "../atoms/button";
import { cartApi } from "../../store/cart";
import { useNavigate } from "react-router-dom";
export default function ProductCard(product) {
  const navigate = useNavigate();
  const [deleteItem] = cartApi.endpoints.deleteItem.useMutation();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const { name, url, description, brand, price, image, itemid } =
    product.product;
  const { cartId } = product;
  const handleDelete = async (e) => {
    e.preventDefault();
    deleteItem({
      id: cartId,
      itemid: itemid,
    })
      .unwrap()
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <div
      className="flex col-span-12 gap-[8px] text-black duration-300 bg-transparent"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={`${
          active ? "bg-lightGrey" : "bg-white"
        }  relative flex gap-[48px] px-[16px] shadow-sm hover:shadow-md py-[24px] rounded-xl text-black w-full h-full duration-300`}
      >
        <div
          className={`${
            hover && active ? "block" : "hidden"
          } hover:text-red text-blue hover:rotate-[10deg] absolute right-[24px] bottom-[24px] shadow-lg rounded-2xl w-[36px]  h-[36px] duration-150 hover:scale-125 cursor-pointer hover:font-extrabold`}
        >
          <Icon
            onClick={(e) => handleDelete(e)}
            icon={binCircle}
            className="w-full h-full"
          />
        </div>
        <div
          className={`${
            active ? "h-full w-[500px]" : "h-full w-[300px]"
          } bg-lightGrey  rounded-lg flex items-center justify-center duration-150`}
        >
          <img src={image} alt="Product's image" />
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex justify-between w-full h-full pr-[48px]">
            <div className="flex flex-col justify-start gap-[16px] pb-[24px]">
              <h1 className="font-extrabold text-[32px]">{name}</h1>
              <h1 className="font-bold ">{brand}</h1>
              <h1 className="font-bold text-[#cccccc]">
                ajouté le 12 oct 2022
              </h1>
              <p
                className={`${
                  active ? "block" : "hidden"
                } cursor-pointer hover:underline`}
              >
                {url}
              </p>
              <p className={active ? "block" : "hidden"}>{description}</p>
            </div>
            <div className="flex items-start h-full">
              <h1 className="font-bold text-[24px]">{price}</h1>
            </div>
          </div>
          <div className="flex gap-[8px] w-[200px]">
            <Button label="Voir" full={true} link={true} />
            <Button
              label={active ? "Moins" : "Plus"}
              full={active ? false : true}
              handleSubmit={() => {
                setActive(!active);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
