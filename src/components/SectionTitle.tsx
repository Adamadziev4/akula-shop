import React from "react";

type SectionTitleProps = {
  title: string;
  children?: React.ReactNode;
};

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="border-t border-b border-primary/20 mt-8 py-5 sm:px-4">
      <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {props.title}
      </p>

      {props.children}
    </div>
  );
};
