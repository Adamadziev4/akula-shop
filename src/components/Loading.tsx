import React from "react";

export const Loading = (props: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return (
    <div
      className={`${
        props.loading ? "fixed" : "hidden"
      } left-0 top-0 flex h-[100%] w-full flex-col items-center justify-center gap-5 bg-white/[0.6]`}
    >
      {props.children}
    </div>
  );
};
