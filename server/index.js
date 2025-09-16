"use strict";

/* -------------------------------------------
            Express - Todo Api
------------------------------------------- */

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

require('dotenv').config()
const PORT = process.env.PORT;
const HOST = process.env.HOST;
/* ------------------------------------------- */
// Middlewares

app.use(express.json());

// default cors options:
// {
//     origin: '*', // Allow all origins
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
//     allowedHeaders: undefined, // Allow headers requested by client (via Access-Control-Request-Headers)
//     exposedHeaders: undefined, // No response headers exposed to the browser
//     credentials: false, // Don't allow cookies or Authorization headers by default
//     preflightContinue: false, // Don't pass preflight OPTIONS to next middleware
//     optionsSuccessStatus: 204, // Response status code for successful OPTIONS
//     maxAge: undefined // Don't cache preflight responses
//   }

const corsOptions = {
    origin: ['http://localhost:3000',],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Custom-Header'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: 86400, // cache preflight for  1 day
}

app.use(cors(corsOptions));


// Configs

// DB Connection
require('./src/configs/db')();


/* ------------------------------------------- */
// Routes

app.all('/', (req, res) => res.send({ message: 'Welcome to TODO API' }))

app.use('/todos', require('./src/routers/todo'));


// ErrorHandler
app.use(require('./src/middlewares/errorHandler'));

/* ------------------------------------------- */
app.listen(PORT, HOST, () => console.log(`Runing at: http://${HOST}:${PORT}`));