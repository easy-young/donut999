import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Layout } from 'antd';
import { show, hidden } from '../reducers/display.js';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Sider from 'antd/lib/layout/Sider';
import SFLemon from '../font/fonts';



const Header = styled.header`
    width:100%;
    height:10vh;
    
`
const StyledSider = styled(Sider)`
    position: fixed;
    z-index: 1000;
    top: 0px;
    right: 0px;
`;

const StyledMenu = styled(Menu)`
    background: #FFFCDD;
    font-family: 'YdestreetB';
    font-size:20px;

`

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    :hover {
        cursor: pointer;
        color: red;
    }

`;
const dungdung = keyframes`

    0% {
        margin-top: 0.5%
    }
    25%{
        margin-top:0.2%
    }

    50%{
        margin-top:0.5%
    }
    75%{
        margin-top: -0.2%
    }
    100%{
        margin-top: 0.5%
    }

`


const Img = styled.img`
    float: right;
    margin: 4px 12px 0 0;
    animation: ${dungdung} 2.0s linear infinite;
    cursor:pointer;
    transition: all 2s;
    :hover{
        transition: all ease 2s 0s;
    }
`;



const DefaultHeader = () => {
    const dispatch = useDispatch();
    const header = useSelector((state) => state.display);
    const onShow = useCallback(() => { dispatch(show()) }, [dispatch]);
    const onHidden = useCallback(() => { dispatch(hidden()) }, [dispatch]);
    const menuMouseOver = (e)=>{
        console.log(e.target.style)
        e.target.src = "http://localhost:3000/img/donut_set_hover.png"
    }

    const menuMouseOut = (e)=>{
        e.target.src = "http://localhost:3000/img/donut_set.png"
    }

    return (
        <>
            <Header>
                <Link to="/">도넛철도 999</Link>
                <Img onClick={onShow} src="http://localhost:3000/img/donut_set.png" width={100} height={80} alt=''
                onMouseOver={menuMouseOver} onMouseOut={menuMouseOut}/>
            </Header>
            {
                header.display === 'block' &&
                <Layout>
                    <StyledSider width={300} collapsedWidth={500}>
                        <StyledMenu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100vh' }}
                        >
                            <StyledButton onClick={onHidden}>X</StyledButton>
                            <StyledMenu.Item key='0' style={{}}><Link to="/mypage">슿 마이 페이지</Link></StyledMenu.Item>
                            <StyledMenu.Item key='1'><Link to="/login">쳌 로그인</Link></StyledMenu.Item>
                            <StyledMenu.Item key='2'><Link to="/rank"> 👑 랭킹</Link></StyledMenu.Item>
                            <StyledMenu.SubMenu key='3' title='슾 테마'>
                                <StyledMenu.Item key='protein' style={{fontSize:"16px"}}><Link to="/theme/protein">프로틴 도넛</Link></StyledMenu.Item>
                                <StyledMenu.Item key='photo' style={{fontSize:"16px"}}><Link to="/theme/photo">포토존</Link></StyledMenu.Item>
                                <StyledMenu.Item key='unique' style={{fontSize:"16px"}}><Link to="/theme/unique">이색 도넛</Link></StyledMenu.Item>
                                <StyledMenu.Item key='parking' style={{fontSize:"16px"}}><Link to="/theme/parking">주차 가능</Link></StyledMenu.Item>
                            </StyledMenu.SubMenu>
                            <StyledMenu.SubMenu key='4' title='늇 맛집 등록'>
                                <StyledMenu.Item key='join' style={{fontSize:"16px"}}><Link to="/register/join">등록 신청</Link></StyledMenu.Item>
                                <StyledMenu.Item key='check' style={{fontSize:"16px"}}><Link to="/register/check">등록 확인</Link></StyledMenu.Item>
                            </StyledMenu.SubMenu>
                        </StyledMenu>
                    </StyledSider>
                    <SFLemon/>
                </Layout>
            }
        </>
    )
};

export default DefaultHeader;