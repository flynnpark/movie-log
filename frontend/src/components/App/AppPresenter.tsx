import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import Home from '../../routes/Home';
import LogIn from '../../routes/LogIn';
import SignUp from '../../routes/SignUp';
import Profile from '../../routes/Profile';
import Search from '../../routes/Search';
import Navigation from '../Navigation';

interface IAppPresenterProps {
  isLoggedIn: boolean;
}

const FixedHeader = styled(Layout.Header)`
  position: fixed;
  display: flex;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled(Layout.Content)`
  padding-top: 96px;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`;

const AppPresenter: React.SFC<IAppPresenterProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Layout>
    <Content>
      <Switch>
        <Route exact={true} path="/" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Content>
  </Layout>
);

const LoggedInRoutes: React.SFC = () => (
  <Layout>
    <FixedHeader>
      <Navigation />
    </FixedHeader>
    <Content>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/profile/:userId" component={Profile} />
        <Route exact={true} path="/search/:query" component={Search} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Content>
  </Layout>
);

export default AppPresenter;
