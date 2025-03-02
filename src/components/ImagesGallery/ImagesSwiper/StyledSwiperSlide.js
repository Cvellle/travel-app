import { styled } from '@nextui-org/react';
// import { SwiperSlide } from 'swiper/react';

export const StyledSwiperSlide = styled('div', {
  textAlign: 'center',
  fontSize: '18px',

  /* Center slide text vertically */
  display: '-webkit-box',
  display: '-ms-flexbox',
  display: '-webkit-flex',
  display: 'flex',
  webkitBoxPack: 'center',
  msFlexPack: 'center',
  webkitJustifyContent: 'center',
  justifyContent: 'center',
  webkitBoxAlign: 'center',
  msFlexAlign: 'center',
  webkitAlignItems: 'center',
  alignItems: 'center',
});
