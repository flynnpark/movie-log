import React from 'react';
import { Modal, Menu } from 'antd';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { USER_LOG_OUT } from 'src/SharedQueries.local';

const BorderlessMenu = styled(Menu)`
  border: none;
`;

const Setting = ({ visible, setVisible }) => {
  return (
    <Mutation mutation={USER_LOG_OUT}>
      {userLogOut => (
        <Modal
          visible={visible}
          onCancel={() => setVisible(!visible)}
          title="설정"
          footer={null}
        >
          <BorderlessMenu
            selectable={false}
            onClick={({ key }) => {
              console.log(key);
              if (key === 'logout') {
                userLogOut();
              }
            }}
          >
            <Menu.Item key="logout">로그아웃</Menu.Item>
          </BorderlessMenu>
        </Modal>
      )}
    </Mutation>
  );
};

export default Setting;
