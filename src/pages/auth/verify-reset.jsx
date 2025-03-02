import { Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { verifyResetToken } from '@/features/auth/';
import ResetPassword from '@/features/auth/components/ResetPassword';
import AuthLayout from '@/components/Layout/AuthLayout';
import { checkUserAuthState } from '@/utils/helpers';

const VerifyAccount = () => {
  const router = useRouter();

  if (!router.query.token) {
    return <p>URL is not valid</p>;
  }

  return <ResetPassword token={router.query.token} />;
};

VerifyAccount.getLayout = function getLayout(page) {
  return <AuthLayout hero={false}>{page}</AuthLayout>;
};

export default VerifyAccount;

export async function getServerSideProps({ locale }) {
  const isUserLoggedIn = checkUserAuthState();

  if (isUserLoggedIn) {
    return {
      redirect: {
        permanent: false,
        destination: `/`,
      },
    };
  }

  return {
    props: {
      textContent: (
        await import(`../../../locales/${locale}/translations.json`)
      ).default,
    },
  };
}
