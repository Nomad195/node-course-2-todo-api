var mongoose = require('mongoose');

var user = mongoose.model('users', {
        email: {
          type: String,
          required: true,
          minlength: 10,
          trim: true
        }
  });
  
    
 module.exports = {user};