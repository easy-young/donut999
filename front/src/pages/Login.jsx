import { useState, useEffect } from 'react'
import { user_login_failure, user_login_request, user_login_success, 
user_logout_request, user_logout_success } from '../reducers/user';
import { connect,useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

// const mapStateToProps = (state) => ({
//     user: state.user.me.isLogin
// })

// const mapDispatchToProps = (dispatch) => ({
//     userLogin : () => {dispatch(user_login_success)},
//     userLogout : () => {dispatch(user_logout_success)}
// })

// 인가요청(/oauth/authorize)은 XMLHttpRequest를 이용한 비동기 통신 방식으로 호출 하시면 안됩니다.
//  (REST-API방식이라면 UI에서 href로 페이지 이동 처리 해주세요)

const Login = ({user }) => {
    const dispatch = useDispatch()
    const me = useSelector(state => state.user.isLogin)

    const userLogin = async () => {
        const option = {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin':true,
            withCredentials: false,
            'Access-Control-Allow-Credentials': true
        }
        const result = await axios.post('http://localhost:4000/user/klogin', null, option)
        console.log(result.data)
        dispatch({type:user_login_success.toString(), payload : result.data.tempInfo})
    }

    const userLogout = () => {
        dispatch({type:user_logout_success.toString()})
    }

    const click = () => {
        console.log(me)
    }

    return (
        <>
            <a href='http://localhost:4000/user/klogout' onClick={userLogout}> logout </a> 
            <a href='http://localhost:4000/user/klogin'> kakao login </a> 
            <button onClick={click}>click</button>
        </>
    )
};

export default Login