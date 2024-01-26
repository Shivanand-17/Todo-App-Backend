const Todo = require("../models/Todo");

exports.getTodo = async(req,res) =>{
    try{
        // fetch alltodo items from database
        const todos= await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo is fetched"
        });
    }
    catch(err){
         console.error(err);
         res.status(500)
         .json({
            sucess:false,
            error:err.message,
            message:'Server Error',
         });
    }
}

exports.getTodoById =async(req,res) => {
    try{
       // extends todo items on id
       const id= req.params.id;
       const todo= await Todo.findById({_id:id})

       // data forgiven id not fount
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data FoundWithout given Id",
        })
       }

       // data forgive found ud
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`,
       })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
           sucess:false,
           error:err.message,
           message:'Server Error'
        });
    }
}