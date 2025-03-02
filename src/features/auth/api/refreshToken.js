import { axios } from '@/lib/axios';

export const refreshToken = ({ refreshToken, refreshTokenId }) => {
  return axios({
    method: 'post',
    url: `/api/auth/refresh`,
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
    data: { refreshTokenId },
  });
};
