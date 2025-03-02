import { axios } from '@/lib/axios';

export const verifyAccount = ({ token }) => {
  return axios({
    method: 'get',
    url: `/api/auth/verify?token=${token}`,
  });
};
