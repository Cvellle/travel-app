import { Row, styled } from '@nextui-org/react';

export const StyledTabRow = styled(Row, {
  variants: {
    borderBottom: {
      firstRowElement: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.7)',

        '@smMax': {
          borderBottom: 'none',
        },
      },
    },
  },
});
