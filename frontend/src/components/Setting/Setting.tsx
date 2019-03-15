import React from 'react';
import { Modal, Menu } from 'antd';
import styled from 'styled-components';

const BorderlessMenu = styled(Menu)`
  border: none;
`;

const Setting = ({ visible, setVisible }) => {
  return (
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
        }}
      >
        <Menu.Item key="logout">로그아웃</Menu.Item>
      </BorderlessMenu>
    </Modal>
  );
};

export default Setting;
