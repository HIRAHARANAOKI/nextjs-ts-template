import { AppProps } from 'next/app';
import 'pages/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
