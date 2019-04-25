const express = require('express');
const app = express();
const messageController = require('./MessageComponent/messageController.js');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb://andrew:$codesmith&@ds035713.mongolab.com:35713/slack-server");

app.get('/messages', (req, res) => {
  //response with set header
  res.header("Content-Type", "application/json'");
  //need since a __dirname is created, we can shortcut to send file. 
  return messageController.getMessages(req, res);
    
})


// statically serve everything in the build folder on the route '/build'
if(process.env.NODE_ENV === 'production')
//if(process.env.npm_package_scripts_build === 'NODE_ENV=production webpack')
{
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

}
 //listens on port 3000 -> http://localhost:3000/

 app.listen(3000);