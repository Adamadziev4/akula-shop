import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { CartContext } from "@/context/CartProvider";

import { API_URL } from "@/utils/urls";

export const CartItem = (props: CartItem) => {
  const { removeCartItem, updateCountCartItem } = useContext(CartContext);
  return (
    <div className="flex justify-center md:py-4">
      <div className="w-[90%] flex gap-4 flex-col md:flex-row justify-between items-center border-b pb-6 border-primary/20">
        <Link href={`/product/${props.slug}`}>
          <Image
            src={`${API_URL}${props.imageUrl}`}
            width={500}
            height={500}
            alt={props.name}
            className="w-[200px] md:w-[120px]"
          />
        </Link>
        <div>
          <h1 className="text-lg pb-2 text-black/90">{props.name}</h1>
          <p className="text-gray-500">Размер: {props.selectedSize}</p>
          <p className="text-gray-500">Артикул: {props.article}</p>
        </div>
        <div className="text-lg">{props.price} P</div>
        <div className="text-lg flex">
          <div className="flex gap-4">
            <span
              className="flex items-center justify-center px-2 cursor-pointer"
              onClick={() =>
                updateCountCartItem({
                  id: props.id,
                  size: props.selectedSize,
                  newCount: props.count - 1,
                })
              }
            >
              -
            </span>
            <span className="">{props.count}</span>
            <span
              className="flex items-center justify-center px-2 cursor-pointer"
              onClick={() =>
                updateCountCartItem({
                  id: props.id,
                  size: props.selectedSize,
                  newCount: props.count + 1,
                })
              }
            >
              +
            </span>
          </div>
        </div>
        <div
          className="hidden md:block text-lg cursor-pointer"
          onClick={() =>
            removeCartItem({ id: props.id, size: props.selectedSize })
          }
        >
          &#10005;
        </div>
        <button
          className="md:hidden py-1 px-2 border-black/20 border text-sm cursor-pointer"
          onClick={() =>
            removeCartItem({ id: props.id, size: props.selectedSize })
          }
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
