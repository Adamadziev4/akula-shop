import Link from "next/link";
import React from "react";
import { FadeLoader } from "react-spinners";

import { Button } from "./ui/Button";
import { Loading } from "./Loading";

import { sendOrderCall } from "@/utils/api";

export const OrderCall = (props: {
  title: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  productSlug?: string;
}) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneNumError, setPhoneNumError] = React.useState("");

  const [sendSuccess, setSendSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onClickSendPhone = async () => {
    if (phoneNumber.length < 6) {
      setPhoneNumError("Минимум 6 цифр");

      return;
    }

    setLoading(true);

    await sendOrderCall(
      phoneNumber,
      "Покупка в 1 клик",
      props.productSlug ? props.productSlug : ""
    );

    setTimeout(() => {
      setLoading(false);
      props.setModalActive(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col z-20">
      <h1 className="text-center text-xl mb-6">{props.title}</h1>
      <p>Введите ваш номер телефона</p>
      <input
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          setPhoneNumError("");
        }}
        placeholder=""
        className="py-1 px-2 border border-black outline-none my-2"
      />
      {phoneNumError && (
        <p className="mb-2 text-sm text-red-600">{phoneNumError}</p>
      )}
      <div className="pb-5 text-sm max-w-[400px] decoration-none">
        Нажимая кнопку «Отправить», я даю своё согласие на обработку своих
        персональных данных{" "}
        <Link href="/privacy-policy" className="underline text-primary">
          «Об обработке персональных данных»
        </Link>
      </div>
      <Button onClick={onClickSendPhone}>Отправить</Button>

      <Loading loading={loading}>
        <FadeLoader color="#002039" loading={loading} className="z-10" />
      </Loading>
    </div>
  );
};
