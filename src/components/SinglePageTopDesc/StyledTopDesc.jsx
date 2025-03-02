import {
  Button,
  Container,
  Grid,
  styled,
  Text,
  Link,
  Modal,
} from '@nextui-org/react';

export const TopDescWrapper = styled(Container, {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '24px',
});
export const StyledModalContainer = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0',
});
export const StyledModal = styled(Modal, {
  maxWidth: '540px',
  width: '100%',
  margin: '0 auto',

  '&.styled-modal-cont.styled-modal-css': {
    margin: '0 auto',
  },
  'div[class*="nextui-backdrop-content"]': {
    maxWidth: '540px',
  },
  '@sm': { width: '540px' },
});
export const StyledLink = styled(Link, {
  display: 'inline-block',
  variants: {
    style: {
      agencyLink: {
        color: '#F5A524',
        borderBottom: '1px solid #F5A524',
        '&:hover': {
          color: '#b57a1a',
          borderBottom: '1px solid #b57a1a',
        },
      },
      agencyWebsite: {
        color: '#000',
        '&:hover': {
          color: '#F5A524',
        },
      },
      otherDatesLink: {
        display: 'inline-block',
        fontWeight: '300',
        fontSize: '20px',
        margin: '0',
        borderBottom: '1px solid',
        lineHeight: 'initial',
        color: '#000',
        paddingBottom: '3px',
        '&:hover': {
          color: '#F5A524',
        },
        '@sm': {
          fontSize: '24px',
        },
      },
    },
  },
});
export const TopDescContainer = styled(Grid, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0',
  marginBottom: '30px',
});

export const StyledTopDestButton = styled(Button, {
  variants: {
    size: {
      moreButton: {
        padding: '0',
        borderRadius: 'none',
        minWidth: 'auto',
        display: 'inline-block',
        paddingLeft: '5px',
        height: 'initial',
        lineHeight: '19px',
      },
      applySize: {
        padding: '25px 40px',
        margin: '0px',
        fontSize: '16px',
        '@sm': {
          padding: '17px 48px',
          borderRadius: '16px',
          minWidth: 'auto',
          margin: '0 auto',
          display: 'flex',
          height: 'initial',
          fontSize: '20px',
        },
      },
      sendQuery: {
        padding: '15px 48px',
        borderRadius: '8px',
        minWidth: 'auto',
        margin: '0 auto',
        display: 'flex',
        width: '100%',
        fontSize: '16px',
      },
    },
    color: {
      transparent: {
        background: 'transparent',
        color: '#F5A524',
        '&:hover': {
          color: '#b57a1a',
        },
        '&:active': {
          background: '#b57a1a',
        },
        '&:focus': {
          borderColor: '#b57a1a',
        },
      },
      orange: {
        background: '#F5BC94',
        color: '#fff',
        '&:hover': {
          background: '#b57a1a',
        },
        '&:active': {
          background: '#b57a1a',
        },
        '&:focus': {
          borderColor: '#b57a1a',
        },
      },
    },
  },
});

export const InputError = styled(Text, {
  variants: {
    color: {
      redColor: {
        color: 'red',
      },
    },
  },
});

export const StyledText = styled(Text, {
  variants: {
    style: {
      offerName: {
        fontSize: '20px',
        '@sm': {
          fontSize: '34px',
        },
      },
      cityTo: {
        fontSize: '24px',
        '@sm': {
          fontSize: '40px',
        },
      },
      countryTo: {
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        justifyContent: 'flex-start',
        '@sm': {
          fontSize: '24px',
        },
      },
      moreLess: {
        lineHeight: '19px',
        fontWeight: '300',
        marginBottom: '20px',
        marginLeft: '0px',
      },
      less: {
        lineHeight: '19px',
        fontWeight: '300',
        color: '#F5A524',
        '&:hover': {
          color: '#b57a1a',
        },
        fontSize: '14px',
        '@sm': {
          fontSize: '16px',
        },
      },
      more: {
        lineHeight: '19px',
        fontWeight: '300',
        color: '#F5A524',
        '&:hover': {
          color: '#b57a1a',
        },
        fontSize: '14px',
        '@sm': {
          fontSize: '16px',
        },
      },
      agency: {
        lineHeight: '19px',
        fontWeight: '300',
        marginBottom: '30px',
        marginLeft: '0px',
      },
      mainDate: {
        fontWeight: '700',
        fontSize: '20px',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        '@sm': {
          flexDirection: 'row',
          fontSize: '24px',
        },
      },
      otherDate: {
        fontWeight: '300',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'baseline',
        gap: '5px',
        margin: '0',
        flexWrap: 'wrap',
        '@sm': {
          fontSize: '24px',
        },
      },
      successModal: {
        marginTop: '24px',
        marginBottom: '14px',
        lineHeight: '16px',
      },
      agencyName: {
        fontWeight: '700',
        fontSize: '20px',
        '@sm': {
          fontSize: '24px',
        },
      },
      agencyAddress: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        '@sm': {
          fontSize: '16px',
        },
        svg: { width: '13px' },
      },
      agencyPhone: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        '@sm': {
          fontSize: '16px',
        },
        svg: { width: '14px' },
      },
      agencyWebsite: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        '@sm': {
          fontSize: '16px',
        },
        svg: { width: '15px' },
        '&:hover': { color: '#F5A524' },
      },
    },
  },
});
