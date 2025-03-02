import { styled, Collapse } from '@nextui-org/react';

export const StyledAccordion = styled(Collapse, {
  '&.styled-accordion-program.styled-accordion-program-travel.nextui-collapse--closed div:last-child':
    {
      height: '0px',
    },
  '&.styled-accordion-program.styled-accordion-program-travel.nextui-collapse--open div:last-child':
    {
      height: 'unset',
    },
  '&.styled-accordion-program.styled-accordion-program-travel .nextui-collapse-view':
    {
      borderBottom: '1px solid #F5BC94',
      marginBottom: '24px',
    },
  '&.styled-accordion-program.styled-accordion-program-travel .nextui-collapse-title':
    {
      fontSize: '20px',
    },
});

//subacc nextui-c-dJMBOt
