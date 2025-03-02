import { styled, Grid } from '@nextui-org/react';

export const StyledHeroContainer = styled(Grid.Container, {
  padding: '0px',
  margin: '0px',
  variants: {
    style: {
      css: {
        justifyContent: 'center',
        // height: '50vh',
      },
    },
    size: {
      heroSize: {
        width: '100%',
        maxWidth: '100%',
        // height: '50vh',
      },
    },
    color: {
      heroColor: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // overflow: 'hidden',
        backgroundColor: '#161C37',
        // backgroundBlendMode: 'soft-light',
      },
    },
    utils: {
      heroUtils: {
        padding: '0px',
        margin: '0px',
      },
    },
  },
});
