  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var personSchema = mongoose.Schema({
   name: String,
   username: String,
   email:String,
   password: String});



module.exports = mongoose.model('Person', personSchema);