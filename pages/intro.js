import AppLayout from '@/components/AppLayout';
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import Map from '../components/Map';
import Image from 'next/image';

const Intro = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    return(
        <>
            <AppLayout>
                <div style={{marginTop:'30px'}}>
                    <div style={{margin:'0 100px 0 100px', backgroundColor:'green', color:'white', height:'30px'}}>회사소개</div>
                    <Card cover={<Image className='img' src='/img/intro.png' fill alt='intro_picture' />} style={{ border:'1px solid green', margin:'0 100px 100px 100px', padding:'10px' }}>
                        <div>
                            <h3>위치</h3>
                            <div style={{display:'flex'}}>
                                {/* { isClient && <Map /> } */}
                                <Map />
                                <div>
                                    <div>다부동 1동 1234</div>
                                    <div>다부 부동산</div>
                                    <div>070-1244-8212</div>
                                    <div>010-1234-5678</div>
                                    <div>dabu@naver.com</div>
                                </div>    
                            </div>
                        </div>
                    </Card>
                </div>
            </AppLayout>
        </>
    );
}

export default Intro;