import React from 'react';

import AuthLayout from '@/components/Layout/AuthLayout';
import Register from '@/features/auth/components/Register';
import { checkUserAuthState } from '@/utils/helpers';

const RegisterPage = () => {
  return <Register />;
};

RegisterPage.getLayout = function getLayout(page) {
  return <AuthLayout hero={true}>{page}</AuthLayout>;
};

export default RegisterPage;

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
