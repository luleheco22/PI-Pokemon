import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container=styled.form`
position: relative;
width: 500px;
left: 50%;
transform: translate(-50%);
margin-top: 1rem;
`
const SeacrhLabel=styled.label`
     font-size:${props=>props.theme.fontls};
    text-transform: capitalize;
    color:${props=>props.theme.text};
    font-weight: 600;
    margin: bottom 1rem;
    align-self: flex-start;
    padding: 1rem;   
`


const SearchInput=styled.input`
     position: relative;
     display: inline-block;
     box-sizing: border-box;
     transition: .5s;
     background: fff;
     width: 340px;
     height: 50px;
     border: none;
     outline: none;
     padding: 0 25px;
     border-radius: 25px 0 0 25px;
     border: solid 2px  #ffc107;
     margin-top: 1rem;
     margin-bottom: 1rem; 
`
const SearchButon=styled.input`
   position: relative;
     display: inline-block;
     box-sizing: border-box;
     transition: .5s;
     border-radius: 0 25px 25px 0;
     height: 50px;
     width: 150px;
     border: none;
     outline: none;
     cursor: pointer;
     background:#ffc107;
     color:#fff ;

&:hover{
    background:#f27121ff ;
}

`








const SeacrhBar = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = e => {
      e.preventDefault();
      setErrors(validator(name));
      if (Object.keys(errors).length === 0 && name !== "") {
        navigate(`/detail/${name}`, {replace: true});
        setName("");
       } 
    }
    const handleChange = e => {
      setErrors(validator(e.target.value));
      setName(e.target.value.toLowerCase());
    };
      const validator = input => {
        let errors = {};
        if (
          input.length < 1 ||
          input.length === 0 ||
          input === "" ||
          input.trim() === ""
        ) {
          errors.search = "Can not be empty";
        }
        return errors;
      };

  return (
      <>
    
    <Container onSubmit={handleSubmit} >
    <SeacrhLabel htmlFor='search'>Name or Number of Pokemon</SeacrhLabel>
      
        <SearchInput 
        type='text' 
        id='search'
        placeholder='Ej:Pikachu'
        onChange={handleChange}
        value={name}
        list='pokes'
          
        />
        <SearchButon
        type='submit'
        name=''
        value='Seacrh'
        
        />

        {errors.search && <span>{errors.search}</span>}
     
    
    </Container>
    </>
  )
}

export default SeacrhBar
