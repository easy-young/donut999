import styled, { keyframes } from 'styled-components';
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { AutoComplete } from 'antd';
// import MapImg from '../../public/img/route_map.png'
import { useState, useRef, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { check_map_success } from '../reducers/routemap';
import { user_login_failure, user_login_request, user_login_success, 
    user_logout_request, user_logout_success } from '../reducers/user';


const Index = () => {

    const Body = styled.body`
        margin: 0;
        padding: 0;
        width:100vw;
        height:1500px;
        background:pink;
    `

    const MapBox = styled.div `
        /* 보이는 영역입니다. */
        /* width:1000px; */
        width:80vw;
        /* height:500px; */
        height:80vh;
        position:relative;
        margin:0 auto;
        box-sizing:border-box;
        z-index:6;
        overflow:hidden;
        /* top: 50%;
        right: 10%; */
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
        /* 이미지 영역입니다. */
        width:150%;
        /* margin: 0 auto; */
        position: absolute;
        z-index:5;
        cursor:pointer;
        /* top:-50%;
        left:-50%; */

        @media (max-width: 600px) {
            width: 422%;
            height: auto;
        }
        
        ` //자식

    const StationBox = styled.div`
        /* 이미지 담은 박스입니다. */
        z-index:10;
        background:red;
        position: relative;
        @media (max-width: 600px) {
            width: 422%;
            height: auto;
        }
    `

    const twinkle = keyframes`
        transform-origin:left top;
        0% {
            transform:rotate(0deg);
        }
        25%{
            transform:rotate(15deg);
        }
        50%{
            transform:rotate(30deg);
        }
        75%{
            transform:rotate(15deg);
        }
        100% {
            transform:rotate(0deg);
        }
    `

    const Station = styled.div `
        position:absolute;
        width:1.0%;
        background:#f4c704;
        z-index:5;
        /* top:14.2%;
        left:110%; */
        border-radius:50%;
        cursor:pointer;
    
    
        :after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
        :hover {
            background:none;
            background-image:url('img/choco_donut.png');
            background-repeat: no repeat;
            background-size: 120% 120%;
            width:2.0%;
            border-radius:none;
            background-position: 10% 10%;
            animation: ${twinkle} 1.0s linear infinite;
    

        }

    `


    let isdragging = null
    let originX = null
    let originY = null
    let originLeft = null
    let originTop = null

    const [height,setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const mouseDownHandler = (e) =>{
        console.log('여기는 웹',isMobile)
        isdragging = true
        originX = e.clientX
        originY = e.clientY
        // console.log(originX,originY)//브라우저 좌표
        originLeft = e.target.parentNode.offsetLeft
        originTop = e.target.parentNode.offsetTop
        // console.log("부모기준현재위치",originLeft, originTop) // 부모 div기준 좌표
        console.log("현재위치",originX, originY)

    }

    const mouseMoveHandler = (e) => {
        if(isdragging){
            console.log("현재 이벤트 엘리먼트",e.target.parentNode)
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
            
            // e.target.style.left = `${Math.max(Math.min(0, originLeft + diffX),endOfXPoint)}px`
            // e.target.style.top = `${Math.max(Math.min(0, originTop+ diffY),endOfYPoint)}px`
            e.target.parentNode.style.left = `${Math.max(Math.min(0, originLeft + diffX),endOfXPoint)}px`
            e.target.parentNode.style.top = `${Math.max(Math.min(0, originTop+ diffY),endOfYPoint)}px`
            // console.log(" asdfasdf", e.target.style.left)
            // console.log("스타일...",e.target.style.left,e.target.style.top)
        }
    }

    const mouseUpHandler = (e) => {
        isdragging = false
    }

    //모바일
    const touchStartHandler = (e) =>{
        console.log('여기는 모바일',isMobile)
        isdragging = true   
        originX = e.touches[0].clientX
        originY = e.touches[0].clientY
        console.log(originX,originY)//브라우저 좌표
        originLeft = e.target.parentNode.offsetLeft
        originTop = e.target.parentNode.offsetTop
        console.log("부모기준",originLeft, originTop) // 부모 div기준 좌표
        console.log("시작위치",originX, originY)
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
            const imgBoxWidth = e.target.offsetWidth
            const imgBoxHeight = e.target.offsetHeight
            console.log("길이들d",containerWidth, containerHeigt,imgBoxWidth,imgBoxHeight)
            const endOfXPoint = containerWidth - imgBoxWidth //200px
            const endOfYPoint = containerHeigt - imgBoxHeight //444px
            console.log("최대",endOfXPoint, endOfYPoint)

            e.target.parentNode.style.left = `${Math.max(Math.min(0, originLeft + diffX),endOfXPoint)}px`
            e.target.parentNode.style.top = `${Math.max(Math.min(0, originTop+ diffY),endOfYPoint)}px`
            // console.log(" asdfasdf", e.target.style.left)
            // console.log("스타일...",e.target.style.left,e.target.style.top)
        }
    }

    const touchEndHandler = ()=>{
        isdragging = false
    }

    const imgRef = useRef(0)
    // const imgParent = useRef()

    const dispatch = useDispatch()
    
    // const dispatch = useDispatch()
    const handleReSize = () => {

        setHeight( imgRef.current.height )
        if(window.innerWidth<600){
            setWidth( window.innerWidth*4.22)
        } else{
            setWidth( window.innerWidth*1.5)
        }

        //웹, 모바일 나누기
        // localStorage.setItem('height',imgRef.current.height)
        // console.log('됐음', localStorage.getItem('height'))
    }

    useEffect(()=>{
        console.log('바뀜')
        
        // if ( imgRef.current.height === 0 ){

        //     let localheight =  localStorage.getItem('height')
            

        //     console.log('새로고침을 진행함 height:',height,'ref height :',imgRef.current.height ,'localstroe : ', localheight)
        // } else {
        //     localStorage.setItem('height',imgRef.current.height === null ? parseInt(localStorage.getItem('height')) : imgRef.current.height)
        //     console.log('componentDidMount : ', imgRef.current.height , parseInt(localStorage.getItem('height')))
        //     setHeight(1)
        // }

        window.addEventListener('resize', handleReSize)
        return () => {
            window.removeEventListener('resize',handleReSize)
        }
        // dispatch({type:check_map_success.toString()})
        
        // const map_img = document.querySelector('#map_img')
        // const imgHeight = map_img.offsetHeight //이미지 높이
        // console.log("이미지dsf",imgHeight)
        // const imgParentBox = document.querySelector('#map_img').parentNode//이미지박스
        // console.log(imgParentBox.style.height)
        // imgParentBox.style.height = imgHeight+"px;"
        // console.log("높이ds",imgParentBox.style.height)
        
    },[width,height])

    const img_box = document.querySelector('#img_box')
    console.log("내 화면의 너비:",window.outerWidth,"내 화면의 높이", window.innerHeight) //리사이징마다 갱신
    const clickStation = (e)=>{
        console.log("마우스 클릭",e.target)
    }
    const mouseOver =  (e)=>{
        // console.log("마우스 오버",e.target)
        const donut_top = e.target.style.top //원래 좌표
        const donut_left = e.target.style.left
        // console.log("원래좌표:",donut_top,donut_left)
        e.target.style.top = donut_top.replace("%","")-0.9 + "%"
        e.target.style.left = donut_left.replace("%","")-0.6 + "%"
        // console.log("바뀐 좌표", e.target.style.left)
    }
    const mouseOut = (e)=>{
        // console.log("마우스 아웃",e.target)
        const donut_top = e.target.style.top
        const donut_left = e.target.style.left
        // console.log('아웃 전 좌표:', e.target.style.top,donut_top)
        const before_change_top = donut_top.replace("%","") * 1
        const before_change_left = donut_left.replace("%","") * 1
        // console.log("계산값은?:", before_change_left + 0.6 + "%")
        e.target.style.top = before_change_top + 0.9 + "%"
        e.target.style.left = before_change_left + 0.6 + "%"
        // console.log('원상태로 좌표:', e.target.style.left)


    }
    // const top =window.innerHeight * 14.2 + "%"

    return (
        <Body>
            <BrowserView>
                    <MapBox>
                        <StationBox id='img_box'style={{height, width}}>
                            <RouteMap alt="route_map" src="img/route_map.png" id="map_img" ref={imgRef}
                            style={{width}}
                                onLoad={ handleReSize }
                                onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}
                                onMouseUp={mouseUpHandler}>
                            </RouteMap>
                            {/* 경의-중앙선 */}
                            {/* 회기 */}
                            <Station style={{top:"29.5%", left:"71.8%"}} name="Hoegi"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 용산 */}
                            <Station style={{top:"55%", left:"44.3%"}} name="Yongsan"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 효창공원앞 */}
                            <Station style={{top:"48.6%", left:"41.7%"}} name="Hyochanggongwonap"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 공덕 */}
                            <Station style={{top:"45.8%", left:"40.4%"}} name="Hyochanggongwonap"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 홍대입구 */}
                            <Station style={{top:"39%", left:"32.7%"}} name="Hongdaeipgu"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 가좌 */}
                            <Station style={{top:"28.5%", left:"31.8%"}} name="Gajwa"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>                            
                            {/* 수색 */}
                            <Station style={{top:"25.5%", left:"26%"}} name="Susaek"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 디지털미디어시티 */}
                            <Station style={{top:"28.3%", left:"27.8%"}} name="DMC"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>
                            {/* 1호선 */}
                            {/* 종로3가 */}
                            <Station style={{top:"29.2%", left:"47.9%"}} name="Jongno3ga"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>     
                            {/* 종각 */}
                            <Station style={{top:"30.5%", left:"45.2%"}} name="Jonggak"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 가산디지털단지 */}
                            <Station style={{top:"71.3%", left:"28.7%"}} name="Gasan"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>      
                            {/* 2호선 */}
                            {/* 뚝섬 */}
                            <Station style={{top:"40.9%", left:"68.3%"}} name="Ttukseom"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>  
                            {/* 성수 */}
                            <Station style={{top:"44%", left:"68.5%"}} name="Seongsu"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>        
                            {/* 건대 입구 */}
                            <Station style={{top:"48.3%", left:"68.5%"}} name="Geondaeipgu"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>         
                            {/* 구로 디지털 단지 */}
                            <Station style={{top:"74.6%", left:"33.4%"}} name="Gurodigital"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>        
                            {/* 신림 */}
                            <Station style={{top:"77.2%", left:"38.8%"}} name="Sillim"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>       
                            {/* 이대 */}
                            <Station style={{top:"37%", left:"34%"}} name="Idae"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>     
                            {/* 합정 */}
                            <Station style={{top:"48.6%", left:"31.6%"}} name="Hapjeong"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>       
                            {/* 상왕십리 */}
                            <Station style={{top:"35%", left:"60.4%"}} name="Sangwangsimni"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>        
                            {/* 양천구청 */}
                            <Station style={{top:"63.9%", left:"25.6%"}} name="Yangcheongucheong"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>   
                            {/* 신정네거리 */}
                            <Station style={{top:"63.5%", left:"22%"}} name="Sinjeongnegeori"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>           
                            {/* 까치산 */}
                            <Station style={{top:"59.2%", left:"20%"}} name="Kkachisan"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 3호선 */}
                            {/* 경복궁 */}
                            <Station style={{top:"18.6%", left:"48.1%"}} name="Gyeongbokgung"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>   
                            {/* 안국 */}
                            <Station style={{top:"23.6%", left:"48.1%"}} name="Anguk"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>                               
                            {/* 금호 */}
                            <Station style={{top:"49%", left:"55.9%"}} name="Geumho"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 압구정 */}
                            <Station style={{top:"59.3%", left:"56%"}} name="Apgujeong"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>       
                            {/* 신사 */}
                            <Station style={{top:"62.1%", left:"56%"}} name="Sinsa"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>       
                            {/* 고속터미널 */}
                            <Station style={{top:"68.1%", left:"56%"}} name="Gosokterminal"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 4호선 */}                           
                            {/* 쌍문 */}
                            <Station style={{top:"14.2%", left:"73.5%"}} name="Ssangmun"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station> 
                            {/* 한성대입구 */}
                            <Station style={{top:"18.8%", left:"52.1%"}} name="HansungUniv"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 회현 */}
                            <Station style={{top:"41.1%", left:"45.6%"}} name="Hoehyeon"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>  
                            {/* 5호선 */}  
                            {/* 마장 */}
                            <Station style={{top:"35.8%", left:"67.9%"}} name="Majang"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>  
                            {/* 마포 */}
                            <Station style={{top:"48.6%", left:"40.4%"}} name="Mapo"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station> 
                            {/* 영등포 시장 */}
                            <Station style={{top:"61.7%", left:"35%"}} name="Yeongdeungpo"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>  
                            {/* 발산 */}
                            <Station style={{top:"47.4%", left:"14.2%"}} name="Balsan"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>           
                            {/* 마곡 */}
                            <Station style={{top:"41.4%", left:"14.2%"}} name="Magok"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>   
                            {/* 6호선 */}
                            { /* 마포구청 */}
                            <Station style={{top:"41%", left:"27.8%"}} name="Mapogucheong"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>      
                            { /* 망원 */}
                            <Station style={{top:"46.1%", left:"28%"}} name="Mangwon"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>     
                            {/* 상수 */}
                            <Station style={{top:"48.6%", left:"34%"}} name="Sangsu"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>  
                            {/* 녹사평 */}
                            <Station style={{top:"48.6%", left:"50.2%"}} name="Noksapyeong"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>     
                            {/* 이태원 */}
                            <Station style={{top:"48.6%", left:"52%"}} name="Itaewon"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 한강진 */}
                            <Station style={{top:"48.6%", left:"53.8%"}} name="Hangangjin"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>     
                            {/* 창신 */}
                            <Station style={{top:"24.5%", left:"56.3%"}} name="Changsin"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>    
                            {/* 7호선 */}   
                            {/* 어린이대공원 */}
                            <Station style={{top:"44.1%", left:"71.3%"}} name="Seongsu"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>   
                            {/* 용마산 */}
                            <Station style={{top:"35.8%", left:"76.6%"}} name="Yongmasan"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>  
                            {/* 중화 */}
                            <Station style={{top:"27.1%", left:"82%"}} name="Junghwa"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>          
                           {/* 공릉 */}
                           <Station style={{top:"19.5%", left:"82.35%"}} name="Gongneung"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>     
                           {/* 8호선 */}  
                            {/* 석촌 */}
                            <Station style={{top:"71.2%", left:"72.1%"}} name="Seokchon"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>      
                            {/* 송파 */}
                            <Station style={{top:"71.2%", left:"76.9%"}} name="Songpa"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>            
                            {/* 남위례 */}
                            <Station style={{top:"85.2%", left:"80.8%"}} name="Namwirye"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>        
                            {/* 9호선 */}
                            {/* 삼성중앙 */}
                            <Station style={{top:"71.2%", left:"65.3%"}} name="Samseongjungang"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>          
                            {/* 송파나루 */}
                            <Station style={{top:"68.5%", left:"77.2%"}} name="Songpa"
                                onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            </Station>                                                   
                        </StationBox>
<<<<<<< HEAD
=======

                        {/* </div> */}
                        {/* <RouteMap
                            onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}
                            onMouseUp={mouseUpHandler}>

                        </RouteMap> */}    
>>>>>>> 5821ad0077066114991ad88551656a2b1e70d099
                    </MapBox>
            </BrowserView>
            <MobileView>
                <MapBox>
                    <StationBox id='img_box'style={{height, width}}>
                        <RouteMap alt="route_map" src="img/route_map.png" id="map_img" ref={imgRef}
                        style={{width}}
                            onLoad={ handleReSize }
                            onTouchStart={touchStartHandler}
                            onTouchMove={touchMoveHandler}
                            onTouchEnd={touchEndHandler}>
                        </RouteMap>
                        {/* 경의-중앙선 */}
                        {/* 회기 */}
                        <Station style={{top:"29.5%", left:"71.8%"}} name="Hoegi"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 용산 */}
                        <Station style={{top:"55%", left:"44.3%"}} name="Yongsan"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 효창공원앞 */}
                        <Station style={{top:"48.6%", left:"41.7%"}} name="Hyochanggongwonap"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 공덕 */}
                        <Station style={{top:"45.8%", left:"40.4%"}} name="Hyochanggongwonap"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 홍대입구 */}
                        <Station style={{top:"39%", left:"32.7%"}} name="Hongdaeipgu"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 가좌 */}
                        <Station style={{top:"28.5%", left:"31.8%"}} name="Gajwa"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>                            
                        {/* 수색 */}
                        <Station style={{top:"25.5%", left:"26%"}} name="Susaek"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 디지털미디어시티 */}
                        <Station style={{top:"28.3%", left:"27.8%"}} name="DMC"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>
                        {/* 1호선 */}
                        {/* 종로3가 */}
                        <Station style={{top:"29.2%", left:"47.9%"}} name="Jongno3ga"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>     
                        {/* 종각 */}
                        <Station style={{top:"30.5%", left:"45.2%"}} name="Jonggak"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 가산디지털단지 */}
                        <Station style={{top:"71.3%", left:"28.7%"}} name="Gasan"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>      
                        {/* 2호선 */}
                        {/* 뚝섬 */}
                        <Station style={{top:"40.9%", left:"68.3%"}} name="Ttukseom"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>  
                        {/* 성수 */}
                        <Station style={{top:"44%", left:"68.5%"}} name="Seongsu"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>        
                        {/* 건대 입구 */}
                        <Station style={{top:"48.3%", left:"68.5%"}} name="Geondaeipgu"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>         
                        {/* 구로 디지털 단지 */}
                        <Station style={{top:"74.6%", left:"33.4%"}} name="Gurodigital"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>        
                        {/* 신림 */}
                        <Station style={{top:"77.2%", left:"38.8%"}} name="Sillim"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>       
                        {/* 이대 */}
                        <Station style={{top:"37%", left:"34%"}} name="Idae"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>     
                        {/* 합정 */}
                        <Station style={{top:"48.6%", left:"31.6%"}} name="Hapjeong"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>       
                        {/* 상왕십리 */}
                        <Station style={{top:"35%", left:"60.4%"}} name="Sangwangsimni"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>        
                        {/* 양천구청 */}
                        <Station style={{top:"63.9%", left:"25.6%"}} name="Yangcheongucheong"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>   
                        {/* 신정네거리 */}
                        <Station style={{top:"63.5%", left:"22%"}} name="Sinjeongnegeori"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>           
                        {/* 까치산 */}
                        <Station style={{top:"59.2%", left:"20%"}} name="Kkachisan"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 3호선 */}
                        {/* 경복궁 */}
                        <Station style={{top:"18.6%", left:"48.1%"}} name="Gyeongbokgung"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>   
                        {/* 안국 */}
                        <Station style={{top:"23.6%", left:"48.1%"}} name="Anguk"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>                               
                        {/* 금호 */}
                        <Station style={{top:"49%", left:"55.9%"}} name="Geumho"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 압구정 */}
                        <Station style={{top:"59.3%", left:"56%"}} name="Apgujeong"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>       
                        {/* 신사 */}
                        <Station style={{top:"62.1%", left:"56%"}} name="Sinsa"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>       
                        {/* 고속터미널 */}
                        <Station style={{top:"68.1%", left:"56%"}} name="Gosokterminal"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 4호선 */}                           
                        {/* 쌍문 */}
                        <Station style={{top:"14.2%", left:"73.5%"}} name="Ssangmun"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station> 
                        {/* 한성대입구 */}
                        <Station style={{top:"18.8%", left:"52.1%"}} name="HansungUniv"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 회현 */}
                        <Station style={{top:"41.1%", left:"45.6%"}} name="Hoehyeon"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>  
                        {/* 5호선 */}  
                        {/* 마장 */}
                        <Station style={{top:"35.8%", left:"67.9%"}} name="Majang"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>  
                        {/* 마포 */}
                        <Station style={{top:"48.6%", left:"40.4%"}} name="Mapo"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station> 
                        {/* 영등포 시장 */}
                        <Station style={{top:"61.7%", left:"35%"}} name="Yeongdeungpo"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>  
                        {/* 발산 */}
                        <Station style={{top:"47.4%", left:"14.2%"}} name="Balsan"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>           
                        {/* 마곡 */}
                        <Station style={{top:"41.4%", left:"14.2%"}} name="Magok"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>   
                        {/* 6호선 */}
                        { /* 마포구청 */}
                        <Station style={{top:"41%", left:"27.8%"}} name="Mapogucheong"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>      
                        { /* 망원 */}
                        <Station style={{top:"46.1%", left:"28%"}} name="Mangwon"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>     
                        {/* 상수 */}
                        <Station style={{top:"48.6%", left:"34%"}} name="Sangsu"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>  
                        {/* 녹사평 */}
                        <Station style={{top:"48.6%", left:"50.2%"}} name="Noksapyeong"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>     
                        {/* 이태원 */}
                        <Station style={{top:"48.6%", left:"52%"}} name="Itaewon"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 한강진 */}
                        <Station style={{top:"48.6%", left:"53.8%"}} name="Hangangjin"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>     
                        {/* 창신 */}
                        <Station style={{top:"24.5%", left:"56.3%"}} name="Changsin"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>    
                        {/* 7호선 */}   
                        {/* 어린이대공원 */}
                        <Station style={{top:"44.1%", left:"71.3%"}} name="Seongsu"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>   
                        {/* 용마산 */}
                        <Station style={{top:"35.8%", left:"76.6%"}} name="Yongmasan"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>  
                        {/* 중화 */}
                        <Station style={{top:"27.1%", left:"82%"}} name="Junghwa"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>          
                        {/* 공릉 */}
                        <Station style={{top:"19.5%", left:"82.35%"}} name="Gongneung"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>     
                        {/* 8호선 */}  
                        {/* 석촌 */}
                        <Station style={{top:"71.2%", left:"72.1%"}} name="Seokchon"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>      
                        {/* 송파 */}
                        <Station style={{top:"71.2%", left:"76.9%"}} name="Songpa"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>            
                        {/* 남위례 */}
                        <Station style={{top:"85.2%", left:"80.8%"}} name="Namwirye"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>        
                        {/* 9호선 */}
                        {/* 삼성중앙 */}
                        <Station style={{top:"71.2%", left:"65.3%"}} name="Samseongjungang"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>          
                        {/* 송파나루 */}
                        <Station style={{top:"68.5%", left:"77.2%"}} name="Songpa"
                            onClick={clickStation} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        </Station>                                                   
                    </StationBox>
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