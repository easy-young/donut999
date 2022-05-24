import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
    margin-top: 20px;
    font-size: 24px;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Img = styled.img`
    display: inline-block;
    width: 400px;
    height: 300px;
`;

const StarImg = styled.img`
    position: absolute;
    width: 150px;
    height: 30px;
    left: 0px;
    z-index: 10;
`;

const ReviewBtn = styled.button`
    margin-left: 20px;
    width: 90px;
    height: 30px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    background-color: #f2b6ff;

    :hover {
        cursor: pointer;
    }
`;

const Half = styled.div`
    display: inline-block;
    width: 660px;
    height: 340px;
`;

const Btn = styled.button`
    padding: 6px;
    height: 34px;
    border: none;
    border-radius: 10px;
    background-color: blanchedalmond;

    :hover {
        cursor: pointer;
    }
`;

const StarBox = styled.span`
    display: inline-block;
    position: relative;
`;

const StarSpan = styled.span`
    display: inline-block;
    position: relative;
    width: 50px;
    height: 30px;
    background: url('/img/star/star5.png');
    background-size: 150px 30px;
    overflow: hidden;
    z-index: 20;
`;

const Shop = () => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.shop);
    const params = useParams();
    const { idx } = params;
    useEffect(() => {
        dispatch(shop_request(idx));
    }, [dispatch]);
    const review = () => {
        // dispatch(review_create_request());
    };
    return (
        <Background>
            <Container>
                {
                    info &&
                    <>
                        <ImgBox>
                            <Img src={require(`../../public/img/donut_store/${info.idx}_1.jpg`)}/>
                            <Img src={require(`../../public/img/donut_store/${info.idx}_2.jpg`)}/>
                            <Img src={require(`../../public/img/donut_store/${info.idx}_3.jpg`)}/>
                        </ImgBox>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Half>
                                <StoreName>
                                    {info.name}
                                    <StarBox>
                                        <StarImg src='/img/star/star0.png'/>
                                        {/* <StarImg src='/img/star/star5.png'/> */}
                                        <StarSpan></StarSpan>
                                    </StarBox>
                                </StoreName>
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
                            </Half>
                            <Half>
                                <StoreName>
                                    리뷰
                                    <ReviewBtn onClick={review}>
                                            리뷰 작성
                                    </ReviewBtn>
                                </StoreName>
                            </Half>
                        </div>
                        <div style={{ display: 'flex', justifyContent:'center' }}>
                            <Btn>홈으로</Btn>
                            <Btn style={{ marginLeft: '10px' }}>뒤로 가기</Btn>
                        </div>
                    </>
                }
            </Container>
        </Background>
    )
};

export default Shop;