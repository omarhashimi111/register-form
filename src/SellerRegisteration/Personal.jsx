import styled from 'styled-components'
import Inputmask from "inputmask"
import { useEffect } from 'react'


const Container = styled.div`
    padding: 10px 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
`
const Title = styled.h2`
    text-align: center;
    flex: 1;
`
const DesContainer = styled.div`
    padding: 16px 12px;
    margin: 10px 0;
    border: 1px solid gray;
    border-radius: 4px; 
    flex: 1;
`
const Note = styled.h4`
    font-size: 19px;
    font-weight: 600;
`
const Description = styled.p`
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: .7px;
`

const Form = styled.form`
    position: relative;
    flex: 8;
    
`

const Fieldset = styled.fieldset`
    padding: 10px 5px;
    margin: 20px 0;
    border-radius: 8px;
    gap: .5rem;
    height: 60%;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 952px){
        grid-template-columns: 1fr;
    }
    
`
const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    &:nth-child(4) {
        display: flex;
        flex-direction: column;
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }
    &:nth-child(5) {
        display: flex;
        flex-direction: column;
        grid-row: 3 / 4;
        grid-column: 1 / 2;
    }

    @media (max-width: 952px){
        &:nth-child(4) {
            grid-column: 1 / 2;
            grid-row: auto;
        }
    }
    @media (max-width: 540px){
        flex-direction: column;
        justify-content: start;
        align-items: stretch
    }
`
const Gender = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Label = styled.label`
    width: 30%;
`

const Input = styled.input`
    width: 68%;
    @media (max-width: 600px){
        flex:1;
    }
    @media (max-width: 540px){
        width: 80%;
    }
`
const Date = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`
const Year = styled.input`
    width: 20%;
`
const Month = styled.input`
    width: 20%;
`
const Day = styled.input`
    width: 20%;
`

const SubmitButton = styled(Input).attrs({ type: 'submit' })`
    width: 100px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 60px;
    right: 10px;


    &:hover {
        background-color: #45a049;
    }
`



const Personal = ({ setQ , setP }) => {

    useEffect(()=>{
        Inputmask({ mask: '9999' }).mask('#year');
        Inputmask({ mask: '99' }).mask('#month');
        Inputmask({ mask: '99' }).mask('#day');
      },[])
  
    // A wait function to wait for a min to show the loading animation in real API call You dont need this
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setP(99);
        try {
            // Wait for 1 seconds
            await wait(1000);

            setP(-1);
            setQ(2);
        } catch (error) {
            console.log(error);
            setP(-1);
        }
    };
    
  return (
    <Container>
      <Title>Personal Information</Title>
      <DesContainer>
        <Note>Note : <Description>Please fill the required fields with what is in your goverment issued document, we check that for security reasons.</Description></Note>

      </DesContainer>
      <Form onSubmit={handleSubmit} >

        <Fieldset>
            <InputContainer>
                <Label htmlFor="firstName">First Name</Label>
                <Input type='text' id="firstName" name="firstName" placeholder="First Name" required/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="lastName">Last Name</Label>
                <Input type='text' id="lastName" name="lastName" placeholder="Last Name" required/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="address">Address</Label>
                <Input type='text' id="address" name="address" placeholder='Address' required/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="dob">Date Of Birth</Label>
                <Date>
                    <Year type='text' name="dob" id='year' placeholder='YYYY' required/>
                    <Month type='text' name="dob" id='month' placeholder='MM' required/>
                    <Day type='text' name="dob" id='day' placeholder='DD' required/>
                </Date>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="gender">Gender</Label>
                <Gender>
                    <Input type='radio' name='gender' id="male" value="male" required/>
                    <Label htmlFor="male">Male</Label>
                    <Input type='radio' name='gender' id="female" value="female" />
                    <Label htmlFor="female">Female</Label>
                    <Input type='radio' name='gender' id="other" value="other" />
                    <Label htmlFor="other">Other</Label>
                </Gender>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="id_issue">ID Card or Passport</Label>
                <Input type='file' id="id_issue" name="id_issue" />
            </InputContainer>
        </Fieldset>    
        <SubmitButton value="Next"/>
      </Form>
    </Container>
  )
}

export default Personal
