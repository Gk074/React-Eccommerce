import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:'column'})}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const Socialcontainer=styled.div`
    display: flex;
`
const Socialicon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:'none'})}


`
const Title= styled.h3`
    margin-bottom: 30px;
`
const List= styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const Listitems= styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Contactitems = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payments = styled.img`
    width: 90%;
`
const Footer = () => {
  return (
    <Container>
        <Left>  
            <Logo>Gk</Logo>
            <Desc> Gk has successfully introduced the concept of high quality, flawlessly crafted jewelry for men at affordable price points a feat that remains unmatched in an increasingly busy segment.
                Gk the only brand with a versatile line of jewelry, perfect sarotrial companions to every man. No matter what you do, or don’t, there is always a Great moment for you! </Desc>
            <Socialcontainer>
                <Socialicon color="3B5999">
                    <Facebook/>
                </Socialicon>  
                <Socialicon color="E4405F">
                    <Instagram />
                </Socialicon>
                <Socialicon color="55ACEE">
                    <Twitter/>
                </Socialicon>  
            </Socialcontainer>    
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <Listitems>Home</Listitems>
            <Listitems>Cart</Listitems>
            <Listitems>Rings</Listitems>
            <Listitems>Chains</Listitems>
            <Listitems>Bracelets</Listitems>
            <Listitems>Accessories</Listitems>
            <Listitems>My Account</Listitems>
            <Listitems>Order Tracking</Listitems>
            <Listitems>Wishlist</Listitems>
            <Listitems>Terms</Listitems>


            </List>    
        </Center>
        <Right>
            <Title>Contact</Title>
            <Contactitems><Room style={{marginRight:'10px'}}/> 25 - Floyd Road, South Delhi, India 934932</Contactitems>
            <Contactitems><Phone style={{marginRight:'10px'}}/>+91 - 7778 777 777</Contactitems>
            <Contactitems><MailOutline style={{marginRight:'10px'}}/>contact@gkecom.com</Contactitems>
            <Payments alt src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer