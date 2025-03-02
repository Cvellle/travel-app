import { styled, Image } from '@nextui-org/react';

export const StyledMainImage = styled(Image, {
  '&.main-image img': {
    display: 'block',
    objectFit: 'cover',
    borderRadius: ' 20px',
  },
});
