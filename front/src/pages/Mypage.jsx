import { Link } from "react-router-dom";
import styled from "styled-components";
import Store, { store } from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { review_failure, review_success, review_request, review_delete_request, review_delete_success, review_delete_failure,
review_update_start, review_update_proceed, review_update_request, review_update_success, review_update_failure } from "../reducers/review.js";

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

    const updateBoot = (k) => {
        dispatch({type: review_update_start.toString(), payload : { upidx : k} })
        // console.log(stores.review.data)
        // for( let i = 0; i < stores.review.data.length; i++) {
        //     if (stores.review.data[i].idx == k ) {
        //         const qwe = document.querySelector('#qwe')
        //         qwe.innerHTML = stores.review.data[i].text
        //     }
        // }
    }

    const changeHandler = (e) => {
        // console.log(e.target.value)
        dispatch({type: review_update_proceed.toString(), payload: e.target.value } )
    }

    const submitHandler = (k) => (e) => {
        e.preventDefault()
        const submitText = document.querySelector('#submitText')
        dispatch({type: review_update_request.toString(), payload : {text: submitText.value, idx: k }})
    }

    const reviewList = stores.review.data.map((v)=> {
        return (
            stores.review.update !== v.idx ?
            <ul key={v.idx}>
                <li onClick={() => deleteHandler(v.idx)}> x </li>
                <li key={v.idx}> 맛 : {v.flavor == null ? '평가 정보 없음' : v.flavor}</li>
                <li> 분위기 : {v.atmosphere == null ? '평가 정보 없음' : v.atmosphere}</li>
                <li> 가격 : {v.cheap == null ? '평가 정보 없음' : v.cheap}</li>
                <li> 서비스 : {v.service == null ? '평가 정보 없음' : v.service}</li>
                <li> 평가 : {v.text == null ? '평가 정보 없음' : v.text}</li>
                <li> updateFlag : {v.updateFlag}</li>
                <li> { v.idx } </li>
                <button onClick={() => updateBoot(v.idx)}> 수정 </button>
            </ul>
            :
            <ul key={v.idx}>
                <li onClick={() => deleteHandler(v.idx)}> x </li>
                <li> 맛 : {v.flavor == null ? '평가 정보 없음' : v.flavor}</li>
                <li> 분위기 : {v.atmosphere == null ? '평가 정보 없음' : v.atmosphere}</li>
                <li> 가격 : {v.cheap == null ? '평가 정보 없음' : v.cheap}</li>
                <li> 서비스 : {v.service == null ? '평가 정보 없음' : v.service}</li>
                <form onSubmit={submitHandler(v.idx)}>
                    <input type='text' onChange = {changeHandler} value={v.text} id='submitText'/>
                    <input type='submit' value='submit' />
                </form>
            </ul>
        )
    })

    useEffect(() => {  
        getReview()
    },[dispatch])

    return (
        <Background>
            <Container>
                <a href='/'>x</a>
                <hr/>
                <span> {stores.user.me.nickname} 님! 환영합니다! </span>
                <br/>
                <span> 이메일: {stores.user.me.email} </span>
                <br/>
                <hr/>
                <span> review zone </span>
                <div>
                    {reviewList}
                </div>                
            </Container>
        </Background>
    )
};

export default Mypage;