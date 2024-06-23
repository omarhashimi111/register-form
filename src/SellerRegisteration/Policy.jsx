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
const Form = styled.form`
  flex: 8;
`
const InputContainer = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: ${p=>p.type == "2" ? 'start ': 'space-between'};
`


const Fieldset = styled.fieldset`
  height: 75%;
  padding: 10px;
`
const Select = styled.select`
  margin-right: 10px;
  width: 50%;
`
const Anc = styled.a`
  
`
const Input = styled.input`
  margin-right: 10px;
`
const Label = styled.label`
  
`
const Option = styled.option`

`
const SubmitButton = styled(Input).attrs({ type: 'submit' })`
    width: 100px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;


    &:hover {
        background-color: #45a049;
    }
`


const Policy = ({setP , setQ}) => {

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setP(99);
    try {
        // Wait for 1 seconds
        await wait(1000);
        
        setP(-1);
        setQ(1);
    } catch (error) {
        console.log(error);
        setP(-1);
    }
};

  return (
    <Container>
      <Title>Policy</Title>
      <Form onSubmit={handleSubmit} id="policy-form">
        <Fieldset>
          <InputContainer>
            <Label htmlFor='finding'>How Did You Hear About Us ?</Label>
            <Select name="finding" id="finding" defaultValue='none' required>
              <Option disabled value="none">Select One</Option>
              <Option value="social_media">Social Media</Option>
              <Option value="blog">Blog</Option>
              <Option value="tv">Television</Option>
              <Option value="news_paper">News Paper</Option>
            </Select>
          </InputContainer>
          <InputContainer type="2">
            <Input type="checkbox" id='policy' required/>
            <Label htmlFor="policy">I accept all these <Anc href='#'>terms and conditions</Anc></Label>
          </InputContainer>

        </Fieldset>
      </Form>
      <SubmitButton form='policy-form' value="Submit"/>
    </Container>
  )
}

export default Policy
