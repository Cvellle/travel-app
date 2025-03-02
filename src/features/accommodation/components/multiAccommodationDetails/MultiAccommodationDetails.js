import React from 'react';
import { Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import AccommodationDetails from '@/features/accommodation/components/accommodationDetails/AccommodationDetails';
import { StyledDetailsWrapper } from '@/features/accommodation/components/multiAccommodationDetails/StyledDetailsWrapper';

const MultiAccommodationDetails = ({ accommodationDetails }) => {
  const t = useTranslations('Offer');

  return (
    <StyledDetailsWrapper>
      <div>
        <Text b>{t('offer:details')}</Text>
      </div>
      <AccommodationDetails accommodationDetails={accommodationDetails} />
    </StyledDetailsWrapper>
  );
};

export default MultiAccommodationDetails;
