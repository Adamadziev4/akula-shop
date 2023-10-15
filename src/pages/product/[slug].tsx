import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

import { Wrapper } from "@/components/Wrapper";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductCard } from "@/components/product/ProductCard";
import { FixedCartIcon } from "@/components/FixedCartIcon";
import { ProductCarousel } from "@/components/sections/ProductCarousel";

import { API_URL } from "@/utils/urls";
import { shuffleArray } from "@/utils/helpers/shuffleArray";
import {
  ProductListResponse,
  ProductResponse,
  fetchDataFromApi,
} from "@/utils/api";

import type { GetServerSideProps } from "next/types";

export interface Query extends ParsedUrlQuery {
  slug: string;
  color?: string;
}

type ProductDetailsProps = {
  product: Product;
  otherColors: OtherColorsType[]
  recommendedProducts: Product[];
};

type OtherColorsRes = {
  data: {
    id: number;
    attributes: ProductAttributes
  }[]
}

type OtherColorsType = {
  color: string;
  slug: string;
  colorCode?: string;
}

export const getServerSideProps: GetServerSideProps<
  ProductDetailsProps
> = async ({ query }) => {
  const { slug, color } = query as Query;

  const { data }: ProductListResponse = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );

  const product: ProductResponse = await fetchDataFromApi(
    `/api/products/${data[0].id}?populate=deep`
  );

  const recommendedProductsRes: ProductListResponse = await fetchDataFromApi(
    `/api/products?populate=*&filters[categories][slug][$eq]=${product.data.attributes.categories?.data[0].attributes.slug}`
  );

  const otherColorsProduct: OtherColorsRes = await fetchDataFromApi(
    `/api/products?populate=*&filters[article][$eq]=${product.data.attributes.article}`
  )

  const otherColors: OtherColorsType[] = [];

  otherColorsProduct.data.forEach((product) => {
    const obj = {
      color: product.attributes.color,
      slug: product.attributes.slug,
      colorCode: product.attributes.colorCode
    }

    otherColors.push(obj)
  });

  const recommendedProducts = recommendedProductsRes.data
    .reverse()
    .slice(0, 8)
    .filter((prod) => prod.id !== product.data.id);

  return {
    props: {
      product: product.data,
      otherColors,
      recommendedProducts: recommendedProducts,
    },
  };
};

const ProductDetails = ({
  product: { id, attributes },
  otherColors,
  recommendedProducts,
}: ProductDetailsProps) => {
  const typeProduct = attributes.categories.data[0].attributes.type; // Одежда или обувь
  const slugProduct = attributes.slug; // Уникальное название товара
  const categoryProductSlug = attributes.categories?.data[0].attributes.slug;
  const categoryProductName = attributes.categories?.data[0].attributes.name;
  const characteristics = attributes.characteristics;

  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row gap-10 pt-6 lg:px-0 lg:pr-8">
        <div className="grid sm:grid-cols-2 gap-4 col-span-2">
          {attributes.images?.data.map(({ id, attributes }) => (
            <Image
              key={id}
              src={`${API_URL}${attributes.url}`}
              width={1000}
              height={1000}
              alt="Одежда"
              className="sm:h-[500px] md:h-[550px]"
            />
          ))}
          {/* <Image
            src="/products/1.png"
            width={650}
            height={300}
            alt="Одежда"
            className="col-span-2 w-full"
          /> */}
          {/* <Image src="/products/1.png" width={650} height={400} alt="Одежда" />
          <Image src="/products/1.png" width={650} height={400} alt="Одежда" />
          <Image src="/products/1.png" width={650} height={400} alt="Одежда" />
          <Image src="/products/1.png" width={650} height={400} alt="Одежда" /> */}
        </div>

        <ProductInfo
          id={id}
          name={attributes.name}
          article={attributes.article}
          color={attributes.color}
          price={attributes.price}
          old_price={attributes.old_price}
          colorList={attributes.colors}
          imageUrl={attributes.images?.data[0].attributes.url}
          size={attributes.size}
          typeProduct={typeProduct}
          slugProduct={slugProduct}
          categoryProductSlug={categoryProductSlug}
          categoryProductName={categoryProductName}
          characteristics={characteristics}
          otherColors={otherColors}
        />
      </div>

      {recommendedProducts.length ? (
        <ProductCarousel title="Рекомендуемые товары">
          {shuffleArray(recommendedProducts).map(({ attributes, id }) => (
            <ProductCard
              key={id}
              productCategory={attributes.categories.data[0].attributes.type}
              imageUrl={attributes.images.data[0].attributes.url}
              slug={attributes.slug}
              price={attributes.price}
              name={attributes.name}
              isRecommended={true}
            />
          ))}
        </ProductCarousel>
      ) : null}

      <FixedCartIcon />
    </Wrapper>
  );
};

export default ProductDetails;
