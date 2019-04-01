import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Form, notification } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Login } from 'react-facebook';
import SignUpPresenter from './SignUpPresenter';
import { EMAIL_SIGN_UP } from './SignUpQueries';
import { startEmailSignUp, startEmailSignUpVariables } from '../../types/api';
import { USER_LOG_IN, FACEBOOK_LOG_IN } from '../../SharedQueries.local';

interface IState {
  confirmDirty: boolean;
  email: string;
  password: string;
  name: string;
  avatar: string;
  shortBio: string;
}

interface IProps extends RouteComponentProps<{}> {
  form: WrappedFormUtils;
}

class EmailSignUpMutation extends Mutation<
  startEmailSignUp,
  startEmailSignUpVariables
> {}

class SignUpContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      confirmDirty: false,
      email: '',
      password: '',
      name: '',
      avatar: '',
      shortBio: ''
    };
  }

  public handleConfirmBlur = event => {
    const {
      target: { value }
    } = event;
    const { confirmDirty } = this.state;
    this.setState({
      confirmDirty: confirmDirty || !!value
    });
  };

  public validateToNextPassword = (
    rule: any,
    value: string,
    callback: (arg?: string) => void
  ) => {
    const { confirmDirty } = this.state;
    const { form } = this.props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  public compareToFirstPassword = (
    rule: any,
    value: string,
    callback: (arg?: string) => void
  ): void => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  public handleSubmit = event => {
    const { form } = this.props;
    event.preventDefault();
    form.validateFieldsAndScroll((error, fieldsValue) => {
      if (error) {
        return;
      }
      this.setState({
        ...this.state,
        email: fieldsValue.email,
        password: fieldsValue.password,
        name: fieldsValue.name,
        avatar: fieldsValue.avatar,
        shortBio: fieldsValue.shortBio
      });
    });
  };

  public render() {
    const { email, password, name, avatar, shortBio } = this.state;
    const { form } = this.props;
    return (
      <Mutation mutation={USER_LOG_IN}>
        {userLogIn => (
          <Mutation mutation={FACEBOOK_LOG_IN}>
            {facebookLogIn => (
              <EmailSignUpMutation
                mutation={EMAIL_SIGN_UP}
                variables={{
                  email,
                  password,
                  name,
                  avatar,
                  shortBio
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
                {(mutation, { loading }) => (
                  <Login
                    scope="email"
                    onCompleted={response => {
                      facebookLogIn({
                        variables: {
                          facebookToken: response.tokenDetail.accessToken
                        }
                      });
                    }}
                    onError={error => {
                      notification.error({
                        message: 'Login Failed',
                        description: error
                      });
                    }}
                  >
                    {({
                      loading: facebookLoading,
                      handleClick: handleFacebookClick
                    }) => (
                      <SignUpPresenter
                        loading={loading}
                        form={form}
                        validateToNextPassword={this.validateToNextPassword}
                        compareToFirstPassword={this.compareToFirstPassword}
                        handleConfirmBlur={this.handleConfirmBlur}
                        handleSubmit={this.handleSubmit}
                        onSubmitFn={mutation}
                        facebookLoading={
                          facebookLoading === undefined
                            ? false
                            : facebookLoading
                        }
                        handleFacebookClick={handleFacebookClick}
                      />
                    )}
                  </Login>
                )}
              </EmailSignUpMutation>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default Form.create()(SignUpContainer);
