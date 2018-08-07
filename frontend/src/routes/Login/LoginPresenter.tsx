import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import React from 'react';

const LoginPresenter = () => (
  <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
    <Col span={6}>
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
    </Col>
  </Row>
);

export default LoginPresenter;
