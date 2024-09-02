var express = require('express');
var router = express.Router();
const userModel = require ('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create',async function(req,res){
 const createdUser = await userModel.create({
    username:"jhon",
    password:"testt",
    task:[]
  })
  res.send(createdUser)
})

router.get('/allusers',async function(req,res){
 const allusers =  await userModel.find()
 res.send(allusers)
 console.log(allusers)

})

router.get




module.exports = router;
