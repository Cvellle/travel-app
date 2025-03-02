import { useQuery } from 'react-query';

import { fetchHomeData } from '@/features/homepage/api/fetchHomeData';

export const useFetchHomeData = (options) => {
  return useQuery('fetchHomeData', fetchHomeData, options);
};
