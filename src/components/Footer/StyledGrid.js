import { styled, Grid } from '@nextui-org/react';

export const StyledGrid = styled(Grid, {
  variants: {
    variant: {
      card: {
        width: '250px',
      },
      form: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
  },
});
