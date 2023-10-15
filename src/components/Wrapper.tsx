import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center h-[100%]">
      <div className="w-full max-w-screen-2xl flex flex-col min-h-[100%]">
        <Header />

        <main className="flex-[1_1_auto] px-4">{children}</main>

        <Footer />
      </div>
    </div>
  );
};
