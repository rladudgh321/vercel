import React from 'react';
import { Row, Col } from 'antd';
const MainPicture = () => {
    return (
        <Row>
            <Col xs={24} md={0}>
                <div style={{ backgroundImage:'url("/img/main.png")', minHeight:'180px', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }}>
                </div>
            </Col>
            <Col md={24} xs={0}>
                <div style={{ backgroundImage:'url("/img/main.png")', minHeight:'550px', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }}>
                </div>
            </Col>
        </Row>
    );
}

export default MainPicture;