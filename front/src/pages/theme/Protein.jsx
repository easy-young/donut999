import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { protein_request } from "../../reducers/theme.js";
// import { Background, Container, StationName, CloseBtn, StoreBox, StoreName, StoreAddress } from '../Index';

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 700px;
    border-radius: 30px;
    background-color: rgb(255, 255, 255);
`;

const StationName = styled.div`
    position: absolute;
    top: 38px;
    left: 240px;
    font-size: 24px;
    font-weight: bolder;
`;

const CloseBtn = styled.button`
    position: absolute;
    width: 36px;
    height: 36px;
    top: 38px;
    right: 240px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background: #fcdcff;

    :hover {
        cursor: pointer;
    }
`;

const StoreBox = styled.div`
    width: 1040px;
    height: 280px;
    padding: 20px;
    border-radius: 20px;
    background: #ffeddf;
`;

const StoreName = styled.div`
    position: relative;
    bottom: 220px;
    left: 300px;
    font-size: 22px;
`;

const StoreAddress = styled.div`
    position: relative;
    bottom: 210px;
    left: 300px;
`;

const StoreScore = styled(StoreAddress)`
    bottom: 200px;
`;

const Protein = () => {
    const { result } = useSelector(state => state.theme.protein)
    console.log(result);
    const dispatch = useDispatch()
    useEffect( () => {  
        dispatch({type: protein_request.toString()})
    }, [dispatch])
    const Close = () => {
        // dispatch({type: station_exit.toString()});
    };

    return (
        <Background>
            <Container>
                <StationName>프로틴 맛집</StationName>
                <CloseBtn onClick={Close}>X</CloseBtn>
                {
                    result.length > 0 && result.map((v, i) => {
                        return(
                            result.length > 0 &&
                            <>
                                <div style={{ height: '20px' }}></div>
                                <StoreBox key={i}>
                                    <div>
                                        <img 
                                            src={require(`../../../public/img/donut_store/${v.idx}_1.jpg`)}
                                            style={{ borderRadius: '30px' }}
                                            width={240}
                                            height={240}
                                        />
                                        <StoreName>
                                            <Link 
                                                to={`/shop/${v.idx}`}
                                                style={{ color: 'black' }}
                                            >
                                                {v.name}
                                            </Link>
                                        </StoreName>
                                        <StoreAddress>
                                            주소 : {v.address}
                                        </StoreAddress>
                                        <StoreScore>평점 : 5</StoreScore>
                                    </div>
                                </StoreBox>
                            </>
                        )
                    })
                }
            </Container>
        </Background>
    )
};

export default Protein;