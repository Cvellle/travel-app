import { styled } from '@nextui-org/react';

export const StyledCardPrice = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '12px',
  '.card__price__text': {
    fontSize: '20px',
    marginRight: '6px',
  },
  '.card__price__value': {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: 0,
  },
});
