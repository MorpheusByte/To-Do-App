"use strict";

/* -------------------------------------------
            Express - Todo Api
------------------------------------------- */

const { connect } = require('mongoose');

module.exports = () => {

    const DB_URI = process.env?.DB_URI

    if (!DB_URI) throw new Error('DB_URI is missing!');

    connect(DB_URI)
        .then(() => console.log('* DB Connected *'))
        .catch((err) => console.log('! DB Not Connected !', err));
}