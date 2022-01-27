import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
