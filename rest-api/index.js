const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mobile-legend-heroes');
mongoose.Promise = global.Promise;

const app = express();

//routers
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const routers = require('./routers');
app.use('/api',routers);


app.use(function(err,req,res,next){
  res.status(422).send({err: err.message});
});

app.listen(process.env.port || 5000, function(){
  console.log("dih");
})
