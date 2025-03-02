import { axios } from '@/lib/axios';

export const subscribeAPI = (data) => {
  return axios({
    method: 'post',
    url: '/api/newsletter/subscribe',
    data: data,
  });
};
