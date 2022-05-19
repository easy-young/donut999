import { Link,useParams,Routes, Route  } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_edit_request} from '../../../reducers/admin/adminStore.js';
import { useEffect } from 'react';
import styled from 'styled-components';

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
    margin-top: 10px;
`;

const H3R = styled.h3`
    margin-top: 10px;
    display: inline-block;
`;

const Span = styled.span`
    display: inline-block;
    width: 30px;
`;

const Form = styled.form`
    width: 800px;
    height: 700px;
    padding: 40px;
    border-radius: 40px;
    background: white;

    @media (max-width: 600px) {
        width: 96%;
    }
`;
const TextArea = styled.textarea`
    width: 100%;
    height: 25%;
    border: none;
    border: 1px solid pink;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid pink;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;

const InputP = styled.input`
    width: 40%;
    height: 30px;
    border: none;
    border-bottom: 1px solid pink;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;

const InputR = styled.input`
    width: 20px;
    height: 30px;
    border: none;
    border-bottom: 1px solid pink;

    @media (max-width: 600px) {
        width: 10%;
    }

    @media (max-width: 300px) {
        width: 10%;
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

const FlexDiv = styled.div`
    display: flex;
    width:100%;

`


const Edit = () => {

    const dispatch = useDispatch()
    
    let params = useParams()
    let store_id = params.store_id;
    useEffect(()=>{
        dispatch(admin_store_edit_request({payload:store_id}))

    },[dispatch])

    const stores = useSelector(state=>state.adminStore)


    return (
        <Background>
            <Form>
                <H1>{stores.name}</H1>
                <H3>menu-donut</H3>
                <TextArea value={stores.menu} type='textarea' style={{ marginRight: '16px' }} name='menu-donut' />
                <H3>menu-beverage</H3>
                <Input value={stores.beverage} type='textarea' style={{ marginRight: '16px' }} name='menu-beverage' />
                <H3>주소</H3>
                <Input value={stores.address} type='text' style={{ width: '100%' }} name='address'/>
                <FlexDiv>
                    <div style={{width:'50%'}}>
                        <H3 style={{display:'inline'}}>지하철</H3>
                        <InputP value={stores.station} type="text" name="subway" />
                        <H3>연락처</H3>
                        <Span>02</Span> - <InputP type='text' name='call1'/> - <InputP type='text' name='call2'/>
                        <H3>오픈시간</H3>
                        <Input value={stores.operhour} type="text" name="openhour" />
                
                    </div>
                    <div style={{width:'50%', marginLeft:'5%'}}>
                        <H3 style={{display:'inline'}}>지하철노선</H3>
                        <InputP value={stores.line} type="text" name="subway" />
                        <div>
                            <H3R>주차여부</H3R>
                            Y<InputR type="radio" name="parking" value="Y" />
                            N<InputR type="radio" name="parking" value="N" />
                            <H3R>프로틴</H3R>
                            Y<InputR type="radio" name="protein" value="Y" />
                            N<InputR type="radio" name="protein" value="N" />
                        </div>
                        <div>
                            <H3R>포토존</H3R>
                            Y<InputR type="radio" name="photozone" value="Y" />
                            N<InputR type="radio" name="photozone" value="N" />
                            <H3R>이색 도넛</H3R>
                            Y<InputR type="radio" name="special" value="Y" />
                            N<InputR type="radio" name="special" value="N" />
                        </div>
                        <H3>SNS 계정</H3>
                        <Input value={stores.website} type='text' style={{ width: '100%' }} name='sns' />
                    </div>
                </FlexDiv>
                
                <H3>소개</H3>
                <TextArea value={stores.intro} type='textarea' style={{ marginRight: '16px' }} name='intro' />
                
                <BottomDiv>
                    <Submit type='submit' value='수정' />
                    <Back><Link to='/'>뒤로 가기</Link></Back>
                </BottomDiv>
            </Form>

            
        </Background>

        
    )
};

export default Edit