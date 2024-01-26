//import the model

const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) =>{
    try{
        //extract title and desxcription from request body
        const {title,description} = req.body;
        //create a newtodoobj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with asuccess flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry create Successfully'
            }
        );
    }
    catch(err){
          console.error(err);
          console.log(err);
          res.status(500)
          .json({
            success:false,
            data:"internal server error",
            message:err.message,
          })
    }
}