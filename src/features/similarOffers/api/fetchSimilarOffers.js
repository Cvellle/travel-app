import { axios } from '@/lib/axios';

export const fetchSimilarOffers = async (id) => {
  try {
    const offer = await axios({
      method: 'get',
      url: `/api/offer-duration/${id}/similar`,
    });
    return offer;
  } catch (error) {
    const errAxios = error;
    const errMessage = errAxios.message;
    console.log('FETCH SIMILAR OFFERS ERROR: ', errMessage);
    return errMessage;
  }
};
