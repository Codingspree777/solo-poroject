const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  created_by: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  message: {type: String, required: true}
});

module.exports = mongoose.model('Message', messageSchema);