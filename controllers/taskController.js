export const root=(req,res)=>{
    res.json({
  "name": "Task API",
  "version": "1.0",
  "endpoints": ["/tasks"]
})
}
export const health=(req,res)=>{
    res.json({
  "status": "ok"
})
}
