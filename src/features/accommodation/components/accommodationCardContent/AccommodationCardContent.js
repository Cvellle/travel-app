import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Text } from '@nextui-org/react';

import ModalMap from '@/features/accommodation/components/accommodationModal/ModalMap';
import { StyledCardContentContainer } from '@/features/accommodation/components/accommodationCardContent/StyledCardContentContainer';
import { StyledLine } from '@/features/accommodation/components/accommodationCardContent/StyledLine';
import { StyledDescription } from '@/features/accommodation/components/accommodationCardContent/StyledDescription';
import { StyledIconsButtonWrapper } from '@/features/accommodation/components/accommodationCardContent/StyledIconsButtonWrapper';
import { StyledButton } from '@/features/accommodation/components/accommodationCardContent/StyledButton';
import AccommodationDetails from '@/features/accommodation/components/accommodationDetails/AccommodationDetails';

const AccommodationCardContent = ({
  accommodationDetails,
  accommodation,
  multiAccommodations,
}) => {
  const t = useTranslations('Offer');
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  return (
    <StyledCardContentContainer
      style={{
        margin: '25px 0px',
        padding: '0px 10px',
      }}
    >
      <Text
        h1
        css={{ margin: '0px', fontSize: '20px', '@sm': { fontSize: '32px' } }}
      >
        {accommodation?.title}
      </Text>
      <StyledLine></StyledLine>
      <StyledDescription>{accommodation?.description}</StyledDescription>
      <StyledIconsButtonWrapper>
        {!multiAccommodations && (
          <AccommodationDetails accommodationDetails={accommodationDetails} />
        )}
        <StyledButton
          css={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={handler}
          animated={false}
        >
          {t('offer:location')}
        </StyledButton>
        {visible && (
          <ModalMap
            visibleModal={visible}
            SetIfVisible={setVisible}
            location={accommodation}
            locationName={accommodation?.title}
          />
        )}
      </StyledIconsButtonWrapper>
    </StyledCardContentContainer>
  );
};

export default AccommodationCardContent;
