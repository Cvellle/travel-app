import { useMutation, useQueryClient } from 'react-query';
import { deleteCookie } from 'cookies-next';

import { signout } from '@/features/auth/api/signout';

export const useSignout = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => signout(data), {
    onSuccess() {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      deleteCookie('refreshTokenId');
    },
  });
};
