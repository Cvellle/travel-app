import { Container, Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SimilarOffersCard } from '@/features/similar-offers-card/SimilarOffersCard';

export const SimilarOffersSwiper = ({ similarOffers }) => {
  const t = useTranslations('Offer');

  return (
    <Container css={{ display: 'initial' }}>
      <Text
        css={{
          fontSize: '26px',
          fontWeight: 'bold',
          '@sm': {
            fontSize: '32px',
          },
        }}
      >
        {t('offer:similarOffer')}
      </Text>

      <Swiper
        slidesPerView={1.46}
        breakpoints={{
          314: {
            slidesPerView: 1.0,
          },
          374: {
            slidesPerView: 1.25,
          },
          425: {
            slidesPerView: 1.25,
          },
          525: {
            slidesPerView: 1.5,
          },
          635: {
            slidesPerView: 1.5,
          },
          695: {
            slidesPerView: 1.65,
          },
          767: {
            slidesPerView: 1.8,
          },
          825: {
            slidesPerView: 1.9,
          },
          855: {
            slidesPerView: 2.0,
          },
          895: {
            slidesPerView: 2.1,
          },
          935: {
            slidesPerView: 2.25,
          },
          1000: {
            slidesPerView: 2.4,
          },
          1060: {
            slidesPerView: 2.5,
          },
          1110: {
            slidesPerView: 2.6,
          },
          1140: {
            slidesPerView: 2.75,
          },
          1235: {
            slidesPerView: 3.25,
          },
          1315: {
            slidesPerView: 3.4,
          },
          1435: {
            slidesPerView: 3.5,
          },
          1500: {
            slidesPerView: 3.5,
          },
          1550: {
            slidesPerView: 3.65,
          },
          1600: {
            slidesPerView: 3.5,
          },
          1650: {
            slidesPerView: 3.5,
          },
          1700: {
            slidesPerView: 4.5,
          },
          1800: {
            slidesPerView: 4.5,
          },
          1900: {
            slidesPerView: 4.5,
          },
          2000: {
            slidesPerView: 5.0,
          },
          2456: {
            slidesPerView: 6.0,
          },
        }}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation]}
        className="mySwiper similar-offer-swiper arrow-swiper"
      >
        {similarOffers?.map((offer) =>
          offer ? (
            <SwiperSlide>
              <SimilarOffersCard similarOffer={offer} />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </Container>
  );
};
