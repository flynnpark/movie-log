import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Card,
  Form,
  Input,
  Tooltip,
  Icon,
  DatePicker,
  Upload,
  Button
} from 'antd';
import { MutationFn } from 'react-apollo';

const PageWrapper = styled.div`
  height: 100vh;
`;

interface IProps {
  loading: boolean;
  form: any;
  handleConfirmBlur: (event: any) => void;
  validateToNextPassword: (
    rule: any,
    value: string,
    callback: (arg?: string) => void
  ) => void;
  compareToFirstPassword: (
    rule: any,
    value: string,
    callback: (arg?: string) => void
  ) => void;
  handleSubmit: (event: any) => void;
  onSubmitFn: MutationFn;
}

const SignUpPresenter: React.SFC<IProps> = ({
  loading,
  form,
  handleConfirmBlur,
  validateToNextPassword,
  compareToFirstPassword,
  handleSubmit,
  onSubmitFn
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

  const dateFormat = 'YYYY-MM-DD';

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div>Upload</div>
    </div>
  );

  return (
    <PageWrapper>
      <Helmet>
        <title>Sign Up | Movie.log</title>
      </Helmet>
      <Card title="Sign Up">
        <Form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit(event);
            onSubmitFn();
          }}
        >
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
                },
                {
                  validator: validateToNextPassword
                }
              ]
            })(<Input type="password" onBlur={handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirm Password">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!'
                },
                {
                  validator: compareToFirstPassword
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
              ],
              format: dateFormat
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
    </PageWrapper>
  );
};

export default SignUpPresenter;
