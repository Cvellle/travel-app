import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Hydrate, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Loading } from '@nextui-org/react';
import { NextIntlProvider } from 'next-intl';
import { NextUIProvider } from '@nextui-org/react';

import { appConfig } from '@/config/index';
import { queryClient } from '@/lib/react-query';
import { AuthProvider } from '@/providers/authProvider';
import { NextUiDefaultTheme } from '@/styles/themes';

const ErrorFallback = () => {
  return (
    <div>
      <h2>Ooops, something went wrong :( </h2>
    </div>
  );
};

export const AppProvider = ({ pageProps, children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Loading />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools /> */}

          <Hydrate state={pageProps.dehydratedState}>
            <AuthProvider>
              <NextUIProvider theme={NextUiDefaultTheme}>
                <NextIntlProvider messages={pageProps.textContent}>
                  {children}
                </NextIntlProvider>
              </NextUIProvider>
            </AuthProvider>
          </Hydrate>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
