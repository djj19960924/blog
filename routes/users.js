var express = require('express');
var router = express.Router();
var query=require('../sql/db')

/* GET users listing. */
// query("select*from user",(err,rows,fields)=>{
//   if(err){
//     throw err
//   }else{
//     console.log(rows)
//   }
// })
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
