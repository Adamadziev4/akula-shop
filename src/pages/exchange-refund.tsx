import React from "react";

import { Wrapper } from "@/components/Wrapper";
import { SectionTitle } from "@/components/SectionTitle";

const ExchangeRefund = () => {
  return (
    <Wrapper>
      <SectionTitle title="Обмен и возврат" />

      <p className="text-center md:text-xl py-8 px-4">
        Обмен и возврат возможны в течении 14 дней
      </p>
    </Wrapper>
  );
};

export default ExchangeRefund;
