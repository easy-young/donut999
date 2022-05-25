//import { Link } from "react-router-dom";
import styled from "styled-components";
//import Store, { store } from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
//import { useEffect, useState } from 'react';
import {review_create_request, review_write
, review_flavor, review_atmosphere, review_cheap, review_service} from '../reducers/writeReview.js'

const StarForm = styled.form`
    border : 2px solid #000;
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
    font-size:3em;
    color:transparent;
    text-shadow: 0 0 0 #f0f0f0;

    :hover {
        text-shadow: 0 0 0 #fff36c;
    }

    :hover ~ label {
        text-shadow: 0 0 0 #fff36c;
    }
`



const Write = () => {
    const stores = useSelector(state => state)
    const dispatch = useDispatch()

    const email = stores.user.me.email
    const score = stores.createReview.number
    const reviewText = stores.createReview.text

    const changeHandler = (e) => {
        if ( e.target.value != null) {
            dispatch({type: review_write.toString(), payload: e.target.value})
        }
    }

    const changeFlavor = (e) => {
        dispatch({ type: review_flavor.toString(), payload: {flavor: parseInt(e.target.value)} } )
    }
    const changeAtmosphere = (e) => {
        dispatch({ type: review_atmosphere.toString(), payload: {atmosphere: parseInt(e.target.value)} } )
    }
    const changeCheap = (e) => {
        dispatch({ type: review_cheap.toString(), payload: {cheap: parseInt(e.target.value)} } )
    }
    const changeService = (e) => {
        dispatch({ type: review_service.toString(), payload: {service: parseInt(e.target.value)} } )
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // const reviewText = document.querySelector('#reviewText')
        if(score.flavor == null && score.atmosphere == null && score.cheap == null && score.service == null
            && reviewText == null ) { 
            alert('점수, 평가 중 하나 이상은 작성해주세요!')       
                return
        }
        const payload = {email, text: stores.createReview.text, number : score}
        dispatch({type: review_create_request.toString(), payload: {...payload } })
        alert('리뷰가 작성되었습니다!')
        window.location= 'http://localhost:3000'
    }

    return(
        <>
            <StarForm onSubmit = {submitHandler}>
                <ul>
                    <li>
                        <span>맛</span>
                        <MyFieldSet onChange = {changeFlavor}>
                            <Radioinput type='radio' value='5' id='flavor1' name='flavor'/><Starlabel for='flavor1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='flavor2' name='flavor'/><Starlabel for='flavor2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='flavor3' name='flavor'/><Starlabel for='flavor3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='flavor4' name='flavor'/><Starlabel for='flavor4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='flavor5' name='flavor'/><Starlabel for='flavor5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>분위기</span>
                        <MyFieldSet onChange = {changeAtmosphere}>
                            <Radioinput type='radio' value='5' id='atmosphere1' name='atmosphere'/><Starlabel for='atmosphere1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='atmosphere2' name='atmosphere'/><Starlabel for='atmosphere2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='atmosphere3' name='atmosphere'/><Starlabel for='atmosphere3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='atmosphere4' name='atmosphere'/><Starlabel for='atmosphere4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='atmosphere5' name='atmosphere'/><Starlabel for='atmosphere5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>가격</span>
                        <MyFieldSet onChange = {changeCheap}>
                            <Radioinput type='radio' value='5' id='cheap1' name='cheap'/><Starlabel for='cheap1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='cheap2' name='cheap'/><Starlabel for='cheap2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='cheap3' name='cheap'/><Starlabel for='cheap3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='cheap4' name='cheap'/><Starlabel for='cheap4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='cheap5' name='cheap'/><Starlabel for='cheap5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                    <li>
                        <span>서비스</span>
                        <MyFieldSet onChange = {changeService}>
                            <Radioinput type='radio' value='5' id='service1' name='service'/><Starlabel for='service1'>⭐</Starlabel>
                            <Radioinput type='radio' value='4' id='service2' name='service'/><Starlabel for='service2'>⭐</Starlabel>
                            <Radioinput type='radio' value='3' id='service3' name='service'/><Starlabel for='service3'>⭐</Starlabel>
                            <Radioinput type='radio' value='2' id='service4' name='service'/><Starlabel for='service4'>⭐</Starlabel>
                            <Radioinput type='radio' value='1' id='service5' name='service'/><Starlabel for='service5'>⭐</Starlabel>
                        </MyFieldSet>
                    </li>
                </ul>

                <input type='text' onChange= {changeHandler} id='reviewText' />
                <input type='submit'/>
            </StarForm>
        </>
    )
}

export default Write