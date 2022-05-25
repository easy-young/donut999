
import { user_login_failure, user_login_request, user_login_success, 
user_logout_request, user_logout_success } from '../reducers/user';
import { useDispatch } from 'react-redux'
import { Result } from 'antd';


const Login = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        console.log(localStorage)
        localStorage.setItem('persist:user', `{\"me\":{\"email\":\"null\",\"nickname\":\"null\",\"isLogin\":false},\"error\":null,\"loading\":false}`)
        
        dispatch({type: user_logout_success.toString()})
        window.location.href='http://localhost:3000' // 다시 메인 페이지로 보내줄 수 있게..
        // `<script>alert('로그아웃 되었습니다.')</script>`
    }

    return (
        <>
            <a href='http://localhost:4000/user/klogin'> kakao login </a>
            <br/>
            <button onClick={logoutHandler}> logout </button>
        </>
    )
};

export default Login