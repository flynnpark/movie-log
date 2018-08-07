import 'antd/dist/antd.css';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import client from './apollo';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
