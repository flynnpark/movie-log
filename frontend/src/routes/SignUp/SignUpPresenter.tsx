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
import moment from 'moment';
import { MutationFn } from 'react-apollo';

const PageWrapper = styled(Row)`
  height: 100vh;
`;

interface IProps {
  form: any;
  email: string;
  password1: string;
  password2: string;
  name: string;
  birthday: string;
  profileImage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitFn: MutationFn;
  loading: boolean;
}

const SignUpPresenter: React.SFC<IProps> = ({
  form,
  email,
  password1,
  password2,
  name,
  birthday,
  profileImage,
  onChange,
  onSubmitFn,
  loading
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
              })(<Input name="email" value={email} onChange={onChange} />)}
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
                <Input
                  type="password"
                  name="password1"
                  value={password1}
                  onChange={onChange}
                />
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
              })(
                <Input
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
              )}
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
              })(<Input name="name" value={name} onChange={onChange} />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Birthday">
              {getFieldDecorator('birthday', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your birthday!'
                  }
                ]
              })(
                <DatePicker
                  defaultValue={moment(birthday, dateFormat)}
                  format={dateFormat}
                />
              )}
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
