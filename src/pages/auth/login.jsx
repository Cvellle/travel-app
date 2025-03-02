import React from 'react';

import AuthLayout from '@/components/Layout/AuthLayout';
import Login from '@/features/auth/components/Login';
import { checkUserAuthState } from '@/utils/helpers';

const LoginPage = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout hero={true}>{page}</AuthLayout>;
};

export default LoginPage;

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
