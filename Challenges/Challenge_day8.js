/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const express = require('express');
const app = express();


function validatePositiveInteger(req, res,next) {
  const number = req.query.number;
  if(!number || isNaN(number)||parseInt(number)<=0 || !Number.isInteger(parseFloat(number)))
{
    next(new Error('Number must be a positive integer.'));

}  
else{
    next();

 }
}
  app.get('/positive',validatePositiveInteger,(req,res)=>{
    const number = parseInt(req.query.number);
    res.send(`Success! ${number} is a positive integer.`);

  });
  app.use((err, req, res, next)=>{
    if(err.message == 'Number must be a positive integer.'){
        res.status(400).send('Error: Number must be a positive integer.');

    }
    else{
        next(err);
    }
  });
  const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})