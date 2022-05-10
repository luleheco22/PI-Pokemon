import React, { useState } from 'react'
import styled from 'styled-components';

const Container=styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 1rem;
`
const ButoonPage=styled.button`
display: flex;
align-items: center;
 background-color:${props=>props.theme.text};
 color:${props=>props.theme.body};
 outline: none;
 border: none;
 font-size:${props=>props.theme.fontsm};
 cursor: pointer;
 transition: all 0.2s ease;
 position: relative;

 
 &:hover{
     transform: scale(0.9);
 }

 &::after{
     content: ' ';
     position: absolute;
     top: 50%;
     left:50%;
     transform: translate(-50%,-50%) scale(0);
     border: 2px solid ${props=>props.theme.text};
     width: 100%;
     height: 100%;
   
     transition: all 0.2s ease;
 }
 &:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3rem;
 }

`
const Icon=styled.svg`
  
`
const PageNumber=styled.p`
margin-top: 2rem;
  justify-content: center;
text-transform: uppercase;
font-family:'Akaya Telivigala', cursive;
 font-size:${props=>props.theme.fontlg} ;
`
const InputPage=styled.input`
   position: relative;
     display: inline-block;
     box-sizing: border-box;
     transition: .5s;
     border: none;
     outline: none;
     padding: 0 25px;
     border: solid 2px  #ffc107;
     border-radius: 7px;
     width: 100px;
     text-align: center;

`

const Paged = ({currentPage,setCurrentPage,max}) => {

    const [input,setInput]=useState(1)
    
    const nextPage=()=>{
      setInput(parseInt(input)+1)
      setCurrentPage(parseInt(currentPage)+1)
    }

    const prevtPage=()=>{
      setInput(parseInt(input)-1)
      setCurrentPage(parseInt(currentPage)-1)
    }

    const onKeyDown = e => {
      if (e.keyCode == 13) {
        setCurrentPage (parseInt (e.target.value));
        if (
          parseInt (e.target.value < 1) ||
          parseInt (e.target.value) > Math.ceil (max) ||
          isNaN (parseInt (e.target.value))
        ) {
          setCurrentPage (1);
          setInput (1);
        } else {
          setCurrentPage (parseInt (e.target.value));
        }
      }
    };
  
    const onChange = e => {
      setInput (e.target.value);
    };
  return (
    <Container>
       <ButoonPage disabled={currentPage===1 || currentPage<1} onClick={prevtPage}>{' '}<Icon version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M250 597 c-174 -49 -262 -231 -191 -394 61 -140 235 -206 377 -144
222 97 224 423 4 520 -60 26 -135 33 -190 18z m184 -42 c94 -45 141 -124 141
-235 0 -85 -18 -133 -70 -185 -52 -52 -100 -70 -185 -70 -86 0 -128 16 -183
72 -47 47 -70 96 -75 164 -9 122 53 218 173 266 43 18 152 11 199 -12z"/>
<path d="M250 365 l-44 -45 44 -45 c24 -24 47 -42 52 -38 6 3 -2 17 -16 32
-14 15 -26 30 -26 34 0 4 36 7 80 7 47 0 80 4 80 10 0 6 -33 10 -80 10 -44 0
-80 3 -80 7 0 4 12 19 26 34 14 15 22 29 16 32 -5 4 -28 -14 -52 -38z"/>
</g>
</Icon></ButoonPage>

       <InputPage
       onChange={(e)=>onChange(e)} 
       onKeyDown={(e)=>onKeyDown(e)} 
       name='page' 
       autoComplete='off' 
       type="text" 
       value={input} />
       <PageNumber>of {Math.ceil(max)}</PageNumber>

       <ButoonPage 
       disabled={currentPage===Math.ceil(max) || currentPage>Math.ceil(max)}
        onClick={nextPage}>{' '}<Icon version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M250 597 c-174 -49 -262 -231 -191 -394 61 -140 235 -206 377 -144
222 97 224 423 4 520 -60 26 -135 33 -190 18z m184 -42 c94 -45 141 -124 141
-235 0 -85 -18 -133 -70 -185 -52 -52 -100 -70 -185 -70 -86 0 -128 16 -183
72 -47 47 -70 96 -75 164 -9 122 53 218 173 266 43 18 152 11 199 -12z"/>
<path d="M337 403 c-4 -6 5 -21 18 -33 14 -13 25 -27 25 -32 0 -4 -36 -8 -80
-8 -47 0 -80 -4 -80 -10 0 -6 33 -10 80 -10 44 0 80 -3 80 -7 0 -4 -12 -19
-26 -34 -14 -15 -22 -29 -16 -32 5 -4 28 14 53 39 l43 44 -46 46 c-25 26 -48
42 -51 37z"/>
</g>
</Icon></ButoonPage>

    </Container>
  )
}

export default Paged