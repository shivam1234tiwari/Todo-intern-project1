import Task from '../data/task.js'
export const root=(req,res)=>{
   try{
     res.json({
  "name": "Task API",
  "version": "1.0",
  "endpoints": ["/tasks"]
})
   }catch(error){
    return res.status(500).json({
      message:"Internal Server Error"
    })
   }
}
export const health=(req,res)=>{
    res.json({
  "status": "ok"
})
}
export const alltask=async(req,res)=>{
  try{
    const taskdata=await Task.find();
    if(!taskdata){
      return res.status(404).json({
        "error": "Task 99 not found"
      })
    }
    return res.status(200).json({
      taskdata,
      message:"All Tasks"
    })
  }catch(error){
    return res.status(500).json({
      message:"Internal Server Error"
    })
  }
}
export const Singletask=async(req,res)=>{
  try{
    const tasks=await Task.findOne({id});
    if(!tasks){
      return res.status(404).json({
        "error": "Task 99 not found"
      })
    }
    return res.status(200).json({
      tasks,
      message:"Task is avaiable"
    });
  }catch(error){
    return res.status(500).json({
      message:"Internal Server Error"
    })
  }
}
