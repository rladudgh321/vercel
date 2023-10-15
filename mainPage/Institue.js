import React, { useEffect, useMemo, useState } from 'react';
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

const Institue = () => {
    const [width, setWidth] = useState(()=>{
        return globalThis.innerWidth <768 ? 2: 6;
    });
    useEffect(()=>{
        const handleResize = () => {
            setWidth(globalThis.innerWidth < 768 ? 2:6);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
    const getWidth = useMemo(()=>{
        const gw = globalThis.innerWidth <768;
        return gw ? '50vw' : '15vw';
    },[width]);
//     const getHeight = useMemo(()=> {
//         const gh = globalThis.innerWidth<768;
//         return  gh ? '100px' : '10vh';
//     },[width])
    return (
        <>
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
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                
                <SwiperSlide key='institu1'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/1.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu2'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/2.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu3'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/3.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu4'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/4.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu5'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/5.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu6'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/6.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu7'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/7.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu8'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/8.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu9'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/9.jpg")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu10'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/10.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu11'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/11.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide key='institu12'>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/12.png")', height:'70px', width:getWidth, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
            </Swiper>
            </ConfigProvider>
        </>
    );
}

export default Institue;