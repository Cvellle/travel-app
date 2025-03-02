import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Image, Container } from '@nextui-org/react';

export default function SearchResultCardSwiper() {
  return (
    <Container css={{ maxWidth: '300px', padding: 0 }}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="img-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="img-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="img-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="img-4"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
