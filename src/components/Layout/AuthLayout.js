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
      <AuthHeader
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#0070f3',
        }}
      >
        <Link href="/">
          <NextUILink css={{ cursor: 'pointer', color: 'white' }}>
            {/* Logo */}
            Go to homepage
          </NextUILink>
        </Link>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {route === 'register' && (
            <Link href="/auth/login">
              <NextUILink css={{ color: 'white', p: '1rem', display: 'flex', nowrap: 'nowrap' }}>
                {t('already')}: {t('loginBtn')}
              </NextUILink>
            </Link>
          )}
          {route === 'login' && (
            <span>              
              <Link href="/auth/register">
                <NextUILink css={{ color: 'white', p: '1rem' }}>
                 {t('yet')}: {t('registerBtn')}
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
