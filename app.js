const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const homeRouter = require('./homeRouter');
const bodyParser = require('body-parser');
const port= process.env.port || 8080;
const app = express();


mongoose.connect('mongodb://localhost:27017/userdata',{useNewUrlParser: true})
const db = mongoose.connection;

db.on("error",()=>{console.log("erroe in connection");})
db.once("open",()=>{console.log("connected");})
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended:false}))

// parse application/json
app.use('/',homeRouter)
app.use(express.static('style'))
app.use(express.static('public'))
app.listen(port)