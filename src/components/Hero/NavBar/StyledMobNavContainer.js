import { keyframes, styled } from '@nextui-org/react';

export const StyledMobNavContainer = styled('div', {
  height: '0%',
  width: '100%',
  position: 'fixed',
  zIndex: '444',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgb(22, 28, 55)',
  animationName: 'openNav',
  animationDuration: '1.5s',
  transition: 'height 0.5s ease-in',
  flexDirection: 'column',
  padding: '0px 20px',

  '&.mobile-navigation-overlay.open': { height: '100%', display: 'flex' },
});
