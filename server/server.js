const express = require('express');
const app = express();
const messageController = require('./MessageComponent/messageController.js');
const path = require('path');
const mongoose = require('mongoose');


app.get('/messages', (req, res) => {
  //response with set header
  ///set path
  let file = path.join(__dirname, '/client', 'that.html')
  //set header
  res.header("Content-Type", "text/html; charset=utf-8");
  //need since a __dirname is created, we can shortcut to send file. 
  res.sendFile(file);
    
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
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

