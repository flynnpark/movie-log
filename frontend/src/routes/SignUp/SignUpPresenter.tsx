import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { MutationFn } from 'react-apollo';
import styled from 'styled-components';
import {
  Card,
  Form,
  Input,
  Tooltip,
  Icon,
  Upload,
  Button,
  Divider,
  Spin
} from 'antd';
import QueueAnim from 'rc-queue-anim';

const PageWrapper = styled.div`
  height: 100vh;
  text-align: center;
`;

const SignUpCard = styled(Card)`
  @media (min-width: 719px) {
    display: inline-block;
    position: relative;
    width: 375px;
    height: auto;
    vertical-align: middle;
  }
  width: 100%;
  height: 100%;
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
  facebookLoading: boolean;
  handleFacebookClick: any;
}

const SignUpPresenter: React.FunctionComponent<IProps> = ({
  loading,
  form,
  handleConfirmBlur,
  validateToNextPassword,
  compareToFirstPassword,
  handleSubmit,
  onSubmitFn,
  facebookLoading,
  handleFacebookClick
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
      <QueueAnim>
        <div key="signUpCard">
          <SignUpCard title="Sign Up">
            <Form
              onSubmit={async event => {
                event.preventDefault();
                await handleSubmit(event);
                await onSubmitFn();
              }}
            >
              <QueueAnim>
                <Form.Item key="1" {...formItemLayout} label="Avatar">
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    showUploadList={false}
                    disabled={loading || facebookLoading}
                  >
                    {uploadButton}
                  </Upload>
                </Form.Item>
                <Form.Item key="2" {...formItemLayout} label="E-mail">
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
                  })(<Input disabled={loading || facebookLoading} />)}
                </Form.Item>
                <Form.Item key="3" {...formItemLayout} label="Password">
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
                  })(
                    <Input
                      type="password"
                      onBlur={handleConfirmBlur}
                      disabled={loading || facebookLoading}
                    />
                  )}
                </Form.Item>
                <Form.Item key="4" {...formItemLayout} label="Confirm">
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
                  })(
                    <Input
                      type="password"
                      disabled={loading || facebookLoading}
                    />
                  )}
                </Form.Item>
                <Form.Item
                  key="5"
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
                  })(<Input disabled={loading || facebookLoading} />)}
                </Form.Item>
                <Form.Item
                  key="6"
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
                  {getFieldDecorator('shortBio')(
                    <Input.TextArea
                      rows={3}
                      disabled={loading || facebookLoading}
                    />
                  )}
                </Form.Item>
                <Form.Item key="7">
                  <Spin spinning={loading || facebookLoading}>
                    <Button type="primary" htmlType="submit" block={true}>
                      Register
                    </Button>
                    <Button type="default" htmlType="button" block={true}>
                      <Link to="/">Back</Link>
                    </Button>
                  </Spin>
                </Form.Item>
                <Divider>OR</Divider>
                <Form.Item key="8">
                  <Spin spinning={loading || facebookLoading}>
                    <Button
                      type="primary"
                      htmlType="button"
                      block={true}
                      onClick={handleFacebookClick}
                    >
                      <Icon type="facebook" theme="filled" />
                      Login via Facebook
                    </Button>
                  </Spin>
                </Form.Item>
              </QueueAnim>
            </Form>
          </SignUpCard>
        </div>
      </QueueAnim>
    </PageWrapper>
  );
};

export default SignUpPresenter;
