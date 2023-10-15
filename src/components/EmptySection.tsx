import Link from "next/link";
import React from "react";

type EmptySectionProps = {
  title: string;
};

export const EmptySection = ({ title }: EmptySectionProps) => {
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <p className="text-xl md:text-2xl">{title}</p>
      <Link href="/" className="md:text-xl text-primary underline decoration-1">
        На главную
      </Link>
    </div>
  );
};
