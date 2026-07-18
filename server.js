import express from 'express';
const app=express();
const port=3000

app.get('/health',(req,res)=>{
  res.send('Hello World'); 
})
app.listen(()=>{
    console.log(`server is running on http://localhost:${port}`);
})