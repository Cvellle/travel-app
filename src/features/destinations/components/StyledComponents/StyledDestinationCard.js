import { styled } from '@nextui-org/react';

const StyledDestinationCard = styled('div', {
  w: '405px',
  h: '393px',
  padding: '74px 63px',
  transition: '0.3s',
  borderRadius: '2rem',
  backgroundSize: 'auto 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  '&:hover': {
    backgroundSize: 'auto 120%',
    backgroundPosition: 'center',
    transition: '0.3s',
  },
  '@mdMax': {
    width: 193,
    height: 287,
    padding: 0,
    display: 'flex',
    alignItems: 'flex-end',
    borderRadius: '4px',
  },
});

export default StyledDestinationCard;
