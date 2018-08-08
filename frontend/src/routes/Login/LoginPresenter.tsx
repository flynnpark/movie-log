import React from 'react';
import styled from 'styled-components';
import { Button, Card, Checkbox, Col, Form, Icon, Input, Row } from 'antd';

const PageWrapper = styled(Row)`
  height: 100vh;
  background-color: #f2f3f5;
`;

const LoginPresenter = () => (
  <PageWrapper type="flex" justify="center" align="middle">
    <Col span={6}>
      <Card title="Log in">
        <Form>
          <Form.Item>
            <Input prefix={<Icon type="user" />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
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
