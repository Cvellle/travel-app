import { useState, useEffect } from 'react';
import { useQuery, useQueries } from 'react-query';

import { axios } from '@/lib/axios';

export const getWishlistData = ({ wishlistId }) => {
  return axios({
    method: 'get',
    url: `/api/favorite-list/${wishlistId}?limit=10`,
  });
};

export const useWishlistData = ({ wishlistId }) => {
  return useQuery(['wishlist', wishlistId], () =>
    getWishlistData({ wishlistId })
  );
};
