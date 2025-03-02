import '@/styles/globals.css';
import { AppProvider } from '@/providers/app';
import { globalStyles } from '@/styles/globalStyles';

function TravelApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  globalStyles();

  return (
    <AppProvider pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
}

export default TravelApp;
