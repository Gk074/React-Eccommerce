import {Send} from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 20px;
    ${mobile({alignItems:'center'})}

`
const Inputcontainer = styled.div`
    width: 50%;;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    border: 1px solid lightgray;
   


`
const Button = styled.button`
flex: 1;
background-color: teal;
border: none;
color: white;
`
const Container = styled.div`
    height: 60vh;
    background-color: #f9e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Contact Us</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <Inputcontainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send />
            </Button> 
        </Inputcontainer>
    </Container>
  )
}

export default Newsletter