import Image from "next/image";
import Link from "next/link";
import React from "react";

import { API_URL } from "@/utils/urls";

type ProductCardProps = {
  slug: string;
  imageUrl: string;
  name: string;
  price: number;
  oldPrice?: number;
  isSale?: boolean;
  productCategory?: "clothes" | "shoes";
  isRecommended?: boolean;
};

export const ProductCard = (props: ProductCardProps) => {
  console.log(props.productCategory);
  return (
    <div className="relative">
      <Link href={`/product/${props.slug}`} className="block">
        <Image
          src={`${API_URL}${props.imageUrl}`}
          width={1000}
          height={1000}
          alt="Одежда"
          sizes=""
          className={`w-full ${
            props.productCategory === "shoes" ? " sm:h-[400px]" : null
          } ${props.isRecommended ? "h-[250px]" : null}`}
        />
      </Link>
      <div>
        <p className="pt-2 text-base md:text-base lg:text-lg">{props.name}</p>
        <span className="md:text-xl text-lg">{props.price} ₽</span>
        {props.oldPrice && props.isSale ? (
          <span className="line-through pl-2">{props.oldPrice} ₽</span>
        ) : null}
      </div>
      {props.isSale ? (
        <div className="absolute uppercase top-2.5 right-2.5 border border-primary px-2">
          Акция
        </div>
      ) : null}
    </div>
  );
};
