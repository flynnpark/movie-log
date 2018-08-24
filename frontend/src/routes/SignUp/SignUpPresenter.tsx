import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Tooltip,
  Icon,
  DatePicker,
  Upload,
  Button
} from 'antd';

const PageWrapper = styled(Row)`
  height: 100vh;
`;

const SignUpPresenter: React.SFC<any> = ({
  form,
  email,
  password,
  name,
  birthday,
  profileImage,
  onChange
}) => {
  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 18,
        offset: 6
      }
    }
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div>Upload</div>
    </div>
  );

  return (
    <PageWrapper type="flex" justify="center" align="middle">
      <Helmet>
        <title>Sign Up | Movie.log</title>
      </Helmet>
      <Col span={8}>
        <Card title="Sign Up">
          <Form>
            <Form.Item {...formItemLayout} label="Avatar">
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
              >
                {uploadButton}
              </Upload>
            </Form.Item>
            <Form.Item {...formItemLayout} label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The Input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail'
                  }
                ]
              })(<Input value={email} onChange={onChange} />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  }
                ]
              })(
                <Input type="password" value={password} onChange={onChange} />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Confirm Password">
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  }
                ]
              })(<Input type="password" />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input you nickname!',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Birthday">
              {getFieldDecorator('birthday', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your birthday!'
                  }
                ]
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="default" htmlType="button">
                <Link to="/">Back</Link>
              </Button>{' '}
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </PageWrapper>
  );
};

const WrappedSignUpForm = Form.create()(SignUpPresenter);

export default WrappedSignUpForm;
