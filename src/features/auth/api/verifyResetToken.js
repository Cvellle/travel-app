import { axios } from '@/lib/axios';

export const verifyResetToken = ({ token }) => {
  return axios({
    method: 'get',
    url: `/api/auth/verify-reset?token=${token}`,
  });
};
