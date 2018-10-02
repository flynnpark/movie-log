import React, { Component } from 'react';
import ProfileSectionPresenter from './ProfileSectionPresenter';

interface IProfileSectionProps {
  userData: any;
}

class ProfileSectionContainer extends Component<IProfileSectionProps, any> {
  public render() {
    return <ProfileSectionPresenter {...this.props} />;
  }
}

export default ProfileSectionContainer;
