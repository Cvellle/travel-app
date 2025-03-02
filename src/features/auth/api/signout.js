import { axios } from '@/lib/axios';

export const signout = async (refreshTokenId) =>
  axios({
    method: 'post',
    url: '/api/auth/signout',
    data: {
      refreshTokenId,
    },
  });
