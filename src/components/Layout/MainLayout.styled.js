import { styled } from '@nextui-org/react';

export const StyledSidebarWrapper = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  '@sm': {
    '.helper-element': {
      height: '105px',
    },
  },
});

export const StyledMainContentWrapper = styled('main', {
  backgroundColor: '#f8f8f8',
  '@sm': {
    paddingRight: '24px',
  },
});
