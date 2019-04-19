var express = require("express");
var router = express.Router();
var db = require("../sql/db");

router.post("/", function(req, res, next) {
  var username = req.body.username;
  var pwd = req.body.pwd;
  db.query("select*from user", (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log(rows);
      if(rows){
          for(let i=0;i<rows.length;i++){
              if(rows[i].username==username){
                res.send('0')
              }else{
                db.query(`insert into user(username,password) values("${username}","${pwd}")`,(err,rows)=>{
                    if(err){
                        res.send('1')
                        console.log("插入失败")
                    }else{
                        res.send('2')
                        console.log("注册成功")
                    }
                })
              }
          }
      }else{
          db.query(`insert into user(username,password) values("${username}","${pwd}")`,(err,rows)=>{
              if(err){
                  res.send('1')
                  console.log("插入失败")
              }else{
                  res.send('2')
                  console.log("注册成功")
              }
          })
      }
    }
  });
});

module.exports = router;
