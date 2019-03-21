import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Form, Input, Tooltip, Icon, Upload, Button } from 'antd';
import { MutationFn } from 'react-apollo';

const PageWrapper = styled.div`
  height: 100vh;
  text-align: center;
`;

const SignUpCard = styled(Card)`
  @media (min-width: 719px) {
    display: inline-block;
    position: relative;
    width: 600px;
    height: auto;
    vertical-align: middle;
  }
  width: 100%;
`;

interface IProps {
  form: any;
  loading: boolean;
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

const SignUpPresenter: React.FunctionComponent<IProps> = ({
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
      <SignUpCard title="Sign Up">
        <Form
          onSubmit={async event => {
            event.preventDefault();
            await handleSubmit(event);
            await onSubmitFn();
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
                  message: 'The input is not valid E-mail!'
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
                Name&nbsp;
                <Tooltip title="다른 사람들이 뭐라고 불러주길 원하나요?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input you name!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={
              <span>
                Bio&nbsp;
                <Tooltip title="자신에 대한 짧은 소개를 적어보세요.">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('shortBio')(<Input.TextArea rows={3} />)}
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="button">
              <Link to="/">Back</Link>
            </Button>{' '}
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </SignUpCard>
    </PageWrapper>
  );
};

export default SignUpPresenter;
