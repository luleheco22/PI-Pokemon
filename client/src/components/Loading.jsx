import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
const Container=styled.div`
 max-height: 100%;
  text-align: center;
  position: absolute;
  margin-top: 5%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
`
const Gif=styled.img`
    width: auto;
  height: 15rem;
`
const animate=keyframes`
  from {
    width: 0;
  }
  to {
    width: 80%;
  }

`
const Text=styled.p`
    position: relative;
  display: inline-block;
  font-family:'Akaya Telivigala', cursive;
  font-size: 5rem;
  text-transform: uppercase;
  border-bottom: 0.5rem solid;
  color: white;
  margin-left: auto;
  margin-right: auto;

  &::before{
    content: attr(data-text);
  position: absolute;
  font-size: 2rem;
  border-bottom: 0.5rem solid;
  top: 0;
  left: 0;
  width: 100%;
  color: #E3350D;
  overflow: hidden;
  animation: ${animate} 5s linear infinite;
  }
`


const Loading = () => {
    const gif = [
        "https://media.giphy.com/media/D3IozBXyAvMIx5Ck0E/giphy.gif",
        "https://media.giphy.com/media/LPFssSmSyEAYYaSKf7/giphy.gif",
        "https://media.giphy.com/media/L9Bm0ylCuhypt3LZlV/giphy.gif",
        "https://media.giphy.com/media/nSMQtfVmvjPF1Zzo8w/giphy.gif",
        "https://media.giphy.com/media/vOvijvrVYiLtzqcEaC/giphy.gif",
        "https://media.giphy.com/media/nVT4JHQoN9mu5PJfe7/giphy.gif",
        "https://media.giphy.com/media/q4fE0CkhPWbVpoPhN8/giphy.gif",
        "https://media.giphy.com/media/KFN11yb9Oq0qeCzQGd/giphy.gif",
      ];


  return (
    <Container>
      <div>
       <Gif src={gif[Math.round(Math.random() * gif.length - 1)]} alt="Loading..." />
       </div>
        <Text data-text="Loading...">Loading...</Text>
       
    </Container>
  )
}

export default Loading