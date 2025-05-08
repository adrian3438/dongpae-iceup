"use client";

import { Fragment, useState } from "react";

import type Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";

interface Props {
  language: any;
}

export default function Carousel3({language}: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const slideImages = [
    { id: 1, url: "/img/iceup/dongpae-iceup-brand_1.png" },
  ];

  return (
    <Fragment>
      <SwiperCarousel
        className="main-swiper"
        spaceBetween={10}
        pagination={false}
        navigation={{ prevEl, nextEl }}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
        {slideImages.map(({ url, id }) => (
          <SwiperSlide
            key={id}
            style={{ backgroundImage: `url(${url})` }}
            className="bg-overlay bg-overlay-400 bg-dark bg-image"
          >
              <div className="container d-flex align-items-center h-100">
                  <div className="w-100">
                      <h1 className="text-white text-center fs-70 mb-20">{language.brand_47}</h1>
                      <h2 className="text-white fs-35 mb-7">{language.brand_48} <span style={{color: "#04DCFF"}}>{language.brand_49}</span></h2>
                      <p className="text-white fs-20">{language.brand_50}<br/>
                      {language.brand_51}<br/>
                      {language.brand_52}<br/>
                      {language.brand_53}</p>
                  </div>
              </div>
          </SwiperSlide>
        ))}
      </SwiperCarousel>


        {/* THUMBS CAROUSEL NAVIGATION */}
        <SwiperCarousel
            freeMode
            threshold={2}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}>
      </SwiperCarousel>
    </Fragment>
  );
}
