import React from 'react'
import Navigation from '../components/Navigation'
import styled from 'styled-components';
import {keyframes} from 'styled-components'
import TypeWriteText from '../components/TypeWriteText'
import CovertGif from '../components/CovertGif'
import PokeballColor from '../img/poke_color.png'

const Container=styled.div`
  width:75%;
  min-height:80vh;
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Box=styled.div`
  width:50%;
  height:100%;
  display: flex;
  justify-content:column;
  align-items:center;

` 
const rotate=keyframes`
  100%{
    transform: rotate(1turn);
  }

`

const Round=styled.div`
  position:absolute;
  bottom:2rem;
  right:90%;
  width:6rem;
  height:6rem;
  border: 1px solid ${props=>props.theme.text};
  border-radius:50%;
 img{
   width:100%;
   height:auto;
   animation: ${rotate} 6s linear infinite reverse;
 } 
`


const Home = () => {
  return (
    <div>
        <Navigation/>
          <Container>
          <Box> <TypeWriteText/></Box>
          <Box><CovertGif/></Box>
           <Round>
               <img src={PokeballColor} alt="pokeball" />
           </Round>
          </Container>

       
    </div>
  )
}

export default Home
