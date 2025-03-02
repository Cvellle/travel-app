import { styled, Grid } from '@nextui-org/react';

export const StyledGridContainer = styled(Grid.Container, {
  py: '10px',
  px: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  width: 'auto',
  borderRadius: '16px',
  alignItems: 'center',
  zIndex: '222',
  '@sm': { py: '15px', px: '30px' },
});
