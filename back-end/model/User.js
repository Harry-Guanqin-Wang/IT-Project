const { default: mongoose } = require("mongoose");

//we store hash and salt into our database instead of the plain password to enhance security
const userSchema = new mongoose.Schema({email: 'string', salt: 'string', hash: 'string', username: 'string'})
const userModel = mongoose.model('userModel', userSchema)
module.exports = userModel