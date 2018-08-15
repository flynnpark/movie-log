import React from 'react';
import Helmet from 'react-helmet';
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
  Upload
} from 'antd';

const PageWrapper = styled(Row)`
  height: 100vh;
  background-color: #f2f3f5;
`;

const SignUpPresenter: React.SFC<any> = props => {
  const { getFieldDecorator } = props.form;

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
              })(<Input />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  }
                ]
              })(<Input type="password" />)}
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
              {getFieldDecorator('nickanme', {
                rules: [
                  {
                    required: true,
                    message: 'Please input you nickname!',
                    whitespace: true
                  }
                ]
              })(<Input type="password" />)}
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
          </Form>
        </Card>
      </Col>
    </PageWrapper>
  );
};

const WrappedSignUpForm = Form.create()(SignUpPresenter);

export default WrappedSignUpForm;
