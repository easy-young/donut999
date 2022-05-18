import styled from 'styled-components';
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
// import MapImg from '../../public/img/route_map.png'
const Index = () => {

    const Body = styled.body`
        margin: 0;
        padding: 0;
        width:100vw;
        height:1500px;
    `

    const MapBox = styled.div `
    /* width:1000px; */
    width:80vw;
    background:black;
    /* height:500px; */
    height:80vh;
    background-color:red;
    position:relative;
    margin:0 auto;
    box-sizing:border-box;
    z-index:3;
    overflow:hidden;
    border-radius:50px;
    margin-top:5vh;
    @media (max-width: 600px) {
        /* width: 340px; */
        width:80vw;
        height:80vh;
        /* height: 200px; */
    }

    `


 // 부모
    const RouteMap = styled.img`

    width:240%;
    /* height:350%; */
    margin: 0 auto;
    position: absolute;
    z-index:1;
    cursor:pointer;
    top:-50%;
    left:-50%;
    @media (max-width: 600px) {
        width: 422%;
        /* height: 129%; */
    }
    
    `

    const Station = styled.div `
    width:20%;
    height:20%;
    background:yellow;
    z-index:5;
    
    `

 //자식

    let isdragging = null
    let originX = null
    let originY = null
    let originLeft = null
    let originTop = null

    const mouseDownHandler = (e) =>{
        // console.log('여기는 웹',isMobile)
        isdragging = true   
        originX = e.clientX
        originY = e.clientY
        // console.log(originX,originY)//브라우저 좌표
        originLeft = e.target.offsetLeft
        originTop = e.target.offsetTop
        // console.log("부모기준현재위치",originLeft, originTop) // 부모 div기준 좌표
        console.log("현재위치",originX, originY)

    }

    const mouseMoveHandler = (e) => {
        if(isdragging){
            // console.log('현재마우스좌표', originLeft,originTop)
            // console.log("이동위치",e.clientX, e.clientY)
            const diffX = e.clientX - originX
            const diffY = e.clientY - originY
            // console.log("얼마나 이동했나요?",diffX, diffY)
            // e.target.parentNode.style = originLeft + diffX + "px"
            // e.target.parentNode.style = originTop + diffY + "px"
            const containerWidth = e.target.parentNode.offsetWidth
            const containerHeigt = e.target.parentNode.offsetHeight
            const imgBoxWidth = e.target.width
            const imgBoxHeight = e.target.height
            console.log("길이들",containerWidth, containerHeigt,imgBoxWidth,imgBoxHeight)
            const endOfXPoint = containerWidth - imgBoxWidth //200px
            const endOfYPoint = containerHeigt - imgBoxHeight //444px
            // console.log("최대",endOfXPoint, endOfYPoint)

            e.target.style.left = `${Math.max(Math.min(0, originLeft + diffX),endOfXPoint)}px`
            e.target.style.top = `${Math.max(Math.min(0, originTop+ diffY),endOfYPoint)}px`
            // console.log(" asdfasdf", e.target.style.left)
            // console.log("스타일...",e.target.style.left,e.target.style.top)
        }
    }

    const mouseUpHandler = (e) => {
        isdragging = false
    }

    const touchStartHandler = (e) =>{
        // console.log('여기는 모바일',isMobile)
        isdragging = true   
        originX = e.touches[0].clientX
        originY = e.touches[0].clientY
        // console.log(originX,originY)//브라우저 좌표
        originLeft = e.target.offsetLeft
        originTop = e.target.offsetTop
        // console.log("부모기준",originLeft, originTop) // 부모 div기준 좌표
        // console.log("시작위치",originX, originY)
    }

    const touchMoveHandler = (e) =>{
        // console.log('되긴하니?')
        if(isdragging){
            
            
            // console.log('현재마우스좌표', originLeft,originTop)
            // console.log("이동위치",e.touches[0].clientX, e.touches[0].clientY)
            const diffX = e.touches[0].clientX - originX
            const diffY = e.touches[0].clientY - originY
            // console.log("얼마나 이동했나요?",diffX, diffY)
            // e.target.parentNode.style = originLeft + diffX + "px"
            // e.target.parentNode.style = originTop + diffY + "px"
            const containerWidth = e.target.parentNode.offsetWidth
            const containerHeigt = e.target.parentNode.offsetHeight
            const imgBoxWidth = e.target.width
            const imgBoxHeight = e.target.height
            console.log("길이들",containerWidth, containerHeigt,imgBoxWidth,imgBoxHeight)
            const endOfXPoint = containerWidth - imgBoxWidth //200px
            const endOfYPoint = containerHeigt - imgBoxHeight //444px
            // console.log("최대",endOfXPoint, endOfYPoint)

            e.target.style.left = `${Math.max(Math.min(0, originLeft + diffX),endOfXPoint)}px`
            e.target.style.top = `${Math.max(Math.min(0, originTop+ diffY),endOfYPoint)}px`
            // console.log(" asdfasdf", e.target.style.left)
            // console.log("스타일...",e.target.style.left,e.target.style.top)
        }
    }

    const touchEndHandler = ()=>{
        isdragging = false
    }

    return (
        <Body>
            <BrowserView>
                <div style={{width:"100%", height:"auto"}}>
                    <MapBox>
                        <RouteMap alt="route_map" src="img/route_map.png"
                            onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}
                            onMouseUp={mouseUpHandler}
                            >

                        </RouteMap>
                        <Station/>
                    </MapBox>
                </div>
            </BrowserView>
            <MobileView>
                <MapBox>
                    <RouteMap alt="route_map" src="img/route_map.png"
                        onTouchStart={touchStartHandler}
                        onTouchMove={touchMoveHandler}
                        onTouchEnd={touchEndHandler}
                        >
                    </RouteMap>
                </MapBox>
            </MobileView>
        </Body>

    )
};

export default Index;