import express from 'express';
import taskRoute from './routes/taskRoutes.js'
const app=express();
const port=3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',taskRoute);

app.get('/',(req,res)=>{
  res.send('Hello World'); 
})
app.listen(()=>{
    console.log(`server is running on http://localhost:${port}`);
})