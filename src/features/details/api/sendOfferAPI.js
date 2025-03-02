import { axios } from '@/lib/axios';

export const sendOfferAPI = (data) =>
  axios({
    method: 'post',
    url: '/api/contact-us/offer/inquiry',
    data: data,
  });
