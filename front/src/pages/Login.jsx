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

const Login = ({user }) => {
    const dispatch = useDispatch()

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
            <a href='http://localhost:4000/user/klogout'> logout </a>
        </>
    )
};

export default Login