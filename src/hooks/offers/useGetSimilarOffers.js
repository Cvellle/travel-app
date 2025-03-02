import { useQuery } from 'react-query';

import { fetchSimilarOffers } from '@/features/similarOffers/api/fetchSimilarOffers';

export const useGetSimilarOffers = (id) => {
  return useQuery('fetchSimilarOffers', () => fetchSimilarOffers(id));
};
