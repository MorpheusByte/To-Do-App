"use strict"

// Express - To Do Api

const express = require('express');
const app = express();




require('dotenv').config()
const PORT = process.env.PORT;
const HOST = process.env.HOST;

//middlewares

app.use(express.json());

//Routes
app.all('/', (req, res)=> res.send({message:'Welcome to TODO API'}))

app.use('/todos', require('./src/middlewares/errorHandler'));



// ErrorHandler
app.use(require('./src/middlewares/errorHandler'));


app.listen(PORT,HOST, ()=> console.log(`Running at: http://${HOST}:${PORT}`))