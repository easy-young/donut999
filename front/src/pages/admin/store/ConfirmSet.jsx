import { Link,useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {admin_confirm_set_request} from '../../../reducers/admin/confirmSet.js';
import {admin_confirm_store_request} from '../../../reducers/admin/confirmStore.js';
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


const ConfirmSet = (defaultValue) => {

    const dispatch = useDispatch()
    const [values, setValues] = useState(defaultValue)

    const handleClickRadioButton = (e) => {
        setValues(e.target.value)
    }

    const handleChangeInput = e =>{
        const {name,value}=e.target
        setValues({...values,[name]:value})   
    }
    
    let params = useParams()
    let regi_id = params.register_id;
    console.log('id',regi_id)
    useEffect(()=>{
        dispatch(admin_confirm_set_request({payload:regi_id}))
    },[dispatch])

    const regi = useSelector(state=>state.confirmSet)
    console.log('regi',regi)

    const handleSubmit = (e) => {
        e.preventDefault()
        const {menu_donut, menu_beverage,address,subway,line,tel,openhour,parking,protein,photozone,special,sns,intro} = e.target
        const payload = {
            regi_id,
            name:regi.name,
            station:subway.value,
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
       console.log(payload)
        dispatch(admin_confirm_store_request(payload))
    }

    

    return (
        <Background>
            <Form onSubmit={handleSubmit}>
                <H1>{regi.name}</H1>
                <H3>Menu-donut</H3>
                <TextArea  defaultValue={regi.menu} value={values.menu_donut} type='textarea' style={{ marginRight: '16px' }} name='menu_donut' onChange ={handleChangeInput} />
                <H3>Menu-beverage</H3>
                <Input  value={values.menu_beverage} type='textarea' style={{ marginRight: '16px' }} name='menu_beverage' onChange ={handleChangeInput}/>
                <H3>주소</H3>
                <Input defaultValue={regi.address} type='text' style={{ width: '100%' }} name='address'/>
                <FlexDiv>
                    <div style={{width:'50%',marginTop:'2%'}}>
                        <div style={{display:'flex', width:'100%'}} >
                            <div style={{width:'50%'}} >
                                <H3 style={{display:'inline'}}>지하철</H3>
                                <InputP style={{width:'70%'}}  value={values.station} type="text" name="subway" />
                            </div>
                            <div style={{width:'50%'}}>
                                <H3 style={{display:'inline'}}>지하철노선</H3>
                                <InputP style={{width:'57.5%'}}  value={values.line} type="text" name="line" />
                            </div>
                        </div>
                        <H3>연락처</H3>
                        <Input defaultValue={regi.tel} type='text' style={{ width: '100%' }} name='tel'/>
                        <H3>오픈시간</H3>
                        <Input  value={values.operhour} type="text" name="openhour" />
                
                    </div>
                    <div style={{width:'50%', marginLeft:'5%', marginTop:'1%'}}>
                        
                        <div>
                            <H3R>주차여부</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="parking" value="Y" checked = {regi.parking === "Y" }onChange={handleClickRadioButton} />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="parking" value="N" checked = {regi.parking !== "Y" }onChange={handleClickRadioButton} />
                            <H3R>프로틴</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="protein" value="Y" checked = {regi.parking === "Y" }onChange={handleClickRadioButton} />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="protein" value="N" checked = {regi.parking !== "Y" } onChange={handleClickRadioButton} />
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <H3R>포토존</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="photozone" value="Y" checked = {regi.parking === "Y" }onChange={handleClickRadioButton} />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="photozone" value="N" checked = {regi.parking !== "Y" }onChange={handleClickRadioButton} />
                            <H3R>이색 도넛</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span
                            ><InputR type="radio" name="special" value="Y" checked = {regi.parking === "Y" }onChange={handleClickRadioButton} />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="special" value="N" checked = {regi.parking !== "Y" }onChange={handleClickRadioButton} />
                        </div>
                        <H3 style={{marginTop:'6%'}}>SNS 계정</H3>
                        <Input defaultValue={regi.website}  type='text' style={{ width: '100%' }} name='sns' />
                    </div>
                </FlexDiv>
                
                <H3>소개</H3>
                <TextArea defaultValue={regi.intro} value={values.intro} type='textarea' style={{ marginRight: '16px' }} name='intro' />
                
                <BottomDiv>
                    <Submit type='submit' value='등록' />
                    <Back><Link to='/dt/admin/menu/store/confirm'>뒤로 가기</Link></Back>
                </BottomDiv>
            </Form >

            
        </Background>

        
    )
};

export default ConfirmSet;