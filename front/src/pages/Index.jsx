
const Index = () => {

    let isdragging = null
    let originX = null
    let originY = null
    let originLeft = null
    let originTop = null

    const mouseDownHandler = (e) =>{
        isdragging = true   
        originX = e.clientX
        originY = e.clientY
        console.log(originX,originY)//브라우저 좌표
        originLeft = e.target.parentNode.offsetLeft
        originTop = e.target.parentNode.offsetTop
        console.log("부모기준",originLeft, originTop) // 부모 div기준 좌표
        console.log(e.target.parentNode)

    }

    const mouseMoveHandler = (e) => {
        if(isdragging){
            const diffX = e.clientX - originX
            const diffY = e.clientY - originY
            console.log("븽브이",diffX, diffY)
            // e.target.parentNode.style = originLeft + diffX + "px"
            // e.target.parentNode.style = originTop + diffY + "px"
            const containerWidth = e.target.parentNode.style.width.replace("px", "")
            const containerHeigt = e.target.parentNode.style.height.replace("px", "")
            const imgBoxWidth = e.target.style.width.replace("px", "")
            const imgBoxHeight = e.target.style.height.replace("px", "")
            // console.log(containerWidth,containerHeigt,imgBoxWidth,imgBoxHeight)
            const endOfXPoint = containerWidth - imgBoxWidth //200px
            const endOfYPoint = containerHeigt - imgBoxHeight //444px
            console.log(endOfXPoint, endOfYPoint)
            e.target.style.left = `${Math.min(Math.max(0, originLeft + diffX),endOfXPoint)}px`
            e.target.style.top = `${Math.min(Math.max(0, originTop+ diffY),endOfYPoint)}px`
            console.log(e.target.style.left,e.target.style.top)
        }
    }

    const mouseUpHandler = (e) => {
        isdragging = false
    }

    const mapBoxStyle = {
        width:"1000px",
        background:"black",
        height:"400px",
        position:"relative",
        margin:"0 auto",
        zIndex:"3",
        overflow:"hidden",
    } // 부모
    const routeMapStyle = {
        width:"1200px",
        height:"756px",
        margin:"0 auto",
        position:"absolute",
        zIndex:"1",
        cursor:"pointer",
        top:"0",
        left:"0"


    } //자식
    return (
        <div style={mapBoxStyle}>
            <img style={routeMapStyle} alt="route_map" src="img/route_map.png"
            onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}
            onMouseUp={mouseUpHandler}/>
        </div>
    )
};

export default Index;