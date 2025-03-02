import { axios } from '@/lib/axios';

export const removeFavouriteOfferWithDurationId = ({
  favouriteListId,
  offerDurationId,
}) => {
  return axios({
    method: 'delete',
    url: `/api/favorite/${favouriteListId}/${offerDurationId}`,
  });
};
