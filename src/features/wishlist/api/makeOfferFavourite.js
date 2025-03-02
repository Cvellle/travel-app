import { axios } from '@/lib/axios';

export const makeOfferFavourite = async ({
  offerDurationId,
  favouriteListId,
}) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'api/favorite',
      data: {
        offer_duration_id: offerDurationId,
        favorite_list_id: favouriteListId,
      },
    });

    return response;
  } catch (error) {
    console.log('error', error);
    return error.message;
  }
};
