import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/lazy';
import { Navigation, Lazy } from 'swiper';

import ModalImages from '@/components/ImagesGallery/ModalImages/ModalImages';
import ModalMobileImages from '@/components/ImagesGallery/ModalMobileImages/ModalMobileImages';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { StyledSwiper } from '@/features/accommodation/components/accommodationImagesSwiper/StyledSwiper';

const AccommodationImagesSwiper = ({ images, accommodationName }) => {
  const isMd = useMediaQuery(960);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  return (
    <>
      <StyledSwiper
        rewind={true}
        navigation={true}
        lazy={true}
        modules={[Navigation, Lazy]}
        className="accommodation-swiper arrow-swiper"
      >
        {images.map((image) => {
          return (
            <SwiperSlide
              key={`${image}-accommodation`}
              onClick={handler}
              style={{ cursor: 'pointer' }}
            >
              {visible && (
                <ModalImages
                  visibleModal={visible}
                  SetIfVisible={setVisible}
                  images={images}
                />
              )}
              {isMd && visible && (
                <ModalMobileImages
                  visibleModal={visible}
                  SetIfVisible={setVisible}
                  image={image}
                  title={accommodationName}
                />
              )}
              <Image
                src={image}
                alt="swiper image"
                layout="fill"
                className="swiper-lazy"
              />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </>
  );
};

export default AccommodationImagesSwiper;
