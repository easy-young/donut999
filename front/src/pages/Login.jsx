import { useState } from 'react'


const qs = require('qs')

const Login = () => {
    
    return (
        <>
            <a href='http://localhost:4000/user/klogin'> kakao login </a>
            <br/>
            <a href='http://localhost:4000/user/klogout'> logout </a>
        </>
    )
};

export default Login;