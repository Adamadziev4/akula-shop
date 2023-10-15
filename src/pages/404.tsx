import React from "react";
import Link from "next/link";

import { Wrapper } from "@/components/Wrapper";

const Error = () => {
  return (
    <Wrapper>
      <div className="h-[100%] flex flex-col items-center justify-center">
        <h1 className="text-2xl">Такой страницы не существует</h1>

        <Link href="/" className="text-2xl text-primary/90 underline">
          На главную
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
