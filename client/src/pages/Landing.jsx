import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';


const Container=styled.div`
  background-image: url('https://c.wallhere.com/photos/ea/91/1920x1080_px_Bulbasaur_Charmander_Meowth_Pikachu_pokemon_poker_Squirtle-1225948.jpg!d');
background-size: cover;
height: 100vh;
max-height: 100vh;
  width: 100%;
  max-width: 100vw;
`

const ContainerButton=styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
`

const Landing = () => {
  return (
    <Container>
       <ContainerButton>
        <Link to='/home'><Button text='GET STARTED'/></Link> 
       </ContainerButton>
       
    </Container>
  )
}

export default Landing