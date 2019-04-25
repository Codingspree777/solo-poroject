const Message = require ('./messageModel.js')
const mongoose = require('mongoose');



module.exports = {
   
    getMessages: (req, res) => {
      Message.find({}, (err, foundMessages) => {
        if (err) {
          return res.end(err);
        }
      }).then(function(data){
        return res.end(JSON.stringify(data));
      });
    },
}
  