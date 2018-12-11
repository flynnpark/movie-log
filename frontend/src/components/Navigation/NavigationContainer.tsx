import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import NavigationPresenter from './NavigationPresenter';

interface IProps extends RouteComponentProps<any> {}

const NavigationContainer: React.FunctionComponent<IProps> = props => (
  <NavigationPresenter {...props} />
);

export default NavigationContainer;
