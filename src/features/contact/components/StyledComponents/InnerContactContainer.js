import { styled, Container } from '@nextui-org/react';

export const InnerContactContainer = styled(Container, {
  width: '90%',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '2rem 0',
  minHeight: '80vh',
  '@md': {
    padding: '64px 88px 262px 64px',
  },
  '@lg': {
    width: '80%',
  },
});
