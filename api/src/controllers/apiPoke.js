const axios=require('axios')
const {Pokemon, Type} = require("../db");
const {Op} = require("sequelize");



const getApiPokemon= async()=>{
   
    try { 
        const url=`https://pokeapi.co/api/v2/pokemon?limit=40`

        const apiUrl= await axios.get(`${url}`)//consulta la api y trea los 40 pokemones   
        const response= apiUrl.data.results
        const data= response.map(async poke=>{
           const get=  await axios.get(poke.url)
              return get.data
            
        }) 
      
        const responses = await Promise.allSettled(data);
        const poke = responses
          .filter(poke => poke.status === "fulfilled")
          .map(({value}) => {
            return {
              id: value.id,
              name: value.name,
              height: value.height,
              weight: value.weight,
              attack:value.stats[1].base_stat,
              types: value.types.map(t => t.type.name),
              img: value.sprites.other["official-artwork"].front_default,
            };
          });
         
        return poke; 
      
    } catch (error) {
        return error
    }
}

 const getDbInfo= async()=>{
     try {
         const  poke=await Pokemon.findAll({//trae toda la tabla pokemons y hago un join con la tabla Type solo con el 'name'
             include:{
                 model:Type,
                attributes:['name'],
                 through:{
                    attributes: [],
                }
             }
         })
          const dataDB=poke.map?.((poke)=>{
              return {
                id:poke.id,
                name:poke.name.charAt(0).toUpperCase()+poke.name.slice(1),
                height:poke.height,
                weight:poke.weight,
                attack:poke.attack,
                types:poke.dataValues.types?.map((type)=>type.name),
                img:poke.img,   
              }
          })
       return dataDB
     
     } catch (error) {
         return error
     }
 }

 const getPokeApiByName= async name=>{
     try {
            
        const url=`https://pokeapi.co/api/v2/pokemon/${name}`
        const apiUrl= await axios.get(url)
        const data= await apiUrl.data
        if (data?.name===name) {
            const poke={
               id: data.id,
               name: data.name,
               hp: data.stats[0].base_stat,
               attack: data.stats[1].base_stat,
               defense: data.stats[2].base_stat,
               speed: data.stats[5].base_stat,
               height: data.height,
               weight: data.weight,
               types: data.types.map(t => t.type.name),
               img: data.sprites.other['home'].front_default,
            }
            return poke  
        }    
        return{} 
     } catch (error) {
        if (error.status===404) {
            return error.message='Pokemon not found'
       }
     }
    
}

const getPokebDbByName = async (name) => {
    try {
      const {dataValues} = await Pokemon.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
     
      if (dataValues?.id) {
        const poke = {
          id: dataValues.id,
          name: dataValues.name,
          hp: dataValues.hp,
          attack: dataValues.attack,
          defense: dataValues.defense,
          speed: dataValues.speed,
          height: dataValues.height,
          weight: dataValues.weight,
          types: dataValues.types.map(t => t.name),
          img: dataValues.img,
        };
        console.log(poke)
        return poke;
      }
      return {};
    } catch (error) {
      return null;
    }
  };




 const getPokeApiById=async id=>{
     try {
           if (isNaN(id)) {
             const {dataValues}= await Pokemon.findByPk(id,{
                 include:{model:Type} 
             })
             if (dataValues?.id) {
                const poke = {
                  id: dataValues.id,
                  name: dataValues.name,
                  hp: dataValues.hp,
                  attack: dataValues.attack,
                  defense: dataValues.defense,
                  speed: dataValues.speed,
                  height: dataValues.height,
                  weight: dataValues.weight,
                  types: dataValues.types.map(t => t.name),
                  img: dataValues.img,
                };
                return poke;
              }
              return {};

           } else{  const url=`https://pokeapi.co/api/v2/pokemon/${id}`
           const apiUrl= await axios.get(url)
             const data= await apiUrl.data
             if (data?.id) {
                 const poke={
                    id: data.id,
                    name: data.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight: data.weight,
                    types: data.types.map(t => t.type.name),
                    img: data.sprites.other['home'].front_default,
                 }
                 return poke  
            } }

      
     } catch (error) {
        if (error.status===404) {
             return error.message='Pokemon not found'
        }
     }
   
}

const getTypeApi=async()=>{
    try {
        const url='https://pokeapi.co/api/v2/type'
        const apiUrl=await axios.get(url)
        const data=apiUrl.data.results
        const types=data.map((type)=>{
            return {name:type.name}
        })
       
        const dbTypes=await Type.findAll()
        if (dbTypes.length===0) {
            return  await Type.bulkCreate(types)
        }else{
          return await dbTypes
        }
    } catch (error) {
        return error
    }
}

// const getTypes=async ()=>{
//     try {
//        let dbTypes=await Type.findAll()
//        dbTypes=dbTypes.map((type=>)) 
//     } catch (error) {
        
//     }
// }





const  getAllPokemonsInfo= async()=>{
    try {
        const apiPoke= await getApiPokemon()
        const dbPoke= await  getDbInfo()
        return [...apiPoke,...dbPoke]
    } catch (error) {
        return error
    }
   
}

module.exports={
    getAllPokemonsInfo,
    getApiPokemon,
    getDbInfo,
    getPokeApiByName,
    getPokeApiById,
    getTypeApi,
    getPokebDbByName
}