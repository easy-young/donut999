import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const qs = require('qs')

const Login = () => {
    const [ isRedirect, setIsRedirect ] = useState(false)

    const client_id = 'bcc6575307f03520e0cd6a242a769d2f'
    const host = 'https://kauth.kakao.com'
    const redirect_uri = 'http://localhost:3000/oauth/kakao'
    const client_secret = 'hzcDi1kFEYYxRpfvJY6bPS9HTGIGkBnA'
    
    const loginReq = () => {
        const redirect_URI = host + `/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
        console.log(redirect_URI)
        setIsRedirect(true)
    }
    
    return (
        <>
            <Link to='/kakao/login' onClick={loginReq}>카카오 로그인</Link>
            
        </>
    )
};

export default Login;