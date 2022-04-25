const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    studentName:{
        type: String,
        required: true,
        min: 5,
        max: 25,
    },
    email:{
        type: String,
        required: true,       
    },
    courseName:{
        type: String,
        required: true,       
    },
    topic:{
        type: String,
        required: true, 
        max:30,       
    },
    question:{
        type: String,
        required: true, 
        max:500,  
    },

    userID:{
        type: String,
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;