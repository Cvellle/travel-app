import { styled, Grid } from '@nextui-org/react';

export const StyledFiltersContainer = styled(Grid, {
  width: 'auto',
  '@md': {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: '50px',
  },
  '&.sidebar': {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
  },
});
