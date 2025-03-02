import React from 'react';
import { Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import OfferSectionsWrapper from '@/components/OfferSectionsWrapper/OfferSectionsWrapper';
import { StyledSectionTitle } from '@/features/additionalExcursions/components/additionalExcursionsSection/StyledSectionTitle';
import { StyledWrapper } from '@/features/additionalExcursions/components/additionalExcursionsSection/StyledWrapper';
import { StyledTitleDescriptionWrapper } from '@/features/additionalExcursions/components/additionalExcursionsSection/StyledTitleDescriptionWrapper';
import { StyledDescription } from '@/features/additionalExcursions/components/additionalExcursionsSection/StyledDescription';
const AdditionalExcursionsSection = ({ offerData }) => {
  const excursions = offerData.offer_included.additional_trips;
  const totalExcursions = offerData.offer_included.additional_trips_total;
  const t = useTranslations('Offer');

  return (
    <OfferSectionsWrapper accordion={false}>
      <StyledSectionTitle
        size={24}
        weight="bold"
        css={{ margin: '0px 0px 40px 0px' }}
      >
        {t('offer:additional')}
      </StyledSectionTitle>
      <StyledWrapper>
        {excursions.map((excursion) => (
          <StyledTitleDescriptionWrapper key={excursion.id}>
            <Text size={20} weight="bold">
              {excursion.title}
            </Text>
            <StyledDescription
              size={16}
              weight="normal"
              css={{
                marginTop: '16px',
              }}
            >
              {excursion.description}
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginTop: '10px',
                }}
              >
                Cena: {`${' '}${excursion.price}€`}
              </div>
            </StyledDescription>
          </StyledTitleDescriptionWrapper>
        ))}
      </StyledWrapper>
      <Text
        css={{
          margin: '40px 0px 0px 0px',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>{`${t(
          'offer:note'
        )}:${' '}`}</span>
        {totalExcursions?.description}
      </Text>
    </OfferSectionsWrapper>
  );
};

export default AdditionalExcursionsSection;
