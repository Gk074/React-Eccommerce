import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:'column',padding:'20px'})}

`
const Imgcontainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:'50vh'})}
`
const Infocontainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:'10px'})}

`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin: 20px;
    ${mobile({margin:'0px'})}
`
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`
const Filtercontainer = styled.span`
    display: flex;
    align-items: start;
    margin: 30px 0px;
    font-weight: 600;
    

`
const Addcontainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:'100%'})}
`
const Amountcontainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: teal;
        transition: all 0.3s ease;
    }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Imgcontainer>
                <Image src='https://images.pexels.com/photos/2872703/pexels-photo-2872703.jpeg?cs=srgb&dl=pexels-slaytina-2872703.jpg&fm=jpg'/>
            </Imgcontainer>
            <Infocontainer>
                <Title>Denim suit</Title>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</Desc>
                <Price>$20</Price>
                <Filtercontainer>
                    Size : Free Size
                </Filtercontainer>
                <Addcontainer>
                    <Amountcontainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>  
                    </Amountcontainer>
                    <Button>ADD TO CART</Button>
                </Addcontainer>
            </Infocontainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product