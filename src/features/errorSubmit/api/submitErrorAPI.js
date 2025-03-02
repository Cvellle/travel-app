import { axios } from '@/lib/axios';

export const submitErrorAPI = (data) =>
  axios({
    method: 'post',
    url: '/api/contact-us/bug-report',
    data: data,
  });
