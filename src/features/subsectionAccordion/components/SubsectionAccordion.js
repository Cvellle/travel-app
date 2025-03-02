import React from 'react';
import { Text } from '@nextui-org/react';

import { StyledAccordion } from '@/features/subsectionAccordion/components/styledComponents/StyledAccordion';
import * as SvgSprite from '@/assets/SvgSprite';

const SubsectionAccordion = ({ title, description }) => {
  return (
    <StyledAccordion
      title={title}
      divider={false}
      expanded
      arrowIcon={<SvgSprite.Arrow />}
      className="styled-accordion-program styled-accordion-program-travel"
    >
      <Text>{description}</Text>
    </StyledAccordion>
  );
};

export default SubsectionAccordion;
