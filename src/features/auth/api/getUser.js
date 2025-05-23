import { axios } from '@/lib/axios';

export const getLoggedInUser = () => {
  return axios({
    method: 'get',
    url: '/api/auth/current-user',
  });
};
