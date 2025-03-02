import { useQuery } from 'react-query';

import { fetchSingleOffer } from '@/features/singleOffer/api/fetchSingleOffer';

export const useGetSingleOffer = (id) => {
  return useQuery('fetchSingleOffer', () => fetchSingleOffer(id));
};
