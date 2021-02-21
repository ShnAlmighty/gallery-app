const express = require('express');
const path = require('path');
const public = path.join(__dirname,"public");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(public));

app.get("/",(req,res)=>{
    res.send('index.html');
});

app.listen(port);