import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Wrapper } from "@/components/Wrapper";

const success = () => {
  return (
    <Wrapper>
      <div className="mt-12 flex flex-col items-center">
        <span className="text-xl md:text-2xl lg:text-3xl">
          Заказ успешно принят!
        </span>
        <Image
          src="/svgs/success.svg"
          width={500}
          height={500}
          alt="Успешно"
          className="xl:w-[20%] md:w-[25%] w-[30%]"
        />
        <Link
          href="/"
          className="mt-8 text-xl lg:text-2xl text-primary underline"
        >
          На главную
        </Link>
      </div>
    </Wrapper>
  );
};

export default success;
