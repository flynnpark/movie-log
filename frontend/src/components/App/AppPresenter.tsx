import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from '../../routes/Home';
import Login from '../../routes/Login';

interface IAppPresenterProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IAppPresenterProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <WrappedLoggedInRoutes /> : <WrappedLoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes = ({ location }) => (
  <React.Fragment>
    <Switch key={location.key}>
      <Route exact={true} path="/" component={Login} />
    </Switch>
  </React.Fragment>
);

const WrappedLoggedOutRoutes = withRouter(LoggedOutRoutes);

const LoggedInRoutes = ({ location }) => (
  <React.Fragment>
    <Switch key={location.key}>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </React.Fragment>
);

const WrappedLoggedInRoutes = withRouter(LoggedInRoutes);

export default AppPresenter;
