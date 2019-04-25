const express = require('express');
const app = express();
const messageController = require('./MessageComponent/messageController.js');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb://andrew:$codesmith&@ds035713.mongolab.com:35713/slack-server");

app.get('/messages', (req, res) => {
  //response with set header
  res.header("Content-Type", "application/json'"); 
  return messageController.getMessages(req, res);
    
})


 //listens on port 3000 -> http://localhost:3000/

 app.listen(8080);