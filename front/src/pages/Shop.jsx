import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { shop_request } from '../reducers/shop.js';

const Background = styled.div`
    display: flex;
    position: fixed;
    z-index: 2000;
    width: 100%;
    height: 100%;
    justify-content: center;
    top: 0px;
    align-items: center;
    background: white;
`;

const Container = styled.div`
    width: 90%;
    height: 96%;
    padding: 30px;
    border-radius: 30px;
    background-color: #ffd3bb;
`;

const StoreName = styled.div`
    font-size: 24px;
`;

const Shop = () => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.shop);
    const params = useParams();
    const { idx } = params;
    useEffect(() => {
        dispatch(shop_request(idx));
    }, [dispatch]);
    return (
        <Background>
            <Container>
                {
                    info &&
                    <>
                        <StoreName>{info.name}</StoreName>
                        <div>(지하철) {info.line}호선 {info.stationKor}역</div>
                        <div>(주소) {info.address}</div>
                        <div>(도넛) {info.menu}</div>
                        <div>(음료) {info.beverage}</div>
                        <div>(운영 시간) {info.operhour}</div>
                        <div>(연락처) {info.tel}</div>
                        {
                            info.website &&
                            <div>(SNS) {info.website}</div>
                        }
                        {
                            info.intro &&
                            <div>(소개) {info.intro}</div>
                        }
                    </>
                    
                }
            </Container>
        </Background>
    )
};

export default Shop;