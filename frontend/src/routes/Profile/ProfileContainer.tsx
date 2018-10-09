import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import { getProfileData } from 'src/types/api';
import { GET_PROFILE_DATA } from './ProfileQueries';
import Loading from 'src/components/Loading';
import ProfilePresenter from './ProfilePresenter';

interface IProps extends RouteComponentProps<any> {
  match: {
    isExact: boolean;
    params: {
      userId: string;
    };
    path: string;
    url: string;
  };
}

class ProfileQueries extends Query<getProfileData> {}

class ProfileContainer extends Component<IProps, any> {
  public render() {
    const {
      match: {
        params: { userId }
      }
    } = this.props;
    return (
      <ProfileQueries query={GET_PROFILE_DATA} variables={{ userId }}>
        {({ data, loading }) => (
          <React.Fragment>
            {loading ? <Loading /> : <ProfilePresenter data={data} />}
          </React.Fragment>
        )}
      </ProfileQueries>
    );
  }
}

export default ProfileContainer;
