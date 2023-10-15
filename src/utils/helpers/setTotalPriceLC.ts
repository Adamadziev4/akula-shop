export const setTotalPriceLC = (totalPrice: number) => {
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};
