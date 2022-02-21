const Developer = require('../models/schemaModel/develoeprModel');

module.exports = {

    view_User: async(req,res,next) => {
           
        try {
            Developer.findOne({_id: req.body.id},(error,result)=>{
                if(error){
                    return res.send("server error");
                }else if(!result){
                    return res.send("user does't exist");
                }else{
                    res.send(result);
                }
            })
            
        } catch (error) {
            return res.send("internal server error")
        }
    }
}