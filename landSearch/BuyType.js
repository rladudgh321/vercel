import React from 'react';
import { Button, Dropdown, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const BuyType = () => {
    const items = [
        {
          label: '매물 종류',
          key: '0',
        },
        {
          label: '아파트',
          key: '1',
        },
        {
          label: '신축빌라',
          key: '2',
        },
        {
          label: '원/투/쓰리룸',
          key: '3',
        },
        {
          label: '사무실',
          key: '4',
        },
        {
          label: '상가',
          key: '5',
        },
        {
          label: '오피스텔',
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
                    매물 종류
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default BuyType;