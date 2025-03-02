import { styled, Container } from '@nextui-org/react';

export const InnerAboutContainer = styled(Container, {
  width: '90%',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '2rem 0',
  '@lg': {
    width: '80%',
  },
});
