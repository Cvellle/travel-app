// No problem! We'll send you a link to reset it. Enter the email address you use to sign in to Booking.com.

import AuthLayout from '@/components/Layout/AuthLayout';
import ForgotPassword from '@/features/auth/components/ForgotPassword';
import { checkUserAuthState } from '@/utils/helpers';

const ForgotPasswordPage = () => {
  return <ForgotPassword />;
};

ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout hero={true}>{page}</AuthLayout>;
};

export default ForgotPasswordPage;

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
