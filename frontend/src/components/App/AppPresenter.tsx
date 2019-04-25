import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import styled from 'styled-components';
import { Layout, BackTop } from 'antd';
import Home from 'routes/Home';
import LogIn from 'routes/LogIn';
import SignUp from 'routes/SignUp';
import Profile from 'routes/Profile';
import Search from 'routes/Search';
import Movie from 'routes/Movie';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import MobileNavigationContainer from 'components/MobileNavigation/MobileNavigationContainer';

const FixedHeader = styled(Layout.Header)`
  @media (max-width: 767px) {
    display: none;
  }
  position: fixed;
  display: flex;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px #e8e8e8;
`;

const FixedFooter = styled(Layout.Footer)`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  position: fixed;
  bottom: 0;
  padding: 0;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px #e8e8e8;
`;

const LoggedOutContent = styled(Layout.Content)`
  @media (min-width: 719px) {
    padding-top: 96px;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  width: 100%;
  height: 100vh;
`;

const Content = styled(Layout.Content)`
  @media (min-width: 768px) {
    padding-top: 96px;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  width: 100%;
`;

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.FunctionComponent<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <WrappedLoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.FunctionComponent = () => (
  <Layout>
    <BackTop />
    <LoggedOutContent>
      <Switch>
        <Route exact={true} path="/" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </LoggedOutContent>
  </Layout>
);

interface ILoggedInRoutesProps extends RouteComponentProps<any> {}

const LoggedInRoutes: React.FunctionComponent<ILoggedInRoutesProps> = props => (
  <Layout>
    <BackTop />
    <FixedHeader>
      <Navigation {...props} />
    </FixedHeader>
    <Content>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/profile/:userId" component={Profile} />
        <Route exact={true} path="/search/:query" component={Search} />
        <Route exact={true} path="/movie/:movieId" component={Movie} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Content>
    <Layout.Footer>
      <Footer />
    </Layout.Footer>
    <FixedFooter>
      <MobileNavigationContainer />
    </FixedFooter>
  </Layout>
);

const WrappedLoggedInRoutes = withRouter(LoggedInRoutes);

export default AppPresenter;
