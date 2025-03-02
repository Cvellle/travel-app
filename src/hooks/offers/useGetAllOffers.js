import { useQuery } from 'react-query';

import { fetchAllOffers } from '@/features/sidebar/api/fetchAllOffers';

export const useGetAllOffers = () => {
  return useQuery('fetchAllOffers', fetchAllOffers);
};
