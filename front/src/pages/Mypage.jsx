// import { Link } from "react-router-dom";
import styled from "styled-components";
//import Store, { store } from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { review_request, review_delete_request,
review_update_start, review_update_proceed, review_update_request } from "../reducers/review.js";
//import { review_flavor, review_atmosphere, review_cheap, review_service } from '.././reducers/writeReview.js'


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
    width: 1000px;
    height: 600px;
    background-color: white;
    border-radius: 30px;
`;

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

const StarSpan = styled.span`
    font-size: 1.25rem;
`

const Mypage = () => {
    const stores = useSelector(state => state)
    const dispatch = useDispatch()
    // const [ reviewList, setReviewList ] = useState([])

    const body = { email : stores.user.me.email }

    const deleteHandler = (k) => {
        dispatch({type :review_delete_request.toString(), payload: {idx:k} })
        // getReview()
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
            <ul key={v.idx}>
                <li onClick={() => deleteHandler(v.idx)}> x </li>
                <li> 맛 : {

                    v.flavor === 1 ? <StarSpan>⭐</StarSpan> : v.flavor === 2 ? <StarSpan>⭐⭐</StarSpan> 
                    : v.flavor === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                    : v.flavor === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.flavor === 5 ? <StarSpan>⭐⭐⭐⭐⭐ </StarSpan> : '평가 정보 없음'
                    }
                </li>
                <li> 분위기 : {
                    v.atmosphere === 1 ? <StarSpan>⭐</StarSpan> : v.atmosphere === 2 ? <StarSpan>⭐⭐</StarSpan> 
                    : v.atmosphere === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                    : v.atmosphere === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.atmosphere === 5 ? <StarSpan>⭐⭐⭐⭐⭐</StarSpan> : '평가 정보 없음'
                    }
                </li>
                <li> 가격 : {
                    v.cheap === 1 ? <StarSpan>⭐</StarSpan> : v.cheap === 2 ? <StarSpan>⭐⭐</StarSpan> 
                    : v.cheap === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                    : v.cheap === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.cheap === 5 ? <StarSpan>⭐⭐⭐⭐⭐</StarSpan> : '평가 정보 없음'
                }
                </li>
                <li> 서비스 : {
                    v.service === 1 ? <StarSpan>⭐</StarSpan> : v.service === 2 ? <StarSpan>⭐⭐</StarSpan> 
                    : v.service === 3 ? <StarSpan>⭐⭐⭐</StarSpan> 
                    : v.service === 4 ? <StarSpan>⭐⭐⭐⭐</StarSpan> : v.service === 5 ? <StarSpan>⭐⭐⭐⭐⭐</StarSpan> : '평가 정보 없음'
                    }
                </li>
                <li> 평가 : {v.text === null ? '평가 정보 없음' : v.text}</li>
                <button onClick={() => updateBoot(v.idx)}> 수정 </button>
            </ul>
            :
            <StarForm onSubmit = {submitHandler(v.idx)}>
                <ul>
                    <li>
                        <span>맛</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='flavor1' name='flavor'/><Starlabel for='flavor1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='flavor2' name='flavor'/><Starlabel for='flavor2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='flavor3' name='flavor'/><Starlabel for='flavor3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='flavor4' name='flavor'/><Starlabel for='flavor4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='flavor5' name='flavor'/><Starlabel for='flavor5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>분위기</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='atmosphere1' name='atmosphere'/><Starlabel for='atmosphere1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='atmosphere2' name='atmosphere'/><Starlabel for='atmosphere2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='atmosphere3' name='atmosphere'/><Starlabel for='atmosphere3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='atmosphere4' name='atmosphere'/><Starlabel for='atmosphere4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='atmosphere5' name='atmosphere'/><Starlabel for='atmosphere5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>가격</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='cheap1' name='cheap'/><Starlabel for='cheap1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='cheap2' name='cheap'/><Starlabel for='cheap2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='cheap3' name='cheap'/><Starlabel for='cheap3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='cheap4' name='cheap'/><Starlabel for='cheap4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='cheap5' name='cheap'/><Starlabel for='cheap5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>서비스</span>
                        <MyFieldSet>
                            <Radioinput type='radio' value='5' id='service1' name='service'/><Starlabel for='service1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='service2' name='service'/><Starlabel for='service2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='service3' name='service'/><Starlabel for='service3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='service4' name='service'/><Starlabel for='service4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='service5' name='service'/><Starlabel for='service5'>⭐</Starlabel>
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

    const qwe = () => {
        console.log(localStorage)
    }

    return (
        <Background>
            <Container>
                { stores.user.me.email !== null
                ?
                    <>
                        <a href='/'>x</a>
                        <hr/>
                        <span> {decodeURI(stores.user.me.nickname)} 님! 환영합니다! </span>
                        <br/>
                        <span> 이메일: {stores.user.me.email} </span>
                        <br/>
                        <hr/>
                        <span> review zone </span>
                        <div>
                            {reviewList}
                        </div>
                    </>
                :
                    <>
                    <a href='/'>x</a>
                    <span>login please!</span>
                    <a href='http://localhost:4000/user/klogin'> kakao login </a>
                    </>
                }
             
            </Container>
        </Background>
    )
};

export default Mypage;