const express = require('express');
const app = express();
const path = require('path');

// app.get('/api/cuisines/', (req, res) => {
//   res.send();
// });


console.log(process.env.NODE_ENV);

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

