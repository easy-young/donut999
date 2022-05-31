import styled, {keyframes} from 'styled-components'

export const Back = styled.div`
    position:fixed;
    z-index: 2000;
    width:100%;
    height:100%;
    justify-content:center;
    align-items: center;
    top:0px;
    background: #FFFCDD;
    overflow: scroll;

`

export const Background = styled.div`
display: flex;
position: fixed;
z-index: 2000;
width: 100%;
height: 100%;
justify-content: center;
top: 0px;
align-items: center;
/* background: #FFFCDD; */
background: rgba(0, 0, 0, 0.4);
`;

export const Li = styled.li`
    color:#ff1eb2;
    margin-top:30%;
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
    position:relative;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
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
    width: 150px;
    height: 35px;
    padding: 5px 7px;
    margin: 0 auto;
    margin-top:7%;
    background-color: pink;
    /* border:none; */
    color:#000;
    font-weight:bolder;
`

export const AdminMenuDiv = styled.div`
    display: flex;
   
    width:90%;
    height: 30%;
    font-size:1rem;
    justify-content: space-around;
    position:relative;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
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
    font-size: 20px;
    &>li{
        margin-top:10%;
    } 
`

const motion = keyframes`
 
	0% {margin-top: 0px;} 
	100% {margin-top: 5px;}

`

export const Submit = styled.input`
    width: 10%;
    height: 8%;
    margin-right: 20px;
    padding: 5px 7px;
    background: #EE82EE;
    color:#fff;
    border-color:pink;


    cursor: pointer;
    &:hover{
            opacity: 0.5;
            animation: ${motion} 0.3s linear 0s infinite alternate; 
        }

        @media (max-width: 600px) {
            width: 15%;
            animation: ${motion} 0.3s linear 0s infinite alternate; 

        }
`;


export const BackBtn = styled.button`
    width:20%;
    height: 8%;
    padding: 5px 7px;
    background: #fff;

    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }

    &>a{
        color:#000;
    }

    @media (max-width: 600px) {
            width: 30%;
        }
`;

export const H1 = styled.h1`
    text-align: center;
`


export const H3 = styled.h3`
    margin-top: 10px;
`;

export const H3R = styled.h3`
margin-left: 10px;
display: inline-block;
`;

export const Form = styled.form`
    width: 800px;
    height: 750px;
    padding: 20px;
    border-radius: 40px;
    background: white;
    overflow: auto;
    &::-webkit-scrollbar{
        border-radius:100px;
        width:10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 6px solid rgba(0, 0, 0, 0.18);
        border-left: 0;
        border-right: 0;
        background-color: pink;
    }

    @media (max-width: 600px) {
        width: 96%;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 18%;
    border: none;
    border: 1px solid pink;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid pink;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;

export const InputP = styled.input`
    width: 39.7%;
    height: 30px;
    border: none;
    border-bottom: 1px solid pink;
    margin-left: 2%;

    @media (max-width: 600px) {
        width: 28%;
    }

    @media (max-width: 300px) {
        width: 22%;
    }
`;


export const InputR = styled.input`
    margin-top: 10px;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    vertical-align: -4px;

    @media (max-width: 600px) {
        width: 10%;
    }

    @media (max-width: 300px) {
        width: 10%;
    }
`;


export const BottomDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 26px;
`;

export const FlexDiv = styled.div`
    display: flex;
    width:100%;

`