import { styled, Row } from '@nextui-org/react';

export const StyledRow = styled(Row, {
  flexDirection: 'column',
  '@sm': {
    flexDirection: 'row',
  },
});
