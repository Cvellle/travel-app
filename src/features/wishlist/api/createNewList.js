import { axios } from '@/lib/axios';

export const createNewFavouritesList = async ({ title, offerDurationId }) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'api/favorite-list',
      data: {
        name: title,
        offer_duration_id: offerDurationId,
      },
    });

    return response;
  } catch (error) {
    console.log('error', error);
    return error.message;
  }
};
