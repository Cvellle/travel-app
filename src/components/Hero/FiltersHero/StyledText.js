import { styled, Text } from '@nextui-org/react';

export const StyledText = styled(Text, {
  '&.error-msg': {
    color: '#F31260',
    fontSize: '0.625rem',
    margin: 0,
    lineHeight: '1.75',
    letterSpacing: '-0.05em',
    fontWeight: '400',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxyge, Ubuntu, Cantarell, Fira Sans, Droid Sans,Helvetica Neue, sans-serif',
    height: '1rem',
  },
});
