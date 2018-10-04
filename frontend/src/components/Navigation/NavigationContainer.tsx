import React from 'react';
import NavigationPresenter from './NavigationPresenter';

interface INavigationProps {
  history: any;
}

const NavigationContainer: React.SFC<INavigationProps> = props => (
  <NavigationPresenter {...props} />
);

export default NavigationContainer;
