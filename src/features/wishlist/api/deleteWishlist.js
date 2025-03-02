import { useMutation, useQueryClient } from 'react-query';

import { axios } from '@/lib/axios';
import { useAuth } from '@/providers/authProvider';

export const deleteWishlist = ({ wishlistId }) => {
  try {
    return axios({
      method: 'delete',
      url: `/api/favorite-list/${wishlistId}`,
    });
  } catch (error) {
    return error.message;
  }
};

export const useDeleteWishlist = () => {
  const queryClient = useQueryClient();

  const { refetchUser } = useAuth();

  return useMutation(({ wishlistId }) => deleteWishlist({ wishlistId }), {
    onSuccess: async (data, variables, context) => {
      console.log('success!!');
      console.log({ data });
      console.log({ variables });
      console.log({ context });
      await refetchUser();
      queryClient.invalidateQueries(['wishlist', variables.wishlistId]);
    },
    onError: (error) => {
      console.log('error!', error);
      throw new Error(error.message);
    },
  });
};
