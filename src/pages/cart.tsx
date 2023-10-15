import React, { useContext } from "react";
import Link from "next/link";

import { Wrapper } from "@/components/Wrapper";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CartItem } from "@/components/CartItem";
import { CartContext } from "@/context/CartProvider";
import { EmptySection } from "@/components/EmptySection";

const Cart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <Wrapper>
      <SectionTitle title="Корзина" />

      {cartItems.length ? (
        <div className="grid xl:grid-cols-[2.5fr_1fr] gap-5 pt-4">
          <div className="grid gap-8">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.selectedSize} {...cartItem} />
            ))}
          </div>
          <div className="pt-4">
            <div className="sticky top-6 md:bg-primary/10 xl:h-[115px] px-2 md:px-6 xl:py-2 py-7 rounded-lg">
              <div className="flex justify-between items-center text-2xl pb-3">
                <h1 className="text-xl sm:text-2xl">Итого к оплате:</h1>
                <p className="text-lg md:text-2xl whitespace-nowrap">
                  {totalPrice} P
                </p>
              </div>
              <Link href="/order">
                <Button isFull={true} isMiddle={true}>
                  Оформить заказ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <EmptySection title="Ваша корзина пуста" />
      )}
    </Wrapper>
  );
};

export default Cart;
