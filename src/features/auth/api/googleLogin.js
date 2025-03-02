import { axios } from '@/lib/axios';

export const googleLogin = ({ token }) =>
  axios({
    method: 'post',
    url: '/api/google-auth/user/signin',
    data: {
      token,
    },
  });
