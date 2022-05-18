import { useState, useEffect } from 'react'


const Login = () => {
    const [ isLogin, setIsLogin ] = useState(false)

    const handleLogin = () => {
        setIsLogin(!isLogin)
        console.log(isLogin)
    }

    return (
        <>
            <a href='http://localhost:4000/user/klogout' onClick={handleLogin}> logout </a> 
            <a href='http://localhost:4000/user/klogin' onClick={handleLogin}> kakao login </a>
        </>
    )
};

export default Login;