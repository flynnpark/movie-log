import React from 'react';
import { MutationFn } from 'react-apollo';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Button, Card, Checkbox, Col, Form, Icon, Input, Row } from 'antd';

const PageWrapper = styled(Row)`
  height: 100vh;
  background-color: #f2f3f5;
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
  <PageWrapper type="flex" justify="center" align="middle">
    <Helmet>
      <title>Log in | Movie.log</title>
    </Helmet>
    <Col span={6}>
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
            <Button type="default" htmlType="button" block={true}>
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Col>
  </PageWrapper>
);

export default LoginPresenter;
