const {Pokemon,Type}=require('../db')
const {Op}=require('sequelize')
const { getAllPokemonsInfo,getPokeApiByName,getPokeApiById,getPokebDbByName}=require('./apiPoke')
module.exports={
    getAllPokemons:async (req,res,next)=>{
        try {
            const {name}=req.query;
            const {id}=req.params

            if (id) {
             const poke= await getPokeApiById(id)
             return poke ? res.status(200).send(poke)
                         :res.send({msg:'Pokemon not found by id'})
                        
            }
            if(name){
                const pokeDb=await getPokebDbByName(name.toLowerCase())

                    if (pokeDb) {
                        return pokeDb ? res.status(200).send(pokeDb)
                        : res.send({msg:'Pokemon not found by name Db'})
                    }else{
                        const poke=await getPokeApiByName(name.toLowerCase())
                        return poke ? res.status(200).send(poke)
                                    : res.send({msg:'Pokemon not found by name'})
                    }
               
                              
            }else{
                const getAll= await getAllPokemonsInfo()
                res.send(getAll)
            }
        } catch (error) {
            if (error.response) {
                res.status(error.response.status).send({msg: error.response.status});
              } else if (error.request) {
                next(error.request);
              } else {
                next(error);
              }
        }
    },

    postNewPokemon:async(req,res,next)=>{
        try {
        
        const {name,hp,attack,defense,speed,height,weight,img,types}=req.body
       
        const typedb= await Type.findAll({
            where:{
                name:types
            }
        })
        const [pokemon,created]=await Pokemon.findOrCreate({
            where:{
                name:name,
            },
            defaults:{
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                img
            },
            include:[{
                    model:Type,
                    where:{
                        name:types
                    }
                }]
         })
       
        await pokemon.addTypes(typedb)

        if (name) {
            
        }
         
         if (created) {;
             return res.status(201).send({mds:'Pokemon created', pokemon})
         } else{
            return res.status(406).send({msg:'There is already a pokemon with this name',pokemon})
        }
        } catch (error) {
            if (error.response) {
                res.status(error.response.status).send({msg: error.response.status});
              } else if (error.request) {
                next(error.request);
              } else {
                next(error);
              }
        }
    },

    deletePoke: async (req,res,next)=>{

    }


}
 





