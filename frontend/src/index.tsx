import 'antd/dist/antd.css';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import ko_KR from 'antd/lib/locale-provider/ko_KR';
import client from './apollo';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './GlobalStyles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider locale={ko_KR}>
      <App />
    </LocaleProvider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
