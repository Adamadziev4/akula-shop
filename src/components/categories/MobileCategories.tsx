import React from "react";
import Link from "next/link";
import Image from "next/image";

type MobileCategoriesProps = {
  categories: Category[];
  activeCategorySlug: string;
  category: "clothes" | "shoes";
};

export const MobileCategories = (props: MobileCategoriesProps) => {
  const [showCategories, setShowCategories] = React.useState(false);

  return (
    <div className="py-3 px-2 bg-primary/10 mt-4 sm:hidden">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShowCategories((prev) => !prev)}
      >
        <p>КАТЕГОРИИ</p>
        <Image
          src="/svgs/arrowDown.svg"
          width={20}
          height={20}
          alt="Стрелочка вниз"
        />
      </div>

      {showCategories && (
        <ul className="border-t border-primary/30 flex flex-col sm:flex-row justify-between gap-2 md:gap-8 mt-2 md:mt-5 text-sm md:text-base lg:text-lg uppercase overflow-scroll py-2">
          {props.categories.map(({ id, attributes }) => (
            <li
              key={id}
              onClick={() => setShowCategories(false)}
              className={`px-2 py-1 ${
                attributes.slug === props.activeCategorySlug
                  ? "rounded-md bg-primary text-white"
                  : null
              }`}
            >
              <Link href={`/category/${props.category}/${attributes.slug}`}>
                {attributes.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
