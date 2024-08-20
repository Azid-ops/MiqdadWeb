const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetails = new Schema({
    schemaFirstName:{
        type:String,
        required:true
    },
    schemaLastName:{
        type:String,
        required:true
    },
    schemaAge:{
        type:Number,
        required:true
    },
    schemaGender:{
        type:String,
        required:true
    },
    schemaProfession:{
        type:String,
        required:true
    },
    _id:{
        type:String,
        required:true,
    }

});

module.exports = mongoose.model('userDetails',userDetails);