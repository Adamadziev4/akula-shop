import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

type ProductCarouselProps = {
  title: string;
  children: React.ReactNode;
  url?: string;
};

export const ProductCarousel = ({
  title,
  children,
  url,
}: ProductCarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    preMobile: {
      breakpoint: { max: 600, min: 300 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[80px] md:mt-[150px] lg:mt-[200px]">
      <p className="md:text-sectionTitle text-2xl text-center pb-6">
        {url ? <Link href={url}>{title}</Link> : <span>{title}</span>}
      </p>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {children}
      </Carousel>
    </div>
  );
};
