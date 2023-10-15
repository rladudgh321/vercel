import React from 'react';
import { Input, Row, Col, Button, Dropdown, Space, message } from 'antd';
import LandType from './LandType';
import BuyType from './BuyType';
import Theme from './Theme';
import Room from './Room';
import RestRoom from './RestRoom';
import Size from './Size';
import {ReloadOutlined, CompassOutlined, UnorderedListOutlined} from '@ant-design/icons';

const IfToolbar = () => {
    return (
        <>
            <Row style={{ background:'#ddd', height:'120px', padding:'10px' }}>
                <Col md={20}>
                    <Input.Search enterButton style={{minWidth:'200px',width:'20vw'}} placeholder='관심지역 입력' />
                    <LandType />
                    <BuyType />
                    <Theme />
                    <Room />
                    <RestRoom />
                    <Size />
                    <Button>
                        <ReloadOutlined />
                            Reset
                    </Button>
                </Col>
                <Col md={4}>
                    <Button.Group>
                        <Button><CompassOutlined /> 지도</Button>
                        <Button><UnorderedListOutlined /> 목록</Button>
                    </Button.Group>
                </Col>
            </Row>
        </>
    );
}

export default IfToolbar;

/*
InterestLocal 관심지역
landType
buyType
theme
room
restroom
size
reset


*/