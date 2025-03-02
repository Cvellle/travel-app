import { useQuery } from 'react-query';

import { fetchAllOffers } from '@/features/sidebar/api/fetchAllOffers';

export const useFetchAllOffers = (options, dependencies) => {
  return useQuery(
    ['fetchAllOffers', dependencies],
    () => fetchAllOffers(dependencies),
    options
  );
};
