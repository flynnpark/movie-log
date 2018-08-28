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
  confirm: string;
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
      confirm: '',
      name: '',
      birthday: this.getFormattedDate(new Date()),
      profileImage: ''
    };
  }

  public getFormattedDate = (dateObj: Date): string => {
    let month = '' + (dateObj.getMonth() + 1);
    let date = '' + dateObj.getDate();
    const year = dateObj.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (date.length < 2) {
      date = '0' + date;
    }

    return [year, month, date].join('-');
  };

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public compareToFirstPassword = (
    rule: any,
    value: string,
    callback: (arg?: string) => void
  ): void => {
    const { password } = this.state;
    if (value && value !== password) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  public render() {
    const {
      email,
      password,
      confirm,
      name,
      birthday,
      profileImage
    } = this.state;
    return (
      <Mutation mutation={USER_LOG_IN}>
        {userLogIn => (
          <EmailSignUpMutation
            mutation={EMAIL_SIGN_UP}
            variables={{
              email,
              password,
              name,
              birthday,
              profileImage
            }}
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
                  confirm={confirm}
                  name={name}
                  birthday={birthday}
                  profileImage={profileImage}
                  loading={loading}
                  onChange={this.onInputChange}
                  compareToFirstPassword={this.compareToFirstPassword}
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
