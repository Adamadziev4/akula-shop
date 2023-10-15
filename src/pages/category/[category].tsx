import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

import { Wrapper } from "@/components/Wrapper";
import { EmptySection } from "@/components/EmptySection";
import { FixedCartIcon } from "@/components/FixedCartIcon";

import { API_URL } from "@/utils/urls";
import { CategoryListResponse, fetchDataFromApi } from "@/utils/api";

import { GetServerSideProps } from "next/types";

export interface Params extends ParsedUrlQuery {
  category: string;
}

type CategoryProps = {
  categories?: Category[];
};

export const getServerSideProps: GetServerSideProps<CategoryProps> = async ({
  params,
}) => {
  const { category } = params as Params;

  if (category === "sale") {
    return {
      redirect: {
        permanent: false,
        destination: "/category/sale/products",
      },
      props: {},
    };
  }

  const categories: CategoryListResponse = await fetchDataFromApi(
    `/api/categories?populate=*&filters[type][$eq]=${category}`
  );

  return {
    props: {
      categories: categories.data,
    },
  };
};

const Category = ({ categories }: CategoryProps) => {
  return (
    <Wrapper>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 pt-4">
        {categories?.map(({ id, attributes }) => (
          <Link
            key={id}
            href={`/category/${attributes.type}/${attributes.slug}`}
            className="relative"
          >
            <Image
              src={`${API_URL}${attributes.image.data.attributes.url}`}
              width={1000}
              height={1000}
              alt="Категория одежды"
              className={`w-full ${
                attributes.type === "shoes" ? "h-[500px]" : null
              }`}
            />
            <div className="absolute bottom-0 text-center bg-primary/50 py-4 text-white text-xl md:text-2xl xl:text-3xl w-full">
              {attributes.name}
            </div>
          </Link>
        ))}
      </div>

      {categories?.length === 0 && (
        <EmptySection title="На данный момент тут ничего нет" />
      )}

      <FixedCartIcon />
    </Wrapper>
  );
};

export default Category;
