import Link from "next/link";
import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  activeCategory: string;
  category: "clothes" | "shoes" | "sale";
};

export const Pagination = ({
  totalPages,
  currentPage,
  activeCategory,
  category,
}: PaginationProps) => {
  return (
    <ul
      className={`${
        totalPages < 2 ? "hidden" : "flex"
      } flex justify-center items-center gap-3 sm:gap-3 sm:text-xl lg:text-lg px-4`}
    >
      {currentPage === 1 ? (
        <li
          className={`bg-white border-primary/20 border-[1px] w-6 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed`}
        >
          {"<"}
        </li>
      ) : (
        <Link
          href={`/category/${category}/${activeCategory}?page=${
            currentPage - 1
          }`}
        >
          <li
            className={`bg-white border-primary/20 border-[1px] w-6 h-8 flex items-center justify-center cursor-pointer`}
          >
            {"<"}
          </li>
        </Link>
      )}

      {currentPage > 2 && (
        <>
          <Link href={`/category/${category}/${activeCategory}?page=1`}>
            <li
              className={`border-primary/20 border w-6 h-8 flex items-center justify-center`}
            >
              1
            </li>
          </Link>
          {currentPage > 3 && "..."}
        </>
      )}

      {currentPage !== 1 && (
        <Link
          href={`/category/${category}/${activeCategory}?page=${
            currentPage - 1
          }`}
        >
          <li
            className={`border-primary/20 border w-6 h-8 flex items-center justify-center`}
          >
            {currentPage - 1}
          </li>
        </Link>
      )}

      <li
        className={`border-primary/20 border w-6 h-8 flex items-center justify-center ${
          currentPage ? "bg-primary text-white" : "bg-white"
        }`}
      >
        {currentPage}
      </li>

      {currentPage !== totalPages && (
        <Link
          href={`/category/${category}/${activeCategory}?page=${
            currentPage + 1
          }`}
        >
          <li
            className={`border-primary/20 border w-6 h-8 flex items-center justify-center`}
          >
            {currentPage + 1}
          </li>
        </Link>
      )}

      {currentPage < totalPages - 1 && (
        <>
          {currentPage < totalPages - 2 && "..."}
          <Link
            href={`/category/${category}/${activeCategory}?page=${totalPages}`}
          >
            <li
              className={`border-primary/20 border w-6 h-8 flex items-center justify-center`}
            >
              {totalPages}
            </li>
          </Link>
        </>
      )}

      {currentPage === totalPages ? (
        <li
          className={`bg-white border-primary/20 border w-6 h-8 flex items-center justify-center cursor-pointer text-gray-500`}
        >
          {">"}
        </li>
      ) : (
        <Link
          href={`/category/${category}/${activeCategory}?page=${
            currentPage + 1
          }`}
        >
          <li
            className={`bg-white border-primary/20 border w-6 h-8 flex items-center justify-center cursor-pointer`}
          >
            {">"}
          </li>
        </Link>
      )}
    </ul>
  );
};
