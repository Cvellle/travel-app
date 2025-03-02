import { styled } from '@nextui-org/react';
import { SwiperSlide } from 'swiper/react';

export const StyledSwiperSlide = styled(SwiperSlide, {
  marginRight: '15px',
  textAlign: 'center',
  fontSize: '18px',
  // boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
});
