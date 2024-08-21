const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userData = new Schema({
    schemaName:{
        type:String,
        required:true,
    },
    schemaEmail:{
        type:String,
        unique:true,
        required:true,
    },
    schemaPassword:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('userData', userData);