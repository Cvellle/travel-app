import { styled, Text } from '@nextui-org/react';

export const StyledHeroTitle = styled(Text, {
  zIndex: '2',
  display: 'none',
  '@sm': {
    display: 'flex',
  },
  '&.sidebar': {
    display: 'none',
  },
});
