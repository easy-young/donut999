import { user_logout_success } from '../reducers/user.js'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        console.log(localStorage)
        localStorage.setItem('persist:user', `{\"me\":{\"email\":\"null\",\"nickname\":\"null\",\"isLogin\":false},\"error\":null,\"loading\":false}`)
        
        dispatch({type: user_logout_success.toString()})
        window.location.href='http://localhost:3000'
<<<<<<< HEAD

=======
>>>>>>> bf44198bab1234f877c1ae23b5cf23214d340286
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