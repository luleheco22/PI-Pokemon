import React from 'react'
import styled from 'styled-components';
import GIF from '../img/error404poke.gif'
import Navigation from './Navigation'
const Conatiner=styled.div`
      display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  box-shadow: 0.6rem 0.6rem 4rem #e9e8e7;
  margin: 2rem;

`
const Gif=styled.img`
    width:100%;
 height: 15rem;
`
const Text=styled.p`
  font-family:'Akaya Telivigala', cursive;
  font-size:${props=>props.theme.fontxxxl};
  text-transform: uppercase;
   color: #E3350D;
  `



export const NotFound = ({msg}) => {
  return (
    <>
    <Navigation/>
    <Conatiner>
      <div>
         <Gif src={GIF} type='videp/mp4' autoPlay muted loop/>
         <Text>{msg}</Text>
         </div>
    </Conatiner>
    </>
  )
}
