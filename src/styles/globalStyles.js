import { globalCss } from '@nextui-org/react';

export const globalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    minHeight: '100vh',
    fontFamily: '"Roboto", sans-serif',
    overflow: 'auto !important',
  },
  '#__next': { minHeight: '100vh' },
  '#__next > div': { minHeight: '100vh' },
  '.gallery-swiper .swiper-slide': {
    width: '25%',
    height: '100%',
    opacity: ' 0.4',
  },
  '.mySwiper': {
    height: '25%',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    padding: '10px 0',
  },
  '.accommodation-swiper.swiper img': {
    objectFit: 'cover',
  },
  '.accommodation-swiper.swiper': {
    margin: '0px 0px 0px 0px',
    width: 'auto',
    minWidth: '-webkit-fill-available',
    minHeight: '350px',
  },
  '@media only screen and (min-width: 960px)': {
    '.accommodation-swiper.swiper': {
      margin: '0px 30px 0px 0px',
      width: '439px',
      minWidth: '439px',
      minHeight: '298px',
    },
  },
  '.arrow-swiper .swiper-button-next ': {
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    backgroundImage: 'url(/images/arrowNext.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    borderRadius: '50%',
    padding: '23px',
  },
  '.arrow-swiper .swiper-button-prev': {
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    backgroundImage: 'url(/images/arrowPrev.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    borderRadius: '50%',
    padding: '23px',
  },
  '.arrow-swiper .swiper-button-next::after': {
    display: 'none',
  },
  '.arrow-swiper .swiper-button-prev::after': {
    display: 'none',
  },
  '.gallery-swiper .swiper-slide-thumb-active ': { opacity: '1' },
  '.swiper-slider.gallery-swiper': {
    width: '100%',
  },
  '.gallery-swiper': {
    height: 'auto',
  },
  '.homepage-swiper.swiper': {
    width: '100%',
    height: '100%',
    padding: '20px 0 60px',
    userSelect: 'none',

    '@smMax': {
      padding: '60px 0 60px 16px',
    },
  },
  '.swiper-slide.swiper-card': {
    width: 'initial !important',
    marginRight: 40,

    '@mdMax': {
      marginRight: 18,
    },
  },
  '.swiper-slide > img': {
    display: 'block',
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  // '.homepage-swiper div[class^="swiper-button"]': {
  //   backgroundColor: '#F5BC94',
  //   color: '#fff',
  //   width: 70,
  //   height: 70,
  //   borderRadius: '50%',
  //   transition: '0.3s',
  //   '@smMax': {
  //     display: 'none',
  //   },
  // },
  '.oliverova-kartica': {
    width: '330px !important',
    height: '443px !important',
    marginRight: 'px !important',
    textAlign: 'center',
    fontSize: '18px',
    borderRadius: '20px',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)',
    '@mdMax': {
      width: '300px !important',
    },
    '@smMax': {
      maxWidth: '220px',
      height: '276px !important',
    },
    // height: '320px !important',
  },
  '.homepage-swiper .swiper-pagination-bullet-active': {
    backgroundColor: '#F5BC94',
  },
  '.cveletova-kartica': {
    width: 405,
    height: 395,
    backgroundColor: 'tomato',

    '@mdMax': {
      width: 193,
      height: 287,
    },
  },
});
