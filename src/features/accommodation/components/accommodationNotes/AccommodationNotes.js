import React from 'react';
import { Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { StyledList } from '@/features/accommodation/components/accommodationNotes/StyledList';

const AccommodationNotes = ({ notes }) => {
  const t = useTranslations('Offer');

  return (
    <div>
      <Text b>{t('offer:accommodationNote')}</Text>
      <StyledList>
        <li>
          {notes?.lodgings_rules ? notes?.lodgings_rules : t('offer:noNotes')}
        </li>
      </StyledList>
    </div>
  );
};

export default AccommodationNotes;
