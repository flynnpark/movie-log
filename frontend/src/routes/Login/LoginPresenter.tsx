import React from 'react';
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
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const LoginPresenter: React.SFC<IProps> = ({
  email,
  password,
  onInputChange,
  onSubmit,
  loading
}) => (
  <PageWrapper type="flex" justify="center" align="middle">
    <Helmet>
      <title>Log in | Movie.log</title>
    </Helmet>
    <Col span={6}>
      <Card title="Log in">
        <Form onSubmit={onSubmit}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              name="email"
              placeholder="E-mail"
              onChange={onInputChange}
              value={email}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              name="password"
              placeholder="Password"
              onChange={onInputChange}
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
