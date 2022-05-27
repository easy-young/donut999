import { Link } from "react-router-dom";
import styled from "styled-components";
//import Store, { store } from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { review_request, review_delete_request,
review_update_start, review_update_proceed, review_update_request } from "../reducers/review.js";
//import { review_flavor, review_atmosphere, review_cheap, review_service } from '.././reducers/writeReview.js'
import { BrowserView, MobileView,isMobile } from "react-device-detect";
import { useNavigate } from 'react-router-dom';
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

const Container = styled.div`
    width: 70%;
    height: 95%;
    background-color: #FFFFE9;
    border-radius: 30px;
    @media (max-width: 600px) {
            /* width: 340px; */
            width:100%;
            height:100%;
            /* height: 200px; */
            border-radius:0px;
        }

    .mypage{
        width:95%;
        height:90%;
        margin: 0 auto;
    }

    .close{
        display:block;
        width:30px;
        height:30px;
        text-align:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        font-size:20px;
        margin-top:20px;}

    .mypage_box{
        width:90%;
        height:90%;
        margin: 0 auto;
        /* background:yellow; */
    }
    .welcome{
        text-align:center;

        @media (max-width: 600px){
            font-size:20px;
        }
    }
    .email,.review{
        margin-top:40px;
    }

    .email{
        @media (max-width: 600px){
            font-size:12px;
            margin-top:10px;
            text-align:center;
        }
    }
    *{
        list-style:none;
    }
    .review_list{
        width:100%;
        height:60%;
        background:#FFFFFA;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
        overflow:scroll;
        position:relative;
        @media (max-width: 600px){
            /* height:80%; */
            height:80%;
        }

    }

`

const ReviewOne = styled.ul`
    width:95%;
    /* background:red; */
    min-height:80%;
    height:auto;
    margin: 0 auto;
    margin-top:10px;
    border-top: 1px solid grey;
    border-bottom : 1px solid grey;
    @media (max-width: 600px){
            min-height:80%;
            height:auto;
    }
    /* 여기가 문제임 자식 div가 늘어나도 크기가 증가하지 않음. */
    .close2{
        width:4%;
        height:100%;
        display:block;
        text-align:center;
        font-size:20px;
        /* align-items:flex-start; */

    }
    .review_box{
        /* background:purple; */
        width:100%;
        height:30%;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        @media (max-width: 600px){
            align-items:center;
            font-size:20px;
            flex-wrap:wrap;
            min-height:40px;
            height:auto;
            border-bottom: 1px solid #efefef;

        }


    }
   


    .star_box{
        width:24%;
        height:30px;
        margin-bottom:10px;
        border-bottom: 0.5px solid #DCDCDC;
        @media (max-width: 600px){
            font-size:14px;
            width:50%;
            height:10%;
            border:none;
        }
    }

    .evaluate{
        width:100%;
        min-height:45%;
        height:auto;
        @media (max-width: 600px){
            min-height:60%;
            height:auto;

        }
    }

    
    .button_box{
        width:100%;
        min-height:20%;
        height:auto;
        display:flex;
        justify-content:space-between;
    }

    .update_button, .delete_button{
        width:70px;
        height:20px;
        margin-right:5px;
        margin-bottom:10px;
        font-size:14px;
        line-height:7px;
        background: none;
        border: 1.5px solid;
        color:#FFD5A9;
        letter-spacing: inherit;
        border-bottom: 3px solid ;
        border-right: 3px solid ;
        text-transform: inherit;
        cursor:pointer;
        @media (max-width: 600px){

        }

    }


`

const StarForm = styled.form`
    // border : 2px solid #000;
`

const MyFieldSet = styled.fieldset`
    display:inline-block;
    direction: rtl;
    border : 0;
`
const Radioinput = styled.input`
    display:none;

    :checked ~ label {
        text-shadow: 0 0 0 #fff36c;
    }
`

const Starlabel = styled.label`
    font-size:1.25em;
    color:transparent;
    text-shadow: 0 0 0 #f0f0f0;

    :hover {
        text-shadow: 0 0 0 #fff36c;
    }

    :hover ~ label {
        text-shadow: 0 0 0 #fff36c;
    }
`

// 

const Starul = styled.ul`
    list-style : none;
    border : 1px solid black;
    padding: 0 auto;
`

const Starli = styled.li`
    display: inline-block;
`

const Textli = styled.li`
    width: 500px;
    height: 200px;
    border : 1px solid black;
`

const StarSpan = styled.span`
    font-size: 1rem;
    @media (max-width: 600px){
            font-size:12px;

    }
    
`

const NoLogin = styled.div`

    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .please_kakao{
        display:block;
        width:100%;
        height:10%;
        text-align:center;
        font-size:20px;
    }

    .go_kakao{
        display:block;
        width:15%;
        height:100%;
        text-align:center;
        @media (max-width: 600px){
            width:35%;
        }
    }

    .goback_box{
        width:100%;
        height:10%;
        display:flex;
        justify-content:center;
    }

    .back_btn{
        width:15%;
        height:100%;
        cursor: pointer;
        text-align:center;
        @media (max-width: 600px){
            width:35%;
        }
    }

    .back_btn:hover{
        color:#1890ff;
        transition: all 1s;
    }
`

const Mypage = () => {
    const stores = useSelector(state => state)
    const dispatch = useDispatch()

    const body = { email : stores.user.me.email }

    const deleteHandler = (k) => {
        dispatch({type :review_delete_request.toString(), payload: {idx:k} })
    }

    const getReview = () => {
        dispatch({ type:review_request.toString(), payload:{ email: body.email } })
    }

    const setDefault = (k) => {
        for (let i = 0; i<stores.review.data.length; i++) {
            if( stores.review.data[i].idx === k ) {
                const originalFlavor = 'flavor' + (6-stores.review.data[i].flavor)
                
                const defaultFlavor = document.querySelector(`#`+originalFlavor)
                defaultFlavor.setAttribute('checked', 'checked')

                const originalCheap = 'cheap' + (6-stores.review.data[i].cheap)
                const defaultCheap = document.querySelector(`#`+originalCheap)
                defaultCheap.setAttribute('checked', 'checked')

                const originalService = 'service' + (6-stores.review.data[i].service)
                const defaultService = document.querySelector(`#`+originalService)
                defaultService.setAttribute('checked', 'checked')

                const originalAtmopshere = 'atmosphere' + (6-stores.review.data[i].atmosphere)
                const defaultAtmosphere = document.querySelector(`#`+originalAtmopshere)
                defaultAtmosphere.setAttribute('checked', 'checked')
            }
        }
    }

    const updateBoot = async (k) => {
        await dispatch({type: review_update_start.toString(), payload : { upidx : k } })
        await setDefault(k)
    }

    const changeHandler = (e) => {
        // console.log(e.target.value)
        dispatch({type: review_update_proceed.toString(), payload: e.target.value } )
    }

    const submitHandler = (k) => (e) => {
        e.preventDefault()
        const updateText = document.querySelector('#updateText')
        dispatch({type: review_update_request.toString(), payload : {text: updateText.value, idx: k, flavor: e.target.flavor.value,
        service: e.target.service.value, atmosphere: e.target.atmosphere.value, cheap: e.target.cheap.value }})
    }

    const reviewList = stores.review.data.map((v)=> {
        return (
            stores.review.update !== v.idx ?
                <ReviewOne key={v.idx}>
                    <div class="review_box">
                        <li><Link to={'/shop/'+ v.sidx}> {v.storename}</Link></li>
                        <li class="star_box"> 맛 : {

                            v.flavor === 1 ? <StarSpan>⭐</StarSpan> : v.flavor === 2 ? <StarSpan>⭐⭐</StarSpan> 
                            : v.flavor === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                            : v.flavor === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.flavor === 5 ? <StarSpan>⭐⭐⭐⭐⭐ </StarSpan> : '평가 정보 없음'
                            }
                        </li>
                        <li class="star_box"> 분위기 : {
                            v.atmosphere === 1 ? <StarSpan>⭐</StarSpan> : v.atmosphere === 2 ? <StarSpan>⭐⭐</StarSpan> 
                            : v.atmosphere === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                            : v.atmosphere === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.atmosphere === 5 ? <StarSpan>⭐⭐⭐⭐⭐</StarSpan> : '평가 정보 없음'
                            }
                        </li>
                        <li class="star_box"> 가격 : {
                            v.cheap === 1 ? <StarSpan>⭐</StarSpan> : v.cheap === 2 ? <StarSpan>⭐⭐</StarSpan> 
                            : v.cheap === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                            : v.cheap === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.cheap === 5 ? <StarSpan>⭐⭐⭐⭐⭐</StarSpan> : '평가 정보 없음'
                        }
                        </li>
                        <li class="star_box"> 서비스 : {
                            v.service === 1 ? <StarSpan>⭐</StarSpan> : v.service === 2 ? <StarSpan>⭐⭐</StarSpan> 
                            : v.service === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                            : v.service === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.service === 5 ? <StarSpan>⭐⭐⭐⭐⭐</StarSpan> : '평가 정보 없음'
                            }
                        </li>
                        {(isMobile==false)&&<span onClick={() => deleteHandler(v.idx)} class="close2"> x </span>}
                        
                    </div>
                    <div class="evaluate"> 총평 : {v.text === null ? '평가 정보 없음' : v.text}</div>
                    <div class="button_box">
                        <button class="update_button"onClick={() => updateBoot(v.idx)}> 수정하기 </button>
                        {(isMobile)&&<button class="delete_button" onClick={() => deleteHandler(v.idx)}> 삭제하기 </button>}
                    </div>
                    
                </ReviewOne>
            :
            <StarForm onSubmit = {submitHandler(v.idx)}>
                <ul>
                    <li>
                        <span>맛</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='flavor1' name='flavor'/>
                            <Starlabel for='flavor1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='flavor2' name='flavor'/>
                            <Starlabel for='flavor2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='flavor3' name='flavor'/>
                            <Starlabel for='flavor3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='flavor4' name='flavor'/>
                            <Starlabel for='flavor4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='flavor5' name='flavor'/>
                            <Starlabel for='flavor5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>분위기</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='atmosphere1' name='atmosphere'/>
                            <Starlabel for='atmosphere1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='atmosphere2' name='atmosphere'/>
                            <Starlabel for='atmosphere2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='atmosphere3' name='atmosphere'/>
                            <Starlabel for='atmosphere3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='atmosphere4' name='atmosphere'/>
                            <Starlabel for='atmosphere4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='atmosphere5' name='atmosphere'/>
                            <Starlabel for='atmosphere5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>가격</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='cheap1' name='cheap'/>
                            <Starlabel for='cheap1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='cheap2' name='cheap'/>
                            <Starlabel for='cheap2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='cheap3' name='cheap'/>
                            <Starlabel for='cheap3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='cheap4' name='cheap'/>
                            <Starlabel for='cheap4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='cheap5' name='cheap'/>
                            <Starlabel for='cheap5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>서비스</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='service1' name='service'/>
                            <Starlabel for='service1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='service2' name='service'/>
                            <Starlabel for='service2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='service3' name='service'/>
                            <Starlabel for='service3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='service4' name='service'/>
                            <Starlabel for='service4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='service5' name='service'/>
                            <Starlabel for='service5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                </ul>

                <input type='text' onChange= {changeHandler} id='updateText' defaultValue={v.text} />
                <input type='submit'/>
            </StarForm>
        )
    })

    useEffect(() => {  
        getReview()
    },[dispatch])

    let history = useNavigate()
    

    return (
        
        <Background>
            <Container>
                { stores.user.me.email !== null
                ?
                <div class="mypage">
                    <a onClick={()=>{history(-1)}} class="close">x</a>
                    <div class="mypage_box">
                        <h1 class="welcome"> 🍩 {decodeURI(stores.user.me.nickname)} 님! 환영합니다! 🍩 </h1>
                        <h2 class="email"> 📧 내 이메일(ID): {stores.user.me.email} </h2>
                        <h2 class="review"> ✏️ 내가 쓴 리뷰 </h2>
                        <div class="review_list">
                            {reviewList}
                        </div>
                    </div>
                </div>
                :
                    <NoLogin>
                        <div className="please_kakao">카카오 로그인을 해주세요.</div>
                        <div className="goback_box">
                            <a href="http://localhost:4000/user/klogin" className="go_kakao"> 로그인 하러가기</a>
                            <div className="back_btn" onClick={()=>{history(-1)}}> 뒤로 가기 </div>
                        </div>
                    </NoLogin>
                }
             
            </Container>
        </Background>
    )
};

export default Mypage;