import React, { Component } from 'react';
import ProfileSectionPresenter from './ProfileSectionPresenter';
import { getProfileData_GetUserProfile_user } from 'src/types/api';

interface IProps {
  userData: getProfileData_GetUserProfile_user;
}

class ProfileSectionContainer extends Component<IProps, any> {
  public render() {
    return <ProfileSectionPresenter {...this.props} />;
  }
}

export default ProfileSectionContainer;
