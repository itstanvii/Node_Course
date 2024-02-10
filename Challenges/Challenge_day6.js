
const express = require('express');
const app=express();
function greetHandler(req,res){
    const name = req.query.name;
    res.send(`Hello ${name}`);

}
app.get('/greet',greetHandler);
const PORT = process.env.PORT||3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});