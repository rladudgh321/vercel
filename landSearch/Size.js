import React, { useState, useCallback } from 'react';
import { Button, InputNumber, Slider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Size = () => {
    const [openModal, setOpenModal] = useState(false);
    const onChangeOpenModel = useCallback(()=>{
        setOpenModal(true);
    },[]);
    const onChangeCloseModel = useCallback(()=>{
        setOpenModal(false);
    },[]);
    const [inputValueLeft, setInputValueLeft] = useState(0);
    const [inputValueRight, setInputValueRight] = useState(10000);

    const onChangeLeft = useCallback((value) => {
        setInputValueLeft(value);
    },[inputValueLeft]);

    const onChangeRight = useCallback((value) => {
        setInputValueRight(value);
    },[inputValueRight]);

    const onSliderChange = useCallback((values) => {
        const [left, right] = values;
        setInputValueLeft(left);
        setInputValueRight(right);
        // console.log({left,right})
    },[]);

    return (
        <>
            <Button onClick={onChangeOpenModel}>
                Size
                <DownOutlined />
                { openModal && <div style={{ padding: '10px', background: 'white', border: '1px solid silver', position:'relative', top:'10px',zIndex:'100' }}>
                    <div style={{ padding: '10px' }}>실면적 검색 <span style={{ fontSize: '0.5rem' }}>단위: m2</span></div>
                    <div>
                        <InputNumber min={0} max={10000} value={inputValueLeft} onChange={onChangeLeft} />
                        ~
                        <InputNumber min={0} max={10000} value={inputValueRight} onChange={onChangeRight} />
                    </div>
                    <div>
                        <Slider
                            min={0}
                            max={10000}
                            range={{
                                draggableTrack: true,
                            }}
                            value={[inputValueLeft, inputValueRight]}
                            onChange={onSliderChange}
                        />
                    </div>
                </div>
                }
            </Button>
                { openModal && <div style={{position:'fixed', top:0, bottom:0, right:0, left:0, height:'100vh', zIndex:'50' }} onClick={onChangeCloseModel}></div>}
        </>
    );
}

export default Size;