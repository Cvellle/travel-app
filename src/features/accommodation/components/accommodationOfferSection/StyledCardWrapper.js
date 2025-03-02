import { styled, Grid } from '@nextui-org/react';

export const StyledCardWrapper = styled(Grid.Container, {
  display: 'flex',
  width: '100%',
  height: 'auto',
  border: 'none',
  borderRadius: '24px',
  flexDirection: 'row',
  paddingRight: '0px',
  alignContent: 'flex-start',
  '@sm': {
    paddingRight: '32px',
    border: '0.5px solid #000000',
  },
});
