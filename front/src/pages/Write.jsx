import { Link } from "react-router-dom";
import styled from "styled-components";
import Store, { store } from '.././store/useStore.jsx'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {review_create_request, review_create_success, review_create_failure, review_write
, review_flavor, review_atmosphere, review_cheap, review_service} from '../reducers/writeReview.js'


// const initialState = { 
//     number: { flavor: null, atmosphere : null, cheap: null, service: null }, 
//     email: null, text: null, metadata: { loading: false, error: null}
// }

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
            <form onSubmit = {submitHandler}>
                <ul>
                    <li>
                        <span>맛</span>
                        <select name='flavor' onChange = {changeFlavor}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </li>
                    <li>
                        <span>분위기</span>
                        <select name='atmosphere' onChange = {changeAtmosphere}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </li>
                    <li>
                        <span>가격</span>
                        <select name='cheap' onChange = { changeCheap }>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </li>
                    <li>
                        <span>서비스</span>
                        <select name='service' onChange = { changeService }>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </li>
                </ul>

                <input type='text' onChange= {changeHandler} id='reviewText' />
                <input type='submit'/>
            </form>
        </>
    )
}

export default Write