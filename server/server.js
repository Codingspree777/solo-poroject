const express = require('express');
const app = express();
const messageController = require('./MessageComponent/messageController');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect(JSON.parse(fs.readFileSync(__dirname + '/config.json','utf8')).uri, () => {
  connectedToDB = true;
  console.log('connected to mongo');
});

app.get('/messages', (req, res) => {
  console.log(reg)
  //response with set header
 res.setheader("Content-Type", "application/json'");
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