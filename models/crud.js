const mongoose = require('mongoose');
const crudSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneno : {
        type : String,
        required : true
    },
    dateofbirth : {
        type : String,
        required : true
    },
    pincode: {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    }

});

const Crud = mongoose.model('Crud', crudSchema);

module.exports = Crud;
