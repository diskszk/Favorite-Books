import { Provider } from 'react-redux';
import { createStore } from 'src/store';
import { AppProps } from 'next/app';

type Props = {
  pageProps: any;
  Component: any;
};

const store = createStore();
const App: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
