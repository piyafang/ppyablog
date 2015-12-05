var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pyfblogdata');
mongoose.model('User',new mongoose.Schema({
  username: String,
  password: String
}));

global.Model = function(modName){
    return mongoose.model(modName);
}
