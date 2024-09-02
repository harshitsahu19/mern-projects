var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshit19sahu:5nymayYN1AJenwjv@tododatabase.mv7fn.mongodb.net/?retryWrites=true&w=majority&appName=tododatabase')

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to the database');
});


mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  tasks: [] // Embed the Task schema as an array
});

module.exports=mongoose.model('user', userSchema);