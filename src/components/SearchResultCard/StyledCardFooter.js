import { styled, Card } from '@nextui-org/react';

export const StyledCardFooter = styled(Card.Footer, {
  padding: '8px 25px 15px 16px',
  '@sm': {
    justifyItems: 'flex-start',
    padding: '26px 0 26px 29px',
    rowGap: '16px',
  },
});
