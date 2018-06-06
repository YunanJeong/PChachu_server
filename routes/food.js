var express = require('express');
var formidable = require('formidable');
var db = require('../db')
var router = express.Router();

router.get('/list', function(req, res) {
	
	console.log("in router get list");
	console.log(req.query.id);
	
    var sql = "select *  from pc_main.pc_cafe";
    var params = [ 0, 10];
    console.log("sql : "+sql);

    db.get().query(sql,  function (err, rows) {
		console.log('in db get()');
        if (err) return err;
  		console.log('in sql moon');
		console.log(rows);
        console.log("rows : " + JSON.stringify(rows));      
        res.status(200).json(rows);
    });
});

//no1 get
router.get('/get1', function(req, res,next) {	
	console.log("in router get1");
	var pc_address1 = req.query.pc_address1;
	var pc_address2 = req.query.pc_address2;
	var pc_address3 = req.query.pc_address3;
	
	if(pc_address3 == "null" && pc_address2 == "null"){//only pc_address1 is not null
		console.log("only pc_address1 is not null");		
		var sql = "SELECT Pc_id, Pc_name, Pc_address1, Pc_address2, Pc_address3, Pc_address4 FROM pc_main.PC_cafe WHERE Pc_address1= ? ";
 			   var params = [ pc_address1];
    				console.log("sql : "+sql);

			    db.get().query(sql,  params, function (err, rows) {
					console.log('in db get()');
       			if (err) return err;
  					console.log('in sql moon');
					console.log(rows);
        				console.log("rows : " + JSON.stringify(rows));      
        				res.status(200).json(rows);
					res.end("success");
    				});
	}
	else if(pc_address3 == "null"){// pc_address2 and pc_address1 is not null
			    console.log("pc_address2 and pc_address1 is not null");		
			    var sql = "SELECT Pc_id, Pc_name, Pc_address1, Pc_address2, Pc_address3, Pc_address4 FROM pc_main.PC_cafe WHERE Pc_address1 = ? AND pc_address2 = ?";
 			   var params = [ pc_address1, pc_address2];
    				console.log("sql : "+sql);

			    db.get().query(sql,  params, function (err, rows) {
					console.log('in db get()');
       			if (err) return err;
  					console.log('in sql moon');
					console.log(rows);
        				console.log("rows : " + JSON.stringify(rows));      
        				res.status(200).json(rows);
					res.end("success");
    				});			
		}
		else{//pc_address1 and pc_address2 and pc_address3 is not null
			console.log("pc_address1 and pc_address2 and pc_address3 is not null");
			    var sql = "SELECT Pc_id, Pc_name, Pc_address1, Pc_address2, Pc_address3, Pc_address4 FROM pc_main.PC_cafe WHERE Pc_address1 = ? AND Pc_address2 = ? AND Pc_address3 = ? ";
 			   var params = [ pc_address1, pc_address2, pc_address3];
    				console.log("sql : "+sql);

			    db.get().query(sql,  params, function (err, rows) {
					console.log('in db get()');
       			if (err) return err;
  					console.log('in sql moon');
					console.log(rows);
        				console.log("rows : " + JSON.stringify(rows));      
        				res.status(200).json(rows);
					res.end("success");
    				});			
		}
});

//no2 get
router.get('/get2', function(req, res,next) {
	
	console.log("in router get2");
	var pc_id = req.query.pc_id;
	
    var sql = "SELECT Pc_name, Pc_spec, Pc_seat, Pc_charge, Pc_address1, Pc_address2, Pc_address3, Pc_address4, Fran_id FROM pc_main.Pc_cafe WHERE pc_id= ?";
    var params = [ pc_id];
    console.log("sql : "+sql);

    db.get().query(sql,  params, function (err, rows) {
		console.log('in db get()');
        if (err) return err;
  		console.log('in sql moon');
		console.log(rows);
        console.log("rows : " + JSON.stringify(rows));      
        res.status(200).json(rows);
		res.end("success");
    });
});

//no3 get
router.get('/get3', function(req, res,next) {
	
	console.log("in router get3");
	var pc_id = req.query.pc_id;
	
    var sql = "SELECT Pc_event_name, Pc_event_award FROM Pc_event WHERE Pc_id =?";
    var params = [ pc_id];
    console.log("sql : "+sql);

    db.get().query(sql,  params, function (err, rows) {
		console.log('in db get()');
        if (err) return err;
  		console.log('in sql moon');
		console.log(rows);
        console.log("rows : " + JSON.stringify(rows));      
        res.status(200).json(rows);
		res.end("success");
    });
});

//no4 get
router.get('/get4', function(req, res,next) {
	
	console.log("in router post list");
	var pc_id = req.query.pc_id;
	
    var sql = "SELECT Pc_food_name, Pc_food_money FROM Pc_food WHERE Pc_id = ?";
    var params = [ pc_id];
    console.log("sql : "+sql);

    db.get().query(sql,  params, function (err, rows) {
		console.log('in db get()');
        if (err) return err;
  		console.log('in sql moon');
		console.log(rows);
        console.log("rows : " + JSON.stringify(rows));      
        res.status(200).json(rows);
		res.end("success");
    });
});

module.exports = router;