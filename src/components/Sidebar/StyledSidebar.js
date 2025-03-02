import {
  styled,
  Container,
  Text,
  Grid,
  Button,
  Checkbox,
  Collapse,
} from '@nextui-org/react';

export const SidebarWrapper = styled(Grid, {
  width: '100%',
  boxShadow: '$sm',
  padding: '20px',
  display: 'flex',
  backgroundColor: '#fff',
  '@sm': {
    width: '240px',
    flexDirection: 'column',
    marginLeft: '$auto',
  },
  '@md': {
    width: '342px',
  },
});

export const SidebarContainer = styled(Container, {
  variants: {
    style: {
      helperDiv: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
      },
      rangeDiv: {
        width: '100%',
        marginRight: 'auto',
        marginLeft: '0',
        backgroundColor: '#f8f8f8',
        border: '1px solid #f5bc94',
        borderRadius: '$sm',
        '@sm': {
          width: '100%',
        },
      },
      facilitiesDiv: {
        width: '100%',
        backgroundColor: '#f8f8f8',
        border: '1px solid #f5bc94',
        borderRadius: '$sm',

        display: 'flex',
        flexDirection: 'column',
      },
      sidebarHeader: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '101',
        backgroundColor: '#fff',
        marginBottom: '15px',
        '@sm': {
          position: 'initial',
          padding: '0',
          backgroundColor: 'transparent',
        },
      },
      sidebarFooter: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '101',
        backgroundColor: '#fff',
        padding: '15px 0',
        '@sm': {
          position: 'initial',
          padding: '0',
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export const SidebarFilterTitle = styled(Text, {
  fontWeight: '700',
  padding: '0',

  variants: {
    style: {
      main: {
        fontSize: '20px',
      },
      side: {
        fontSize: '20px',
      },
    },
  },
});

export const SidebarModalBtn = styled(Button, {
  variants: {
    style: {
      filterBtn: {
        padding: '20px',
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '$sm',
        minWidth: 'auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: 'red',
        },
        '@sm': {
          display: 'none',
        },
      },
    },
  },
});

export const SidebarFilterCheckboxGroup = styled(Checkbox.Group, {
  backgroundColor: '#f8f8f8',
  border: '1px solid #f5bc94',
  borderRadius: '$sm',
  padding: '16px',
});
export const SidebarFilterCheckbox = styled(Checkbox, {
  margin: '0',
  marginTop: '0',
  padding: '0',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',

  span: {
    paddingLeft: '0',
    fontSize: '16px',
  },

  variants: {
    style: {
      facilitiesCheckbox: {
        span: {
          display: 'flex',
          alignItems: 'center',
          gap: '15px',

          svg: {
            width: '25px',
            '&[data-css=edit]': {
              marginLeft: '2px',
              '@sm': {
                marginLeft: '5px',
              },
            },
          },
        },
      },
      starsCheckbox: {
        svg: {
          color: '#F5A524',
        },
        span: {
          padding: '5px 0',
        },
      },
    },
  },
  '&.styled__checkbox__label.styled__checkbox__label--default:not(:first-child)':
    {
      marginTop: 0,
    },
  '.nextui-checkbox-mask:after': {
    backgroundColor: '#F5A524',
  },
  'div[class*="isHovered-true"] .nextui-checkbox-mask:after': {
    backgroundColor: '#F5A524',
  },
});

// export const SidebarFilterCheckboxCustom = styled(Checkbox, {
//   margin: '0',
//   padding: '0',
//   gap: '20px',
//   variants: {
//     size: {
//       sm: {
//         $$checkboxSize: '30px',
//       },
//       custom: {
//         $$checkboxSize: '10px',
//         span: {
//           fontSize: '14px',
//         },
//         '&:not(:first-child)': {
//           borderTop: '1px solid green',
//           marginTop: '0px',
//         },
//         '&:not(:last-child)': {
//           borderBottom: '2px solid orange',
//         },
//       },
//     },
//     bgColor: {
//       red: {
//         backgroundColor: 'red',
//       },
//     },
//   },
//   '&.styled__checkbox__label.styled__checkbox__label--default:not(:first-child)':
//     {
//       marginTop: 0,
//     },
//   '&:hover': {
//     fontSize: '32px',
//   },
//   span: {
//     color: 'green',
//   },
//   '.nextui-checkbox-mask:after': {
//     backgroundColor: 'orange',
//   },
//   'div[class*="isHovered-true"] .nextui-checkbox-mask:after': {
//     backgroundColor: 'green',
//   },
// });

export const CollapseEdited = styled(Collapse, {
  padding: '10px 0',
  borderBottom: '1px solid #F5A524',
  h3: { fontSize: '20px' },
  'div[role=button]': {
    paddingTop: '5px',
  },
  label: {
    marginTop: '0',
  },
});

export const StyledSidebarButton = styled(Button, {
  variants: {
    size: {
      resetSize: {
        padding: '5px',
        borderRadius: 'none',
        minWidth: 'auto',
        zIndex: 0,
      },
      applySize: {
        padding: '5px 20px',
        borderRadius: '$xs',
        minWidth: 'auto',
        margin: '0 auto',
        display: 'flex',
        boxShadow: '$sm',
        '@sm': {
          display: 'none',
        },
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
        background: '#F5A524',
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
