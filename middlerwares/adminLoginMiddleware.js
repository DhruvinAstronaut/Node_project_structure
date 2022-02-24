const session = require("express-session");

const verifyAdmin = function (req, res, next) {
  if (req.session && req.session.admin) return next();
  else
    return res.status(401).send("You are not authorized to access this page");
};

module.exports = verifyAdmin;