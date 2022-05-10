const {Router}=require('express')
const {getAllPokemons,postNewPokemon}=require('../controllers/pokemons')
 const route=Router()

route.get('/',getAllPokemons)
route.get('/:id',getAllPokemons)
route.post('/',postNewPokemon)



 module.exports=route;