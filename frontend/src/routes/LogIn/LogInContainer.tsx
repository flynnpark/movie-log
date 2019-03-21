import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Form, notification } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
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

interface IProps extends RouteComponentProps<any> {
  form: WrappedFormUtils;
}

class EmailSignInMutation extends Mutation<
  startEmailVerification,
  startEmailVerificationVariables
> {}

class LogInContainer extends React.Component<IProps, IState> {
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

  public handleSubmit = event => {
    const { form } = this.props;
    event.preventDefault();
    form.validateFields((error, fieldsValue) => {
      if (error) {
        return;
      }
      this.setState({
        ...this.state,
        email: fieldsValue.email,
        password: fieldsValue.password
      });
    });
  };

  public render() {
    const { email, password } = this.state;
    const { form } = this.props;
    return (
      <Mutation mutation={USER_LOG_IN}>
        {userLogIn => (
          <EmailSignInMutation
            mutation={EMAIL_LOG_IN}
            variables={{ email, password }}
            onCompleted={(data: startEmailVerification) => {
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
                notification.error({
                  message: 'Login Failed',
                  description: data.EmailSignIn.error
                });
              }
            }}
          >
            {(mutation, { loading }) => (
              <LogInPresenter
                loading={loading}
                form={form}
                handleSubmit={this.handleSubmit}
                onSubmitFn={mutation}
              />
            )}
          </EmailSignInMutation>
        )}
      </Mutation>
    );
  }
}

export default Form.create()(LogInContainer);
