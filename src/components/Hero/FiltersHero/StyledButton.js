import { styled, Button } from '@nextui-org/react';

export const StyledButton = styled(Button, {
  minWidth: '100%',
  borderRadius: '16px',
  ml: 0,
  '@md': { minWidth: 'min-content', ml: '5px' },
  '&.sidebar': {
    width: '100%',
  },
});
