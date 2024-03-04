const mongoose = require('mongoose')
const validator= require('validator')

const helpSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error ("Email is invalid")
        }
    },
    studentID:{
        type:Number,
        required:true,
        unique:true,
        validate(value){
            if(value<0){
                throw new Error("Enter valid studentId")
            }
        }
    },
    topics:{
        type:Array,
        required:true
    },
    description:{
        type:String,
    },
    
},{
  timestamps:true
})

const Help = mongoose.model('Help',helpSchema)

module.exports = Help