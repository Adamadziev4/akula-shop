import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FadeLoader } from "react-spinners";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./ui/Button";
import { Loading } from "./Loading";
import { CartContext } from "@/context/CartProvider";
import { SectionTitle } from "@/components/SectionTitle";

import { toOrderItems } from "@/utils/helpers/toOrderItems";
import { sendOrderApi } from "@/utils/api";

export type PersonalDataForm = {
  name: string;
  phone: string;
  delivery: "Курьером" | "Самовывоз из магазина";
  city: string;
  street: string;
  house: string;
  flat: string;
  pay: "Наличными курьеру" | "Онлайн перевод";
  changeFrom?: string;
  comment?: string;
};

export const FormOrder = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const { cartItems, totalPrice, clearCartItems } = useContext(CartContext);

  const {
    watch,
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PersonalDataForm>({
    defaultValues: {
      delivery: "Курьером",
      city: "Махачкала",
      pay: "Наличными курьеру",
    },
  });

  const deliveryCourier = watch("delivery") === "Курьером";
  const cashPay = watch("pay") === "Наличными курьеру";

  if (!cashPay) {
    setValue("changeFrom", "");
  }

  const onSubmit: SubmitHandler<PersonalDataForm> = async (data) => {
    if (cartItems.length < 1) {
      alert("Ваша корзина пуста");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      reset();
      clearCartItems();
      setIsLoading(false);
      router.push("/success");
    }, 1000);

    await sendOrderApi(data, toOrderItems(cartItems));
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[1024px]">
        <SectionTitle title="Оформление заказа" />

        <h1 className="text-lg lg:text-2xl pb-4 pt-8">1. Контактные данные</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm md:text-base">
              Ваше имя{" "}
              <span className={` ${errors.name ? "text-red-600" : ""}`}>*</span>
            </span>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border border-black/30 outline-none py-1 px-2 text-sm md:text-base"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm md:text-base">
              Ваш номер телефона{" "}
              <span className={` ${errors.phone ? "text-red-600" : ""}`}>
                *
              </span>{" "}
            </span>
            <input
              {...register("phone", { required: true })}
              type="text"
              className="border border-black/30 outline-none py-1 px-2 text-sm md:text-base"
            />
          </label>
        </div>

        <h1 className="text-lg lg:text-2xl pt-14 pb-4">2. Адрес</h1>
        <div className="grid sm:grid-cols-2 gap-4 max-w-[800px]">
          <label className="flex items-center gap-3">
            <input
              {...register("delivery")}
              name="delivery"
              type="radio"
              value="Самовывоз из магазина"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <div>
              <span className="text-sm md:text-base">
                Самовывоз из магазина
              </span>
              <p className="text-gray-400 text-[12px] md:text-sm">
                Адрес: г. Махачкала, ул. Коркмасова 5
              </p>
            </div>
          </label>
          <label className="flex gap-3">
            <input
              {...register("delivery")}
              name="delivery"
              type="radio"
              value="Курьером"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-sm md:text-base">Доставка курьером</span>
          </label>
        </div>

        {deliveryCourier && (
          <div className="grid grid-cols-3 gap-4 pt-4">
            <label className="flex flex-col col-span-3">
              <span className="text-sm md:text-base">
                Город{" "}
                <span className={` ${errors.city ? "text-red-600" : ""}`}>
                  *
                </span>
              </span>
              <input
                {...register("city", { required: deliveryCourier })}
                type="text"
                className="border border-black/30 outline-none py-1 px-2 text-sm md:text-base"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm md:text-base">
                Улица{" "}
                <span className={` ${errors.street ? "text-red-600" : ""}`}>
                  *
                </span>
              </span>
              <input
                {...register("street", { required: deliveryCourier })}
                type="text"
                className="border border-black/30 outline-none py-1 px-2 text-sm md:text-base"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm md:text-base">
                Дом{" "}
                <span className={` ${errors.house ? "text-red-600" : ""}`}>
                  *
                </span>
              </span>
              <input
                {...register("house", { required: deliveryCourier })}
                type="text"
                className="border border-black/30 outline-none py-1 px-2 text-sm md:text-base"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm md:text-base">Квартира</span>
              <input
                {...register("flat")}
                type="text"
                className="border border-black/30 outline-none py-1 px-2 text-sm md:text-base"
              />
            </label>
          </div>
        )}

        <h1 className="text-lg lg:text-2xl pt-14 pb-4">3. Оплата</h1>
        <div className="grid sm:grid-cols-2 gap-4 max-w-[800px]">
          <label className="flex gap-3">
            <input
              {...register("pay")}
              name="pay"
              value="Наличными курьеру"
              type="radio"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-sm md:text-base">Наличными курьеру</span>
          </label>
          <label className="flex gap-3">
            <input
              {...register("pay")}
              name="pay"
              value="Онлайн перевод"
              type="radio"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-sm md:text-base">Онлайн перевод</span>
          </label>
          {cashPay ? (
            <div className="mt-4">
              <span>Сдача с</span>
              <input
                {...register("changeFrom")}
                className="ml-3 border border-black/30 px-2 text-sm md:text-base outline-none w-24"
              />
            </div>
          ) : null}
        </div>

        <h1 className="text-lg lg:text-2xl pt-14 pb-4">4. Комментарий</h1>
        <textarea
          {...register("comment")}
          placeholder="Комментарий к заказу..."
          className="border border-black/30 w-full h-36 outline-none p-2 text-sm md:text-base"
        />

        <h1 className="text-base md:text-lg lg:text-xl pt-4 pb-4">
          Общая сумма: {totalPrice} Р
        </h1>
        <div className="pb-5 text-sm md:text-base">
          Нажимая кнопку «Отправить», я принимаю условия{" "}
          <Link href="/offer-agreement" className="underline text-primary">
            «Публичной оферты»
          </Link>{" "}
          и даю своё согласие на обработку своих персональных данных в
          соответствии с соглашением{" "}
          <Link href="/privacy-policy" className="underline text-primary">
            «Об обработке персональных данных»
          </Link>
        </div>

        <Button isFull={true} isBig={true}>
          Отправить
        </Button>
      </div>

      <Loading loading={isLoading}>
        <FadeLoader color="#002039" loading={isLoading} className="z-10" />
      </Loading>
    </form>
  );
};
