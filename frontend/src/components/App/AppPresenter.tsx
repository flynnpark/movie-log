import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home';
import LogIn from '../../routes/LogIn';
import SignUp from '../../routes/SignUp';

interface IAppPresenterProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IAppPresenterProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route exact={true} path="/" component={LogIn} />
    <Route path="/signup" component={SignUp} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

export default AppPresenter;
