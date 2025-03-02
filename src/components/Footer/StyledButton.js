import { styled, Button } from '@nextui-org/react';

export const StyledButton = styled(Button, {
  boxShadow: '$md',
  variants: {
    size: {
      mysize: {
        height: '$14',
        width: '200px',
      },
    },
    color: {
      mycolor: {
        background: '#F5BC94',
        color: '#FFFFFF',
        border: '$space$1 solid transparent',
        '&:hover': {
          background: '#FFFFFF',
          color: '#161C37',
        },
      },
    },
  },
});
