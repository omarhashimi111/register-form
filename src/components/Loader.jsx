import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.7);
  z-index: ${ p => p.$load};
`

const Load = styled.div`
  width: 50px;
  height: 48px; 
  aspect-ratio: 1.154;
  display: grid;
  
  color: #000;
  background:
    linear-gradient(to bottom left ,#0000 calc(50% - 1px),currentColor 0 calc(50% + 1px),#0000 0) right/50% 100%,
    linear-gradient(to bottom right,#0000 calc(50% - 1px),currentColor 0 calc(50% + 1px),#0000 0) left /50% 100%,
    linear-gradient(currentColor 0 0) bottom/100% 2px;
  background-repeat: no-repeat;
  transform-origin: 50% 66%;
  animation: l5 4s infinite linear;

&::before,
&::after {
  content: "";
  grid-area: 1/1;
  background: inherit;
  transform-origin: inherit;
  animation: inherit;
}
&::after {
  animation-duration: 2s;
}
@keyframes l5{
  100% {transform:rotate(1turn)}
}
`

const Loader = ({load}) => {

  
  return (
    <Container $load={load}>
      <Load></Load>
    </Container>
  )
}

export default Loader
