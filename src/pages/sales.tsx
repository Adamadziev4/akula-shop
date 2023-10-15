import React from "react";

import { SectionTitle } from "@/components/SectionTitle";
import { Wrapper } from "@/components/Wrapper";
import { EmptySection } from "@/components/EmptySection";

const Sales = () => {
  return (
    <Wrapper>
      <SectionTitle title="Действующие акции" />

      <EmptySection title="Тут пока ничего нет" />
    </Wrapper>
  );
};

export default Sales;
