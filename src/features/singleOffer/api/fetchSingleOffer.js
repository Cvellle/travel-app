import { axios } from '@/lib/axios';

export const fetchSingleOffer = async (id) => {
  try {
    const offer = await axios({
      method: 'get',
      url: `/api/offers/${id}`,
    });
    return offer;
  } catch (error) {
    const errAxios = error;
    const errMessage = errAxios.message;
    console.log('FETCH SINGLE OFFER ERROR: ', errMessage);
    return errMessage;
  }
};
