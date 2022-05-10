import axios from 'axios';
import { GET_POKEMONS, 
    GET_POKEMON_DETAILS,
    GET_TYPE,
    SORT,
    FILTER_BYTYPE,
    FILTER_STATS,
    FILTER_CREATE,

} from './actionType';

export function getPokemons(){
    return async (dispatch)=>{
       try {
        const data= await axios.get('http://localhost:3001/pokemons');
        dispatch({
            type:GET_POKEMONS,
            payload:data.data
        })
       } catch (error) {
          if (error.response) {
              const {response}=error
              console.log(response.data)
              console.log(response.status)
              console.log(response.headers)
          }
          console.log(error)
       } 
    }
}

export function getDetailById(id){
   return async (dispatch)=>{
       try {
          const data= await axios.get(`http://localhost:3001/pokemons/${id}`) 
          return dispatch({
              type:GET_POKEMON_DETAILS,
              payload:data.data
          })
       } catch (error) {
        console.log(error)
        dispatch({type:GET_POKEMON_DETAILS,
                   payload:{}})
       }
   }
}
export function getDetailByName(name){
   return async (dispatch)=>{
       try {
          
            const data= await axios.get(`http://localhost:3001/pokemons?name=${name}`) 
            return dispatch({
                type:GET_POKEMON_DETAILS,
                payload:data.data
            })
           
        
       } catch (error) {
           console.log(error)
           dispatch({type:GET_POKEMON_DETAILS,payload:{}})
       }
   }
}



export function createPokemon(payload){
   return async ()=>{
       try {
           const data=await axios.post('http://localhost:3001/pokemons',payload)
           return data
       } catch (error) {
           
       }
   }

}

export function getTypes(){
    return async dispatch=>{
        try {
            const data= await axios.get('http://localhost:3001/types')
            return dispatch({
                type:GET_TYPE,
                payload:data.data
            })
        } catch (error) {
            console.log(error)
            dispatch({type:GET_TYPE,payload:[]})
        }
    }
}

export function sort(sort){
    return {type:SORT,
            payload:sort
}
}

export function filterPokeByType(payload) {
    return{
        type:FILTER_BYTYPE,
        payload
    }
}

export function filterPokeByStats(payload) {
      return{
          type:FILTER_STATS,
          payload
      }
}

export function filterCreate(payload) {
       return{
           type:FILTER_CREATE,
           payload
       }
}




export function clearData(prop){
  return {type:GET_POKEMON_DETAILS,
            payload:prop}
}