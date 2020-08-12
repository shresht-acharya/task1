
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/crud_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function(){
    console.log('Succesfully connected to database');
})