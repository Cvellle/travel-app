import { Text, styled } from '@nextui-org/react';

export const StyledTabText = styled(Text, {
  // paddingBottom: '8px',
  maxWidth: '335px',
  '&.moja-klasa': { margin: 'unset' },
  userSelect: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    border: {
      borderActive: {
        borderBottom: '4px solid #F5BC94',
        position: 'absolute',
        bottom: '-1px',
        '@smMax': {
          borderBottom: 'none',
        },
      },
    },
    padding: {
      lastElement: {
        paddingRight: '10px',
        width: 'fit-content',
        float: 'right',

        '@xsMax': {
          display: 'none',
        },
      },
    },
  },

  '@mdMax': {
    fontSize: '16px',
  },
});
