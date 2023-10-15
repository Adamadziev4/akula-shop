import React, { useContext } from "react";

import { Wrapper } from "@/components/Wrapper";
import { SectionTitle } from "@/components/SectionTitle";
import { FavoriteContext } from "@/context/FavoriteProvider";
import { ProductCard } from "@/components/product/ProductCard";
import { EmptySection } from "@/components/EmptySection";
import { FixedCartIcon } from "@/components/FixedCartIcon";

import "react-toastify/dist/ReactToastify.css";

const Favorite = () => {
  const { favItems, removeFavItem } = useContext(FavoriteContext);

  return (
    <Wrapper>
      <SectionTitle title="Избранное" />

      {favItems.length ? (
        <div className="mt-8 grid lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 sm:grid-cols-2">
          {favItems.map((product) => (
            <div className="relative" key={product.slug}>
              <ProductCard
                name={product.name}
                imageUrl={product.imageUrl}
                slug={product.slug}
                price={product.price}
                oldPrice={product.oldPrice}
              />
              <span
                className="absolute top-0 right-1 text-xl px-[6px] py-1 cursor-pointer z-10 text-primary"
                onClick={() => removeFavItem(product.slug)}
              >
                &#10005;
              </span>
            </div>
          ))}
        </div>
      ) : (
        <EmptySection title="Вы ничего не добавили в избранное" />
      )}

      <FixedCartIcon />
    </Wrapper>
  );
};

export default Favorite;
