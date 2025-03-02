import { styled, Dropdown } from '@nextui-org/react';

export const StyledNavDropdown = styled(Dropdown.Button, {
  variants: {
    color: {
      cv: {
        tt: 'capitalize',
        background: 'none',
        color: 'white',
      },
      mob: {
        tt: 'capitalize',
        background: 'none',
        color: 'white',
        padding: '0px 0px 0px 8px',
        display: 'flex',
        justifyContent: 'flex-start',
      },
    },
  },
});
