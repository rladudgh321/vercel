import React from 'react';
import { Button, Dropdown, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Room = () => {
    const items = [
        {
          label: '방',
          key: '0',
        },
        {
          label: '방 1개',
          key: '1',
        },
        {
          label: '방 2개',
          key: '2',
        },
        {
          label: '방 3개',
          key: '3',
        },
        {
          label: '방 4개',
          key: '4',
        },
        {
          label: '방 5개',
          key: '5',
        },
        {
          label: '방 6개',
          key: '6',
        },
      ];
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            <Dropdown menu={menuProps}>
                <Button>
                    <Space>
                    방
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default Room;