import React from "react";
import Image from "next/image";

const advantages = [
  {
    id: 1,
    description: "Работаем с европейскими производителями",
    imgUrl: "/svgs/advantages/world.png",
  },
  {
    id: 2,
    description: "28 летняя история магазина",
    imgUrl: "/svgs/advantages/shield.png",
  },
  {
    id: 3,
    description: "Собственное помещение",
    imgUrl: "/svgs/advantages/house.svg",
  },
  {
    id: 4,
    description: "Большая клиентская база",
    imgUrl: "/svgs/advantages/people.svg",
  },
];

export const AdvantagesSection = () => {
  return (
    <div className="mt-[80px] md:mt-[150px] lg:mt-[200px] px-6">
      <h1 className="md:text-sectionTitle text-2xl text-center">
        Наши преимущества
      </h1>

      <div className="grid grid-cols-1 text-sm md:text-base sm:grid-cols-2 sm:gap-x-16 gap-y-16 sm:gap-y-12 lg:gap-0 lg:flex sm:justify-between mt-10 lg:mt-20 lg:text-lg">
        {advantages.map(({ id, description, imgUrl }) => (
          <div key={id} className="grid lg:w-80 lg:h-24">
            <div className="flex justify-center h-[100px]">
              <Image
                src={imgUrl}
                width={id === 2 || id === 4 ? "90" : "100"}
                height="0"
                alt="world"
              />
            </div>
            <p className="self-center text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
