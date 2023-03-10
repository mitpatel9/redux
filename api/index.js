const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors())
app.use(express.json());

app.post('/api/user/update', (req,res)=>{
    setTimeout(() => {
        res.send(req.body);
        
    }, [2000]);
})

app.listen(8000,()=>{
    console.log("Backend Server is running on 8000 port")
})