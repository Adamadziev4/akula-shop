import Link from "next/link";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import Modal from "../Modal";
import { Button } from "../ui/Button";
import { OrderCall } from "../OrderCall";
import { CartContext } from "@/context/CartProvider";
import { FavoriteContext } from "@/context/FavoriteProvider";

import "react-toastify/dist/ReactToastify.css";

type ProductInfoProps = {
  id: number;
  typeProduct: "clothes" | "shoes";
  slugProduct: string;
  categoryProductSlug: string;
  categoryProductName: string;
  name: string;
  article: string;
  color: string;
  price: number;
  old_price?: number;
  imageUrl: string;
  colorList?: Color[];
  size: Size[];
  characteristics?: Characteristics[];
  otherColors: {
    color: string;
    slug: string;
    colorCode?: string;
  }[]
};

export const ProductInfo = (props: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [modalActive, setModalActive] = React.useState(false);

  const { addCartItem } = useContext(CartContext);
  const { addFavItem } = useContext(FavoriteContext);

  const notify = (mode: "cart" | "fav") => {
    {
      mode === "cart"
        ? toast.success("Товар добавлен в корзину", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        : toast("Добавлено в избранное", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  };

  const onClickAddToCart = () => {
    if (!selectedSize) {
      alert("Выберите размер");
      return;
    }

    addCartItem({
      id: props.id,
      name: props.name,
      price: props.price,
      slug: props.slugProduct,
      selectedSize: selectedSize,
      article: props.article,
      imageUrl: props.imageUrl,
      count: 0,
    });

    notify("cart");
  };

  const onClickAddToFav = () => {
    const res = addFavItem({
      name: props.name,
      imageUrl: props.imageUrl,
      price: props.price,
      slug: props.slugProduct,
    });

    if (!res) return;

    notify("fav");
  };

  // console.log(props.otherColors[0].colorCode)

  return (
    <div className="lg:w-[50%] z-10">
      <div className="sticky top-5 bottom-5">
        <ToastContainer className="z-50" />

        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <OrderCall
            title="Купить в 1 клик!"
            setModalActive={setModalActive}
            productSlug={props.slugProduct}
          />
        </Modal>

        <p className="text-gray-600 text-sm pb-2">
          <Link
            href={`/category/${props.typeProduct}/${props.categoryProductSlug}`}
            className="underline decoration-gray-400"
          >
            {props.categoryProductName}
          </Link>
          {" > "}
          {props.name}
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl pb-4 md:pb-7">
          {props.name}
        </p>

        <span className="pr-4">
          Артикул:{" "}
          <span className="text-black/70">
            {props.article || "Артикула нет"}
          </span>
        </span>

        <span>
          Цвет: <span className="text-black/70">{props.color}</span>
        </span>

        <p className="pt-4 pb-2 md:pt-7 md:pb-5 text-2xl md:text-3xl">
          {props.price} P{" "}
          <span className="pl-2 text-base md:text-xl text-black/50 line-through">
            {props.old_price} P
          </span>
        </p>

        <Button isLight={true} onClick={() => setModalActive(true)}>
          Купить в 1 клик
        </Button>

        {props.otherColors?.length ? (
          <ul className="flex gap-4">
            {props.otherColors.map(({ color, slug, colorCode }) => (
              <Link
                key={slug}
                href={`/product/${slug}`}
                className={`${"mt-7"}`}
              >
                <li
                  style={{ backgroundColor: colorCode }}
                  className={`px-[14px] py-[14px] rounded-2xl border cursor-pointer ${
                    slug === props.slugProduct
                      ? "border-black/100"
                      : ""
                  }`}
                />
              </Link>
            ))}
          </ul>
        ) : null}

        {/* {props.colorList?.length ? (
          <ul className="flex gap-4">
            {props.colorList.map(({ color, code, product, inStock }) => (
              <Link
                key={code}
                href={`/product/${
                  product?.data?.attributes?.slug
                    ? product.data.attributes.slug
                    : props.slugProduct
                }`}
                className={`${!inStock ? "hidden" : "mt-7"}`}
              >
                <li
                  style={{ backgroundColor: `${code}` }}
                  className={`px-[14px] py-[14px] rounded-2xl cursor-pointer border ${
                    product?.data?.attributes.slug === props.slugProduct
                      ? "border-black/70"
                      : "border-black/20"
                  }`}
                />
              </Link>
            ))}
          </ul>
        ) : null} */}

        <ul className="flex gap-4 py-7">
          {props.size.map(({ size, inStock, id }) => (
            <li
              key={id}
              className={`text-sm cursor-pointer border-2 hover:bg-primary/90 hover:text-white border-primary/80 py-[2px] px-[6px] md:px-2 ${
                selectedSize === size ? "bg-primary/90 text-white" : ""
              }  ${
                !inStock
                  ? "border-primary/20 text-primary/50 pointer-events-none cursor-not-allowed"
                  : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
          <Button onClick={onClickAddToCart}>В корзину</Button>
          <Button bgColor="red-700" onClick={onClickAddToFav}>
            В избранное
          </Button>
        </div>

        {props.characteristics && props.characteristics.length ? (
          <>
            <p className="text-2xl md:text-3xl pt-10">Характеристики</p>
            <ul className="pt-4 grid gap-3 text-base md:text-lg">
              {props.characteristics.map(({ property, value }) => (
                <li key={property} className="flex justify-between w-full">
                  <p className="whitespace-nowrap">{property}</p>
                  <span className="border-b border-black/40 border-dashed w-[90%] mb-[6px]"></span>
                  <p className="whitespace-nowrap">{value}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};
