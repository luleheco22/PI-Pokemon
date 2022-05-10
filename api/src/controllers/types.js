const {getTypeApi}=require('./apiPoke')
module.exports = {

    getTypes:async (req,res,next)=>{
        try {
            const types=await getTypeApi()
                res.send(types)
            
        } catch (error) {
            if (error.response) {
                res.status(error.response.status).send({msg: error.response.status});
              } else if (error.request) {
                next(error.request);
              } else {
                next(error);
              }
        }
    }

}



