import { styled } from '@nextui-org/react';

export const StyledSelectDropdownWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '.dropdown__trigger-content-wrapper': {
    display: 'flex',
    alignItems: 'center',
    width: '143px',
    height: '28px',
    border: '1px solid #000',
    justifyContent: 'space-between',
    paddingInline: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  '.dropdown__trigger-content-wrapper span': {
    marginRight: '9px',
  },
});
