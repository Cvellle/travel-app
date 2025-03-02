import { axios } from '@/lib/axios';

export const subscribeAPI = () => {
  return axios({
    method: 'get',
    url: '/api/',
  });
};
