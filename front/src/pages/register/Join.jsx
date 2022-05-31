import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Background, BottomDiv, BackBtn, Submit } from '../../components/styles/AdminStyles';
import { register_request, register_gohome, register_name, register_email } from '../../reducers/register';
import SFLemon from '../../font/fonts';


const H1 = styled.h1`
    text-align: center;
    text-shadow: 0 0 7px #f3d8ff, 0 0 10px #f3d8ff, 0 0 21px #EE82EE, 0 0 20px #EE82EE,
    0 0 30px #EE82EE, 0 0 20px #EE82EE, 0 0 30px #EE82EE, 0 0 30px #EE82EE;
`;


const Form = styled.form`
    width: 600px;
    height: 600px;
    padding: 40px;
    border-radius: 40px;
    background: #FFF0F5;
    overflow: scroll;

    @media (max-width: 600px) {
        width: 96%;
    }
`;

const Input = styled.input`
    width: 158px;
    height: 30px;
    padding: 4px;
    border: none;
    border-bottom: 1px solid #ff00a2;
    background-color: #FFF0F5;
    color: #6300a5;

    &:focus{
        outline:none
    }
    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
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
    :hover {
        color: red;
    }
`;

const Join = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.register);
    
    const { name, email } = useSelector(state => state.register);
    const onRegister = useCallback((e) => {
        e.preventDefault();
        const { name, menu1, menu2, menu3, address, email, sns } = e.target;
        console.log(e.target)
        if (name.value === '') {
            dispatch(register_name());
            return;
        }
        if (email.value === '') {
            dispatch(register_email());
            return;
        }
        const payload = {
            name: name.value, 
            menu: [menu1.value, menu2.value, menu3.value], 
            address: address.value, 
            email: email.value, 
            sns: sns.value
        };
        dispatch(register_request(payload));
    }, [dispatch]);
    const goMain = () => {
        dispatch(register_gohome());
    };
    return (
        <>
            <Background>
                <Form method='post' onSubmit={onRegister}>
                    <H1 style={{color:'#fff'}}> 
                         스토어 등록 신청 <span>💫</span>
                    </H1>
                    <h3 style={{ marginTop: '20px'}}>🏡 가게명 </h3>
                    <Input type='text' style={{ width: '100%' }} name='name'/>
                    {
                        name &&
                        <span>가게명을 입력해 주세요.</span>
                    }
                    <h3 style={{ marginTop: '20px'}}>🍩 대표 도넛 (최대 3개)</h3>
                    <Input type='text' style={{ marginRight: '16px' }} name='menu1' />
                    <Input type='text' style={{ marginRight: '16px' }} name='menu2' />
                    <Input type='text' name='menu3' />
                    <h3 style={{ marginTop: '20px'}}>📮 주소</h3>
                    <Input type='text' style={{ width: '100%' }} name='address' placeholder='서울 지역만 가능합니다.'/>
                    <h3 style={{ marginTop: '20px'}}>📧 신청자 이메일</h3>
                    <Input type='text' style={{ width: '100%' }} name='email' placeholder='등록 승인 결과를 이메일로 알려드립니다.'/>
                    {
                        email &&
                        <span>이메일을 입력해 주세요.</span>
                    }
                    <h3 style={{ marginTop: '20px'}}>👥 SNS 계정 (선택)</h3>
                    <Input type='text' style={{ width: '100%' }} name='sns' />
                    <BottomDiv>
                        <Submit type='submit' value='신청' />
                        <BackBtn><Link to='/'>뒤로 가기</Link></BackBtn>
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
                        <MainLink to='/' onClick={goMain}>
                            메인으로
                        </MainLink>
                    </SuccessDiv>
                }
            </Background>
            <SFLemon/>
        </>
    )
};

export default Join;