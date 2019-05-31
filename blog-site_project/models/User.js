const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({

    title:{
        required:true,
        type: String
    },
    image:{
        required:true,
        type: String
    },
    description:{
        required:true,
        type: String
    }

})

const User = mongoose.model('users', userSchema);

module.exports = User;