import React, { Component } from 'react';
import ProfileSectionPresenter from './ProfileSectionPresenter';
import {
  getProfileData_GetUserProfile_user,
  getProfileData_GetUserInfo_countInfo
} from 'src/types/api';

interface IProps {
  userData: getProfileData_GetUserProfile_user;
  countData: getProfileData_GetUserInfo_countInfo | null;
}

class ProfileSectionContainer extends Component<IProps, any> {
  public render() {
    return <ProfileSectionPresenter {...this.props} />;
  }
}

export default ProfileSectionContainer;
