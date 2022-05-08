import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container=styled.div`
    
`

const Wrapper=styled.div`
    padding: 20px;
    background-color: #f1f7fa;
    ${mobile({flexDirection:'column',padding:'10px'})}
`
const Title=styled.h1`
    font-weight: 300;
    text-align: center;

`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Topbutton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==='filled' && 'none'};
    background-color: ${props=>props.type==='filled' ? 'black' : 'transparent'};
    color: ${props=>props.type==='filled' && 'white'};

`
const Hr =styled.hr`
    background-color: #eee;
    border: none;
`
const Toptexts=styled.div`
    ${mobile({display:'none'})}
`
const Toptext=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({flexDirection:'column'})}
`
const Info=styled.div`
    flex: 3;
`

const Product=styled.div`
    display: flex;
    justify-content: space-between;

`
const Productdetail=styled.div`
    flex: 2;
    display: flex;

`
const Image=styled.img`
    width: 150px;
    height: 200px;
    padding: 10px;
    ${mobile({padding:'10px 0px'})}
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Productname=styled.span`
    
`
const Pricedetail=styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`
const Productid=styled.div`
    
`

const Productamountcontainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`
const Productamount=styled.div`
font-size: 24px;
 margin: 5px;
`
const Productprice=styled.div`
    font-size: 24px;
    font-weight: 200;
    margin-left: 10px;
`
/*

const Container=styled.div`
    
`
*/
const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgrey ;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`
const Summarytitle=styled.h1`
    font-weight: 200;

`
const Summaryitem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '800'};
    font-size: ${props=>props.type === 'total' && '24px'};

`
const Summaryitemtext=styled.span`
    
`
const Summaryitemprice=styled.span`
    
`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>
                YOUR BAG
            </Title>
            <Top>
                <Topbutton>CONTINUE SHOPPING</Topbutton>
                <Toptexts>
                    <Toptext>Shopping bag(2)</Toptext>
                    <Toptext>Wishlist(0)</Toptext>
                </Toptexts>
                <Topbutton type='filled'>CHECKOUT NOW</Topbutton>
            </Top>
            <Bottom>
                <Info>
                <Product>
                        <Productdetail>
                            <Image src='https://images.pexels.com/photos/6940580/pexels-photo-6940580.jpeg?cs=srgb&dl=pexels-alena-darmel-6940580.jpg&fm=jpg'/>
                            <Details>
                                <Productname><b>Product : </b> Earings</Productname>
                                <Productid><b>Id : </b> 67676767</Productid>
                            </Details>
                        </Productdetail>
                        <Pricedetail>
                            <Productamountcontainer>
                                <Add/>
                                <Productamount>2</Productamount>
                                <Remove/>
                            </Productamountcontainer>
                            <Productprice>$30</Productprice>
                        </Pricedetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <Productdetail>
                            <Image src='https://images.pexels.com/photos/6940580/pexels-photo-6940580.jpeg?cs=srgb&dl=pexels-alena-darmel-6940580.jpg&fm=jpg'/>
                            <Details>
                                <Productname><b>Product : </b> Earings</Productname>
                                <Productid><b>Id : </b> 67676767</Productid>
                            </Details>
                        </Productdetail>
                        <Pricedetail>
                            <Productamountcontainer>
                                <Add/>
                                <Productamount>2</Productamount>
                                <Remove/>
                            </Productamountcontainer>
                            <Productprice>$30</Productprice>
                        </Pricedetail>
                    </Product>
                </Info>
                <Summary>
                    <Summarytitle>ORDER SUMMARY</Summarytitle>
                    <Summaryitem>
                        <Summaryitemtext>Subtotal</Summaryitemtext>
                        <Summaryitemprice>$ 60</Summaryitemprice>
                    </Summaryitem>
                    <Summaryitem>
                        <Summaryitemtext>Estimated Shipping</Summaryitemtext>
                        <Summaryitemprice>$ 5</Summaryitemprice>
                    </Summaryitem>
                    <Summaryitem type='total'>
                        <Summaryitemtext >Total</Summaryitemtext>
                        <Summaryitemprice>$ 65</Summaryitemprice>
                    </Summaryitem>
                    <Button>CHECKOUT</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart