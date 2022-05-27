import styled from 'styled-components'
import { isMobile } from 'react-device-detect';
import display from '../reducers/display';
const Fork = styled.img`

    position: absolute;
    width: 30px; 
    height: 120px;
    transform: translate(100%, 0%) rotate(-35deg);
    z-index:5000;

`
document.addEventListener("mousemove", (e) => {
    const fork = document.querySelector(".fork")
    // console.log(fork)

    const mouseX = e.clientX;
    const mouseY = e.pageY;
    fork.style.left = mouseX + 'px';
    fork.style.top = mouseY + 'px';
});



const forkComponent = () => {
    return(
        <>
            {isMobile ? <Fork style={{display:"none"}}/> :

            <Fork src="http://localhost:3000/img/fork.png" className="fork"/>
            }
        </>
        
    )
}
export default forkComponent;