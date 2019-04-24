const Message = require ('./messageModel.js')

const MessageController = {
    // Create a new student in the Database
    // Their information will be sent in the request body
    // This should send the created student
    createMessages(req, res) {
      let Message = new Message({});
      
      Message.save(function (err, info) {
      if (err) return res.send("err!");
      return res.send(info);
      });
  
    },
  
    // Get a student from the database and send it in the response
    // Their first name will be in the request parameter 'name'
    // This should send the found student
    getMessages(req, res) {
      Message.findOne({firstName: req.name}, function (err, info) {
        if (err) return  res.send("err!");
        return res.send(info)
      });
    },
  
    // Get a student from the database and update the student
    // The student's first name will be in the request parameter 'name'
    // The student's new first name will be in the request body
    updateMessages(req, res) {
      Message.findOneAndUpdate({ firstName: req.name }, function (err, info) {
        if (err) return res.send("err!");
        return res.send(info)
      });
      
  
    },
  
    // Delete a student from the database
    // The student's first name will be sent in the request parameter 'name'
    // This should send a success status code
    deleteStudent(req, res) {
      Student.findOneAndDelete({ firstName: req.name }, function (err) {
        if (err) return res.send("err!");
        return res.sendStatus(200);
      });
  
    },
  };
  
  module.exports = StudentController;
  