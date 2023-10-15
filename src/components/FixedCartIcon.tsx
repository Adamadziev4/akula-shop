import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { CartContext } from "@/context/CartProvider";

export const FixedCartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div
      className={`${
        !cartItems.length ? "hidden" : "fixed"
      } md:hidden fixed bottom-10 right-10 bg-white border border-primary rounded-2xl p-2 z-30`}
    >
      <Link href="/cart" className="relative">
        <Image
          src="/svgs/cart.png"
          className="lg:w-9 sm:w-9 w-[40px]"
          width={20}
          height={0}
          alt="cart"
        />
      </Link>
      <span className="absolute -top-1 -right-2 bg-primary text-white px-[6px] sm:px-2 border border-white rounded-2xl text-sm sm:text-base">
        {cartItems.length}
      </span>
    </div>
  );
};
