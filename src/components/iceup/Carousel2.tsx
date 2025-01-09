"use client";

import { Fragment, useState } from "react";

import type Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Carousel2() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const slideImages = [
    { id: 1, url: "/img/iceup/dongpae-iceup-main-1.png", linkUrl: "/product/product01"},
    { id: 2, url: "/img/iceup/dongpae-iceup-main-2.png", linkUrl: "/product/product01" },
    { id: 3, url: "/img/iceup/dongpae-iceup-main-3.png", linkUrl: "/product/product01" },
    { id: 4, url: "/img/iceup/dongpae-iceup-main-4.png", linkUrl: "/product/product01" },
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
        {slideImages.map(({ url, id, linkUrl }) => (
          <SwiperSlide
            key={id}
            style={{ backgroundImage: `url(${url})` }}
            className="bg-overlay bg-overlay-400 bg-dark bg-image"
          >
              <Link href={linkUrl} className="link">GO TO 3D CONFIGURATOR <Image src="/img/iceup/arrow.png" alt="" width={44} height={19}/></Link>
          </SwiperSlide>
        ))}
      </SwiperCarousel>

      {/* CUSTOM NAVIGATION */}
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev" />
          <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
        </div>
      </div>

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
