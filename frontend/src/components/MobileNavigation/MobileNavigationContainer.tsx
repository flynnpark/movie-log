import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Query } from 'react-apollo';
import { getProfileData } from 'types/api';
import MobileNavigationPresenter from './MobileNavigationPresenter';
import { GET_NAVIGATION_DATA } from './MobileNavigationQueries';

class GetMyInfoQueries extends Query<getProfileData> {}

class MobileNavigationContainer extends React.Component<RouteComponentProps> {
  public render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <GetMyInfoQueries query={GET_NAVIGATION_DATA}>
        {({ data, loading }) => (
          <MobileNavigationPresenter
            handleClick={this.handleClick}
            pathname={pathname}
            loading={loading}
            data={data}
          />
        )}
      </GetMyInfoQueries>
    );
  }

  private handleClick = (path: string) => {
    const { history } = this.props;
    history.push(path);
  };
}

export default withRouter(MobileNavigationContainer);
