import { axios } from '@/lib/axios';

export const signupUser = (data) =>
  axios({
    method: 'post',
    url: '/api/auth/user/signup',
    headers: {
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS"
        },
    data: {
      username: data.email,
      password: data.password,
      email: data.email
    },
  });
