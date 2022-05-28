import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme_protein_request } from "../../reducers/theme.js";
import { Background, Container, StationName, CloseBtn, StoreBox, StoreName, StoreAddress, StoreScore } from '../Index';

const Protein = () => {
    const { result } = useSelector(state => state.theme);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch({type: theme_protein_request.toString()});
    }, [dispatch]);
    return (
        <Background>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '2%' }}>
                    <StationName>프로틴 맛집</StationName>
                    <CloseBtn><Link to='/' style={{ color: 'black' }}>X</Link></CloseBtn>
                </div>
                {
                    result.length > 0 && result.map((v, i) => {
                        return(
                            result.length > 0 &&
                            <>
                                {/* <div style={{ height: '20px' }}></div> */}
                                <StoreBox key={i}>
                                    <>
                                        <img 
                                            src={require(`../../../public/img/donut_store/${v.idx}_1.jpg`)}
                                            style={{ borderRadius: '30px' }}
                                            width={240}
                                            height={240}
                                        />
                                        <div style={{ marginLeft: '3%' }}>
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
                                    </>
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