export const deleteColorProducts = (pruductList: Product[]): Product[] => {
  const ids: any = [];

  return pruductList.filter((product) => {
    if (product.attributes.colors?.length) {
      product.attributes.colors.forEach((color) => {
        if (color.product?.data?.id !== product.id)
          ids.push(color.product?.data?.id);
      });
    }

    if (ids.includes(product.id)) {
      return false;
    }

    return true;
  });
};
