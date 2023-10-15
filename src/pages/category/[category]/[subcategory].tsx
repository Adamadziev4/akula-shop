import React from "react";
import { ParsedUrlQuery } from "querystring";

import { Wrapper } from "@/components/Wrapper";
import { Pagination } from "@/components/Pagination";
import { Categories } from "@/components/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { EmptySection } from "@/components/EmptySection";
import { FixedCartIcon } from "@/components/FixedCartIcon";
import { MobileCategories } from "@/components/categories/MobileCategories";

import { deleteColorProducts } from "@/utils/helpers/deleteColorProducts";
import {
  CategoryListResponse,
  ProductListResponse,
  fetchDataFromApi,
} from "@/utils/api";

import type { GetServerSideProps } from "next/types";

export interface Params extends ParsedUrlQuery {
  subcategory: string;
  category: "clothes" | "shoes" | "sale";
}

type SubcategoryProps = {
  categories?: Category[];
  activeCategorySlug: string;
  productList: Product[];
  totalPages: number;
  currentPage: number;
  category: "clothes" | "shoes" | "sale";
};

export const getServerSideProps: GetServerSideProps<SubcategoryProps> = async ({
  query,
  params,
}) => {
  const { category, subcategory } = params as Params;

  // Если у нас раздел "Акции"
  if (category === "sale") {
    const discountedProducts: ProductListResponse = await fetchDataFromApi(
      `/api/products?populate=*&filters[isDiscounted][$eq]=true&pagination[page]=${
        query.page ? query.page : 1
      }&pagination[pageSize]=24`
    );

    return {
      props: {
        category: "sale",
        activeCategorySlug: "products",
        productList: discountedProducts.data,
        totalPages: discountedProducts.meta.pagination.pageCount,
        currentPage: discountedProducts.meta.pagination.page,
      },
    };
  }

  const categories: CategoryListResponse = await fetchDataFromApi(
    `/api/categories?filters[type][$eq]=${category}`
  );
  const activeCategory: CategoryListResponse = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${subcategory}`
  );
  const productList: ProductListResponse = await fetchDataFromApi(
    `/api/products?populate=deep&filters[categories][slug][$eq]=${subcategory}&pagination[page]=${
      query.page ? query.page : 1
    }&pagination[pageSize]=24`
  );

  const newProduct = deleteColorProducts(productList.data);

  return {
    props: {
      totalPages: productList.meta.pagination.pageCount,
      currentPage: productList.meta.pagination.page,
      // productList: newProduct,
      productList: productList.data,
      categories: categories.data,
      activeCategorySlug: activeCategory.data[0].attributes.slug,
      category,
    },
  };
};

const Subcategories = (props: SubcategoryProps) => {
  const title =
    props.category === "clothes"
      ? "Одежда"
      : props.category === "shoes"
      ? "Обувь"
      : props.category === "sale"
      ? "Товары по акции"
      : "";

  return (
    <Wrapper>
      <SectionTitle title={title}>
        {props.category !== "sale" && props.categories && (
          <>
            <MobileCategories
              category={props.category}
              categories={props.categories}
              activeCategorySlug={props.activeCategorySlug}
            />

            <Categories
              category={props.category}
              categories={props.categories}
              activeCategorySlug={props.activeCategorySlug}
            />
          </>
        )}
      </SectionTitle>

      {props.productList.length ? (
        <div className="pt-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 sm:grid-cols-2">
          {props.productList.map((product) => (
            <ProductCard
              key={product.id}
              productCategory={
                product.attributes.categories.data[0].attributes.type
              }
              imageUrl={product.attributes.images.data[0].attributes.url}
              slug={product.attributes.slug}
              price={product.attributes.price}
              name={product.attributes.name}
              oldPrice={product.attributes.old_price}
              isSale={props.category === "sale"}
            />
          ))}
        </div>
      ) : (
        <EmptySection title="На данный момент тут товаров нет!" />
      )}

      <div className="text-center mt-7">
        <Pagination
          category={props.category}
          activeCategory={props.activeCategorySlug}
          totalPages={props.totalPages}
          currentPage={props.currentPage}
        />
      </div>

      <FixedCartIcon />
    </Wrapper>
  );
};

export default Subcategories;
