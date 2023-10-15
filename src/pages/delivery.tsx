import React from "react";

import { Wrapper } from "@/components/Wrapper";
import { SectionTitle } from "@/components/SectionTitle";

const Delivery = () => {
  return (
    <Wrapper>
      <SectionTitle title="Условия доставки" />

      <p className="text-center md:text-xl py-8 px-4">
        Доставка курьером в Махачкале бесплатно. В другие города доставка любой
        удобной для вас транспортной компанией или почтой
      </p>
    </Wrapper>
  );
};

export default Delivery;
