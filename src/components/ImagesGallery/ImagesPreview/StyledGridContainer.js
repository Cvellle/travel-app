import { styled, Grid } from '@nextui-org/react';

export const StyledGridContainer = styled(Grid.Container, {
  variants: {
    style: {
      main: {
        // px: '24px',
        cursor: 'pointer',
      },
      imgHolder: {
        width: '50%',
      },
    },
  },
});
