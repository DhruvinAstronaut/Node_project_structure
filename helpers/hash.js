const bcrypt= require('bcrypt');

module.exports = {
   
    hash_field: async (parameter,salt) =>{

            const hashed =  await bcrypt.hash(parameter, salt);
            return hashed;

        }
}





