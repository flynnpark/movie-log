import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import ko_KR from 'antd/lib/locale-provider/ko_KR';
import { FacebookProvider } from 'react-facebook';
import client from './apollo';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './GlobalStyles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <LocaleProvider locale={ko_KR}>
        <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}>
          <App />
        </FacebookProvider>
      </LocaleProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
