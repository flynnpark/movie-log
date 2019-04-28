import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { getProfileData } from 'types/api';
import { GET_NAVIGATION_DATA } from './NavigationQueries';
import NavigationPresenter from './NavigationPresenter';

class GetMyInfoQueries extends Query<getProfileData> {}

interface IProps extends RouteComponentProps<any> {}

class NavigationContainer extends React.Component<IProps> {
  public render() {
    return (
      <GetMyInfoQueries query={GET_NAVIGATION_DATA}>
        {({ data, loading }) => {
          return (
            <NavigationPresenter
              {...this.props}
              loading={loading}
              data={data}
            />
          );
        }}
      </GetMyInfoQueries>
    );
  }
}

export default NavigationContainer;
