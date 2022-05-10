import { 
    GET_POKEMONS,
     GET_POKEMON_DETAILS,
     GET_TYPE,
     SORT,
     FILTER_BYTYPE,
     FILTER_STATS,
     FILTER_CREATE,
     CREATE_POKEMON
 


} from "../actions/actionType";




const initialSate={
    pokemons:[],
    allPokemons:[],
    pokeDetails:[],
    types:[],
 
}

function rootReducer(state=initialSate,{type,payload}){
  switch (type) {
      case GET_POKEMONS:
          return{
              ...state,
              pokemons:payload,
              allPokemons:payload
          };
       case GET_POKEMON_DETAILS:
           return{
               ...state,
               pokeDetails:payload
           };
           
        case GET_TYPE:
            return{
                ...state,
                types:payload
            };
        
        case SORT:
            let  order=[...state.pokemons]
            order=order.sort((a,b)=>{
               return payload==='ascending'?  a.name.localeCompare(b.name)
                                     : b.name.localeCompare(a.name)
            })
            return{
                ...state,
                pokemons:order
            }
        case FILTER_BYTYPE:
            const allPokemons=state.allPokemons
            const filerType=payload==='all'
                    ? allPokemons
                    : allPokemons.filter((poke)=>poke.types.includes(payload))
            return{
               ...state,
               pokemons:filerType
            }
        case FILTER_STATS:
             let filterByStats=[...state.pokemons]
             filterByStats=filterByStats.sort((a,b)=>{
                      if (payload==='id') {
                          return a.id-b.id
                      }
                      if (payload==='name') {
                          return a.name.localeCompare(b.name)
                      }
                      if (payload==='height') {
                          return a.height-b.height
                      }
                      if (payload==='weight') {
                         return a.weight-b.weight
                      }
                      if (payload==='attack') {
                         return a.attack-b.attack
                      }
                      return {}
                  })
                  return{
                      ...state,
                      pokemons:filterByStats
                  }
        case FILTER_CREATE:
             const filterCreate=payload==='existent'
                                        ? state.allPokemons.filter((poke)=>typeof poke.id==='number')
                                        : state.allPokemons.filter((poke)=>typeof poke.id==='string')
             
               return {
                   ...state,
                   pokemons:payload==='all' ? state.allPokemons :filterCreate
               }
        case CREATE_POKEMON:
            return{
                ...state
            }
          
         
  
      default:
          return {...state};
  }

}

export default rootReducer
