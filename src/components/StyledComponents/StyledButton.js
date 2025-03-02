import { styled, Button } from '@nextui-org/react';

export const StyledButton = styled(Button, {
  boxShadow: '$md', // shadows.md
  variants: {
    size: {
      mysize: {
        height: '$12', // space[12]
        borderRadius: '$xs', // radii.xs
      },
    },
    color: {
      mycolor: {
        background: '$green800', // colors.green800
        color: '$green100',
        border: '$space$1 solid transparent',
        '&:hover': {
          background: '$green100',
          color: '$green800',
        },
        '&:active': {
          background: '$green200',
        },
        '&:focus': {
          borderColor: '$green400',
        },
      },
      mycolor2: {
        background: '$blue100', // colors.green800
        color: '$blue800',
        border: '$space$1 solid transparent',
        '&:hover': {
          background: '$blue800',
          color: '$blue100',
        },
        '&:active': {
          background: '$blue200',
        },
        '&:focus': {
          borderColor: '$blue400',
        },
      },
    },
  },
});
