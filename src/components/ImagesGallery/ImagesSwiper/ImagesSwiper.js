import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

// import ImagesData from '../imagesData.json';

import { StyledMainSwiper } from '@/components/ImagesGallery/ImagesSwiper/StyledMainSwiper';
import { StyledSwiperSlide } from '@/components/ImagesGallery/ImagesSwiper/StyledSwiperSlide';
import { StyledMainImage } from '@/components/ImagesGallery/ImagesSwiper/StyledMainImage';
import { StyledSmallImage } from '@/components/ImagesGallery/ImagesSwiper/StyledSmallImage';

export default function ImagesSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <StyledMainSwiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="arrow-swiper images-swiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <StyledSwiperSlide className={`swiper-slide gallery-swiper`}>
              <StyledMainImage
                src={image}
                alt="image-slide"
                height={'inherit'}
                className="main-image"
              />
            </StyledSwiperSlide>
          </SwiperSlide>
        ))}
      </StyledMainSwiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper gallery-swiper`}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <StyledSmallImage src={image} alt="image-slide-small" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
