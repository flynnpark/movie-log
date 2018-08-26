import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SignUpPresenter from './SignUpPresenter';
import { Mutation } from 'react-apollo';
import { EMAIL_SIGN_UP } from './SignUpQueries';
import { startEmailSignUp, startEmailSignUpVariables } from '../../types/api';
import { USER_LOG_IN } from '../../SharedQueries.local';

interface IState {
  email: string;
  password: string;
  name: string;
  birthday: string;
  profileImage: string;
}

interface IProps extends RouteComponentProps<any> {}

class EmailSignUpMutation extends Mutation<
  startEmailSignUp,
  startEmailSignUpVariables
> {}

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
      <Mutation mutation={USER_LOG_IN}>
        {userLogIn => (
          <EmailSignUpMutation
            mutation={EMAIL_SIGN_UP}
            variables={{ email, password, name, birthday, profileImage }}
            onCompleted={data => {
              const { EmailSignUp } = data;
              if (EmailSignUp.ok) {
                if (EmailSignUp.token) {
                  userLogIn({
                    variables: {
                      token: EmailSignUp.token
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
                <SignUpPresenter
                  email={email}
                  password={password}
                  name={name}
                  birthday={birthday}
                  profileImage={profileImage}
                  loading={loading}
                  onChange={this.onInputChange}
                  onSubmitFn={mutation}
                />
              );
            }}
          </EmailSignUpMutation>
        )}
      </Mutation>
    );
  }
}

export default SignUpContainer;
