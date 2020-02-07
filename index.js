// ! ES6 imports are not allowed unless configured.
// import express from 'express';

var express = require('express'), 
    app = express(), 
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/TodoListRoutes');  // importing routes
routes(app); // register routes

app.listen(port);

console.log(`Starting TodoServer on port: ${port}`);