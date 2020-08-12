const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

const db= require('./configuration/mongoose');

const Crud = require('./models/crud')



app.use(express.urlencoded());
app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views','./views');

app.use('/', require('./routes'));





app.listen(port,function(err){
    if(err){
        console.log(`Error ${err}`)

    }
    console.log("Server is ruuning on port:",port)
})
