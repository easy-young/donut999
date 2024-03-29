import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { theme_photo_request } from "../../reducers/theme";
import { Background, Container, StationName, CloseBtn, StoreBox, StoreName, StoreAddress, StoreScore } from '../Index';

const Photo = () => {
    const { result } = useSelector(state => state.theme);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: theme_photo_request.toString()});
    }, [dispatch]);
    return (
        <Background>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '2%' }}>
                    <StationName>📸 인생샷 도넛</StationName>
                    <CloseBtn><Link to='/' style={{ color: 'black' }}>X</Link></CloseBtn>
                </div>
                {
                    result.length > 0 && result.map((v, i) => {
                        return (
                            <StoreBox key={i}>
                                <img
                                    src={
                                        v.img1 !== null ?
                                        `http://localhost:4000/uploads/${v.img1}`
                                        :
                                        v.img2 !== null ?
                                        `http://localhost:4000/uploads/${v.img2}`
                                        :
                                        v.img3 !== null ?
                                        `http://localhost:4000/uploads/${v.img3}`
                                        : 
                                        `http://localhost:4000/uploads/defaultImage.jpg`
                                    }
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
                                    <StoreScore>🌟 : {v.average === null ? '리뷰 없음' : v.average}</StoreScore>
                                </div>
                            </StoreBox>
                        )
                    })
                }
            </Container>
        </Background>
    )
};

export default Photo;