import Link from 'next/link';
import { Link as NextUILink, Container, Spacer } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import { AuthHeader } from '@/features/auth/components/StyledComponents/AuthHeader';

const AuthLayout = ({ children }) => {
  // hooks
  const router = useRouter();
  const t = useTranslations('Auth');
  // states
  const [route, setRoute] = useState(router.pathname.split('/').pop());

  useEffect(() => {
    setRoute(router.pathname.split('/').pop());
  }, [router]);

  return (
    <div>
      <AuthHeader>
        <Link href="/">
          <NextUILink css={{ cursor: 'pointer', color: 'white' }}>
            Logo
          </NextUILink>
        </Link>
        <div>
          {route === 'register' && (
            <span>
              {t('already')}
              <Link href="/auth/login">
                <NextUILink css={{ color: 'white', p: '1rem' }}>
                  {t('loginBtn')}
                </NextUILink>
              </Link>
            </span>
          )}
          {route === 'login' && (
            <span>
              {t('yet')}
              <Link href="/auth/register">
                <NextUILink css={{ color: 'white', p: '1rem' }}>
                  {t('registerBtn')}
                </NextUILink>
              </Link>
            </span>
          )}
        </div>
      </AuthHeader>
      <Container justify="center" align="center">
        {children}
      </Container>
    </div>
  );
};

export default AuthLayout;
