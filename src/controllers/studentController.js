const StudentModel= require("../models/studentModel");
const validators= require("../validators/validation");
let {isValid,isValidEmail,isValidRoll}= validators

const createStudent= async (req,res)=> {
    try {
        let body= req.body
        
        if (Object.keys(body).length == 0) return res.status(400).send({ status: false, message: "Please enter some data" })
        
        
        if (!isValid(body.name)) return res.status(400).send({ status: false, message: "please enter name correctly" })
        if (!isValidEmail(body.email)) return res.status(400).send({ status: false, message: "please enter email correctly" })
        if (!isValidRoll(body.roll)) return res.status(400).send({ status: false, message: "please enter roll correctly" })
        if (!isValid(body.course)) return res.status(400).send({ status: false, message: "please enter course correctly"})
        
        const email = await StudentModel.findOne({ email: body.email });
        if (email) return res.status(400).send({ status: false, message: "email already exist" })
        const roll = await StudentModel.findOne({ roll: body.roll });
        if (roll) return res.status(400).send({ status: false, message: "roll already exist" })

        let create= await StudentModel.create(body)
        res.status(201).send({status:true, data:create})
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const getStudent= async (req,res)=> {
    try {
      let getStudentDetails= await StudentModel.find().select({name:1,email:1,roll:1,course:1,_id:0})
      res.status(200).send({status:true, data:getStudentDetails})
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports= {createStudent,getStudent}