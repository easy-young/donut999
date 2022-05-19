import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
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
    width: 1000px;
    height: 600px;
    background-color: white;
    border-radius: 30px;
`;

const Mypage = () => {
    return (
        <Background>
            <Container>
                My page
            </Container>
        </Background>
    )
};

export default Mypage;