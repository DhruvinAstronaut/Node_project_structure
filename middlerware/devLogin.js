const Success = require('../responses/success.json');
const Error = require('../responses/error.json');
const Developer = require('../models/schemaModel/develoeprModel');

module.exports = async function developerFind(req, res, next) {

            const email = await Developer.findOne({ email: req.body.email })
            if (email == null) {
                res.send("Email not found")
            }
            next();

}