import Link from "next/link";
import React from "react";

type CategoriesProps = {
  categories: Category[];
  activeCategorySlug: string;
  category: "clothes" | "shoes";
};

export const Categories = ({
  category,
  categories,
  activeCategorySlug,
}: CategoriesProps) => {
  return (
    <ul className="hidden sm:flex justify-center gap-2 md:gap-8 mt-2 md:mt-4 text-sm md:text-base lg:text-lg uppercase">
      {categories.map(({ id, attributes }) => (
        <li
          key={id}
          className={`px-2 py-1 ${
            attributes.slug === activeCategorySlug
              ? "rounded-md bg-primary text-white"
              : null
          }`}
        >
          <Link href={`/category/${category}/${attributes.slug}`}>
            {attributes.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
