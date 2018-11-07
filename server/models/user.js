var mongoose = require('mongoose');

var users = mongoose.model('users', {
        email: {
          type: String,
          required: true,
          minlength: 10,
          trim: true
        }
  });
  
    
 module.exports = {users};