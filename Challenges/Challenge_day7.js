const express = require('express');
const app = express();
const logRequest=(req, res, next) => {
    console.log(`${new Date()} next(); ${req.method} request received`);
    next();
};
app.use(logRequest);
app.get('/',(req, res)=>{ res.send('Hello world!');
});
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})