import { axios } from '@/lib/axios';

export const signupUser = (data) =>
  axios({
    method: 'post',
    url: '/api/auth/user/signup',
    data: {
      email: data.email,
      password: data.password,
    },
  });
