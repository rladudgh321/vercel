import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, ConfigProvider } from 'antd'; 
import { CheckCircleOutlined, InsertRowRightOutlined, SmileOutlined } from '@ant-design/icons';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const QuickSale = () => {
    const [width, setWidth] = useState(()=>{
        return globalThis.innerWidth <768 ? 4: 6;
    });
    useEffect(()=>{
        const handleResize = () => {
            setWidth(globalThis.innerWidth < 768 ? 4:6);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
    return (
        <>
            <div style={{textAlign:'center', margin:'20px'}}>
                <h2>급매물</h2>
                <div>급매 매물 모음입니다</div>
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize:10
                    },
                }}
                >
            <Swiper
                // install Swiper modules
                style={{margin:'10px'}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={width}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide key='quick1' >
                    <Card actions={[
                    <div key='1st1'><CheckCircleOutlined /><br />아파트<br /> </div>,
                    <div key='2ed1'><InsertRowRightOutlined /><br />15층</div>,
                    <div key='3rd1'><SmileOutlined /><br />방2,화1</div>
                    ]}
                    cover={<div style={{backgroundImage:'url("/img/3/1.png")', height:'150px'}}></div>}
                    >
                        <Card.Meta title='보1억2천  월50만' description='대전 동구 가양동 대주빌아파트' />
                    </Card>
                </SwiperSlide>
                <SwiperSlide key='quick2'>
                    <Card  actions={[
                    <div key='1st2'><CheckCircleOutlined /><br />빌라<br /> </div>,
                    <div key='2ed2'><InsertRowRightOutlined /><br />3층</div>,
                    <div key='3rd2'><SmileOutlined /><br />방3,화2</div>
                    ]}
                    cover={<div style={{backgroundImage:'url("/img/3/2.png")', height:'150px'}}></div>}
                    >
                        <Card.Meta title='보5억2천  월240만' description='대구 북구 동천동 태양하이츠' />
                    </Card>
                </SwiperSlide>
                <SwiperSlide key='quick3'>
                    <Card  actions={[
                    <div key='1st3'><CheckCircleOutlined /><br />오피스텔<br /> </div>,
                    <div key='2ed3'><InsertRowRightOutlined /><br />6층</div>,
                    <div key='3rd3'><SmileOutlined /><br />방3,화1</div>
                    ]}
                    cover={<div style={{backgroundImage:'url("/img/3/3.png")', height:'150px'}}></div>}
                    >
                        <Card.Meta title='매42억  융20억' description='경북 칠곡 황학리 다부오피스텔' />
                    </Card>
                </SwiperSlide>
                <SwiperSlide key='quick4'>
                    <Card  actions={[
                    <div key='1st4'><CheckCircleOutlined /><br />원룸<br /> </div>,
                    <div key='2ed4'><InsertRowRightOutlined /><br />2층</div>,
                    <div key='3rd4'><SmileOutlined /><br />방1,화1</div>
                    ]}
                    cover={<div style={{backgroundImage:'url("/img/3/4.png")', height:'150px'}}></div>}
                    >
                        <Card.Meta title='보 5천  월20만' description='대전 유성구 구암동 콩이네' />
                    </Card>
                </SwiperSlide>
                <SwiperSlide key='quick5'>
                    <Card  actions={[
                    <div key='1st5'><CheckCircleOutlined /><br />투룸<br /> </div>,
                    <div key='2ed5'><InsertRowRightOutlined /><br />2층</div>,
                    <div key='3rd5'><SmileOutlined /><br />방2,화1</div>
                    ]}
                    cover={<div style={{backgroundImage:'url("/img/3/2.png")', height:'150px'}}></div>}
                    >
                        <Card.Meta title='보3억2천  월40만' description='대전 서구 둔산동 갤러리아' />
                    </Card>
                </SwiperSlide>
                <SwiperSlide key='quick6'>
                    <Card actions={[
                    <div key='1st6'><CheckCircleOutlined /><br />역세권<br /> </div>,
                    <div key='2ed6'><InsertRowRightOutlined /><br />2층</div>,
                    <div key='3rd6'><SmileOutlined /><br />방1,화1</div>
                    ]}
                    cover={<div style={{backgroundImage:'url("/img/3/3.png")', height:'150px'}}></div>}
                    >
                        <Card.Meta title='보1천  월70억' description='서울 강남 대치동 지유는 여기 안보냄' />
                    </Card>
                </SwiperSlide>
            </Swiper>
            </ConfigProvider>
        </>
    );
}

export default QuickSale;