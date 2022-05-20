import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Layout } from 'antd';
import { show, hidden } from '../reducers/display.js';
import styled from 'styled-components';
import Sider from 'antd/lib/layout/Sider';

const StyledSider = styled(Sider)`
    position: fixed;
    z-index: 1000;
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

const Img = styled.img`
    display: fixed;
    float: right;
    margin: 4px 12px 0 0;
`;

const DefaultHeader = () => {
    const dispatch = useDispatch();
    const header = useSelector((state) => state.display);
    const onShow = useCallback(() => { dispatch(show()) }, [dispatch]);
    const onHidden = useCallback(() => { dispatch(hidden()) }, [dispatch]);

    return (
        <>
            <header>
                <Link to="/">도넛철도 999</Link>
                <Img onClick={onShow} src="http://localhost:3000/menu.png" width={40} height={40} alt=''/>
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
                            <Menu.Item key='0'><Link to="/mypage">마이 페이지</Link></Menu.Item>
                            <Menu.Item key='1'><Link to="/login">로그인</Link></Menu.Item>
                            <Menu.Item key='2'><Link to="/rank">랭킹</Link></Menu.Item>
                            <Menu.SubMenu key='3' title='테마'>
                                <Menu.Item key='protein'><Link to="/theme/protein">프로틴 도넛</Link></Menu.Item>
                                <Menu.Item key='photo'><Link to="/theme/photo">포토존</Link></Menu.Item>
                                <Menu.Item key='unique'><Link to="/theme/unique">이색 도넛</Link></Menu.Item>
                                <Menu.Item key='parking'><Link to="/theme/parking">주차 가능</Link></Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key='4' title='맛집 등록'>
                                <Menu.Item key='join'><Link to="/register/join">등록 신청</Link></Menu.Item>
                                <Menu.Item key='check'><Link to="/register/check">등록 확인</Link></Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </StyledSider>
                </Layout>
            }
        </>
    )
};

export default DefaultHeader;