import { axios } from '@/lib/axios';

export const signinUser = (data) =>
  axios({
    method: 'post',
    url: '/api/auth/signin',
    data: {
      email: data.email,
      password: data.password,
      role: 'USER',
    },
  });
