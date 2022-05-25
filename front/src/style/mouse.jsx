import styled from 'styled-components'

const Fork = styled.img`
    position: absolute;
    width: 3vw; 
    height: 20vh;
    transform: translate(60%, -5%) rotate(-35deg);
    z-index:2000;

`
document.addEventListener("mousemove", (e) => {
    const fork = document.querySelector(".fork")
    // console.log(fork)

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    fork.style.left = mouseX + 'px';
    fork.style.top = mouseY + 'px';

});



const forkComponent = () => {
    return(
        <Fork src="http://localhost:3000/img/fork.png" className="fork"/>
    )
}
export default forkComponent;