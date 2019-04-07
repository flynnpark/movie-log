import React from 'react';
import { MutationFn } from 'react-apollo';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Button, Card, Checkbox, Form, Icon, Input, Divider, Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';

const PageWrapper = styled.div`
  height: 100vh;
  text-align: center;
`;

const LoginCard = styled(Card)`
  @media (min-width: 719px) {
    display: inline-block;
    position: relative;
    width: 375px;
    height: auto;
    vertical-align: middle;
  }
  width: 100%;
  height: 100%;
`;

const LoginTitle = styled.h1`
  font-size: 1.8em;
`;

interface IProps {
  form: any;
  loading: boolean;
  handleSubmit: (event: any) => void;
  onSubmitFn: MutationFn;
  facebookLoading: boolean;
  handleFacebookClick: any;
}

const LogInPresenter: React.FunctionComponent<IProps> = ({
  form,
  loading,
  handleSubmit,
  onSubmitFn,
  facebookLoading,
  handleFacebookClick
}) => {
  const { getFieldDecorator } = form;
  return (
    <PageWrapper>
      <Helmet>
        <title>Log in | Movie.log</title>
      </Helmet>
      <QueueAnim>
        <div key="loginCard">
          <LoginCard title={<LoginTitle>Movie.log</LoginTitle>}>
            <Form
              onSubmit={async event => {
                event.preventDefault();
                await handleSubmit(event);
                await onSubmitFn();
              }}
            >
              <QueueAnim>
                <Form.Item key="1">Login</Form.Item>
                <Form.Item key="2">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!'
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!'
                      }
                    ]
                  })(
                    <Input
                      prefix={<Icon type="user" />}
                      placeholder="E-mail"
                      disabled={loading || facebookLoading}
                    />
                  )}
                </Form.Item>
                <Form.Item key="3">
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your password!'
                      }
                    ]
                  })(
                    <Input
                      prefix={<Icon type="lock" />}
                      type="password"
                      placeholder="Password"
                      disabled={loading || facebookLoading}
                    />
                  )}
                </Form.Item>
                <Form.Item key="4">
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(
                    <Checkbox disabled={loading || facebookLoading}>
                      Remember me
                    </Checkbox>
                  )}
                </Form.Item>
                <Form.Item key="5">
                  <Spin spinning={loading || facebookLoading}>
                    <Button type="primary" htmlType="submit" block={true}>
                      Log in
                    </Button>
                    <Button type="default" htmlType="button" block={true}>
                      <Link to="/signup">Sign up</Link>
                    </Button>
                  </Spin>
                </Form.Item>
                <Divider key="6">OR</Divider>
                <Form.Item key="7">
                  <Spin spinning={loading || facebookLoading}>
                    <Button
                      type="primary"
                      htmlType="button"
                      block={true}
                      onClick={handleFacebookClick}
                    >
                      <Icon type="facebook" theme="filled" />
                      Login via Facebook
                    </Button>
                  </Spin>
                </Form.Item>
              </QueueAnim>
            </Form>
          </LoginCard>
        </div>
      </QueueAnim>
    </PageWrapper>
  );
};

export default LogInPresenter;
``;
