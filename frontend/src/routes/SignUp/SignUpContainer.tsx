import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SignUpPresenter from './SignUpPresenter';
import { Mutation } from 'react-apollo';
import { EMAIL_SIGN_UP } from './SignUpQueries';
import { startEmailSignUp, startEmailSignUpVariables } from '../../types/api';
import { USER_LOG_IN } from '../../SharedQueries.local';

interface IState {
  email: string;
  password1: string;
  password2: string;
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
      password1: '',
      password2: '',
      name: '',
      birthday: this.getFormattedDate(new Date()),
      profileImage: ''
    };
  }

  public getFormattedDate = dateObj => {
    const tmpDate = new Date(dateObj);
    let month = '' + (tmpDate.getMonth() + 1);
    let date = '' + tmpDate.getDate();
    const year = tmpDate.getFullYear();

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

  public render() {
    const {
      email,
      password1,
      password2,
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
              password: password1,
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
                  password1={password1}
                  password2={password2}
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
