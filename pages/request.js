import React, { useState, useCallback, useEffect } from 'react';
import { List, Space, Button, Dropdown, Input, Checkbox, Form } from 'antd';
import AppLayout from '@/components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateEumpmeon, UpdateLi, SetLocations, LAND_REQUEST, Detail } from '@/reducer/location';
import useInput from '@/hooks/useInput';
import { REQUEST_REQUEST } from '@/reducer/request';
import PortfolioContext from '@/context/context';

const Request = () => {
    // const { prefix } = useContext(PortfolioContext);
    const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = useCallback((buttonName) => {
        setSelectedButton(buttonName); // 현재 선택한 버튼으로 업데이트
        console.log(buttonName, selectedButton)
    },[selectedButton]);
    const [selectedBuyTypeButton, setSelectedBuyTypeButton] = useState(null);
    const handleBuyTypeButtonClick = useCallback((buyTypeButtonName) => {
        setSelectedBuyTypeButton(buyTypeButtonName); // 현재 선택한 버튼으로 업데이트
        console.log(buyTypeButtonName);
    },[]);

    //location
    const { chilgok, eumpmeon, eupArray, li } = useSelector((state) => state.location);
    const [ showMore, setShowMore ] = useState(false);
    const onMenuClick = useCallback((e) => {
        chilgok.map((v) => {
            if(v.key === parseInt(e.key, 10)){
                setShowMore(true);
                console.log('click', e, v.label, eumpmeon);
                return dispatch({
                    type: UpdateEumpmeon,
                    data: { eup: v.label, more:v.more },
                })
            }
        });
      },[eumpmeon, chilgok, dispatch]);
      const onVmoreClick = useCallback((e)=>{
        eupArray.map((v) => {
            if(v.key === parseInt(e.key, 10)){
                return dispatch({
                    type: UpdateLi,
                    data: v.label,
                })
            }
        });
      },[eupArray, dispatch]);
      const setLocation = useCallback(()=>{
        return dispatch({
            type:SetLocations
        })
      },[dispatch]);
      const [address, onChangeAddress] = useInput('');

      //PriceHope
    const [price, onChangePrice] = useInput('');

    //LandType
    const [selectedLandTypeButton, setSelectedLandTypeButton] = useState(null);
    const handleLandTypeButtonClick = useCallback((landTypeButtonNumber) => {
        setSelectedLandTypeButton(landTypeButtonNumber); // 현재 선택한 버튼으로 업데이트
        console.log(landTypeButtonNumber)
    },[]);

    //info
    const [name, onName] = useInput('');
    const [title, onTitle] = useInput('');
    const [contact, onContact] = useInput('');
    const [textDetail, onChangeTextDetail] = useInput('');
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[]);
      const onSubmit = useCallback(()=>{
        if(eumpmeon === '읍/면' || li === '리' || !address) {
            return alert('항목을 입력해주세요')
        }
        if(!term) {
            return setTermError(true);
        }
        if(!contact) {
            return alert('연락처는 필수 기입입니다')
        }
        // console.log(`${eumpmeon} ${li} ${address}`);
        // dispatch({
        //     type: LAND_REQUEST,
        //     data: `${eumpmeon} ${li} ${address}`
        // });
        //구해요 팔아요
        console.log({selectedButton, selectedBuyTypeButton, eumpmeon, li, address, price, selectedLandTypeButton, name, title, contact, textDetail, term })
        dispatch({
            type: REQUEST_REQUEST,
            data: { selectedButton, selectedBuyTypeButton, eumpmeon, li, address, price, selectedLandTypeButton, name, title, contact, textDetail }
        })
      },[dispatch,selectedButton, selectedBuyTypeButton, eumpmeon, li, address, price, selectedLandTypeButton, name, title, contact, textDetail, term]);

    return (
        <>
            <AppLayout>
                <Form onFinish={onSubmit}>
                <List
                    bordered
                    header={<>
                    <Button.Group>
                    <Button
                        type={selectedButton === '구해요' ? 'primary' : 'default'}
                        onClick={() => handleButtonClick('구해요')} key='apart'>구해요
                    </Button>
                    <Button
                        type={selectedButton === '팔아요' ? 'primary' : 'default'}
                        onClick={() => handleButtonClick('팔아요')} key='villa'>팔아요
                    </Button>
                    </Button.Group>
                    </>}
                    style={{padding:'10px', margin:'20px 10px 0 10px'}}
                >
                    <Space direction='vertical'>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <div style={{ width: '15vw'}}>거래 종류</div>
                            <Button.Group>
                                <Button
                                    type={selectedBuyTypeButton === '분양' ? 'primary' : 'default'}
                                    onClick={() => handleBuyTypeButtonClick('분양')}
                                >분양</Button>
                                <Button
                                    type={selectedBuyTypeButton === '매매' ? 'primary' : 'default'}
                                    onClick={() => handleBuyTypeButtonClick('매매')}
                                >매매</Button>
                                <Button
                                    type={selectedBuyTypeButton === '전세' ? 'primary' : 'default'}
                                    onClick={() => handleBuyTypeButtonClick('전세')}
                                >전세</Button>
                                <Button
                                    type={selectedBuyTypeButton === '월세' ? 'primary' : 'default'}
                                    onClick={() => handleBuyTypeButtonClick('월세')}
                                >월세</Button>
                            </Button.Group>
                        </List.Item>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <div style={{ width: '15vw'}}>위치</div>
                            <div style={{ display:'flex' }}>
                                <div><Button onClick={setLocation}>경북 칠곡군</Button></div>
                                <div>
                                    <Dropdown.Button
                                        menu={{
                                            items:chilgok,
                                            onClick: onMenuClick,
                                        }}
                                        >
                                        <span>{eumpmeon}</span>
                                    </Dropdown.Button>
                                </div>
                                <div>
                                    { showMore && <Dropdown.Button
                                        menu={{
                                            items:eupArray,
                                            onClick: onVmoreClick,
                                        }}
                                        >
                                        <span>{li}</span>
                                    </Dropdown.Button>}
                                </div>
                                <div>
                                    <Input value={address} onChange={onChangeAddress} placeholder='상세주소' />
                                </div>
                            </div>
                        </List.Item>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <div style={{ width: '15vw'}}>희망금액</div>
                            <div>
                                <Input placeholder='미입력시 협의' value={price} onChange={onChangePrice} />
                            </div>
                        </List.Item>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <div style={{ width: '15vw'}}>거래 종류</div>
                            <Button.Group key='btn_group'>
                                <Button
                                    type={selectedLandTypeButton === '아파트' ? 'primary' : 'default'}
                                    onClick={() => handleLandTypeButtonClick('아파트')} key='apart'>아파트</Button>
                                <Button
                                    type={selectedLandTypeButton === '신축빌라' ? 'primary' : 'default'}
                                    onClick={() => handleLandTypeButtonClick('신축빌라')} key='villa'>신축빌라</Button>
                                <Button
                                    type={selectedLandTypeButton === '원/투/쓰리룸' ? 'primary' : 'default'}
                                    onClick={() => handleLandTypeButtonClick('원/투/쓰리룸')} key='oneroom'>원/투/쓰리룸</Button>
                                <Button
                                    type={selectedLandTypeButton === '사무실' ? 'primary' : 'default'}
                                    onClick={() => handleLandTypeButtonClick('사무실')} key='office'>사무실</Button>
                                <Button
                                    type={selectedLandTypeButton === '상가' ? 'primary' : 'default'}
                                    onClick={() => handleLandTypeButtonClick('상가')} key='store'>상가</Button>
                                <Button
                                    type={selectedLandTypeButton === '오피스텔' ? 'primary' : 'default'}
                                    onClick={() => handleLandTypeButtonClick('오피스텔')} key='officetel'>오피스텔</Button>
                            </Button.Group>
                        </List.Item>
                        <List.Item style={{ borderBlockEnd:'none' }}>
                            <div style={{ display: 'flex'}}>
                                <div style={{width:'15vw'}}>이름</div>
                                <Input style={{ width:'40vw'}} placeholder='이름' value={name} onChange={onName} />
                            </div>
                        </List.Item>
                        <List.Item style={{ borderBlockEnd:'none' }}>
                            <div style={{ display: 'flex'}}>
                                <div style={{width:'15vw'}}>제목</div>
                                <Input style={{ width:'70vw'}} placeholder='제목' value={title} onChange={onTitle} />
                            </div>
                        </List.Item>
                            <List.Item style={{ borderBlockEnd:'none' }}>
                                <div style={{ display: 'flex'}}>
                                    <div style={{width:'15vw'}}>연락처</div>
                                    <Input style={{ width:'40vw'}} placeholder='연락처' value={contact} onChange={onContact} />
                                </div>
                            </List.Item>
                            <List.Item style={{ borderBlockEnd:'none' }}>
                                <div style={{ display: 'flex'}}>
                                    <div style={{width:'15vw'}}>상세내용</div>
                                    <Input.TextArea style={{ width:'70vw', height:'30vh'}} value={textDetail} onChange={onChangeTextDetail} />
                                </div>
                            </List.Item>
                            <List.Item style={{ borderBlockEnd:'none' }}>
                                <div>
                                    <h2>개인정보 수집 안내</h2>
                                    <aside style={{ height:'20vh', overflowY: 'scroll', border: '1px solid silver', padding:'10px', borderRadius:'10px'}}>
                                    개인정보의 수집 및 이용 동의<br /><br />
                                    본사는 서비스 제공을 위해서 아래와 같이 개인정보를 수집합니다. 정보주체는 본 개인정보의 수집 및 이용에 관한 동의를 거부하실 권리가 있으나, 서비스 제공에 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.
                                    <br /><br />
                                    • 수집하려는 개인 정보 항목: 휴대폰 번호<br />
                                    • 개인정보의 수집 목적: 문의신청<br />
                                    • 개인정보의 보유기간: 사용 후 바로 삭제<br />
                                    <br />
                                    개인정보 제3자 제공 동의
                                    <br />
                                    본사는 서비스 제공을 위해서 아래와 같이 개 인정보를 수집합니다. 정보주체는 본 개인 정보의 수집 및 이용에 관한 동의를 거부하실 권리가 있으나, 서비 스 제공에 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.
                                    <br /><br />
                                    • 개인정보를 제공받는 자 : 본사 중개사무소<br />
                                    • 개인정보를 제공받는 자의 개인정보 이용 목적 : 매물중개목적<br />
                                    • 제공하는 개인정보의 항목 : 휴대폰 번호<br />
                                    • 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 5년<br />
                                    • 동의 거부권 및 불이익 : 해당 내용에 동의하지 않을 시, 매물 중개 의뢰가 불가능합니다.<br />
                                    </aside>
                                </div>
                            </List.Item>
                            <List.Item style={{borderBlockEnd : 'none'}} >
                                <Checkbox style={{margin:'0 auto'}} checked={term} onChange={onChangeTerm} >동의합니다</Checkbox>
                            </List.Item>
                                { termError && <div style={{color:'red', textAlign:'center'}}>동의하셔야 진행하실 수 있습니다</div> }
                            <List.Item style={{borderBlockEnd : 'none'}}>
                                <Button style={{margin:'0 auto', width:'40vw', background:'#ddd'}} htmlType='submit'>저장</Button>
                            </List.Item>
                    </Space>
                </List>
                </Form>
            </AppLayout>
        </>
    );
}

export default Request;