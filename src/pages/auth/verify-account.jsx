import { Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { verifyAccount } from '@/features/auth/api/verifyAccount';

const VerifyAccount = () => {
  const [verifyState, setVerifyState] = useState('idle');
  const router = useRouter();

  useEffect(() => {
    if (router.query.token) {
      verifyAccount({ token: router.query.token })
        .then(() => {
          setVerifyState('success');

          setTimeout(() => {
            router.replace('/');
          }, 2000);
        })
        .catch((error) => {
          console.log({ error });
          setVerifyState('error');
        });
    }
  }, [router.query]);

  if (verifyState === 'success') {
    return <p>Verification success</p>;
  }

  if (verifyState === 'error') {
    return <p>Verification error</p>;
  }

  return <Loading />;
};

export default VerifyAccount;
