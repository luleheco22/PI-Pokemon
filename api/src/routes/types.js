const {Router}=require('express');
const { getTypes }=require('../controllers/types')
 const route=Router()

route.get('/',getTypes)

 module.exports=route;