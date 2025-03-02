import { axios } from '@/lib/axios';

export const sendMessageAPI = (data) =>
  axios({
    method: 'post',
    url: '/api/contact-us/message',
    data: data,
  });
