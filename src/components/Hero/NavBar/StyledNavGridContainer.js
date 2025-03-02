import { styled, Grid } from '@nextui-org/react';

export const StyledNavGridContainer = styled(Grid.Container, {
  variants: {
    style: {
      css: {
        px: '35px',
        py: '30px',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 100,
      },
    },
  },
  '.nextui-avatar-img': {
    cursor: 'pointer',
  },
});
