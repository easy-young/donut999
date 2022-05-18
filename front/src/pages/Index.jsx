import styled from 'styled-components';
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { AutoComplete } from 'antd';
// import MapImg from '../../public/img/route_map.png'
import { useState, useRef, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { check_map_success } from '../reducers/routemap';

<style>
    
</style>
const Index = () => {

    const Body = styled.body`
        margin: 0;
        padding: 0;
        width:100vw;
        height:1500px;
        background:pink;
    `

    const MapBox = styled.div `
    /* width:1000px; */
    width:80vw;
    /* height:500px; */
    height:80vh;
    position:relative;
    margin:0 auto;
    box-sizing:border-box;
    z-index:6;
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
    /* height:330%; */
    /* height:0; */
    /* width:1824px;
    height:1150px; */
    margin: 0 auto;
    position: absolute;
    z-index:5;
    cursor:pointer;
    /* background-size: contain;
    background-repeat:no-repeat; */

    /* top:-50%;
    left:-50%; */
    /* background-image: url(http://localhost:3000/img/route_map.png); */
    /* background-color:red; */
    @media (max-width: 600px) {
        width: 422%;
        height: auto;
    }
    
    ` //자식

    const Station = styled.div `
    position:absolute;
    width:20%;
    height:20%;
    background:yellow;
    z-index:5;
    top:50%;
    left:50%;
    
    `


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
            const containerWidth = e.target.parentNode.parentNode.offsetWidth
            const containerHeigt = e.target.parentNode.parentNode.offsetHeight
            const imgBoxWidth = e.target.offsetWidth
            const imgBoxHeight = e.target.offsetHeight
            console.log("길이들",containerWidth, containerHeigt,imgBoxWidth,imgBoxHeight)
            const endOfXPoint = containerWidth - imgBoxWidth //200px
            const endOfYPoint = containerHeigt - imgBoxHeight //444px
            console.log("최대",endOfXPoint, endOfYPoint)

            e.target.style.left = `${Math.max(Math.min(0, originLeft + diffX),endOfXPoint)}px`
            e.target.style.top = `${Math.max(Math.min(0, originTop+ diffY),endOfYPoint)}px`
            console.log(" asdfasdf", e.target.style.left)
            console.log("스타일...",e.target.style.left,e.target.style.top)
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
            const containerWidth = e.target.parentNode.parentNode.offsetWidth
            const containerHeigt = e.target.parentNode.parentNode.offsetHeight
            const imgBoxWidth = e.target.width
            const imgBoxHeight = e.target.height
            console.log("길이들d",containerWidth, containerHeigt,imgBoxWidth,imgBoxHeight)
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

    const imgRef = useRef()
    const imgParent = useRef()

    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch({type:check_map_success.toString()})

        const map_img = document.querySelector('#map_img')
        const imgHeight = map_img.offsetHeight //이미지 높이
        console.log("이미지dsf",imgHeight)
        const imgParentBox = document.querySelector('#map_img').parentNode//이미지박스
        console.log(imgParentBox.style.height)
        imgParentBox.style.height = imgHeight+"px"
        console.log("높이",imgParentBox.style.height)
        
    },[dispatch])


    return (
        <Body>
            <BrowserView>

                    <MapBox>
                        <div id='img_box' style={{width:"240%", height:"auto"}}>
                            <RouteMap alt="route_map" src="img/route_map.png" id="map_img"
                                onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}
                                onMouseUp={mouseUpHandler}>
                                {/* <Station/> */}
                            </RouteMap>
                        </div>

                        {/* </div> */}
                        {/* <RouteMap
                            onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}
                            onMouseUp={mouseUpHandler}>

                        </RouteMap> */}

                    </MapBox>
            </BrowserView>
            <MobileView>
                <MapBox>
                    <div id="img_box" style={{width:"422%", height:"auto",background:"blue"}}
                        onTouchStart={touchStartHandler}
                        onTouchMove={touchMoveHandler}
                        onTouchEnd={touchEndHandler}>
                        <RouteMap alt="route_map" src="img/route_map.png" id="map_img" >
                        </RouteMap>
                    </div>
                    {/* <RouteMap
                        onTouchStart={touchStartHandler}
                        onTouchMove={touchMoveHandler}
                        onTouchEnd={touchEndHandler}>

                    </RouteMap> */}
                </MapBox>
            </MobileView>
        </Body>

    )
};

export default Index;