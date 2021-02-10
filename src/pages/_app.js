import { useEffect } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NProgress from 'nprogress';
import Router from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import NextNProgress from 'nextjs-progressbar';
import DefaultLayout from '@layouts/default';
import theme from '@assets/jss/theme';
import '@assets/scss/global.scss';
import '@assets/scss/nprogress.scss';

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;
  const npconf = {
    color: '#0070F3',
    showAfterMs: 300,
    spinner: true,
  };

  let timer = null;

  const routeChangeStart = () => {
    const { showAfterMs } = npconf;
    clearTimeout(timer);
    timer = setTimeout(NProgress.start, showAfterMs);
  };

  const routeChangeEnd = () => {
    clearTimeout(timer);
    NProgress.done();
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (npconf) {
      NProgress.configure(npconf);
    }

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      clearTimeout(timer);
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <NextNProgress
        color={npconf.color}
        height="5"
      />
      <Layout>
        <CssBaseline />
        <Component {...pageProps}> </Component>
      </Layout>
    </MuiThemeProvider>
  );
};

export default MyApp;
