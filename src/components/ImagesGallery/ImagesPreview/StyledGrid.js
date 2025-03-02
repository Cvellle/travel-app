import { styled, Grid } from '@nextui-org/react';

export const StyledGrid = styled(Grid, {
  variants: {
    style: {
      main: {
        width: '50%',
        marginRight: '10px',
      },
      imgHolder: {
        marginBottom: '10px',
      },
      imgHolderTwo: {
        position: 'relative',
      },
      mobileImg: {
        position: 'relative',
        width: '100%',
        cursor: 'pointer',
      },
    },
  },
});
