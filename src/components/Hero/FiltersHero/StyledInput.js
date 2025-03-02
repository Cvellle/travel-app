import { styled, Input } from '@nextui-org/react';

export const StyledInput = styled(Input, {
  '&.clearable-adult': {
    label: {
      borderRadius: '0.875rem 0 0 0.875rem',
    },
    button: {
      svg: {
        width: '18px',
        height: '18px',
        path: {
          fill: '#161C37',
        },
      },
    },
  },
  '&.clearable-kids': {
    label: {
      borderLeft: '1px dashed black',
      borderRadius: '0 0.875rem 0.875rem 0',
      span: {
        padding: 0,
      },
    },
    button: {
      svg: {
        width: '18px',
        height: '18px',
        path: {
          fill: '#161C37',
        },
      },
    },
  },
  '&.sidebar_input': {
    width: '100%',
    minWidth: 'unset',
    maxWidth: 'unset',
  },
});
