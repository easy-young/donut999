import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Layout } from 'antd';
import { show, hidden } from '../reducers/display.js';
import styled from 'styled-components';
import Sider from 'antd/lib/layout/Sider';

const StyledSider = styled(Sider)`
    position: fixed;
    top: 0px;
    right: 0px;
`;

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    :hover {
        cursor: pointer;
    }
`;

const DefaultHeader = ({children}) => {
    const dispatch = useDispatch();
    const header = useSelector((state) => state.display);
    const onShow = useCallback(()=>{ dispatch(show()) }, [dispatch]);
    const onHidden = useCallback(()=>{ dispatch(hidden()) }, [dispatch]);
    return (
        <BrowserRouter>
            <header>
                <Link to='/'>도넛철도 999</Link>
            </header>
            {
                header.display === 'block' &&
                <Layout>
                    <StyledSider width={300} collapsedWidth={500}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100vh' }}
                        >
                            <StyledButton onClick={onHidden}>X</StyledButton>
                            <Menu.Item key='1'><Link to='/mypage'>마이 페이지</Link></Menu.Item>
                            <Menu.Item key='2'><Link to='/rank'>랭킹</Link></Menu.Item>
                            <Menu.SubMenu key='3' title='테마'>
                                <Menu.Item key='protein'>프로틴 도넛</Menu.Item>
                                <Menu.Item key='photo'>포토존</Menu.Item>
                                <Menu.Item key='unique'>이색 도넛</Menu.Item>
                                <Menu.Item key='parking'>주차 가능</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key='4' title='맛집 등록'>
                                <Menu.Item key='join'>등록 신청</Menu.Item>
                                <Menu.Item key='check'>등록 확인</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </StyledSider>
                </Layout>
            }
            <img onClick={onShow} src="http://localhost:3000/menu.png" width={30} height={30} alt=''/>
        </BrowserRouter>
    )
};

export default DefaultHeader;