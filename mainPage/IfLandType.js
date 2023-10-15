import { Card, Col, Row } from 'antd';
import React from 'react';

const IfLandType = () => {
    return (
        <>
            <div style={{textAlign:'center', margin:'15px'}}>
                <h2>조건별 매물 찾아보기</h2>
                <div>테마를 활용한 조건별 매물을 빠르게 찾아보아요!</div>
            </div>
            <Row gutter={8} style={{ margin:'0 10px' }}>
                <Col xs={12} md={6}>
                    <Card actions={['반려동물']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/pet.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['저보증금 원룸']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/oneroom.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['전세 자금 대출']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/loan.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['복층']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/upper.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['주차가능']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/parkinglot.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['옥탑']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/rooftop.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['역세권']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/train.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} ></div>} />            
                </Col>
                <Col xs={12} md={6}>
                    <Card actions={['신축']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/2/new.png")', height:'115px', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} ></div>} />            
                </Col>
            </Row>
        </>
    );
}

export default IfLandType;