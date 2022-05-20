import { Link } from "react-router-dom";
import styled from "styled-components";
import Store from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios'

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

const Mypage = (state) => {
    const stores = useSelector(state=>state.user)
    const sila = () => {
        console.log(stores.me)
    }

    const body = {email : stores.me.email }

    const option = {
        'Content-type':'application/json',
        withCredentials:true
    }

    const review = []

    const getReview = async() => {
        const response = await axios.post('http://localhost:4000/user/getReview', body, option )
        const review = response.data.result
        const reviewlist = review.map(v => (
            <li>{v.flavor}</li>,
            <li>{v.atmosphere}</li>,
            <li>{v.cheap}</li>,
            <li>{v.service}</li>,
            <li>{v.text}</li>
        ))
        
    }

    // state에 값을 추가해줘야 할 것 같다..

    useEffect(() => {  
        getReview()
        console.log(review) 
    },[])

    return (
        <Background>
            <Container>
                <span> {stores.me.nickname} 님! 환영합니다! </span>
                <br/>
                <span> 이메일: {stores.me.email} </span>
                <br/>
                <span> review zone</span>
                <ul>
                    {/* {reviewlist} */}
                </ul>
        

            </Container>
        </Background>
    )
};

export default Mypage;