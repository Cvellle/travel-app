import { useRouter } from 'next/router';

import { googleRegisterApiRoute } from '@/features/auth/api/googleRegister';
import { storage } from '@/utils/storage';

export const useGoogleAuth = () => {
  const router = useRouter();

  const handleGoogleAuth = async ({ type }) => {
    storage.set('googleAuthType', type);

    try {
      const response = await googleRegisterApiRoute();
      router.push(response?.data?.url);
    } catch (error) {
      console.log({ error });
      return error.message;
    }
  };

  return { handleGoogleAuth };
};
