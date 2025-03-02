import { axios } from '@/lib/axios';

export const resetPassword = ({ token, password }) => {
  return axios({
    method: 'post',
    url: '/api/auth/reset-password',
    data: { token, password },
  });
};
