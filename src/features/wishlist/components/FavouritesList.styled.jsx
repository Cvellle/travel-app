import React from 'react';
import { styled, Avatar } from '@nextui-org/react';

import { getRandomInteger } from '@/utils/helpers';

const avatarColors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'gradient',
];

const OfferAvatar = ({ index, listsNumber, ...rest }) => {
  let bgColor = null;

  const random = getRandomInteger({ arrayLength: avatarColors.length });

  if (index % 2 === 0) {
    bgColor = avatarColors[random];
  } else {
    bgColor = 'default';
  }

  return <Avatar color={bgColor} textColor="white" {...rest} />;
};

export const MemoizedOfferAvatar = React.memo(OfferAvatar);

export const StyledTransparentButton = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const StyledAddButton = styled('button', {
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: '70px',
  height: '60px',
  border: '1px solid #000000',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '15px',
});

export const StyledCreateNewListButton = styled('button', {
  backgroundColor: '#F5BC94',
  color: '#fff',
  width: '100%',
  height: '47px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '0px',
  borderRadius: '8px',
  cursor: 'pointer',
});

export const StyledModalRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '&.offer__liked .only-text-avatar, &.offer__liked .offer__title': {
    opacity: 0.5,
  },
  padding: '8px 24px',
  cursor: 'pointer',
  '&.single__list': {
    marginBottom: 0,
  },
  '&:hover': {
    backgroundColor: 'rgba(200, 200, 200, 0.25)',
  },
});

export const StyledOfferAvatar = styled(MemoizedOfferAvatar, {
  '&.only-text-avatar': {
    width: '70px',
    height: '60px',
    borderRadius: '8px',
    marginRight: '15px',
  },
});

export const StyledOfferTitleWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
  position: 'relative',
});

export const StyledCheckmarkWrapper = styled('div', {
  width: '15px',
  position: 'absolute',
  right: 0,
  svg: {
    width: '100%',
  },
});
