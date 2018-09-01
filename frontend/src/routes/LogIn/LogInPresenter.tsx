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
  email: string;
  password: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitFn: MutationFn;
  loading: boolean;
}

const LoginPresenter: React.SFC<IProps> = ({
  email,
  password,
  onChange,
  onSubmitFn,
  loading
}) => (
  <PageWrapper>
    <Helmet>
      <title>Log in | Movie.log</title>
    </Helmet>
    <Card title="Log in">
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmitFn();
        }}
      >
        <Form.Item>
          <Input
            prefix={<Icon type="user" />}
            name="email"
            placeholder="E-mail"
            onChange={onChange}
            value={email}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value={password}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
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

export default LoginPresenter;
