import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { useStore } from '@/stores/offers';
import { SearchResultCard } from '@/components/SearchResultCard';

export const SearchResultList = () => {
  const t = useTranslations();
  const list = useStore((state) => state.list);
  // const setList = useStore((state) => state.setList);

  const router = useRouter();
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();

  useEffect(() => {
    setAdults(router.query.adults ?? undefined);
    setKids(router.query.kids ?? undefined);
  }, [router.query]);

  return (
    <>
      {!!list?.length ? (
        list?.map((item, index) => (
          <SearchResultCard
            item={item}
            index={index}
            key={item.offer_durations_id}
          />
        ))
      ) : (
        <Text weight="bold" size="20px" css={{ marginTop: '20px' }}>
          {t('SearchResults.Search:noResults')}
        </Text>
      )}
    </>
  );
};
