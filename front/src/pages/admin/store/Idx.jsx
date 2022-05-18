import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_request} from '../../../reducers/admin';
import { useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.body`
    display: flex;
    position: fixed;
    z-index: 2000;
    width: 100%;
    height: 100%;
    justify-content: center;
    top: 0px;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
`;

const H1 = styled.h1`
    text-align: center;
`;

const H3 = styled.h3`
    margin-top: 20px;
`;

const Span = styled.span`
    display: inline-block;
    width: 30px;
`;

const Form = styled.form`
    width: 600px;
    height: 600px;
    padding: 40px;
    border-radius: 40px;
    background: white;

    @media (max-width: 600px) {
        width: 96%;
    }
`;

const Input = styled.input`
    width: 162px;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;

const Submit = styled.input`
    margin-right: 20px;
`;

const Back = styled.button`
`;

const BottomDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 26px;
`;

const Edit = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:admin_store_request.toString()})
    },[dispatch])
    //dispatch({type:admin_store_request.toString()})
    const stores = useSelector(state=>state.admin.store)

    return (
        <Background>
            <Form>
                
                    <H1>{stores.name}</H1>
                    <H3>menu</H3>
                    <Input type='textarea' style={{ marginRight: '16px' }} name='menu' />
                    <H3>주소</H3>
                    <Input type='text' style={{ width: '100%' }} name='address'/>
                    <H3>연락처</H3>
                    <Span>02</Span> - <Input type='text' name='call1'/> - <Input type='text' name='call2'/>
                    <H3>SNS 계정</H3>
                    <Input type='text' style={{ width: '100%' }} name='sns' />
                    <BottomDiv>
                        <Submit type='submit' value='수정' />
                        <Back><Link to='/'>뒤로 가기</Link></Back>
                    </BottomDiv>
                
                
            </Form>
        </Background>
    )
};

export default Edit