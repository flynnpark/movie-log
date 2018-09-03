import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Form } from 'antd';
import SignUpPresenter from './SignUpPresenter';
import { EMAIL_SIGN_UP } from './SignUpQueries';
import { startEmailSignUp, startEmailSignUpVariables } from '../../types/api';
import { USER_LOG_IN } from '../../SharedQueries.local';

interface IState {
  confirmDirty: boolean;
  email: string;
  password: string;
  name: string;
  avatar: string;
}

interface IProps extends RouteComponentProps<any> {
  form: any;
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
      avatar: ''
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
        avatar: fieldsValue.avatar
      });
    });
  };

  public render() {
    const { email, password, name, avatar } = this.state;
    const { form } = this.props;
    return (
      <Mutation mutation={USER_LOG_IN}>
        {userLogIn => (
          <EmailSignUpMutation
            mutation={EMAIL_SIGN_UP}
            variables={{
              email,
              password,
              name,
              avatar
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
                  loading={loading}
                  form={form}
                  validateToNextPassword={this.validateToNextPassword}
                  compareToFirstPassword={this.compareToFirstPassword}
                  handleConfirmBlur={this.handleConfirmBlur}
                  handleSubmit={this.handleSubmit}
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

export default Form.create()(SignUpContainer);
