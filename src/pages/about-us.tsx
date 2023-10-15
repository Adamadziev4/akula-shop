import React from "react";

import { Wrapper } from "@/components/Wrapper";
import { SectionTitle } from "@/components/SectionTitle";

const AboutUs = () => {
  return (
    <Wrapper>
      <SectionTitle title="О компании" />

      <div className="flex justify-center">
        <div className="text-center md:text-xl max-w-[1200px] py-8 px-4">
          <p className="">
            Мы магазин с более 28 летней историей. Работаем напрямую с
            Европейскими брендами(Италия, Германия, Испания). Очень дорожим
            своей репутацией и готовы становиться еще лучше с вашей помощью и
            обратной связью
          </p>
          <p className="text-center mt-4">
            Наш девиз:{" "}
            <span className="underline">
              "Превосходя ожидания - стремись к лучшему"
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
