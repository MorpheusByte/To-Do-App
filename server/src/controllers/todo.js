"use strict";

// Express - Todo Api

const Todo = require('../models/todo');


module.exports = {

    list: async (req, res) => {

        const result = await Todo.find();

        res.status(200).send({
            error: false,
            result
        });
    },

    create: async (req, res) => {

        const result = await Todo.create(req.body);

        if (!result) {
            res.errStatusCode = 400
            throw new Error('Data is not created, something went wrong.');
        };

        res.status(200).send({
            error: false,
            result
        });
    },

    read: async (req, res) => {

        const { id } = req.params;
        const result = await Todo.findById(id);

        if (!result) {
            res.errStatusCode = 404
            throw new Error('Data is not found');
        };

        res.status(200).send({
            error: false,
            result
        });
    },

    update: async (req, res) => {

        const { id } = req.params;
        const result = await Todo.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            res.errStatusCode = 400
            throw new Error('Data is not updated, something went wrong.');
        };

        res.status(200).send({
            error: false,
            result
        });
    },

    delete: async (req, res) => {

        const { deletedCount } = await Todo.deleteOne({ _id: req.params.id });

        if (!deletedCount) {
            res.errStatusCode = 404
            throw new Error('Data is not found or something went wrong.');
        } else {
            res.sendStatus(204)
        }
    },
}