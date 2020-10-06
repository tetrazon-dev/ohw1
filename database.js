const mongoose = require('mongoose');

let sa = new mongoose.Schema({
  naber: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Sa', sa)