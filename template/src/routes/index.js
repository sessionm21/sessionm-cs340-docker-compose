var express = require('express');
var router = express.Router();

/* Check MYSQL configuration */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host            : process.env.MARIADB_HOST,
  user            : process.env.MARIADB_USER,
  password        : process.env.MARIADB_PASSWORD,
  database        : process.env.MARIADB_DATABASE
});

connection.connect()

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM bsg_cert', function (err, rows, fields) {
    if (err) { 
      res.render('index', { title: 'Express', data: "Query failed" });
      throw err
    }
    res.render('index', { title: 'Express', data: JSON.stringify(rows) });
  })
});

module.exports = router;
