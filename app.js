const express = require('express');
const app = express();
const view = require('view');
require('./config/database');

// All routers 
const developerRouter = require('./routes/route.developer')
const develoeprLoginRoute = require('./routes/route.login');
const developerViewRoute = require('./routes/route.viewDeveloper');

// Use all routers
app.use(express.json());
app.use('/api', developerRouter);
app.use('/login', develoeprLoginRoute);
app.use('/view', developerViewRoute);


   
const port = process.env.PORT || 8000
app.listen(port, ()=> console.log(`App is listning on port number ${port}`));