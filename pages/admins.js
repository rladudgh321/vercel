import React, { useState, useCallback } from 'react';
import { Button, Input, Form, Checkbox } from 'antd';
import AppLayout from '@/components/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '@/reducer/user';

const Admins = () => {
    const dispatch = useDispatch();
    const [infoError, setInfoError] = useState(false);
    const [ids, setterIds] = useState('');
    const onChangeIds = useCallback((e)=>{
        setterIds(e.target.value);
        setInfoError(false);
    },[]);
    const [password, setterPassword] = useState('');
    const onChangePassword = useCallback((e)=>{
        setterPassword(e.target.value);
        setInfoError(false);
    },[]);

    const [termError, setTermError] = useState(false);
    const [term, setTerm] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[]);
    const { me } = useSelector((state) => state.user);
    const onSubmit = useCallback(()=>{
        if(!term) {
            return setTermError(true);
        }
        // if(me?.ids !== ids && me?.password !== password) {
        //     return setInfoError(true);
        // }
        dispatch({
            type:LOG_IN_REQUEST,
            data:{ ids, password }
        })
    },[ids, password, term, dispatch]);
    return (
        <>
            <AppLayout>
                <div style={{ textAlign:'center', marginTop:'30px' }}>
                    <h1>다부 부동산 - 로그인</h1>
                </div>
                <div style={{ textAlign:'center', marginTop: '30px' }}>
                    <Form onFinish={onSubmit}>
                        <div style={{ display: 'flex'}}>
                            <label style={{ width: '10vw'}} >아이디</label>
                            <Input style={{width:'70vw'}} value={ids} onChange={onChangeIds} />
                        </div>
                        <div style={{ display: 'flex', marginTop:'30px'}}>
                            <label style={{ width: '10vw'}}>비밀번호</label>
                            <Input style={{width:'70vw'}} value={password} onChange={onChangePassword}  />
                        </div>
                        <div style={{ display: 'flex', marginTop:'30px'}}>
                            <label style={{ width: '10vw'}}></label>
                            <Checkbox checked={term} onChange={onChangeTerm}>나는 관계인입니다</Checkbox>
                            { termError && <div style={{color:'red'}}>관계인이 아닌 사람이 로그인 할 경우 법적 처벌을 받습니다</div> }
                        </div>

                        <div style={{ display: 'flex', marginTop:'30px'}}>
                            <label style={{ width: '10vw'}}></label>
                            { infoError && <div style={{color:'red'}}>아이디 비밀번호 정보가 다릅니다</div> }
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <Button style={{ width:'80vw'}} type='primary' htmlType='submit' >관리자로 로그인</Button>
                        </div>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
}

export default Admins;