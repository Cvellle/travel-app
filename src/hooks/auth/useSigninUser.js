import { useMutation } from 'react-query';
import { setCookie } from 'cookies-next';

import { signinUser } from '@/features/auth/api/login';

export const useSigninUser = () => { 
  return useMutation((data) => signinUser(data), {
    onSuccess(resp) {
      alert('s')
      console.log(123, resp);
      
      setCookie('accessToken', resp.accessTtoken);
      setCookie('refreshToken', resp.refreshToken);
      // setCookie('refreshTokenId', resp.refreshToken_id);
    },
  });
};
