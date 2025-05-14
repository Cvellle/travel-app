import { axios } from '@/lib/axios';

export const signinUser = (data) => {
  return axios({
    method: 'post',
    url: '/api/auth/signin',
    data: {
      email: data.email,
      password: data.password,
      role: 'USER',
    },
  })};
