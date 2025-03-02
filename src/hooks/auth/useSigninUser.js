import { useMutation } from 'react-query';
import { setCookie } from 'cookies-next';

import { signinUser } from '@/features/auth/api/login';

export const useSigninUser = () => {
  return useMutation((data) => signinUser(data), {
    onSuccess(resp) {
      setCookie('accessToken', resp.access_token);
      setCookie('refreshToken', resp.refresh_token);
      setCookie('refreshTokenId', resp.refresh_token_id);
    },
  });
};
