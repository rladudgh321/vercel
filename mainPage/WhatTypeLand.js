import { Col, Row, Card } from 'antd';
import React from 'react';

const WhatTypeLand = () => {
    return (
        <>
            <Row gutter={10} style={{margin: '15px 5px'}}>
                <Col xs={8} md={4}>
                    <Card key='az' actions={['아파트']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/apart.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8} md={4}>
                    <Card key='sx' actions={['신축빌라']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/villa.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8} md={4}>
                    <Card key='dc' actions={['원/투/쓰리룸']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/oneroom.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8} md={4}>
                    <Card key='fv' actions={['사무실']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/office.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8} md={4}>
                    <Card key='gb' actions={['상가']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/store.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8} md={4}>
                    <Card key='hn' actions={['오피스텔']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/officetel.png")', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'115px' }} ></div>} />            
                </Col>
            </Row>
        </>
    );
}

export default WhatTypeLand;