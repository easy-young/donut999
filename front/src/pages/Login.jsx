import { useState, useEffect } from 'react'
import { user_login_failure, user_login_request, user_login_success, 
user_logout_request, user_logout_success } from '../reducers/user';
import { connect,useDispatch, useSelector } from 'react-redux'
import { Result } from 'antd';


// const mapStateToProps = (state) => ({
//     user: state.user.me.isLogin
// })

// const mapDispatchToProps = (dispatch) => ({
//     userLogin : () => {dispatch(user_login_success)},
//     userLogout : () => {dispatch(user_logout_success)}
// })

const Login = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        console.log(localStorage)
        localStorage.setItem('persist:user', `{\"me\":{\"email\":\"null\",\"nickname\":\"null\",\"isLogin\":false},\"error\":null,\"loading\":false}`)
        window.href='http://localhost:3000'
        // setState를 사용해 바꾼 로컬 스토리지 값을 state로 전달? 
    }

    return (
        <>
            {/* <a href='http://localhost:4000/user/klogout' onClick={userLogout}> logout </a> 
            <KaKaoLogin
                token='b352e8ba913add05daa86db3be8ec026'
                // buttonText='Kakao login'
                onSuccess={() => {userLogin()}}
                onFail={(err) => {console.log('failure')}}
                onLogout = { () => console.log('logout')}
                getProfile={true}
            />

            <button onClick={click}>click</button> */}

            <a href='http://localhost:4000/user/klogin'> kakao login </a>
            <br/>
            <button onClick={logoutHandler}> logout </button>
        </>
    )
};

export default Login