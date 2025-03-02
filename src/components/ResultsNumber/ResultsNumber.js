import { Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { useStore } from '@/stores/offers';

const ResultsNumber = () => {
  const t = useTranslations('SearchResults');
  const list = useStore((state) => state.list);
  return (
    <Text
      css={{
        color: '#8E8E8E',
      }}
    >
      {t('ResultsNumber:numberOfResults')}: {list?.length}
    </Text>
  );
};

export default ResultsNumber;
