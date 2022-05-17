import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.body`
    display: flex;
    position: fixed;
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
    background: #ff99aa;
    margin-right: 2%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    :hover {
        cursor: pointer;
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
    padding: 40px;
    background: white;
    border-radius: 10px;

    @media (max-width: 1100px) {
        height: 100%;
    }

    @media (max-height: 800px) {
        height: 90%;
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
    return (
        <Background>
            <Container>
                <Tab style={{ marginLeft: '2%' }}><StyledLink to='/rank'>전체</StyledLink></Tab>
                <Tab><StyledLink to='/rank/flavor'>맛</StyledLink></Tab>
                <Tab><StyledLink to='/rank/atmosphere'>분위기</StyledLink></Tab>
                <Tab><StyledLink to='/rank/cheap'>가성비</StyledLink></Tab>
                <Tab><StyledLink to='/rank/service'>서비스</StyledLink></Tab>
                <Tab style={{ float: 'right' }}><StyledLink to='/'>뒤로 가기</StyledLink></Tab>
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