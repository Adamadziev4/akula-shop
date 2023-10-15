import React from "react";

type ButtonProps = {
  bgColor?: string;
  color?: string;
  isLight?: boolean;
  isFull?: boolean;
  isBig?: boolean;
  isMiddle?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({
  bgColor = "primary/90",
  color = "white",
  isLight,
  isFull,
  isBig,
  isMiddle,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`${
        isLight
          ? `bg-white text-primary border border-primary`
          : `bg-${bgColor} text-${color}`
      } hover:brightness-125 ${
        isFull ? "w-full" : " "
      } px-6 rounded-md text-base active:-translate-y-1 transition-all ${
        isBig ? "py-4" : " "
      } ${isMiddle ? "py-3" : " "} shadow-sm py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
