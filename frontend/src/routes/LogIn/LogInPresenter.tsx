import React from 'react';
import { MutationFn } from 'react-apollo';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Button, Card, Checkbox, Form, Icon, Input } from 'antd';

const PageWrapper = styled.div`
  height: 100vh;
`;

interface IProps {
  form: any;
  loading: boolean;
  handleSubmit: (event: any) => void;
  onSubmitFn: MutationFn;
}

const LoginPresenter: React.SFC<IProps> = ({
  form,
  loading,
  handleSubmit,
  onSubmitFn
}) => {
  const { getFieldDecorator } = form;
  return (
    <PageWrapper>
      <Helmet>
        <title>Log in | Movie.log</title>
      </Helmet>
      <Card title="Log in">
        <Form
          onSubmit={async event => {
            event.preventDefault();
            await handleSubmit(event);
            await onSubmitFn();
          }}
        >
          <Form.Item>
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
            })(<Input prefix={<Icon type="user" />} placeholder="E-mail" />)}
          </Form.Item>
          <Form.Item>
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
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block={true}>
              Log in
            </Button>
            <Link to="/signup">
              <Button type="default" htmlType="button" block={true}>
                Sign up
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </PageWrapper>
  );
};

export default LoginPresenter;
