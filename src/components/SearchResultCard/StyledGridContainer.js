import { styled, Grid } from '@nextui-org/react';

export const StyledGridContainer = styled(Grid.Container, {
  variants: {
    variant: {
      container: {
        rowGap: '6px',
        flexDirection: 'column',
        '@sm': {
          rowGap: '16px',
        },
      },
      location: {
        alignItems: 'center',
        columnGap: '8px',
      },
      spaceBtw: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      spaceBtwRev: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        '@sm': {
          flexDirection: 'row',
        },
      },
      icons: {
        justifyContent: 'flex-end',
        columnGap: '16px',
        '@sm': {
          justifyContent: 'flex-start',
          columnGap: '20px',
        },
      },
      priceContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        '@sm': {
          justifyContent: 'flex-end',
        },
      },
    },
  },
});
