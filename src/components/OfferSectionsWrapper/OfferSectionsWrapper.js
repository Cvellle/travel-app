import React from 'react';
import { useTranslations } from 'next-intl';

import { StyledAccordion } from '@/components/OfferSectionsWrapper/StyledComponents/StyledAccordion';
import { StyledStaticContainer } from '@/components/OfferSectionsWrapper/StyledComponents/StyledStaticContainer';
import * as SvgSprite from '@/assets/SvgSprite';

const OfferSectionsWrapper = ({ accordion, children, title }) => {
  //accordion prop - true or false (if is true it will be accordion if not it will be static container )
  //children - nested component, wrapped with this component
  //if accordion is true - provide title prop
  const t = useTranslations('Offer');

  return (
    <>
      {accordion && (
        <StyledAccordion
          title={t(title)}
          expanded
          divider={false}
          css={{
            border: 'none',
          }}
          className="styled-accordion-collapse styled-accordion"
          arrowIcon={<SvgSprite.Arrow />}
        >
          {children}
        </StyledAccordion>
      )}
      {!accordion && (
        <StyledStaticContainer
          css={{
            mx: '0px',
            width: '100%',
            maxWidth: '-webkit-fill-available',
            p: '20px',
            '@sm': {
              // mx: '24px',
              p: '64px',
            },
          }}
        >
          {children}
        </StyledStaticContainer>
      )}
    </>
  );
};

export default OfferSectionsWrapper;
