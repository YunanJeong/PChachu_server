var mysql = require('mysql');

var pool;

exports.connect = function(done) {
    pool = mysql.createPool({
        connectionLimit: 100,
        host     : 'localhost',
        user     : 'root',
        password : 'elql1234',
        database : 'pc_main'
    });
	console.log('db connection success');
}

exports.get = function() {
  return pool;
}