import { styled, Col } from '@nextui-org/react';
export const StyledTabCol = styled(Col, {
  variants: {
    maxWidth: {
      maxWidthTab: {
        maxWidth: '90px',
      },
      maxWidthElement: {
        maxWidth: '240px',
        marginRight: '40px',

        '@xsMax': {
          marginRight: '0',
          width: '10000% !important',
        },
      },
    },
  },
});

export const StyledTabContainer = styled(Col, {
  // padding: '0 0 0 43px',
  // '@smMax': {
  //   padding: '0 0 0 10px',
  // },

  variants: {
    paddingLeft: {
      tabSection: {
        // paddingRight: '24px',
        // paddingLeft: '24px',

        '@smMax': {
          paddingLeft: '10px',
        },
      },
    },
  },
});
