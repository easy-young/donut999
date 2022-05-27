import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rank_total_request, rank_flavor_request, rank_atmosphere_request, rank_cheap_request, rank_service_request } from "../reducers/rank";

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
    outline: 2px solid #E16A93;


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
    /* padding: 40px; */
    background:#FFFFE6;
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

    .visible{
        width:90%;
        height:90%;
        padding: 10px 0;
        box-sizing:border-box;
        overflow: scroll;
        position:relative;
    }
`;

const SmallDiv = styled.div`
    width: 90%;
    height: 25%;
    margin: 0 auto;
    margin-bottom: 3%;
    display: flex;
    border-left:0.5px solid #e3e3c4;
    border-top:0.5px solid #e3e3c4;
    border-right: 3px solid #c7c793;
    border-bottom: 3px solid #c7c793;
    border-radius:5px;
    padding:10px;
    display:flex;
    justify-content:space-around;
    background: #FFFFED;

    .ranking_txt{
        width:80%;
        height:100%;
        display:flex;
        text-align:center;
    }

    .rank_name{
        width:50%;
        height:100%;
        border-left: 1px solid #dcdcdc;
        display:flex;
        flex-direction:column;
        justify-content:center;
        font-size:18px;
    }

    .rank_info{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        border-left: 1px solid #dcdcdc;
        font-size:16px;
        
    }
`;

const StyledLink2 = styled(Link)`
    color: black;
    :hover {
        color: pink;
    }
`;

const Rank = () => {
    const dispatch = useDispatch();
    const { topFive } = useSelector(state => state.rank);
    useEffect(() => {
        dispatch(rank_total_request());
    }, [dispatch]);
    const total = () => {
        dispatch(rank_total_request());
    };
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
                <Tab style={{ marginLeft: '2%' }} onClick={total}>전체</Tab>
                <Tab onClick={flavor} style={{background:"#FFB788"}}>맛</Tab>
                <Tab onClick={atmosphere} style={{background:"#FFFF8C"}}>분위기</Tab>
                <Tab onClick={cheap}  style={{background:"#98FB98"}}>가성비</Tab>
                <Tab onClick={service} style={{background:"#87F5F5"}}>서비스</Tab>
                <Tab style={{ float: 'right', background: '#CE69E7' }}><StyledLink to='/'>뒤로 가기</StyledLink></Tab>
                <BigDiv>
                    <div className="visible">
                        {
                            topFive && topFive.map((v, i) => 
                            (
                                <SmallDiv key={i}>
                                    <span>
                                        <img 
                                            src={require(`../../public/img/donut_store/${topFive[i].idx}_3.jpg`)}
                                            style={{ borderRadius: '6px' }}
                                            width={80}
                                            height={'100%'}/>
                                    </span>
                                    <div className="ranking_txt"style={{ marginLeft: '20px'}}>
                                        <div className="rank_name">
                                            <div>
                                                {i==0 && <span>🥇 </span>}
                                                {i==1 && <span>🥈 </span>}
                                                {i==2 && <span>🥉 </span>}
                                                {i+1}위 : <StyledLink2 to={'/shop/'+topFive[i].idx}>{topFive[i].name}</StyledLink2>
                                            </div>
                                        </div>
                                        <div className="rank_info">
                                            <div>주소 : {topFive[i].address}</div>
                                            <div>운영 시간 : {topFive[i].operhour}</div>
                                        </div>
                                    </div>
                                </SmallDiv>
                            ))
                        }
                    </div>
                </BigDiv>
            </Container>
        </Background>
    )
};

export default Rank;