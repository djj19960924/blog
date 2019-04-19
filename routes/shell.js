var express = require('express');
var router = express.Router();

const fs = require('fs')
const xlsx = require('node-xlsx')

let array = []
const sheets = xlsx.parse('./public/arek.xlsx')
sheets.forEach(sheet => {
    // 获取整个excel中的数据
    const data = sheet['data']
	
    // 将需要的列数据组装成数组
    for(let rowId in data){
        const row = data[rowId]
        for(var i=0;i<row.length;i++){
            if(row[i]){
                array.push(row[0])
            }
        }
        
    }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(array);
});

module.exports = router;
