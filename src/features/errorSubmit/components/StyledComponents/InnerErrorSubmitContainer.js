import { styled, Container } from '@nextui-org/react';

export const InnerErrorSubmitContainer = styled(Container, {
  width: '90%',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '2rem 0',
  '@md': {
    padding: '64px 88px 262px 64px',
  },
  '@lg': {
    width: '80%',
  },
});
