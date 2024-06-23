import { useState }  from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import Personal from './Personal'
import Company from './Company'
import Policy from './Policy'
import Loader from '../components/Loader'

const Container = styled.div`
  background: url('assets/b.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100svh;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.div`
  padding: 10px;
  width: 55%;
  height:90%;
  overflow: hidden;
  background-color: #F1F1F1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  @media (max-width: 650px){
    width: 100%;
    height: 100%;
  }
`
const Fieldset = styled.div`
  padding: 10px;
  width: 97%;
  height: 97%;
  border-radius: 8px;
  position: relative;
`
const Legend = styled.h3`
  text-align: center;
`
const FooterButtons = styled.div`
  display: flex;
  padding: 6px;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  position: absolute;
  bottom: 20px;
`

const Button = styled.button`
  font-size: 18px;
  padding: 4px;
  border-radius: 5px;
  border: 1.5px solid green;
  transition: all 105ms ease-out;
  cursor: pointer;

  &:hover{
    background-color: green;
    color: white;
  }
  &:active{
    background-color: #f56a2a;
    color: white;
  }
`


const RegisterSeller = () => {
  const [currentQ, setCurrentQ] = useState(1)
  const [pending, setPending] = useState(-1)



  return (
    <Container>
      <Loader load={pending}/>
      <Form>  
          <Fieldset>
            <Legend>Registeration</Legend>
            <ProgressBar pro={currentQ}/>
            {
              currentQ === 1 ? 
              <Personal  setQ={setCurrentQ} setP={setPending}/>:
              currentQ === 2 ?
              <Company setQ={setCurrentQ} setP={setPending}/> :
              <Policy setQ={setCurrentQ} setP={setPending}/> 
            }
          </Fieldset>

      </Form>
    </Container>
  )
}

export default RegisterSeller
