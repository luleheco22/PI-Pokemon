import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from './Modal'
import {createPokemon, getPokemons, getTypes} from '../redux/actions/index'
import { validator } from './validator';
import Navigation from './Navigation';
import {TYPE_TO_COLOR_MAP} from './colorsType'
import { Button } from './Button';

const Container=styled.form`
   margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  border-radius: 2rem;
  min-height: 100vh;
  padding: 2rem;
  box-shadow: 0.6rem 0.6rem 4rem #e9e8e7;
  color: #66625c;
  
`
const LabelForm=styled.label`
   width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-transform: uppercase;
  color: #ffc107; 
  font-family: 
	'Sora', sans-serif;
 
`

const ContainerTypes=styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`

const ButtonType=styled.button`
 width: 50%;
  border: none;
  appearance: none;
  cursor: pointer;
  height: 2rem;
  background:${props=>TYPE_TO_COLOR_MAP[props.t]};
  font-family:'Akaya Telivigala', cursive;
  font-size: ${props=>props.theme.fontlg};
  color: white;
 
`


const MySelect=styled.select`
     width: 50%;
  cursor: pointer;
  appearance: none;
  padding: 0.5rem 0.8rem 0.5rem 0.5rem;
  background-color: white;
  border: 1px solid #676774;
  outline: none;
  cursor: pointer;
  color: #909497;

&::-ms-expand {
  display: none;
}
`
const MyButoon=styled.input`
  background-color:${props=>props.theme.text};
 color:${props=>props.theme.body};
 width: 100%;
  margin-top: 2rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  grid-column: 1/3;
  justify-content: center;

 
&:hover{
     transform: scale(0.9);
 }
 &:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3rem;
 }

`
const MyError=styled.p`
   width: 100%;
  color: #fc4a5a;
  position: absolute;
  bottom: -1.5rem;
`
const input_error=`
    width: 100%;
  animation: shake 300ms;
  height: 3rem;
`;
const input_no_error=`
    width: 100%;
`;

const MyInput=styled.input`
  ${props=>props.haveError? input_error:input_no_error}
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
const LabelTypes=styled.label`
   width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-self: center;
  grid-column: 1/3;
`
const OptionType=styled.option`
    color:${props=>TYPE_TO_COLOR_MAP[props.t]};
`

const ContainerModal=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  

`





export const Form = () => {

  const types = useSelector(state => state.types);
  const allPokemons = useSelector(state => state.allPokemons);
  const pokename=allPokemons.map(poke=>poke.name)
  const dispatch = useDispatch();
  const [pokemon,setPokemon]=useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: '',
    types: [],
  })

  const [errors,setErrors]=useState({})
  const [isOpen,setIsOpen]=useState(false)

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons())
  }, [dispatch]);

  const handleChange=e=>{
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validator({
        ...pokemon,
        [e.target.name]: e.target.value,
      })
    );
  }
  

  const handleType = e => {
    setErrors(validator({...pokemon, types: [...pokemon.types, e.target.value]}));
    if (!pokemon.types.includes(e.target.value) && pokemon.types.length < 2) {
      setPokemon(prev => ({
        ...prev,
        types: [...prev.types, e.target.value],
      }));
    }
  };

  const handleRemove = e => {
    e.preventDefault();
    setPokemon(prev => ({
      ...prev,
      types: prev.types.filter(item => item !== e.target.value),
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const poke = {
      name: pokemon.name || " ",
      hp: Number(pokemon.hp) || " ",
      attack: Number(pokemon.attack) || " ",
      defense: Number(pokemon.defense) || " ",
      speed: Number(pokemon.speed) || " ",
      height: Number(pokemon.height) || " ",
      weight: Number(pokemon.weight) || " ",
      img: pokemon.img || " ",
      types: pokemon.types,
    };
      
    if (pokename.includes(pokemon.name)) {
      return  alert('There is already a pokemon with this name')
    }
    setErrors(validator(poke))
    if (
      Object.keys(errors).length === 0 &&
      pokemon.types.length > 0 &&
      pokemon.name !== "" &&
      pokemon.hp !== "" &&
      pokemon.attack !== "" &&
      pokemon.defense !== "" &&
      pokemon.speed !== "" &&
      pokemon.height !== "" &&
      pokemon.weight !== "" &&
      pokemon.img !== ""
    ){
      dispatch(createPokemon(pokemon));
      setIsOpen(true)
  
    setPokemon({
      name: "",
      types: [],
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img:""
    });
    }

  
  }
    


  return (
   <>
    <Navigation/>
    <Container 
     onSubmit={handleSubmit}
     >
        <LabelForm htmlFor="name">
          name
          {<MyInput 
          type="text"
          name="name"
          placeholder="Pokémon name"
          value={pokemon.name}
          onChange={handleChange}
         haveError={errors.name}/>
        }
          {errors?.name && <MyError>{errors?.name}</MyError>}
        </LabelForm>
        <LabelForm htmlFor="hp">
          hp
          {<MyInput 
          type="text"
          name="hp"
          placeholder="Pokémon hp"
          value={pokemon.hp}
          onChange={handleChange}
         haveError={errors.hp}/>
        }
          {errors?.hp && <MyError>{errors?.hp}</MyError>}
        </LabelForm>
        <LabelForm htmlFor="attack">
          attack
          {<MyInput 
          type="text"
          name="attack"
          placeholder="Pokémon name"
          value={pokemon.attack}
          onChange={handleChange}
         haveError={errors.attack}/>
        }
          {errors?.attack && <MyError>{errors?.attack}</MyError>}
        </LabelForm>
        <LabelForm  htmlFor="defense">
          defense
         {<MyInput 
          type="text"
          name="defense"
          placeholder="Pokémon defense"
          value={pokemon.defense}
          onChange={handleChange}
         haveError={errors.defense}/>
        }
          {errors?.defense && <MyError>{errors?.defense}</MyError>}
        </LabelForm>
      
        <LabelForm  htmlFor="speed">
          speed
          {<MyInput 
          type="text"
          name="speed"
          placeholder="Pokémon speed"
          value={pokemon.speed}
          onChange={handleChange}
         haveError={errors.speed}/>
        }
          {errors?.speed && <MyError>{errors?.speed}</MyError>}
        </LabelForm>
        <LabelForm  htmlFor="height">
          height
          {<MyInput 
          type="text"
          name="height"
          placeholder="Pokémon height"
          value={pokemon.height}
          onChange={handleChange}
         haveError={errors.height}/>
        }
          {errors?.height && <MyError>{errors?.height}</MyError>}
        </LabelForm>
        <LabelForm htmlFor="weight">
          weight
          {<MyInput 
          type="text"
          name="weight"
          placeholder="Pokémon weight"
          value={pokemon.weight}
          onChange={handleChange}
         haveError={errors.weight}/>
        }
          {errors?.weight && <MyError>{errors?.weight}</MyError>}
        </LabelForm>
        <LabelForm  htmlFor="img">
          image
          {<MyInput 
          type="text"
          name="img"
          placeholder="Pokémon img"
          value={pokemon.img}
          onChange={handleChange}
         haveError={errors.img}/>
        }
          {errors?.img && <MyError>{errors?.img}</MyError>}
        </LabelForm>

        <LabelTypes htmlFor="types" >
          types
          <ContainerTypes>
            {pokemon.types.map(type => (
              <ButtonType
                key={type}
                value={type}
                onClick={handleRemove}
                t={type}
              >
                {type}
              </ButtonType>
            ))}
          </ContainerTypes>
          <MySelect
            id="types"
            onChange={handleType}
            value={pokemon.types}
            multiple={true}
            size={3}
          >
            {types &&
              types.map(type => (
                <OptionType
                  key={type.id}
                  value={type.name}
                  t={type.name}
                >
                  {type.name}
                </OptionType>
              ))}
          </MySelect>
          {errors?.types && <MyError>{errors?.types}</MyError>}
        </LabelTypes>

       <MyButoon
            type="submit"
            value="Create Pokémon"
            onClick={handleSubmit}
          />
    
      </Container>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ContainerModal>
          <h1>Pokemon added</h1>
         <Link to='/home'> <Button text='Home'/></Link>
         </ContainerModal>
      </Modal>
     
   </>
  )
}
