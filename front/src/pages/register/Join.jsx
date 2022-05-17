import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.body`
    display: flex;
    position: fixed;
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
    return (
        <Background>
            <Form>
                <H1>맛집 등록 신청</H1>
                <H3>가게명</H3>
                <Input type='text' style={{ width: '100%' }} />
                <H3>대표 도넛 (최대 3개)</H3>
                <Input type='text' style={{ marginRight: '16px' }} />
                <Input type='text' style={{ marginRight: '16px' }} />
                <Input type='text' />
                <H3>주소</H3>
                <Input type='text' style={{ width: '100%' }} placeholder='서울 지역만 가능합니다.'/>
                <H3>연락처</H3>
                <Span>02</Span> - <Input type='text' /> - <Input type='text' />
                <H3>SNS 계정 (선택)</H3>
                <Input type='text' style={{ width: '100%' }}/>
                <BottomDiv>
                    <Submit type='submit' value='신청' />
                    <Back><Link to='/'>뒤로 가기</Link></Back>
                </BottomDiv>
            </Form>
        </Background>
    )
};

export default Join;