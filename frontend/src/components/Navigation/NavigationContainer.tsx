import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import NavigationPresenter from './NavigationPresenter';
import { getProfileData } from 'src/types/api';
import { GET_NAVIGATION_DATA } from './NavigationQueries';

class GetMyInfoQueries extends Query<getProfileData> {}

interface IProps extends RouteComponentProps<any> {}

class NavigationContainer extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <GetMyInfoQueries query={GET_NAVIGATION_DATA}>
        {({ data, loading }) => {
          return (
            <NavigationPresenter
              {...this.props}
              data={data}
              loading={loading}
            />
          );
        }}
      </GetMyInfoQueries>
    );
  }
}

export default NavigationContainer;
