import React from 'react';
import { Button, Dropdown, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const RestRoom = () => {
    const items = [
        {
          label: '화장실',
          key: '0',
        },
        {
          label: '화장실 1개',
          key: '1',
        },
        {
          label: '화장실 2개',
          key: '2',
        },
        {
          label: '화장실 3개',
          key: '3',
        },
        {
          label: '화장실 4개',
          key: '4',
        },
        {
          label: '화장실 5개',
          key: '5',
        },
        {
          label: '화장실 6개',
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
                    화장실
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default RestRoom;