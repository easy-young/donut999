import styled from 'styled-components'

export const Li = styled.li`
    color:#ff1eb2;
    font-weight:bold;
`

export const AuthInputBox = styled.input`
    font-size:1rem;
    border:none;
    border-bottom:1px solid #666;
    padding:0.5rem 0 0.3rem 0;
    outline:none;
    width:250px;
    margin-left: 4%;
    margin-top:8%;
    &:focus {
        border-bottom: 1px solid #999;
    }

    & + & {
        margin-top:0.5rem;
    }
`

export const AuthForm = styled.form`
    
    width: 300px;
    margin:0 auto;
    margin-top: 15%;
`

export const AuthTable = styled.div`
    margin:0 auto;
    margin-left: 2%;

`
export const AuthDiv = styled.div`
    width:100%;
    margin: 0 auto;
    text-align: center;
`

export const AuthButton = styled.button`
    width: 100px;
    height: 30px;
    margin: 0 auto;
    margin-top:7%;
    background-color: #fff;
    border:none;
    color:#000;
    font-weight:bolder;
`

export const AdminMenuDiv = styled.div`
    display: flex;
    margin:0 auto;
    width:90%;
    font-size:1rem;
    justify-content: space-around;
    margin-top:10%;
`

export const AdminInput = styled.input`
    width: 40%;
    padding:3px;
    border:none;
    background-color: #fff;
    font-weight: bold;
    font-size:1.5rem;
`

export const BigButton = styled.button`
    padding:7px;
    border:1px solid #fff;
    border-radius: 50px;
    background: #fff;
    font-weight: bold;
    font-size:1.5rem;
    cursor: pointer;
`

export const Ol = styled.ol`
    margin-top: 30%;

    &>li{
        margin-top:10%;
    } 
`