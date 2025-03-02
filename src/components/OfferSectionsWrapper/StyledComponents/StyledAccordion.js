import { styled, Collapse } from '@nextui-org/react';

export const StyledAccordion = styled(Collapse, {
  maxWidth: '100%',
  mx: '0px',
  p: '20px',
  borderRadius: 'unset',
  backgroundColor: 'white',
  '@sm': {
    // mx: '24px',
    p: '64px',
    borderRadius: '24px',
  },
  '&.styled-accordion.nextui-collapse--closed div:last-child': {
    height: '0px',
  },
  '&.styled-accordion.nextui-collapse--open div:last-child': {
    height: 'unset',
  },
  '&.styled-accordion-collapse.styled-accordion .nextui-collapse-title-content':
    {
      width: 'auto',
      marginRight: '15px',
    },
  '&.styled-accordion-collapse.styled-accordion .nextui-collapse-title-container':
    {
      justifyContent: 'flex-start',
    },
});
