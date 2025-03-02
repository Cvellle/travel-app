import { styled, Container } from '@nextui-org/react';

export const StyledStaticContainer = styled(Container, {
  backgroundColor: 'white',
  borderRadius: 'unset',
  '@sm': {
    borderRadius: '24px',
  },
});
