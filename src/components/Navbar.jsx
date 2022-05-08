import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';

const Container = styled.div`
    
    ${mobile({height:'65px'})}
  
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    ${mobile({padding:'0px 0px'})}
  
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent:'center',marginLeft:'0px'})}

`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:'none'})}
`;
const Searchcontainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 0.5px;
 

`;
const Input = styled.input`
    border: none;
    ${mobile({width:'50px'})}

`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:'24px'})}

`
const Menuitem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 12px;
   
    ${mobile({fontSize:'12px', marginLeft:'10px'})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                  EN</Language>
                  <Searchcontainer>
                      <Input placeholder='search'/><Search style={{color:"grey", fontsize:16}}/>
                </Searchcontainer>  
            </Left>
            <Center><Logo>Gk</Logo></Center>
            <Right>
                <Menuitem>REGISTER</Menuitem>
                <Menuitem>SIGN IN</Menuitem>
                <Menuitem> 
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                </Badge>
                </Menuitem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar