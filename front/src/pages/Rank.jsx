import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rank_flavor_request, rank_atmosphere_request, rank_cheap_request, rank_service_request } from "../reducers/rank";

const Background = styled.body`
    display: flex;
    position: fixed;
    z-index: 2000;
    width: 100%;
    height: 100%;
    justify-content: center;
    top: 0px;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
    width: 1100px;
    height: 660px;

    @media (max-width: 1100px) {
        width: 96%;
    }

    @media (max-height: 800px) {
        height: 86%;
    }

    @media (max-width: 400px) {
        height: 94%;
    }
`;

const Tab = styled.div`
    display: inline-block;
    width: 78px;
    height: 40px;
    padding: 1% 0.8%;
    text-align: center;
    color: #ffffff;
    font-weight: bolder;
    background: #ff99aa;
    margin-right: 2%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    :hover {
        cursor: pointer;
        color: #fff8c4;
    }

    :visited {
        background: #ff627c;
    }
`;

const StyledLink = styled(Link)`
    color: #ffffff;
    font-weight: bolder;

    :hover {
        color: #fff8c4;
    }
`;

const BigDiv = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
    background: white;
    border-radius: 20px;

    @media (max-width: 1100px) {
        height: 100%;
    }

    @media (max-height: 800px) {
        height: 90%;
    }

    @media (max-width: 400px) {
        height: 86%;
    }
`;

const SmallDiv = styled.div`
    width: 94%;
    height: 15%;
    margin-bottom: 3%;
    border: 2px solid rgb(126, 126, 126);
    border-radius: 8px;
`;

const Rank = () => {
    const dispatch = useDispatch();
    const flavor = () => {
        dispatch(rank_flavor_request());
    };
    const atmosphere = () => {
        dispatch(rank_atmosphere_request());
    };
    const cheap = () => {
        dispatch(rank_cheap_request());
    };
    const service = () => {
        dispatch(rank_service_request());
    };
    return (
        <Background>
            <Container>
                <Tab style={{ marginLeft: '2%' }}><StyledLink to='/rank'>전체</StyledLink></Tab>
                <Tab onClick={flavor}>맛</Tab>
                <Tab onClick={atmosphere}>분위기</Tab>
                <Tab onClick={cheap}>가성비</Tab>
                <Tab onClick={service}>서비스</Tab>
                <Tab style={{ float: 'right', background: '#f8bcff' }}><StyledLink to='/'>뒤로 가기</StyledLink></Tab>
                <BigDiv>
                    <SmallDiv>1</SmallDiv>
                    <SmallDiv>2</SmallDiv>
                    <SmallDiv>3</SmallDiv>
                    <SmallDiv>4</SmallDiv>
                    <SmallDiv style={{ marginBottom: '0%' }}>5</SmallDiv>
                </BigDiv>
            </Container>
        </Background>
    )
};

export default Rank;