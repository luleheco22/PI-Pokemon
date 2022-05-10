import React from 'react'
import styled from 'styled-components';
import GIF from '../img/gif-facePoke.mp4'

const VideoContainer=styled.div`
    width: 100%;

 video{
     width: 100%;
     height: auto;
 }   
`

 const CovertGif = () => {
  return (
    <VideoContainer>
        <video src={GIF} type='videp/mp4' autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CovertGif
