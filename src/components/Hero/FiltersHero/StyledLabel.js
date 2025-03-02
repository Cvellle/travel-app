import { styled } from '@nextui-org/react';
import { webpack } from 'next.config';
const label = styled('label', {});
export const StyledLabel = styled(label, {
  color: 'white',
  marginLeft: '10px',
  '&.sidebar': {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: 0,
  },
});
