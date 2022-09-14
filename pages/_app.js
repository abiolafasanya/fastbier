import Layout from '../components/layouts/Layout';
import '../styles/globals.css';
import { AppProvider } from './../context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
