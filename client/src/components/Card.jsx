import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {TYPE_TO_COLOR_MAP} from './colorsType'





const ContainerCard=styled.div`
    background: linear-gradient(to right, rgb(192, 36, 37), rgb(240, 203, 53));
    margin: 2rem;
  width: 20rem;
  border-radius: 1rem;
  display: inline-block;
  transition: all 400ms ease;
  box-sizing: content-box;
  min-height: 400px;
  border-color: #22043dda;
  border-width: 1.5px;
  border-style: solid;
  margin-right:1rem ;

`
const Name=styled.h3`
  font-family:'Akaya Telivigala', cursive;
  font-size: ${props=>props.theme.fontxl};
  text-align: center;
  color:${props=>props.theme.body} ;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

`

const PokeImage=styled.img`
width: 70%;
display: flex;
margin-left: 2rem;

  
`
const ContainerType=styled.ul`
    list-style-type: none;
  color: #2e023b;
  text-decoration-line: none;
  display: inline;
  padding-left: 3px;
  padding-right: 3px;
  font-family: "Sora", cursive;
  text-decoration: none;
  text-decoration-line: none;
  list-style-type: none;
  text-align: center;
  align-content: center;

`
const Typepoke=styled.li`
    text-decoration: none;
  text-decoration-line: none;
  list-style-type: none;
  text-align: center;
  align-content: center;
   padding: 2rem;
   display: flex;
   justify-content: center;
   gap: 1rem;

`


const Type=styled.p`
  color:${props=>TYPE_TO_COLOR_MAP[props.t]};
  text-transform: uppercase;
  gap: 1rem;
  font-family:'Akaya Telivigala', cursive;
  font-size: ${props=>props.theme.fontlg};

`



export const Card = ({
    id,
    name,
    height,
    weight,
    speed,
    attack,
    defense,
    img,
    hp,
    types,
    boolean,}) => {

  return (
     <>
    <ContainerCard>
      <Name>
        {name.toUpperCase()}<span>{`#${id}`}</span>
      </Name>
      <Link to={`/detail/${id}`}> <PokeImage src={img} alt="Poke image" /></Link>
      <ContainerType>
          <Typepoke>
            {types.map((t,index)=>{
              return (
                
                <Type t={t} key={`${t}${index}`}>{`${t}`  } </Type>
             )  
            })}       
          </Typepoke>    
      </ContainerType>
   </ContainerCard>
   </>

  )
}
