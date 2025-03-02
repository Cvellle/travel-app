import { useMutation, useQueryClient } from 'react-query';

import { axios } from '@/lib/axios';
import { useAuth } from '@/providers/authProvider';

export const deleteOfferFromWishlist = ({ favoriteId }) => {
  try {
    return axios({
      method: 'delete',
      url: `/api/favorite/${favoriteId}`,
    });
  } catch (error) {
    return error.message;
  }
};

export const useDeleteOfferFromWishlist = () => {
  const queryClient = useQueryClient();

  const { refetchUser } = useAuth();

  return useMutation(
    ({ favoriteId, wishlistId }) => deleteOfferFromWishlist({ favoriteId }),
    {
      onSuccess: async (data, variables) => {
        await refetchUser();
        queryClient.invalidateQueries(['wishlist', variables.wishlistId]);
      },
      onError: (error) => {
        console.log('error!', error);
        throw new Error(error.message);
      },
    }
  );
};
