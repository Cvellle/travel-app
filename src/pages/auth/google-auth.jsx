import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';

import { useAuth } from '@/providers/authProvider';
import { getGoogleAccessToken } from '@/features/auth/api/googleRegister';
import { storage } from '@/utils/storage';

const GoogleAuth = () => {
  const router = useRouter();

  const { login } = useAuth();

  useEffect(() => {
    console.log(router.query);
    if (router.query.code) {
      getGoogleAccessToken({ code: router.query.code })
        .then((res) =>
          login({
            accessToken: res.data.tokens.access_token,
            isGoogleAuth: true,
          })
        )
        .then((res) => {
          router.push('/');
        })
        .catch((error) => {
          console.log({ error });
          if (storage.get('googleAuthType')) {
            storage.clear('googleAuthType');
          }
        });
    }
  }, [router.query]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loading />
    </div>
  );
};

export default GoogleAuth;
