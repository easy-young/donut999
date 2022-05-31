import { Link,useParams  } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {admin_store_edit_request} from '../../../reducers/admin/adminStoreSet.js';
import {admin_edit_store_request} from '../../../reducers/admin/editStore.js';
import { useEffect } from 'react';
import {Background, Submit, BackBtn, H1, H3, H3R, Form, TextArea, Input, InputP, InputR, BottomDiv,FlexDiv} from '../../../components/styles/AdminStyles'

const Edit = () => {

    const dispatch = useDispatch()

    let params = useParams()
    let store_id = params.store_id;
    useEffect(()=>{
        if (typeof store_id !== 'string') return
        console.log('hello world! :', store_id )
        dispatch(admin_store_edit_request({payload:store_id}))

    },[])

    const [stores] = useSelector(state=>state.adminStoreSet.storeEdit)
    console.log(stores)

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
            {
                stores &&
                <Form onSubmit={handleSubmit}>
                <H1>{stores.name}</H1>
                <H3>Menu-donut</H3>
                <TextArea  defaultValue={stores.menu} type='textarea' style={{ marginRight: '16px' }} name='menu_donut' />
                <H3>Menu-beverage</H3>
                <Input  defaultValue={stores.beverage} type='textarea' style={{ marginRight: '16px' }} name='menu_beverage' />
                <H3>주소</H3>
                <Input defaultValue={stores.address} type='text' style={{ width: '100%' }} name='address'/>
                <FlexDiv>
                    <div style={{width:'50%',marginTop:'2%'}}>
                        <div style={{display:'flex', width:'100%'}} >
                            <div style={{width:'50%'}} >
                                <H3 style={{display:'inline'}}>지하철</H3>
                                <InputP style={{width:'50%'}}  defaultValue={stores.stationKor} type="text" name="subway" />
                            </div>
                            <div style={{width:'50%'}}>
                                <H3 style={{display:'inline'}}>지하철노선</H3>
                                <InputP style={{width:'50%'}}  defaultValue={stores.line} type="text" name="line" />
                            </div>
                        </div>
                        <H3>연락처</H3>
                        <Input defaultValue={stores.tel} type='text' style={{ width: '100%' }} name='tel'/>
                        <H3>오픈시간</H3>
                        <Input  defaultValue={stores.operhour} type="text" name="openhour" />
                
                    </div>
                    <div style={{width:'50%', marginLeft:'5%', marginTop:'1%'}}>
                        
                        <div>
                            <H3R>주차여부</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="parking" value="Y" defaultChecked = {stores.parking === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="parking" value="N" defaultChecked = {stores.parking !== "Y" } />
                            <H3R>프로틴</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="protein" value="Y" defaultChecked = {stores.protein === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="protein" value="N" defaultChecked = {stores.protein !== "Y" } />
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <H3R>포토존</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="photozone" value="Y" defaultChecked = {stores.photo === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="photozone" value="N" defaultChecked = {stores.photo !== "Y" }/>
                            <H3R>이색 도넛</H3R>
                            <span style={{marginLeft:'7px'}}>Y</span>
                            <InputR type="radio" name="special" value="Y" defaultChecked = {stores.special === "Y" } />
                            <span style={{marginLeft:'7px'}}>N</span>
                            <InputR type="radio" name="special" value="N" defaultChecked = {stores.special !== "Y" } />
                        </div>
                        <H3 style={{marginTop:'6%'}}>SNS 계정</H3>
                        <Input  defaultValue={stores.website} type='text' style={{ width: '100%' }} name='sns' />
                    </div>
                </FlexDiv>
                
                <H3>소개</H3>
                <TextArea  defaultValue={stores.intro} type='textarea' style={{ marginRight: '16px' }} name='intro' />
                
                <BottomDiv>
                    <Submit type='submit' value='수정' />
                    <BackBtn><Link to='/dt/admin/menu/store/setting'>뒤로 가기</Link></BackBtn>
                </BottomDiv>
            </Form >
            }
            

            
        </Background>

        
    )
};

export default Edit;