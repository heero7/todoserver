// ! ES6 imports are not allowed unless configured.
// import express from 'express';

var express = require('express'), 
    app = express(), 
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

let routes = require('./api/routes/TodoListRoutes');  // importing routes
let healthRoutes = require('./api/routes/HealthCheckRoutes');

routes(app); // register routes
healthRoutes(app);

app.listen(port);

console.log(`Starting TodoServer on port: ${port}`);