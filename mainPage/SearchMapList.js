import React from 'react';
import { Row, Col } from 'antd';

const SearchMapList = () => {
    return (
        <>
            <Row>
                <Col xs={24} md={0}>
                    <div style={{ margin:'15px 5px', display:'flex', textAlign:'center' }}>
                        <div style={{ maxHeight:'160px', backgroundImage:'url("/img/map_search.png")', height:'100px', width:'47vw', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver', marginRight:'5px'}}></div>
                        <div style={{ maxHeight:'160px', backgroundImage:'url("/img/list_search.png")', height:'100px', width:'47vw', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver', marginLeft:'5px'}}></div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default SearchMapList;