import React from 'react';
import { Button, Dropdown, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Theme = () => {
    const items = [
        {
          label: '테마',
          key: '0',
        },
        {
          label: '반려동물',
          key: '1',
        },
        {
          label: '저보증금 원룸',
          key: '2',
        },
        {
          label: '전세 자금 대출',
          key: '3',
        },
        {
          label: '복층',
          key: '4',
        },
        {
          label: '주차가능',
          key: '5',
        },
        {
          label: '옥탑',
          key: '6',
        },
        {
          label: '역세권',
          key: '7',
        },
        {
          label: '신축',
          key: '8',
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
                    테마
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default Theme;