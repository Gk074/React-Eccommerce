import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    //background-color: #c8c5c4;
    position: relative;
    overflow: hidden;
    ${mobile({display:'none'})}

`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #f0ecec;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: all 1.5s ease;

`

const Slide= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background:url(${props => props.img});
    object-fit:contain;

`
const Imagecontainer= styled.div`
    height: 100%;
    flex: 1;
    padding-left: 20%;
    padding-top: 10%;


`
const Image= styled.div`
    height: 80%;
    
`

const Infocontainer= styled.div`
    flex: 1;
    padding: 40px;
`
const Title = styled.h1`
    font-size: 70px;
    word-spacing: 5px;
    color: white;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`
const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    border: 2px solid white;
    background-color: transparent;
    cursor: pointer;
    color: white;
    
`

const Slider = () => {
    const [slideIndex,setslideIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction==='left'){
            setslideIndex(slideIndex > 0 ? slideIndex - 1:2)
        }else{
            setslideIndex(slideIndex<2? slideIndex+1:0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide img={item.img} key={item.id}>
            <Imagecontainer></Imagecontainer>
            <Infocontainer>
                <Title>{item.title}</Title>
                <Desc> {item.desc}</Desc>
                <Button>Shop Now</Button>
            </Infocontainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider