import { styled } from '@nextui-org/react';

export const StyledWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  '@sm': {
    gap: '80px',
  },
});
