import React from 'react';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';
import {
  startEmailVerification,
  startEmailVerificationVariables
} from '../../types/api';
import LogInPresenter from './LogInPresenter';
import { EMAIL_LOG_IN } from './LogInQueries';
import { USER_LOG_IN } from '../../SharedQueries.local';

interface IState {
  email: string;
  password: string;
}

interface IProps extends RouteComponentProps<any> {}

class EmailSignInMutation extends Mutation<
  startEmailVerification,
  startEmailVerificationVariables
> {}

class LogInContainer extends React.Component<RouteComponentProps<any>, IState> {
  constructor(props: IProps) {
    super(props);
    if (!props.location.state) {
      props.history.push('/');
    }
    this.state = {
      email: '',
      password: ''
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
    const { email, password } = this.state;
    return (
      <Mutation mutation={USER_LOG_IN}>
        {userLogIn => (
          <EmailSignInMutation
            mutation={EMAIL_LOG_IN}
            variables={{ email, password }}
            onCompleted={data => {
              const { EmailSignIn } = data;
              if (EmailSignIn.ok) {
                if (EmailSignIn.token) {
                  userLogIn({
                    variables: {
                      token: EmailSignIn.token
                    }
                  });
                }
                return;
              } else {
                console.log(data);
              }
            }}
          >
            {(mutation, { loading }) => {
              return (
                <LogInPresenter
                  email={email}
                  password={password}
                  loading={loading}
                  onChange={this.onInputChange}
                  onSubmitFn={mutation}
                />
              );
            }}
          </EmailSignInMutation>
        )}
      </Mutation>
    );
  }
}

export default LogInContainer;
