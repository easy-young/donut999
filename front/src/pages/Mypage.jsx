import { Link } from "react-router-dom";
import styled from "styled-components";
import Store from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { review_failure, review_success, review_request } from "../reducers/review.js";

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

    const getReview = () => {
        dispatch({ type:review_request.toString(), payload:{ email: body.email } })
    }

    const reviewList = stores.review.data.map(v=> (
        <ul>
            <li >{v.idx}</li>
            <li>{v.flavor}</li>
            <li>{v.atmosphere}</li>
            <li>{v.cheap}</li>
            <li>{v.service}</li>
            <li>{v.text}</li>
        </ul>
    ))


    useEffect(() => {  
        getReview()
    },[dispatch])

    return (
        <Background>
            <Container>
                <span> {stores.user.me.nickname} 님! 환영합니다! </span>
                <br/>
                <span> 이메일: {stores.user.me.email} </span>
                <br/>
                <span> review zone </span>

                <hr/>
                
                {reviewList}
                
            </Container>
        </Background>
    )
};

export default Mypage;