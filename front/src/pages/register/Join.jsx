import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { register_failure, register_request } from '../../reducers/register';
import SFLemon from '../../font/fonts';
const Background = styled.div`
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
    background: #fdd;

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

const SuccessDiv = styled.div`
    display: flex;
    position: absolute;
    width: 360px;
    height: 240px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    text-align: center;
    z-index: 3000;
    background: #ffcbcb;
    
    @media (max-width: 400px) {
        width: 94%;
    }
`;

const Div = styled.div`
    margin: 30px;

    @media (max-width: 400px) {
        margin: 10px;
    }
`;

const MainLink = styled(Link)`
    width: 80px;
    height: 30px;
    line-height: 30px;
    color: black;
    background-color: #ff9ec1;
    border-radius: 10px;
`;

const Join = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.register);
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
        <>
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
                {
                    store.result && 
                    <SuccessDiv>
                        <Div style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            신청이 완료되었습니다.
                        </Div>
                        <Div>
                            승인 절차는 최대 7일 정도 소요될 수 있습니다.
                        </Div>
                        <MainLink to='/'>메인으로</MainLink>
                    </SuccessDiv>
                }
            </Background>
            <SFLemon/>
        </>
    )
};

export default Join;