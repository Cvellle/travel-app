import { axios } from '@/lib/axios';

export const forgotPassword = ({ email }) => {
  return axios({
    method: 'post',
    url: '/api/auth/user/forgot-password',
    data: { email },
  });
};
