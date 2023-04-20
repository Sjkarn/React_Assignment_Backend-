const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
      name:{
        type:String,
        required:true,
        trim:true
      },
      email:{
        type:String,
        required:true,
        unique:true,
        trim:true
      },
      roll:{
        type:String,
        required:true,
        unique:true,
        trim:true
      },
      course:{
        type:String,
        required:true,
        trim:true
      }
},{timestamps:true})

module.exports= mongoose.model("student", studentSchema)