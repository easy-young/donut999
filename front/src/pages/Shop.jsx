import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { shop_request } from '../reducers/shop.js';
import { isMobile } from "react-device-detect";

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
    overflow: scroll;
`;

const StoreName = styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 24px;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
`;

const Ul = styled.ul`
    list-style: none;

`

const Li = styled.li`
    width:100%;
    margin-top:1%;
`

const Span1 = styled.span`
    color:#ff6825;
`

const Span = styled.span`
    margin-left: 5%;

`

const Img = styled.img`
    display: inline-block;
    width: 400px;
    height: 300px;
`;

const StarImg = styled.img`
    position: absolute;
    width: 100px;
    height: 20px;
    left: 0px;
    z-index: 10;
`;

const ReviewBtn = styled.button`
    margin-left: 20px;
    width: 90px;
    height: 30px;
    font-size: 16px;
    padding: 3px 7px;
    border: none;
    border-radius: 10px;
    background-color: #f2b6ff;

    :hover {
        cursor: pointer;
    }
`;

const Btn = styled.button`
    margin-top: 20px;
    padding: 6px;
    height: 34px;
    border: none;
    border-radius: 10px;
    background-color: blanchedalmond;
    font-size: 16px;
    :hover {
        cursor: pointer;
    }
`;

const StarBox = styled.span`
    display: inline-block;
    position: relative;
    top: 5px;
    margin-left: 16px;
`;

const StarSpan = styled.span`
    display: inline-block;
    position: absolute;
    width: 50px;
    height: 20px;
    background: url('/img/star/star5.png');
    background-size: 100px 20px;
    overflow: hidden;
    z-index: 20;
`;

const ReviewDiv = styled.div`
    width: 85vw;
    margin-Top:0.5%;
    font-size: 18px;
    border: 3px solid #FFFCDD;
    padding: 1%;
`;

const StarSpan2 = styled.span`
    font-size: 1.25rem;
`

const Ebutton = styled.button`
    border:none;
    background-color: #ffff;
    padding: 5px 7px;
    font-size:16px;
    &>a{
        color:black;
    }
`


const Shop = () => {
    const dispatch = useDispatch();
    const { info, review } = useSelector((state) => state.shop);

    const stores = useSelector(state=>state)
    const email = stores.user.me.email

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
                        {isMobile 
                        ? 
                        <ImgBox>  
                            <Img src={require(`../../public/img/donut_store/${info.idx}_3.jpg`)}/>
                        </ImgBox>
                        : 
                        <ImgBox>  
                            <Img src={require(`../../public/img/donut_store/${info.idx}_1.jpg`)}/>
                            <Img src={require(`../../public/img/donut_store/${info.idx}_2.jpg`)}/>
                            <Img src={require(`../../public/img/donut_store/${info.idx}_3.jpg`)}/>
                        </ImgBox>
                        }
                        <ContentBox>
                            <div>
                                <StoreName>
                                    <div>
                                        {info.name} 
                                    </div>
                                    <StarBox>
                                        <StarImg src='/img/star/star0.png'/>
                                        <StarSpan></StarSpan>
                                    </StarBox>
                                </StoreName>
                                <Ul>
                                <Li>
                                    <Span1>지하철 🚃</Span1>
                                </Li>
                                <p> {info.line}호선 {info.stationKor}역 </p>
                                
                                <Li>
                                    <Span1>주소 🏡</Span1>
                                </Li>
                                <p>{info.address}</p>
                                <Li>
                                    <Span1>도넛 🍩</Span1>
                                </Li>
                                <p>{info.menu}</p>
                                <Li>
                                    <Span1>음료🥤</Span1>
                                </Li>
                                <p>{info.beverage}</p>
                                <Li>
                                    <Span1>운영시간 ⏰ </Span1>
                                </Li>
                                <p>{info.operhour}</p>
                                <Li>
                                    <Span1>연락처 ☎️</Span1>
                                </Li>
                                <p>{info.tel}</p>
                                {
                                    info.website &&
                                    <>
                                    <Li>
                                        <Span1>SNS 📱</Span1>
                                    </Li>
                                    <a>{info.website}</a>
                                    </>
                                }
                                {
                                    info.intro &&
                                    <>
                                    <Li>
                                        <Span1>소개 🔔</Span1>
                                    </Li>
                                    <p>{info.intro}</p>
                                    </>
                                }
                             </Ul>
                            </div>
                            <div style={{marginTop:'20px'}}>
                               <div style={{fontSize: '24px', display:'inline'}}>리뷰</div>
                                    <ReviewBtn>
                                        <Link to={`/write/`+info.idx}>리뷰 작성</Link>
                                    </ReviewBtn>
                                    {
                                        review && review.map(v =>
                                            <ReviewDiv>                                            
                                                <div>

                                                작성자 : {v.email} <br/>

                                                맛 : {
                                                    v.flavor === 1 ? <StarSpan2>⭐</StarSpan2> : v.flavor === 2 ? <StarSpan2>⭐⭐</StarSpan2> 
                                                    : v.flavor === 3 ? <StarSpan2>⭐⭐⭐</StarSpan2> 
                                                    : v.flavor === 4 ? <StarSpan2>⭐⭐⭐⭐</StarSpan2> : v.flavor === 5 ? <StarSpan2>⭐⭐⭐⭐⭐ </StarSpan2> : '평가 정보 없음'
                                                    } &nbsp;
                                                분위기 : {
                                                    v.atmosphere === 1 ? <StarSpan2>⭐</StarSpan2> : v.atmosphere === 2 ? <StarSpan2>⭐⭐</StarSpan2> 
                                                    : v.atmosphere === 3 ? <StarSpan2>⭐⭐⭐</StarSpan2> 
                                                    : v.atmosphere === 4 ? <StarSpan2>⭐⭐⭐⭐</StarSpan2> : v.atmosphere === 5 ? <StarSpan2>⭐⭐⭐⭐⭐</StarSpan2> : '평가 정보 없음'
                                                    } &nbsp;
                                                가성비 : {
                                                    v.cheap === 1 ? <StarSpan2>⭐</StarSpan2> : v.cheap === 2 ? <StarSpan2>⭐⭐</StarSpan2> 
                                                    : v.cheap === 3 ? <StarSpan2>⭐⭐⭐</StarSpan2> 
                                                    : v.cheap === 4 ? <StarSpan2>⭐⭐⭐⭐</StarSpan2> : v.cheap === 5 ? <StarSpan2>⭐⭐⭐⭐⭐</StarSpan2> : '평가 정보 없음'
                                                } &nbsp;
                                                서비스 : {
                                                    v.service === 1 ? <StarSpan2>⭐</StarSpan2> : v.service === 2 ? <StarSpan2>⭐⭐</StarSpan2> 
                                                    : v.service === 3 ? <StarSpan2>⭐⭐⭐</StarSpan2> 
                                                    : v.service === 4 ? <StarSpan2>⭐⭐⭐⭐</StarSpan2> : v.service === 5 ? <StarSpan2>⭐⭐⭐⭐⭐</StarSpan2> : '평가 정보 없음'
                                                    } <br/>
                                                TXT : {v.text} 
                                                </div>
                                                <div>
                                                    { email === v.email ? <Ebutton><a href='/mypage'>수정하기</a></Ebutton> : null}
                                                </div>
                                            </ReviewDiv>
                                        )
                                    }
                                
                            </div>
                        </ContentBox>
                        <div style={{ textAlign:'center' }}>
                            <Btn><Link to="/">뒤로 가기</Link></Btn>
                        </div>
                    </>
                }
            </Container>
        </Background>
    )
};

export default Shop;