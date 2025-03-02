import { styled, Image } from '@nextui-org/react';

export const StyledImage = styled(Image, {
  // borderRadius: '24px',
  variants: {
    style: {
      bigScreen: {
        borderRadius: '24px',
      },
      mobile: {
        borderRadius: 'unset',
      },
    },
  },
});
