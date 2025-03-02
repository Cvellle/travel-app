import { styled } from '@nextui-org/react';

export const StyledSingleWishlist = styled('div', {
  '&:not(:first-of-type)': {
    marginTop: '25px',
  },
  '.single__wishlist': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  '.single__wishlist span': {
    cursor: 'pointer',
    marginLeft: '20px',
  },
  '.single__wishlist svg': {
    display: 'flex',
  },
  '.wishlist__image__wrapper': {
    span: {
      width: '60px !important',
    },
  },
  '.wishlist__actions': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '.wishlist__actions button': {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
});
