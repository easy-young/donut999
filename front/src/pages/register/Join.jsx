import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { register_request } from '../../reducers/register';

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

const Join = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.store);
    const onRegister = useCallback((e) => {
        e.preventDefault();
        const { name, menu1, menu2, menu3, address, call1, call2, sns } = e.target;
        const payload = {
            name: name.value, 
            menu: [menu1.value, menu2.value, menu3.value], 
            address: address.value, 
            call: [call1.value, call2.value], 
            sns: sns.value
        };
        dispatch(register_request(payload));
    }, [dispatch]);
    return (
        <Background>
            <Form method='post' onSubmit={onRegister}>
                <H1>맛집 등록 신청</H1>
                <H3>가게명</H3>
                <Input type='text' style={{ width: '100%' }} name='name' />
                <H3>대표 도넛 (최대 3개)</H3>
                <Input type='text' style={{ marginRight: '16px' }} name='menu1' />
                <Input type='text' style={{ marginRight: '16px' }} name='menu2' />
                <Input type='text' name='menu3' />
                <H3>주소</H3>
                <Input type='text' style={{ width: '100%' }} name='address' placeholder='서울 지역만 가능합니다.'/>
                <H3>연락처</H3>
                <Span>02</Span> - <Input type='text' name='call1'/> - <Input type='text' name='call2'/>
                <H3>SNS 계정 (선택)</H3>
                <Input type='text' style={{ width: '100%' }} name='sns' />
                <BottomDiv>
                    <Submit type='submit' value='신청' />
                    <Back><Link to='/'>뒤로 가기</Link></Back>
                </BottomDiv>
            </Form>
        </Background>
    )
};

export default Join;