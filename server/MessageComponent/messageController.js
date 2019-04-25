const Message = require ('./messageModel.js')
const mongoose = require('mongoose');

mongoose.connect("mongodb://andrew:$codesmith&@ds035713.mongolab.com:35713/slack-server");

module.exports = {
   
    getMessages: (req, res) => {
      Message.find({}, (err, foundMessages) => {
        if (err) {
          return response.end(err);
        }
      }).then(function(data){
        return response.end(JSON.stringify(data));
      });
    },
}
  