import { Button, Input, styled } from '@nextui-org/react';
import * as ReactIcons from 'react-icons/fc';
import Link from 'next/link';

const BaseButton = ({ authType, ...rest }) => {
  return (
    <Button bordered color="#000" {...rest}>
      <ReactIcons.FcGoogle />
      <p>
        <span>{authType}</span> with Google
      </p>
      <span></span>
    </Button>
  );
};

const BaseLink = ({ href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export const StyledAuthFormWrapper = styled('div', {
  width: '90%',
  maxWidth: '420px',
  '.nextui-input-main-container': {
    width: '100%',
  },
  '.nextui-button': {
    width: '100%',
    backgroundColor: 'rgb(245, 188, 148)',
  },
  '.nextui-button:disabled': {
    backgroundColor: 'rgb(245 188 148 / 35%)',
  },
});

export const StyledGoogleAuthButton = styled(BaseButton, {
  '&.nextui-button': {
    backgroundColor: 'transparent',
  },
  '.nextui-button-text': {
    width: '100%',
    justifyContent: 'space-between',
  },
  'p span': {
    textTransform: 'capitalize',
  },
});

export const StyledAuthLink = styled(BaseLink, {
  display: 'inline-block',
  color: '#a9a9a9',
  fontSize: '16px',
  cursor: 'pointer',
  variants: {
    color: {
      orange: {
        color: 'rgba(245, 188, 148, 0.95)',
      },
    },
  },
  '&:hover': {
    textDecoration: 'underline',
  },
});
