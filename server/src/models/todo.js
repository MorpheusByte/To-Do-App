'use strict';

// Express - ToDo Api

const {Schema} = require('mongoose');


const todoSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true,
        minlenght:3,
        maxleght: 250
    },

    description: {
        type: String,
        trim: true,
        required: true,
        minlenght: 5,
        maxlenght: 250
        },
    priority: {
        type: String,
        enum: [['Low', 'Medium', 'High'], 'Invalid value. Please enter one of these: "Low", "Medium", "High"'],
        default: "Medium"
    },
    isDone: {
        type: Boolean,
        default: false
    }
    
},{
    collection: 'todos',
    timestamps: true
})