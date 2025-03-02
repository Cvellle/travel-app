import axiosDefault from 'axios';

import { axios } from '@/lib/axios';

export const googleRegister = ({ token }) =>
  axios({
    method: 'post',
    url: '/api/google-auth/user/signup',
    data: {
      token,
    },
  });

export const googleRegisterApiRoute = () => {
  return axiosDefault({
    method: 'get',
    url: '/api/generate-gauth-url',
  });
};

export const getGoogleAccessToken = ({ code }) => {
  return axiosDefault({
    method: 'get',
    url: `/api/google-auth?code=${code}`,
  });
};
