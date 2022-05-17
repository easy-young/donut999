
import {AuthForm, AuthTable, AuthDiv, AuthInputBox, AuthButton} from '../../components/styles/AdminStyles.jsx'


const Admin = () => {
    return (
        <>
            <AuthForm>
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
    )
};

export default Admin;