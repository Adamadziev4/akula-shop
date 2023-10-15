import React, { createContext } from "react";

type FavoriteContextType = {
  favItems: ProductCard[];
  addFavItem: (product: ProductCard) => boolean;
  removeFavItem: (slug?: string) => void;
};

export const FavoriteContext = createContext<FavoriteContextType>({
  favItems: [],
  addFavItem: () => true,
  removeFavItem: () => {},
});

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favItems, setFavItems] = React.useState<ProductCard[]>([]);

  React.useEffect(() => {
    const favItems: ProductCard[] = JSON.parse(
      localStorage.getItem("favItems") || "[]"
    );

    setFavItems(favItems);
  }, []);

  const addFavItem = (product: ProductCard): boolean => {
    const findItem = favItems.find((favItem) => favItem.slug === product.slug);

    if (findItem) {
      alert("Товар уже в избранном");
      return false;
    }

    setFavItems((prev) => [...prev, product]);
    localStorage.setItem("favItems", JSON.stringify([...favItems, product]));

    return true;
  };

  const removeFavItem = (slug?: string) => {
    if (!slug) return;

    const newFavItems = favItems.filter((favItem) => favItem.slug !== slug);
    setFavItems(newFavItems);
    localStorage.setItem("favItems", JSON.stringify(newFavItems));
  };

  return (
    <FavoriteContext.Provider value={{ favItems, addFavItem, removeFavItem }}>
      {children}
    </FavoriteContext.Provider>
  );
};
