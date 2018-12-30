import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import { getProfileData } from 'src/types/api';
import { GET_PROFILE_DATA } from './ProfileQueries';
import Loading from 'src/components/Loading';
import ProfilePresenter from './ProfilePresenter';

interface IParams {
  userId: string;
}

interface IProps extends RouteComponentProps<IParams> {}

class ProfileQueries extends Query<getProfileData> {}

class ProfileContainer extends Component<IProps, any> {
  public render() {
    const { match } = this.props;
    if (match) {
      const {
        params: { userId }
      } = match;
      return (
        <ProfileQueries query={GET_PROFILE_DATA} variables={{ userId }}>
          {({ data, loading }) => (
            <React.Fragment>
              {!loading && data ? (
                <ProfilePresenter data={data} />
              ) : (
                <Loading />
              )}
            </React.Fragment>
          )}
        </ProfileQueries>
      );
    }
    return null;
  }
}

export default ProfileContainer;
