import React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import {
  startEmailVerification,
  startEmailVerificationVariables
} from '../../types/api';
import LoginPresenter from './LoginPresenter';
import { EMAIL_LOG_IN } from './LoginQueries.queries';

interface IState {
  email: string;
  password: string;
}

class EmailSignInMutation extends Mutation<
  startEmailVerification,
  startEmailVerificationVariables
> {}

class LoginContainer extends React.Component<RouteComponentProps<any>, IState> {
  public state = {
    email: '',
    password: ''
  };

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public render() {
    const { email, password } = this.state;
    return (
      <EmailSignInMutation
        mutation={EMAIL_LOG_IN}
        variables={{ email, password }}
        onCompleted={data => {
          const { EmailSignIn } = data;
          if (EmailSignIn.ok) {
            return;
          } else {
            console.log(data);
          }
        }}
      >
        {(mutation, { loading }) => {
          const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
            event.preventDefault();
            mutation();
          };
          return (
            <LoginPresenter
              email={email}
              password={password}
              onInputChange={this.onInputChange}
              onSubmit={onSubmit}
              loading={loading}
            />
          );
        }}
      </EmailSignInMutation>
    );
  }
}

export default LoginContainer;
