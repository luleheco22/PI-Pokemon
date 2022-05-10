import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

const Title=styled.h2`
font-size: ${props=>props.theme.fontxxl};
text-transform: capitalize ;
width: 80%;
align-self: flex-start;
flex-direction: row;
`
const MinTitle=styled.p`
justify-content: center;
text-transform: uppercase;
font-family:'Akaya Telivigala', cursive;
 font-size:${props=>props.theme.fontlg} ;
 color: #f8b500;
transition: all 0.7s ease;
 &:hover{
     transform: scale(1.1);
 }

`
const SubTitle=styled.h3`
     
    font-size:${props=>props.theme.fontls};
    text-transform: capitalize;
    color:${props=>`rgba(${props.theme.textRgba},0.6)`};
    font-weight: 600;
    margin: bottom 1rem;
    align-self: flex-start;
`
const ButtonContainer=styled.div`
   margin-top: 1rem;
   width: 80%;
align-self: flex-start;

`


const TypeWriteText = () => {
  return (
      <div>
    <Title>Welcome to Pokemon <MinTitle>World!</MinTitle>  
    </Title>
    <SubTitle>Find and catch all the pokemons</SubTitle>  
    <ButtonContainer>
    <Link to='/pokedex'><Button text='Connect Pokedex'></Button></Link> 
    </ButtonContainer>
    </div>
  )
}

export default TypeWriteText