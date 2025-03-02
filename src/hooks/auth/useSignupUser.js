import { useMutation, useQueryClient } from 'react-query';

import { signupUser } from '@/features/auth/api/register';

export const useSignupUser = () => {
  const queryClient = useQueryClient();
  return useMutation((data) => signupUser(data), {
    onSuccess() {},
  });
};
