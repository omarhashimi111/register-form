import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #62daa2;
    width: 20px;
    z-index: 2;
    background-color: white;
    
`
const Bar = styled.div`
    z-index: 1;
    width: ${p => p.width===1? p.width * 17: p.width === 2 ? p.width * 25: p.width * 28}%;
    height: 3px;
    background-color: blue;
    position: absolute;
    left: 0;
`
const Image = styled.img`
  width: 20px;
  border-radius: 50%;
`

const ProgressBar = ({pro}) => {
  
  return (
    <Container>
      <Bar width={pro}></Bar>
      <Box>{pro > 1 ? (<Image src='assets/tick.png' alt="tick"/>): 1}</Box>
      <Box>{pro > 2 ? (<Image src='assets/tick.png' alt="tick"/>): 2}</Box>
      <Box>{pro > 3 ? (<Image src='assets/tick.png' alt="tick"/>): 3}</Box>
    </Container>
  )
}

export default ProgressBar
