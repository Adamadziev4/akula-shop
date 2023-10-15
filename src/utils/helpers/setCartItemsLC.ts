export const setCartItemsLC = (cartItems: CartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
