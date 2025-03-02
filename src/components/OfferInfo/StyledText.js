import { styled, Text } from '@nextui-org/react';

export const StyledText = styled(Text, {
  fontSize: '16px',
  lineHeight: '19px',
  color: '#FFFFFF',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  width: 'fit-content',
  alignSelf: 'flex-end',
  variants: {
    variant: {
      lastMinute: {
        display: 'none',
        '@sm': {
          display: 'block',
          background: '#B9353C',
          padding: '9px 20px',
          fontWeight: 400,
        },
      },
      ourRecommendation: {
        display: 'none',
        '@sm': {
          display: 'block',
          background: '#F5BC94',
          padding: '10px 18px',
          // padding: '10px 35px',
          fontWeight: 700,
        },
      },
    },
  },
});
