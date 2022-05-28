import {AuthForm, AuthTable, AuthDiv, AuthInputBox, AuthButton} from '../../components/styles/AdminStyles'
import {useDispatch, useSelector} from 'react-redux';
import { adminLogin_success } from '../../reducers/admin/adminLogin';

const Admin = () => {
    const dispatch = useDispatch()
    const stores = useSelector(state => state)
    const some_secret_key = 'some_secret_key'


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.email.value, e.target.password.value)
        if( e.target.email.value === 'admin' && e.target.password.value === 'admin') {
            dispatch({type: adminLogin_success.toString() })
            alert('관리자 권한 로그인 되었습니다.')
            window.location.href='http://localhost:3000/dt/admin/menu'
            localStorage.setItem('persist:user',{"adminLogin":"{\"admin\":some_secret_key,\"isLogin\":true}","user":"{\"me\":{\"isLogin\":true,\"nickname\":\"null\",\"email\":\"null\"},\"error\":null,\"loading\":false}",
            "_persist":"{\"version\":-1,\"rehydrated\":true}"})
        }
        else {
            alert('email/pw를 확인해주세요.')
        }
    }

    const logoutHandler = () => {
        localStorage.setItem('persist:user',{"adminLogin":"{\"admin\":null,\"isLogin\":false}","user":"{\"me\":{\"isLogin\":true,\"nickname\":\"null\",\"email\":\"null\"},\"error\":null,\"loading\":false}",
            "_persist":"{\"version\":-1,\"rehydrated\":true}"})
        alert('로그아웃 되었습니다')
        window.location.href='http://localhost:3000'
    }

    return (
        <>
            { stores.adminLogin.admin !== some_secret_key 
            ?
            <>
                <AuthForm onSubmit= { submitHandler }>
                    <AuthTable>
                        <tr>
                            <td>ID</td>
                            <td><AuthInputBox type='text' name='email'  placeholder="아이디를 입력해주세요." /></td>
                        </tr>
                        <tr>
                            <td>PW</td>
                            <td><AuthInputBox type='password' name='password'  placeholder="패스워드를 입력해주세요." /></td>
                        </tr>
                    </AuthTable>
                    <AuthDiv>
                        <AuthButton type="submit">Admin 접속</AuthButton>
                    </AuthDiv>
                    
                </AuthForm>
            </>
            :
            <button onClick={logoutHandler}> Logout </button>
            }
        </>
    )
};

export default Admin;

