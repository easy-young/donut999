import { Link,useParams,Routes, Route  } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_edit_request} from '../../../reducers/admin/admin.js';
import {admin_edit_store_request,admin_edit_store_success} from '../../../reducers/admin/editStore.js';
import { useEffect, useState } from 'react';
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
    background: #FFFCDD;
`;

const H1 = styled.h1`
    text-align: center;
`;

const H3 = styled.h3`
    margin-top: 10px;
`;

const H3R = styled.h3`
    margin-left: 10px;
    display: inline-block;
`;

const Span = styled.span`
    display: inline-block;
    width: 30px;
`;

const Form = styled.form`
    width: 800px;
    height: 750px;
    padding: 20px;
    border-radius: 40px;
    background: white;
    overflow: auto;
    &::-webkit-scrollbar{
        border-radius:100px;
        width:10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 6px solid rgba(0, 0, 0, 0.18);
        border-left: 0;
        border-right: 0;
        background-color: pink;
    }

    @media (max-width: 600px) {
        width: 96%;
    }
`;
const TextArea = styled.textarea`
    width: 100%;
    height: 18%;
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
    width: 39.7%;
    height: 30px;
    border: none;
    border-bottom: 1px solid pink;
    margin-left: 2%;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;


const InputR = styled.input`
    margin-top: 10px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    vertical-align: -4px;

    @media (max-width: 600px) {
        width: 10%;
    }

    @media (max-width: 300px) {
        width: 10%;
    }
`;

const Submit = styled.input`
     width: 10%;
    height: 8%;
    margin-right: 20px;
    padding: 5px 7px;
    background: #EE82EE;
    color:#fff;
    border-color:pink;


    cursor: pointer;
    
`;

const Back = styled.button`
    width:20%;
    height: 8%;
    padding: 5px 7px;
    background: #fff;

    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }

    &>a{
        color:#000;
    }
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


const Edit = (defaultValue) => {

    const dispatch = useDispatch()

    
    let params = useParams()
    let store_id = params.store_id;
    useEffect(()=>{
        dispatch(admin_store_edit_request({payload:store_id}))

    },[dispatch])

    const stores = useSelector(state=>state.admin.store)



    const handleSubmit = (e) => {
        e.preventDefault()
        const {menu_donut, menu_beverage,address,subway,line,tel,openhour,parking,protein,photozone,special,sns,intro} = e.target
        const payload = {
            store_id,
            stationKor:subway.value,
            line:line.value,
            address:address.value,
            parking:parking.value,
            protein:protein.value,
            photo:photozone.value,
            special:special.value,
            operhour:openhour.value,
            website:sns.value,
            menu:menu_donut.value,
            beverage:menu_beverage.value,
            tel:tel.value,
            intro:intro.value,
        }
       
        dispatch(admin_edit_store_request(payload))
        

    }

    return (
        <Background>
            <Form onSubmit={handleSubmit}>
                <H1>{stores[0].name}</H1>
                <H3>Menu-donut</H3>
                <TextArea  defaultValue={stores[0].menu} type='textarea' style={{ marginRight: '16px' }} name='menu_donut'  />
                <H3>Menu-beverage</H3>
                <Input  defaultValue={stores[0].beverage} type='textarea' style={{ marginRight: '16px' }} name='menu_beverage' />
                <H3>주소</H3>
                <Input defaultValue={stores[0].address} type='text' style={{ width: '100%' }} name='address'/>
                <FlexDiv>
                    <div style={{width:'50%',marginTop:'2%'}}>
                        <div style={{display:'flex', width:'100%'}} >
                            <div style={{width:'50%'}} >
                                <H3 style={{display:'inline'}}>지하철</H3>
                                <InputP style={{width:'50%'}}  defaultValue={stores[0].station} type="text" name="subway" />
                            </div>
                            <div style={{width:'50%'}}>
                                <H3 style={{display:'inline'}}>지하철노선</H3>
                                <InputP style={{width:'50%'}}  defaultValue={stores[0].line} type="text" name="line" />
                            </div>
                        </div>
                        <H3>연락처</H3>
                        <Input defaultValue={stores[0].tel} type='text' style={{ width: '100%' }} name='tel'/>
                        <H3>오픈시간</H3>
                        <Input  defaultValue={stores[0].operhour} type="text" name="openhour" />
                
                    </div>
                    <div style={{width:'50%', marginLeft:'5%', marginTop:'1%'}}>
                        
                        <div>
                            <H3R>주차여부</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="parking" value="Y" defaultChecked = {stores[0].parking === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="parking" value="N" defaultChecked = {stores[0].parking !== "Y" } />
                            <H3R>프로틴</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="protein" value="Y" defaultChecked = {stores[0].protein === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="protein" value="N" defaultChecked = {stores[0].protein !== "Y" } />
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <H3R>포토존</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="photozone" value="Y" defaultChecked = {stores[0].photo === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="photozone" value="N" defaultChecked = {stores[0].photo !== "Y" }/>
                            <H3R>이색 도넛</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="special" value="Y" defaultChecked = {stores[0].special === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="special" value="N" defaultChecked = {stores[0].special !== "Y" } />
                        </div>
                        <H3 style={{marginTop:'6%'}}>SNS 계정</H3>
                        <Input  defaultValue={stores[0].website} type='text' style={{ width: '100%' }} name='sns' />
                    </div>
                </FlexDiv>
                
                <H3>소개</H3>
                <TextArea  defaultValue={stores[0].intro} type='textarea' style={{ marginRight: '16px' }} name='intro' />
                
                <BottomDiv>
                    <Submit type='submit' value='수정' />
                    <Back><Link to='/dt/admin/menu/store/setting'>뒤로 가기</Link></Back>
                </BottomDiv>
            </Form >

            
        </Background>

        
    )
};

export default Edit;