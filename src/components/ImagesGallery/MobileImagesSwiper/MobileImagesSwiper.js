import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import { Navigation, Lazy } from 'swiper';

import { StyledSwiper } from '@/components/ImagesGallery/MobileImagesSwiper/StyledSwiper';
import NumberOfImages from '@/components/ImagesGallery/NumberOfImages/NumberOfImages';
import ModalMobileImages from '@/components/ImagesGallery/ModalMobileImages/ModalMobileImages';

const AccommodationImagesSwiper = ({ images, title }) => {
  const [visibleMobile, setVisibleMobile] = useState(false);
  const [bigPicture, setBigPicture] = useState();
  const handlerMobile = (image) => {
    setBigPicture(image);
    setVisibleMobile(true);
  };

  return (
    <>
      <StyledSwiper
        rewind={true}
        navigation={true}
        lazy={true}
        modules={[Navigation, Lazy]}
        className="accommodation-swiper arrow-swiper"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            onClick={() => handlerMobile(image)}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={image}
              alt="swiper image"
              layout="fill"
              className="swiper-lazy"
            />
          </SwiperSlide>
        ))}
        {visibleMobile && (
          <ModalMobileImages
            visibleModal={visibleMobile}
            SetIfVisible={setVisibleMobile}
            image={bigPicture}
            title={title}
          />
        )}
        <NumberOfImages imagesNum={images.length} imagesShowed={1} />
      </StyledSwiper>
    </>
  );
};

export default AccommodationImagesSwiper;
