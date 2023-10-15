import React from "react";

import { Wrapper } from "@/components/Wrapper";
import { LocationSection } from "@/components/sections/LocationSection";
import { SectionTitle } from "@/components/SectionTitle";

const OurStore = () => {
  return (
    <Wrapper>
      <SectionTitle title="Наш магазин" />
      <h1 className="text-center text-xl md:text-2xl py-8 px-4">
        Мы находися по адресу: <br className="md:hidden" />
        <span className="underline">г. Махачкала, ул. Коркмасова 5</span>
      </h1>

      <LocationSection isTitleOn={false} isMarginTop={false} />
    </Wrapper>
  );
};

export default OurStore;
