import React from 'react';
import { Button, Dropdown, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const LandType = () => {
    const items = [
        {
          label: '거래유형/금액',
          key: '1',
        },
        {
          label: '분양',
          key: '2',
        },
        {
          label: '매매',
          key: '3',
        },
        {
          label: '전세',
          key: '4',
        },
        {
          label: '월세',
          key: '5',
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
                    거래유형/금액
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default LandType;