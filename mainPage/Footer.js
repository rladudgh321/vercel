import React from 'react';

const Footer = () => {
    return (
        <>
            <div style={{ marginTop:'15px'}}>
                <div style={{ display:'flex',backgroundColor:'#545454', height:'150px', color:'white', fontSize:'0.8rem', padding:'10px', lineHeight:'1.2rem'}}>
                    <div>
                        <img src='/img/logo.png' />
                    </div>
                    <aside>
                        회사명: 다부부동산<br />
                        주소: 경북 칠곡 다부다부<br />
                        대표자: 권오득 &nbsp;&nbsp;&nbsp;&nbsp; 사업자번호:123-45-67890<br />
                        전화:070-1234-5678<br />
                        휴대폰: 010-1234-5678<br />
                        이메일: 다부@naver.com<br />
                        Dabu Company, Inc. All rights reserved.
                    </aside>
                </div>
            </div>
        </>
    );
}

export default Footer;