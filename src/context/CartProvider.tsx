import React, { createContext } from "react";

import { setCartItemsLC } from "@/utils/helpers/setCartItemsLC";
import { setTotalPriceLC } from "@/utils/helpers/setTotalPriceLC";

type CartContextType = {
  cartItems: CartItem[];
  totalPrice: number;
  addCartItem: (product: CartItem) => void;
  updateCountCartItem: (props: {
    id: number;
    size: number;
    newCount: number;
  }) => void;
  removeCartItem: (props: { id: number; size: number }) => void;
  clearCartItems: () => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalPrice: 0,
  addCartItem: () => {},
  updateCountCartItem: () => {},
  removeCartItem: () => {},
  clearCartItems: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const cartItems: CartItem[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    const totalPrice: number = Number(
      JSON.parse(localStorage.getItem("totalPrice") || "0")
    );

    setCartItems(cartItems);
    setTotalPrice(totalPrice);
  }, []);

  const addCartItem = (product: CartItem) => {
    const item: CartItem = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      selectedSize: product.selectedSize,
      article: product.article,
      price: product.price,
      slug: product.slug,
      count: 1,
    };

    const findItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
    );

    if (findItem) {
      const newCartItems = cartItems.map((cartItem) => {
        if (
          cartItem.id === findItem.id &&
          cartItem.selectedSize === findItem.selectedSize
        )
          return {
            ...cartItem,
            count: cartItem.count + 1,
          };

        return cartItem;
      });

      setCartItems(newCartItems);
      setCartItemsLC(newCartItems);

      setTotalPrice((prev) => (prev += findItem.price));
      setTotalPriceLC(totalPrice + findItem.price);
    } else {
      setTotalPrice((prev) => (prev += item.price));
      setTotalPriceLC(totalPrice + item.price);

      setCartItems((prev) => {
        return [...prev, item];
      });
      setCartItemsLC([...cartItems, item]);
    }
  };

  const updateCountCartItem = (props: {
    id: number;
    size: number;
    newCount: number;
  }) => {
    if (props.newCount === 0) return;

    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === props.id && cartItem.selectedSize === props.size)
        return {
          ...cartItem,
          count: props.newCount,
        };

      return cartItem;
    });

    setCartItems(newCartItems);
    setCartItemsLC(newCartItems);

    const findItem = cartItems.find(
      (cartItem) =>
        cartItem.id === props.id && cartItem.selectedSize === props.size
    );

    if (findItem) {
      setTotalPrice((prev) => (prev -= findItem.price * findItem.count));
      setTotalPriceLC(totalPrice - findItem.price * findItem.count);

      setTotalPrice((prev) => (prev += findItem.price * props.newCount));
      setTotalPriceLC(totalPrice + findItem.price * findItem.count);
    }
  };

  const removeCartItem = ({ id, size }: { id: number; size: number }) => {
    const newCartItems = cartItems.filter((cartItem) => {
      if (cartItem.id === id && cartItem.selectedSize === size) return false;

      return true;
    });

    setCartItems(newCartItems);
    setCartItemsLC(newCartItems);

    const findItem = cartItems.find(
      (cartItem) => cartItem.id === id && cartItem.selectedSize === size
    );
    if (findItem) {
      setTotalPrice((prev) => (prev -= findItem.price * findItem.count));
      setTotalPriceLC(totalPrice - findItem.price * findItem.count);
    }
  };

  const clearCartItems = () => {
    setCartItems([]);
    setCartItemsLC([]);

    setTotalPrice(0);
    setTotalPriceLC(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCountCartItem,
        addCartItem,
        removeCartItem,
        clearCartItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
