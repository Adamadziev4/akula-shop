import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CartContext } from "@/context/CartProvider";
import { FavoriteContext } from "@/context/FavoriteProvider";

const headerNav = [
  { id: 1, name: "Одежда", slug: "clothes", url: "/category/clothes" },
  { id: 2, name: "Обувь", slug: "shoes", url: "/category/shoes" },
  { id: 3, name: "Акции", slug: "sale", url: "/category/sale" },
];

export const Header = () => {
  const { query, pathname } = useRouter();

  const { cartItems } = useContext(CartContext);
  const { favItems } = useContext(FavoriteContext);

  const activeCategory = query.category || pathname.split("/")[2];

  return (
    <>
      <Link href="/" className="flex justify-center">
        <Image
          src="/logo.png"
          width={370}
          height={0}
          className="text-center xl:w-[370px] md:w-[300px] sm:w-[250px] w-[200px]"
          alt="akula-shop"
        />
      </Link>
      <div className="">
        <nav className="border-b border-primary/50 border-t text-primary py-3 lg:px-10 lg:py-3 flex justify-between items-center px-4">
          <ul className="flex items-center md:gap-5 xl:text-lg text-sm md:text-base uppercase">
            {headerNav.map(({ id, name, slug, url }) => (
              <Link key={id} href={url}>
                <li
                  className={`cursor-pointer py-1 px-2 lg:py-[6px] lg:px-4 rounded-md ${
                    activeCategory === slug
                      ? "bg-primary text-white"
                      : "text-primary"
                  }`}
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex gap-4 xl:gap-10">
            <Link href="/cart" className="relative">
              <Image
                src="/svgs/cart.png"
                className="lg:w-9 md:w-8 w-[26px]"
                width={50}
                height={0}
                alt="cart"
              />
              {cartItems.length ? (
                <span className="absolute -top-1 -right-2 bg-primary text-white pb-[2px] md:pb-0 px-[5px] md:px-[6px] rounded-2xl text-[10px] md:text-sm">
                  {cartItems.length}
                </span>
              ) : null}
            </Link>
            <Link href="/favorite" className="relative">
              <Image
                src="/svgs/fav.png"
                className="lg:w-9 md:w-8 w-[26px]"
                width={50}
                height={0}
                alt="favorite"
              />
              {favItems.length ? (
                <span className="absolute -top-1 -right-2 bg-red-700 text-white pb-[2px] md:pb-0 px-[5px] md:px-[6px] rounded-2xl text-[10px] md:text-sm">
                  {favItems.length}
                </span>
              ) : null}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
