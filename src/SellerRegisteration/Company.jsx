import styled from 'styled-components'

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
const Description = styled.p`

`
const Form = styled.form`
    position: relative;
    flex: 8;
`

const Fieldset = styled.fieldset`
    padding: 10px 5px;
    margin: 20px 0;
    border-radius: 8px;
    height: 60%;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const InputContainer = styled.div`
    display: flex;
    gap: 1rem;
`

const Label = styled.label`

`

const Input = styled.input`
    outline-width: 0;
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
const Button = styled.button`
    width: 100px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 60px;
    left: 10px;

    &:hover {
        background-color: #45a049;
    }
`


const Company = ({setQ , setP}) => {
  
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setP(99);
    try {
        // Wait for 1 seconds
        await wait(1000);
        
        setP(-1);
        setQ(3);
    } catch (error) {
        console.log(error);
        setP(-1);
    }
};

  const handlePrevious = async(e) => {
    e.preventDefault();
    setP(99)
    
    try {
      await wait(1000)
      setP(-1)
      setQ(1)
    } catch (error) {
      console.log(error)
      setP(-1)
    }
  }

  return (
    <Container>
      <Title>Company Information</Title>
      <DesContainer>
        <Description>In this section you will fill information about your company.</Description>
      </DesContainer>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <InputContainer>
              <Label>Company or Store Name</Label>
              <Input type="text" required/>
          </InputContainer>
          <InputContainer>
              <Label>Company or Store Address</Label>
              <Input type="text" required/>
          </InputContainer>
          <InputContainer>
              <Label>Company or Store Phone</Label>
              <Input type="text" required/>
          </InputContainer>
        </Fieldset>
        <SubmitButton value="Next" />
        <Button onClick={handlePrevious}>Previous</Button>
      </Form>
    </Container>
  )
}

export default Company
