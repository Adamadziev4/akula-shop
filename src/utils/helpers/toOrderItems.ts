export const toOrderItems = (productList: CartItem[]): OrderItem[] => {
  return productList.map((cartItem) => {
    return {
      selectedSize: cartItem.selectedSize,
      slug: cartItem.slug,
      count: cartItem.count,
    };
  });
};
