import React, { Component } from 'react';
import ProfileSectionPresenter from './ProfileSectionPresenter';

interface IProps {
  userData: any;
}

class ProfileSectionContainer extends Component<IProps, any> {
  public render() {
    return <ProfileSectionPresenter {...this.props} />;
  }
}

export default ProfileSectionContainer;
