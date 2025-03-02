import { styled, Button } from '@nextui-org/react';

export const StyledButton = styled(Button, {
  '&.travel-agency-modal-btn.travel-agency-btn': {
    background: '#F5BC94',
    color: '#fff',
    fontSize: '12px',
    '@sm': {
      fontSize: '16px',
    },
  },
});
