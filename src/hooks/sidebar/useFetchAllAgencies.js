import { useQuery } from 'react-query';

import { fetchAllAgencies } from '@/features/sidebar/api/fetchAllAgencies';

export const useFetchAllAgencies = (options) => {
  return useQuery('fetchAllAgencies', fetchAllAgencies, options);
};
