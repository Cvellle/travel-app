import { styled } from '@nextui-org/react';

export const StyledMobContentContainer = styled('div', {
  variants: {
    style: {
      mobContainer: {
        overflow: 'hidden',
      },
      iconHolder: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px 0px',
      },
      navigationContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      },
      registrationHolder: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      },
      line: {
        height: '1px',
        width: 'auto',
        background: 'white',
        margin: '0px 8px',
      },
    },
  },
});
