import { styled, Grid } from '@nextui-org/react';

export const StyledFiltersSectionHolder = styled(Grid, {
  backgroundColor: 'rgba(22, 28, 55, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  padding: '35px 20px 4px 20px',
  borderRadius: '16px',
  mb: '60px',
  position: 'relative',
  zIndex: 100,
  width: 'auto',
  alignItems: 'center',
  marginTop: '107px',
  '@sm': {
    padding: '35px 40px 4px 40px',
  },
  '&.sidebar': {
    backgroundColor: '#FFFFFF',
    display: 'block',
    padding: 0,
    margin: '0 0 20px 0',
  },
});
