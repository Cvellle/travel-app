import { styled, Card } from '@nextui-org/react';

export const StyledCard = styled(Card, {
  variants: {
    variant: {
      card: {
        borderRadius: 0,
        '@sm': {
          borderRadius: '24px',
        },
        '@md': {
          width: '100%',
          maxWidth: '1024px',
        },
      },
      image: {
        borderRadius: 0,
        width: '100%',
        '@sm': {
          padding: 0,
          borderRadius: '24px',
          width: '439px',
        },
      },
    },
  },
});
