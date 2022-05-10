import React from 'react'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import { getDetailById,getDetailByName,clearData } from '../redux/actions';
import  {NotFound}  from '../components/NotFound';
import Loading from '../components/Loading'
import {Card} from '../components/Card'
import styled from 'styled-components';
import { Button } from '../components/Button';




const ContainerGrid=styled.div`
    margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: grid;
  border-radius: 2rem;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0.6rem 0.6rem 4rem #e9e8e7;
  position: relative;
`

const Content=styled.div`
    padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  display: grid;
  justify-items: center;
`
const Stats=styled.div`
    padding: 2rem 2rem 0 2rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  background: linear-gradient(to right, rgb(0, 153, 247), rgb(241, 23, 18)); 

`
const Text=styled.div`
    display: flex;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(to right, rgb(0, 153, 247), rgb(241, 23, 18)); 

`
const Title=styled.div`
    font-weight: bold;
  width: 100%;
  padding: 1rem;
`

const Ball=styled.div`
    border-radius: 4rem;
  display: grid;
  place-content: center;
  background: linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));
  font-weight: bold;
  width: 6rem;
  height: 3rem;
`
const ContainerStat=styled.div`
 margin-top: 3.5rem;
`

const Info=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

const ContainerButton=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  padding: 2rem;
`



const Detail = () => {

const dispatch=useDispatch()
const poke=useSelector(state=>state.pokeDetails)
const {id}=useParams()


useEffect(() => {
  const idCopy=parseInt(id) 
   console.log(id); 
   console.log(idCopy);
  const regex= /^[0-9]*$/;

   if (isNaN(idCopy)) {
    if(!regex.test(id)) {
      dispatch(getDetailByName(id));
    }else{
      dispatch(getDetailById(id));
    } 
    } 
    else {
      dispatch(getDetailById(id));
    }

  //  if (!regex.test(id)) {
  //   dispatch(getDetailByName(id))
  // }
  
  //  if (id.indexOf('-')) {
  //   dispatch(getDetailById(id))
  //  }

  // if(typeof id==='number') {
  //      dispatch(getDetailById(id))
  //    }


 return ()=> dispatch(clearData(null))
  
 
}, [dispatch,id])


  return (
    <>
      {poke ?(
        poke?.id?(
          <>
          <ContainerGrid>
            <Content>
          <Card {...poke} boolean={true}/>
          </Content>  

             <Stats>
               <Text>
                 <ContainerStat>
                   <Title>Height</Title>
                   <Ball>{poke.height/10}m</Ball>
                   </ContainerStat>
                   <ContainerStat>
                   <Title>Weight</Title>
                   <Ball>{poke.weight/10}kg</Ball>
                   </ContainerStat>
               </Text>
                 
                 <Info>
               <ContainerStat>
                   <Title>HP</Title>
                   <Ball>{poke.hp}</Ball>
                   </ContainerStat>
                   <ContainerStat>
                   <Title>Attack</Title>
                   <Ball>{poke.attack}</Ball>
                   </ContainerStat>
                   <ContainerStat>
                   <Title>Speed</Title>
                   <Ball>{poke.speed}</Ball>
                   </ContainerStat>
                   <ContainerStat>
                   <Title>Defense</Title>
                   <Ball>{poke.defense}</Ball>
                </ContainerStat>
                </Info>
             </Stats>
          </ContainerGrid>
          <ContainerButton>
            <Button text='Delete'></Button>
            <Button text='Update'></Button>
           <Link to='/pokedex'><Button text='Pokedex'></Button></Link> 
          </ContainerButton>
          </>
        ):(
          <NotFound msg="Pokemon not found" />
        )
      ):(
        <Loading/>
      )}  

    </>
  )
}

export default Detail