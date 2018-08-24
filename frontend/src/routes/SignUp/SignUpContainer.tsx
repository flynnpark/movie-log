import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SignUpPresenter from './SignUpPresenter';

interface IState {
  email: string;
  password: string;
  name: string;
  birthday: string;
  profileImage: string;
}

interface IProps extends RouteComponentProps<any> {}

class SignUpContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      birthday: '',
      profileImage: ''
    };
  }

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public render() {
    const { email, password, name, birthday, profileImage } = this.state;
    return (
      <SignUpPresenter
        email={email}
        password={password}
        name={name}
        birthday={birthday}
        profileImage={profileImage}
        onChange={this.onInputChange}
      />
    );
  }
}

export default SignUpContainer;
