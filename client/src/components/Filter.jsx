import React from 'react'
import styled from 'styled-components';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterPokeByStats, filterPokeByType, getTypes, sort,filterCreate} from '../redux/actions/index';


const Container=styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 0 2rem;
  
`
const MyOrder=styled.select`
   
    outline: none;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &::-ms-expand{
    display: none;
  }
`
const ContainerOrder=styled.div`
  display: flex;
  column-gap: 0.5rem;
`

const Width=styled.div`
  display: flex;
  column-gap: 0.5rem;
`
const MySelect=styled.select`

 display: inline-block;
	width: 100%;
	cursor: pointer;
  	padding: 7px 10px;
  	height: 42px;
  	outline: 0; 
  	border: 0;
	border-radius: 0;
	background: #f0f0f0;
	color: #7b7b7b;
	font-size: 1em;
	color: #999;
	font-family: 
	'Sora', sans-serif;
	border:2px solid #ffc107;
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;
  &:hover{
    background:#f27121ff ;
    color: black;
  }

 `





export const Filter = ({setPokePerPage,setCurrentPage}) => {
  const types = useSelector(state => state.types);
 
  const dispatch = useDispatch();

  const handlePokePerPage = e => {
    setPokePerPage(e.target.value);
    setCurrentPage(1);
  };

const handleFilterType=e=>{
  dispatch(filterPokeByType(e.target.value))
}

const handleSort=e=>{
   dispatch(sort(e.target.value))
}

const handleFilterByStats=e=>{
   dispatch(filterPokeByStats(e.target.value))
}

const handleFilterCreate=e=>{
    dispatch(filterCreate(e.target.value))
}
  useEffect(() => {
    dispatch(getTypes())
   
  }, [dispatch]);
  return (
    <>
      <Container>
        <div>
          <MyOrder
            name="order"
            id="order-select"
            onChange={handleSort}
           
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </MyOrder>
          
        </div>
        <ContainerOrder>
          <Width>
            <MySelect
              name="allPokes"
              id="allPokes"
             onChange={handleFilterCreate}
            >
              <option value="all">All</option>
              <option value="existent">Existent</option>
              <option value="created">Created</option>
           
            </MySelect>
              
            <MySelect
              name="allTypes"
              id="allTypes"
              onChange={handleFilterType}
            >
              <option value="all">all</option>
              {types &&
                types.map(t => {
                  return (
                    <option
                      key={t.name}
                      value={t.name}
                    >
                      {t.name}
                    </option>
                  );
                })}
            </MySelect>
            <MySelect
              name="stats"
              id="stats"
             onChange={handleFilterByStats}
            >
              <option value="id">id</option>
              <option value="name">name</option>
              <option value="height">height</option>
              <option value="weight">weight</option>
              <option value="attack">attack</option>
            </MySelect>
          </Width>
          <MyOrder
            name="amount"
            id="amount"
            onChange={handlePokePerPage}
          >
            <option value="12">Paged</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </MyOrder>
        </ContainerOrder>
      </Container>
    </>
  );
}
