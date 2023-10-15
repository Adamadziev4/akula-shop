import React from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

type LocationSectionProps = {
  isTitleOn: boolean;
  isMarginTop: boolean;
};

export const LocationSection = (props: LocationSectionProps) => {
  return (
    <div
      className={`${
        props.isMarginTop ? "mt-[80px] md:mt-[150px] lg:mt-[250px]" : ""
      }`}
    >
      {props.isTitleOn && (
        <>
          <h1 className="text-center text-2xl md:text-sectionTitle pb-1 md:pb-2">
            Мы находимся тут
          </h1>
          <p className="text-center text-sm md:text-base text-slate-600 pb-6">
            г. Махачкала, ул. Коркмасова 5 <br /> (Университетская площадь)
          </p>
        </>
      )}
      <YMaps>
        <Map
          defaultState={{ center: [42.984379, 47.494772], zoom: 17 }}
          width={600}
          height={500}
          className="w-full h-[400px] md:h-[500px]"
        >
          <Placemark defaultGeometry={[42.984379, 47.494772]} />
        </Map>
      </YMaps>
    </div>
  );
};
