import { styled, Text } from '@nextui-org/react';

export const StyledText = styled(Text, {
  '&.nextui-image': {
    // width: '400px',
  },
  variants: {
    variant: {
      text: {
        display: 'none',
        '@sm': {
          display: 'block',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19px',
          maxWidth: '330px',
        },
      },
      logo: {
        '@sm': {
          paddingRight: '30px',
          alignSelf: 'flex-end',
          paddingTop: '16px',
        },
      },
      city: {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '29px',
        '@sm': {
          fontSize: '32px',
          lineHeight: '38px',
          alignSelf: 'flex-start',
        },
      },
      country: {
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
        '@sm': {
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '24px',
        },
      },
      priceFrom: {
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
        '@sm': {
          fontSize: '32px',
          lineHeight: '38px',
          paddingRight: '18px',
        },
      },
      priceBold: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '19px',
        '@sm': {
          fontSize: '32px',
          lineHeight: '38px',
          paddingRight: '18px',
        },
      },
      transportType: {
        svg: {
          width: '20px',
          height: '14px',
        },
        '@sm': {
          svg: {
            width: '31px',
            height: '21px',
          },
        },
      },
      serviceType: {
        svg: {
          width: '21px',
          height: '14px',
        },
        '@sm': {
          svg: {
            width: '31px',
            height: '21px',
          },
        },
      },
      // coffee: {
      //   svg: {
      //     width: '14px',
      //     height: '14px',
      //   },
      //   '@sm': {
      //     svg: {
      //       width: '21px',
      //       height: '21px',
      //     },
      //   },
      // },
    },
  },
});
