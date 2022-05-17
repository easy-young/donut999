
const Index = () => {

    let isdragging = true
    let originX = null
    let originY = null
    let originLeft = null
    let originTop = null

    const mouseDownHandler = (e) =>{
        isdragging = true   
        originX = e.clientX
        originY = e.clientY
        console.log(originX,originY)
        originLeft = e.target.parentNode.offsetLeft
        originTop = e.target.parentNode.offsetTop
        console.log(originLeft, originTop)
        console.log(e.target.parentNode)

    }

    const mouseMoveHandler = (e) => {
        if(isdragging){
            const diffX = e.clientX - originX
            const diffY = e.clientY - originY
            // console.log(diffX, diffY)
            // e.target.parentNode.style = originLeft + diffX + "px"
            // e.target.parentNode.style = originTop + diffY + "px"
            console.log(e.target.parentNode.style.width)
        }
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
        height:"auto",
        margin:"0 auto",
        position:"absolute",
        zIndex:"1"


    } //자식
    return (
        <div style={mapBoxStyle}>
            <img style={routeMapStyle} alt="route_map" src="img/route_map.png"
            onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler}/>
        </div>
    )
};

export default Index;