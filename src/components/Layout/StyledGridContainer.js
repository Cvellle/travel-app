import { styled, Grid } from '@nextui-org/react';

export const StyledGridContainer = styled(Grid.Container, {
  variants: {
    variant: {
      container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(248, 248, 248)',
        '@sm': {
          display: 'flex',
          flexDirection: 'row',
          columnGap: '32px',
        },
      },
    },
  },
});
