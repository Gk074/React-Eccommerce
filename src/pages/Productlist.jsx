import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container= styled.div`
    
`
const Title= styled.h1`
    margin: 20px;

`
const Filtercontainer= styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter= styled.div`
    margin: 20px;
   
`
const Filtertext =styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
   
`
const Select= styled.select`
    padding: 10px;
    margin-right: 20px;
   
`
const Option= styled.option`
   
`


const Productlist = () => {
  return (
    <Container>
        <Navbar/>
        <Title>ALL PRODUCTS</Title>
        <Filtercontainer>
            <Filter>
                <Filtertext>Filter products: </Filtertext>
                <Select>
                    <Option disabled selected>
                        Product
                    </Option>
                    <Option>Rings</Option>
                    <Option>Bracelets</Option>
                    <Option>Chains</Option>
                </Select>
            </Filter>
            <Filter>
                <Filtertext>Sort products: </Filtertext>
                <Select>
                    <Option selected >Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>

                </Select>
            </Filter>
        </Filtercontainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Productlist