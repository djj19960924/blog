//数据库连接
var mysql = require("mysql");
//创建连接池
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database:'djj'
});
//连接公用方法
function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}
module.exports={query}