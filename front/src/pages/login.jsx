import { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'

const qs = require('qs')

const Login = () => {
    
    return (
        <>
            <a href='http://localhost:4000/user/klogin'>카카오 로그인</a>
            {/* { isRedirect && <Navigate to = 'https://kauth.kakao.com/oauth/authorize?client_id=bcc6575307f03520e0cd6a242a769d2f&redirect_uri=http://localhost:3000/oauth/kakao&response_type=code'/>} */}
        </>
    )
};

export default Login;