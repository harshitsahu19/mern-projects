var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const localStrategy= require("passport-local")


// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://harshit19sahu:ZVBRYYzPZP9fHWLh@mycluster.hxk77.mongodb.net/mycluster?retryWrites=true&w=majority&appName=mycluster');

// Event listeners for successful connection or error
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection successful');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define a user schema
const userSchema = mongoose.Schema({
 username:String,
 password:String,
 secret:String
});
userSchema.plugin(require('passport-local-mongoose'));


// Register the user model
module.exports=mongoose.model('user', userSchema);




