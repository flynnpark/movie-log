import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Spin } from 'antd';
import { getProfileData } from 'src/types/api';
import ProfilePresenter from './ProfilePresenter';
import { GET_PROFILE_DATA } from './ProfileQueries';
import { RouteComponentProps } from 'react-router';

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
  public handleProfileRequest = (data: getProfileData) => {
    console.log(data);
  };

  public render() {
    const {
      match: {
        params: { userId }
      }
    } = this.props;
    return (
      <ProfileQueries
        query={GET_PROFILE_DATA}
        variables={{ userId }}
        onCompleted={this.handleProfileRequest}
      >
        {({ data, loading }) => (
          <React.Fragment>
            {loading ? <Spin size="large" /> : <ProfilePresenter />}
          </React.Fragment>
        )}
      </ProfileQueries>
    );
  }
}

export default ProfileContainer;
