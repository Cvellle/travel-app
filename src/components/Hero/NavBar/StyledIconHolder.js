import { styled, Text } from '@nextui-org/react';

export const StyledIconHolder = styled(Text, {
  cursor: 'pointer',
  variants: {
    style: {
      hamburger: {
        zIndex: '3',
        display: 'flex',
        cursor: 'pointer',
      },
    },
  },
});
