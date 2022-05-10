import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const LogoText=styled.h1`
 font-family:'Akaya Telivigala', cursive;
 font-size:${props=>props.theme.fontxxxl} ;
 color: ${props=>props.theme.text};
transition: all 0.4s ease;
 &:hover{
     transform: scale(1.2);
 }
 
`

export const Logo = () => {
  return (
    <LogoText>
       <Link to='/'>P.DéX</Link> 
    </LogoText>
  )
}
