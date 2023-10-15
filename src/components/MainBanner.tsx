import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";

import { API_URL } from "@/utils/urls";

import "react-responsive-carousel/lib/styles/carousel.min.css";

type MainBannerProps = {
  bannerList: Banner[];
};

export const MainBanner = ({ bannerList }: MainBannerProps) => {
  const { push } = useRouter();

  const onClickImg = (url: string) => {
    push(url);
  };

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      className="relative w-full text-[20px] text-white mt-4"
      renderArrowPrev={(clickHandler) => (
        <div
          onClick={clickHandler}
          className="absolute bottom-[1px] right-[36px] z-10 flex h-[35px] w-[35px] cursor-pointer items-center
            justify-center bg-black hover:opacity-70 md:right-[52px] lg:right-[72px] md:h-[50px] md:w-[50px] lg:h-[70px] lg:w-[70px]"
        >
          <BiArrowBack className="xl:text-2xl md:text-xl text-sm text-white" />
        </div>
      )}
      renderArrowNext={(clickHandler) => (
        <div
          onClick={clickHandler}
          className="absolute bottom-[1px] right-0 z-10 flex h-[35px] w-[35px] cursor-pointer items-center
              justify-center bg-black hover:opacity-70 md:h-[50px] md:w-[50px] lg:h-[70px] lg:w-[70px]"
        >
          <BiArrowBack className="rotate-180 xl:text-2xl md:text-xl text-sm text-white" />
        </div>
      )}
    >
      {bannerList?.map(({ id, attributes }) => (
        <Link href={attributes.url ? attributes.url : ""} key={id}>
          <div className="cursor-pointer">
            <Image
              width={1360}
              height={300}
              alt="banner"
              src={`${API_URL}${attributes.image.data.attributes.url}`}
              // onClick={() => onClickImg(attributes.url)}
              className="object-cover md:object-cover"
            />
          </div>
        </Link>
      ))}
    </Carousel>
  );
};
