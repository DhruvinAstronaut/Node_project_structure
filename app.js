const express = require('express');
const pathh = require('path');
require('./config/database');
const express_layouts = require('express-ejs-layouts');
const session = require('express-session');

const app = express();

app.set('views', pathh.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express_layouts);


/**
 * Seassion for user
 */
 app.use(
    session({
      secret: "2C44-4D44-WppQ38S",
      resave: true,
      saveUninitialized: true,
    })
  );


/**
 * All Frontend routers
 */
const viewRouter = require('./views/routes/index');

app.use('/',viewRouter );


/**
 * All Backend routers
 */ 
const developerRouter = require('./routes/route.developer')
const develoeprLoginRoute = require('./routes/route.login');
const developerViewRoute = require('./routes/route.viewDeveloper');


app.use('/api', developerRouter);
app.use('/login', develoeprLoginRoute);
app.use('/view', developerViewRoute);



/**
 *  Listen the Application
 */
const port = process.env.PORT || 7000
app.listen(port, ()=> console.log(`App is listning on port number ${port}`));