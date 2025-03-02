import { styled, Link } from '@nextui-org/react';

export const StyledLink = styled(Link, {
  variants: {
    style: {
      navColor: {
        color: '#ffffff',
        zIndex: '2',
      },
    },
  },
});
