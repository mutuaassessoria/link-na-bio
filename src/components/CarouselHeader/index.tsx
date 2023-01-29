/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./styles";

import { banner_slide } from "mocks/banner_slide";

export const CarouselHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {banner_slide &&
          banner_slide.map((banner) => (
            <S.CarouselHeader_Image_Wrapper key={banner.id}>
              <img src={banner.image} alt={`Banner${banner.id}`} />
            </S.CarouselHeader_Image_Wrapper>
          ))}
      </Slider>
    </S.Wrapper>
  );
};
